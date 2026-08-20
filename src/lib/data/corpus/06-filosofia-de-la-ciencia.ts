import type {
  ConceptExposition,
  AuthorVoice,
  GlossaryEntry,
} from '@/types/philosophical';

// Filosofía de la ciencia del siglo XX: Círculo de Viena, Wittgenstein, giro lingüístico,
// Popper, Kuhn y el post positivismo que sostiene el manual metodológico vigente.

export const expositions: Record<string, ConceptExposition> = {
  positivismo_logico: {
    thesis:
      'El significado de un enunciado es el método de su verificación: una proposición dice algo del mundo solo si puede indicarse qué experiencia la haría verdadera o falsa. Lo que no cumple esa condición no es falso ni profundo, es carente de sentido, y por ahí se va la metafísica entera.',

    problem:
      'Después de Kant la filosofía había producido sistemas cada vez más ambiciosos y cada vez menos discutibles: no había manera de decir qué observación los pondría en aprietos. Al mismo tiempo la relatividad mostraba que conceptos tenidos por evidentes, como la simultaneidad, se desarmaban apenas se preguntaba con qué procedimiento se los mide. El [[circulo_de_viena|Círculo de Viena]] necesita un criterio que separe lo que puede discutirse con la experiencia de lo que solo suena a conocimiento.',

    keyNotions: [
      {
        term: 'Criterio verificacionista de significado',
        gloss:
          'No es una tesis sobre la verdad sino sobre el sentido. Comprender un enunciado equivale a saber en qué condiciones observables lo daríamos por verdadero. Quien no puede decir qué vería si su afirmación fuese cierta no ha dicho algo falso: no ha dicho nada, aunque la frase tenga sujeto y predicado.',
      },
      {
        term: 'Analítico y sintético',
        gloss:
          'Todo enunciado con sentido cae en uno de dos casilleros: o es verdadero por su forma lógica y por el significado de sus términos, y entonces no informa nada del mundo, como la lógica y la matemática, o es empírico y depende de lo observado. No queda lugar para el juicio sintético a priori de Kant.',
      },
      {
        term: 'Enunciados protocolares',
        gloss:
          'La base de la ciencia son registros singulares de observación, tan cercanos a lo dado como se pueda, contra los cuales se contrastan las teorías. La disputa interna sobre si describen vivencias privadas o cosas físicas públicas terminó inclinándose hacia lo segundo, porque una base privada no sirve para controlar a nadie.',
      },
      {
        term: 'Unidad de la ciencia y fisicalismo',
        gloss:
          'No hay varias clases de conocimiento con métodos distintos: hay un solo lenguaje científico, y los enunciados de la biología, la psicología y la sociología deben poder traducirse a él. La consecuencia práctica es que la psicología científica habla de conducta y de condiciones físicas, no de vivencias interiores incomunicables.',
      },
      {
        term: 'Eliminación de la metafísica',
        gloss:
          'Las proposiciones metafísicas no se refutan, se muestran vacías por análisis lógico de su lenguaje. Carnap sostuvo que expresan un sentimiento de la vida con medios inadecuados, como una música mal hecha. La crítica no es que sean audaces, sino que no arriesgan nada.',
      },
    ],

    development: `El grupo que se reúne en Viena alrededor de Moritz Schlick no discute desde la erudición sino desde dos herramientas nuevas. La primera es la lógica de Frege y Russell, que por primera vez permite exhibir la forma de un enunciado sin quedar preso de su apariencia gramatical: «la nada nadea» tiene forma de oración y ninguna forma lógica. La segunda es la física de Einstein, que había liquidado el espacio absoluto no por experimento decisivo sino por una pregunta de método, cuál es el procedimiento con el que se decide que dos sucesos son simultáneos. Ambas cosas sugieren el mismo movimiento: si un término no tiene un procedimiento asociado, no tiene contenido.

De ahí sale el **[[verificacionismo|criterio de verificación]]**. El sentido de una proposición consiste en el método de su verificación, y todo enunciado con sentido es analítico, y entonces nada dice del mundo, o empírico, y entonces algo debe poder observarse que lo decida. Contra la base se apoyan los **[[enunciado_protocolar|enunciados protocolares]]**, registros singulares lo más pegados posible a lo observado. La metafísica no queda refutada: queda descrita como una serie de sonidos con forma de afirmación. Y como el método es uno solo, la consigna es la **[[unidad_de_la_ciencia|unidad de la ciencia]]**, un lenguaje común en el que la psicología deba poder decir lo suyo.

El criterio se rompió por dentro, y esa es la parte que hay que aprender. Ningún número finito de observaciones verifica un enunciado universal, de modo que las leyes de la naturaleza, que eran el orgullo del programa, caían del lado sin sentido junto con la metafísica. Los enunciados sobre el pasado y sobre otras mentes quedaban en la misma situación. Y el propio criterio no es ni una tautología ni algo observable, luego se elimina a sí mismo. Vinieron debilitamientos sucesivos, confirmabilidad gradual, traducibilidad a un lenguaje de disposiciones, hasta que Hempel declaró abierto el problema y Quine atacó la distinción misma entre analítico y sintético.

Lo que sobrevivió no fue el criterio sino el hábito: exigir que una afirmación se conecte con algo observable antes de discutirla, y tratar la teoría según el **[[metodo_hipotetico_deductivo|método hipotético deductivo]]**. Popper conserva la exigencia y cambia su función, de criterio de sentido a criterio de **[[demarcacion|demarcación]]**.

En psicología el impacto fue inmediato y todavía se paga. La **[[operacionalizacion|definición operacional]]** viene de aquí: una variable es el conjunto de operaciones con que se la mide, y por eso tu tesis dedica un cuadro entero a decir que ansiedad es el puntaje en tal escala. El conductismo metodológico es fisicalismo aplicado. El precio también se conoce: si la definición operacional agota el constructo, entonces dos escalas distintas miden dos cosas distintas y no cabe hablar de la misma ansiedad, objeción que MacCorquodale y Meehl formularon en 1948 y que sigue siendo el problema central de la validez de constructo.`,

    objections: [
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'La verificación no puede ser criterio de nada: las leyes universales no son verificables y sin embargo son el núcleo de la ciencia. El problema real no es separar lo con sentido de lo sin sentido, sino la ciencia de la pseudociencia, y eso se decide por refutabilidad.',
      },
      {
        from: 'Quine',
        claim:
          'Ningún enunciado se contrasta solo: se contrasta el cuerpo entero del saber, y ante un resultado adverso siempre hay elección sobre qué ajustar. Con eso caen a la vez el reduccionismo verificacionista y la distinción tajante entre verdades analíticas y verdades de hecho.',
      },
      {
        from: 'Kuhn',
        fromId: 'kuhn',
        claim:
          'No existe el lenguaje observacional neutro que el programa presupone. Lo que cuenta como dato protocolar ya está determinado por la teoría vigente, de modo que la base empírica no es un tribunal independiente sino parte del mismo edificio que se quiere juzgar.',
      },
    ],

    works: [
      {
        title: 'La construcción lógica del mundo',
        year: 1928,
        note: 'Carnap intenta reconstruir todos los conceptos científicos a partir de una base de vivencias elementales y relaciones lógicas.',
      },
      {
        title: 'La concepción científica del mundo: el Círculo de Viena',
        year: 1929,
        note: 'El manifiesto del grupo, firmado por Hahn, Neurath y Carnap: programa, enemigos y lista de aliados.',
      },
      {
        title: 'La superación de la metafísica mediante el análisis lógico del lenguaje',
        year: 1932,
        note: 'Carnap muestra sobre frases de Heidegger cómo un enunciado puede tener forma gramatical y ninguna forma lógica.',
      },
      {
        title: 'Lenguaje, verdad y lógica',
        year: 1936,
        note: 'La versión de Ayer que difundió el programa en inglés y que fijó la imagen escolar del positivismo lógico.',
      },
      {
        title: 'Problemas y cambios en el criterio empirista de significado',
        year: 1950,
        note: 'Hempel repasa los intentos de arreglar el criterio y concluye que ninguno funciona: el acta de defunción escrita desde adentro.',
      },
    ],

    psychology: {
      claim:
        'Le dio a la psicología su criterio de significado y, con él, la forma en que la disciplina escribe. La exigencia de que un término signifique solo lo que sus condiciones de verificación permiten es lo que produce la definición operacional, y de ahí sale la estructura del artículo empírico que se sigue usando hoy.',
      lineages: [
        {
          name: 'Percy Bridgman, The Logic of Modern Physics',
          year: 1927,
          what: 'Propone que un concepto es sinónimo del conjunto de operaciones con que se mide. La longitud no es algo que la medición descubre, es lo que el procedimiento de medir produce.',
        },
        {
          name: 'S. S. Stevens, The operational definition of psychological concepts',
          year: 1935,
          what: 'Importa el operacionalismo a la psicología y le ofrece a la disciplina una salida al problema de hablar de estados internos sin caer en metafísica: se define inteligencia como lo que mide el test.',
        },
        {
          name: 'Clark Hull, Principles of Behavior',
          year: 1943,
          what: 'Construye un sistema axiomático con postulados y teoremas del que se deducen predicciones sobre la conducta. Es el intento más literal que hizo la psicología de ser lo que los positivistas pedían, y su fracaso es instructivo.',
        },
        {
          name: 'Cronbach y Meehl, Construct validity in psychological tests',
          year: 1955,
          what: 'Reconocen que el operacionalismo estricto es insostenible, porque ningún test agota su constructo, y lo reemplazan por la red nomológica: un constructo se valida por el conjunto de relaciones que sostiene con otros.',
        },
      ],
      development: `El problema que la psicología tenía en los años treinta era de legitimidad. Hablaba de inteligencia, de ansiedad y de motivación, que son cosas que nadie ve, y la acusación de estar haciendo metafísica con ropa de laboratorio era permanente. El operacionalismo le ofreció una salida elegante: si un concepto significa exactamente el procedimiento con que se mide, entonces la ansiedad deja de ser una entidad oculta y pasa a ser el puntaje obtenido en cierta escala aplicada de cierto modo. El costo de esa salida se pagaría después.

La salida funcionó como programa de escritura antes que como filosofía. La sección de método de un artículo, con su descripción de participantes, instrumentos y procedimiento, existe para que otro pueda repetir las operaciones exactas. Esa es una herencia directa del Círculo de Viena, y es probablemente su legado más útil, porque la replicabilidad depende de que las operaciones estén escritas y no supuestas.

Lo que se rompió fue la identificación entre concepto y medida. Si la inteligencia es lo que mide el test, entonces dos tests distintos miden dos cosas distintas y no se pueden comparar, y la pregunta por si un test mide bien la inteligencia pierde sentido, porque no hay nada aparte del test con que contrastarlo. Cronbach y Meehl salen de ahí con un movimiento que un estudiante de metodología debería poder reconstruir: el constructo no se define por una operación sino por la red de relaciones que la teoría predice, y validarlo consiste en poner esa red a prueba. Con eso la psicología recuperó la posibilidad de equivocarse al medir, que es justamente lo que el operacionalismo estricto le había quitado.

Queda un residuo que conviene mirar de frente. La disciplina sigue enseñando definiciones operacionales como si fueran el criterio de rigor, cuando la propia tradición que las inventó las abandonó hace setenta años. Escribir que el bienestar se operacionaliza como el puntaje total de una escala no resuelve el problema de validez, lo pospone. La pregunta que corresponde es otra: qué relaciones debería mostrar ese puntaje si de verdad estuviera midiendo bienestar, y qué resultado nos haría concluir que no lo mide.`,
      today: [
        'La sección de método y las definiciones operacionales son un requisito de cualquier informe de investigación, y su función real es permitir la réplica, no demostrar rigor por sí mismas.',
        'La validez de constructo y la red nomológica siguen siendo el marco con que se evalúa un instrumento psicométrico, y son la respuesta técnica al fracaso del operacionalismo.',
        'El preregistro de hipótesis y de plan de análisis es la versión contemporánea de la misma exigencia: dejar fijadas por anticipado las operaciones que van a contar como prueba.',
      ],
      caveats: [
        'El Círculo de Viena suele presentarse como una filosofía tecnocrática y conservadora, cuando fue un proyecto político de izquierda con Neurath a la cabeza, orientado a una educación pública que inmunizara contra la metafísica y contra el fascismo.',
        'El criterio de verificación se hundió por sus propios medios: el enunciado que exige que todo enunciado con sentido sea verificable no es él mismo verificable. Que la tradición se autorrefutara es parte del contenido del tema y no una nota al pie.',
      ],
    },
  },

  wittgenstein: {
    thesis:
      'El significado de una palabra no es el objeto que nombra ni una imagen mental que la acompañe: es su uso en la práctica reglada donde aparece. Por eso los problemas filosóficos no se resuelven con teorías nuevas sino describiendo cómo funcionan efectivamente las palabras cuando trabajan, y mostrando dónde el lenguaje quedó girando en el vacío.',

    problem:
      'La lógica de Frege y Russell, y el propio *Tractatus*, habían supuesto que bajo el lenguaje corriente hay una forma lógica oculta y única que el análisis debe sacar a la luz. Si eso fuese así, toda proposición con sentido sería una [[figuracion|figura]] de un estado de cosas posible, y el resto habría que callarlo. El segundo Wittgenstein sostiene que ese supuesto no describe ningún lenguaje real: es un ideal de cristal que nosotros mismos proyectamos y que luego confundimos con un descubrimiento.',

    keyNotions: [
      {
        term: 'La proposición como figura',
        gloss:
          'En el *Tractatus*, una proposición dice algo porque comparte una forma con el hecho que representa, como un modelo de un accidente hecho con muñecos y autos de juguete. De ahí se sigue que lo que no puede figurarse, incluida la forma misma, no puede decirse, aunque se muestre.',
      },
      {
        term: 'Decir y mostrar',
        gloss:
          'Hay algo que las proposiciones no enuncian y sin embargo hacen ver: su propia forma lógica, y con ella lo ético, lo estético y el sentido del mundo. La distinción salva a esos asuntos de ser tonterías y a la vez les prohíbe la forma de tesis discutible.',
      },
      {
        term: 'Juegos de lenguaje y parecidos de familia',
        gloss:
          'Hablar es una actividad entrelazada con acciones: pedir, contar, bromear, medir, dar órdenes. No hay una esencia común a todos esos usos, como no la hay entre todos los juegos; hay una red de semejanzas cruzadas. Buscar la definición única de un término es ya un error de método.',
      },
      {
        term: 'Seguir una regla',
        gloss:
          'Ninguna regla contiene sus propias aplicaciones: toda formulación admite interpretaciones que la harían concordar con cualquier cosa. Lo que corta el regreso no es otra regla sino una práctica adiestrada, un modo de obrar compartido que se manifiesta en cómo se corrige al que se equivoca.',
      },
      {
        term: 'El argumento del lenguaje privado',
        gloss:
          'Un lenguaje cuyos signos refirieran a sensaciones que solo su dueño puede conocer sería imposible, porque no habría diferencia entre aplicarlo correctamente y creer que se lo aplica correctamente. Sin criterio público de corrección no hay regla, y sin regla no hay significado.',
      },
    ],

    development: `El *Tractatus* resuelve el problema del sentido de un solo golpe. Una proposición dice algo porque es una figura: sus elementos se combinan como se combinan los objetos en el estado de cosas que representa, igual que un modelo de juguete puede representar un choque. De ahí salen consecuencias duras. Los enunciados de la lógica no dicen nada, son tautologías que exhiben la estructura del decir. Las proposiciones de la ética, la estética y la filosofía intentan decir lo que solo puede mostrarse, y por eso son sinsentidos, incluidas las del propio libro, que hay que arrojar tras haber subido por ellas. El **[[decir_mostrar|límite del decir]]** queda trazado desde adentro.

El giro consiste en preguntar de dónde salió el ideal. Nadie encontró jamás esa forma lógica cristalina; se la exigió de antemano, y luego se reprochó al lenguaje corriente no cumplirla. Basta mirar cómo se enseña una palabra a un niño, cómo un albañil pide una losa, cómo se cuenta un chiste, para ver que hay innumerables **[[juego_de_lenguaje|juegos de lenguaje]]** distintos y que la relación entre ellos es de **[[aire_de_familia|parecido de familia]]**, no de esencia compartida. Preguntar qué es el significado se sustituye por preguntar cómo se usa la palabra, y la filosofía deja de explicar para describir.

La pieza más incómoda es la del **[[seguir_una_regla|seguimiento de reglas]]**. Si comprender una regla fuese captar una interpretación, siempre cabría otra interpretación que hiciera concordar cualquier acción con la regla, y también cualquier acción con su contraria. El regreso solo se corta en la práctica: obedezco la regla ciegamente, es decir, sin elegir a cada paso, porque fui adiestrado en una costumbre y la comunidad me corrige cuando me desvío. La regla vive en la reacción ante el error, no en la formulación.

De ahí sale el **[[lenguaje_privado|argumento del lenguaje privado]]** y con él la sacudida para la psicología. Imagínese que cada uno tiene una caja con algo que llama escarabajo y que nadie puede mirar en la caja ajena. Si el nombre se define por lo que hay en la caja, entonces la caja podría estar vacía y el lenguaje funcionaría igual: el objeto privado se descuelga como irrelevante. No se sigue que el dolor no exista, sino que el sentido de la palabra dolor está anclado en conducta, circunstancia y corrección pública.

Esto le pega directo a la introspección como método y a los instrumentos que la heredan. Un autoinforme no es una ventana a un objeto interior que el sujeto lee: es un movimiento dentro de un juego aprendido, con sus criterios de aplicación y su gramática. Por eso una escala traducida literalmente puede fallar aunque cada palabra esté bien vertida, y por eso la validación de constructo no puede consistir en comparar el puntaje con la vivencia, sino en la red de usos y consecuencias en que el término trabaja.`,

    objections: [
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'Reducir la filosofía a terapia del lenguaje elimina por decreto problemas genuinos que no son lingüísticos: si hay o no regularidades en la naturaleza, si el determinismo es verdadero. Que un problema se exprese en palabras no lo convierte en un problema sobre palabras.',
      },
      {
        from: 'Kripke',
        claim:
          'El argumento del seguimiento de reglas prueba más de lo que su autor admite: si nada en mi mente ni en mi conducta pasada determina qué regla seguía, entonces no hay hecho alguno acerca de lo que significo, y la solución comunitaria es un acuerdo de asentimiento, no una restitución del significado.',
      },
      {
        from: 'Fenomenología',
        fromId: 'fenomenologia',
        claim:
          'El argumento contra el lenguaje privado muestra que lo vivido no puede fundar un lenguaje, no que sea irrelevante. La experiencia en primera persona sigue siendo el dato que la psicología necesita describir, y descartarla por razones gramaticales es cambiar el tema.',
      },
    ],

    works: [
      {
        title: 'Tractatus logico-philosophicus',
        year: 1921,
        note: 'La teoría figurativa de la proposición, el límite entre decir y mostrar y la escalera que hay que tirar.',
      },
      {
        title: 'Los cuadernos azul y marrón',
        year: 1958,
        note: 'Dictados de clase de los años treinta donde aparecen por primera vez los juegos de lenguaje y el ataque al ansia de generalidad.',
      },
      {
        title: 'Investigaciones filosóficas',
        year: 1953,
        note: 'La obra póstuma central: significado como uso, parecidos de familia, seguimiento de reglas y el argumento del lenguaje privado.',
      },
      {
        title: 'Observaciones sobre los fundamentos de la matemática',
        year: 1956,
        note: 'Aplicación del seguimiento de reglas al cálculo: la necesidad matemática como práctica institucionalizada.',
      },
      {
        title: 'Sobre la certeza',
        year: 1969,
        note: 'Las últimas notas: hay proposiciones que no se saben ni se dudan, funcionan como el cauce por donde corre la duda.',
      },
    ],

    psychology: {
      claim:
        'Le dejó a la psicología dos cosas incómodas: que el significado de una palabra es su uso en una práctica y no una imagen mental que la acompaña, y que un lenguaje puramente privado, cuyas reglas nadie más pudiera verificar, no sería un lenguaje. Lo segundo apunta al corazón del autoinforme, que es el instrumento más usado de la disciplina.',
      lineages: [
        {
          name: 'Tractatus logico-philosophicus',
          year: 1921,
          what: 'El Círculo de Viena lo lee como si autorizara el criterio de verificación y lo convierte en documento fundacional del positivismo lógico, en una interpretación que él consideró equivocada.',
        },
        {
          name: 'Investigaciones filosóficas',
          year: 1953,
          what: 'Introduce los juegos de lenguaje, los parecidos de familia y el argumento contra el lenguaje privado. Es el texto que la psicología del discurso y la filosofía de la mente siguen discutiendo.',
        },
        {
          name: 'Eleanor Rosch, categorización por prototipos',
          year: 1975,
          what: 'Muestra experimentalmente que las categorías cotidianas no tienen condiciones necesarias y suficientes sino miembros más y menos típicos, que es la versión empírica de los parecidos de familia.',
        },
        {
          name: 'Steven Hayes y la teoría del marco relacional',
          year: 2001,
          what: 'Construye un tratamiento conductual del lenguaje como conducta relacional aprendida, base teórica de la terapia de aceptación y compromiso, donde el problema clínico se trata como una relación con las propias palabras.',
        },
      ],
      development: `La psicología heredó del sentido común una imagen del lenguaje que Wittgenstein desmonta: la idea de que una palabra significa porque está asociada a una representación interna, y que entender es tener esa representación. Si eso fuera así, aprender el significado de tristeza consistiría en asociar el sonido con una imagen privada. El argumento del lenguaje privado muestra por qué no puede ser: si el criterio de aplicar bien la palabra fuera solo mi impresión de estar aplicándola bien, no habría diferencia entre usarla correctamente y creer que la uso correctamente, y donde no cabe el error tampoco cabe la regla.

Esto le llega a la psicología en su punto más sensible. Cuando un instrumento pregunta cuán ansioso se siente alguien en una escala de uno a siete, la respuesta no es la lectura de un dial interno, es un acto en una práctica pública donde el informante aprendió a usar la palabra ansioso comparándose con otros. Eso no invalida el autoinforme, pero cambia lo que se está midiendo: no un estado privado, sino la aplicación de un vocabulario compartido a la propia situación. La consecuencia metodológica es directa y muchas veces se pasa por alto: cuando dos grupos culturales responden distinto en una escala de emociones, no se sabe de antemano si difieren los estados o los usos.

Los parecidos de familia tuvieron una carrera propia. La idea de que los miembros de una categoría comparten un aire común sin compartir un rasgo único reaparece en la investigación de Rosch, y de ahí pasa a la clasificación psiquiátrica: los criterios politéticos del DSM, donde bastan cinco de nueve síntomas, producen pacientes con el mismo diagnóstico y sin un solo síntoma en común. Esa estructura tiene un nombre wittgensteiniano y un problema de validez que la disciplina discute desde hace décadas.

Lo que se abre al final es una pregunta de método. Si el significado está en el uso, entonces el análisis del lenguaje deja de ser un rodeo hacia lo mental y se vuelve un objeto legítimo por derecho propio, que es exactamente lo que hará la psicología discursiva.`,
      today: [
        'La discusión sobre equivalencia de medida entre culturas es, en el fondo, la pregunta por si dos grupos juegan el mismo juego de lenguaje al responder un cuestionario.',
        'Los criterios politéticos del DSM producen categorías con parecidos de familia y sin núcleo común, lo que alimenta el debate sobre heterogeneidad diagnóstica.',
        'La terapia de aceptación y compromiso trabaja con la relación del consultante con sus propias palabras en lugar de con su contenido, que es una intervención de aire wittgensteiniano aunque llegue por otra vía.',
      ],
      caveats: [
        'El argumento del lenguaje privado no niega que exista la experiencia privada ni que duela un dolor. Niega que pueda haber un lenguaje cuyas reglas solo el hablante pudiera comprobar, que es una tesis mucho más acotada y que se cita mal casi siempre.',
        'Rosch no diseñó sus experimentos para probar a Wittgenstein, y presentarlos como su confirmación empírica invierte el orden: son dos líneas que convergen, y la convergencia es interesante justamente porque es independiente.',
      ],
    },
  },

  giro_linguistico: {
    thesis:
      'El lugar del problema epistemológico se desplaza de la conciencia al lenguaje: no hay acceso a lo pensado que no pase por los enunciados en que se lo piensa y se lo comunica. Por eso las preguntas sobre el conocimiento se replantean como preguntas sobre el sentido, la referencia y el uso, y el análisis del lenguaje deja de ser un paso previo para convertirse en el trabajo mismo.',

    problem:
      'De Descartes a Husserl la escena filosófica había sido la misma: una conciencia individual frente a sus representaciones, y el problema consistía en asegurar que esas representaciones alcanzaran el mundo. Ese planteo supone que el pensamiento está completo antes del lenguaje y que las palabras son su vestido. Cuando se muestra que no hay contenido mental identificable sin los criterios públicos con que se lo expresa, la escena entera queda sin piso y hay que empezar por otro lado.',

    keyNotions: [
      {
        term: 'Prioridad del lenguaje sobre el pensamiento',
        gloss:
          'La unidad mínima de significado no es la palabra suelta ni la idea, sino el enunciado en su contexto. Analizar un pensamiento pasa a ser analizar la oración que lo expresa, y las preguntas por la estructura de la mente se vuelven preguntas por la estructura de lo que se dice.',
      },
      {
        term: 'La rama analítica',
        gloss:
          'Trabaja con lógica formal y con el lenguaje ordinario: teoría de las descripciones, análisis del significado, actos de habla, crítica del dato sensorial. Su meta es la claridad, y su método consiste en disolver problemas mostrando que nacían de una construcción gramatical mal leída.',
      },
      {
        term: 'La rama hermenéutica y continental',
        gloss:
          'Toma el lenguaje no como instrumento de análisis sino como aquello en lo que ya estamos: el ser que puede comprenderse es lenguaje, y toda comprensión ocurre desde una tradición que provee de antemano las categorías. De ahí salen la hermenéutica, la teoría del texto y el análisis del discurso.',
      },
      {
        term: 'La caída del dato puro',
        gloss:
          'No hay un estrato de experiencia que se registre sin ninguna categoría y sirva de tribunal último. Todo reporte de observación usa conceptos, y usarlos implica estar ya en el espacio de las razones, donde se justifica y se corrige, no en un contacto mudo con lo dado.',
      },
    ],

    development: `Durante tres siglos la teoría del conocimiento tuvo la misma forma. Había un sujeto con ideas en la cabeza y un mundo afuera, y el problema era el puente. Los empiristas lo intentaron con impresiones, Kant con formas y categorías, Husserl con la descripción de vivencias depuradas. El supuesto compartido, casi invisible, era que el pensamiento se constituye primero y luego se viste de palabras, de modo que el análisis del lenguaje sería a lo sumo una higiene preliminar.

El desplazamiento se produce por dos caminos que casi no se hablaron entre sí. Frege introduce el **[[principio_de_contexto|principio de contexto]]**, que prohíbe preguntar por el significado de una palabra fuera del enunciado, y con la teoría de las descripciones de Russell se vuelve rutinario mostrar que la forma gramatical engaña sobre la forma lógica. Wittgenstein remata: el significado es uso, y no hay estado mental privado que fije lo que quiero decir. Por el otro camino, Heidegger sostiene que no disponemos del lenguaje como de una herramienta, sino que habitamos en él, y Gadamer convierte eso en método: comprender es entrar en un diálogo donde la propia precomprensión se pone en juego.

La consecuencia común es que el sentido es público. Si no hay contenido mental identificable sin criterios compartidos de uso, entonces la epistemología no puede fundarse en lo que un individuo ve con claridad. Sellars llama **[[mito_de_lo_dado|mito de lo dado]]** a la ilusión de un estrato de experiencia que justifique sin necesitar a su vez justificación, y Austin muestra con la teoría del **[[acto_de_habla|acto de habla]]** que la mayoría de las emisiones no describen nada: prometen, bautizan, condenan, sentencian. Decir algo es hacer algo, y evaluar solo su verdad es perder de vista lo que se hizo.

Desde ahí se conecta todo lo que sigue. La **[[carga_teorica|carga teórica de la observación]]** en Kuhn es la versión metodológica de la misma tesis. El construccionismo la radicaliza: si las categorías con que describimos son lenguaje, entonces las cosas que llamamos trastornos, géneros o identidades se sostienen en prácticas discursivas. Foucault añade la pregunta por quién tiene autorizado el uso. El riesgo, señalado desde temprano, es el textualismo, tratar todo problema como problema de vocabulario y perder aquello sobre lo que se habla.

Para la investigación en psicología esto se traduce en técnicas concretas. Un ítem de cuestionario no es un estímulo neutro: es un acto de habla al que el sujeto responde según el juego en que cree estar, lo que explica la deseabilidad social mejor que cualquier teoría de la mentira. Adaptar un instrumento a otro país no es traducir palabras sino restablecer usos equivalentes, y por eso los protocolos de adaptación exigen equivalencia semántica, conceptual y de constructo, con jueces y estudio piloto. Y la investigación cualitativa entera, análisis temático, análisis de discurso, teoría fundamentada, es hija de este giro: su dato es lo dicho, no lo vivido detrás de lo dicho.`,

    objections: [
      {
        from: 'Post positivismo y realismo crítico',
        fromId: 'postpositivismo',
        claim:
          'Convertir toda cuestión sobre lo que existe en una cuestión sobre cómo lo decimos es una falacia epistémica: confunde el orden del ser con el orden del saber. Los mecanismos que estudia una ciencia operan aunque nadie disponga del vocabulario para nombrarlos.',
      },
      {
        from: 'Enactivismo',
        fromId: 'enactivismo',
        claim:
          'Hay cognición sin lenguaje: un organismo discrimina, anticipa y aprende antes de cualquier gramática, y también lo hacen los animales y los lactantes. Poner el lenguaje como condición del conocimiento deja fuera la mayor parte de los procesos cognitivos que existen.',
      },
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'La filosofía tiene problemas propios que no son lingüísticos y que ninguna aclaración de usos resuelve: la validez de la inducción, el estatuto de las leyes, el determinismo. El giro produjo escuelas dedicadas a discutir palabras mientras las ciencias resolvían las preguntas de verdad.',
      },
    ],

    works: [
      {
        title: 'Fundamentos de la aritmética',
        year: 1884,
        note: 'Frege formula el principio de contexto: nunca preguntar por el significado de una palabra aislada, sino dentro del enunciado.',
      },
      {
        title: 'Sobre el denotar',
        year: 1905,
        note: 'Russell muestra que la forma gramatical de una frase puede ocultar por completo su forma lógica: el modelo del análisis filosófico.',
      },
      {
        title: 'El empirismo y la filosofía de la mente',
        year: 1956,
        note: 'Sellars desmonta el mito de lo dado y sitúa el conocimiento en el espacio de las razones.',
      },
      {
        title: 'Verdad y método',
        year: 1960,
        note: 'Gadamer convierte el lenguaje en el medio universal de la comprensión y rehabilita el prejuicio como condición de todo entender.',
      },
      {
        title: 'Cómo hacer cosas con palabras',
        year: 1962,
        note: 'Austin distingue lo que un enunciado dice de lo que hace al decirlo, y funda la teoría de los actos de habla.',
      },
    ],

    psychology: {
      claim:
        'Le propuso a la psicología que el lenguaje no es el vehículo con que se informa un estado mental sino parte de lo que constituye ese estado. De ahí salió una familia entera de métodos, el análisis del discurso, y una discusión que sigue abierta sobre si las actitudes son entidades internas o producciones situadas.',
      lineages: [
        {
          name: 'Benjamin Lee Whorf, Language, Thought and Reality',
          year: 1956,
          what: 'La compilación póstuma que instala la hipótesis de la relatividad lingüística: la lengua que se habla condiciona las distinciones que se hacen. Es el punto de entrada del problema a la psicología cognitiva.',
        },
        {
          name: 'J. L. Austin, How to Do Things with Words',
          year: 1962,
          what: 'Muestra que decir algo es hacer algo, y que muchas emisiones no son verdaderas ni falsas sino afortunadas o fallidas. Reordena qué cuenta como dato cuando alguien habla en una entrevista.',
        },
        {
          name: 'Potter y Wetherell, Discourse and Social Psychology',
          year: 1987,
          what: 'Tratan las actitudes como construcciones que se producen en la interacción y varían según lo que el hablante está haciendo al hablar, en vez de como disposiciones estables que un cuestionario revela.',
        },
        {
          name: 'Lera Boroditsky y la relatividad lingüística experimental',
          year: 2001,
          what: 'Retoma la hipótesis con diseños controlados y encuentra efectos acotados pero reales del vocabulario y la gramática sobre juicios de tiempo, espacio y género.',
        },
      ],
      development: `Durante buena parte del siglo XX la psicología trató el lenguaje como una ventana: alguien tiene una actitud y el cuestionario la deja ver, con algo de ruido y de deseabilidad social. El giro lingüístico propone otra cosa. Si al decir juro estoy jurando y no describiendo un juramento interno, entonces hay un conjunto grande de fenómenos psicológicos que existen en la emisión y no antes de ella. La pregunta deja de ser cuánto distorsiona el lenguaje al estado y pasa a ser qué está haciendo la persona al decir lo que dice.

La psicología social fue la que llevó esto más lejos y la que más resistencia encontró. Potter y Wetherell mostraron que una misma persona, entrevistada sobre el mismo asunto, produce versiones incompatibles según a quién le habla y qué está justificando, y sacaron la conclusión fuerte: la inconsistencia no es error de medida, es el dato. Si la actitud fuera una disposición estable, la variabilidad sería ruido; si es una construcción situada, la variabilidad es exactamente lo que hay que explicar. La disciplina no resolvió el punto, lo repartió: la psicología social experimental siguió midiendo actitudes y la psicología discursiva siguió analizando repertorios.

La rama cognitiva tuvo una historia distinta y más ordenada. La versión fuerte de Whorf, según la cual la lengua determina lo que se puede pensar, quedó descartada por la investigación sobre color y sobre categorización. La versión débil, según la cual la lengua hace más disponibles ciertas distinciones y afecta juicios rápidos, sobrevivió con evidencia experimental. Ese arco es un buen ejemplo para un curso de metodología, porque muestra cómo una hipótesis demasiado ambiciosa se vuelve investigable al debilitarla, y cómo debilitarla no es rendirse.

Para quien investiga, la exigencia práctica es incómoda. Una entrevista no es un registro de contenidos mentales, es una interacción donde el participante hace cosas: se justifica, se protege, se presenta. Analizarla como si fuera un volcado de creencias es una decisión teórica, y conviene tomarla a sabiendas.`,
      today: [
        'El análisis del discurso y el análisis crítico del discurso son métodos consolidados en psicología social y en investigación en salud, con criterios de calidad propios que no son los de la investigación cuantitativa.',
        'La discusión sobre lenguaje inclusivo es un caso donde la tesis de la relatividad lingüística se vuelve política pública, y donde la evidencia disponible es más modesta que las afirmaciones de ambos bandos.',
        'La pregunta por si las actitudes existen como disposiciones estables sigue viva cada vez que un cuestionario y una entrevista sobre el mismo tema arrojan resultados incompatibles.',
      ],
      caveats: [
        'Whorf no era lingüista de formación sino ingeniero químico y perito de seguros, y varios de sus ejemplos más citados, en particular el de las palabras esquimales para la nieve, fueron desmentidos. La versión débil de su hipótesis se sostiene, la fuerte no.',
        'Análisis del discurso nombra al menos tres cosas distintas: la psicología discursiva británica, el análisis crítico del discurso de tradición foucaultiana y el análisis conversacional. Usarlas como sinónimos en un método de tesis produce un diseño incoherente.',
      ],
    },
  },

  popper: {
    thesis:
      'Ninguna acumulación de casos favorables prueba una ley universal, pero un solo caso contrario la refuta: esa asimetría lógica, y no un método de prueba, es lo que hace posible la ciencia. Una teoría es científica en la medida en que prohíbe algo, es decir, en que puede decirse qué observación la haría caer.',

    problem:
      'El problema de la inducción seguía sin solución y el criterio verificacionista lo empeoraba: dejaba fuera las leyes universales, que no son verificables, y dejaba dentro doctrinas que confirman todo lo que ocurre. Popper ve que la pregunta estaba mal puesta. No hay que separar lo que tiene sentido de lo que no lo tiene, sino la ciencia empírica de aquello que se le parece sin correr ningún riesgo.',

    keyNotions: [
      {
        term: 'Asimetría entre verificar y refutar',
        gloss:
          'De un número cualquiera de observaciones favorables no se sigue lógicamente ningún enunciado universal, mientras que de un solo enunciado singular contrario se sigue su negación por modus tollens. La ciencia se apoya en la única de las dos inferencias que es deductivamente válida.',
      },
      {
        term: 'Demarcación, no significado',
        gloss:
          'La línea no separa lo con sentido de lo absurdo sino la ciencia empírica de la metafísica, la pseudociencia y la lógica. Una teoría no científica puede ser verdadera, fecunda e incluso convertirse mañana en ciencia: lo que no puede es reclamar respaldo empírico sin arriesgarse.',
      },
      {
        term: 'Grados de contrastabilidad',
        gloss:
          'La falsabilidad admite más y menos: una teoría prohíbe tanto más cuanto más amplia es la clase de sucesos que excluye. Por eso la hipótesis preferible es la más improbable y la más precisa, la que dice el planeta estará en tal punto a tal hora y no la que dice que algo se moverá.',
      },
      {
        term: 'Estratagemas convencionalistas',
        gloss:
          'Ante un resultado adverso siempre puede salvarse la teoría añadiendo un supuesto, redefiniendo un término o desestimando el dato. La operación es lógicamente impecable y metodológicamente ruinosa, porque el ajuste rebaja el contenido empírico: la teoría sigue en pie y ha dejado de prohibir.',
      },
      {
        term: 'Falibilismo y corroboración',
        gloss:
          'Ninguna teoría queda establecida por muchos contrastes que supere. Que haya resistido pruebas severas hasta hoy se llama corroboración, y es un informe sobre el pasado, no una probabilidad de acertar mañana. El conocimiento avanza por conjeturas audaces y eliminación de errores, nunca por acumulación de certezas.',
      },
    ],

    development: `Hume había mostrado que de casos observados no se sigue ninguna ley, y no encontró salida lógica: solo el hábito de esperar lo acostumbrado. El Círculo de Viena agravó la situación al proponer la verificabilidad como criterio de sentido, porque los enunciados universales, que son justamente lo que la física afirma, no pueden verificarse nunca. Y del otro lado había teorías que parecían verificarse en todas partes: cualquier conducta humana confirmaba el complejo de Edipo o la lucha de clases, y sus partidarios contaban eso como fuerza. Popper ve ahí el síntoma, no la virtud.

Su giro es puramente lógico y por eso es tan filoso. Un enunciado universal no puede deducirse de enunciados singulares, pero puede ser contradicho por uno solo: si todos los cisnes son blancos y aquí hay uno negro, la teoría cae por modus tollens. Entonces la ciencia no procede probando sino exponiendo. **[[falsacion|Falsar]]** no es un accidente lamentable, es la operación que da contenido: una teoría dice tanto más cuanto más prohíbe, y el mérito está en la audacia de la prohibición. De ahí la **[[demarcacion|demarcación]]**, que no es un criterio de sentido sino de método, y que admite grados, medidos por el **[[grado_de_falsabilidad|grado de falsabilidad]]**.

La consecuencia es un **[[falibilismo|falibilismo]]** sin consuelo. Nunca sabemos que una teoría es verdadera; a lo sumo sabemos que hasta ahora no ha sido eliminada. La corroboración no es probabilidad, y las teorías más corroboradas son las más improbables a priori. Popper sabe además que el golpe nunca cae sobre un enunciado aislado: entre la teoría y el dato hay siempre una **[[hipotesis_auxiliar|hipótesis auxiliar]]**, sobre el instrumento, sobre las condiciones iniciales, sobre la muestra. Ahí está la **[[tesis_duhem_quine|tesis de Duhem y Quine]]**, y por eso el falsacionismo no puede ser una lógica automática sino un conjunto de reglas metodológicas: se prohíbe rescatar la teoría con retoques que rebajen su contenido, es decir, se prohíbe la **[[inmunizacion|inmunización]]**. Y hasta los enunciados básicos se aceptan por decisión, como el veredicto de un jurado que puede revisarse.

Lakatos concluirá que la unidad que se juzga no es una teoría sino un programa con núcleo protegido; Kuhn objetará que los científicos reales no abandonan la teoría al primer contraejemplo, y hacen bien; Feyerabend dirá que ninguna regla sobrevive a la historia.

En metodología cuantitativa el parentesco es directo y vale la pena verlo bien. El contraste de **[[hipotesis_nula|hipótesis nula]]** funciona como un modus tollens probabilístico: se pone a prueba la hipótesis que se quiere descartar, y por eso nunca se acepta la nula, solo se falla en rechazarla. El problema es que la teoría sustantiva no es lo contrastado, y ahí entra la inmunización: probar diez análisis y reportar el que dio significativo, decidir el criterio de exclusión después de mirar los datos, o presentar como hipótesis previa lo que se encontró al final. El preregistro no es burocracia, es escribir la prohibición antes de mirar.`,

    objections: [
      {
        from: 'Kuhn',
        fromId: 'kuhn',
        claim:
          'Ningún científico abandona su teoría ante la primera anomalía, y si lo hiciera no habría ciencia: la investigación productiva exige un compromiso dogmático que permita resolver enigmas. El falsacionismo describe episodios revolucionarios raros y no el trabajo cotidiano.',
      },
      {
        from: 'Lakatos y la tesis de Duhem y Quine',
        claim:
          'No hay experimento crucial. Como la contrastación afecta a un sistema completo, la lógica nunca indica qué parte ceder, y las hipótesis auxiliares que Popper llama estratagemas han producido descubrimientos, como el de Neptuno. La regla contra las salvaciones ad hoc no puede aplicarse en tiempo real.',
      },
      {
        from: 'Bayesianos y Wesley Salmon',
        claim:
          'Si la corroboración no dice nada sobre el futuro, no hay razón alguna para preferir una teoría corroborada al construir un puente. Popper necesita en la práctica exactamente la inferencia inductiva que declara inexistente, y la teoría de la probabilidad la formula mejor.',
      },
    ],

    works: [
      {
        title: 'La lógica de la investigación científica',
        year: 1934,
        note: 'La obra fundacional: asimetría lógica, demarcación, grados de falsabilidad y aceptación convencional de los enunciados básicos.',
      },
      {
        title: 'La miseria del historicismo',
        year: 1957,
        note: 'Contra la pretensión de leyes del desarrollo histórico y contra la ingeniería social a gran escala.',
      },
      {
        title: 'La sociedad abierta y sus enemigos',
        year: 1945,
        note: 'Aplicación política del falibilismo: las instituciones valen por lo fácil que es corregirlas sin violencia.',
      },
      {
        title: 'Conjeturas y refutaciones',
        year: 1963,
        note: 'Los ensayos donde discute el psicoanálisis y el marxismo como casos de teorías que explican todo y prohíben nada.',
      },
      {
        title: 'Conocimiento objetivo',
        year: 1972,
        note: 'El conocimiento sin sujeto cognoscente y el mundo tres: las teorías como objetos públicos con consecuencias que nadie previó.',
      },
    ],

    psychology: {
      claim:
        'La psicología cuantitativa dice trabajar bajo su criterio y en rigor no lo hace: lo que aprendió a ejecutar fue el contraste de hipótesis nulas, que se le parece por fuera y difiere en lo esencial. Entender esa diferencia es lo que separa a un estudiante que sabe qué está haciendo con un valor p de uno que solo sabe calcularlo.',
      lineages: [
        {
          name: 'La lógica de la investigación científica',
          year: 1934,
          what: 'Establece que una teoría es científica si prohíbe algo, y que la fuerza de una teoría se mide por lo que arriesga. Llega masivamente a la psicología con la traducción inglesa de 1959.',
        },
        {
          name: 'Ronald Fisher, The Design of Experiments',
          year: 1935,
          what: 'Introduce la hipótesis nula y el nivel de significación como herramienta de decisión. La psicología fundió después este procedimiento con el de Neyman y Pearson en un híbrido que ninguno de los tres habría firmado.',
        },
        {
          name: 'Paul Meehl, Theoretical risks and tabular asterisks',
          year: 1978,
          what: 'Demuestra que en psicología la hipótesis nula de diferencia exactamente cero es casi siempre falsa de antemano, de modo que rechazarla con una muestra grande no informa nada sobre la teoría.',
        },
        {
          name: 'Los informes registrados y el preregistro',
          year: 2013,
          what: 'Las revistas empiezan a aceptar artículos evaluados por su diseño antes de conocer los resultados. Es el intento institucional de recuperar el riesgo que el falsacionismo pedía y que la práctica había disuelto.',
        },
      ],
      development: `Popper propone algo simple y exigente: una teoría vale por lo que prohíbe. Si de ella no se sigue ningún resultado observable que la dejaría mal parada, entonces no dice nada sobre el mundo. La psicología adoptó el vocabulario con entusiasmo y ejecutó otra cosa. En un contraste de hipótesis nulas no se pone a prueba la teoría del investigador, se pone a prueba una hipótesis alternativa que nadie sostiene, la de que el efecto es exactamente cero, y su rechazo se cuenta como apoyo a la propia teoría. Esa inferencia no es popperiana: confirma sin arriesgar.

Meehl lo formuló con una claridad que todavía incomoda. En psicología casi todas las variables están correlacionadas con casi todas las demás en alguna medida, aunque sea pequeña, de modo que la nula es falsa antes de recoger un solo dato. Rechazarla depende entonces del tamaño de la muestra y no de la verdad de la teoría, y aumentar la muestra hace más fácil obtener un resultado significativo. En física, decía, una teoría más precisa se expone más al fracaso; en psicología, más precisión estadística vuelve el fracaso más improbable. La comparación es devastadora y sigue vigente.

La consecuencia práctica se hizo visible en la crisis de replicación. Cuando la evidencia se acumula por rechazos de la nula y la publicación premia los resultados significativos, el sistema produce un archivo lleno de efectos que no vuelven a aparecer. Lo que falló no fue la honestidad de los investigadores sino la lógica del procedimiento, que permitía tomar decisiones sobre el análisis con los datos ya a la vista sin que quedara rastro.

De ahí viene la respuesta institucional, que es más popperiana que todo lo anterior. Preregistrar es declarar por anticipado qué resultado contaría como fracaso, y un informe registrado se publica según su diseño y no según lo que arrojó. Para quien está haciendo su tesis, la exigencia se resume en una pregunta que conviene poder responder antes de recoger datos: qué resultado me haría concluir que mi hipótesis es falsa. Si no hay ninguno, no hay investigación empírica.`,
      today: [
        'El umbral de significación de 0,05 sigue organizando qué se publica, y la discusión sobre bajarlo, abandonarlo o reemplazarlo por estimación con intervalos es un debate abierto en la disciplina.',
        'El preregistro y los informes registrados son requisito creciente en revistas de psicología, y cambian el incentivo desde encontrar algo hacia responder bien una pregunta.',
        'Los tamaños del efecto y los intervalos de confianza se piden hoy junto al valor p, porque informan de la magnitud de lo encontrado y no solo de su improbabilidad bajo una hipótesis que nadie defiende.',
      ],
      caveats: [
        'Contrastar la hipótesis nula no es falsar en el sentido de Popper. Se refuta una hipótesis que el investigador no sostiene y se toma esa refutación como confirmación de la propia, que es exactamente el movimiento que Popper prohibía.',
        'Popper usó al psicoanálisis como su ejemplo de pseudociencia, pero la crítica más fuerte no es la suya sino la de Grünbaum, que muestra que sí había afirmaciones contrastables y las evalúa. Quedarse con Popper deja al estudiante con la versión más débil del argumento.',
      ],
    },
  },

  kuhn: {
    thesis:
      'La ciencia madura no avanza por acumulación de verdades sino por largos períodos de trabajo dentro de un [[paradigma|paradigma]] compartido, interrumpidos por revoluciones que cambian a la vez las teorías, los problemas legítimos y los criterios de solución. Después de una revolución los científicos trabajan en un mundo distinto, porque lo que cuenta como observación ya no es lo mismo.',

    problem:
      'La imagen recibida, tanto la positivista como la falsacionista, describía la ciencia como una relación entre enunciados y datos, sometida a reglas atemporales. Pero al leer los textos originales de Aristóteles, de Priestley o de los astrónomos anteriores a Copérnico, esa imagen no reconoce nada de lo que efectivamente ocurrió: los científicos no abandonan sus teorías cuando aparece un caso adverso, y los manuales reescriben el pasado para que parezca una marcha continua. Hace falta una descripción que resista el archivo.',

    keyNotions: [
      {
        term: 'Paradigma como ejemplar',
        gloss:
          'Antes que una visión del mundo, un paradigma es un logro concreto: un problema resuelto que la comunidad acepta como modelo y que los estudiantes aprenden haciendo ejercicios parecidos. Se aprende a ver un caso nuevo como semejante a otro ya resuelto, y esa capacidad no se deja reducir a reglas explícitas.',
      },
      {
        term: 'Ciencia normal y enigmas',
        gloss:
          'El trabajo cotidiano no busca novedades: articula el paradigma, determina constantes con más decimales, extiende la teoría a casos vecinos. Sus problemas son enigmas, tienen solución garantizada por el paradigma, y cuando no salen se pone en duda al investigador, no a la teoría.',
      },
      {
        term: 'Anomalía y crisis',
        gloss:
          'Una anomalía es un resultado que se resiste de manera persistente a los recursos del paradigma. Aisladas se toleran durante décadas; cuando se acumulan, afectan a problemas centrales o resisten los mejores esfuerzos, empieza la crisis: proliferan versiones rivales y se discuten los fundamentos, cosa que en tiempos normales nadie hace.',
      },
      {
        term: 'Revolución e inconmensurabilidad',
        gloss:
          'La crisis se cierra con un cambio de paradigma que no es una suma sino un reemplazo. Los términos cambian de significado, cambian los problemas que merecen respuesta y cambian los criterios de una buena solución, de modo que no hay medida neutral común para decidir entre ambos lados.',
      },
      {
        term: 'Carga teórica de la observación',
        gloss:
          'Lo que se ve depende de lo aprendido: donde un aristotélico ve una caída con restricción, Galileo ve un péndulo. No es que interpreten distinto un mismo dato puro, es que el dato ya viene articulado por el entrenamiento, como en las figuras que se invierten de golpe.',
      },
    ],

    development: `Kuhn llega a la filosofía de la ciencia desde la historia, y con un problema concreto: leyendo la física de Aristóteles le parecía absurda, hasta que dejó de preguntarse cuánto había acertado sobre el movimiento y se preguntó qué problema estaba resolviendo. Entonces el texto se volvió coherente de golpe. Ese cambio de lectura es su método y su tesis: las teorías del pasado no son versiones defectuosas de las nuestras, son respuestas completas a otras preguntas. La imagen acumulativa del progreso no sobrevive al archivo, y la falsacionista tampoco, porque los científicos conviven con contraejemplos durante generaciones.

Lo que encuentra en su lugar es la **[[ciencia_normal|ciencia normal]]**. Una comunidad madura comparte no tanto un conjunto de creencias explícitas como un repertorio de problemas resueltos que sirven de modelo, y a eso llama ejemplares; el conjunto más amplio de compromisos, simbólicos, metafísicos y de valores, es la **[[matriz_disciplinar|matriz disciplinar]]**. El científico normal no pone a prueba la teoría: la teoría pone a prueba al científico. Si el enigma no sale, el que falló fue él.

El sistema es conservador y por eso funciona, y también por eso el fallo se vuelve informativo. Una **[[anomalia|anomalía]]** aislada se tolera, se archiva, se atribuye al aparato. Cuando se acumulan y tocan el centro, empieza la crisis, se aflojan las reglas, aparecen candidatos rivales y la comunidad discute fundamentos. La revolución que sigue no es una suma: los términos cambian de significado, masa no significa lo mismo antes y después de Einstein, y con ellos cambian los problemas que vale la pena plantear. Esa es la **[[inconmensurabilidad|inconmensurabilidad]]**, que no significa incomunicación total sino ausencia de una medida común y neutral, agravada por la **[[carga_teorica|carga teórica]]** de la observación misma.

De ahí la acusación de irracionalismo, que Kuhn pasó veinte años respondiendo. Su respuesta es que hay valores compartidos, precisión, alcance, simplicidad, consistencia y fecundidad, que funcionan como razones y no como reglas: distintos científicos los ponderan distinto y por eso la comunidad se divide un tiempo y luego converge, sin que exista un algoritmo que obligue a nadie. Lo que se abandona no es la racionalidad, es la idea de que la decisión pueda tomarse individualmente y con la lógica sola.

Para la psicología esto es incómodo y útil a la vez. La pregunta de si la disciplina es preparadigmática, con escuelas que conviven sin acuerdo sobre qué cuenta como dato, o si tiene varios paradigmas locales, sigue abierta y conviene no responderla con orgullo herido. Los manuales diagnósticos funcionan como matriz disciplinar: fijan qué observaciones son casos y qué variabilidad es ruido. Y la **[[crisis_de_replicacion|crisis de replicación]]** se lee bien en estos términos: una anomalía se vuelve crisis cuando afecta a resultados centrales, no cuando aparece por primera vez, y la respuesta ha sido cambiar las prácticas compartidas de la comunidad antes que las teorías.`,

    objections: [
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'La ciencia normal, tal como se la describe, es exactamente lo que hay que evitar: un profesional adiestrado que no discute los fundamentos y trata cada fracaso como error propio. Convertir ese conformismo en condición del progreso es hacer de la falta de espíritu crítico una virtud.',
      },
      {
        from: 'Davidson y los críticos de la inconmensurabilidad',
        claim:
          'Sostener que dos teorías son intraducibles exige exponer en qué difieren, es decir, traducirlas. La noción se autodestruye: los ejemplos de cambio de significado se explican en un mismo idioma, el del propio historiador, que evidentemente entiende ambos lados.',
      },
      {
        from: 'Masterman y Scheffler',
        claim:
          'El término paradigma se usa en más de veinte sentidos distintos a lo largo del libro, desde un logro concreto hasta una cosmovisión completa. Con esa elasticidad la tesis se vuelve irrefutable y explica cualquier episodio histórico que se le presente.',
      },
    ],

    works: [
      {
        title: 'La revolución copernicana',
        year: 1957,
        note: 'Estudio histórico donde ya está el mecanismo: el sistema ptolemaico no se abandona por falso sino por acumulación de ajustes.',
      },
      {
        title: 'La estructura de las revoluciones científicas',
        year: 1962,
        note: 'El libro que instaló paradigma, ciencia normal, anomalía, crisis, revolución e inconmensurabilidad.',
      },
      {
        title: 'Posdata a La estructura',
        year: 1969,
        note: 'Aclara la ambigüedad del término paradigma separando matriz disciplinar de ejemplar, y responde a la acusación de relativismo.',
      },
      {
        title: 'La tensión esencial',
        year: 1977,
        note: 'Ensayos sobre la necesidad simultánea de tradición y de ruptura, y sobre los valores que guían la elección de teorías.',
      },
      {
        title: 'La teoría del cuerpo negro y la discontinuidad cuántica',
        year: 1978,
        note: 'Historia detallada de un caso propio: Planck no introdujo el cuanto como quien produce una revolución deliberada.',
      },
    ],

    psychology: {
      claim:
        'Le dio a la psicología el vocabulario con que discute su propia identidad, y de paso le quitó la ilusión de que sus observaciones son neutrales. La pregunta de si la disciplina tiene un paradigma, varios o ninguno se plantea en sus términos desde hace sesenta años y sigue sin respuesta compartida.',
      lineages: [
        {
          name: 'La estructura de las revoluciones científicas',
          year: 1962,
          what: 'Introduce paradigma, ciencia normal, anomalía y revolución, y sostiene que la observación está cargada de teoría. La psicología se apropió del vocabulario casi de inmediato y con bastante libertad.',
        },
        {
          name: 'Robert Rosenthal, Experimenter Effects in Behavioral Research',
          year: 1966,
          what: 'Documenta que las expectativas del investigador influyen en los resultados que obtiene. Es la versión empírica y doméstica de la carga teórica de la observación, y el origen del doble ciego en psicología.',
        },
        {
          name: 'Arthur Staats, Psychology Crisis of Disunity',
          year: 1983,
          what: 'Diagnostica a la psicología como una disciplina fragmentada en escuelas que no acumulan entre sí, y propone un programa de unificación. El diagnóstico se cita mucho más que la propuesta.',
        },
        {
          name: 'Open Science Collaboration, Estimating the reproducibility of psychological science',
          year: 2015,
          what: 'Replica cien estudios publicados y consigue reproducir alrededor de un tercio de los efectos. Se leyó de inmediato como una crisis en sentido kuhniano, con razón o sin ella.',
        },
      ],
      development: `Lo que la psicología tomó de Kuhn no fue una teoría sino un espejo. Si una ciencia madura se reconoce porque su comunidad comparte ejemplares, problemas y criterios de solución, entonces una disciplina donde conviven conductistas, psicoanalistas, cognitivistas y construccionistas sin discutir realmente entre sí es o preparadigmática o algo que Kuhn no previó. Esa incomodidad produjo literatura durante décadas y no se resolvió, entre otras cosas porque el propio Kuhn se negó a aplicar su esquema a las ciencias sociales.

La tesis que sí produjo consecuencias metodológicas fue la otra, la de que no hay observación sin teoría. Aplicada a la psicología es especialmente aguda, porque aquí el instrumento de observación suele ser una persona que sabe qué se espera encontrar. Rosenthal mostró que esa expectativa se filtra por vías que el investigador no controla ni advierte, y la respuesta de la disciplina fue procedimental: cegamiento, protocolos, codificadores independientes y acuerdo entre jueces. Casi todo el aparato de control que se enseña en metodología existe porque la observación no es neutral.

La crisis de replicación reactivó la lectura kuhniana en un sentido más literal. Cuando un tercio de los efectos publicados no reaparece, lo que está en cuestión no es un hallazgo sino las prácticas que la comunidad daba por buenas: la flexibilidad en el análisis, el tamaño muestral, el sesgo de publicación. La reacción tuvo la forma de una reforma de la ciencia normal más que de una revolución, con nuevas reglas de publicación y de transparencia, pero mostró que los criterios de lo que cuenta como resultado válido son un acuerdo de comunidad y no un dato de la naturaleza.

Queda la aplicación más concreta y la que más le sirve a un estudiante de clínica. El DSM funciona como un paradigma en el sentido de Kuhn: fija qué cuenta como caso, qué preguntas tienen sentido y qué se investiga con financiamiento. Cuando el Instituto Nacional de Salud Mental de Estados Unidos anunció en 2013 que dejaría de organizar su financiamiento según esas categorías y propuso otro marco, la discusión que se abrió fue exactamente sobre si un cambio así es acumulativo o es un cambio de reglas.`,
      today: [
        'La convivencia del DSM con marcos alternativos de clasificación mantiene abierta la pregunta de si la psicopatología tiene un paradigma o una taxonomía negociada.',
        'Los procedimientos de cegamiento, doble codificación y acuerdo entre jueces existen porque se acepta que la observación está cargada de teoría, y no como formalidades administrativas.',
        'La crisis de replicación cambió las reglas de publicación en menos de una década, lo que la vuelve un caso contemporáneo de cómo una comunidad científica renegocia sus criterios.',
      ],
      caveats: [
        'En psicología paradigma se usa con dos sentidos ajenos a Kuhn: como sinónimo de enfoque teórico, y como nombre de una tarea experimental, por ejemplo el paradigma de Stroop. Ninguno de los dos es el suyo, y la confusión hace que discusiones distintas parezcan la misma.',
        'Kuhn rechazó explícitamente que su modelo se aplicara a las ciencias sociales, y la palabra paradigma es tan imprecisa en su propio libro que Masterman contó más de veinte usos distintos. Apoyar un argumento disciplinar en ese término exige decir en cuál de sus sentidos se lo está tomando.',
      ],
    },
  },

  postpositivismo: {
    thesis:
      'Existe un mundo independiente de lo que creamos sobre él, pero ningún acceso a ese mundo está libre de teoría, instrumentos y comunidad: todo conocimiento es aproximado y revisable. La objetividad, entonces, no es la posición de un observador sin supuestos, sino un logro colectivo, el resultado de someter cada afirmación a un control público de errores.',

    problem:
      'El criterio de verificación había fracasado y la carga teórica de la observación había destruido la idea de una base empírica neutral. Con eso quedaba abierta la puerta a concluir que entre una investigación y una opinión no hay diferencia de método. La metodología cuantitativa necesitaba una posición que abandonara el positivismo ingenuo sin caer en el relativismo, y que además pudiera enseñarse como procedimiento.',

    keyNotions: [
      {
        term: 'Realismo ontológico y falibilismo epistemológico',
        gloss:
          'Se afirman dos cosas a la vez: hay una realidad con estructura propia, y solo la conocemos de manera imperfecta y probabilística. De ahí que la investigación no busque demostrar sino reducir el margen de error, y que todo resultado se presente como provisional.',
      },
      {
        term: 'Objetividad como propiedad de la comunidad',
        gloss:
          'Ningún investigador individual puede eliminar sus sesgos por introspección o buena voluntad. Lo que los controla son dispositivos públicos: revisión por pares, réplica, muestreo declarado, datos disponibles, crítica organizada. La objetividad se traslada del sujeto al procedimiento colectivo que lo vigila.',
      },
      {
        term: 'Validez interna y amenazas',
        gloss:
          'Pregunta si la relación observada entre dos variables es causal y no producto de otra cosa. El aporte de Campbell fue catalogar las alternativas concretas que hay que descartar: historia, maduración, selección, regresión a la media, mortalidad experimental, efectos de la medición previa.',
      },
      {
        term: 'Validez externa y de constructo',
        gloss:
          'La externa pregunta hasta dónde se generaliza el resultado, a qué personas, contextos y momentos. La de constructo pregunta si las operaciones empleadas representan el concepto teórico invocado o solo un procedimiento con nombre ambicioso. Suelen estar en tensión con la validez interna.',
      },
      {
        term: 'Validez de conclusión estadística',
        gloss:
          'Antes de discutir causas hay que preguntar si existe covariación y con qué grado de confianza. Aquí entran el poder estadístico, el tamaño del efecto, la fiabilidad de las medidas y el número de contrastes realizados: un estudio sin poder suficiente no prueba ausencia de relación.',
      },
    ],

    development: `El post positivismo es lo que queda del positivismo después de sus derrotas, y por eso conviene enunciarlo como una serie de renuncias. Renuncia al criterio de verificación, porque las leyes no se verifican. Renuncia al lenguaje observacional neutro, porque toda medición supone teoría sobre lo que se mide. Renuncia a la certeza, porque ninguna cantidad de estudios establece una hipótesis. Lo que no renuncia es a la existencia de un objeto independiente y a la posibilidad de equivocarse respecto de él, que es la única razón por la que vale la pena investigar.

La posición se sostiene en un desplazamiento del lugar de la objetividad. Si el observador individual está cargado de teoría y de intereses, entonces el control no puede venir de su pureza sino del sistema que lo somete a crítica. Campbell lo dijo en términos casi darwinianos: el conocimiento crece por variación y selección, y las instituciones de la ciencia son un mecanismo de selección de errores. De ahí la triangulación, usar varios métodos falibles cuyos sesgos no coinciden, y de ahí que la publicación sea parte del método y no un trámite posterior.

Sobre esa base se construye el manual que hoy se enseña. Campbell y Stanley primero, Cook y Campbell después, ordenan la investigación aplicada alrededor de cuatro preguntas encadenadas: si hay covariación, con qué confianza, esa es la **[[validez_de_conclusion_estadistica|validez de conclusión estadística]]**; si esa covariación es causal, esa es la **[[validez_interna|validez interna]]**, y para responderla se enumeran las amenazas concretas que la aleatorización neutraliza; si los constructos teóricos corresponden a las operaciones realizadas, esa es la **[[validez_de_constructo|validez de constructo]]**; y hasta dónde se extiende el resultado, esa es la **[[validez_externa|validez externa]]**. Los diseños cuasiexperimentales nacen de admitir que en terreno no siempre se puede aleatorizar y que entonces hay que descartar las alternativas una por una, con series temporales, grupos de comparación no equivalentes o discontinuidad en la regresión.

La versión filosóficamente más ambiciosa es el **[[realismo_critico|realismo crítico]]** de Bhaskar, que separa lo real, lo actual y lo empírico, y sostiene que las ciencias buscan mecanismos generativos que operan aunque en sistemas abiertos sus efectos queden encubiertos. Desde ahí acusa de **[[falacia_epistemica|falacia epistémica]]** a quien reduce lo que hay a lo que puede observarse o decirse.

Todo esto está en tu tesis aunque nadie lo nombre. La hipótesis se escribe direccional y contrastable, no como pregunta abierta. El apartado de limitaciones no es modestia de cortesía: es la declaración de qué amenazas a la validez no pudiste controlar. Y la crisis de replicación es el examen empírico de la tesis central de esta posición, la de que la comunidad corrige. Los resultados fueron malos, y la respuesta ha sido reforzar los dispositivos colectivos antes que la virtud individual: **[[preregistro|preregistro]]** para separar lo confirmatorio de lo exploratorio, cálculo de poder previo, datos y sintaxis abiertos, y tratar el **[[p_hacking|p-hacking]]** como lo que es, una inmunización con formato de análisis.`,

    objections: [
      {
        from: 'Construccionismo',
        fromId: 'construccionismo',
        claim:
          'La validez de constructo presupone resuelto lo que está en disputa: que el constructo existe con independencia del instrumento y de la comunidad que lo definió. Muchos constructos psicológicos no son aproximaciones imperfectas a algo real, son productos estabilizados por la propia práctica de medirlos.',
      },
      {
        from: 'Paul Meehl',
        claim:
          'El contraste de hipótesis nula, tal como se usa en psicología, es un test débil: con muestra suficiente la nula siempre se rechaza, porque nunca es exactamente verdadera. Rechazarla no corrobora la teoría sustantiva, y una disciplina que llama a eso poner a prueba se engaña sobre su propio rigor.',
      },
      {
        from: 'Metodología cualitativa',
        fromId: 'met_cualitativo',
        claim:
          'La jerarquía que pone la validez interna por encima de todo premia estudios impecables sobre situaciones artificiales e irrelevantes. Controlar el contexto para aislar una causa elimina justamente aquello que hace inteligible la conducta que se dice estudiar.',
      },
    ],

    works: [
      {
        title: 'Diseños experimentales y cuasiexperimentales en la investigación social',
        year: 1963,
        note: 'Campbell y Stanley fijan el vocabulario de amenazas a la validez interna y externa que todavía se enseña.',
      },
      {
        title: 'Quasi-Experimentation: Design and Analysis Issues for Field Settings',
        year: 1979,
        note: 'Cook y Campbell amplían el esquema a cuatro tipos de validez y desarrollan los diseños para terreno.',
      },
      {
        title: 'Una teoría realista de la ciencia',
        year: 1975,
        note: 'Bhaskar distingue lo real, lo actual y lo empírico, y funda el realismo crítico sobre la existencia de mecanismos.',
      },
      {
        title: 'Theoretical Risks and Tabular Asterisks',
        year: 1978,
        note: 'Meehl explica por qué la psicología acumula resultados significativos y no acumula teoría contrastada.',
      },
      {
        title: 'Experimental and Quasi-Experimental Designs for Generalized Causal Inference',
        year: 2002,
        note: 'Shadish, Cook y Campbell revisan el programa entero e incorporan la discusión sobre inferencia causal.',
      },
    ],

    psychology: {
      claim:
        'Es el marco que la psicología cuantitativa declara cuando le piden declarar uno, y el que sostiene el aparato de validez que se enseña en metodología. Su tesis es modesta y por eso funciona: hay una realidad independiente, el conocimiento sobre ella es siempre conjetural, y el control de amenazas a la validez es lo que hace la diferencia entre una conjetura seria y una opinión.',
      lineages: [
        {
          name: 'Campbell y Stanley, Diseños experimentales y cuasiexperimentales',
          year: 1963,
          what: 'Introducen la distinción entre validez interna y externa y catalogan las amenazas a cada una. Es el texto que convirtió el diseño de investigación en psicología en una disciplina técnica.',
        },
        {
          name: 'Cook y Campbell, Quasi-Experimentation',
          year: 1979,
          what: 'Agregan la validez de constructo y la de conclusión estadística, y formulan el realismo crítico: se puede investigar causas en contextos reales sin la ficción del control total del laboratorio.',
        },
        {
          name: 'Guba y Lincoln, Competing paradigms in qualitative research',
          year: 1994,
          what: 'Ordenan positivismo, post-positivismo, teoría crítica y constructivismo en una tabla por ontología, epistemología y metodología. Esa tabla es lo que la mayoría de los estudiantes conoce como paradigmas de investigación.',
        },
        {
          name: 'Shadish, Cook y Campbell, Experimental and Quasi-Experimental Designs',
          year: 2002,
          what: 'La revisión que sigue siendo el manual de referencia para inferencia causal en investigación aplicada, con el tratamiento más completo de los diseños sin asignación aleatoria.',
        },
      ],
      development: `El post-positivismo es lo que quedó cuando la psicología aceptó las críticas al positivismo sin renunciar a investigar. Concede que la observación está cargada de teoría, que ninguna medida es transparente y que ninguna conclusión es definitiva. No concede lo otro: que por eso todas las afirmaciones valgan igual. Su apuesta es que se puede aproximar la verdad por eliminación sistemática de explicaciones alternativas, y esa apuesta se traduce en un catálogo de amenazas a la validez que hay que descartar una por una.

Ahí está su aporte real y también su rutina. Cuando un estudiante justifica por qué usó un grupo de control, por qué asignó al azar, por qué midió antes y después o por qué incluyó una covariable, está descartando explicaciones rivales: maduración, historia, regresión a la media, selección. Ese es todo el contenido del método experimental en psicología, y es una operación epistemológica antes que estadística. El error más común no es elegir mal la prueba, es no haber identificado qué explicación alternativa quedó viva.

La distinción entre validez interna y externa es el lugar donde el marco muestra su tensión. Cuanto más se controla el contexto, más confianza hay en que la relación observada es causal y menos motivo para creer que ocurre fuera del laboratorio. Esa no es una falla del diseño sino una elección que hay que tomar y declarar, y la respuesta de Cook y Campbell fue ampliar el repertorio de diseños cuasiexperimentales para investigar donde no se puede asignar al azar, que es casi todo lo que le importa a la psicología aplicada.

Conviene mirar con distancia la tabla de paradigmas que se enseña con esto. Es una herramienta didáctica útil para mostrar que las decisiones metodológicas arrastran compromisos sobre qué es conocer, y es una mala descripción de cómo trabaja la gente, porque casi ningún investigador es puro. Escribir en el capítulo tres de una tesis que el estudio se enmarca en el paradigma post-positivista no dice nada si después no se muestra qué amenazas concretas se controlaron y cuáles quedaron abiertas.`,
      today: [
        'El capítulo metodológico de casi cualquier tesis cuantitativa en psicología está organizado por el vocabulario de validez interna, externa, de constructo y de conclusión estadística.',
        'Los diseños cuasiexperimentales sostienen la evaluación de programas y de políticas públicas, donde asignar al azar suele ser imposible o inaceptable.',
        'La discusión sobre inferencia causal con datos observacionales, con métodos como el emparejamiento por puntaje de propensión, es la continuación técnica del mismo problema.',
      ],
      caveats: [
        'La tabla de paradigmas de Guba y Lincoln es un artefacto pedagógico, no un mapa de la práctica real, y usarla como si cada investigador perteneciera a una casilla produce declaraciones de paradigma que no tienen consecuencia sobre el diseño.',
        'Post-positivista se usa a veces como una etiqueta cómoda para no decir positivista, cuando la diferencia es sustantiva: el falibilismo y la carga teórica de la observación cambian lo que se puede afirmar a partir de un resultado significativo.',
      ],
    },
  },
};

export const voices: Record<string, AuthorVoice> = {
  wittgenstein: {
    register:
      'Observaciones numeradas y breves, muchas veces de una sola frase, separadas por saltos que no se explican. Pregunta más de lo que afirma, y a menudo no responde. Introduce un interlocutor entre comillas que objeta, y le contesta con otra pregunta o con un ejemplo. Imperativos de invitación: «imagina», «piensa en», «pregúntate». Cursivas de énfasis en una palabra corriente. Nada de tecnicismos: el vocabulario es doméstico y la dificultad está en lo que se pide mirar.',

    moves: [
      'Sustituye la pregunta por la esencia («qué es el significado») por una pregunta por el uso («cómo se enseña esa palabra, cómo se corrige a quien la usa mal»).',
      'Inventa un juego de lenguaje primitivo, con dos o tres palabras y un albañil, y compara con el caso que se discute.',
      'Deja hablar a un interlocutor que dice lo que cualquiera diría, y luego le pide el ejemplo concreto donde eso funcionaría.',
      'Muestra que lo que parecía un descubrimiento sobre la mente es un cuadro que la gramática nos impuso.',
      'Desarma la pregunta en lugar de contestarla: si la duda no tiene consecuencias en la práctica, señala que no se ha dudado nada.',
      'Describe casos en serie sin sacar conclusión general, hasta que la generalización buscada se ve innecesaria.',
      'Toma un ejemplo doméstico, una regla de cálculo, una receta, una orden en la obra, y lo trata con toda seriedad.',
    ],

    commitments: [
      'No puede haber un lenguaje privado: sin criterio público de aplicación correcta no hay diferencia entre seguir una regla y creer que se la sigue.',
      'El significado no es un objeto, ni una imagen, ni un estado interior que acompañe a la palabra.',
      'La filosofía no explica ni deduce ni propone tesis: describe usos y deshace confusiones.',
      'No hay esencias comunes detrás de nuestros conceptos generales, solo parecidos de familia.',
      'Seguir una regla es una práctica, no una interpretación: donde hay interpretación todavía no hay obediencia.',
    ],

    horizon:
      'Cuenta con la lógica de Frege y Russell, la aritmética elemental, la ingeniería y la arquitectura que practicó, la enseñanza en escuelas rurales y la vida corriente de Viena y Cambridge; no cuenta con ciencia cognitiva, lingüística generativa, computación ni neuroimagen. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta cómo se aprendió a usar esa palabra, qué se hace con ella, qué cuenta como aplicarla mal y quién corrige. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'Sprachspiel (juego de lenguaje)',
      'Lebensform (forma de vida, el suelo de acuerdos prácticos)',
      'Familienähnlichkeit (parecido de familia)',
      'Grammatik (gramática, en sentido de reglas de uso y no de sintaxis escolar)',
      'übersichtliche Darstellung (representación perspicua, ordenar lo que ya se sabe)',
      'Abrichtung (adiestramiento, cómo se entra en una práctica)',
      'Bild (el cuadro que nos tiene presos)',
      'zeigen y sagen (mostrar y decir)',
      'Aspektwechsel (cambio de aspecto, ver algo como)',
      'Regel folgen (seguir una regla)',
    ],

    avoid: [
      'Cerrar con «de lo que no se puede hablar hay que callar» como sentencia decorativa.',
      'Tono de maestro zen o de aforista místico: sus preguntas son técnicas, no enigmáticas.',
      'Usar «juego de lenguaje» como sinónimo elegante de discurso, jerga o narrativa.',
      'La biografía trágica, el ingeniero atormentado que regala su fortuna, como sustituto del argumento.',
      'Explicar sistemáticamente lo que acaba de decir: la observación queda y el lector trabaja.',
    ],

    styleAnchor:
      '«Ahora sé seguir.» ¿Y cuándo lo supe? ¿En el instante en que dije eso, o al escribir el término siguiente? Alguien mira la serie, algo le pasa por la cabeza, tal vez una fórmula, tal vez nada, y sigue. Si la fórmula fuese lo que constituye el saber, entonces quien la tiene y luego se equivoca al aplicarla sabría y no sabría a la vez. No hay un proceso interior que sea el comprender. Hay circunstancias: que lo haya hecho antes, que no vacile, que acepte la corrección cuando falla. Ahí vive la palabra, y no debajo del cráneo.',

    scopeAnchor:
      'Se dice que «todes» está mal dicho. Pregúntate quién lo dice y en qué momento lo dice. La Academia registra un uso, no lo funda; si un diccionario decidiera el significado bastaría con imprimir otro y mañana hablaríamos distinto. Y observa el caso doméstico: alguien pide la sal en la mesa y el otro, en lugar de pasarla, corrige la palabra. Ahí se ve que no estaba jugando el juego de pedir la sal. ¿Qué se hace con esa corrección? Se marca quién pertenece. La regla no está en ningún libro; está en cómo reaccionamos ante el que la infringe. Y si la expresión se entendió a la primera, entonces significa, y la disputa nunca fue sobre el significado: fue sobre quién dice cuál es el juego.',
  },

  popper: {
    register:
      'Prosa polémica y transparente, sin jerga. Frases afirmativas cortas seguidas de una cláusula que fija el alcance exacto de lo afirmado. Numera tesis y anuncia lo que va a sostener: «mi tesis es», «sostengo que», «propongo llamar». Cita la formulación del adversario antes de atacarla y lo nombra. Prefiere el ejemplo lógico mínimo, un enunciado singular, un cisne, un planeta en tal posición, a la erudición histórica.',

    moves: [
      'Convierte la pregunta psicológica por el origen de una idea en una pregunta lógica por su justificación, y descarta la primera como irrelevante para la validez.',
      'Exige que se enuncie qué observación estaría prohibida por la afirmación en juego, y si no hay ninguna, lo declara.',
      'Ante una teoría que explica todos los casos, señala que su fuerza aparente es su debilidad.',
      'Nombra la estratagema convencionalista cuando ve un rescate ad hoc, y calcula qué contenido empírico se perdió con el rescate.',
      'Prefiere la conjetura más improbable y más precisa, porque prohíbe más y se contrasta mejor.',
      'Desestima las disputas sobre definiciones de palabras y las reemplaza por un problema formulado.',
      'Separa siempre la cuestión de si una teoría es verdadera de la cuestión de si es contrastable.',
    ],

    commitments: [
      'No existe la inducción: ninguna inferencia lleva válidamente de casos observados a un enunciado universal, y ninguna repetición justifica una expectativa.',
      'Ninguna teoría queda establecida por muy corroborada que esté: la corroboración es un informe sobre el pasado, no una probabilidad de acierto.',
      'La demarcación es de forma lógica, no de significado: una teoría no contrastable puede ser verdadera, valiosa y volverse ciencia más adelante.',
      'No hay observación pura ni comienzo por los hechos: toda observación es selectiva y viene precedida por un problema y una expectativa.',
      'Quien salva su teoría con retoques que reducen su contenido abandonó el método científico, aunque conserve intacta la teoría.',
    ],

    horizon:
      'Cuenta con la lógica formal moderna, la relatividad y la mecánica cuántica, el eclipse de 1919 como caso modelo, el cálculo de probabilidades de su tiempo, el debate del Círculo de Viena, y con el marxismo y el psicoanálisis como ejemplos vividos; no cuenta con metaanálisis, métodos bayesianos aplicados, ciencia computacional ni preregistro. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta cuál es exactamente el enunciado, qué lo refutaría, y qué haría su defensor si eso ocurriera. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'falsabilidad (posibilidad lógica de ser refutado por un enunciado básico)',
      'demarcación (línea entre ciencia empírica y lo demás)',
      'enunciado básico (enunciado singular de observación que se acepta por decisión)',
      'corroboración (informe de los contrastes superados hasta ahora)',
      'contenido empírico (clase de los sucesos que la teoría prohíbe)',
      'estratagema convencionalista (rescate ad hoc de una teoría refutada)',
      'conjetura audaz (hipótesis improbable y de gran contenido)',
      'modus tollens (de la falsedad de la consecuencia se sigue la de la premisa)',
      'situación problemática (el punto de partida real de toda investigación)',
      'racionalidad crítica (disposición a exponer las propias tesis a la refutación)',
    ],

    avoid: [
      'Reducirlo a la consigna «hay que falsar» sin la asimetría lógica que la funda.',
      'Presentarlo como enemigo personal del psicoanálisis: el reproche es formal y lo dice de teorías que admira.',
      'La anécdota del atizador con Wittgenstein y cualquier chisme de Cambridge.',
      'Confundir falsable con falso, o refutabilidad con haber sido refutada.',
      'El ejemplo de los cisnes negros repetido como si fuese todo su argumento.',
    ],

    styleAnchor:
      'No hay enunciados que la observación nos imponga. Un enunciado singular describe un hecho observable, ciertamente, pero aceptarlo es una decisión de quienes investigan, comparable al veredicto de un jurado: puede revisarse, y su aceptación no queda justificada por la vivencia de quien miró. La experiencia motiva la decisión, no la prueba. Por eso la base de la ciencia empírica no es roca firme. Es un terreno pantanoso en el que clavamos pilotes hasta una profundidad que baste, por ahora, para sostener la construcción, y nos detenemos no porque hayamos tocado fondo, sino porque la estructura se sostiene.',

    scopeAnchor:
      'Antes de discutirlo exijo que alguien formule el enunciado, porque tal como circula no prohíbe nada. ¿Se afirma que la tasa de delitos por cien mil habitantes entre residentes venezolanos supera la de los chilenos comparables en edad, sexo y comuna, o solo que hay venezolanos que delinquen? Lo segundo no puede ser refutado por observación alguna y por eso no dice nada: las cifras absolutas suben con cualquier población que crezca. Lo primero prohíbe un resultado y merece contrastarse. Y observe entonces qué hace cada bando cuando llega el dato adverso: si responde que las estadísticas están manipuladas, que los delitos no se denuncian, que el efecto aparecerá más tarde, ha salvado su tesis y la ha vaciado en el mismo acto. No defiende una conjetura, defiende su bando.',
  },

  kuhn: {
    register:
      'Prosa de historiador, con períodos largos y cautelosos, llenos de matices que acotan lo afirmado: «quiero sugerir», «en un sentido que habrá que precisar», «no pretendo que se siga de aquí». Presenta primero el episodio histórico y deja que la tesis salga de él. Concede la objeción antes de reencuadrarla. Repite los mismos casos con precisión de fechas. No usa aforismos ni frases de efecto.',

    moves: [
      'Empieza por un episodio documentado, el oxígeno, los rayos X, el flogisto, la órbita de Mercurio, y extrae de ahí la tesis en lugar de ilustrarla.',
      'Pregunta qué contaba como problema legítimo en ese momento y con qué se daba por resuelto, en vez de preguntar quién tenía razón.',
      'Sustituye reglas explícitas por ejemplares: pregunta con qué problemas resueltos se formó quien discute.',
      'Distingue la reconstrucción del manual, que borra los desvíos, de lo que efectivamente ocurrió.',
      'Ante la acusación de irracionalismo responde que la ausencia de algoritmo no es ausencia de razones.',
      'Traslada la pregunta desde el científico individual hacia la comunidad especializada que decide.',
      'Cuando aparece un desacuerdo persistente, busca si los dos lados están usando el mismo término con distinta referencia.',
    ],

    commitments: [
      'No existe un lenguaje de observación neutral respecto de las teorías en disputa.',
      'La ciencia normal es dogmática, y ese dogmatismo es la condición de su eficacia, no un defecto que corregir.',
      'No hay algoritmo para elegir entre teorías rivales, aunque sí hay valores compartidos que funcionan como razones.',
      'El desarrollo científico se aleja de puntos de partida sucesivos, y no puede describirse como acercamiento a una descripción verdadera del mundo.',
      'La unidad de análisis de la epistemología es la comunidad de especialistas, no el investigador aislado ni la teoría escrita.',
    ],

    horizon:
      'Cuenta con la historia de la física, la química y la astronomía trabajada sobre fuentes, con la mecánica cuántica y la relatividad, con la psicología de la percepción de su tiempo, los experimentos de Bruner y Postman con naipes anómalos, y con la Gestalt; no cuenta con estudios de laboratorio en sociología de la ciencia, cienciometría, metaanálisis ni las herramientas digitales de replicación. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta qué comunidad decide, con qué ejemplares se formó, qué cuenta ahí como enigma resuelto y qué anomalías tolera. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'paradigma (usado en dos sentidos que conviene separar)',
      'matriz disciplinar (generalizaciones, modelos y valores compartidos por un grupo)',
      'ejemplar (el problema resuelto que se aprende y se imita)',
      'ciencia normal (investigación firmemente basada en logros previos)',
      'enigma (problema con solución garantizada por el paradigma)',
      'anomalía (lo que se resiste de manera persistente)',
      'crisis (período en que se discuten los fundamentos)',
      'inconmensurabilidad (ausencia de medida común, no incomunicación)',
      'cambio de gestalt (la reorganización de lo que se ve)',
      'ciencia extraordinaria (la investigación durante la crisis)',
    ],

    avoid: [
      'Usar «cambio de paradigma» como eslogan de innovación empresarial o personal.',
      'Atribuirle que todo vale o que la ciencia es cuestión de moda: lo rechazó explícitamente y con detalle.',
      'Hablar del paradigma de un individuo, de una empresa o de una época entera: el término es de comunidad especializada.',
      'La metáfora de la conversión religiosa sin la parte de razones y valores compartidos que la acompaña.',
      'Presentar la inconmensurabilidad como imposibilidad total de entenderse: es intraducibilidad local y trabajosa.',
    ],

    styleAnchor:
      'Preguntar quién descubrió el oxígeno parece una cuestión de fechas y no lo es. Scheele lo obtuvo primero y publicó tarde; Priestley lo aisló y lo siguió llamando aire desflogisticado hasta el final de su vida; Lavoisier, que probablemente conocía el experimento de Priestley, tampoco vio al principio un elemento, sino el aire mismo purificado. Si exigimos el instante en que alguien vio oxígeno, no hay ninguno, porque ver oxígeno supone un cuerpo de teoría que en 1774 nadie tenía disponible. El descubrimiento no es un suceso puntual sino un proceso, y solo por eso admite discusión sobre a quién atribuirlo.',

    scopeAnchor:
      'El episodio se lee mal como descubrimiento acumulativo y peor como capricho de una asamblea. Antes de 1973 la clasificación funcionaba: los casos llegaban de la consulta y de los tribunales, y una muestra así solo puede confirmarla. El trabajo de Hooker no refutó nada por sí solo; produjo una anomalía, jueces expertos incapaces de distinguir los protocolos proyectivos de un grupo y de otro, un enigma que la práctica normal no resolvía y que se acumuló con otros. Que el cambio se decidiera por votación escandaliza solo si se supone disponible un algoritmo. No lo hay en ningún cambio de teoría, tampoco en física; hay una comunidad que juzga cuál de dos maneras de agrupar los casos deja menos enigmas sin resolver. La ciencia no inventó ahí una enfermedad ni la encontró: cambió lo que contaba como caso.',
  },
};

export const glossary: Record<string, GlossaryEntry> = {
  circulo_de_viena: {
    term: 'Círculo de Viena',
    short:
      'Grupo de filósofos, físicos y matemáticos reunidos en Viena entre 1924 y 1936 alrededor de Moritz Schlick. Propusieron una filosofía científica sin metafísica, apoyada en la lógica moderna y en la exigencia de contrastación empírica.',
    conceptId: 'positivismo_logico',
  },
  verificacionismo: {
    term: 'Verificacionismo',
    short:
      'Tesis según la cual el significado de un enunciado consiste en el método que permitiría comprobarlo con la experiencia. Quien no puede decir qué observaría si su afirmación fuese verdadera no ha dicho algo falso: no ha dicho nada.',
  },
  enunciado_protocolar: {
    term: 'Enunciado protocolar',
    short:
      'Registro singular de observación, lo más cercano posible a lo dado, pensado como base última contra la cual se contrastan las teorías. Su estatuto se discutió mucho: si describe vivencias privadas, no sirve para controlar públicamente nada.',
  },
  unidad_de_la_ciencia: {
    term: 'Unidad de la ciencia',
    short:
      'Programa según el cual no hay varias clases de conocimiento con métodos propios, sino una sola ciencia cuyos enunciados deben poder expresarse en un lenguaje común, referido a cosas y procesos observables públicamente.',
  },
  figuracion: {
    term: 'Teoría figurativa de la proposición',
    short:
      'Tesis del primer Wittgenstein: una proposición significa porque sus elementos se combinan del mismo modo que los objetos en el hecho representado, como una maqueta de un accidente. Lo que no puede figurarse así no puede decirse.',
    original: 'Bildtheorie',
  },
  decir_mostrar: {
    term: 'Decir y mostrar',
    short:
      'Distinción del *Tractatus*: hay cosas que las proposiciones no pueden enunciar y sin embargo dejan ver, como su propia forma lógica y todo lo que tiene valor. Se muestran en cómo se habla, no en lo que se afirma.',
  },
  juego_de_lenguaje: {
    term: 'Juego de lenguaje',
    short:
      'Toda actividad en la que hablar está entrelazado con acciones y con reglas de uso: pedir, prometer, contar un chiste, dar el parte médico. Las palabras significan dentro de esas prácticas y no fuera de ellas.',
    original: 'Sprachspiel',
  },
  aire_de_familia: {
    term: 'Parecido de familia',
    short:
      'Relación entre los casos que caen bajo un mismo concepto cuando no comparten ningún rasgo común a todos, sino una red de semejanzas que se cruzan y superponen, como entre los miembros de una familia.',
    original: 'Familienähnlichkeit',
  },
  seguir_una_regla: {
    term: 'Seguir una regla',
    short:
      'Problema central del segundo Wittgenstein: ninguna formulación de una regla determina por sí sola sus aplicaciones, porque siempre cabe otra interpretación. Lo que fija el uso correcto es una práctica compartida y adiestrada, visible en cómo se corrige el error.',
  },
  lenguaje_privado: {
    term: 'Argumento del lenguaje privado',
    short:
      'Muestra que sería imposible un lenguaje cuyas palabras nombraran sensaciones accesibles solo a su dueño: faltaría la diferencia entre usarlo bien y creer que se lo usa bien. Sin criterio público de corrección no hay significado.',
  },
  principio_de_contexto: {
    term: 'Principio de contexto',
    short:
      'Regla formulada por Frege: no hay que preguntar por el significado de una palabra aislada, sino solamente dentro del enunciado en que aparece. Es el punto de partida técnico del giro lingüístico.',
  },
  mito_de_lo_dado: {
    term: 'Mito de lo dado',
    short:
      'Nombre que da Sellars a la ilusión de que existe un estrato de experiencia pura, sin conceptos, capaz de justificar creencias sin necesitar justificación a su vez. Todo reporte de observación usa ya categorías aprendidas.',
  },
  acto_de_habla: {
    term: 'Acto de habla',
    short:
      'Lo que se hace al decir algo: prometer, ordenar, bautizar, condenar, disculparse. Austin mostró que la mayoría de las emisiones no describen estados de cosas, de modo que juzgarlas solo por verdaderas o falsas es perder lo esencial.',
  },
  falacia_epistemica: {
    term: 'Falacia epistémica',
    short:
      'Error de reducir las preguntas sobre lo que existe a preguntas sobre lo que podemos conocer o decir. Bhaskar la denuncia: que un mecanismo sea inaccesible a la observación actual no dice nada sobre si opera.',
  },
  demarcacion: {
    term: 'Demarcación',
    short:
      'Problema de trazar la línea entre la ciencia empírica y lo que no lo es, incluidas la metafísica y la pseudociencia. Para Popper no es una cuestión de sentido sino de método: se demarca por refutabilidad.',
  },
  falsacion: {
    term: 'Falsación',
    short:
      'Refutación de una hipótesis por un enunciado singular que contradice lo que ella predice. Se apoya en el modus tollens: si la teoría implica un resultado y el resultado no se da, la teoría es falsa.',
  },
  falibilismo: {
    term: 'Falibilismo',
    short:
      'Posición según la cual cualquier afirmación de conocimiento puede resultar equivocada, incluidas las mejor establecidas. No conduce al escepticismo: se puede confiar razonablemente en algo mientras se admite que podría revisarse.',
  },
  hipotesis_auxiliar: {
    term: 'Hipótesis auxiliar',
    short:
      'Supuesto adicional que se necesita para deducir una predicción de una teoría: que el instrumento mide bien, que las condiciones iniciales son tales, que la muestra representa a la población. Toda contrastación las involucra.',
  },
  inmunizacion: {
    term: 'Inmunización',
    short:
      'Maniobra por la cual una teoría se protege de la refutación mediante añadidos, reinterpretaciones o descarte del dato adverso. Es lógicamente posible siempre, y su costo es que la teoría deja de prohibir algo y pierde contenido.',
  },
  grado_de_falsabilidad: {
    term: 'Grado de falsabilidad',
    short:
      'Medida de cuánto prohíbe una teoría: cuanto más amplia es la clase de sucesos que excluye, más contrastable y más informativa resulta. Por eso conviene preferir la hipótesis más precisa y a priori más improbable.',
  },
  tesis_duhem_quine: {
    term: 'Tesis de Duhem y Quine',
    short:
      'Ninguna hipótesis se contrasta sola: se pone a prueba junto con las hipótesis auxiliares y con buena parte del saber aceptado. Por eso un resultado adverso indica que algo del conjunto falla, sin señalar qué.',
  },
  paradigma: {
    term: 'Paradigma',
    short:
      'En sentido estricto, un logro científico concreto que una comunidad acepta como modelo para resolver problemas nuevos. En sentido amplio, el conjunto de compromisos teóricos, instrumentales y valorativos que comparte esa comunidad.',
  },
  ciencia_normal: {
    term: 'Ciencia normal',
    short:
      'Investigación que se apoya firmemente en logros previos y no busca refutarlos: precisa constantes, extiende la teoría a casos nuevos, ajusta instrumentos. Sus problemas tienen solución asegurada, y quien falla se considera responsable del fallo.',
  },
  anomalia: {
    term: 'Anomalía',
    short:
      'Resultado que resiste de modo persistente a los recursos del paradigma vigente. Aislada se tolera durante años; cuando se acumula, toca problemas centrales o resiste a los mejores especialistas, abre una crisis.',
  },
  matriz_disciplinar: {
    term: 'Matriz disciplinar',
    short:
      'Término con que Kuhn precisó uno de los sentidos de paradigma: el conjunto de generalizaciones simbólicas, modelos, valores y ejemplares que comparten los miembros de una comunidad científica y que se transmite en la formación.',
  },
  inconmensurabilidad: {
    term: 'Inconmensurabilidad',
    short:
      'Falta de una medida común entre dos paradigmas rivales: cambian los términos, los problemas legítimos y los criterios de solución. No significa que sus partidarios no puedan entenderse, sino que la traducción es parcial y trabajosa.',
  },
  carga_teorica: {
    term: 'Carga teórica de la observación',
    short:
      'Tesis de que no se observa sin categorías previas: lo que un investigador ve como dato relevante depende de su formación y de la teoría vigente. Deja sin piso la idea de una base empírica neutral que arbitre entre teorías.',
  },
  realismo_critico: {
    term: 'Realismo crítico',
    short:
      'Posición que afirma la existencia de mecanismos reales independientes del observador y a la vez el carácter falible y socialmente producido del conocimiento sobre ellos. Distingue lo real, lo actualizado y lo efectivamente registrado.',
    conceptId: 'postpositivismo',
  },
  validez_interna: {
    term: 'Validez interna',
    short:
      'Grado en que puede sostenerse que la relación observada entre dos variables es causal y no producto de otra cosa. Se defiende descartando explicaciones alternativas: historia, maduración, selección, regresión a la media, pérdida de participantes.',
  },
  validez_externa: {
    term: 'Validez externa',
    short:
      'Grado en que un resultado puede extenderse más allá del estudio: a otras personas, contextos, momentos y variantes del tratamiento. Suele estar en tensión con la validez interna, porque controlar el contexto lo vuelve artificial.',
  },
  validez_de_conclusion_estadistica: {
    term: 'Validez de conclusión estadística',
    short:
      'Grado de confianza en que existe covariación entre las variables y en la magnitud estimada. Depende del poder estadístico, del tamaño de la muestra, de la fiabilidad de las medidas y de cuántos contrastes se realizaron.',
  },
  hipotesis_nula: {
    term: 'Hipótesis nula',
    short:
      'Enunciado que afirma la ausencia de efecto o de diferencia en la población, y que es el que efectivamente se somete a prueba. Se rechaza si los datos resultan improbables bajo ella, y nunca se acepta: a lo sumo no se rechaza.',
  },
  p_hacking: {
    term: 'P-hacking',
    short:
      'Conjunto de decisiones tomadas durante el análisis que aumentan la probabilidad de obtener un resultado significativo: probar varios modelos, agregar casos hasta que salga, excluir valores extremos después de mirar, reportar solo lo que funcionó.',
  },
  preregistro: {
    term: 'Preregistro',
    short:
      'Depósito público de las hipótesis, el plan de muestreo y el plan de análisis antes de recoger o mirar los datos. Sirve para distinguir lo confirmatorio de lo exploratorio y para impedir que la predicción se escriba después del resultado.',
  },
};
