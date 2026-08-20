/* Antigüedad: Heráclito, Platón, Aristóteles, Nāgārjuna y el tlamatini nahua.
   Las cinco entradas llevan exposición y voz. */

import type {
  ConceptExposition,
  AuthorVoice,
  GlossaryEntry,
} from '@/types/philosophical';

export const expositions: Record<string, ConceptExposition> = {
  heraclito: {
    thesis:
      'Lo estable no está bajo el cambio: es un efecto del cambio, un patrón que se sostiene porque algo no deja de moverse. Hay conocimiento posible porque ese movimiento tiene una medida común, el [[logos]], que el discurso puede seguir aunque casi nadie la siga.',

    problem:
      'Los milesios habían buscado el principio de las cosas en una materia que permanece bajo las transformaciones: agua, aire, lo indeterminado. El precio era dejar sin explicar justamente el cambio, que quedaba como algo que le pasa a un sustrato ya constituido. Si además lo real es lo que permanece, entonces todo lo que vemos, que es cambiante, cae fuera de la [[episteme]], y no se ve cómo podría haber saber de este mundo.',

    keyNotions: [
      {
        term: 'Lógos',
        gloss:
          'No es una ley dictada desde fuera del mundo ni una intención que lo dirija: es la proporción según la cual ocurren los cambios, y a la vez el discurso capaz de exponerla. Es común a todos, y por eso el conocimiento consiste en seguir lo común y no el mundo privado de cada uno.',
      },
      {
        term: 'Flujo y permanencia del patrón',
        gloss:
          'La tesis del [[flujo]] no dice que nada dure, sino que lo que dura lo hace gracias al cambio y no a pesar de él. El río es el mismo porque el agua no lo es; la llama conserva su forma porque quema material distinto a cada instante. La identidad es un régimen, no un depósito.',
      },
      {
        term: 'Unidad de los opuestos',
        gloss:
          'Los opuestos no son dos cosas que se excluyen sino los dos extremos de una misma tensión, como en el arco y la lira. El camino de subida y el de bajada son uno. La consecuencia es fuerte: describir bien algo obliga a nombrar la oposición que lo mantiene, no a eliminarla.',
      },
      {
        term: 'El fuego como medida',
        gloss:
          'El fuego no es la materia última de la que todo estaría hecho, sino la imagen de un proceso que se conserva consumiendo. Todo se cambia por fuego y el fuego por todo, como las mercancías por oro: es una tesis sobre la equivalencia y la medida, no sobre la composición química.',
      },
      {
        term: 'Los que duermen',
        gloss:
          'Quien atiende solo a lo que le aparece vive en un mundo propio, como el dormido. Los ojos y los oídos son malos testigos para quien tiene el alma incapaz de entender su lengua. Percibir no basta: hay que interpretar, y la [[doxa]] es precisamente percepción sin la medida común.',
      },
    ],

    development: `Heráclito hereda de los milesios la pregunta por el principio y rechaza la forma de la respuesta. Buscar una materia que permanece bajo las transformaciones deja intacto el problema, porque el cambio queda entonces como un accidente que le sobreviene a algo ya constituido, y de ese algo no se dice por qué se transforma. La operación de Heráclito es invertir la carga: lo que hay que explicar no es el cambio sino la estabilidad, y la estabilidad se explica como resultado.

De ahí la imagen del río, que suele citarse mal. El fragmento no dice que todo pase sin dejar nada, dice que en los mismos ríos entramos y no entramos. El río conserva su nombre y su cauce porque el agua se renueva: si el agua se detuviera dejaría de haber río. Lo mismo con la llama, con el cuerpo vivo, con una ciudad. La permanencia es un patrón sostenido por un intercambio regulado, y esa regulación es el logos, que es común y por eso puede conocerse.

La consecuencia que arrastra es incómoda y él la asume: si toda cosa es una tensión de opuestos, entonces la descripción correcta de algo tiene que nombrar los dos extremos a la vez. El camino hacia arriba y hacia abajo es uno y el mismo. Aristóteles leerá esto como negación del principio de no contradicción y lo tratará como un error elemental. La otra consecuencia es epistémica: percibir no es conocer, porque cada cual percibe desde su propio despertar parcial, y hay que pasar de lo privado a lo común. Ahí queda abierto el problema que dominará la filosofía griega, el de cómo un discurso puede ser verdadero de algo que no se está quieto.

Platón toma la tesis del flujo como verdadera de lo sensible y saca la conclusión opuesta: si esto no se detiene, el objeto del conocimiento tiene que estar en otra parte, y así nacen las [[formas]]. Los estoicos se quedan con el logos como orden inmanente y racional del cosmos. Mucho después, el pensamiento de lo procesual reaparece en Hegel, en Nietzsche y en las filosofías del proceso del siglo veinte.

Para la psicología esto no es una metáfora amable sino un problema de diseño. Si la identidad de un sistema es un patrón sostenido por el cambio, entonces medir a alguien dos veces y esperar el mismo valor no es una garantía de rigor sino una decisión teórica. La fiabilidad test retest presupone que lo medido debía quedarse quieto; los modelos de invarianza de la medida en estudios longitudinales convierten ese presupuesto en hipótesis contrastable. La distinción entre rasgo y estado, los diseños de series temporales intensivas y los modelos de sistemas dinámicos en psicología del desarrollo son todos, en el fondo, formas de decidir qué parte de la variación es el objeto y qué parte es ruido.`,

    objections: [
      {
        from: 'Parménides y la tradición eleática',
        claim:
          'Si de una cosa hay que decir a la vez que es y que no es, se ha renunciado a hablar. Un discurso que afirma la coincidencia de los opuestos no distingue entre lo que dice y su negación, y por tanto no dice nada determinado de nada.',
      },
      {
        from: 'Platón',
        fromId: 'platon',
        claim:
          'Si lo sensible no se detiene ni un instante, no hay de qué predicar. Ni siquiera podría nombrarse una cosa, porque mientras se la nombra ya es otra. La tesis del flujo, llevada hasta el final, destruye la posibilidad misma de un enunciado verdadero.',
      },
      {
        from: 'Aristóteles',
        fromId: 'aristoteles',
        claim:
          'Sostener que lo mismo es y no es equivale a no sostener nada, y quien lo dice se refuta al actuar, porque camina hacia Mégara y no hacia el pozo. La unidad de los opuestos confunde sentidos distintos de un término que habría que separar antes de discutir.',
      },
    ],

    works: [
      {
        title: 'Sobre la naturaleza',
        year: -500,
        note: 'Único libro que se le atribuye; se conservan alrededor de ciento treinta fragmentos citados por autores posteriores.',
      },
      {
        title: 'Refutación de todas las herejías, de Hipólito de Roma',
        year: 220,
        note: 'Fuente de buena parte de los fragmentos que se conservan en su forma literal.',
      },
      {
        title: 'Vidas y opiniones de los filósofos ilustres, de Diógenes Laercio',
        year: 230,
        note: 'Noticias sobre el libro, su oscuridad deliberada y su depósito en el templo de Ártemis en Éfeso.',
      },
      {
        title: 'Die Fragmente der Vorsokratiker, de Diels y Kranz',
        year: 1903,
        note: 'Edición que fija la numeración con que hoy se citan los fragmentos y separa testimonios de citas literales.',
      },
    ],

    psychology: {
      claim:
        'De aquí la psicología no heredó una tesis cosmológica sino un problema técnico: si lo psíquico está en [[flujo|cambio continuo]], hay que explicar por qué alguien sigue siendo el mismo y cómo se mide esa continuidad. La respuesta que la disciplina terminó dando es que la identidad no es una sustancia que persiste, sino un trabajo de integración que puede fracasar y cuyo fracaso tiene consecuencias clínicas medibles.',

      lineages: [
        {
          name: 'William James, The Principles of Psychology',
          year: 1890,
          what: 'El capítulo noveno describe el pensamiento como corriente sin partes separables, en la que ningún estado vuelve a presentarse idéntico. El décimo resuelve la identidad personal sin sustrato: cada pensamiento que pasa se apropia de los anteriores, y por eso hay dueño sin que haya alma.',
        },
        {
          name: 'James Marcia, estatus de identidad del yo',
          year: 1966,
          what: 'Convierte la identidad de Erikson en una variable con cuatro estados, definidos por el cruce de exploración y compromiso, y aporta una entrevista que los clasifica. La continuidad del sí mismo pasa a ser algo que se puntúa.',
        },
        {
          name: 'Dan McAdams, The Stories We Live By',
          year: 1993,
          what: 'Propone que la identidad es una historia de vida que la persona construye y revisa, y la vuelve investigable con una entrevista biográfica que codifica secuencias de redención y de contaminación. Con Kate McLean sintetiza el programa en Current Directions in Psychological Science, 2013.',
        },
        {
          name: 'Michael Chandler y Christopher Lalonde, Transcultural Psychiatry',
          year: 1998,
          what: 'Muestran que la continuidad del sí mismo no es un asunto especulativo: en comunidades de las Primeras Naciones de Columbia Británica, los indicadores de continuidad cultural se asocian con tasas de suicidio juvenil radicalmente distintas.',
        },
      ],

      development: `La psicología heredó de aquí un problema, no una doctrina. Si lo psíquico es un proceso que no se detiene y toda medición es un corte practicado sobre él, hace falta justificar por qué la persona evaluada en marzo y la evaluada en noviembre cuentan como la misma. William James enfrentó eso de manera directa: describió el pensamiento como una corriente sin partes separables, en la que ningún estado vuelve a presentarse idéntico, y acto seguido negó que hiciera falta un alma sustancial para explicar que esa corriente tenga dueño. Basta con que cada pensamiento presente se apropie de los que acaban de pasar. La identidad queda explicada por una operación y no por un sustrato.

Al entrar a la disciplina, el flujo perdió su alcance cosmológico y ganó algo que Heráclito no buscaba: se volvió medible. La identidad pasó a ser una variable con estados clasificables mediante entrevista, y más tarde un relato codificable en secuencias. La ganancia es real, porque permite hipótesis contrastables sobre cuándo la continuidad se logra y cuándo falla. La pérdida también conviene verla: en Heráclito la unidad del río era obra del [[logos]], una medida del mundo que el discurso podía seguir, mientras que en la identidad narrativa esa unidad la fabrica el propio sujeto al contarse. La continuidad dejó de ser un rasgo de lo real para volverse un producto psicológico, con la consecuencia incómoda de que podría ser una ficción eficaz.

Ahí está hoy la discusión viva. Si el relato de vida es lo que sostiene la identidad, no queda claro si un relato más coherente produce mejor salud mental o si es la salud mental la que permite contar mejor, y los diseños transversales no pueden decidirlo. El trabajo de Chandler y Lalonde agrega un giro que incomoda al individualismo del campo: la continuidad que protege no siempre es la que la persona construye sola, sino la que su comunidad conserva o pierde.

Para quien investiga, la exigencia es concreta y poco vistosa. Un estudio longitudinal solo puede afirmar que algo cambió si antes demuestra que su instrumento midió lo mismo en cada ocasión; de lo contrario, el cambio observado puede pertenecer a la escala y no al sujeto. Heráclito, que se negaba a llamar dos veces igual al mismo río, habría reconocido el problema. La psicología lo resolvió sin metafísica, con restricciones estadísticas puestas sobre los parámetros del modelo de medida.`,

      today: [
        'Antes de afirmar que un rasgo cambió entre dos mediciones, un diseño longitudinal debe demostrar invarianza de medición en el sentido de Meredith, 1993, o el cambio observado puede ser del instrumento y no de la persona.',
        'La identidad narrativa se investiga con entrevistas codificadas por jueces, y la discusión abierta es de dirección causal: si la coherencia del relato produce bienestar o si el bienestar es lo que permite construir un relato coherente.',
        'Los criterios diagnósticos del trastorno límite de la personalidad y de los cuadros disociativos describen fallas de continuidad del sí mismo, lo que obliga a decidir qué grado de discontinuidad cuenta como normal antes de llamarla patológica.',
      ],

      caveats: [
        'Todo fluye no es una frase suya. Platón resume la doctrina en el Crátilo diciendo que todo se mueve y nada permanece, y la fórmula griega panta rhei aparece en forma literal recién en Simplicio, en el siglo sexto. Se cita como fragmento lo que es una paráfrasis tardía.',
        'James, Marcia, McAdams y Chandler no construyeron sus teorías leyendo a Heráclito. El parentesco es de problema y no de filiación: ponerlo como origen ordena la exposición, pero no describe una transmisión histórica documentable.',
      ],
    },
  },

  platon: {
    thesis:
      'Conocer es reconocer aquello que hace que muchas cosas distintas sean lo que son, y eso no está en las cosas sino aparte de ellas: son las [[formas]]. Por eso el saber se distingue de la opinión acertada, aunque ambas den en el blanco: solo el primero puede dar razón de por qué.',

    problem:
      'Heráclito había dejado lo sensible en [[flujo|movimiento incesante]], y de lo que no se detiene no hay nada firme que decir. Protágoras había concluido que cada cual es medida de lo que le aparece, con lo que toda apariencia resulta verdadera y el error se vuelve imposible. Sócrates, entretanto, preguntaba qué es la justicia y nadie sabía responder sin poner ejemplos. Hace falta un objeto que no cambie y una explicación de cómo el alma accede a él.',

    keyNotions: [
      {
        term: 'Formas (eíde)',
        gloss:
          'Aquello por lo cual muchas cosas reciben un mismo nombre y son lo que son. No son conceptos en nuestra cabeza ni propiedades de los objetos: existen separadas, son inmutables y solo de ellas hay conocimiento estricto. Las cosas sensibles participan de ellas y por eso son reconocibles.',
      },
      {
        term: 'Dóxa y epistéme: la línea dividida',
        gloss:
          'Hay grados de conocimiento correlativos a grados de realidad: conjetura sobre imágenes, creencia sobre objetos sensibles, pensamiento discursivo con hipótesis y figuras, e intelección de los principios. La opinión verdadera no es conocimiento hasta que se la ata con una razón de la causa.',
      },
      {
        term: 'Anámnesis',
        gloss:
          'La [[anamnesis|reminiscencia]] resuelve la paradoja del Menón: si no sabes qué buscas no lo reconocerás al hallarlo, y si lo sabes no lo buscas. Aprender sería recuperar lo que el alma ya poseía. Es la primera tesis fuerte de que el sujeto aporta algo previo a toda experiencia.',
      },
      {
        term: 'Mímesis y grados de realidad',
        gloss:
          'La [[mimesis|imitación]] ordena una jerarquía: la Forma, el objeto que la imita, y la imagen que imita al objeto. El pintor de una cama no sabe de camas; produce una apariencia convincente a distancia. Toda imagen es tercera respecto de lo que es, y engaña justamente por su eficacia.',
      },
      {
        term: 'El alma dividida',
        gloss:
          'Si algo en nosotros desea beber y algo a la vez lo impide, no puede ser lo mismo en el mismo respecto: hay partes. Razón, ánimo y apetito compiten por gobernar. Conocer bien no es solo cuestión intelectual: exige un régimen del alma en que la parte que calcula mande.',
      },
    ],

    development: `Platón concede a Heráclito que lo sensible no se detiene y concede a Protágoras que cada cual percibe lo que percibe. De ahí saca la conclusión contraria a la de ambos. Si conocer fuera percibir, toda apariencia sería verdadera, nadie se equivocaría nunca y no tendría sentido enseñar; y si el objeto se transforma mientras hablamos de él, no hay nada de lo cual el enunciado pueda ser verdadero. El *Teeteto* recorre esas consecuencias hasta el absurdo. La salida no es negar el flujo sino negar que lo que fluye sea el objeto del conocimiento.

El giro consiste en postular un objeto que no cambia y redefinir el acto de conocer. Lo que no cambia son las Formas, que no están en las cosas sino aparte, y de las cuales las cosas participan. Y conocer no es recibir impresiones sino reconocer: el esclavo del *Menón* resuelve un problema geométrico sin haberlo aprendido, guiado solo por preguntas. De ahí la fórmula que fundará dos milenios de teoría del conocimiento: la [[doxa|opinión verdadera]] se vuelve saber cuando se la ata con el razonamiento de la causa. Sin esa atadura las opiniones se escapan, como las estatuas de Dédalo.

La consecuencia es una jerarquía completa de realidad y de conocimiento, expuesta en la línea dividida y en la caverna, y una teoría de la imagen que hoy resulta más incómoda que la de las Formas. Si el objeto sensible ya es una copia, la representación del objeto es copia de copia, y su productor no necesita saber nada de aquello que imita, sino solo de lo que produce efecto en quien mira. A eso se suma la tesis del alma dividida: no basta con ver lo mejor, hay que estar constituido de modo que la parte que ve mande. Lo que queda abierto es el precio de la separación: si las Formas están aparte, no se explica cómo se relacionan con las cosas, y ese hueco será el blanco de Aristóteles.

La estructura sobrevive a la doctrina. Cada vez que una ciencia postula entidades que no se observan para explicar lo que sí se observa, repite el movimiento platónico. Kant lo transforma al situar en el sujeto lo que Platón situaba en un dominio separado, y el realismo científico contemporáneo discute la misma cuestión con otro vocabulario.

En psicología esto es literalmente la teoría de los constructos. La memoria de trabajo, la inteligencia general o la depresión no se observan: se observan indicadores, y el constructo se postula porque explica que esos indicadores se muevan juntos. El análisis factorial es el descendiente formal de la tesis de que tras muchas apariencias hay una cosa que las unifica, y el debate sobre si un factor es una entidad real o un resumen conveniente es la disputa platónica en clave psicométrica. La tripartición del alma, además, es el primer modelo estructural de la psique, con el mismo formato de instancias en conflicto que Freud volverá a usar.`,

    objections: [
      {
        from: 'Aristóteles',
        fromId: 'aristoteles',
        claim:
          'Separar la Forma duplica el mundo sin explicar nada, porque queda por decir qué es participar. Y si a lo común de los hombres corresponde una Forma, hará falta una tercera para lo común al hombre y a la Forma, y así sin término.',
      },
      {
        from: 'Locke y la tradición empirista',
        fromId: 'locke',
        claim:
          'No hay ideas previas a la experiencia. Que un niño resuelva un problema bien guiado por preguntas muestra la habilidad de quien pregunta, no un recuerdo de otra vida. La reminiscencia explica el aprendizaje suponiendo ya resuelto lo que había que explicar.',
      },
      {
        from: 'Nietzsche',
        fromId: 'nietzsche',
        claim:
          'Inventar un mundo verdadero e inmutable y llamar aparente a este es un síntoma antes que un argumento: expresa el resentimiento contra lo que cambia y muere. La historia de ese error es la historia de la metafísica occidental.',
      },
    ],

    works: [
      { title: 'Menón', year: -385, note: 'La paradoja del aprendizaje, la reminiscencia y la distinción entre opinión verdadera y conocimiento.' },
      { title: 'Fedón', year: -380, note: 'Las Formas como causa de que las cosas sean lo que son, y el alma como aquello capaz de alcanzarlas.' },
      { title: 'República', year: -375, note: 'La línea dividida, la caverna, el alma tripartita y la crítica de la imitación en el libro décimo.' },
      { title: 'Teeteto', year: -369, note: 'Refutación del conocimiento como percepción y como opinión verdadera acompañada de razón.' },
      { title: 'Sofista', year: -360, note: 'El estatuto del no ser y de la imagen: cómo puede haber algo falso sin que sea nada.' },
    ],

    psychology: {
      claim:
        'La psicología dinámica y la psicología cognitiva del desarrollo comparten aquí un antepasado, aunque tomen de él cosas distintas: el alma dividida en partes capaces de querer cosas incompatibles, y el conocimiento que el sujeto exhibe sin haber podido sacarlo de su experiencia. Lo primero reaparece como modelo estructural del conflicto psíquico; lo segundo, como argumento de la pobreza del estímulo.',

      lineages: [
        {
          name: 'Sigmund Freud, El yo y el ello',
          year: 1923,
          what: 'Fija el aparato psíquico en tres instancias que entran en conflicto y necesitan arbitraje. La conducta deja de explicarse por un querer único y pasa a explicarse por la negociación entre subsistemas con exigencias incompatibles.',
        },
        {
          name: 'Noam Chomsky, reseña de Verbal Behavior de Skinner',
          year: 1959,
          what: 'Publicada en Language 35, sostiene que el refuerzo no explica que un niño produzca oraciones que nunca oyó, y repone una dotación innata específica para el lenguaje. En Knowledge of Language, 1986, Chomsky bautiza el asunto como el problema de Platón.',
        },
        {
          name: 'Elizabeth Spelke y Katherine Kinzler, Core knowledge',
          year: 2007,
          what: 'Sintetizan en Developmental Science la evidencia de que lactantes de pocos meses operan ya con sistemas de objetos, número, agentes, espacio y grupos sociales, anteriores al lenguaje y a toda instrucción.',
        },
        {
          name: 'Susan Carey, The Origin of Concepts',
          year: 2009,
          what: 'Acepta los sistemas nucleares y disputa que basten: propone un mecanismo de bootstrapping por el cual el niño construye conceptos genuinamente nuevos, no contenidos en la dotación inicial ni derivables por asociación.',
        },
      ],

      development: `Dos herencias distintas salen del mismo autor y conviene no mezclarlas. La primera es la idea de un alma dividida, con partes que pueden querer cosas incompatibles al mismo tiempo, de modo que la conducta necesita arbitraje interno. La psicología la necesitaba porque sin ella el conflicto resulta inexplicable: un aparato unificado que quiere algo simplemente lo persigue, y no queda lugar para la ambivalencia, la represión ni el esfuerzo de voluntad. El modelo estructural de Freud repone esa arquitectura con otros nombres y otra teoría de la energía, pero con el mismo movimiento de fondo.

La segunda es el innatismo. Platón sostiene que el esclavo del Menón resuelve un problema geométrico que nadie le enseñó, y concluye que el alma lo recordaba. El argumento tiene una forma que sobrevivió a su conclusión: hay conocimiento que el sujeto exhibe y que su experiencia no alcanza a explicar. Chomsky lo reactiva contra la explicación del lenguaje por refuerzo, y decide después ponerle el nombre de su autor. Lo que se transformó es decisivo: donde había [[anamnesis]], reminiscencia de un alma que contempló las [[formas]] antes de nacer, quedó una dotación de sistemas de procesamiento con historia evolutiva. Se conserva la estructura del argumento y se descarta por completo su metafísica.

La discusión sigue abierta y hoy se decide con datos. La investigación con lactantes documenta competencias muy tempranas sobre objetos, cantidad y agentes, y la pregunta es si son un punto de partida innato o el primer producto de un aprendizaje muy rápido. Carey acepta lo primero y niega que baste: si todo concepto estuviera ya contenido en la dotación inicial, nunca se aprendería nada genuinamente nuevo, y ese es el problema que su mecanismo intenta resolver. El debate reproduce, con instrumentos, la tensión entre reconocer lo que ya se sabía y adquirir lo que no se tenía.

Para quien investiga, la lección es sobre inferencia. Buena parte de esta evidencia descansa en cuánto tiempo mira un bebé una escena inesperada, y la distancia entre ese dato y la atribución de un concepto es larga. Cada paso de la cadena admite explicaciones alternativas de bajo nivel, desde preferencias perceptivas hasta artefactos del procedimiento, y decidir entre ellas exige controles que suelen publicarse años después del hallazgo original.`,

      today: [
        'La disputa entre nativismo y aprendizaje estadístico se juega hoy con modelos de lenguaje entrenados con corpus del tamaño de la exposición infantil, que ambos bandos citan como evidencia a favor de su posición.',
        'Los paradigmas de violación de expectativa con lactantes miden tiempo de mirada, y la crítica metodológica sobre qué se puede inferir de una mirada más larga es un caso de manual de operacionalización discutible.',
        'La idea de partes en conflicto reaparece sin Freud en los modelos de doble proceso y en los de control ejecutivo, que vuelven a repartir el gobierno de la conducta entre subsistemas con intereses distintos.',
      ],

      caveats: [
        'Freud no dedujo el ello, el yo y el superyó de la tripartición de la República: el paralelo con apetito, ánimo y razón es una lectura retrospectiva. Lo que sí reconoció de modo explícito, en Psicología de las masas, 1921, es que su libido coincide con el Eros de Platón, que es una deuda distinta.',
        'El innatismo de Spelke y de Carey no es la reminiscencia: postula sistemas de procesamiento con historia evolutiva, no un alma que recuerda haber contemplado Formas. Presentarlos como continuación del Menón confunde una tesis empírica sobre arquitectura cognitiva con una doctrina sobre la preexistencia del alma.',
      ],
    },
  },

  aristoteles: {
    thesis:
      'Hay conocimiento estricto, [[episteme|epistéme]], cuando se conoce la causa por la que algo es y no puede ser de otro modo. Ese conocimiento empieza en la percepción y no exige un mundo separado: la forma que hace inteligible a una cosa está en la cosa misma.',

    problem:
      'Platón había situado lo cognoscible fuera de lo sensible, porque de lo que cambia no puede haber ciencia. El precio era alto: quedaba sin explicar cómo el estudio de la naturaleza, que es justamente el dominio del cambio, podría producir algún saber. Aristóteles necesita fundar una ciencia de lo que cambia sin renunciar a que el conocimiento sea necesario y demostrable.',

    keyNotions: [
      {
        term: 'Epistéme y demostración (apódeixis)',
        gloss:
          'Saber científico no es tener una creencia verdadera, sino poder demostrar por qué la cosa es así. La demostración es un silogismo que parte de premisas verdaderas, primeras y más conocidas que la conclusión: no basta con que algo sea cierto, hay que exhibir la causa que lo hace necesario.',
      },
      {
        term: 'Inducción (epagogé) y noûs',
        gloss:
          'De la percepción repetida se retiene la memoria, de muchas memorias la experiencia, y de la experiencia el universal. Pero los primeros principios de los que parte la demostración no se demuestran a su vez: se captan por noûs, una aprehensión intelectual directa. Sin ese punto de apoyo la demostración sería infinita.',
      },
      {
        term: 'Las cuatro causas',
        gloss:
          'Preguntar «por qué» admite cuatro respuestas distintas y complementarias: de qué está hecho (material), qué es (formal), qué lo produjo (eficiente) y para qué (final). Explicar bien no es elegir una, sino saber cuál corresponde al asunto. La causa final es la que la ciencia moderna expulsará de la física.',
      },
      {
        term: 'Sustancia (ousía) y forma inmanente',
        gloss:
          'Lo que existe en sentido primero es este individuo concreto, compuesto de materia y forma. La forma no está separada en otro mundo, sino que es aquello por lo cual esta cosa es lo que es. De ahí que estudiar lo sensible pueda dar ciencia: lo inteligible ya está ahí dentro.',
      },
      {
        term: 'Precisión según la materia (akribeia)',
        gloss:
          'Cada asunto admite el grado de exactitud que su materia permite. Exigir demostración matemática en cuestiones de carácter es tan defectuoso como conformarse con lo verosímil en geometría. Es una tesis metodológica, no una excusa: fija de antemano qué tipo de prueba es apropiada a cada objeto.',
      },
    ],

    development: `Aristóteles acepta el punto de partida platónico, que de lo que cambia sin cesar no hay ciencia, pero rechaza la solución. Si la forma está en otro mundo, la duplicación no explica nada: hemos añadido entidades sin ganar comprensión, y además queda por decir cómo se relacionan con las cosas. Su movimiento es traer la forma al interior de lo sensible. Lo que existe en sentido pleno es este caballo, este hombre; lo universal es real, pero *en* los particulares, no aparte de ellos.

Eso permite una ciencia de la naturaleza, pero obliga a explicar cómo se llega desde la percepción hasta lo universal. La respuesta está en los *Analíticos segundos*: de la percepción se retiene memoria, de muchas memorias se forma [[empeiria|experiencia]], y de la experiencia se desprende el universal, que ya es objeto posible de ciencia. La [[epagoge|inducción]] no demuestra; conduce hasta el punto en que la mente capta el principio.

Aquí aparece la arquitectura que dominará el pensamiento occidental durante casi dos mil años. La ciencia es **demostrativa**: expone conclusiones necesarias a partir de principios. Pero los principios mismos no pueden demostrarse sin caer en regreso infinito o en círculo, de modo que han de conocerse de otra manera. Aristóteles los confía al [[nous]]. Toda la epistemología posterior discutirá ese punto: es exactamente ahí donde Hume clavará el problema de la inducción y donde Popper decidirá que la ciencia no parte de principios ciertos sino de conjeturas.

El segundo aporte duradero es el análisis de la explicación. Decir «por qué» algo ocurre admite cuatro sentidos, y confundirlos produce falsas disputas. La estatua es de bronce (material), es un Hermes (formal), la hizo el escultor (eficiente) y existe para honrar al dios (final). En los seres vivos las tres últimas tienden a converger: la forma de un organismo es también su fin, aquello hacia lo que su desarrollo tiende. Ese es el núcleo [[teleologia|teleológico]] que la Revolución Científica desmantelará: para Galileo, explicar la caída de un cuerpo por su tendencia al lugar natural no permite calcular nada.

Para un curso de metodología, la contribución menos citada es quizá la más útil. Aristóteles sostiene que el tipo de prueba exigible depende del objeto: hay asuntos que solo admiten conclusiones que valen «en la mayoría de los casos». Es el primer planteamiento explícito de que el rigor no es uno solo, sino que se ajusta a la materia investigada, una discusión que reaparece intacta cada vez que se compara un diseño experimental con un estudio de caso.`,

    objections: [
      {
        from: 'Sexto Empírico, y después Hume',
        fromId: 'hume',
        claim:
          'Si los primeros principios se obtienen de la experiencia pero la demostración necesita que sean necesarios, la necesidad no puede venir de donde se dice que viene. La inducción no puede fundar lo que la demostración exige.',
      },
      {
        from: 'Galileo y la Revolución Científica',
        fromId: 'galileo',
        claim:
          'La causa final es estéril para la física. Explicar la caída por la tendencia de los graves a su lugar natural no produce ninguna predicción medible; la matematización del movimiento sí.',
      },
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'La ciencia no demuestra desde principios ciertos. Propone conjeturas y las somete a refutación: el ideal de un saber que exhibe la causa necesaria describe la geometría, no la investigación empírica.',
      },
    ],

    works: [
      { title: 'Analíticos segundos', year: -350, note: 'La teoría de la demostración y de los primeros principios.' },
      { title: 'Física', year: -350, note: 'Las cuatro causas, el cambio, la naturaleza como principio interno de movimiento.' },
      { title: 'Metafísica', year: -350, note: 'La sustancia y la crítica a las Formas separadas.' },
      { title: 'Acerca del alma', year: -350, note: 'La percepción como origen del conocimiento; el alma como forma del cuerpo.' },
      { title: 'Ética a Nicómaco', year: -340, note: 'La precisión según la materia; el saber práctico frente al demostrativo.' },
    ],

    psychology: {
      claim:
        'La psicología empieza como género literario en un tratado suyo: el *Perì psychês* es el primer intento de tratar el alma como objeto de una ciencia natural, con método propio y con un grado de exactitud ajustado a su materia. Lo que la disciplina heredó no es su contenido, que quedó obsoleto, sino la decisión de explicar lo psíquico por sus funciones antes que por su sustancia.',

      lineages: [
        {
          name: 'David Hartley, Observations on Man',
          year: 1749,
          what: 'Las tres leyes de asociación que Aristóteles enuncia al explicar el recuerdo, semejanza, contigüidad y contraste, se convierten en el mecanismo único del aprendizaje. De ahí pasan a James Mill, a Bain y al conductismo.',
        },
        {
          name: 'Franz Brentano, Psicología desde un punto de vista empírico',
          year: 1874,
          what: 'Recupera de la tradición aristotélica la idea de que todo acto mental se dirige a un objeto, y la propone como el criterio que separa lo psíquico de lo físico. De su cátedra salen Husserl, Stumpf y, por esa vía, la Gestalt.',
        },
        {
          name: 'David Marr, Vision',
          year: 1982,
          what: 'Sus tres niveles de explicación, computacional, algorítmico y de implementación, reponen en ciencia cognitiva la distinción aristotélica entre preguntar para qué sirve algo, cómo está organizado y de qué está hecho.',
        },
        {
          name: 'Carol Ryff, escala de bienestar psicológico',
          year: 1989,
          what: 'Convierte la eudaimonía en un constructo con seis dimensiones y un instrumento validado, frente a las escalas de bienestar que solo miden afecto positivo y satisfacción declarada.',
        },
      ],

      development: `Lo que la psicología recibió de aquí no fue una teoría del alma, sino un formato. El tratado sobre el alma es el primer texto que trata lo psíquico como un dominio con objeto propio, preguntas ordenadas y método ajustado a su materia, y esa decisión de género precede a cualquier contenido. La disciplina necesitaba ese gesto para separarse de la teología y de la especulación: necesitaba poder decir de qué habla y con qué exactitud, sabiendo que la [[akribeia]] exigible a una ciencia de lo vivo no es la de la geometría. La advertencia de no pedir más precisión de la que el asunto admite sigue siendo el mejor comentario disponible sobre la sobreinterpretación de los decimales.

Lo que se transformó al entrar es la [[teleologia]]. Aristóteles explica una función diciendo para qué está, y esa forma de explicación fue expulsada de la biología moderna por buenas razones. Volvió por otra puerta: cuando se distingue el problema que un sistema resuelve del algoritmo con que lo resuelve y del tejido que lo implementa, se está haciendo la pregunta por el para qué, ahora sin causa final y con una tarea computacional en su lugar. La ganancia es que la pregunta se volvió tratable, y que lo psíquico puede describirse por lo que hace antes que por su [[ousia|sustancia]]. La pérdida es que la palabra función quedó ambigua entre lo que algo hace y lo que algo debería hacer, ambigüedad que reaparece cada vez que un trastorno se define como deterioro funcional.

Las leyes de asociación siguieron un camino distinto y más accidentado. Aristóteles las enuncia al describir cómo alguien recupera deliberadamente un recuerdo, buscando por semejanza, contigüidad o contraste. El asociacionismo británico las convirtió en el mecanismo único de la mente, y de ahí pasaron al condicionamiento. Al hacerlo dejaron de describir un procedimiento voluntario de búsqueda para volverse una ley automática de enlace. La psicología de la memoria contemporánea recuperó lo primero bajo el nombre de recuperación estratégica, sin advertir siempre que estaba volviendo al planteamiento original.

El caso de la eudaimonía muestra el precio de operacionalizar. Convertir una forma de vida en seis dimensiones con ítems de respuesta graduada permite investigar, correlacionar y comparar poblaciones, y al mismo tiempo transforma una tesis sobre qué hace buena a una vida en un autoinforme sobre cómo la persona la evalúa. Quien use uno de estos instrumentos debería poder explicar qué quedó fuera en esa conversión, porque la respuesta no es técnica: decide qué se está midiendo.`,

      today: [
        'La discusión entre explicación funcional y explicación mecanicista en ciencia cognitiva es la misma que separa la causa final de la causa eficiente, y decide si una teoría psicológica queda satisfecha con decir para qué sirve un proceso.',
        'Las escalas de bienestar eudaimónico compiten con las hedónicas en investigación en salud mental, y la diferencia entre ambas no es técnica sino una discusión sobre qué es vivir bien.',
        'El DSM define los trastornos por deterioro del funcionamiento y no por su causa, que es una decisión aristotélica de fondo tomada por razones de fiabilidad diagnóstica.',
      ],

      caveats: [
        'Llamarlo padre de la psicología es engañoso: su psychê no es la mente ni la conciencia, es el principio de vida de cualquier ser vivo, de modo que las plantas tienen alma en su esquema. Leer el De anima como una teoría de la experiencia consciente es un anacronismo.',
        'La cadena que va de sus leyes de asociación al conductismo es real pero no es continua: pasa por Locke, Hume y Hartley, y cada uno la reformuló. Presentarla como herencia directa borra justamente lo que cambió en el camino.',
      ],
    },
  },

  nagarjuna: {
    thesis:
      'Nada tiene naturaleza propia: todo lo que aparece aparece en dependencia de causas, de partes y de las distinciones con que se lo nombra, y por eso está [[sunyata|vacío]]. La vacuidad no es un fondo escondido tras las apariencias, y tomarla por una cosa más es el error más grave de todos.',

    problem:
      'El análisis budista anterior había disuelto la persona en factores momentáneos, los dharmas, pero trataba a esos factores como poseedores de naturaleza propia. Eso vuelve incoherente la enseñanza central, el [[pratitya|surgimiento dependiente]]: lo que es lo que es por sí mismo no puede depender de nada. La sustancia expulsada del yo había vuelto a entrar por la puerta de atrás, en formato más pequeño.',

    keyNotions: [
      {
        term: 'Svabhāva y su negación',
        gloss:
          'Svabhāva es tener el propio ser por sí, sin deber nada a otro. Nāgārjuna sostiene que nada lo tiene, y por eso su vocabulario no habla de sustancias como la [[ousia]] griega sino de ausencia: no dice qué son las cosas, muestra que ninguna descripción de lo que serían por sí mismas se sostiene.',
      },
      {
        term: 'Las dos verdades',
        gloss:
          'Las [[dos_verdades]] no son dos mundos ni dos niveles de realidad. Una es el modo corriente de hablar, que da por buenos los carros y las personas y sin el cual no se puede enseñar nada; otra es el examen último, que no encuentra en ellos naturaleza propia. Confundirlas produce nihilismo o dogmatismo.',
      },
      {
        term: 'Prasaṅga y tetralema',
        gloss:
          'El método es negativo y parasitario: no propone tesis propias, toma las premisas del adversario y deriva de ellas lo absurdo. El tetralema recorre las cuatro posiciones posibles (es, no es, ambas, ninguna) y las descarta, de modo que el resultado no es una quinta posición sino el abandono de la pregunta.',
      },
      {
        term: 'Vacuidad de la vacuidad',
        gloss:
          'Si la vacuidad se toma como una propiedad real de las cosas, o como el fondo verdadero al que se accede, se ha vuelto a poner una naturaleza propia. La vacuidad está ella misma vacía. Mal tomada, dice, es como coger una serpiente por el lugar equivocado.',
      },
      {
        term: 'Prapañca',
        gloss:
          'La proliferación conceptual: el trabajo incesante por el cual el lenguaje fija entidades, las opone y las hace parecer independientes. El objetivo del análisis no es sustituir unas entidades por otras mejores, sino que ese trabajo se aquiete y con él la angustia que lo acompaña.',
      },
    ],

    development: `El punto de partida es una crisis interna del análisis budista. Para mostrar que no hay un yo sustancial, la escuela abhidhármica había descompuesto la experiencia en factores últimos, los dharmas, y había atribuido a cada uno una naturaleza propia que lo hacía ser lo que era. El resultado es contradictorio con la doctrina que se pretendía defender: si esos factores son lo que son por sí mismos, no dependen de nada, y el surgimiento dependiente deja de valer justamente donde el análisis termina. La disolución de la sustancia se había detenido demasiado pronto.

El giro de Nāgārjuna consiste en aplicar el análisis a los propios instrumentos del análisis. Examina el movimiento, la causa, el tiempo, el agente, el fuego y su combustible, la percepción y lo percibido, y en cada caso muestra que ni la identidad ni la diferencia entre los términos se deja sostener sin contradicción. Lo que surge en dependencia carece de naturaleza propia; y como todo surge así, todo está vacío. La vacuidad, el surgimiento dependiente y el camino medio son, dice en un verso célebre, la misma cosa dicha tres veces.

La consecuencia inmediata es la acusación de nihilismo, y la respuesta es la doctrina de las dos verdades. Negar que las cosas tengan naturaleza propia no es negar que haya carros, promesas ni sufrimiento: es negar una manera de existir, no la existencia. Sin el habla convencional no puede enseñarse nada, y sin el examen último no se llega a ninguna parte. Lo que sí se rompe es la búsqueda de fundamento: no queda un estrato básico donde apoyarse, ni siquiera la vacuidad, que está vacía a su vez. Y queda abierta una objeción seria, que él mismo se plantea: si su discurso también está vacío, ¿con qué autoridad refuta? Su respuesta, que no defiende ninguna tesis y solo desarma las ajenas, sigue discutiéndose.

De ahí salen las escuelas madhyamaka de Tíbet y de Asia oriental, con siglos de disputa sobre si el método consiente alguna afirmación propia. En el siglo veinte se lo comparó con el escepticismo antiguo, con la crítica de Hume al yo, con las filosofías del [[flujo]] y con la idea de disolver los problemas en lugar de resolverlos; comparaciones útiles a condición de no aplanar las diferencias.

Para la psicología el rendimiento es directo y crítico. Una categoría diagnóstica puede tratarse como una entidad con naturaleza propia que causa sus síntomas, o como un nodo sostenido por relaciones entre síntomas, historia, instrumento y contexto; los modelos de red en psicopatología son una versión contemporánea de la segunda opción, contra el reflejo reificador que convierte un constructo en una cosa. Las dos verdades ofrecen además una posición metodológica precisa: usar una categoría operacionalmente, con todo rigor, sin comprometerse con que exista tal como el instrumento la recorta. No es casual que Varela buscara aquí, y no en la tradición europea, la base de su crítica al yo como entidad.`,

    objections: [
      {
        from: 'La escuela Nyāya',
        claim:
          'Si toda proposición carece de naturaleza propia, la tuya también, y entonces no tiene fuerza para refutar nada. O bien tu tesis se exceptúa a sí misma, y hay al menos una cosa con naturaleza propia, o bien no dice nada.',
      },
      {
        from: 'La acusación de nihilismo',
        claim:
          'Sin entidades estables no hay acción, ni responsabilidad, ni camino, ni diferencia entre hacer el bien y hacer el daño. Un análisis que deja todo sin fundamento suprime también aquello en nombre de lo cual se lo emprendió.',
      },
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'Un procedimiento puramente negativo, que rehúsa sostener tesis propias, no puede ser puesto a prueba por nada. Se vuelve inmune a la crítica, que es exactamente el rasgo por el cual conviene desconfiar de una doctrina.',
      },
    ],

    works: [
      { title: 'Mūlamadhyamakakārikā (Versos fundamentales del camino medio)', year: 150, note: 'Veintisiete capítulos que examinan y desarman las nociones básicas: causa, movimiento, tiempo, agente, nirvāṇa.' },
      { title: 'Vigrahavyāvartanī (La disipación de las disputas)', year: 150, note: 'Responde a la objeción de autorrefutación y expone por qué no sostiene tesis propia alguna.' },
      { title: 'Śūnyatāsaptati (Setenta estrofas sobre la vacuidad)', year: 150, note: 'Trata la relación entre el habla convencional y el análisis último.' },
      { title: 'Ratnāvalī (La guirnalda preciosa)', year: 150, note: 'Aplicación de la doctrina a la conducta y al gobierno, dirigida a un rey.' },
    ],

    psychology: {
      claim:
        'La psicología clínica occidental incorporó una práctica proveniente de este linaje y dejó fuera la doctrina que la justificaba. El resultado es un tratamiento con eficacia establecida para prevenir recaídas depresivas y, junto a él, una discusión abierta sobre qué se hizo con la crítica al yo sustancial al convertirla en una intervención manualizada de ocho sesiones.',

      lineages: [
        {
          name: 'Jon Kabat-Zinn, clínica de reducción de estrés de la Universidad de Massachusetts',
          year: 1979,
          what: 'Traduce la práctica de atención plena a un protocolo de ocho semanas para pacientes con dolor crónico, despojado de vocabulario religioso para que un hospital pueda administrarlo. Es la puerta de entrada institucional de toda esta tradición a la salud.',
        },
        {
          name: 'Francisco Varela, Evan Thompson y Eleanor Rosch, The Embodied Mind',
          year: 1991,
          what: 'Llevan el análisis madhyamaka a la ciencia cognitiva y sostienen que la ausencia de un yo hallable no es un déficit a corregir sino el punto de partida correcto, y que la disciplina carece de método para examinar la experiencia de primera persona.',
        },
        {
          name: 'Zindel Segal, Mark Williams y John Teasdale, Mindfulness-Based Cognitive Therapy for Depression',
          year: 2002,
          what: 'Combinan el protocolo de Kabat-Zinn con terapia cognitiva para prevenir recaídas en depresión recurrente. El ensayo publicado en Journal of Consulting and Clinical Psychology en 2000 les había dado el resultado que sostiene el manual.',
        },
        {
          name: 'Thomas Metzinger, Being No One',
          year: 2003,
          what: 'Formula en filosofía de la ciencia cognitiva la tesis de que no existe ningún yo, solo un modelo de sí mismo transparente que el sistema no reconoce como modelo. Es la versión naturalizada de una conclusión muy anterior.',
        },
      ],

      development: `El ingreso de este linaje a la psicología no fue doctrinal sino técnico, y esa asimetría explica casi todo lo que vino después. Lo que cruzó la frontera fue una práctica de atención, presentada en un hospital como entrenamiento para pacientes con dolor crónico que la medicina no lograba aliviar. La disciplina la necesitaba porque tenía un vacío: sabía modificar contenidos de pensamiento, pero no tenía procedimiento para cambiar la relación del paciente con sus propios pensamientos. La atención plena ofrecía justamente eso, en un formato que se podía manualizar, aleatorizar y comparar contra lista de espera.

El costo de la traducción se ve al mirar qué quedó atrás. En Nāgārjuna, la [[sunyata|vacuidad]] no es un estado mental sino una tesis: nada tiene naturaleza propia, todo aparece en dependencia, y la afirmación vale también para la vacuidad misma. La distinción entre el habla convencional y el análisis último, las [[dos_verdades]], existe para poder seguir hablando del yo sin concederle sustancia. En el protocolo clínico nada de eso opera: el yo no se examina, se observa; la ausencia de sustancia no es una conclusión argumentada sino una experiencia que se reporta. Se ganó un tratamiento evaluable y se perdió el argumento que lo justificaba.

Conviene exponer el problema sin convertirlo en denuncia ni en defensa. Que la intervención prevenga recaídas depresivas es un hecho establecido por ensayos, y no depende de que quien la aplica suscriba una doctrina del siglo segundo. Pero la crítica histórica tiene razón en que el mindfulness clínico no desciende directamente de este autor, y la crítica política tiene un punto cuando señala que una técnica que enseña a aceptar la experiencia presente puede emplearse para que el sujeto tolere condiciones que sería mejor cambiar. Ninguna de las dos objeciones invalida el ensayo clínico; ambas modifican lo que uno puede afirmar cuando explica por qué funciona.

Para quien investiga, aquí hay un caso de manual sobre validez de constructo. Las escalas de atención plena son autoinformes que preguntan por la capacidad de notar la propia experiencia, es decir, usan como instrumento la misma facultad que el entrenamiento modifica. Si meditar cambia el modo de entender un ítem, comparar puntajes antes y después mide dos cosas a la vez y no ofrece manera de separarlas.`,

      today: [
        'Las guías NICE para depresión en adultos, NG222 de 2022, incluyen la terapia cognitiva basada en mindfulness, de modo que la discusión sobre qué se recorta al secularizar la práctica recae sobre un tratamiento financiado por sistemas públicos de salud.',
        'La revisión de Van Dam y colaboradores en Perspectives on Psychological Science, 2018, documenta que el constructo está mal definido y que los autoinformes más usados no miden lo mismo en meditadores y en no meditadores.',
        'Los efectos adversos de la práctica intensiva empezaron a documentarse de forma sistemática con el estudio de Lindahl y Britton en PLoS ONE, 2017, después de décadas de ensayos que no los registraban como desenlace.',
      ],

      caveats: [
        'La operación tiene un costo doctrinal que conviene nombrar sin escandalizarse: la vacuidad es una tesis sobre la falta de naturaleza propia de todo lo que hay, incluida ella misma, y en el protocolo clínico queda reducida a una técnica de regulación emocional. McMahan, 2008, describe cómo se fabricó ese budismo modernizado; Purser, 2019, lo acusa de servir a la adaptación del individuo.',
        'Nāgārjuna no enseñó meditación de atención plena. La práctica que llega a la clínica proviene sobre todo del movimiento vipassana birmano del siglo veinte, de tradición theravāda, así que ponerlo a él como origen salta varios siglos y cambia de escuela.',
      ],
    },
  },

  tlamatini: {
    thesis:
      'De la tierra se puede decir poco con propiedad y ese poco dura poco, de modo que el conocimiento que importa no se transmite en definiciones sino como [[flor_y_canto|flor y canto]], una manera de decir que muestra lo que la definición pierde. Su criterio no es la demostración sino que el que recibe la palabra quede formado por ella.',

    problem:
      'La ruta griega asegura el saber buscando algo que no cambie, sea una Forma separada o una causa necesaria. El material nahua parte del supuesto contrario: nada de lo que hay aquí tiene raíz, y por eso la pregunta no es cómo asegurar un enunciado sino si hay algo verdadero en la tierra. Un saber entendido como conjunto de proposiciones no responde a eso, porque las proposiciones se pierden con quienes las sostienen, y quienes las sostienen pueden ser exterminados.',

    keyNotions: [
      {
        term: 'Tlamatini',
        gloss:
          'El [[tlamatini_nahua|tlamatini]], el que sabe algo: no un autor con obra firmada sino una función, descrita en los materiales de Sahagún como luz, tea y espejo horadado por ambos lados. Conserva los cantos y las cuentas de los días, y su tarea propia es hacer que los otros tomen un rostro.',
      },
      {
        term: 'Flor y canto (in xóchitl in cuícatl)',
        gloss:
          'Nombre del decir poético entendido como vía de conocimiento y no como adorno. Se recurre a él cuando el discurso que define no alcanza: no explica el asunto, lo hace ver. Sostener que ahí hay conocimiento, y no solo emoción, es la tesis fuerte de este material.',
      },
      {
        term: 'Difrasismo',
        gloss:
          'El [[difrasismo]] nombra una cosa juntando dos palabras que por separado no la contienen: agua y cerro para decir ciudad, rostro y corazón para decir persona, la cola y el ala para decir el pueblo llano. Es un recurso epistémico: advierte que el término único recorta mal.',
      },
      {
        term: 'Neltiliztli',
        gloss:
          'La palabra para verdad se forma sobre nelhuayotl, raíz. Lo verdadero es lo bien enraizado, lo que tiene fundamento y por eso permanece. De ahí que la pregunta de los cantos, si acaso algo es verdadero en la tierra, no sea retórica: pregunta si aquí hay algo con raíz.',
      },
      {
        term: 'Neixcuitilli y huehuetlatolli',
        gloss:
          'La unidad de transmisión no es el enunciado sino el ejemplo o dechado que se pone delante, y el discurso de los antiguos que se memoriza y se repite en los momentos señalados de la vida. La [[episteme|forma del saber]] es aquí oral, normativa y dirigida a formar conducta.',
      },
    ],

    development: `Lo primero que hay que fijar es qué clase de objeto es este. No hay un autor individual ni una obra firmada: hay una función social, la del que sabe algo, y un corpus de cantos, discursos de exhortación y respuestas recogidas por escrito después de la caída de Tenochtitlan. Todo lo que sigue depende de esa condición y no debe leerse como si fuera un tratado que hubiera llegado intacto.

El problema que organiza el material es la falta de raíz. Los cantos vuelven una y otra vez sobre la misma pregunta: si acaso se vive de verdad en la tierra, si los hombres son verdaderos, si algo permanece. La respuesta no consiste en encontrar un dominio estable como el de las [[formas]] platónicas, sino en desplazar el lugar de la verdad. Si lo verdadero es lo enraizado, y aquí nada lo está del todo, entonces el saber no puede consistir en poseer enunciados firmes. Consiste en un modo de decir, flor y canto, y en un efecto sobre quien lo recibe.

De ahí dos rasgos que se sostienen mutuamente. Uno es el difrasismo: se nombra con dos palabras lo que una sola recortaría mal, y esa duplicidad no es ornamento sino una tesis sobre los límites del término aislado. Otro es que el criterio de un saber logrado sea la formación de un rostro y un corazón, es decir, de una persona con figura propia y voluntad firme. Epistemología y pedagogía no se separan aquí: se enseña con el ejemplo puesto delante y con la palabra antigua repetida, en el calmécac y en la casa. Lo que se rompe, medido con la vara griega, es la posibilidad de juzgar esto por [[apodeixis|demostración]], y ese desajuste es el punto interesante y no el defecto.

La historia posterior es brutal y forma parte del objeto. Lo que conservamos se escribió tras la conquista, en alfabeto latino, por informantes ancianos interrogados por frailes que buscaban conocer la religión antigua para extirparla. En el siglo veinte, Garibay y León-Portilla constituyeron con ese material un objeto llamado filosofía náhuatl, y esa construcción ha sido discutida desde entonces por historiadores que subrayan cuánto hay en ella de marco europeo.

Para un curso de metodología es difícil encontrar un caso mejor. El corpus es un registro coproducido: un hablante, un interrogador con agenda, una escritura ajena al material, décadas de intervalo y una selección hecha por el que pregunta. Eso es exactamente lo que ocurre, en escala menor, en cualquier entrevista cualitativa, y obliga a tratar el dato como resultado de una relación y no como muestra recogida. Y para la psicología, rostro y corazón nombran una persona que se forma y no que se descubre, lo cual pone bajo sospecha cualquier instrumento que dé por universal la noción de sujeto que trae incorporada.`,

    objections: [
      {
        from: 'La crítica de fuentes coloniales',
        claim:
          'El corpus fue recogido en alfabeto latino por frailes evangelizadores y por sus discípulos formados en el colegio de Tlatelolco, décadas después de la conquista y con fines de extirpación. Toda reconstrucción del pensamiento anterior es una inferencia sobre un registro mediado, no un acceso directo a él.',
      },
      {
        from: 'La crítica al esencialismo cultural',
        claim:
          'Hablar de una filosofía náhuatl unifica cantos de ciudades distintas, épocas distintas y funciones distintas, y los ordena con categorías tomadas del neokantismo europeo. La coherencia del sistema puede ser un artefacto del intérprete y no un rasgo del material.',
      },
      {
        from: 'Aristóteles',
        fromId: 'aristoteles',
        claim:
          'Si el saber se transmite por ejemplos y cantos y no expone la causa, no se ve en qué se distingue de la opinión bien dispuesta. Formar el carácter es cosa distinta de conocer, y confundirlas deja sin criterio para decidir entre dos cantos que se contradigan.',
      },
    ],

    works: [
      { title: 'Huehuetlatolli, la antigua palabra', year: 1547, note: 'Discursos de exhortación de padres a hijos y de autoridades al pueblo, transmitidos oralmente y recogidos por Andrés de Olmos y otros frailes.' },
      { title: 'Coloquios y doctrina cristiana', year: 1564, note: 'Versión de Sahagún del encuentro de 1524 entre los doce franciscanos y los sabios mexicas; contiene la réplica más extensa que se conserva de estos últimos.' },
      { title: 'Códices matritenses y Códice florentino', year: 1577, note: 'Materiales en náhuatl dictados por ancianos de Tepepulco y Tlatelolco; el libro décimo describe los oficios, entre ellos el del que sabe algo.' },
      { title: 'Cantares mexicanos', year: 1580, note: 'Manuscrito de cantos donde aparecen la doctrina de flor y canto y la pregunta por si algo es verdadero en la tierra.' },
      { title: 'Romances de los señores de la Nueva España', year: 1582, note: 'Segunda colección de cantos, con variantes de varios poemas del manuscrito anterior, útil para comparar versiones.' },
    ],

    psychology: {
      claim:
        'Esta tradición no está en un temario de psicología por lo que aportó a la disciplina, sino por lo que deja ver de sus límites. Su modo de formar personas es un caso que la psicología del aprendizaje situado sabe describir, y su ausencia casi total de las bases de datos del campo es el ejemplo más nítido del sesgo de muestreo que la propia disciplina denunció en 2010.',

      lineages: [
        {
          name: 'Miguel León-Portilla, La filosofía náhuatl estudiada en sus fuentes',
          year: 1956,
          what: 'Establece el corpus con que se trabaja y fija la lectura del par rostro y corazón como fin de la formación. Todo tratamiento psicológico posterior de esta tradición depende de esa edición y de sus decisiones de traducción.',
        },
        {
          name: 'Jean Lave y Etienne Wenger, Situated Learning',
          year: 1991,
          what: 'Describen el aprendizaje como participación periférica legítima en una comunidad de práctica y no como transferencia de contenidos. Uno de sus cinco casos son las parteras yucatecas, que aprenden sin instrucción explícita ni evaluación separada de la tarea.',
        },
        {
          name: 'Barbara Rogoff y colaboradoras, Firsthand learning through intent participation, Annual Review of Psychology',
          year: 2003,
          what: 'Documentan en comunidades indígenas de México y Guatemala un modo de aprender por observación atenta e incorporación gradual a la actividad adulta, y lo tratan como otra organización del aprendizaje y no como carencia de escolarización.',
        },
        {
          name: 'Joseph Henrich, Steven Heine y Ara Norenzayan, The weirdest people in the world?, Behavioral and Brain Sciences',
          year: 2010,
          what: 'Muestran que el noventa y seis por ciento de las muestras publicadas en revistas de psicología proviene de países occidentales industrializados, que reúnen el doce por ciento de la población mundial, y que en varios dominios esas muestras son las atípicas.',
        },
      ],

      development: `Aquí no hay filiación disciplinar que reclamar, y fingirla sería peor que no decir nada. Ningún programa de investigación psicológica desciende de esta tradición. Lo que sí ocurre es que el modo nahua de formar a alguien resulta descriptible con categorías que la psicología del aprendizaje desarrolló por su cuenta, y que la ausencia de esta tradición en la literatura ilustra un defecto metodológico que la propia disciplina reconoce. Son dos conexiones distintas, una de objeto y otra de crítica a la muestra, y mezclarlas produce el tipo de afirmación decorativa que conviene evitar.

La primera. El [[tlamatini_nahua|que sabe algo]] no dicta contenidos: forma un rostro y un corazón transmitiendo cantos, cuentas de los días y palabra antigua a quien ya participa en la actividad. Eso es, con otro vocabulario, lo que Lave y Wenger llaman participación periférica legítima: se aprende entrando por el borde de una comunidad que practica algo, no recibiendo instrucción separada de la práctica. Rogoff documentó el mismo patrón en comunidades indígenas contemporáneas y mostró que no constituye un déficit respecto de la escuela, sino otra distribución de la atención y otro papel del error. La [[flor_y_canto|flor y canto]] es el vehículo de esa transmisión, no un ornamento añadido.

La segunda es más incómoda para el curso. Cuando la enorme mayoría de las muestras publicadas proviene de países que reúnen una fracción pequeña de la población mundial, la frase los seres humanos hacen tal cosa está mal formada casi siempre. El problema no es de justicia representativa sino de validez: si el efecto medido varía con la cultura y solo se muestreó una, no se sabe si se describió a la especie o a un caso particular. El remedio tampoco es agregar una muestra exótica al final, porque comparar puntajes entre culturas exige antes demostrar que el instrumento se comporta del mismo modo en ambas.

Queda una exigencia sobre las fuentes que atraviesa todo lo anterior. Trabajar con esta tradición significa leer textos dictados por ancianos a un misionero que preguntaba con sus propias categorías, décadas después de la conquista y en un contexto donde responder no era libre. Un [[difrasismo]] traducido al castellano ya perdió la forma que lo hacía significar. Cualquier inferencia psicológica sobre estos materiales debería declarar ese grado de mediación como parte del resultado y no como una nota al pie.`,

      today: [
        'Adaptar un instrumento a otra población no es traducirlo: exige retrotraducción, revisión por jueces y evidencia de invarianza de medición, sin la cual comparar puntajes entre grupos culturales no significa nada.',
        'Rad, Martingano y Ginges propusieron en PNAS, 2018, que las revistas obliguen a describir la procedencia de la muestra y a justificar hasta dónde se generaliza, en lugar de enunciar los hallazgos como si valieran para cualquier ser humano.',
        'La formación de psicólogos en Chile trabaja con manuales y baremos construidos en su mayoría fuera del país, y decidir cuándo una norma extranjera es utilizable es una pregunta metodológica cotidiana y no un asunto ideológico.',
      ],

      caveats: [
        'Casi todo lo que puede decirse de esta tradición llega en fuentes recogidas por frailes, sobre todo por Sahagún, con informantes ancianos que hablaban a un misionero después de la conquista. Cualquier reconstrucción psicológica es una inferencia sobre material intervenido, y la prudencia con la fuente forma parte del argumento.',
        'Llamar filosofía o psicología náhuatl a este corpus es ya una decisión interpretativa. León-Portilla la defendió con argumentos, y ha sido discutida por historiadores que ven en ella la proyección de categorías griegas sobre textos que no las emplean.',
      ],
    },
  },
};

export const voices: Record<string, AuthorVoice> = {
  heraclito: {
    register:
      'Sentencia breve y cerrada, sin conectores que expliquen la transición: dos miembros que chocan y el lector queda con el choque. Usa quiasmo, paralelismo y ambigüedad sintáctica deliberada, de modo que una palabra pueda leerse con lo que antecede o con lo que sigue. Nunca argumenta en cadena; yuxtapone. El tono hacia los muchos es despectivo y no lo disimula.',

    moves: [
      'Enuncia la oposición sin resolverla, y deja que la contradicción aparente haga el trabajo.',
      'Toma un objeto corriente (el río, el arco, la lira, el camino, la cebada revuelta) y lo usa como caso, no como adorno.',
      'Reprocha a los otros que oyen y no entienden, que están presentes y ausentes a la vez.',
      'Nombra por su nombre a quienes tenían fama de saber, Homero, Hesíodo, Pitágoras, Jenófanes, para decir que acumular no es entender.',
      'Distingue lo común de lo privado: lo verdadero es lo común, aunque cada cual tenga su propia opinión.',
      'Juega con la palabra misma, con su doble sentido o con su parentesco sonoro, cuando el juego dice algo de la cosa.',
    ],

    commitments: [
      'La estabilidad no explica el cambio: el cambio explica la estabilidad, y no al revés.',
      'Los opuestos no se eliminan; son la tensión que sostiene a la cosa, y describirla sin ellos es describirla mal.',
      'La medida es común y accesible, aunque casi nadie la siga: no hay doctrina reservada a unos pocos por decreto.',
      'La percepción sola no da conocimiento; los sentidos son malos testigos para el alma que no entiende su lengua.',
      'Nada exceptúa a quien habla: también él está en el proceso que describe.',
    ],

    horizon:
      'No cuenta con lógica formal, ni con la distinción entre sujeto y predicado elaborada después, ni con matemática del cambio, ni con demostración deductiva; su prosa es anterior a que exista el género del tratado. Piensa con oficios, con la ciudad, con el fuego y con los ciclos del cuerpo. Eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta qué se conserva, qué se intercambia, qué oposición lo mantiene y qué nombre se le ha puesto. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'lógos (medida común y discurso que la expone)',
      'pŷr (fuego)',
      'pólemos (guerra, disputa)',
      'harmoníe aphanés (armonía invisible)',
      'physis (naturaleza, el modo en que algo se muestra)',
      'psyché (alma, con límites que no se hallan)',
      'hodós áno káto (camino hacia arriba y hacia abajo)',
      'koinón (lo común frente a lo propio de cada uno)',
      'enantía (los opuestos)',
      'metron (medida, proporción)',
    ],

    avoid: [
      'Repetir «todo fluye» como lema: es una fórmula posterior que aplana la tesis.',
      'El personaje del filósofo que llora, o el misterio decorativo del que habla en enigmas por gusto.',
      'Vocabulario espiritual contemporáneo: energía, vibración, unidad cósmica.',
      'Explicarse a sí mismo, aclarar la paradoja después de decirla o pedir disculpas por la oscuridad.',
      'Encadenar premisas y conclusión como si tuviera silogismos; no dispone de ese instrumento.',
    ],

    styleAnchor:
      'Los límites del alma no los hallarás por más que andes todos los caminos: tan honda es su medida. Alma seca, la más entendida. Al hombre ebrio lo guía un niño, y él tropieza sin saber por dónde va, húmeda el alma. Para las almas es muerte volverse agua, y para el agua muerte volverse tierra, y de la tierra nace el agua y del agua el alma. Los que duermen son obreros de cuanto sucede en el mundo, y cada cual se vuelve hacia lo suyo.',

    scopeAnchor:
      'Con el nombre ya has respondido: llamas «la misma» a lo que no cesa de mudar, y en este caso no rige otra regla. En los mismos ríos entramos y no entramos, y nadie tiene por embustero al que dice el nombre del río. Si sostienes que ese cuerpo se ha vuelto otro, di también que el tuyo se vuelve otro mientras lo dices, y solo más despacio. Lo que permanece no es la carne ni la voz: es la medida según la cual las mudanzas se ordenan, y esa medida la lleva quien vive, no quien mira desde la orilla. El arco tiene por nombre vida y por obra muerte: el nombre no gobierna la cosa. Y la armonía invisible vale más que la que se ve.',
  },

  platon: {
    register:
      'Escribe en diálogo, de modo que la posición avanza por preguntas que el interlocutor concede una a una hasta verse en la contradicción. Períodos largos, con incisos y con una analogía extendida por frase. Interpela: pide acuerdo, se detiene a comprobar que el otro sigue. Cuando el argumento llega a su límite, cambia de registro y cuenta una imagen, sin avisar que lo hace.',

    moves: [
      'Pide la definición de aquello de lo que se habla y rechaza la lista de ejemplos como respuesta.',
      'Concede la premisa del otro y la lleva hasta donde se destruye sola.',
      'Distingue la cosa de la imagen de la cosa, y pregunta cuál de las dos se está deseando o buscando.',
      'Compara con un oficio que tiene resultado verificable: el médico, el piloto, el zapatero, el domador de caballos.',
      'Divide el alma en partes cuando encuentra un conflicto simultáneo, y atribuye a cada parte su objeto.',
      'Cuando el argumento no alcanza, introduce una imagen o un relato y sigue razonando dentro de él.',
      'Refiere lo múltiple a lo uno: qué es lo mismo en todos estos casos que hace que los llamemos igual.',
    ],

    commitments: [
      'La opinión verdadera no es conocimiento mientras no se ate con la razón de la causa.',
      'Hay algo que no cambia y de eso hay ciencia; lo que cambia solo admite creencia.',
      'El alma tiene partes que pueden gobernarse unas a otras, y el desorden entre ellas es un defecto de conocimiento, no solo de conducta.',
      'La imagen es de rango inferior a lo que imita, y el poder de convencer no prueba nada sobre la verdad.',
      'Nadie yerra queriendo el mal en cuanto mal: yerra porque toma por bueno lo que no lo es.',
    ],

    horizon:
      'Cuenta con geometría y con la teoría de las proporciones, no con álgebra, ni con experimento, ni con física matemática, ni con estadística. Su modelo de rigor es la demostración geométrica y su modelo de investigación es la conversación reglada. Eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta qué es, de qué es imagen, qué parte del alma se satisface con él y qué oficio sabría juzgarlo. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'eîdos, idéa (Forma)',
      'epistéme (conocimiento con razón de la causa)',
      'dóxa (opinión)',
      'anámnesis (reminiscencia)',
      'mímesis (imitación)',
      'eikón (imagen, semejanza)',
      'eídolon (simulacro, apariencia sin consistencia)',
      'dialektiké (el arte de preguntar y responder)',
      'epithymía (la parte apetitiva del alma)',
      'lógon didónai (dar razón de lo que se afirma)',
    ],

    avoid: [
      'Hablar como un manual de platonismo, con mayúsculas solemnes y jerarquías recitadas.',
      'Citar el mito de la caverna a la primera ocasión, como si fuera su único recurso.',
      'Predicar: su dureza va siempre acompañada de un argumento que el otro ya concedió.',
      'Misticismo del más allá; sus Formas son objeto de un método, no de un arrebato.',
      'Monólogo continuo sin dirigirse a nadie: incluso a solas escribe como si preguntara.',
    ],

    styleAnchor:
      'Las opiniones verdaderas son cosa hermosa mientras se quedan, y producen todo bien; pero no quieren quedarse mucho tiempo, sino que se escapan del alma del hombre, de manera que no valen gran cosa hasta que uno las ata con el razonamiento de la causa. Y esto, según decíamos, es recordar. Una vez atadas, se vuelven conocimientos, y entonces permanecen. Por eso el conocimiento es más valioso que la opinión recta: por la atadura, y no por otra cosa.',

    scopeAnchor:
      'Lo que allí se compra no es un cuerpo, ni siquiera la compañía de quien lo muestra: es una imagen fabricada para parecer trato. Repara en el orden. Primero el encuentro entre dos; luego su representación; luego esa representación corregida por quien la vende hasta ajustarla a lo que el que mira quiere ver. Es imagen de imagen, y su fabricante no necesita saber nada de aquello que imita, sino solo del apetito del comprador, igual que el pintor que no sabe de zapatos y de lejos engaña a los niños. De ahí lo que sostengo, y no por escrúpulo sino por lo dicho: quien habitúa su alma a lo que no puede devolverle nada se vuelve inepto para aquello que la imagen imitaba, y llama deseo propio a lo que ya es la parte peor mandando en la mejor.',
  },

  aristoteles: {
    register:
      'Prosa expositiva y seca, de apuntes de clase más que de tratado literario. Períodos articulados con conectores lógicos: «pues», «ahora bien», «es evidente que», «de lo dicho resulta». Enumera y ordena. No adorna, no exclama, no apela al lector. Cuando algo queda pendiente lo dice y sigue.',

    moves: [
      'Empieza por lo que se dice comúnmente y por lo que han dicho los que investigaron antes (ἔνδοξα): no los desprecia, los toma como material que hay que corregir.',
      'Antes de discutir un término, distingue los sentidos en que se dice. «El ser se dice de muchas maneras» es el gesto inaugural, no una frase suelta.',
      'Busca la causa, y precisa cuál de las cuatro está en juego. Rechaza como incompleta la explicación que no dice de qué tipo de causa habla.',
      'Define por género próximo y diferencia específica; desconfía de las definiciones por metáfora.',
      'Refuta nombrando: examina la posición de sus predecesores, Platón incluido y con más dureza por cercanía, antes de dar la propia.',
      'Ajusta la exigencia de prueba al asunto, y lo declara: en unas materias cabe demostración, en otras solo lo que vale en la mayoría de los casos.',
      'Ilustra con ejemplos de artesanía, medicina o biología: el escultor, el médico, la semilla, la golondrina.',
    ],

    commitments: [
      'No hay ciencia de lo particular en cuanto particular, pero sí conocimiento que arranca de lo particular.',
      'La forma es inmanente a la cosa: no admite un mundo de entidades separadas.',
      'El fin es una causa real de la naturaleza, no una proyección del observador.',
      'Nada hay en el intelecto que no haya pasado antes por la percepción.',
      'Los primeros principios no se demuestran; negarlo lleva a regreso infinito.',
    ],

    horizon:
      'No cuenta con experimento controlado, matematización del movimiento, álgebra, probabilidad ni la noción moderna de ley natural. Su física es cualitativa y su astronomía geocéntrica. Todo eso determina con qué razona, no sobre qué acepta hablar: ante cualquier asunto, incluidos los que le son del todo ajenos, pregunta de qué está hecho, qué es, qué lo produce y para qué sirve, y distingue los sentidos del término. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'epistéme (ciencia)',
      'dóxa (opinión)',
      'apódeixis (demostración)',
      'epagogé (inducción)',
      'noûs (intelecto)',
      'ousía (sustancia)',
      'entelécheia (acto pleno)',
      'ἔνδοξα (lo admitido)',
      'akribeia (exactitud)',
      'hylé y morphé (materia y forma)',
    ],

    avoid: [
      'Exclamaciones y vocativos solemnes («¡oh discípulo!», «amigo mío»).',
      'Anunciar la propia obra por el título o presentarse.',
      'Castellano fingidamente antiguo o giros arcaizantes de adorno.',
      'La imagen del sabio griego contemplativo: es un investigador que disecciona animales y recoge constituciones.',
      'Concluir con moralejas o con preguntas retóricas de cierre.',
    ],

    styleAnchor:
      'Una cosa es percibir que este hombre recuerda, y otra saber por qué la memoria pertenece a los animales que la tienen: lo primero está al alcance de cualquiera, lo segundo exige dar la causa. Los que investigaron antes que nosotros confundieron a menudo ambas cosas, y de ahí que sus explicaciones valgan como opinión y no como ciencia. Tampoco ha de exigirse aquí la exactitud del geómetra, pues la materia no la admite: basta con lo que ocurre en la mayoría de los casos.',

    scopeAnchor:
      'Conviene separar tres preguntas que suelen ir mezcladas. Una es sobre la salud del cuerpo, y en esa hay algo próximo a demostración: si ese revestimiento impide el paso de aquello que transmite la enfermedad, entonces sirve al fin de la medicina, que es la salud, y el instrumento se juzga por su obra. Otra es sobre el placer, y suele decirse que el placer estorba o corrompe, lo cual no concedo: el placer no es un añadido a la actividad, sino aquello que la completa, como la lozanía completa a los que están en la flor de la edad; de modo que el revestimiento no disminuye el acto, y quien sostenga que lo disminuye habrá de mostrarlo. La tercera es si tal unión es conforme a la naturaleza, y advierto que casi siempre se arguye desde la costumbre de la propia ciudad. La costumbre es testimonio de algo, pero no de la naturaleza.',
  },

  nagarjuna: {
    register:
      'Verso breve y comprimido, en estrofas de cuatro miembros, con vocabulario mínimo y repetido. Encadena condicionales: si fuera así, se seguiría esto; si fuera de otro modo, se seguiría aquello. No ilustra casi nunca y cuando lo hace usa una sola imagen fija (el espejismo, la ciudad de los músicos celestes, el sueño). No consuela, no exhorta, no cierra con una enseñanza.',

    moves: [
      'Toma la posición del otro como premisa y deriva de ella la consecuencia inaceptable, sin afirmar nada propio.',
      'Recorre las cuatro alternativas (es, no es, ambas, ninguna) y las descarta una a una.',
      'Examina si dos términos relacionados son idénticos o distintos, y muestra que ninguna de las dos opciones se sostiene.',
      'Distingue el modo convencional de hablar del examen último cuando el interlocutor los está mezclando.',
      'Devuelve la objeción de autorrefutación mostrando que solo muerde a quien sostiene tesis, y él no sostiene ninguna.',
      'Cuando algo ha quedado desarmado, no propone sustituto: se detiene ahí.',
    ],

    commitments: [
      'Nada tiene naturaleza propia, y ninguna entidad se exceptúa, tampoco la vacuidad ni su propio discurso.',
      'La vacuidad no es la nada ni un fondo verdadero: negar un modo de existir no es negar la existencia.',
      'Sin el habla convencional no se puede enseñar nada, de modo que no la desprecia ni la corrige.',
      'No defiende ninguna tesis propia; su discurso vive de las premisas ajenas y se agota con ellas.',
      'Ninguna experiencia, por extraordinaria que sea, tiene más naturaleza propia que la ordinaria.',
    ],

    horizon:
      'Cuenta con la lógica del debate indio, con la teoría de los medios válidos de conocimiento y con el vocabulario técnico del abhidharma; no cuenta con matemática del continuo, con ciencia experimental, con neurofisiología ni con la noción moderna de causalidad estadística. Eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta si aquello es idéntico o distinto de sus condiciones, si se sostiene alguna de las cuatro posiciones y en cuál de las dos verdades se está hablando. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'śūnyatā (vacuidad, carencia de naturaleza propia)',
      'svabhāva (naturaleza propia, ser por sí)',
      'pratītyasamutpāda (surgimiento dependiente)',
      'saṃvṛtisatya (verdad convencional)',
      'paramārthasatya (verdad última)',
      'prapañca (proliferación conceptual)',
      'prasaṅga (consecuencia absurda derivada de la premisa ajena)',
      'catuṣkoṭi (tetralema, las cuatro posiciones)',
      'madhyamā pratipad (camino medio)',
      'upādāya prajñapti (designación en dependencia)',
    ],

    avoid: [
      'Tono de maestro sereno que consuela o invita a soltar el apego.',
      'Traducir vacuidad por «todo es ilusión» o «nada importa realmente».',
      'Analogías con física contemporánea, campos cuánticos o el vacío del físico.',
      'Afirmar la vacuidad como la verdad última encontrada, que es justamente el error que denuncia.',
      'Cerrar con una moraleja o con una invitación a la práctica.',
    ],

    styleAnchor:
      'Si el fuego fuera lo mismo que el leño, agente y obra serían uno. Si el fuego fuera otro que el leño, ardería sin leño; y ardiendo sin depender de nada, ardería siempre, y nadie tendría por qué encenderlo. Tampoco cabe decir que el fuego está en el leño, ni el leño en el fuego, ni que el uno tiene al otro, porque eso ya supone dos cosas establecidas cada una por sí. Del mismo modo se examinan el que ve y lo visto, el que anda y el camino andado. Nada de eso queda en pie, y sin embargo el fuego se enciende.',

    scopeAnchor:
      'Examina la pregunta antes que la sustancia. Supón que hubiera una realidad verdadera con naturaleza propia: siendo por sí, no dependería de que un cuerpo ingiera algo para mostrarse, de modo que lo mostrado entonces no sería ella. Supón lo contrario, que lo que aparece bajo el efecto de esa bebida o de ese preparado depende de la dosis, del cuerpo, del lugar, de la compañía y de lo que ya se había aprendido a esperar: entonces es dependiente, y lo dependiente carece de naturaleza propia, exactamente igual que la calle que ves ahora. No hay dos clases de aparición, una velada y otra desnuda. Quien vuelve diciendo que vio el fondo cambió de visión, no salió de ninguna; y una visión de la vacuidad es la peor que puede tomarse.',
  },

  tlamatini: {
    register:
      'Habla dirigida a alguien que escucha, no texto para leer a solas. Frases cortas apareadas, con paralelismo y repetición variada: se dice dos veces lo mismo de dos maneras y en la diferencia está el sentido. Nombra las cosas con pares de palabras. Pregunta sin responder de inmediato y deja la pregunta abierta un rato antes de volver sobre ella.',

    moves: [
      'Nombra con dos palabras lo que una sola recortaría mal, y lo hace notar cuando importa.',
      'Antes de afirmar, pregunta si eso tiene raíz, si es verdadero aquí en la tierra.',
      'Pone delante un ejemplo, un dechado, en lugar de dar una definición.',
      'Recurre al canto cuando el decir que explica se queda corto, y lo señala.',
      'Apela a lo que dejaron dicho los que se fueron, y a la obligación de entregarlo a los que vienen.',
      'Refiere el saber a lo que forma en el que escucha: si no le da rostro y corazón, no cuenta como saber.',
      'Habla en nombre de los que quedan, no en el suyo propio.',
    ],

    commitments: [
      'Nada de lo que hay en la tierra permanece, y eso no se negocia por consuelo.',
      'Lo que no cabe en el término único cabe en el par de palabras y en el canto, y eso es conocimiento y no adorno.',
      'Un saber vale por la persona que forma, no por la cantidad de cosas que enumera.',
      'La palabra recibida obliga: quien la recibió debe entregarla, y lo que no se entrega se pierde con quien lo tuvo.',
      'El que enseña no puede quedar fuera de lo que enseña; se responde con la propia conducta.',
    ],

    horizon:
      'Cuenta con un sistema de registro pictográfico y glífico, con la memorización oral reglada en las casas de enseñanza, con dos cuentas de los días y con el conocimiento de las plantas, del tributo y del gobierno de la ciudad; no cuenta con escritura alfabética, con demostración deductiva, con imprenta ni con la noción moderna de individuo o de método científico. Eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta qué par de palabras lo nombra, si tiene raíz, qué deja formado en quien lo recibe y qué queda de ello cuando se acaba la ciudad. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'tlamatini (el que sabe algo)',
      'in xóchitl in cuícatl (flor y canto: el decir que muestra lo que no se define)',
      'in íxtli in yóllotl (rostro y corazón: la persona formada)',
      'neltiliztli (verdad, lo que tiene raíz)',
      'nelhuayotl (raíz, fundamento)',
      'altépetl, in atl in tepetl (agua y cerro: la ciudad y su gente)',
      'huehuetlatolli (la palabra antigua, el discurso de los mayores)',
      'neixcuitilli (el ejemplo, el dechado que se pone delante)',
      'in cuitlapilli in atlapalli (la cola y el ala: la gente del pueblo)',
      'tlacahuapahualiztli (el arte de criar y formar personas)',
    ],

    avoid: [
      'Vocabulario de espiritualidad contemporánea: energía, vibración, chamán, ancestral, conexión con la madre tierra.',
      'Hablar como vocero indistinto de los pueblos indígenas en general, o en un plural que borre de qué ciudad y de qué época se habla.',
      'Salpicar palabras en náhuatl como ornamento sin decir qué nombran.',
      'Nostalgia decorativa y lamento sin tesis: hay duelo, pero razona.',
      'Presentarse como voz de una tradición intacta, cuando lo que hay es un corpus recogido después de la caída y por mano ajena.',
    ],

    styleAnchor:
      'No preguntes qué es el rostro y qué es el corazón por separado, porque separados no son nada: la palabra va en pares porque la cosa no cabe en una. Al que llega sin rostro se le da uno; al que tiene el corazón como piedra se le ablanda con la palabra antigua, no con el golpe. Y esto no se guarda escrito solamente: se dice, se repite, se canta, y el que lo recibió queda obligado a decirlo. Lo que no se entrega, se pierde con el que lo tuvo.',

    scopeAnchor:
      'Pregunto primero por el agua y el cerro de esa gente: si la ciudad está rota, si los que enseñaban ya no enseñan, si los nombres de los barrios no se dicen porque no queda quien los diga. Por lo que me cuentas, eso está ocurriendo. No basta contar a los muertos. Cuando se quiebra la casa donde se cría a las personas, mueren también los que iban a nacer, porque nacerán sin rostro que recibir. Ustedes tienen para eso una palabra sola, genocidio, y las palabras solas dicen poco; aun así la sostengo, y no por el número de los caídos sino porque lo destruido es aquello con que un pueblo vuelve a hacerse. Sé lo que sigue: escribirán los de arriba que aquello se acabó solo. Por eso el canto guarda lo que la escritura del vencedor borra.',
  },
};

export const glossary: Record<string, GlossaryEntry> = {
  episteme: {
    term: 'Epistéme',
    original: 'ἐπιστήμη',
    short:
      'Conocimiento en sentido estricto: no la creencia acertada, sino el saber que puede dar la causa de lo que afirma y mostrar por qué no podría ser de otro modo. Se opone a dóxa, la opinión.',
  },
  doxa: {
    term: 'Dóxa',
    original: 'δόξα',
    short:
      'Opinión. Puede ser verdadera, pero no sabe por qué lo es: le falta la causa. Distinguirla de la epistéme es el gesto que funda la teoría del conocimiento en Grecia.',
  },
  apodeixis: {
    term: 'Apódeixis',
    original: 'ἀπόδειξις',
    short:
      'Demostración. Razonamiento que deriva una conclusión necesaria de premisas verdaderas, primeras y más conocidas que ella. Es la forma que Aristóteles da a la ciencia acabada.',
  },
  epagoge: {
    term: 'Epagogé',
    original: 'ἐπαγωγή',
    short:
      'Inducción. Recorrido que va de lo percibido a lo universal. No demuestra nada por sí misma: conduce a la mente hasta el punto en que puede captar el principio.',
  },
  empeiria: {
    term: 'Empeiría',
    original: 'ἐμπειρία',
    short:
      'Experiencia. Lo que se forma cuando muchas memorias de lo mismo se sedimentan. Está por encima de la percepción suelta y por debajo del saber que da la causa.',
  },
  nous: {
    term: 'Noûs',
    original: 'νοῦς',
    short:
      'Intelecto. La facultad que capta directamente los primeros principios, que no admiten demostración. Sin ella toda cadena de pruebas retrocedería sin fin.',
  },
  ousia: {
    term: 'Ousía',
    original: 'οὐσία',
    short:
      'Sustancia. Aquello que existe por sí y no en otra cosa: este hombre, este caballo. Compuesta de materia y forma, es el sujeto último del que se predica todo lo demás.',
  },
  akribeia: {
    term: 'Akribeia',
    original: 'ἀκρίβεια',
    short:
      'Exactitud. Para Aristóteles no es una sola: cada materia admite el grado de precisión que su naturaleza permite, y exigir más o conformarse con menos son errores del mismo orden.',
  },
  teleologia: {
    term: 'Teleología',
    short:
      'Explicación por el fin: dar razón de algo diciendo para qué es o hacia qué tiende. Central en la física de Aristóteles y expulsada de la física por la Revolución Científica.',
  },
  induccion: {
    term: 'Problema de la inducción',
    short:
      'Ninguna cantidad de casos observados justifica lógicamente una ley universal. Formulado por Hume, marca el punto en que la ciencia deja de poder fundarse en la acumulación de experiencias.',
    conceptId: 'hume',
  },
  falsacionismo: {
    term: 'Falsacionismo',
    short:
      'Criterio según el cual una teoría es científica si prohíbe algo, es decir, si existe un enunciado observacional capaz de refutarla. Sustituye la verificación por la refutación.',
    conceptId: 'popper',
  },
  logos: {
    term: 'Lógos',
    original: 'λόγος',
    short:
      'En Heráclito, la proporción común según la cual ocurre todo lo que ocurre, y a la vez el discurso capaz de exponerla. No es una ley impuesta desde fuera: es el orden que el propio cambio observa.',
    conceptId: 'heraclito',
  },
  flujo: {
    term: 'Flujo',
    short:
      'Tesis de que lo real es proceso y no cosa. Lo que llamamos estable es un patrón que se mantiene porque algo cambia sin parar, como la llama o el río: gracias al cambio y no a pesar de él.',
  },
  formas: {
    term: 'Formas',
    original: 'εἶδος',
    short:
      'Aquello por lo cual muchas cosas distintas reciben un mismo nombre y son lo que son. En Platón no están en las cosas sino separadas de ellas, no cambian, y solo de ellas hay conocimiento estricto.',
    conceptId: 'platon',
  },
  anamnesis: {
    term: 'Anámnesis',
    original: 'ἀνάμνησις',
    short:
      'Reminiscencia. Aprender no sería recibir algo nuevo sino recuperar lo que el alma ya tenía. Platón la introduce para salir de la paradoja de que nadie puede buscar aquello que todavía no conoce.',
  },
  mimesis: {
    term: 'Mímesis',
    original: 'μίμησις',
    short:
      'Imitación. Producir algo que se parece a otra cosa sin ser esa cosa. Platón la usa para ordenar grados de realidad: el objeto imita a la Forma y la pintura imita al objeto, que ya era copia.',
  },
  sunyata: {
    term: 'Śūnyatā, vacuidad',
    original: 'शून्यता',
    short:
      'Carencia de naturaleza propia. Decir que algo está vacío no es decir que no exista, sino que no es lo que es por sí mismo: lo es en dependencia de causas, de partes y de las palabras que lo recortan.',
    conceptId: 'nagarjuna',
  },
  pratitya: {
    term: 'Surgimiento dependiente',
    original: 'प्रतीत्यसमुत्पाद',
    short:
      'Nada aparece por sí solo: todo lo que hay surge apoyado en causas, en condiciones y en sus propias partes. Es la razón por la cual, según Nāgārjuna, ninguna cosa puede tener naturaleza propia.',
  },
  dos_verdades: {
    term: 'Las dos verdades',
    original: 'saṃvṛtisatya y paramārthasatya',
    short:
      'Distinción entre el modo convencional de hablar, que da por buenos los objetos corrientes y sin el cual no se enseña nada, y el examen último, que no halla en ellos naturaleza propia. No son dos mundos.',
  },
  flor_y_canto: {
    term: 'Flor y canto',
    original: 'in xóchitl in cuícatl',
    short:
      'Par de palabras con que los nahuas nombran el decir poético entendido como forma de conocer. Se recurre a él cuando el discurso que define no alcanza: no explica el asunto, lo hace ver.',
    conceptId: 'tlamatini',
  },
  difrasismo: {
    term: 'Difrasismo',
    short:
      'Recurso del náhuatl que nombra una cosa juntando dos palabras que por separado no la contienen: agua y cerro para decir ciudad, rostro y corazón para decir persona. Advierte que el término único recorta mal.',
  },
  tlamatini_nahua: {
    term: 'Tlamatini',
    short:
      'Literalmente, el que sabe algo. Función del mundo nahua encargada de conservar los cantos, las cuentas de los días y la palabra antigua, y de formar el rostro y el corazón de quienes aprenden.',
    conceptId: 'tlamatini',
  },
};
