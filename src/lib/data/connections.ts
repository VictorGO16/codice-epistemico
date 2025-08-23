import { ConceptConnection } from '@/types/philosophical';

export const conceptConnections: ConceptConnection[] = [
  {
    source: 'heraclito',
    target: 'platon',
    type: 'influence',
    description: 'Platón adoptó la idea de Heráclito del flujo constante para describir el mundo sensible, en contraste con su mundo inteligible y estático de las Formas.'
  },
  {
    source: 'platon',
    target: 'aristoteles',
    type: 'critique',
    description: 'Aristóteles, su discípulo, criticó la Teoría de las Formas por ser una duplicación innecesaria del mundo, argumentando que la esencia (forma) de las cosas es inmanente a ellas.'
  },
  {
    source: 'platon',
    target: 'racionalismo',
    type: 'influence',
    description: 'El Racionalismo es una secularización del platonismo. La confianza en la razón, la existencia de ideas innatas y el desdén por el conocimiento sensible son herencia directa de Platón.'
  },
  {
    source: 'aristoteles',
    target: 'empirismo',
    type: 'influence',
    description: 'El Empirismo se basa en el principio aristotélico de que "nada hay en el intelecto que no haya estado antes en los sentidos". Sus leyes de la asociación son el núcleo del asociacionismo.'
  },
  {
    source: 'galileo',
    target: 'rev_cientifica',
    type: 'continuation',
    description: 'Galileo es una figura central que encarna el espíritu de la Revolución Científica con su método experimental y su visión matemática de la naturaleza.'
  },
  {
    source: 'newton',
    target: 'rev_cientifica',
    type: 'continuation',
    description: 'Newton representa la culminación y síntesis de la Revolución Científica, estableciendo el paradigma mecánico del universo que dominará por siglos.'
  },
  {
    source: 'rev_cientifica',
    target: 'descartes',
    type: 'influence',
    description: 'La nueva ciencia matemática inspiró a Descartes a buscar un método igualmente riguroso para la filosofía, basado en la certeza de la razón.'
  },
  {
    source: 'rev_cientifica',
    target: 'empirismo',
    type: 'influence',
    description: 'El éxito predictivo y tecnológico de la ciencia experimental reforzó la tesis empirista de que el conocimiento debe basarse en la observación y la experimentación.'
  },
  {
    source: 'descartes',
    target: 'racionalismo',
    type: 'continuation',
    description: 'Descartes es la figura fundacional del Racionalismo moderno, buscando una base indudable para el conocimiento en la razón pura (el Cogito).'
  },
  {
    source: 'locke',
    target: 'empirismo',
    type: 'continuation',
    description: 'Locke es el padre del Empirismo británico, sistematizando la idea de que la mente es una "pizarra en blanco" que se llena con la experiencia.'
  },
  {
    source: 'racionalismo',
    target: 'empirismo',
    type: 'critique',
    description: 'El Empirismo se opone directamente al Racionalismo, negando la existencia de ideas innatas y afirmando la primacía de la experiencia sensorial como única fuente de conocimiento.'
  },
  {
    source: 'hume',
    target: 'empirismo',
    type: 'continuation',
    description: 'Hume lleva el empirismo a su conclusión escéptica, mostrando que ni la causalidad, ni el yo, ni la sustancia pueden justificarse racionalmente desde la pura experiencia.'
  },
  {
    source: 'hume',
    target: 'kant',
    type: 'influence',
    description: 'La crítica radical de Hume a la inducción y la causalidad sumió a Kant en una crisis. Lo "despertó de su sueño dogmático" (racionalista) y lo obligó a buscar un nuevo fundamento para la ciencia que no fuera ni puramente empírico ni racional, dando origen a su filosofía trascendental.'
  },
  {
    source: 'kant',
    target: 'racionalismo',
    type: 'critique',
    description: 'Kant realiza una síntesis crítica, argumentando que el conocimiento requiere tanto de la experiencia (empirismo) como de las estructuras a priori de la mente (racionalismo). "Los conceptos sin intuiciones son vacíos; las intuiciones sin conceptos son ciegas".'
  },
  {
    source: 'kant',
    target: 'empirismo',
    type: 'critique',
    description: 'Kant critica al empirismo por no poder explicar cómo es posible el conocimiento universal y necesario (como el de la física de Newton), proponiendo que la mente no es pasiva, sino que estructura activamente la experiencia.'
  },
  {
    source: 'kant',
    target: 'hegel',
    type: 'influence',
    description: 'Hegel intentó superar el dualismo kantiano (fenómeno/noúmeno), desarrollando un sistema dinámico donde la Razón (Espíritu) se realiza plenamente a través de la historia, sin límites.'
  },
  {
    source: 'hegel',
    target: 'nietzsche',
    type: 'critique',
    description: 'Nietzsche representa una demolición radical del optimismo racionalista de Hegel, viendo su sistema como la máxima expresión de la metafísica y la moral que él buscaba destruir.'
  },
  {
    source: 'nietzsche',
    target: 'foucault',
    type: 'influence',
    description: 'Foucault adoptó el método "genealógico" de Nietzsche para analizar las relaciones entre saber y poder, y su perspectivismo es clave para el post-estructuralismo.'
  },
  {
    source: 'empirismo',
    target: 'positivismo_logico',
    type: 'continuation',
    description: 'El Positivismo Lógico es una versión del siglo XX del empirismo, radicalizada con las herramientas de la lógica formal para purgar a la ciencia de toda metafísica.'
  },
  {
    source: 'positivismo_logico',
    target: 'popper',
    type: 'critique',
    description: 'Popper criticó ferozmente el principio de verificación del Positivismo Lógico por ser lógicamente insostenible (la inducción no es válida) y propuso el falsacionismo como un criterio de demarcación más robusto.'
  },
  {
    source: 'popper',
    target: 'postpositivismo',
    type: 'influence',
    description: 'El falsacionismo y el falibilismo de Popper son pilares fundamentales del post-positivismo, que acepta la naturaleza conjetural y provisional de todo conocimiento científico.'
  },
  {
    source: 'popper',
    target: 'psicoanalisis',
    type: 'critique',
    description: 'Popper usó al psicoanálisis como su principal ejemplo de pseudociencia, argumentando que sus teorías son infalsables y pueden acomodar cualquier evidencia, careciendo así de contenido empírico.'
  },
  {
    source: 'kuhn',
    target: 'popper',
    type: 'critique',
    description: 'Kuhn criticó a Popper por centrarse en la lógica de la ciencia e ignorar su historia y sociología. Argumentó que la ciencia normal no busca la falsación, sino la articulación del paradigma, y que las revoluciones no son puramente racionales.'
  },
  {
    source: 'kuhn',
    target: 'postpositivismo',
    type: 'influence',
    description: 'La idea de Kuhn de que "toda observación está cargada de teoría" y la importancia de la comunidad científica fueron cruciales para el desarrollo del post-positivismo.'
  },
  {
    source: 'kuhn',
    target: 'construccionismo',
    type: 'influence',
    description: 'Al mostrar que la ciencia opera dentro de marcos sociales (paradigmas) que definen la "realidad", Kuhn abrió la puerta a la tesis más radical del construccionismo social.'
  },
  {
    source: 'wittgenstein',
    target: 'giro_linguistico',
    type: 'continuation',
    description: 'Wittgenstein es la figura más emblemática del Giro Lingüístico, cambiando el foco de la filosofía de la mente al lenguaje como práctica social.'
  },
  {
    source: 'giro_linguistico',
    target: 'construccionismo',
    type: 'influence',
    description: 'El construccionismo social es una radicalización del giro lingüístico, aplicando la idea de la construcción de la realidad a través del lenguaje a todo el tejido social y psicológico.'
  },
  {
    source: 'foucault',
    target: 'construccionismo',
    type: 'continuation',
    description: 'Foucault es un exponente clave del construccionismo, mostrando cómo el poder y el discurso construyen históricamente la "verdad", la "locura", la "sexualidad" y al "sujeto" mismo.'
  },
  {
    source: 'pragmatismo',
    target: 'met_mixto',
    type: 'application',
    description: 'El pragmatismo es la base filosófica explícita de los métodos mixtos, ya que justifica la elección de métodos en función de su utilidad para resolver una pregunta de investigación, en lugar de una lealtad a un paradigma ontológico.'
  },
  {
    source: 'husserl',
    target: 'fenomenologia',
    type: 'continuation',
    description: 'Husserl es el fundador de la Fenomenología como un método filosófico riguroso para el estudio de la conciencia y la experiencia vivida.'
  },
  {
    source: 'fenomenologia',
    target: 'hermeneutica',
    type: 'influence',
    description: 'La hermenéutica filosófica de Heidegger y Gadamer surge de una transformación de la fenomenología de Husserl, aplicando sus ideas al problema de la interpretación y la historicidad.'
  },
  {
    source: 'fenomenologia',
    target: 'enactivismo',
    type: 'influence',
    description: 'El enactivismo se inspira fuertemente en la fenomenología de Merleau-Ponty para su análisis de la cognición como acción corporizada y su crítica al dualismo mente-cuerpo.'
  },
  {
    source: 'maturana',
    target: 'enactivismo',
    type: 'influence',
    description: 'La teoría de la autopoiesis y la biología del conocimiento de Maturana y Varela son el fundamento biológico y conceptual del Enactivismo.'
  },
  {
    source: 'varela',
    target: 'enactivismo',
    type: 'continuation',
    description: 'Varela, junto a Thompson y Rosch, acuñó el término "enactivismo" y lo desarrolló como un programa de investigación para las ciencias cognitivas, integrando biología, fenomenología y budismo.'
  },
  {
    source: 'nagarjuna',
    target: 'enactivismo',
    type: 'influence',
    description: 'Varela encontró en la filosofía Madhyamaka de Nāgārjuna una sofisticada deconstrucción del "yo" y de la realidad sustancial que resonaba con las conclusiones de la biología de la autopoiesis, influyendo en su visión de una mente no-representacional y sin un "yo" central.'
  },
  {
    source: 'postpositivismo',
    target: 'met_cuantitativo',
    type: 'application',
    description: 'Los métodos cuantitativos en psicología son la aplicación práctica de la epistemología post-positivista: buscan refutar hipótesis nulas y obtener resultados probables y generalizables, aceptando la falibilidad del conocimiento.'
  },
  {
    source: 'hermeneutica',
    target: 'met_cualitativo',
    type: 'application',
    description: 'Los métodos cualitativos, como el análisis de narrativas, aplican principios hermenéuticos para interpretar significados y contextos, reconociendo el papel del investigador en la co-construcción del conocimiento.'
  },
  {
    source: 'construccionismo',
    target: 'met_cualitativo',
    type: 'application',
    description: 'El análisis del discurso y otras técnicas cualitativas son usadas por el construccionismo para deconstruir cómo las "realidades" psicológicas y sociales son producidas en la interacción.'
  },
  {
    source: 'met_cuantitativo',
    target: 'met_mixto',
    type: 'continuation',
    description: 'Los métodos mixtos buscan integrar la búsqueda de patrones generales y la falsación de hipótesis (cuantitativo)...'
  },
  {
    source: 'met_cualitativo',
    target: 'met_mixto',
    type: 'continuation',
    description: '...con la comprensión profunda del contexto y el significado subjetivo (cualitativo) para lograr una visión más completa y robusta.'
  }
];


// Helper functions for working with connections
export function getConnectionsForConcept(conceptId: string): ConceptConnection[] {
  return conceptConnections.filter(
    (connection) =>
      connection.source === conceptId || connection.target === conceptId
  );
}

export function getInfluencedBy(conceptId: string): ConceptConnection[] {
  return conceptConnections.filter(
    (connection) => connection.target === conceptId
  );
}

export function getInfluences(conceptId: string): ConceptConnection[] {
  return conceptConnections.filter(
    (connection) => connection.source === conceptId
  );
}

export function getConnectionsBetween(
  conceptA: string,
  conceptB: string
): ConceptConnection[] {
  return conceptConnections.filter(
    (connection) =>
      (connection.source === conceptA && connection.target === conceptB) ||
      (connection.source === conceptB && connection.target === conceptA)
  );
}

export function getConnectionsByType(
  type: ConceptConnection['type']
): ConceptConnection[] {
  return conceptConnections.filter((connection) => connection.type === type);
}
