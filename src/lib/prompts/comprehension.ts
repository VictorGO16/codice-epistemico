import type { Turn } from '@/lib/ai/client';

/**
 * Etapa de comprensión.
 *
 * Lee la conversación y devuelve una orden de trabajo para quien redacta. No
 * escribe nada que el estudiante vaya a leer. Existe porque el pipe anterior
 * no tenía ninguna representación de la conversación: cada turno era un
 * arranque en frío que producía una exposición nueva.
 */

export type Intencion =
  | 'dato'
  | 'explicacion'
  | 'opinion'
  | 'provocacion'
  | 'seguimiento'
  | 'saludo';

export type Largo = 'muy_corta' | 'corta' | 'media' | 'larga';

export type Registro = 'neutro' | 'coloquial' | 'hostil' | 'apurado';

export interface WorkOrder {
  pide: string;
  intencion: Intencion;
  referencias: { mencion: string; resuelve: string }[];
  respondible_directo: boolean;
  respuesta_directa: string;
  largo: Largo;
  nociones: string[];
  ya_dicho: string[];
  registro: Registro;
  aviso: string;
}

export const WORK_ORDER_SCHEMA: Record<string, unknown> = {
  type: 'object',
  properties: {
    pide: {
      type: 'string',
      description: 'Qué se está pidiendo realmente, en una frase.',
    },
    intencion: {
      type: 'string',
      enum: ['dato', 'explicacion', 'opinion', 'provocacion', 'seguimiento', 'saludo'],
    },
    referencias: {
      type: 'array',
      description: 'Menciones indirectas del último mensaje y a qué resuelven.',
      items: {
        type: 'object',
        properties: {
          mencion: { type: 'string' },
          resuelve: { type: 'string' },
        },
        required: ['mencion', 'resuelve'],
      },
    },
    respondible_directo: {
      type: 'boolean',
      description: 'Si existe una respuesta breve y concreta (un nombre, una fecha, un sí o un no).',
    },
    respuesta_directa: {
      type: 'string',
      description: 'Esa respuesta en pocas palabras. Cadena vacía si no la hay.',
    },
    largo: { type: 'string', enum: ['muy_corta', 'corta', 'media', 'larga'] },
    nociones: {
      type: 'array',
      description: 'Nociones de la lista ofrecida que hacen falta. Vacío si ninguna.',
      items: { type: 'string' },
    },
    ya_dicho: {
      type: 'array',
      description: 'Asuntos que el autor ya desarrolló en esta conversación y no debe repetir.',
      items: { type: 'string' },
    },
    registro: { type: 'string', enum: ['neutro', 'coloquial', 'hostil', 'apurado'] },
    aviso: {
      type: 'string',
      description: 'Una línea de advertencia para quien redacta. Vacío si no hace falta.',
    },
  },
  required: [
    'pide',
    'intencion',
    'referencias',
    'respondible_directo',
    'respuesta_directa',
    'largo',
    'nociones',
    'ya_dicho',
    'registro',
    'aviso',
  ],
};

export function routerInstruction(authorName: string, notionTerms: string[]): string {
  return `Preparas el trabajo de otro modelo que va a responder haciéndose pasar por ${authorName}. Tú no escribes esa respuesta ni hablas como él. Devuelves una orden de trabajo en JSON.

Lees la conversación completa y el último mensaje del estudiante, y determinas:

- pide: qué se está preguntando realmente, en una frase y en tus palabras. Si el mensaje es confuso o está en jerga, tradúcelo.
- referencias: toda mención indirecta y a qué resuelve. Ejemplo: "el weón que dejó la cagá" en una conversación con Aristóteles resuelve a "Alejandro Magno, su discípulo". Resuélvelas con lo que sabes del autor y de la historia. Si el estudiante ya reclamó que no le contestaron, eso también es información.
- respondible_directo y respuesta_directa: si la pregunta tiene una respuesta breve y concreta, dila. Es lo que evita que el otro modelo dé vueltas.
- largo: cuánto merece la respuesta. Una pregunta por un dato es muy_corta o corta. Solo es larga si se pide desarrollo explícito.
- nociones: elige de esta lista únicamente las que hagan falta para responder este mensaje, y deja el arreglo vacío si ninguna hace falta. No las elijas porque sean célebres. Lista: ${notionTerms.join(' · ') || 'ninguna'}.
- ya_dicho: qué asuntos ya desarrolló el autor en turnos anteriores. Sirve para que no los repita.
- registro: cómo escribe el estudiante.
- aviso: una sola línea si hay algo que corregir del turno anterior, por ejemplo que evadió la pregunta, que repitió una fórmula o que se puso a moralizar. Vacío si no hace falta.

Sé literal y breve. No inventes temas que el estudiante no mencionó.`;
}

export function routerTurns(history: Turn[], message: string): Turn[] {
  const conversation = history
    .map((t) => `${t.role === 'user' ? 'Estudiante' : 'Autor'}: ${t.text}`)
    .join('\n\n');

  return [
    {
      role: 'user',
      text: `${conversation ? `Conversación hasta aquí:\n\n${conversation}\n\n` : ''}Último mensaje del estudiante:\n\n${message}`,
    },
  ];
}
