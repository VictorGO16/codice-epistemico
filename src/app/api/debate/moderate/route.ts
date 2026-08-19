import { NextRequest, NextResponse } from 'next/server';
import { MODERATOR_VOICE } from '@/lib/prompts/voice';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface ConversationMessage {
  participantName: string;
  text: string;
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { topic, conversationHistory, userInput } = await request.json();

    if (!topic) {
      return NextResponse.json(
        { success: false, error: 'Tema es requerido' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'API key no configurada' },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

    // Build conversation history
    const historyContext = conversationHistory.length > 0
      ? `\n\nHistorial del debate:\n${conversationHistory.map((msg: ConversationMessage) => 
          `${msg.participantName}: ${msg.text}`
        ).join('\n\n')}`
      : '';

    // Handle user input if provided
    const userInputContext = userInput 
      ? `\n\nInstrucción del usuario para dirigir el debate:\n"${userInput}"`
      : '';

    const prompt = `Moderas una discusión sobre: "${topic}"${historyContext}${userInputContext}

${MODERATOR_VOICE}

ESTA INTERVENCIÓN: nombra el punto exacto en que los participantes discrepan y formula la pregunta que los obliga a pronunciarse sobre él. Si hay una indicación de quien modera desde fuera, redirige la discusión hacia ahí sin comentarla.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

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