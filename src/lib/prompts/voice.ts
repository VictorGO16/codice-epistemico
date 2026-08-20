import type { ConceptExposition, AuthorVoice } from '@/types/philosophical';
import type { WorkOrder } from './comprehension';

/**
 * Instrucción para el modelo que redacta.
 *
 * Antes se enviaban unas 1500 palabras por turno: ficha completa, siete
 * movimientos argumentales, cinco compromisos, diez términos de léxico, cinco
 * cosas que evitar y dos ejemplos. A ese volumen las reglas se diluyen y el
 * modelo termina desplegando material en vez de conversar. Aquí la instrucción
 * es corta y el contexto que sí importa, la conversación literal, viaja aparte.
 */

/** Reglas de salida. Es lo único que se manda siempre. */
const RULES = `REGLAS
- Entra directo en el argumento. Sin saludos, sin presentarte, sin anunciar lo que vas a hacer, sin elogiar la pregunta.
- Prosa continua. Nada de listas numeradas, viñetas, titulares, emojis ni gestos entre asteriscos.
- Si la pregunta tiene respuesta directa, esa respuesta va en la primera oración. Lo demás viene después y solo si aporta.
- Ningún tema queda fuera: comida, drogas, sexo, deporte, política de hoy, una tontería de internet. Se abordan con tus propias categorías. Nunca digas que el asunto no te compete ni pidas volver a lo filosófico.
- No moralices, no adviertas y no comentes el tono de quien pregunta. Si te insulta o te apura, responde el contenido.
- No repitas lo ya dicho ni abras igual que el turno anterior.`;

/** Las mismas reglas de salida, para las rutas que no usan la voz de un autor. */
export const BASE_STYLE = RULES;

/** Cómo debe sonar un autor sin ficha de voz en el corpus. */
export function authorVoice(name: string, extra?: string): string {
  return `Escribe como escribía ${name}: su léxico, la construcción de sus periodos y sus recursos habituales. No uses arcaísmos de adorno ni castellano fingidamente antiguo. Razona con las categorías de que disponía, sin citar acontecimientos posteriores a su horizonte.${extra ? `\n${extra}` : ''}`;
}

/** El moderador levanta acta del desacuerdo; no presenta ni felicita. */
export const MODERATOR_VOICE = `FUNCIÓN DEL MODERADOR:
- Tu única tarea es hacer visible el desacuerdo: nombrar con precisión el punto exacto en disputa, o formular la pregunta que obliga a los participantes a pronunciarse sobre él.
- Prohibido felicitar, valorar la calidad de las intervenciones o celebrar el debate.
- Prohibido dar la bienvenida con solemnidad, anunciar fases o resumir por resumir.
- Escribe en tono de acta: frases breves, indicativo, sin adjetivación entusiasta.
- Máximo 60 palabras.`;

const LENGTH_HINT: Record<WorkOrder['largo'], string> = {
  muy_corta: 'Una o dos frases. No más.',
  corta: 'Entre tres y cinco frases.',
  media: 'Hasta 180 palabras.',
  larga: 'Hasta 320 palabras.',
};

/** Las marcas [[clave|texto]] son del glosario de la pantalla, no del modelo. */
function plain(text: string): string {
  return text.replace(/\[\[([a-z0-9_]+)(?:\|([^\]]+))?\]\]/gi, (_, key, label) => label ?? key);
}

function normalize(term: string): string {
  return term
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim();
}

/** Las nociones que pidió la etapa de comprensión, por nombre aproximado. */
function selectedNotions(exposition: ConceptExposition, wanted: string[]) {
  if (!wanted.length) return [];
  const keys = wanted.map(normalize).filter(Boolean);
  return exposition.keyNotions.filter((n) => {
    const term = normalize(n.term);
    return keys.some((k) => term.includes(k) || k.includes(term));
  });
}

export function buildWriterInstruction(params: {
  name: string;
  year: number;
  kind: 'philosopher' | 'scientist' | string;
  exposition?: ConceptExposition;
  voice?: AuthorVoice;
  /** Orden de trabajo de la etapa de comprensión. Ausente en el debate. */
  order?: WorkOrder | null;
  /** Primer turno de la conversación: aún no hay prosa propia de referencia. */
  firstTurn: boolean;
  fallbackCoreIdea?: string;
}): string {
  const { name, year, kind, exposition, voice, order, firstTurn, fallbackCoreIdea } = params;
  const parts: string[] = [];

  const era = year > 0 ? `el año ${year}` : `${Math.abs(year)} a.C.`;
  parts.push(
    `Respondes como ${name}, ${kind === 'scientist' ? 'científico' : 'filósofo'} de ${era}, en primera persona.`,
  );

  if (voice) {
    parts.push(`TU PROSA\n${voice.register}`);
  } else {
    parts.push(`TU PROSA\n${authorVoice(name)}`);
  }

  if (exposition) {
    parts.push(`TU TESIS\n${plain(exposition.thesis)}`);
  } else if (fallbackCoreIdea) {
    parts.push(`TU TESIS\n${fallbackCoreIdea.slice(0, 400)}`);
  }

  if (exposition && order?.nociones?.length) {
    const notions = selectedNotions(exposition, order.nociones);
    if (notions.length) {
      parts.push(
        'NOCIONES QUE HACEN FALTA AQUÍ\n' +
          notions.map((n) => `- ${n.term}: ${plain(n.gloss)}`).join('\n'),
      );
    }
  }

  /* Los compromisos solo entran cuando alguien empuja al autor a ceder. En el
     resto de los turnos son cinco imperativos que compiten con las reglas. */
  if (voice && (order?.intencion === 'opinion' || order?.intencion === 'provocacion')) {
    parts.push('NO CONCEDES\n' + voice.commitments.map((c) => `- ${c}`).join('\n'));
  }

  /* Los anclajes solo en el primer turno. Desde el segundo, los turnos propios
     que van en el historial son mejor referencia de estilo, y reinyectar el
     ejemplo convierte su forma en plantilla. */
  if (voice && firstTurn) {
    parts.push(
      `MUESTRA DE TU PROSA\nDe aquí se toma el vocabulario y el largo de las frases, no la estructura del turno ni la frase con que empieza.\n«${voice.styleAnchor}»`,
    );
    parts.push(
      `ANTE UN ASUNTO QUE NO ES TUYO\nRetén la conducta, no la forma: no rechaza el asunto, no advierte y no moraliza.\n«${voice.scopeAnchor}»`,
    );
  }

  if (order) {
    const brief: string[] = [`- Se te pregunta: ${order.pide}`];

    if (order.referencias.length) {
      brief.push(
        '- Ya está resuelto a qué se refiere: ' +
          order.referencias.map((r) => `"${r.mencion}" es ${r.resuelve}`).join('; ') +
          '. Dalo por sabido y no pidas que te lo describan.',
      );
    }
    if (order.respondible_directo && order.respuesta_directa) {
      brief.push(
        `- La respuesta es: ${order.respuesta_directa}. Va en tu primera oración, con tus palabras.`,
      );
    }
    if (order.ya_dicho.length) {
      brief.push(`- Ya desarrollaste esto y no lo repites: ${order.ya_dicho.join('; ')}.`);
    }
    if (order.aviso) {
      brief.push(`- Corrige esto del turno anterior: ${order.aviso}`);
    }
    if (order.intencion === 'saludo') {
      brief.push(
        '- Es un saludo o una frase de trato, no una pregunta. Devuélvelo en una línea, en tu registro, y espera. No lo conviertas en asunto de examen.',
      );
    }
    brief.push(`- Extensión: ${LENGTH_HINT[order.largo] ?? LENGTH_HINT.media}`);

    parts.push('ESTE TURNO\n' + brief.join('\n'));
  }

  parts.push(RULES);

  return parts.join('\n\n');
}
