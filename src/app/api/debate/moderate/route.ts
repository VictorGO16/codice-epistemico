import { NextRequest, NextResponse } from 'next/server';
import { MODERATOR_VOICE } from '@/lib/prompts/voice';
import { generateText, hasApiKey } from '@/lib/ai/client';
import { MODEL_ROUTER } from '@/lib/ai/models';

interface ConversationMessage {
  participantName: string;
  text: string;
}

export async function POST(request: NextRequest) {
  try {
    const { topic, conversationHistory, userInput } = await request.json();

    if (!topic) {
      return NextResponse.json(
        { success: false, error: 'Tema es requerido' },
        { status: 400 }
      );
    }

    if (!hasApiKey()) {
      return NextResponse.json(
        { success: false, error: 'API key no configurada' },
        { status: 500 }
      );
    }

    // Build conversation history
    const historyContext = conversationHistory.length > 0
      ? `\n\nHistorial del debate:\n${conversationHistory.map((msg: ConversationMessage) => 
          `${msg.participantName}: ${msg.text}`
        ).join('\n\n')}`
      : '';

    // Handle user input if provided
    const userInputContext = userInput 
      ? `\n\nLo que pidió quien sigue el debate:\n"${userInput}"`
      : '';

    const prompt = `Discusión sobre: "${topic}"${historyContext}${userInputContext}

Ahora interviene el moderador: nombra el punto exacto en que los participantes discrepan y formula la pregunta que los obliga a pronunciarse sobre él. Si quien sigue el debate pidió algo, redirige hacia ahí sin comentarlo.`;

    const text = await generateText({
      model: MODEL_ROUTER,
      systemInstruction: MODERATOR_VOICE,
      turns: [{ role: 'user', text: prompt }],
    });

    return NextResponse.json({
      success: true,
      response: text,
    });

  } catch (error: unknown) {
    console.error('Error in moderator API:', error);
    
    let errorMessage = 'Error interno del servidor';
    let statusCode = 500;
    
    if (error instanceof Error) {
      errorMessage = error.message;
      
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