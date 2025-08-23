import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { topic, participants, messages } = await request.json();

    if (!topic || !participants || !messages) {
      return NextResponse.json(
        { success: false, error: 'Datos del debate requeridos' },
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

    // Build the debate transcript
    const transcript = messages.map((msg: { participantName: string; text: string }) => 
      `${msg.participantName}: ${msg.text}`
    ).join('\n\n');

    const participantsList = participants.map((p: { name: string; type: string }) => 
      `- ${p.name} (${p.type === 'philosopher' ? 'Filósofo' : 'Científico'})`
    ).join('\n');

    const analysisPrompt = `Eres un experto moderador y analista de debates filosóficos. Analiza el siguiente debate y proporciona un análisis estructurado.

TEMA DEL DEBATE: ${topic}

PARTICIPANTES:
${participantsList}

TRANSCRIPCIÓN DEL DEBATE:
${transcript}

INSTRUCCIONES:
Analiza este debate filosófico y responde ÚNICAMENTE con un JSON válido en el siguiente formato exacto. NO agregues texto antes o después del JSON:

{
  "arguments": [
    {
      "id": "arg_1",
      "participantId": "id_del_participante",
      "participantName": "Nombre del Participante",
      "thesis": "Tesis principal del participante en 1-2 oraciones",
      "arguments": ["Argumento 1", "Argumento 2", "Argumento 3"],
      "refutations": ["Refutación a otro participante 1", "Refutación 2"],
      "strength": 8,
      "coherence": 9
    }
  ],
  "participantScores": {
    "participante_id": 8.5
  },
  "moderatorConclusion": "Conclusión del moderador sobre quién presentó los mejores argumentos y por qué. Máximo 250 palabras.",
  "overallAnalysis": "Análisis general del debate, calidad de los argumentos, coherencia filosófica y desarrollo del tema. Máximo 250 palabras."
}

CRITERIOS DE EVALUACIÓN:
- Strength (1-10): Fuerza lógica y persuasiva de los argumentos
- Coherence (1-10): Coherencia con la filosofía histórica del pensador
- Participant Scores (1-10): Evaluación general considerando argumentación, coherencia filosófica, y contribución al debate

IMPORTANTE: Responde SOLO con el JSON válido, sin markdown, sin explicaciones adicionales:`;

    const result = await model.generateContent(analysisPrompt);
    const response = result.response;
    let text = response.text();

    // Clean up the response to ensure it's valid JSON
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    // Additional cleanup for common JSON issues
    text = text.replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas
    text = text.replace(/([{,]\s*)(\w+):/g, '$1"$2":'); // Quote unquoted keys
    
    // Try to find JSON content if wrapped in other text
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      text = jsonMatch[0];
    }

    try {
      const analysis = JSON.parse(text);
      
      // Validate the structure
      if (!analysis.arguments || !analysis.participantScores || !analysis.moderatorConclusion || !analysis.overallAnalysis) {
        throw new Error('Estructura de análisis inválida');
      }

      return NextResponse.json({
        success: true,
        analysis,
      });

    } catch (parseError) {
      console.error('Error parsing analysis JSON:', parseError);
      console.error('Raw response:', text);
      
      // Fallback: create a basic analysis structure
      const fallbackAnalysis = {
        arguments: participants.map((p: { id: string; name: string }, index: number) => ({
          id: `arg_${index + 1}`,
          participantId: p.id,
          participantName: p.name,
          thesis: `${p.name} presentó argumentos desde su perspectiva filosófica única.`,
          arguments: ["Argumento principal basado en su filosofía"],
          refutations: [],
          strength: 7,
          coherence: 8
        })),
        participantScores: participants.reduce((scores: Record<string, number>, p: { id: string }) => {
          scores[p.id] = 7.5;
          return scores;
        }, {}),
        moderatorConclusion: "El debate mostró diferentes perspectivas filosóficas sobre el tema propuesto. Cada participante contribuyó desde su marco teórico específico.",
        overallAnalysis: "Este fue un debate enriquecedor que exploró múltiples dimensiones del tema desde diferentes tradiciones filosóficas."
      };

      return NextResponse.json({
        success: true,
        analysis: fallbackAnalysis,
      });
    }

  } catch (error: unknown) {
    console.error('Error in debate analysis API:', error);
    
    let errorMessage = 'Error interno del servidor';
    let statusCode = 500;
    
    if (error instanceof Error) {
      errorMessage = error.message;
      
      if (error.message.includes('API_KEY')) {
        errorMessage = 'Error de configuración de API';
      } else if (error.message.includes('quota') || error.message.includes('limit')) {
        errorMessage = 'Límite de API alcanzado. Intenta de nuevo más tarde.';
        statusCode = 429;
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