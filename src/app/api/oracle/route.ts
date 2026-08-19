import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { philosophicalData } from '@/lib/data/philosophical-data';
import { BASE_STYLE, buildAuthorBriefing } from '@/lib/prompts/voice';
import { getExposition, getVoice } from '@/lib/data/corpus';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { conceptId, message, conversationHistory = [] } = await request.json();

    if (!conceptId || !message) {
      return NextResponse.json(
        { error: 'Concept ID and message are required' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    const concept = philosophicalData[conceptId];
    if (!concept) {
      return NextResponse.json(
        { error: 'Concept not found' },
        { status: 404 }
      );
    }

    if (concept.type !== 'philosopher' && concept.type !== 'scientist') {
      return NextResponse.json(
        { error: 'El diálogo solo está disponible para filósofos y científicos' },
        { status: 400 }
      );
    }

    // Build the conversation context
    let conversationContext = '';
    if (conversationHistory.length > 0) {
      conversationContext = conversationHistory
        .map((msg: { speaker: string; text: string }) => `${msg.speaker === 'user' ? 'Usuario' : concept.name}: ${msg.text}`)
        .join('\n');
    }

    // Create the system prompt for the philosopher/scientist
    /* El informe sustituye al volcado de la ficha completa: antes se enviaban
       coreIdea, psychologyLink y methodologyLink enteros en cada turno. */
    const briefing = buildAuthorBriefing({
      name: concept.name,
      exposition: getExposition(conceptId),
      voice: getVoice(conceptId),
      question: message,
      fallbackCoreIdea: concept.coreIdea,
    });

    const systemPrompt = `Respondes como ${concept.name}, ${concept.type === 'philosopher' ? 'filósofo' : 'científico'} de ${concept.year > 0 ? concept.year : `${Math.abs(concept.year)} a.C.`}.

${briefing}

${BASE_STYLE}

EXTENSIÓN: entre 150 y 300 palabras. Responde a lo que se te pregunta; no abras temas que no vienen al caso.
${conversationContext ? `\nLo dicho hasta aquí:\n${conversationContext}\n` : ''}
Pregunta: ${message}`;

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    const result = await model.generateContent(systemPrompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      response: text,
      success: true,
    });

  } catch (error: unknown) {
    console.error('Error en el diálogo:', error);
    
    return NextResponse.json(
      { 
        error: 'No se pudo generar la respuesta',
        details: error instanceof Error ? error.message : 'Unknown error',
        success: false,
      },
      { status: 500 }
    );
  }
}