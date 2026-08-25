import { GoogleGenAI, ThinkingLevel } from '@google/genai';

/**
 * Único punto donde se llama al modelo.
 *
 * Los modelos 3.x ya no aceptan temperature, topP, topK ni thinkingBudget: el
 * control de esfuerzo es thinkingLevel. Centralizarlo evita que cada ruta
 * arrastre su propia configuración.
 */

let cached: GoogleGenAI | null = null;

function client(): GoogleGenAI {
  if (!cached) {
    cached = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
  }
  return cached;
}

export function hasApiKey(): boolean {
  return Boolean(process.env.GEMINI_API_KEY);
}

export interface Turn {
  role: 'user' | 'model';
  text: string;
}

function toContents(turns: Turn[]) {
  return turns.map((t) => ({ role: t.role, parts: [{ text: t.text }] }));
}

export async function generateText(params: {
  model: string;
  systemInstruction?: string;
  turns: Turn[];
  thinkingLevel?: ThinkingLevel;
  maxOutputTokens?: number;
}): Promise<string> {
  const { model, systemInstruction, turns, thinkingLevel, maxOutputTokens } = params;

  const response = await client().models.generateContent({
    model,
    contents: toContents(turns),
    config: {
      ...(systemInstruction ? { systemInstruction } : {}),
      ...(maxOutputTokens ? { maxOutputTokens } : {}),
      // thinkingLevel solo existe en los modelos 3.x.
      ...(thinkingLevel ? { thinkingConfig: { thinkingLevel } } : {}),
    },
  });

  return response.text ?? '';
}

/**
 * Igual que generateText, pero entrega el texto por trozos a medida que el
 * modelo lo produce. La primera palabra sale cuando el modelo la escribió, no
 * cuando terminó la respuesta entera.
 */
export async function* streamText(params: {
  model: string;
  systemInstruction?: string;
  turns: Turn[];
  thinkingLevel?: ThinkingLevel;
  maxOutputTokens?: number;
}): AsyncGenerator<string> {
  const { model, systemInstruction, turns, thinkingLevel, maxOutputTokens } = params;

  const stream = await client().models.generateContentStream({
    model,
    contents: toContents(turns),
    config: {
      ...(systemInstruction ? { systemInstruction } : {}),
      ...(maxOutputTokens ? { maxOutputTokens } : {}),
      ...(thinkingLevel ? { thinkingConfig: { thinkingLevel } } : {}),
    },
  });

  for await (const chunk of stream) {
    const text = chunk.text;
    if (text) yield text;
  }
}

/**
 * Salida estructurada. Si el modelo devuelve algo que no parsea, se devuelve
 * null y quien llama sigue sin la orden de trabajo: la conversación nunca se
 * cae por culpa de la etapa de comprensión.
 */
export async function generateJson<T>(params: {
  model: string;
  systemInstruction: string;
  turns: Turn[];
  schema: Record<string, unknown>;
}): Promise<T | null> {
  const { model, systemInstruction, turns, schema } = params;

  try {
    const response = await client().models.generateContent({
      model,
      contents: toContents(turns),
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: schema,
      },
    });

    const raw = (response.text ?? '').trim();
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch (error) {
    console.warn('Etapa de comprensión no disponible:', error);
    return null;
  }
}
