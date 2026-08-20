import { NextRequest, NextResponse } from 'next/server';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { getExposition, getVoice } from '@/lib/data/corpus';
import { buildWriterInstruction } from '@/lib/prompts/voice';
import {
  WORK_ORDER_SCHEMA,
  WorkOrder,
  routerInstruction,
  routerTurns,
} from '@/lib/prompts/comprehension';
import { generateText, generateJson, hasApiKey, Turn } from '@/lib/ai/client';
import { WRITER_THINKING } from '@/lib/ai/models';
import { resolveTier } from '@/lib/ai/quota';

/**
 * Dos etapas.
 *
 * 1. Comprensión, en el modelo barato y con salida JSON: qué se pregunta, a
 *    qué resuelven las menciones, qué material hace falta, qué ya se dijo.
 * 2. Redacción, en el modelo bueno, con instrucción corta y la conversación
 *    literal completa. El historial no se resume: es lo que da el hilo.
 */

interface HistoryMessage {
  speaker: string;
  text: string;
}

export async function POST(request: NextRequest) {
  try {
    const {
      conceptId,
      message,
      conversationHistory = [],
      usedHighQuality = 0,
    } = await request.json();

    if (!conceptId || !message) {
      return NextResponse.json(
        { error: 'Concept ID and message are required' },
        { status: 400 },
      );
    }

    if (!hasApiKey()) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 },
      );
    }

    const concept = philosophicalData[conceptId];
    if (!concept) {
      return NextResponse.json({ error: 'Concept not found' }, { status: 404 });
    }

    if (concept.type !== 'philosopher' && concept.type !== 'scientist') {
      return NextResponse.json(
        { error: 'El diálogo solo está disponible para filósofos y científicos' },
        { status: 400 },
      );
    }

    const tier = resolveTier(Number(usedHighQuality) || 0, 'dialogue');

    const history: Turn[] = (conversationHistory as HistoryMessage[])
      .filter((msg) => msg?.text)
      .map((msg) => ({
        role: msg.speaker === 'user' ? ('user' as const) : ('model' as const),
        text: msg.text,
      }));

    const exposition = getExposition(conceptId);
    const voice = getVoice(conceptId);

    // Etapa 1. Si falla, la conversación sigue sin orden de trabajo.
    const order = await generateJson<WorkOrder>({
      model: tier.router,
      systemInstruction: routerInstruction(
        concept.name,
        (exposition?.keyNotions ?? []).map((n) => n.term),
      ),
      turns: routerTurns(history, message),
      schema: WORK_ORDER_SCHEMA,
    });

    // Etapa 2.
    const systemInstruction = buildWriterInstruction({
      name: concept.name,
      year: concept.year,
      kind: concept.type,
      exposition,
      voice,
      order,
      firstTurn: history.length === 0,
      fallbackCoreIdea: concept.coreIdea,
    });

    const text = await generateText({
      model: tier.writer,
      systemInstruction,
      turns: [...history, { role: 'user', text: message }],
      thinkingLevel: tier.degraded ? undefined : WRITER_THINKING,
      maxOutputTokens: 1400,
    });

    return NextResponse.json({
      response: text,
      success: true,
      tier: {
        model: tier.writer,
        degraded: tier.degraded,
        remaining: tier.remaining,
        warn: tier.warn,
        limit: tier.limit,
      },
    });
  } catch (error: unknown) {
    console.error('Error en el diálogo:', error);

    return NextResponse.json(
      {
        error: 'No se pudo generar la respuesta',
        details: error instanceof Error ? error.message : 'Unknown error',
        success: false,
      },
      { status: 500 },
    );
  }
}
