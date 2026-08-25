import { NextRequest, NextResponse } from 'next/server';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { authorInstruction } from '@/lib/prompts/voice';
import { generateText, hasApiKey, Turn } from '@/lib/ai/client';
import { WRITER_THINKING } from '@/lib/ai/models';
import { resolveTier } from '@/lib/ai/quota';

/**
 * Una sola llamada.
 *
 * La instrucción de sistema es la persona del autor y nada más. El historial
 * va literal, en turnos con rol, porque es lo que sostiene el hilo. No hay
 * etapa intermedia que resuma la conversación ni que le dicte al autor qué
 * hacer con ella: cualquier cosa que se le diga en modo imperativo lo devuelve
 * a ser un asistente, y esa es justamente la figura que no debe existir.
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

    const text = await generateText({
      model: tier.writer,
      systemInstruction: authorInstruction(concept.name),
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
