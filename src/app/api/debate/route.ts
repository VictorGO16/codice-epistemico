import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Participant {
  name: string;
  year: number;
  coreIdea: string;
}

interface ConversationMessage {
  participantName: string;
  text: string;
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');



export async function POST(request: NextRequest) {
  try {
    const { topic, participant, otherParticipants, conversationHistory } = await request.json();

    if (!topic || !participant) {
      return NextResponse.json(
        { success: false, error: 'Tema y participante son requeridos' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'API key no configurada' },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-05-20' });

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

    const prompt = `Eres una simulación inteligente de ${participant.name}, el ${participant.type === 'philosopher' ? 'filósofo' : 'científico'} que vivió en el año ${participant.year > 0 ? participant.year : `${Math.abs(participant.year)} a.C.`}.

Tu perspectiva filosófica central:
${participant.coreIdea}

TEMA DEL DEBATE: ${topic}${otherParticipantsContext}${historyContext}

INSTRUCCIONES IMPORTANTES:
1. Responde SIEMPRE en primera persona como si fueras ${participant.name}
2. Mantén coherencia con tu filosofía y época histórica específica
3. ${isOpeningStatement ? 'Esta es tu DECLARACIÓN DE APERTURA - presenta tu posición inicial sobre el tema' : 'Responde a los argumentos previos desde tu perspectiva única'}
4. Haz referencias a tus conceptos y métodos principales cuando sea relevante
5. Mantén un tono académico pero accesible y apasionado
6. Limita tu respuesta a 150-200 palabras máximo
7. No uses conceptos o terminología que no existían en tu época
8. Responde en español
9. ${isOpeningStatement ? 'Establece claramente tu posición sobre el tema' : 'Puedes estar de acuerdo, en desacuerdo, o matizar los puntos de otros participantes'}

${participant.name}:`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      success: true,
      response: text,
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