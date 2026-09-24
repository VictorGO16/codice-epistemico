import { NextRequest, NextResponse } from 'next/server';
import { ANALYSIS_STYLE } from '@/lib/prompts/voice';
import { generateText, hasApiKey } from '@/lib/ai/client';
import { WRITER_THINKING } from '@/lib/ai/models';
import { resolveTier } from '@/lib/ai/quota';
import { SHOW_DEBATE_METRICS_AND_WINNER } from '@/lib/config/features';

export async function POST(request: NextRequest) {
  try {
    const { topic, participants, messages, usedHighQuality = 0 } = await request.json();

    if (!topic || !participants || !messages) {
      return NextResponse.json(
        { success: false, error: 'Datos del debate requeridos' },
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

    // Build the debate transcript
    const transcript = messages.map((msg: { participantName: string; text: string }) =>
      `${msg.participantName}: ${msg.text}`
    ).join('\n\n');

    const participantsList = participants.map((p: { name: string; type: string }) => 
      `- ${p.name} (${p.type === 'philosopher' ? 'Filósofo' : 'Científico'})`
    ).join('\n');

    const competitiveInstructions = SHOW_DEBATE_METRICS_AND_WINNER
      ? `
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
  "overallAnalysis": "Análisis general del debate, calidad de los argumentos, coherencia filosófica y desarrollo del tema. Máximo 250 palabras."`
      : `
  "arguments": [
    {
      "id": "arg_1",
      "participantId": "id_del_participante",
      "participantName": "Nombre del Participante",
      "thesis": "Tesis principal del participante en 1-2 oraciones",
      "arguments": ["Argumento 1", "Argumento 2", "Argumento 3"],
      "refutations": ["Refutación a otro participante 1", "Refutación 2"]
    }
  ],
  "moderatorConclusion": "Síntesis neutral de los principales acuerdos, desacuerdos y tensiones conceptuales. No declares ganadores ni jerarquices participantes. Máximo 250 palabras.",
  "overallAnalysis": "Análisis general del desarrollo conceptual del debate. Describe aportes, contrastes y preguntas abiertas sin puntuar, rankear ni declarar ganadores. Máximo 250 palabras."`;

    const evaluationCriteria = SHOW_DEBATE_METRICS_AND_WINNER
      ? `
CRITERIOS DE EVALUACIÓN:
- Strength (1-10): Fuerza lógica y persuasiva de los argumentos
- Coherence (1-10): Coherencia con la filosofía histórica del pensador
- Participant Scores (1-10): Evaluación general considerando argumentación, coherencia filosófica, y contribución al debate`
      : `
ENFOQUE DEL ANÁLISIS:
- Describe las tesis, argumentos y refutaciones sin asignar puntuaciones.
- Explica convergencias, desacuerdos y tensiones conceptuales.
- No establezcas rankings, vencedores, mejores participantes ni equivalentes implícitos.`;

    const analysisPrompt = `Analiza el siguiente debate y entrega un análisis estructurado.

TEMA DEL DEBATE: ${topic}

PARTICIPANTES:
${participantsList}

TRANSCRIPCIÓN DEL DEBATE:
${transcript}

INSTRUCCIONES:
Analiza este debate filosófico y responde ÚNICAMENTE con un JSON válido en el siguiente formato exacto. NO agregues texto antes o después del JSON:

{${competitiveInstructions}
}
${evaluationCriteria}

IMPORTANTE: Responde SOLO con el JSON válido, sin markdown, sin explicaciones adicionales.`;

    let text = await generateText({
      model: tier.writer,
      systemInstruction: ANALYSIS_STYLE,
      turns: [{ role: 'user', text: analysisPrompt }],
      thinkingLevel: tier.degraded ? undefined : WRITER_THINKING,
    });

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
      const hasRequiredStructure = SHOW_DEBATE_METRICS_AND_WINNER
        ? analysis.arguments && analysis.participantScores && analysis.moderatorConclusion && analysis.overallAnalysis
        : analysis.arguments && analysis.moderatorConclusion && analysis.overallAnalysis;

      if (!hasRequiredStructure) {
        throw new Error('Estructura de análisis inválida');
      }

      return NextResponse.json({
        success: true,
        analysis,
        tier: {
          model: tier.writer,
          degraded: tier.degraded,
          remaining: tier.remaining,
          warn: tier.warn,
          limit: tier.limit,
        },
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
          ...(SHOW_DEBATE_METRICS_AND_WINNER ? { strength: 7, coherence: 8 } : {}),
        })),
        participantScores: SHOW_DEBATE_METRICS_AND_WINNER
          ? participants.reduce((scores: Record<string, number>, p: { id: string }) => {
              scores[p.id] = 7.5;
              return scores;
            }, {})
          : {},
        moderatorConclusion: SHOW_DEBATE_METRICS_AND_WINNER
          ? "El debate mostró diferentes perspectivas filosóficas sobre el tema propuesto. Cada participante contribuyó desde su marco teórico específico."
          : "El debate articuló distintas perspectivas filosóficas sobre el tema, con acuerdos y desacuerdos que pueden examinarse sin establecer una jerarquía entre los participantes.",
        overallAnalysis: "Este fue un debate enriquecedor que exploró múltiples dimensiones del tema desde diferentes tradiciones filosóficas."
      };

      return NextResponse.json({
        success: true,
        analysis: fallbackAnalysis,
        tier: {
          model: tier.writer,
          degraded: tier.degraded,
          remaining: tier.remaining,
          warn: tier.warn,
          limit: tier.limit,
        },
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
