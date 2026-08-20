import { ThinkingLevel } from '@google/genai';

/**
 * Los dos modelos del sistema y para qué sirve cada uno.
 *
 * El caro escribe lo único que el estudiante lee. El barato hace el trabajo
 * mecánico: entender qué se está preguntando, resolver a qué se refieren las
 * menciones y elegir qué material del corpus corresponde adjuntar. Ese trabajo
 * devuelve JSON, no prosa, así que un modelo barato lo hace bien.
 */

/** Redacta la respuesta que se ve en pantalla. */
export const MODEL_WRITER = 'gemini-3.7-flash';

/** Comprende, resuelve referencias y selecciona material. También es el modelo
 *  de reemplazo cuando se agota la cuota de calidad alta. */
export const MODEL_ROUTER = 'gemini-2.5-flash-lite';

/**
 * Nivel de razonamiento del redactor.
 * Para conversación en vivo interesa la latencia, y la dificultad está en el
 * registro y no en el razonamiento de varios pasos.
 */
export const WRITER_THINKING = ThinkingLevel.LOW;
