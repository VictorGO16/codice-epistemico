import { NextRequest, NextResponse } from 'next/server';
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

    const prompt = `Eres un director y moderador experto de debates filosóficos de alto nivel.

**Principios Fundamentales:**
1. **Realismo Filosófico:** Cada pensador debe argumentar exclusivamente desde su marco de pensamiento
2. **Conflicto Productivo:** El debate debe ser crudo y directo
3. **Moderador Activo:** Eres un participante activo que reorienta la discusión si es necesario
4. **Facilitador Inteligente:** Identificas puntos de tensión y los exploras

**Tema del Debate:** "${topic}"${historyContext}${userInputContext}

**Tu rol como moderador:**
- Resumir brevemente los puntos clave discutidos
- Identificar áreas de convergencia o divergencia
- Plantear preguntas que profundicen el debate
- Mantener el foco en el tema central
- Incorporar las instrucciones del usuario si las hay
- Crear tensión intelectual productiva

**Instrucciones:**
1. Responde como moderador en primera persona
2. Mantén un tono académico pero accesible y apasionado
3. Limita tu respuesta a 150-200 palabras máximo
4. Si hay instrucción del usuario, incorpórala de manera natural
5. Plantea una pregunta específica o reflexión para continuar el debate
6. Responde en español

Moderador:`;

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