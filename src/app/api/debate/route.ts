import { NextRequest, NextResponse } from 'next/server';
import { buildWriterInstruction } from '@/lib/prompts/voice';
import { getExposition, getVoice } from '@/lib/data/corpus';
import { generateText, hasApiKey } from '@/lib/ai/client';
import { WRITER_THINKING } from '@/lib/ai/models';
import { resolveTier } from '@/lib/ai/quota';

interface Participant {
  id: string;
  name: string;
  type: string;
  year: number;
  coreIdea: string;
}

interface ConversationMessage {
  participantName: string;
  text: string;
}

export async function POST(request: NextRequest) {
  try {
    const {
      topic,
      participant,
      otherParticipants,
      conversationHistory,
      usedHighQuality = 0,
    } = await request.json();

    if (!topic || !participant) {
      return NextResponse.json(
        { success: false, error: 'Tema y participante son requeridos' },
        { status: 400 }
      );
    }

    if (!hasApiKey()) {
      return NextResponse.json(
        { success: false, error: 'API key no configurada' },
        { status: 500 }
      );
    }

    const tier = resolveTier(Number(usedHighQuality) || 0, 'heavy');

    // Build context about other participants
    const otherParticipantsContext = otherParticipants.length > 0 
      ? `\n\nOtros participantes en este debate:\n${otherParticipants.map((p: Participant) => 
          `- ${p.name} (${p.year > 0 ? p.year : `${Math.abs(p.year)} a.C.`}): ${p.coreIdea.substring(0, 200)}...`
        ).join('\n')}`
      : '';

    // Build conversation history
    const historyContext = conversationHistory.length > 0
      ? `\n\nHistorial de la conversación:\n${conversationHistory.map((msg: ConversationMessage) => 
          `${msg.participantName}: ${msg.text}`
        ).join('\n\n')}`
      : '';

    const isOpeningStatement = conversationHistory.length === 0;

    const systemInstruction = buildWriterInstruction({
      name: participant.name,
      year: participant.year,
      kind: participant.type,
      exposition: getExposition(participant.id),
      voice: getVoice(participant.id),
      firstTurn: !(conversationHistory as ConversationMessage[]).some(
        (msg) => msg.participantName === participant.name,
      ),
      fallbackCoreIdea: participant.coreIdea,
    });

    const prompt = `Intervienes en una discusión sobre: ${topic}${otherParticipantsContext}${historyContext}

${isOpeningStatement
  ? 'ESTA INTERVENCIÓN: fija tu posición. Una tesis y las razones que la sostienen. No anuncies que vas a fijar tu posición: fíjala.'
  : 'ESTA INTERVENCIÓN: responde a lo que han dicho los demás. Cita el argumento concreto que discutes antes de refutarlo o aceptarlo. No repitas tu posición inicial.'}

EXTENSIÓN: entre 120 y 200 palabras.`;

    const text = await generateText({
      model: tier.writer,
      systemInstruction,
      turns: [{ role: 'user', text: prompt }],
      thinkingLevel: tier.degraded ? undefined : WRITER_THINKING,
    });

    return NextResponse.json({
      success: true,
      response: text,
      tier: {
        model: tier.writer,
        degraded: tier.degraded,
        remaining: tier.remaining,
        warn: tier.warn,
        limit: tier.limit,
      },
    });

  } catch (error: unknown) {
    console.error('Error in debate API:', error);
    
    let errorMessage = 'Error interno del servidor';
    let statusCode = 500;
    
    if (error instanceof Error) {
      errorMessage = error.message;
      
      // Handle specific Google AI errors
      if (error.message.includes('API_KEY')) {
        errorMessage = 'Error de configuración de API';
        statusCode = 500;
      } else if (error.message.includes('quota') || error.message.includes('limit')) {
        errorMessage = 'Límite de API alcanzado. Intenta de nuevo más tarde.';
        statusCode = 429;
      } else if (error.message.includes('safety')) {
        errorMessage = 'Contenido bloqueado por filtros de seguridad';
        statusCode = 400;
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: statusCode }
    );
  }
}