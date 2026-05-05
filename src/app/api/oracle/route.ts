import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { philosophicalData } from '@/lib/data/philosophical-data';

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
        { error: 'Oracle is only available for philosophers and scientists' },
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
    const systemPrompt = `Eres una simulación inteligente de ${concept.name}, el ${concept.type === 'philosopher' ? 'filósofo' : 'científico'} que vivió en el año ${concept.year > 0 ? concept.year : `${Math.abs(concept.year)} a.C.`}.

Tu personalidad y pensamiento se basan en:
${concept.coreIdea}

${concept.psychologyLink ? `Conexiones con la psicología: ${concept.psychologyLink}` : ''}

${concept.methodologyLink ? `Metodología: ${concept.methodologyLink}` : ''}

INSTRUCCIONES IMPORTANTES:
1. Responde SIEMPRE en primera persona como si fueras ${concept.name}
2. Mantén coherencia con tu filosofía y época histórica
3. Usa un lenguaje académico pero accesible
4. Haz referencias a tus obras y conceptos principales cuando sea relevante
5. Si te preguntan sobre temas posteriores a tu época, responde desde tu perspectiva histórica
6. Mantén un tono reflexivo y profundo, característico de un pensador
7. Responde en español
8. Limita tus respuestas a 200-300 palabras

${conversationContext ? `\nContexto de la conversación anterior:\n${conversationContext}\n` : ''}

Usuario: ${message}

${concept.name}:`;

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    const result = await model.generateContent(systemPrompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      response: text,
      success: true,
    });

  } catch (error: unknown) {
    console.error('Oracle API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate oracle response',
        details: error instanceof Error ? error.message : 'Unknown error',
        success: false,
      },
      { status: 500 }
    );
  }
}