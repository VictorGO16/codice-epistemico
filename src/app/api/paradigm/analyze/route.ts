import { NextRequest, NextResponse } from 'next/server';
import { BASE_STYLE } from '@/lib/prompts/voice';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { philosophicalData } from '@/lib/data/philosophical-data';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { paradigmId, objectOfStudy } = await request.json();

    if (!paradigmId || !objectOfStudy) {
      return NextResponse.json(
        { success: false, error: 'Paradigma y objeto de estudio son requeridos' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'API key no configurada' },
        { status: 500 }
      );
    }

    const paradigm = philosophicalData[paradigmId];
    if (!paradigm) {
      return NextResponse.json(
        { success: false, error: 'Paradigma no encontrado' },
        { status: 404 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

    const analysisPrompt = `Analizas un objeto de estudio desde un paradigma epistemológico determinado, para un curso de epistemología y metodología.

PARADIGMA: ${paradigm.name}
DESCRIPCIÓN DEL PARADIGMA:
${paradigm.coreIdea}

${paradigm.psychologyLink ? `CONEXIONES CON LA PSICOLOGÍA:
${paradigm.psychologyLink}` : ''}

${paradigm.methodologyLink ? `METODOLOGÍA:
${paradigm.methodologyLink}` : ''}

OBJETO DE ESTUDIO: ${objectOfStudy}

INSTRUCCIONES:
Proporciona un análisis estructurado desde este paradigma en el siguiente formato JSON exacto:

{
  "ontological": "Análisis ontológico: ¿Qué es la naturaleza de este objeto de estudio según este paradigma? ¿Cómo existe? ¿Cuál es su realidad fundamental? (200-300 palabras)",
  "epistemological": "Análisis epistemológico: ¿Cómo se puede conocer este objeto de estudio según este paradigma? ¿Qué métodos de conocimiento son válidos? ¿Cuáles son los criterios de verdad? (200-300 palabras)",
  "methodological": "Análisis metodológico: ¿Qué métodos de investigación son apropiados para estudiar este objeto según este paradigma? ¿Cómo se debe abordar su estudio? ¿Qué técnicas y procedimientos son válidos? (200-300 palabras)",
  "researchProposal": "Propuesta de investigación: Diseña una propuesta concreta de investigación que refleje cómo se aplicarían los aspectos ontológicos, epistemológicos y metodológicos de este paradigma al estudio del objeto. Incluye objetivos, hipótesis (si aplica), metodología específica, y consideraciones éticas. (250-350 palabras)",
  "summary": "Síntesis: hilo que une las tres dimensiones anteriores. Qué queda decidido sobre el objeto al adoptar este paradigma, y qué queda fuera de su alcance. (150-200 palabras)"
}

CRITERIOS:
1. Coherencia estricta con los supuestos del paradigma, incluidas sus limitaciones: di también qué NO puede afirmar desde él.
2. Terminología propia del paradigma, usada con precisión y no como adorno.
3. Consecuencias concretas para el diseño de una investigación.
4. Respeta la extensión pedida en cada campo.
5. Separa los párrafos con saltos de línea dobles (\\n\\n). Usa listas con "- " cuando enumeres, y subtítulos con ## solo si la sección lo exige.

${BASE_STYLE}

Responde ÚNICAMENTE con el JSON válido, sin texto adicional:`;

    const result = await model.generateContent(analysisPrompt);
    const response = result.response;
    let text = response.text();

    // Clean up the response to ensure it's valid JSON
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    try {
      const analysis = JSON.parse(text);
      
      // Validate the structure
      if (!analysis.ontological || !analysis.epistemological || !analysis.methodological || !analysis.researchProposal || !analysis.summary) {
        throw new Error('Estructura de análisis inválida');
      }

      return NextResponse.json({
        success: true,
        analysis,
      });

    } catch (parseError) {
      console.error('Error parsing paradigm analysis JSON:', parseError);
      console.error('Raw response:', text);
      
      // Fallback: create a basic analysis structure
      const fallbackAnalysis = {
        ontological: `Desde la perspectiva de ${paradigm.name}, el objeto de estudio "${objectOfStudy}" se concibe como una entidad que debe ser analizada según los principios fundamentales de este paradigma.\n\nSu naturaleza ontológica se define por las características específicas que este enfoque filosófico considera relevantes para comprender la realidad.`,
        epistemological: `El conocimiento sobre "${objectOfStudy}" se obtiene siguiendo los criterios epistemológicos de ${paradigm.name}.\n\nEste paradigma establece métodos específicos para validar el conocimiento y determinar qué constituye una comprensión legítima del objeto de estudio.`,
        methodological: `La investigación de "${objectOfStudy}" desde ${paradigm.name} requiere el uso de métodos específicos que sean coherentes con los principios del paradigma.\n\nEstos métodos aseguran que el estudio sea válido y confiable según los estándares establecidos por este enfoque.`,
        researchProposal: `## Propuesta de Investigación\n\n**Objetivo General:**\nInvestigar "${objectOfStudy}" aplicando los principios de ${paradigm.name}.\n\n**Metodología:**\nAplicación de métodos coherentes con este paradigma para obtener conocimiento válido.\n\n**Consideraciones:**\nEsta propuesta refleja los fundamentos ontológicos, epistemológicos y metodológicos del paradigma seleccionado.`,
        summary: `Análisis de "${objectOfStudy}" desde ${paradigm.name}, en sus dimensiones ontológica, epistemológica y metodológica.\n\nNo se pudo generar el texto completo. Vuelve a intentarlo.`
      };

      return NextResponse.json({
        success: true,
        analysis: fallbackAnalysis,
      });
    }

  } catch (error: unknown) {
    console.error('Error in paradigm analysis API:', error);
    
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