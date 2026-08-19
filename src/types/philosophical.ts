// Core philosophical concept types
export type ConceptType = 'philosopher' | 'scientist' | 'concept' | 'method';

export type ConceptCategory = 
  | 'ancient'
  | 'pre-columbian'
  | 'modernity'
  | '19th_century'
  | '20th_century'
  | 'contemporary'
  | 'methods';

export type ConnectionType = 
  | 'influence'
  | 'critique'
  | 'continuation'
  | 'application';


/* ==========================================================================
   Corpus

   Dos capas separadas: la de lectura, que es lo que ve el estudiante, y la de
   voz, que solo alimenta la simulación y nunca se muestra en pantalla.
   ========================================================================== */

/** Entrada del glosario que aparece al pasar el cursor sobre un término. */
export interface GlossaryEntry {
  /** Cómo se titula el término en el globo. */
  term: string;
  /** Definición breve y clara: entre 25 y 45 palabras. */
  short: string;
  /** Forma original, si la tiene. */
  original?: string;
  /** Ficha completa en el árbol, si existe. */
  conceptId?: string;
}

/** Una noción central del autor o concepto. */
export interface KeyNotion {
  /** El término, con su forma original entre paréntesis si corresponde. */
  term: string;
  /** Definición breve y operativa: 40-60 palabras. */
  gloss: string;
  /** Si la noción tiene entrada propia en el árbol, su id. */
  conceptId?: string;
}

/** Una objeción estándar, con quién la formula. */
export interface Objection {
  from: string;
  fromId?: string;
  claim: string;
}

export interface Work {
  title: string;
  /** Negativo para a.C. */
  year: number;
  note?: string;
}

/**
 * Capa de lectura: lo que ve el estudiante.
 * El orden de los campos es el orden de la página, y va de lo que se retiene
 * en diez segundos a lo que exige lectura sostenida.
 */
export interface ConceptExposition {
  /** Dos frases. Lo que queda si se olvida todo lo demás. */
  thesis: string;
  /** A qué pregunta responde este autor o concepto. Dos o tres frases. */
  problem: string;
  /** Tres a cinco nociones centrales. */
  keyNotions: KeyNotion[];
  /** Desarrollo en markdown: 400-500 palabras. El movimiento argumental. */
  development: string;
  /** Dos o tres objeciones estándar. Evita el tono hagiográfico. */
  objections?: Objection[];
  works?: Work[];
}

/** Capa de voz. No se muestra al estudiante: alimenta la simulación. */
export interface AuthorVoice {
  /** Cómo construye las frases y con qué léxico. */
  register: string;
  /** Movimientos argumentales típicos, en orden de frecuencia. */
  moves: string[];
  /** Lo que no concedería en ningún caso. */
  commitments: string[];
  /** Con qué recursos conceptuales cuenta y con cuáles no. */
  horizon: string;
  /** Términos propios, en su lengua cuando es pertinente. */
  lexicon: string[];
  /** Lo que suena a imitación barata. */
  avoid: string[];
  /**
   * Ancla de forma: un turno sobre un asunto propio del autor.
   * Fija largo de frase, conectores, orden de las cláusulas y densidad técnica,
   * que es lo que una descripción del estilo no transmite. Va sobre materia
   * canónica pero no sobre una pregunta previsible, para que no se regurgite.
   */
  styleAnchor: string;
  /**
   * Ancla de alcance: un turno sobre materia contemporánea, corporal o cargada.
   * Su función no es el estilo sino la conducta: mostrar que el autor entra sin
   * rechazar, sin advertir y sin moralizar. Un ejemplo autoriza solo hasta su
   * propia distancia respecto de lo cómodo, así que va en el caso difícil.
   */
  scopeAnchor: string;
}

// Main philosophical concept interface
export interface PhilosophicalConcept {
  id: string;
  type: ConceptType;
  name: string;
  year: number;
  category: ConceptCategory;
  coreIdea: string;
  psychologyLink?: string;
  methodologyLink?: string;
  exposition?: ConceptExposition;
  /** Solo las entradas con las que se puede dialogar. */
  voice?: AuthorVoice;
}

// Connection between concepts
export interface ConceptConnection {
  source: string;
  target: string;
  type: ConnectionType;
  /** Qué hace el segundo con la proposición del primero. */
  description: string;
  /** La proposición concreta que está en juego, en una frase. */
  atStake?: string;
}

// Category metadata
export interface CategoryInfo {
  id: ConceptCategory;
  name: string;
  order: number;
  description?: string;
}

// Search and filtering
export interface ConceptFilter {
  query?: string;
  category?: ConceptCategory;
  type?: ConceptType;
  yearRange?: {
    start: number;
    end: number;
  };
}

// Navigation state
export interface NavigationState {
  currentConcept: string | null;
  activeTab: string;
  searchQuery: string;
  filteredConcepts: string[];
  selectedCategory?: ConceptCategory;
}