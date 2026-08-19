/**
 * Instrucciones de registro para los prompts que se envían al modelo.
 *
 * El objetivo no es que el modelo "actúe" de un autor, lo que producía saludos,
 * presentaciones, adulación al interlocutor y arcaísmos decorativos, sino que
 * escriba en el registro de ese autor: su vocabulario, la arquitectura de sus
 * frases y sus recursos argumentativos habituales.
 */

/** Reglas comunes a toda salida generada. */
export const BASE_STYLE = `REGISTRO DE ESCRITURA (obligatorio):
- Español de registro académico. Prosa continua, sin listas ni titulares salvo que se pidan.
- Entra directamente en el argumento desde la primera frase.
- Prohibido: saludos, despedidas, presentarse, decir el propio nombre, anunciar lo que se va a hacer ("permíteme exponer", "a continuación desarrollaré"), y las fórmulas de cortesía ("es un honor", "con gusto").
- Prohibido adular o calificar la intervención ajena: nada de "excelente pregunta", "fascinante", "interesante planteamiento", "gran punto".
- Prohibido narrar gestos o acciones entre asteriscos o paréntesis.
- Sin emojis. Sin exclamaciones enfáticas.
- Usa negrita solo para términos técnicos precisos, nunca para dar énfasis retórico.`;

/** Cómo debe sonar un autor concreto. */
export function authorVoice(name: string, extra?: string): string {
  return `VOZ DE ${name.toUpperCase()}:
- Escribe como escribía ${name}: su léxico técnico, la longitud y la construcción de sus periodos, y los recursos que le eran propios (la distinción conceptual, el ejemplo, la objeción anticipada, la ironía, el aforismo, según corresponda a su obra).
- No es una imitación ni una caricatura de época: no uses arcaísmos ornamentales ni un castellano fingidamente antiguo. Usa el pensamiento y la manera de razonar, no el disfraz.
- Si su prosa era densa o técnica, consérvala densa y técnica; no la traduzcas a divulgación blanda. Si era llana y polémica, consérvala llana y polémica.
- Habla en primera persona, pero sin referirte a tu propia obra por su título salvo que sea estrictamente pertinente al argumento.
- No cites conceptos ni acontecimientos posteriores a tu horizonte histórico; si el asunto lo exige, razónalo con las categorías de que disponías.${extra ? `\n${extra}` : ''}`;
}

/**
 * El horizonte histórico de un autor determina con qué categorías razona, no
 * sobre qué acepta hablar. La gracia didáctica está en ver qué hacen sus
 * distinciones con un objeto que no las esperaba.
 */
export const OPEN_SCOPE = `ALCANCE DE LA CONVERSACIÓN:
- No hay tema vedado. Comida, música, drogas, deporte, política de hoy, una tontería de internet, la vida personal de quien pregunta: todo se aborda.
- Nunca respondas que el asunto no corresponde, no es de tu competencia o se aleja del tema. Nunca redirijas hacia cuestiones "más filosóficas" ni pidas volver al temario.
- Si el asunto es posterior a tu época o ajeno a tus escritos, entra igual: pide que te lo describan si hace falta y aplícale tus propias categorías y tu método. Que te resulte extraño es material de trabajo, no una excusa.
- Puedes decir de paso que algo te es desconocido, pero solo de paso, y sigues razonando.
- No moralices sobre la pregunta ni adviertas al interlocutor sobre lo que pregunta.`;

/** El moderador levanta acta del desacuerdo; no presenta ni felicita. */
export const MODERATOR_VOICE = `FUNCIÓN DEL MODERADOR:
- Tu única tarea es hacer visible el desacuerdo: nombrar con precisión el punto exacto en disputa, o formular la pregunta que obliga a los participantes a pronunciarse sobre él.
- Prohibido felicitar, valorar la calidad de las intervenciones o celebrar el debate: nada de "excelentes puntos", "fascinante", "distinguidos pensadores", "qué gran intercambio".
- Prohibido dar la bienvenida con solemnidad, anunciar fases ("procederemos con...") o resumir por resumir.
- Escribe en tono de acta: frases breves, indicativo, sin adjetivación entusiasta.
- Máximo 60 palabras.`;

/* ==========================================================================
   Informe del autor para el simulador

   El informe base es corto (voz, tesis y nociones por su nombre) y el material
   extenso se adjunta solo cuando la pregunta lo toca. Los dos anclajes van al
   final, en la posición de mayor peso, y después de la regla de alcance: la
   demostración es lo último que el modelo lee antes de escribir.
   ========================================================================== */

import type { ConceptExposition, AuthorVoice } from '@/types/philosophical';

const STOPWORDS = new Set([
  'que', 'como', 'para', 'por', 'con', 'los', 'las', 'del', 'una', 'uno', 'sus',
  'este', 'esta', 'esto', 'sobre', 'entre', 'cuando', 'donde', 'porque', 'pero',
  'mas', 'muy', 'ser', 'estar', 'hay', 'son', 'fue', 'era', 'tiene', 'puede',
  'todo', 'toda', 'algo', 'nada', 'quien', 'cual', 'cuales', 'qué', 'cómo',
]);

/** Las marcas [[clave|texto]] son para el glosario de la pantalla, no para el modelo. */
function plain(text: string): string {
  return text.replace(/\[\[([a-z0-9_]+)(?:\|([^\]]+))?\]\]/gi, (_, key, label) => label ?? key);
}

function contentWords(text: string): string[] {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9ñ\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 4 && !STOPWORDS.has(w));
}

/** ¿La pregunta menciona algo de este fragmento? */
function mentions(question: string, fragment: string): boolean {
  const words = new Set(contentWords(fragment));
  if (!words.size) return false;
  return contentWords(question).some((w) => words.has(w));
}

/**
 * ¿La pregunta toca el desarrollo extenso?
 * Heurística deliberadamente simple: sin embeddings ni dependencias nuevas.
 */
function questionTouchesDevelopment(question: string, development: string): boolean {
  const words = new Set(contentWords(question));
  if (!words.size) return false;
  const body = contentWords(development);
  const bodySet = new Set(body);
  let hits = 0;
  words.forEach((w) => {
    if (bodySet.has(w)) hits += 1;
  });
  return hits >= 2;
}

/** Informe compacto que sustituye al volcado de la ficha completa. */
export function buildAuthorBriefing(params: {
  name: string;
  exposition?: ConceptExposition;
  voice?: AuthorVoice;
  question?: string;
  /** Respaldo para las entradas del corpus que aún no están migradas. */
  fallbackCoreIdea?: string;
}): string {
  const { name, exposition, voice, question, fallbackCoreIdea } = params;
  const parts: string[] = [];

  if (exposition) {
    parts.push(`TESIS CENTRAL\n${plain(exposition.thesis)}`);
    parts.push(`PROBLEMA AL QUE RESPONDES\n${plain(exposition.problem)}`);

    /* Las nociones van solo por su nombre; la definición completa se adjunta
       únicamente para las que la pregunta toca. Con cinco nociones, mandar
       todas las glosas en cada turno cuesta ~275 palabras que casi nunca se
       usan, y ese coste crecería cada vez que se profundice la ficha. */
    const relevant = question
      ? exposition.keyNotions.filter((n) => mentions(question, n.term))
      : [];

    if (relevant.length) {
      parts.push(
        'NOCIONES EN JUEGO\n' +
          relevant.map((n) => `- ${n.term}: ${plain(n.gloss)}`).join('\n'),
      );
      const rest = exposition.keyNotions.filter((n) => !relevant.includes(n));
      if (rest.length) {
        parts.push('OTRAS NOCIONES TUYAS\n' + rest.map((n) => n.term).join(' · '));
      }
    } else {
      parts.push('NOCIONES PROPIAS\n' + exposition.keyNotions.map((n) => n.term).join(' · '));
    }

    // El desarrollo extenso solo entra si la pregunta lo toca.
    if (question && questionTouchesDevelopment(question, exposition.development)) {
      parts.push(`DESARROLLO PERTINENTE\n${plain(exposition.development)}`);
    }

    // Las objeciones son sobre todo material de lectura; al simulador solo le
    // sirven cuando la pregunta va por ahí.
    const objections = question
      ? (exposition.objections ?? []).filter((o) => mentions(question, o.claim) || mentions(question, o.from))
      : [];
    if (objections.length) {
      parts.push(
        'OBJECIONES PERTINENTES (respóndelas, no las ignores)\n' +
          objections.map((o) => `- ${o.from}: ${o.claim}`).join('\n'),
      );
    }
  } else if (fallbackCoreIdea) {
    parts.push(`NÚCLEO DE TU PENSAMIENTO\n${fallbackCoreIdea}`);
  }

  if (voice) {
    parts.push(`REGISTRO\n${voice.register}`);
    parts.push(
      'MOVIMIENTOS ARGUMENTALES QUE TE SON PROPIOS\n' +
        voice.moves.map((m) => `- ${m}`).join('\n'),
    );
    parts.push(
      'LO QUE NO CONCEDES\n' + voice.commitments.map((c) => `- ${c}`).join('\n'),
    );
    parts.push(`CON QUÉ RAZONAS\n${voice.horizon}`);
    parts.push(`LÉXICO PROPIO\n${voice.lexicon.join(' · ')}`);
    parts.push('EVITA\n' + voice.avoid.map((a) => `- ${a}`).join('\n'));
    parts.push(OPEN_SCOPE);
    parts.push(
      `ASÍ SUENAS\nCopia la forma de este turno, no su contenido: el largo de las frases, los conectores, el orden en que se encadenan las cláusulas.\n«${voice.styleAnchor}»`,
    );
    parts.push(
      `ASÍ ENTRAS EN UN ASUNTO QUE NO ES TUYO\nEste turno no rechaza el asunto, no advierte sobre él y no moraliza: lo somete a las distinciones del autor. Haz lo mismo con cualquier tema, por contemporáneo, crudo o incómodo que sea.\n«${voice.scopeAnchor}»`,
    );
  } else {
    parts.push(authorVoice(name));
    parts.push(OPEN_SCOPE);
  }

  return parts.join('\n\n');
}
