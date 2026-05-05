import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { topic, participants, conversationHistory, userInput } = await request.json();

    if (!topic || !participants || participants.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Tema y participantes son requeridos' },
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

    // Build participant details
    const participantDetails = participants.map((p: { name: string; year: number; coreIdea: string }) => 
      `- ${p.name} (${p.year > 0 ? p.year : `${Math.abs(p.year)} a.C.`}): ${p.coreIdea.substring(0, 200)}...`
    ).join('\n');

    // Build conversation history
    const history = conversationHistory.length > 0
      ? conversationHistory.map((msg: { participantName: string; text: string }) => `${msg.participantName}: ${msg.text}`).join('\n\n---\n\n')
      : '';

    // Handle user input
    const userInputContext = userInput 
      ? `\n\n**Instrucción del Usuario para Continuar:**\n"${userInput}"`
      : '';

    const prompt = `Eres un director y simulador de debates filosóficos de alto nivel.

**Principios Fundamentales:**
1. **Realismo Filosófico:** Cada pensador debe argumentar exclusivamente desde su marco de pensamiento.
2. **Conflicto Productivo:** El debate debe ser crudo y directo.
3. **Moderador Estricto:** El moderador es un participante activo que reorienta la discusión si es necesario.
4. **Formato del Texto:** Dentro del campo 'text', formatea la respuesta con párrafos claros usando \\n\\n.

**Pensadores Participantes:**
${participantDetails}

**Tema del Debate:**
"${topic}"

**Historial del Debate hasta ahora:**
${history}${userInputContext}

**Instrucción:**
Continúa el debate basándote en la instrucción del usuario y el historial. Genera la siguiente ronda de intervenciones.

**Formato de Salida Obligatorio:**
Responde con un array de objetos JSON, donde cada objeto tiene las claves "speaker" y "text".

Ejemplo:
[
  {
    "speaker": "Moderador",
    "text": "Excelentes puntos. Ahora exploremos..."
  },
  {
    "speaker": "Kant",
    "text": "Desde mi perspectiva del imperativo categórico..."
  }
]`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Try to parse JSON response
    let parsedResponse;
    try {
      // Clean the response text to extract JSON
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON array found in response');
      }
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError);
      // Fallback: return a single moderator response
      parsedResponse = [{
        speaker: "Moderador",
        text: text.replace(/```json|```/g, '').trim()
      }];
    }

    return NextResponse.json({
      success: true,
      turns: parsedResponse,
    });

  } catch (error: unknown) {
    console.error('Error in continue debate API:', error);
    
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