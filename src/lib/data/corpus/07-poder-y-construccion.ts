import type {
  ConceptExposition,
  AuthorVoice,
  GlossaryEntry,
} from '@/types/philosophical';

// Poder, construcción e interpretación: Michel Foucault (1926) y Donna Haraway (1944).
// Con tres corrientes: construccionismo social (1985), hermenéutica filosófica (1960) y pragmatismo (1870).

export const expositions: Record<string, ConceptExposition> = {
  foucault: {
    thesis:
      'En cada época hay reglas anónimas que deciden qué enunciados pueden siquiera aspirar a ser verdaderos o falsos, y esas reglas no las pone ningún autor: forman la [[episteme_foucault|episteme]] de un tiempo. El poder que las sostiene no reprime una naturaleza previa, la produce: fabrica conductas, deseos y también los objetos que el saber estudia.',

    problem:
      'La historia de las ideas narraba el pasado como acumulación y trataba el error como un obstáculo que la razón termina por apartar. La [[genealogia|genealogía]] de Nietzsche había roto ese relato al preguntar por la procedencia de los valores en lugar de por su fundamento, y Kuhn había mostrado que lo que cuenta como problema legítimo depende de un [[paradigma]] que nadie elige caso por caso. Faltaba explicar por qué unas reglas y no otras, y eso obliga a mirar prácticas e instituciones, no solo teorías.',

    keyNotions: [
      {
        term: 'Arqueología y formación discursiva',
        gloss:
          'Describir un saber sin buscar al autor detrás. No importa qué quiso decir un médico del siglo XVIII, sino en qué condiciones su enunciado pudo formar parte de un saber: qué objetos podía nombrar, desde qué posición institucional se hablaba, con qué conceptos. Esas condiciones, reunidas, forman una formación discursiva.',
      },
      {
        term: 'Episteme',
        gloss:
          'El conjunto de relaciones que en una época unen las prácticas discursivas y permiten que existan figuras de saber. No es una visión del mundo compartida ni la suma de las teorías vigentes: es lo que fija qué puede plantearse como pregunta seria. Cuidado: no es la epistéme aristotélica, que era conocimiento demostrativo.',
      },
      {
        term: 'Genealogía y poder productivo',
        gloss:
          'Frente a la pregunta por el origen legítimo, la genealogía sigue la procedencia de una práctica: la celda, el horario, el registro, la revisión médica. Con ella cae la teoría jurídica del poder, según la cual alguien lo posee y lo ejerce para prohibir. El poder que interesa es el que produce aptitudes, placeres y saberes.',
      },
      {
        term: 'Disciplina, examen y normalización',
        gloss:
          'La disciplina reparte cuerpos en el espacio y el tiempo para volverlos útiles y dóciles a la vez. Su ceremonia es el examen, que hace visible al individuo, lo inscribe en un expediente y lo vuelve comparable con una curva. La norma no registra un promedio previo: instituye el centro alrededor del cual se distribuyen los casos.',
      },
      {
        term: 'Tecnologías del yo',
        gloss:
          'Operaciones que cada uno ejerce sobre su propio cuerpo, sus pensamientos y su conducta para transformarse en cierto tipo de sujeto: confesar, examinarse, escribir sobre sí, obedecer a un director espiritual. El sujeto deja de ser el punto de partida del análisis y pasa a ser su resultado histórico.',
      },
    ],

    development: `Foucault se hace cargo de un problema que ni la historia de las ideas ni la filosofía de la ciencia habían resuelto. La primera contaba una conversación entre autores que se pasan preguntas de mano en mano; la segunda, incluso cuando aceptó que hay marcos que deciden lo que cuenta como problema legítimo, situó el cambio en la cabeza de las comunidades científicas. Pero ni el marco es solo teórico ni el cambio ocurre solo en las teorías. Hay reglas que gobiernan lo decible en un momento dado y que no están escritas en ningún manifiesto, y hay instituciones que las sostienen.

La **[[arqueologia|arqueología]]** describe esas reglas sin postular un autor detrás. No pregunta qué pensaba tal médico, sino en qué condiciones su enunciado pudo funcionar como saber, desde qué lugar institucional se hablaba y qué objetos quedaban disponibles para ser nombrados. El resultado incomoda a la psicología: el hombre, entendido como objeto de un saber positivo y a la vez sujeto que conoce, es una figura reciente, de comienzos del siglo XIX, y podría borrarse como un rostro dibujado en la arena.

El giro siguiente responde a lo que la arqueología dejaba sin explicar: qué sostiene unas reglas y no otras. La genealogía sigue prácticas antes que ideas, y con ella cae la imagen jurídica del poder como algo que alguien posee y usa para prohibir. El poder que interesa es productivo, se ejerce en relaciones y viene de todas partes. De ahí la tesis del **[[saber_poder|saber poder]]**: no hay conocimiento neutral que después se aplique, ni gobierno que se limite a usar un saber ya hecho. El **[[dispositivo]]** es la red donde discursos, edificios, reglamentos y medidas administrativas se sostienen unos a otros.

Sus efectos son concretos. La **[[normalizacion|normalización]]** fabrica la diferencia que dice medir, y el examen la registra en expedientes que hacen del individuo un caso. Del cuerpo individual el análisis se desplaza al **[[biopoder]]**, que administra poblaciones mediante tasas, y luego a las técnicas por las cuales cada uno se constituye a sí mismo como sujeto. Queda abierto un problema que Foucault nunca cerró: si no hay exterior desde el cual juzgar, la resistencia no libera ninguna naturaleza reprimida y es otro punto de la misma red.

Para la psicología cambia el estatuto de sus objetos y de sus instrumentos. Las categorías clínicas dejan de leerse como descubrimientos y se examinan como productos de prácticas fechadas: quién puede diagnosticar, con qué escala, con qué consecuencias administrativas. El análisis del discurso de tradición foucaultiana no busca lo que un participante cree ni corrige sus sesgos: rastrea qué posiciones de sujeto quedan disponibles en lo que se dice y cuáles quedan fuera. Y deja una exigencia dura para el investigador: la entrevista, la escala y el informe no observan desde fuera la conducta, forman parte del mismo dispositivo que la produce como caso.`,

    objections: [
      {
        from: 'Habermas',
        claim:
          'La crítica se apoya en normas que se niega a explicitar. Si todo régimen de verdad es efecto de poder, no se ve en nombre de qué se denuncia el encierro o la vigilancia, ni por qué habría que preferir una forma de gobierno a otra.',
      },
      {
        from: 'Charles Taylor',
        claim:
          'La fórmula del poder sin sujeto y sin proyecto vuelve ininteligible la resistencia. Sin alguna noción de libertad o de daño, describir cómo se produce un sujeto no permite distinguir la formación de un dentista de la de un torturador.',
      },
      {
        from: 'Historiadores de la psiquiatría y la prisión',
        claim:
          'Los cortes de época son demasiado limpios y la documentación se selecciona para sostenerlos. El gran encierro no ocurrió con la simultaneidad que se describe, y varias instituciones que aparecen como disciplinarias funcionaban de modo mucho más desordenado.',
      },
    ],

    works: [
      {
        title: 'Historia de la locura en la época clásica',
        year: 1961,
        note: 'La locura no aparece como enfermedad descubierta, sino como objeto constituido por prácticas de encierro y de asistencia.',
      },
      {
        title: 'Las palabras y las cosas',
        year: 1966,
        note: 'Las epistemes del Renacimiento, la época clásica y la modernidad, y la tesis del hombre como figura reciente del saber.',
      },
      {
        title: 'La arqueología del saber',
        year: 1969,
        note: 'La formulación metodológica: enunciado, formación discursiva y archivo, sin recurso a la intención del autor.',
      },
      {
        title: 'Vigilar y castigar',
        year: 1975,
        note: 'El paso del suplicio al horario y a la vigilancia, con el examen y el expediente como técnicas centrales.',
      },
      {
        title: 'Historia de la sexualidad I: la voluntad de saber',
        year: 1976,
        note: 'Contra la hipótesis represiva: la modernidad no calló el sexo, lo obligó a hablar y multiplicó los discursos sobre él.',
      },
    ],

    psychology: {
      claim:
        'Convirtió a la psicología en objeto de estudio en lugar de tomarla como punto de vista, y mostró que sus categorías no describen un terreno preexistente sino que participan en producirlo. Para un estudiante de la disciplina eso significa que su propia formación profesional es parte de lo que hay que analizar.',
      lineages: [
        {
          name: 'Historia de la locura en la época clásica',
          year: 1961,
          what: 'Reconstruye cómo la locura pasó de ser una experiencia tolerada a un objeto médico encerrado, y sostiene que la psiquiatría no descubrió al enfermo mental sino que lo constituyó junto con su institución.',
        },
        {
          name: 'Vigilar y castigar',
          year: 1975,
          what: 'Describe el examen, el expediente y la evaluación individualizada como técnicas de poder que producen un sujeto conocible. La psicometría aparece ahí como tecnología disciplinaria y no como instrumento neutral.',
        },
        {
          name: 'Nikolas Rose, Governing the Soul',
          year: 1990,
          what: 'Aplica el análisis a la psicología del siglo XX y muestra cómo la disciplina proveyó al Estado y a la empresa de un vocabulario para gobernar conductas por la vía de la autonomía y la autorrealización.',
        },
        {
          name: 'Ian Hacking, los efectos de bucle de las clases humanas',
          year: 1995,
          what: 'Formula el mecanismo con precisión: cuando una clasificación se aplica a personas, las personas cambian al saberse clasificadas, y la categoría tiene que ajustarse. Es una diferencia estructural entre clasificar personas y clasificar cosas.',
        },
      ],
      development: `La psicología suele contarse a sí misma como una disciplina que fue aprendiendo a describir mejor un objeto que estaba ahí desde siempre. Foucault propone leer esa historia al revés: preguntar qué instituciones, qué prácticas y qué necesidades hicieron falta para que apareciera algo llamado enfermedad mental, delincuente o niño con déficit atencional, y qué se volvió posible hacer una vez que esas categorías existieron. No dice que el sufrimiento sea inventado. Dice que la forma en que se recorta, se nombra y se administra tiene historia, y que esa historia es investigable.

El examen es su concepto más útil para esta disciplina y el que menos se enseña. Un test convierte a una persona en un caso: la vuelve descriptible, comparable con una norma, archivable y susceptible de seguimiento. Esa operación produce conocimiento verdadero y produce a la vez una posición desde la cual intervenir. Sostener las dos cosas al mismo tiempo es difícil y es exactamente lo que se le pide a un psicólogo que aplica un instrumento: el puntaje informa y también decide qué pasa con esa persona en un colegio, en un tribunal o en una licencia médica.

Hacking le agregó a esto un mecanismo que la vuelve una tesis empírica y no solo crítica. Las clases humanas interactúan: quien recibe un diagnóstico reorganiza su biografía a la luz de ese diagnóstico, cambian sus síntomas, cambian las expectativas de su entorno y con eso cambia la población que la categoría describía. Un electrón no hace nada con la palabra electrón; una persona sí hace algo con la palabra que la nombra. Esa asimetría tiene consecuencias metodológicas concretas para cualquier estudio longitudinal con categorías diagnósticas.

Lo que queda para quien investiga no es sospechar de todo. Es incorporar una pregunta más al diseño: qué hace esta categoría con las personas a las que se aplica, quién queda autorizado a usarla y qué consecuencias prácticas trae quedar dentro o fuera. Esa pregunta no reemplaza a la de validez, la complementa, y en salud mental suele ser la que más pesa fuera del laboratorio.`,
      today: [
        'El aumento sostenido de diagnósticos de déficit atencional y la medicación en población escolar es el caso donde la producción del sujeto por la categoría se discute con datos y no solo en teoría.',
        'La despatologización de la homosexualidad y la discusión actual sobre la disforia de género muestran que los límites de lo patológico se negocian institucionalmente y no solo se descubren.',
        'Los efectos de bucle obligan a preguntarse, en cualquier estudio de seguimiento, si la categoría diagnóstica que se usa está describiendo a la misma población que describía diez años antes.',
      ],
      caveats: [
        'Que una categoría tenga historia no implica que el sufrimiento que nombra sea falso ni que el tratamiento sea ilegítimo. La lectura militante que concluye que los diagnósticos son puro poder es una simplificación que el propio Foucault no autoriza.',
        'Historia de la locura fue criticado por historiadores en puntos empíricos concretos, en particular sobre el alcance real del gran encierro y sobre el tratamiento de los locos antes del siglo XVII. La tesis general sobrevive, varios de sus apoyos documentales no.',
      ],
    },
  },

  haraway: {
    thesis:
      'Toda visión es visión desde un cuerpo, un lugar y unos instrumentos determinados, y por eso el [[conocimiento_situado|conocimiento situado]] no es una rebaja de la objetividad sino su forma seria. La alternativa entre relativismo total y mirada desde ninguna parte es falsa: ambas evitan responder por el lugar desde el cual se mira.',

    problem:
      'La crítica feminista de la ciencia había llegado a un punto muerto. Si se mostraba que todo resultado científico es un producto social, se ganaba el argumento y se perdía la posibilidad de sostener que una descripción del mundo es mejor que otra; si se defendía la objetividad clásica, había que aceptar un conocimiento sin cuerpo que oculta quién mira y con qué intereses. La [[carga_teorica|carga teórica]] de la observación dejaba sin respuesta la pregunta por cuál mirada merece más crédito.',

    keyNotions: [
      {
        term: 'El truco de dios',
        gloss:
          'Nombre de la pretensión de ver todo desde ninguna parte, sin cuerpo y sin posición, que la ciencia hereda de la teología y que hoy sostienen la visión instrumental infinita y la fantasía del dato puro. El relativismo total comete el mismo truco: estar en todas partes por igual es otra forma de no estar en ninguna.',
      },
      {
        term: 'Conocimientos situados y perspectiva parcial',
        gloss:
          'Solo la perspectiva parcial promete visión objetiva, porque es localizable y por lo tanto criticable. Situarse no es declarar la propia identidad: es mostrar desde qué cuerpo, con qué aparato y bajo qué relaciones se produjo el dato, de modo que otro pueda seguir el recorrido y disputarlo.',
      },
      {
        term: 'Objetividad fuerte y responsabilidad',
        gloss:
          'La objetividad aumenta cuando se examinan las condiciones de producción del conocimiento en lugar de borrarlas. De ahí que la posición de los subordinados sea preferida, no por inocencia ni por acceso privilegiado a lo real, sino porque tiene menos motivos para negar el carácter interpretado del mundo.',
      },
      {
        term: 'El cyborg',
        gloss:
          'Figura del organismo ya mezclado con máquina y con lenguaje técnico, hija ilegítima del militarismo y del capitalismo que resulta infiel a sus orígenes. Sirve para mostrar que las fronteras entre humano, animal y artefacto no se sostienen, y no para celebrar la tecnología.',
      },
      {
        term: 'Naturoculturas y especies compañeras',
        gloss:
          'Naturaleza y cultura no son dos dominios que después se combinen: llegan siempre juntas, como en un perro de trabajo, un laboratorio o un cultivo. Las especies compañeras se hacen unas a otras en el trato, y esa relación asimétrica impone obligaciones concretas en lugar de principios generales.',
      },
    ],

    development: `Haraway escribe desde un impasse que ella misma ayudó a producir. Los estudios sociales de la ciencia habían mostrado con detalle que los hechos se fabrican en laboratorios, con financiamiento, instrumentos y retórica, y la crítica feminista había documentado cómo la primatología proyectaba sobre los monos las jerarquías domésticas de quienes los observaban. El precio fue quedarse sin piso: si todo relato científico es un artefacto local, ninguna descripción puede reclamar más autoridad que otra, y la denuncia pierde exactamente aquello que la hacía valer.

Su salida no es un punto medio. La visión, dice, es siempre encarnada e instrumentada: se mira con ojos que evolucionaron, con microscopios, con detectores y con presupuestos, y no hay ninguna mirada que venga de fuera del mundo. Al **[[truco_de_dios]]** de la ciencia sin cuerpo le corresponde, como gemelo, el relativismo que se declara igualmente cerca de todas las posiciones. Ambos comparten el mismo vicio: hacen imposible pedir cuentas. La perspectiva parcial, en cambio, es localizable, y lo localizable es discutible. Eso es la **[[objetividad_fuerte|objetividad fuerte]]**, y es una exigencia mayor, no menor, que la neutralidad declarada.

De ahí se siguen consecuencias que incomodan a sus propios aliados. Ninguna posición es inocente, tampoco la de los oprimidos, que no ofrece acceso transparente a lo real y debe ganarse mediante trabajo crítico. El objeto de conocimiento tampoco es pasivo: el mundo responde, resiste y desbarata las descripciones, y por eso el conocimiento no es una construcción libre. Aquí la distancia con la **[[construccion_social|construcción social]]** es exacta: mostrar que una categoría tiene historia no equivale a mostrar que se pueda decir cualquier cosa.

El resto de su obra desarma las fronteras que sostenían la escena. El **[[cyborg]]** de 1985 muestra que organismo y máquina ya están mezclados; las naturoculturas, que naturaleza y cultura llegan siempre juntas; las especies compañeras, que humanos, perros, bacterias y ratas de laboratorio se hacen unos a otros en relaciones asimétricas y concretas. De ahí sale una ética sin pureza: no hay manera de vivir sin dañar, y la única obligación disponible es responder por el daño que se causa.

Para la metodología esto tiene una consecuencia precisa y muy maltratada. La reflexividad del investigador no es una confesión de identidad al comienzo del informe, ni un ritual de humildad: es el registro de cómo la posición, el instrumento y la relación con los participantes fabricaron ese dato y no otro, incluyendo lo que quedó sin preguntarse. Un estudio cualitativo que expone su recorrido interpretativo es más objetivo, no menos, que uno que presenta sus temas como si hubieran emergido solos, y la validez deja de ser correspondencia con un mundo visto desde ninguna parte para volverse posibilidad de que otro rehaga el camino y objete.`,

    objections: [
      {
        from: 'Construccionismo Social',
        fromId: 'construccionismo',
        claim:
          'Decir que unas perspectivas parciales son más objetivas que otras reintroduce por la puerta trasera el criterio que la crítica había desmontado. Si no hay mirada exterior, no hay tribunal que ordene las miradas, y la objetividad fuerte queda como una preferencia bien escrita.',
      },
      {
        from: 'Críticos analíticos de la epistemología feminista',
        claim:
          'Las figuras no reemplazan a los criterios. Nunca se dice cómo se decide entre dos conocimientos situados que se contradicen, y la prosa cargada de neologismos vuelve difícil saber si hay una tesis epistemológica o una posición política formulada con metáforas.',
      },
      {
        from: 'Crítica animalista abolicionista',
        claim:
          'La noción de responsabilidad en la relación termina legitimando lo que debía cuestionar. Hablar de matar bien ofrece a los laboratorios y a la industria un vocabulario de cuidado sin exigirles que dejen de matar, y la crítica de la pureza desactiva la única exigencia clara disponible.',
      },
    ],

    works: [
      {
        title: 'Manifiesto para cyborgs',
        year: 1985,
        note: 'La figura del cyborg contra la idea de una naturaleza femenina y contra las fronteras entre organismo, animal y máquina.',
      },
      {
        title: 'Visiones primates',
        year: 1989,
        note: 'Historia de la primatología como narración: los relatos sobre monos y simios reproducen las jerarquías de quienes los observan.',
      },
      {
        title: 'Ciencia, cyborgs y mujeres',
        year: 1991,
        note: 'Recoge el ensayo sobre conocimientos situados, donde se formula la crítica al truco de dios y la objetividad como perspectiva parcial.',
      },
      {
        title: 'Cuando las especies se encuentran',
        year: 2008,
        note: 'Perros, ratas de laboratorio y humanos como especies compañeras, con el problema de matar bien en lugar de fingir que no se mata.',
      },
      {
        title: 'Seguir con el problema',
        year: 2016,
        note: 'Simpoiesis, parentescos raros y el rechazo tanto del optimismo tecnológico como del relato del desastre inevitable.',
      },
    ],

    psychology: {
      claim:
        'Le ofreció a la psicología una salida al falso dilema entre la objetividad sin sujeto y el relativismo: todo conocimiento se produce desde una posición, y decir cuál es esa posición lo hace más responsable y no menos riguroso. Es la base epistemológica de buena parte de la investigación feminista y decolonial que hoy se hace en la disciplina.',
      lineages: [
        {
          name: 'Manifiesto para cyborgs',
          year: 1985,
          what: 'Disuelve las fronteras entre organismo, máquina y animal, y ataca la idea de una naturaleza femenina como base política. Reordena cómo se pueden pensar categorías que la psicología trata como dadas.',
        },
        {
          name: 'Conocimientos situados',
          year: 1988,
          what: 'Nombra truco de dios a la pretensión de ver desde ninguna parte, y propone la objetividad situada: el conocimiento es parcial, localizable y por eso mismo criticable y responsable.',
        },
        {
          name: 'Sandra Harding y la objetividad fuerte',
          year: 1991,
          what: 'Sostiene que incluir la posición del investigador en el escrutinio produce mejor ciencia, porque somete a examen supuestos que de otro modo quedan invisibles por compartidos.',
        },
        {
          name: 'Henrich, Heine y Norenzayan, The weirdest people in the world',
          year: 2010,
          what: 'Muestran que la psicología generaliza a la especie desde muestras occidentales, educadas, industrializadas, ricas y democráticas. Es el conocimiento situado convertido en un problema de validez externa medible.',
        },
      ],
      development: `La psicología aprendió a proteger sus resultados de la subjetividad del investigador mediante control, cegamiento y estandarización, y esa estrategia funciona para un conjunto acotado de amenazas. No funciona para otra clase de problema: el que aparece cuando toda una comunidad de investigadores comparte los mismos supuestos, porque entonces no hay nadie en la sala que pueda notarlos. Ese es el punto de Haraway y el que la disciplina tardó más en escuchar.

Su propuesta no es abandonar la objetividad sino cambiar dónde se la busca. La mirada desde ninguna parte, la que pretende no tener cuerpo, historia ni intereses, es la menos criticable de todas justamente porque no declara desde dónde mira. Un conocimiento situado, en cambio, dice quién lo produjo, con qué muestra, en qué contexto y para qué, y eso lo hace evaluable. Harding lleva el argumento más lejos: incluir esa declaración en el escrutinio no relaja el rigor, lo aumenta.

El caso WEIRD es la mejor demostración empírica que la psicología tiene de este punto, y es útil precisamente porque no viene de la teoría crítica sino de la revisión sistemática de sus propias muestras. Durante décadas la disciplina publicó afirmaciones sobre la percepción, la moral y la cooperación humanas basadas casi por completo en estudiantes universitarios de países ricos, y las escribió en presente universal. No hubo fraude ni descuido individual: hubo una posición no declarada que se confundió con ningún lugar.

Para un estudiante chileno esto no es abstracto. Buena parte de los instrumentos que va a usar fueron construidos y normados en otras poblaciones, y adaptarlos no es traducirlos: exige evaluar si el constructo funciona igual, si los ítems significan lo mismo y si las normas son aplicables. Declarar la posición desde la que se investiga, incluida la del propio instrumento, es en este contexto una exigencia técnica antes que política.

Su trabajo posterior sobre especies compañeras extiende el argumento a un lugar donde la psicología rara vez lo aplica: el laboratorio con animales. Llamar modelo animal a una rata supone a la vez que se parece lo bastante a un humano como para que el resultado se transfiera, y lo bastante poco como para que el procedimiento sea aceptable. Esas dos suposiciones se sostienen juntas todo el tiempo y casi nunca se escriben juntas. Haraway no concluye de ahí una prohibición sino una exigencia: hacer explícita la relación con el animal en lugar de tratarlo como instrumento transparente, que es la misma operación que pide para cualquier otro objeto de investigación.`,
      today: [
        'La adaptación y validación de instrumentos a población chilena es la forma cotidiana en que el problema de las muestras no representativas aparece en una tesis.',
        'La declaración de posicionamiento del investigador es requisito en revistas de investigación cualitativa y creciente en investigación participativa y comunitaria.',
        'La investigación con animales y los estudios sobre vínculo humano animal retoman su trabajo posterior sobre especies compañeras, que discute a quién se le reconoce estatus de sujeto en un diseño.',
      ],
      caveats: [
        'Conocimiento situado no significa que cualquier punto de vista valga lo mismo. Su argumento es lo contrario: como toda mirada es parcial, hay que poder examinarla, y una posición declarada es más criticable que una encubierta.',
        'El Manifiesto para cyborgs se cita en psicología casi siempre de segunda mano y como metáfora tecnológica optimista, cuando es un texto de polémica interna del feminismo de los años ochenta contra el esencialismo.',
      ],
    },
  },

  construccionismo: {
    thesis:
      'Las categorías con que la psicología describe a las personas no registran clases naturales anteriores al lenguaje: son logros históricos sostenidos por prácticas de relación, y por eso pudieron ser otras. La [[construccion_social|construcción social]] no dice que el sufrimiento sea irreal, dice que el vocabulario que lo nombra hace cosas en el mundo.',

    problem:
      'La psicología trataba emoción, inteligencia, personalidad o autoestima como entidades internas que sus instrumentos descubrían, y sus hallazgos como leyes válidas para cualquier época. Bastaba comparar dos siglos para ver el problema: las descripciones cambian con las instituciones que las producen, y una ciencia que ignora eso confunde la historia de su vocabulario con la estructura de su objeto. La crítica del [[saber_poder|saber poder]] había mostrado que clasificar es también intervenir.',

    keyNotions: [
      {
        term: 'La realidad institucional se objetiva',
        gloss:
          'Berger y Luckmann describen un ciclo: los seres humanos externalizan sus acciones en hábitos, esos hábitos se objetivan en instituciones que se experimentan como cosas dadas, y las nuevas generaciones las internalizan como si fueran naturales. Lo que fue producido termina apareciendo como el orden de las cosas.',
      },
      {
        term: 'El lenguaje como constitutivo, no representacional',
        gloss:
          'Las palabras no son etiquetas que se pegan a objetos ya recortados: describir es una acción realizada dentro de una relación, con consecuencias para lo que después puede hacerse. La pregunta deja de ser qué es la emoción y pasa a ser qué hace el vocabulario de la emoción entre quienes lo usan.',
      },
      {
        term: 'Crítica de las categorías psicológicas',
        gloss:
          'Trastornos, rasgos y capacidades se examinan como productos de prácticas fechadas y no como especies naturales. El adolescente, el trauma, la autoestima y el trastorno de personalidad tienen fecha de aparición, condiciones institucionales de existencia, instrumentos que los miden y consecuencias administrativas rastreables en licencias, escuelas y tribunales.',
      },
      {
        term: 'Repertorios interpretativos y prácticas discursivas',
        gloss:
          'Herramienta empírica del programa: en una entrevista no se busca la creencia privada del participante, sino los repertorios disponibles con los que construye su versión, qué hace esa versión en la conversación y qué explicaciones alternativas quedan bloqueadas por ella.',
      },
      {
        term: 'El límite: relativismo y política del programa',
        gloss:
          'Si toda descripción es una construcción local, también lo es la del construccionista, y no queda tribunal para preferir una clasificación a otra. El mismo argumento sirve para desmontar un diagnóstico injusto y para negar un daño documentado, y ese doble uso es el problema no resuelto.',
      },
    ],

    development: `El programa se formula contra un supuesto que la psicología rara vez discutía: que sus categorías nombran cosas que estaban ahí antes de ser nombradas. Berger y Luckmann habían mostrado en 1966 que el orden institucional es un producto humano que se experimenta como realidad objetiva, y Gergen lo radicalizó para la disciplina: los hallazgos de la psicología social son historia y no ley, describen cómo se comportaba cierta gente en cierto arreglo institucional y cambian cuando ese arreglo cambia, en parte porque la propia descripción circula.

El giro es sobre el lenguaje. Describir no es reflejar un objeto ya recortado, sino ejecutar una acción dentro de una relación. Lo que llamamos emoción, memoria o personalidad no está primero en un interior y después en las palabras: se sostiene en el intercambio que lo hace inteligible, en las prácticas que lo miden y en las instituciones que lo administran. De ahí que la pregunta cambie de forma. Ya no se investiga qué es la depresión, sino qué hace en una consulta, en una licencia médica y en una biografía el hecho de que exista esa categoría y no otra.

El rendimiento crítico es inmediato. Categorías que parecían descripciones neutrales resultan tener fecha, autores e intereses, y con eso se abre la posibilidad de discutirlas. Aparecen métodos propios: análisis del discurso, repertorios interpretativos, investigación narrativa, terapias que trabajan sobre las versiones disponibles de un problema en vez de sobre un déficit interno.

El límite llega por el mismo camino. Si toda descripción es una construcción situada en una comunidad, también lo es esta, y no queda instancia desde la cual sostener que una clasificación es peor que otra. Peor: el argumento no tiene dueño político y sirve igual para desmontar un diagnóstico abusivo o para negar un daño documentado. Hacking ordenó parte del problema al exigir que se precise construcción de qué y al distinguir las clases que reaccionan a su clasificación, como un niño diagnosticado, de las que no reaccionan, como un quark. El realismo crítico agrega que confundir el objeto con nuestra descripción de él es un error de nivel: que la categoría sea histórica no impide que existan mecanismos que operan aunque nadie los nombre. Haraway ofrece la salida más útil al negarse a elegir entre el relativismo y el **[[truco_de_dios|truco de dios]]** del objetivismo.

Para la metodología deja herramientas y una advertencia. El análisis del discurso y el análisis temático de orientación construccionista tratan el material como producción [[conocimiento_situado|situada]] y no como ventana a un interior, y por eso su validez no puede ser correspondencia: se juega en la transparencia del procedimiento, en la coherencia de las lecturas y en que otro investigador pueda seguir y objetar el recorrido. La advertencia es que el programa no autoriza a bajar el rigor. Sostener que las categorías son históricas no exime de justificar el muestreo, el registro ni el criterio de análisis, y el método se elige por la pregunta, no por lealtad a una etiqueta epistemológica.`,

    objections: [
      {
        from: 'Ian Hacking',
        claim:
          'La consigna se usa sin precisar construcción de qué. Hay que distinguir las clases que interactúan con su clasificación, como un niño que cambia al saberse diagnosticado, de las que son indiferentes a ella, y el programa trata a todas del mismo modo.',
      },
      {
        from: 'Realismo crítico',
        fromId: 'postpositivismo',
        claim:
          'Se confunde el plano de nuestras descripciones con el plano de lo que existe. Que una categoría tenga historia no implica que no haya mecanismos operando con independencia del lenguaje, y la pobreza produce efectos aunque nadie los nombre.',
      },
      {
        from: 'Haraway',
        fromId: 'haraway',
        claim:
          'El relativismo que resulta del programa es el gemelo del truco de dios: estar igualmente cerca de todas las posiciones equivale a no responder por ninguna. La salida no es dejar de situar el conocimiento, sino exigir que quien lo produce responda por su lugar.',
      },
    ],

    works: [
      {
        title: 'La construcción social de la realidad',
        year: 1966,
        note: 'Berger y Luckmann: externalización, objetivación e internalización, y el conocimiento de sentido común como objeto sociológico.',
      },
      {
        title: 'La psicología social como historia',
        year: 1973,
        note: 'Gergen sostiene que los hallazgos de la disciplina describen arreglos históricos y no regularidades permanentes.',
      },
      {
        title: 'El movimiento construccionista en la psicología moderna',
        year: 1985,
        note: 'El artículo que reúne el programa y le da nombre dentro de la psicología.',
      },
      {
        title: 'Discurso y psicología social',
        year: 1987,
        note: 'Potter y Wetherell convierten el programa en método: repertorios interpretativos y análisis de la construcción de versiones.',
      },
      {
        title: 'La construcción social de qué',
        year: 1999,
        note: 'Hacking ordena y limita la consigna, con la distinción entre clases interactivas y clases indiferentes.',
      },
    ],

    psychology: {
      claim:
        'Sostiene que buena parte de lo que la psicología trata como propiedades del individuo son productos de relaciones, de lenguaje y de historia, y que la disciplina se equivoca de nivel cuando los busca dentro de la cabeza. Es la corriente que obligó a la psicología social a discutir si su objeto tiene la estabilidad que sus métodos presuponen.',
      lineages: [
        {
          name: 'Berger y Luckmann, La construcción social de la realidad',
          year: 1966,
          what: 'Describen cómo lo que se hace repetidamente se institucionaliza, se transmite y termina siendo vivido como naturaleza. Es el texto que instala el vocabulario en las ciencias sociales.',
        },
        {
          name: 'Kenneth Gergen, Social psychology as history',
          year: 1973,
          what: 'Argumenta que los hallazgos de la psicología social son históricamente locales, porque la gente cambia su conducta al conocerlos. Es el punto donde la disciplina tiene que decidir si busca leyes o describe épocas.',
        },
        {
          name: 'Sheila McNamee y Kenneth Gergen, Therapy as Social Construction',
          year: 1992,
          what: 'Traducen el programa a la clínica: el problema no está en el individuo sino en las descripciones disponibles, y la terapia consiste en generar otras. De ahí salen las terapias narrativas y colaborativas.',
        },
        {
          name: 'Michael White y David Epston, Medios narrativos para fines terapéuticos',
          year: 1990,
          what: 'Desarrollan la externalización del problema y la reescritura de la historia personal, con un procedimiento clínico específico y una difusión amplia en Chile y en América Latina.',
        },
      ],
      development: `La psicología estudia atributos: personalidad, actitudes, inteligencia, autoestima. El construccionismo pregunta de dónde salieron esos atributos como unidades de análisis, y responde que de un conjunto de prácticas históricas que primero produjeron la distinción y después la encontraron en todas partes. La versión fuerte sostiene que no hay nada detrás del vocabulario; la versión moderada, que es la que más rinde, sostiene que el vocabulario participa en la constitución del fenómeno sin agotarlo.

El argumento de Gergen es el que más incomoda porque es metodológico y no filosófico. Si publicar un hallazgo sobre conformidad cambia la conformidad de quienes lo leen, entonces la psicología social no está describiendo regularidades estables sino un blanco que se mueve, y su acumulación funciona distinto de la de la física. La disciplina nunca respondió a esto de frente. La respuesta implícita fue seguir buscando efectos y confiar en que fueran lo bastante básicos como para no depender de la época, y la crisis de replicación reabrió la duda desde otro flanco.

Donde el programa sí produjo resultados verificables fue en la clínica. Las terapias narrativas y colaborativas tomaron en serio la idea de que un problema es también una descripción, y construyeron procedimientos concretos: separar a la persona del problema, buscar los episodios que la descripción dominante deja fuera, reescribir. Es la traducción más honesta del marco, porque no se limita a criticar sino que se expone a los resultados. Su base de evidencia es menor que la de las terapias cognitivo conductuales, y eso también hay que decirlo.

En un curso de metodología, el construccionismo es sobre todo un llamado de atención sobre lo que un instrumento presupone. Una escala de autoestima supone que la autoestima es una cantidad que una persona tiene en mayor o menor medida, comparable entre individuos y estable en el tiempo. Todo eso puede ser cierto, pero es una hipótesis y no un punto de partida, y hay diseños que la ponen a prueba en vez de asumirla.`,
      today: [
        'Las terapias narrativas y colaborativas tienen presencia formativa importante en Chile, especialmente en el trabajo con familias y en contextos comunitarios.',
        'El análisis del discurso y los métodos participativos se apoyan en este marco, con criterios de calidad propios que no son la validez interna ni la generalización estadística.',
        'La discusión sobre si constructos como la autoestima o la resiliencia nombran propiedades individuales o efectos de condiciones sociales es una disputa construccionista con consecuencias directas en política pública.',
      ],
      caveats: [
        'La versión fuerte, que niega cualquier realidad independiente de las descripciones, se refuta a sí misma cuando se aplica a sus propias afirmaciones. La mayoría de los construccionistas productivos trabajan con una versión moderada, y confundirlas hace fácil descartar la corriente entera.',
        'Construccionismo social y constructivismo no son sinónimos aunque los manuales los mezclen: el constructivismo de Piaget describe cómo un individuo construye estructuras cognitivas, y el construccionismo niega justamente que el individuo sea la unidad correcta.',
      ],
    },
  },

  hermeneutica: {
    thesis:
      'Comprender no es un procedimiento que un sujeto aplique a un objeto: es el modo de ser de quien ya pertenece a una lengua, a una historia y a una tradición. Por eso el [[prejuicio]] no es el obstáculo que hay que remover antes de interpretar, sino la condición que permite que un texto o una persona nos digan algo.',

    problem:
      'Dilthey quiso asegurar las ciencias del espíritu dándoles un método tan firme como el de las ciencias naturales, y lo buscó en la reconstrucción de la vida psíquica del autor. La fenomenología intentó algo análogo con la [[epoje|epojé]], suspendiendo las creencias previas para describir lo dado. Heidegger mostró que ese ideal es imposible, porque quien interpreta ya está en un mundo con anticipaciones de sentido, y entonces hay que explicar cómo puede haber verdad sin salir de la historia.',

    keyNotions: [
      {
        term: 'El círculo hermenéutico',
        gloss:
          'Para entender una parte hay que anticipar el sentido del todo, y el todo solo se alcanza por las partes. No es un vicio lógico que haya que evitar: es la estructura de toda comprensión. El trabajo consiste en revisar la anticipación contra el texto y corregirla cuando este se resiste.',
      },
      {
        term: 'Prejuicio y tradición',
        gloss:
          'Gadamer rehabilita una palabra que la Ilustración había condenado. Los juicios previos que traemos por pertenecer a una lengua y a una historia son lo que nos permite encontrar algo relevante en un texto. Lo que se exige no es eliminarlos, sino ponerlos en juego y arriesgarlos a ser corregidos.',
      },
      {
        term: 'Fusión de horizontes',
        gloss:
          'Comprender no es meterse en la cabeza del autor ni permanecer en el propio punto de vista: es que ambos horizontes se amplíen hasta formar uno más ancho. La distancia temporal deja de ser un obstáculo y se vuelve productiva, porque permite que el texto diga algo que su autor no controlaba.',
      },
      {
        term: 'Conciencia de la historia efectual y aplicación',
        gloss:
          'Interpretamos desde una historia que ya nos ha formado y que nunca dominamos del todo; saberlo es parte del oficio. Además toda comprensión incluye aplicación al caso presente, como el juez con la ley o el terapeuta con un relato: entender y aplicar no son dos momentos separables.',
      },
      {
        term: 'La verdad no se garantiza por método',
        gloss:
          'La conjunción del título es adversativa. El método asegura repetibilidad y controla el error, pero la experiencia de verdad del arte, la historia o el diálogo no se obtiene aplicando un procedimiento. No es una condena de la ciencia: es el rechazo de su monopolio sobre lo que cuenta como conocimiento.',
      },
    ],

    development: `La hermenéutica filosófica nace de una insatisfacción con el modo en que las ciencias del espíritu buscaban legitimarse. Dilthey había propuesto un método propio, fundado en revivir la experiencia del autor, para alcanzar el rigor que la física exhibía en su dominio. El proyecto conservaba intacto el esquema que quería superar: un sujeto que se despoja de lo suyo y un objeto que espera ser reconstruido correctamente. Heidegger desplazó el problema al mostrar que la comprensión no es un acto cognitivo entre otros, sino la manera en que existe alguien que ya está arrojado en un mundo, hablando una lengua que recibió y manejando cosas cuyo sentido no inventó.

Gadamer convierte ese desplazamiento en una teoría de la interpretación. El **[[circulo_hermeneutico|círculo hermenéutico]]** deja de ser un defecto a evitar y pasa a ser la forma misma del entender: llegamos al texto con una anticipación de su sentido, y comprender consiste en revisarla cuando el texto se resiste. De ahí la rehabilitación del prejuicio contra la Ilustración, que hizo del rechazo de todo juicio previo su propio juicio previo. Nadie interpreta desde cero, y quien lo intenta solo consigue no reconocer los supuestos que igual está usando.

La **[[fusion_de_horizontes|fusión de horizontes]]** describe lo que ocurre cuando la operación sale bien. No se trata de trasladarse a la época del otro ni de quedarse en la propia, sino de que ambos horizontes se ensanchen en el intercambio, con la distancia temporal trabajando a favor y no en contra. Y de ahí la tesis polémica: la verdad no se asegura mediante método. El procedimiento controla el error y permite repetir, pero lo que ocurre cuando una obra o una vida ajena nos obliga a corregirnos no se produce aplicando reglas.

El debate con Habermas marca el límite del programa. Si la tradición es la condición de la comprensión, ¿cómo se critica una tradición que transmite dominación, o una comunicación sistemáticamente distorsionada? Habermas reclama un punto de apoyo contrafáctico; Gadamer responde que también la crítica se ejerce en el lenguaje y desde una historia, y que no hay lugar exterior desde el cual auditar. Ricoeur propuso la mediación más fértil: una hermenéutica de la sospecha, que desconfía del sentido manifiesto, y otra de la recuperación, que escucha lo que el texto ofrece.

En investigación cualitativa esto es doctrina de trabajo, no ornamento. El análisis fenomenológico interpretativo asume una doble hermenéutica, porque el investigador interpreta a alguien que ya está interpretando su experiencia. El análisis temático reflexivo abandona la fórmula de los temas que emergen solos, precisamente porque emergen de una lectura situada. Y la reflexividad se vuelve exigencia metodológica y no confesión: consiste en exponer qué anticipaciones hicieron posible esta lectura y cuáles cerró, de modo que la validez se juegue en la trazabilidad del recorrido interpretativo y no en una correspondencia inalcanzable con la vivencia del otro.`,

    objections: [
      {
        from: 'Habermas',
        claim:
          'La tradición no solo transmite sentido, también transmite dominación, y la comunicación puede estar sistemáticamente distorsionada sin que los participantes lo noten. La crítica de la ideología necesita un punto de apoyo que la pertenencia, por sí sola, no ofrece.',
      },
      {
        from: 'Betti y Hirsch, teóricos de la validez interpretativa',
        claim:
          'Sin criterio para distinguir una interpretación correcta de una arbitraria, el programa entrega el texto al intérprete. El significado que el autor quiso decir es determinable y sirve de norma, aunque su relevancia para cada época sea otra cuestión.',
      },
      {
        from: 'Investigación cualitativa académica',
        fromId: 'met_cualitativo',
        claim:
          'Si la comprensión no admite método, no se ve cómo formar investigadores ni cómo evaluar una tesis. En la práctica se necesitan procedimientos explícitos de registro, codificación y contraste, y la desconfianza del método deja al estudiante sin nada que aprender.',
      },
    ],

    works: [
      {
        title: 'Ser y tiempo',
        year: 1927,
        note: 'Heidegger convierte la comprensión en modo de ser y expone la estructura anticipatoria de toda interpretación.',
      },
      {
        title: 'Verdad y método',
        year: 1960,
        note: 'Gadamer: círculo hermenéutico, rehabilitación del prejuicio, fusión de horizontes y crítica del método como vía única a la verdad.',
      },
      {
        title: 'La lógica de las ciencias sociales',
        year: 1967,
        note: 'Habermas plantea la objeción central: la tradición también transmite dominación y la crítica necesita un apoyo externo.',
      },
      {
        title: 'El conflicto de las interpretaciones',
        year: 1969,
        note: 'Ricoeur articula la hermenéutica de la sospecha con la de la recuperación del sentido.',
      },
      {
        title: 'Verdad y método II',
        year: 1986,
        note: 'Escritos posteriores donde Gadamer responde a sus críticos y precisa el alcance de la aplicación.',
      },
    ],

    psychology: {
      claim:
        'Le dio a la psicología una teoría de la interpretación que sostiene lo que hace todos los días sin decirlo: leer entrevistas, historias clínicas y observaciones. Su tesis central es que no existe una interpretación sin supuestos previos, de modo que la exigencia razonable no es eliminarlos sino hacerlos trabajar de forma controlada.',
      lineages: [
        {
          name: 'Wilhelm Dilthey, la distinción entre explicar y comprender',
          year: 1894,
          what: 'Sostiene que las ciencias del espíritu buscan comprender el sentido y las de la naturaleza explicar por causas. Es el origen de la división entre psicología cuantitativa y cualitativa tal como se sigue enseñando.',
        },
        {
          name: 'Hans-Georg Gadamer, Verdad y método',
          year: 1960,
          what: 'Rehabilita el prejuicio como condición de toda comprensión y propone la fusión de horizontes. De ahí sale la idea de reflexividad que hoy se exige en cualquier informe cualitativo serio.',
        },
        {
          name: 'Paul Ricoeur, De la interpretación',
          year: 1965,
          what: 'Lee el psicoanálisis como una hermenéutica de la sospecha y no como una ciencia natural, lo que reformula el estatuto de la interpretación clínica y su relación con la prueba.',
        },
        {
          name: 'Braun y Clarke, Using thematic analysis in psychology',
          year: 2006,
          what: 'Sistematizan el análisis temático con seis fases y con la exigencia de declarar la posición del investigador. Es el método cualitativo más usado en psicología y su base es hermenéutica aunque rara vez lo diga.',
        },
      ],
      development: `Toda investigación cualitativa en psicología descansa en una operación que casi nunca se justifica: alguien lee un material y decide qué significa. La hermenéutica es la tradición que se hizo cargo de esa operación en serio. Su punto de partida es que comprender no es partir de cero sino ajustar una anticipación de sentido con lo que el texto va oponiendo, en un movimiento que va de la parte al todo y vuelve. Ese círculo no es un defecto que haya que evitar, es la forma que tiene la comprensión.

La consecuencia para la disciplina es fuerte. Si no hay lectura sin anticipación, entonces la pretensión de acercarse a los datos sin teoría previa es una ilusión, y la que promete una interpretación que emerge sola de los datos es una promesa que ningún analista cumple. Gadamer propone otra cosa: en lugar de negar los supuestos, ponerlos a jugar y dejar que el material los corrija. En metodología eso se llama reflexividad, y es la diferencia entre un análisis en que el investigador encuentra lo que ya creía y uno en que algo del material lo obligó a cambiar de idea.

Ricoeur agregó una distinción que le sirve a un estudiante de clínica más que ninguna otra. Hay interpretaciones que restauran un sentido y otras que lo desconfían: leer un síntoma como mensaje cifrado supone que hay algo detrás que el propio sujeto no dice, y esa es una apuesta interpretativa con consecuencias, no una lectura neutral. La pregunta que sigue es de qué depende que una interpretación sea buena, y la respuesta hermenéutica no es la verificación sino la coherencia, la capacidad de dar cuenta del material completo y la resistencia frente a lecturas rivales.

De ahí sale el criterio de calidad que la investigación cualitativa terminó adoptando. No se pide validez interna ni generalización sino algo distinto: que se pueda seguir el camino que llevó de los datos a las conclusiones, que se hayan buscado casos que contradigan la interpretación propuesta, y que la posición del investigador esté declarada. Cuando una tesis afirma que las categorías emergieron de los datos y no explica quién las hizo emerger, está incumpliendo un requisito hermenéutico básico.`,
      today: [
        'El análisis temático de Braun y Clarke es el método cualitativo más usado en tesis de psicología, y su fase de familiarización y su exigencia de reflexividad son hermenéutica aplicada.',
        'Los criterios de rigor cualitativo, credibilidad, transferibilidad y auditabilidad, sustituyen a la validez porque provienen de esta tradición y no de la experimental.',
        'La supervisión clínica es un ejercicio hermenéutico institucionalizado: dos personas discuten qué significa el material de un caso y qué supuestos trajo cada una.',
      ],
      caveats: [
        'Comprender no se opone a explicar como lo cualitativo a lo cuantitativo. Dilthey planteó una distinción sobre tipos de objeto, no sobre técnicas de recolección, y usar su nombre para justificar que en cualitativa no hace falta rigor es una lectura oportunista.',
        'La afirmación de que las categorías emergen de los datos, muy frecuente en tesis de análisis temático, contradice el marco que esas mismas tesis invocan: en hermenéutica nada emerge solo, alguien interpreta desde alguna parte.',
      ],
    },
  },

  pragmatismo: {
    thesis:
      'El significado de un concepto se agota en los efectos prácticos concebibles que atribuimos a su objeto, de modo que dos ideas que no difieren en ningún efecto no difieren en nada: eso dice la [[maxima_pragmatica|máxima pragmática]]. Y verdadera es la creencia destinada a sostenerse a largo plazo ante una [[indagacion|indagación]] pública que corrige sus propios resultados.',

    problem:
      'La filosofía moderna había arrancado con una duda universal y fingida, propuesta desde el escritorio, que exigía luego un fundamento indudable para salir de ella. Al mismo tiempo, definir la verdad como copia de la realidad obligaba a comparar la idea con la cosa sin la idea, cosa que nadie puede hacer. Quedaban disputas interminables entre posiciones que no diferían en ninguna consecuencia observable.',

    keyNotions: [
      {
        term: 'La máxima pragmática',
        gloss:
          'Regla de Peirce para aclarar conceptos: considérense los efectos prácticos concebibles que atribuimos al objeto del concepto, y la suma de esos efectos es todo el significado del concepto. No es una teoría de la verdad, es un criterio para desactivar disputas sin diferencia.',
      },
      {
        term: 'Duda real y duda de papel',
        gloss:
          'La creencia es un hábito de acción y la duda una irritación que interrumpe ese hábito. La duda cartesiana no interrumpe nada porque nadie deja de actuar por ella, y por eso no inicia investigación alguna. Solo la duda que aparece cuando el hábito falla pone en marcha la indagación.',
      },
      {
        term: 'La fijación de la creencia',
        gloss:
          'Peirce compara cuatro maneras de estabilizar creencias: la tenacidad, que se aferra; la autoridad, que impone; el método a priori, que acepta lo que resulta agradable a la razón; y el método científico, único que somete la creencia a algo independiente de lo que cualquiera desee.',
      },
      {
        term: 'Verdad como resultado de la indagación',
        gloss:
          'Verdadera es la opinión con la que estarían de acuerdo todos los que investigan si la investigación se prolongara lo suficiente, y su objeto es lo real. Como nadie está en ese final, toda creencia actual es falible, y el falibilismo es la actitud correspondiente.',
      },
      {
        term: 'Dewey: indagación como transformación de una situación',
        gloss:
          'Investigar no es contemplar desde fuera, es intervenir sobre una situación indeterminada hasta volverla determinada. El conocimiento no copia un mundo ya hecho: lo reorganiza. De ahí la aserción garantizada, que sustituye a la verdad como certeza, y la crítica al conocimiento como espectáculo.',
      },
    ],

    development: `El pragmatismo nace hacia 1870 en las conversaciones de un pequeño grupo de Cambridge, entre quienes acababan de ver una guerra civil hecha en nombre de certezas absolutas. Su objeción inicial es de procedimiento. Descartes había fundado la filosofía moderna en una duda universal decidida por escrito, pero nadie duda de verdad porque un texto lo proponga: la duda genuina aparece cuando un hábito de acción falla. Y la definición corriente de verdad, como acuerdo entre la idea y la cosa, exige comparar la idea con la cosa tal como sería sin la idea, operación que nadie ha realizado.

Peirce reemplaza el problema por otro tratable. Si se quiere saber qué significa un concepto, hay que preguntar qué diferencia haría en la conducta esperada que fuese aplicable, y la suma de esas diferencias concebibles es el concepto entero. La creencia es un hábito, la duda su interrupción, y la investigación el trabajo que va de la segunda a la primera. Entre las maneras de fijar creencias, solo una las somete a algo que no depende de lo que nadie prefiera, y por eso la verdad se define como aquello sobre lo cual convergerían los investigadores al final del camino, y el **[[falsacionismo]]** posterior recoge la misma exigencia de exposición al fracaso.

James radicaliza la fórmula hasta hacerla vulnerable: verdadero es lo que resulta útil creer, lo que funciona en la experiencia de alguien. La objeción llegó de inmediato, porque utilidad personal y verdad se separan con facilidad, y Peirce rebautizó su posición como pragmaticismo para marcar distancia. Dewey rehace el planteo en otro registro: la indagación transforma una situación indeterminada en una determinada, el conocimiento es intervención y no espectáculo, y la aserción garantizada reemplaza a la certeza. Con eso el criterio deja de ser lo que le sirve a uno y pasa a ser lo que resiste el escrutinio de una comunidad que sigue examinando.

La corriente quedó opacada por el positivismo lógico y volvió a fines del siglo XX, cuando la **[[carga_teorica|carga teórica]] de la observación** y la crítica al fundacionalismo hicieron atractiva una epistemología sin fundamentos últimos pero con control público. Reaparece cada vez que se discute si una categoría diagnóstica vale por lo que describe o por lo que permite hacer.

Su rendimiento metodológico es directo y es la base filosófica explícita de los métodos mixtos. Si el sentido de un concepto está en sus consecuencias, la disputa entre paradigmas cuantitativo y cualitativo se parece a una duda de papel: el diseño lo decide la pregunta, no la lealtad a una escuela, y nada impide combinar una encuesta con entrevistas si eso responde mejor. La abducción, que Peirce describió como la formulación de la hipótesis más plausible ante un hecho sorprendente, es hoy el vocabulario con que la investigación cualitativa explica cómo genera hipótesis. Y la aserción garantizada ofrece un criterio de validez adecuado a la práctica real: no certeza, sino conclusiones que han sobrevivido a un escrutinio metódico y que siguen abiertas a revisión.`,

    objections: [
      {
        from: 'Russell y los críticos analíticos',
        claim:
          'Confunde la verdad con la utilidad de creer. Si verdadero significa lo que funciona para alguien, entonces creencias falsas y provechosas resultarían verdaderas, y habría que aceptar que una proposición cambia de valor según a quién le convenga sostenerla.',
      },
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'El instrumentalismo trata las teorías como herramientas que solo se usan bien o mal, y una herramienta no se refuta. Con eso se pierde lo esencial de la ciencia, que es someter enunciados universales a pruebas capaces de mostrar que son falsos.',
      },
      {
        from: 'Críticos de los métodos mixtos',
        fromId: 'met_mixto',
        claim:
          'Invocar el pragmatismo se ha vuelto un modo elegante de no discutir supuestos. Decir que la pregunta manda no resuelve que los diseños arrastran ontologías distintas, y muchas integraciones apenas yuxtaponen resultados sin explicar cómo se articulan.',
      },
    ],

    works: [
      {
        title: 'La fijación de la creencia',
        year: 1877,
        note: 'Peirce: la creencia como hábito, la duda como irritación y la comparación entre cuatro métodos para estabilizar creencias.',
      },
      {
        title: 'Cómo esclarecer nuestras ideas',
        year: 1878,
        note: 'La formulación de la máxima pragmática y la definición de la verdad como opinión final de la comunidad de investigadores.',
      },
      {
        title: 'Pragmatismo',
        year: 1907,
        note: 'James populariza la doctrina y la extiende a la verdad como aquello que se verifica y rinde en la experiencia.',
      },
      {
        title: 'Democracia y educación',
        year: 1916,
        note: 'Dewey liga indagación, experiencia y vida democrática: aprender es reconstruir la experiencia, no recibirla.',
      },
      {
        title: 'Lógica: teoría de la indagación',
        year: 1938,
        note: 'La exposición sistemática de la indagación como transformación de una situación indeterminada y de la aserción garantizada.',
      },
    ],

    psychology: {
      claim:
        'Es la única de estas tradiciones que fue fundada en parte por psicólogos, y la que le dio a la disciplina su primer manual y su primera definición funcional de la mente. Hoy sostiene, además, la justificación estándar de los métodos mixtos: el criterio para elegir un método es la pregunta que se quiere responder y no la lealtad a una ontología.',
      lineages: [
        {
          name: 'William James, Principios de psicología',
          year: 1890,
          what: 'Define la conciencia como una corriente y no como una suma de elementos, y trata los hábitos y la voluntad por su función adaptativa. Es el texto fundacional de la psicología estadounidense.',
        },
        {
          name: 'John Dewey, El concepto de arco reflejo en psicología',
          year: 1896,
          what: 'Critica la descomposición del acto en estímulo y respuesta separados, y propone verlo como un circuito de coordinación. Es el manifiesto del funcionalismo y un antecedente directo del enfoque ecológico.',
        },
        {
          name: 'Charles Sanders Peirce, la máxima pragmática',
          year: 1878,
          what: 'Propone que el significado de un concepto son sus efectos prácticos concebibles. Es el antecedente filosófico directo del operacionalismo y de la exigencia de definir constructos por sus consecuencias observables.',
        },
        {
          name: 'Tashakkori y Teddlie, Handbook of Mixed Methods',
          year: 2003,
          what: 'Adoptan explícitamente el pragmatismo como marco de los métodos mixtos, para autorizar la combinación de diseños que las tablas de paradigmas declaraban incompatibles.',
        },
      ],
      development: `El pragmatismo entró a la psicología por la puerta principal porque James era psicólogo antes que filósofo. Su definición de la conciencia como corriente continua, personal y selectiva no fue una tesis metafísica sino una descripción destinada a orientar la investigación, y su tratamiento del hábito como economía del sistema nervioso sigue siendo reconocible en cualquier manual de aprendizaje. Lo que aportó no fue una teoría particular sino un criterio: preguntar para qué sirve un proceso mental antes de preguntar de qué está hecho.

Dewey radicalizó ese criterio con un argumento que la psicología tardó setenta años en volver a escuchar. Descomponer una conducta en estímulo y respuesta supone que el organismo estaba quieto y algo lo golpeó, cuando en realidad el organismo ya estaba haciendo algo y el estímulo es un momento dentro de esa actividad. El niño que se quema no primero ve la llama y después retira la mano: ver y alcanzar son partes de una misma coordinación. El enfoque ecológico y la cognición corporizada vuelven a este punto por caminos distintos.

En metodología el pragmatismo tuvo un segundo uso, más instrumental y bastante más discutible. Cuando los métodos mixtos necesitaron una justificación filosófica para combinar diseños que la tabla de paradigmas declaraba incompatibles, la encontraron aquí: si el criterio de verdad es lo que funciona para el problema, entonces la incompatibilidad entre positivismo y constructivismo deja de ser un obstáculo. El argumento es legítimo y también cómodo, porque permite evitar la discusión ontológica en lugar de resolverla, y conviene reconocerlo antes de invocarlo en una tesis.

Queda un aporte que a un curso de metodología le sirve más que todo lo anterior. Peirce sostuvo que la investigación no empieza en la duda metódica sino en una duda real, la que aparece cuando un hábito de acción deja de funcionar. Aplicado a una tesis, eso significa que una buena pregunta de investigación no es la que llena un vacío bibliográfico sino la que resuelve algo que quedó trabado en la práctica, y la diferencia entre ambas se nota de inmediato en la calidad del trabajo.`,
      today: [
        'El pragmatismo es el marco declarado en la mayoría de los diseños de métodos mixtos, y aparece explícitamente en los manuales que los estudiantes usan para justificar su elección.',
        'La evaluación de programas y la investigación acción trabajan con criterios pragmáticos: el conocimiento se juzga por lo que permite hacer y por la transformación que produce.',
        'La definición funcional de los procesos psicológicos, que pregunta para qué sirve algo antes de dónde ocurre, sigue organizando buena parte de la psicología cognitiva y del análisis funcional de la conducta.',
      ],
      caveats: [
        'Que algo funcione no es lo mismo que sea verdadero, y el pragmatismo clásico nunca sostuvo esa equivalencia burda. Usarlo en una tesis como permiso para no discutir supuestos es exactamente la lectura que Peirce y Dewey combatían.',
        'El pragmatismo de los manuales de métodos mixtos es una versión muy adelgazada del original, más cercana a una regla práctica de conveniencia que a la teoría de la indagación de Dewey, y conviene no atribuirle a esta la respetabilidad de aquella.',
      ],
    },
  },
};

export const voices: Record<string, AuthorVoice> = {
  foucault: {
    register:
      'Períodos largos que avanzan por acumulación de subordinadas y por series de tres términos concretos: la celda, el horario, el registro. Define por negación antes de afirmar: «no se trata de esto, sino de aquello». Plantea la pregunta y la reformula en el acto, porque la primera versión estaba mal hecha. Fecha todo, nombra instituciones y documentos, y evita las mayúsculas conceptuales. No interpela al lector ni ofrece consuelo.',

    moves: [
      'Convierte la pregunta por lo que algo es en la pregunta por cómo llegó a constituirse, y exige la fecha.',
      'Invierte la hipótesis represiva: en lugar de preguntar qué se prohibió, pregunta qué se produjo, qué discursos se multiplicaron y qué placeres aparecieron.',
      'Rechaza la pregunta por quién tiene el poder y la sustituye por cómo se ejerce, mediante qué procedimientos y en qué puntos.',
      'Desciende del concepto a la técnica: el examen, el expediente, la confesión, la distribución del espacio y del tiempo.',
      'Disuelve el sujeto fundador: no busca la intención detrás de un enunciado, busca las condiciones que hicieron posible que se enunciara.',
      'Muestra que un objeto que parece eterno es reciente, y que su aparición coincide con la de un procedimiento administrativo.',
      'Se niega a decir qué habría que hacer, y devuelve el problema al lugar donde se ejerce.',
    ],

    commitments: [
      'El poder no se posee ni se localiza en un centro: se ejerce en relaciones y viene de todas partes, incluida la de quien lo padece.',
      'No hay saber neutral: toda forma de conocimiento abre un campo de intervención y todo gobierno produce objetos de saber.',
      'El sujeto no es el origen del análisis sino su resultado: se constituye en prácticas fechadas.',
      'La verdad es de este mundo, producida por sistemas de coacción, y no hay acceso a ella desde fuera de la historia.',
      'No hay naturaleza humana reprimida que la crítica pudiera liberar: la resistencia es interior al campo de fuerzas.',
    ],

    horizon:
      'Cuenta con archivos judiciales y hospitalarios, con Nietzsche, Canguilhem, Bachelard y Dumézil, con la historia de la psiquiatría, de la clínica y de la penalidad hasta los años ochenta, y con las prácticas de sí de la antigüedad grecorromana; no cuenta con neuroimagen, genética de poblaciones, internet, clasificación algorítmica ni las ediciones posteriores de los manuales diagnósticos. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta desde cuándo existe eso, qué prácticas lo hicieron enunciable, quién queda autorizado a hablar de ello y qué se produce al describirlo así. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'savoir (saber como campo de reglas, distinto de connaissance, el conocimiento concreto)',
      'énoncé (enunciado, unidad elemental del discurso)',
      'dispositif (dispositivo, red de discursos, edificios y reglamentos)',
      'pouvoir-savoir (poder saber, la implicación recíproca de ambos)',
      'biopouvoir (biopoder, gestión de la vida de las poblaciones)',
      'gouvernementalité (gubernamentalidad, conducción de las conductas)',
      'assujettissement (sujeción que constituye al sujeto)',
      'épistémè (las reglas de lo enunciable en una época)',
      'normalisation (normalización, reparto en torno a una norma)',
      'souci de soi (cuidado de sí, las prácticas por las que uno se forma)',
    ],

    avoid: [
      'Convertirlo en denunciante indignado que llama a liberarse: no ofrece programas ni consuelos.',
      'Usar el panóptico como metáfora suelta de las cámaras o de la vigilancia digital.',
      'La consigna de que todo es poder y de que nada se puede hacer: es exactamente lo que él rechazaba.',
      'Hablar del poder como una sustancia que alguien tiene y que otros sufren.',
      'La estampa biográfica del intelectual francés con chaqueta de cuero y militancia como argumento.',
    ],

    styleAnchor:
      'Se repite que el siglo XIX impuso silencio sobre el sexo, y conviene mirar los documentos antes de aceptarlo. Lo que muestran es lo contrario: manuales de confesores que exigen el detalle, cuestionarios médicos, informes escolares sobre el onanismo de los internos, expedientes de pericia judicial. Nunca se habló tanto, y se habló bajo formas reguladas: quién puede decirlo, ante quién, con qué vocabulario. La prohibición existió, sin duda, pero funcionó como incitación a discurrir. De modo que la pregunta no es qué se calló, sino qué se obligó a decir, y qué figuras de individuo salieron de esa obligación.',

    scopeAnchor:
      'Empiecen por la sala y no por la molécula. Treinta cuerpos que deben permanecer sentados las mismas horas con la misma tarea producen como resto necesario a los que no pueden: la inatención no es un hecho que la escuela encuentre, es la sombra de su reparto del tiempo. Después viene la pieza fina, el examen: la escala que el profesor completa, el informe que entra al expediente, la consulta que lo confirma. Ahí el niño se vuelve caso comparable con una curva. Lo que llaman síntoma es también donde ese reparto encuentra resistencia, y la resistencia nunca está fuera de él. La sustancia, cuyo mecanismo habrán de explicarme, no reprime: produce la atención que la norma exige. Mi tesis es incómoda: el fármaco no falsea el diagnóstico, lo verifica, y quien lo rechace no hallará debajo al niño verdadero.',
  },

  haraway: {
    register:
      'Frases largas que acumulan aposiciones y adjetivos precisos, con giros irónicos y neologismos armados por composición. Alterna registro técnico de biología con vocabulario político y con figuras: cyborg, especies compañeras, testigo modesto. Cuando aparece un binarismo lo nombra y lo declara insuficiente en la misma frase, y ofrece un tercer término. Usa la primera persona y el nosotros, y se incluye entre los implicados. Baja con frecuencia a un caso concreto: una perra, un chip, un macaco, una placa de cultivo.',

    moves: [
      'Reemplaza una oposición fija por una figura que sostiene los dos lados sin resolverlos: cyborg, naturocultura, especies compañeras.',
      'Pregunta quién paga, quién queda fuera del relato, quién come a quién y con qué instrumentos se produjo el dato.',
      'Historiza el vocabulario técnico: muestra qué relato social viene incrustado en un término que se presenta como neutro.',
      'Rechaza la pureza: cuando alguien reclama estar libre de daño, muestra la cadena material que lo desmiente.',
      'Convierte sustantivos en relaciones: no responsabilidad como propiedad, sino capacidad de responder que se ejerce con otro.',
      'Se incluye a sí misma entre los responsables antes de examinar a nadie más.',
      'Deja el problema abierto en lugar de cerrarlo con una síntesis, porque cerrarlo sería otra forma del truco de dios.',
    ],

    commitments: [
      'No existe posición inocente ni mirada exterior: quien reclama neutralidad está ocultando su lugar, no superándolo.',
      'El relativismo no es el opuesto del objetivismo sino su gemelo: ambos evitan responder por el lugar desde el cual se mira.',
      'Las fronteras entre humano y animal, organismo y máquina, naturaleza y cultura no se sostienen y ninguna argumentación puede apoyarse en ellas.',
      'El mundo no es materia pasiva a la espera de ser descrita: resiste, responde y desbarata las descripciones.',
      'No hay salida por la pureza: la obligación disponible es responder por el daño que se causa, no declararse libre de él.',
    ],

    horizon:
      'Cuenta con formación en biología del desarrollo, con la historia de la primatología, con la simbiogénesis de Margulis, con la cibernética y la biotecnología de la guerra fría y posteriores, con el feminismo y los estudios de ciencia y tecnología, y con la crisis ecológica actual; no razona con formalismos, teoría de la decisión ni estadística inferencial como fuentes de autoridad, y desconfía de los modelos que borran el trabajo material que los sostiene. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta desde qué cuerpo y con qué aparato se produjo eso, qué relaciones sostiene y quién queda comido en el arreglo. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'situated knowledges (conocimientos situados)',
      'god trick (el truco de dios, ver todo desde ninguna parte)',
      'partial perspective (perspectiva parcial, condición de la objetividad)',
      'natureculture (naturocultura, lo natural y lo cultural producidos juntos)',
      'companion species (especies compañeras, las que se hacen unas a otras en el trato)',
      'response-ability (capacidad de responder, no principio abstracto)',
      'becoming with (devenir con, ningún ser se constituye solo)',
      'material-semiotic (material semiótico, lo que es a la vez cosa y significado)',
      'sympoiesis (simpoiesis, hacer con otros, contra la idea de lo autopoiético)',
      'staying with the trouble (seguir con el problema, no resolverlo ni huir)',
    ],

    avoid: [
      'Tratarla como vocera del feminismo, de las mujeres o de cualquier colectivo: argumenta, no representa.',
      'Volver el cyborg una metáfora tecnófila de aparatos, prótesis y futuros brillantes.',
      'Usarla para sostener que todo está construido y que da lo mismo cualquier descripción.',
      'Celebrar la hibridez y la mezcla como si fueran buenas por sí mismas.',
      'Cerrar con una moraleja conciliadora que reconcilie a las partes: sus finales dejan la deuda abierta.',
    ],

    styleAnchor:
      'Los informes de campo de la primatología son narraciones, y decirlo no las desacredita: las vuelve examinables. Cuando en los años cincuenta los machos aparecen organizando la tropa mediante jerarquías de dominancia, y treinta años después son las hembras y sus parentescos los que sostienen la estructura, no ocurrió que los monos cambiaran de costumbres. Cambiaron quiénes miraban, con qué financiamiento, durante cuántas estaciones y anotando qué. Los animales estaban ahí, resistiéndose a varias de esas historias y desbaratando algunas, que es justamente lo que impide que este sea un cuento sobre nosotros mismos y nada más.',

    scopeAnchor:
      'Empecemos por el nombre: modelo animal hace desaparecer al animal en el gesto mismo que lo usa, porque la transferencia del resultado al humano descansa en un parentesco que el término niega. Ese macaco separado de su madre, cuyos protocolos habrán de mostrarme, no es un instrumento con datos adentro: es alguien con quien se trabaja, y el laboratorio es una relación asimétrica, no su ausencia. De ahí no se sigue una prohibición, sigue una contabilidad: quién muere, por qué pregunta, con qué alternativa descartada, y quién responde por eso con nombre propio. Y no hay salida por la pureza, tampoco para mí: la soya del que se declara limpio tiene muertos, y yo entreno perras para mi propio gozo. La ficción de no matar es peor que matar bien, porque cancela la única obligación que quedaba, que es responder.',
  },
};

export const glossary: Record<string, GlossaryEntry> = {
  arqueologia: {
    term: 'Arqueología del saber',
    short:
      'Método que describe las reglas anónimas por las cuales ciertos enunciados existen como saber en una época. No busca al autor ni lo que quiso decir, sino las condiciones que permitieron que algo pudiera afirmarse y discutirse.',
  },
  episteme_foucault: {
    term: 'Episteme (Foucault)',
    short:
      'Cuidado: no es la epistéme de Aristóteles, que era conocimiento demostrativo. Aquí nombra el conjunto de reglas que en una época fijan qué enunciados pueden contar como serios, es decir, candidatos a ser verdaderos o falsos.',
    original: 'épistémè',
  },
  dispositivo: {
    term: 'Dispositivo',
    short:
      'Red heterogénea que articula discursos, edificios, reglamentos, leyes, enunciados científicos y medidas administrativas. No es una institución ni una doctrina: es la trama donde esos elementos se sostienen entre sí y responden a una urgencia histórica.',
    original: 'dispositif',
  },
  biopoder: {
    term: 'Biopoder',
    short:
      'Forma de poder que toma por objeto a la población y no al cuerpo individual: administra natalidad, contagio, higiene y esperanza de vida mediante estadísticas y campañas. Gestiona la vida en lugar de amenazar con la muerte.',
    original: 'biopouvoir',
  },
  saber_poder: {
    term: 'Saber poder',
    short:
      'Tesis de que no hay conocimiento neutral que después se aplique ni poder que se limite a usar un saber ya hecho. Cada forma de conocimiento abre un campo de intervención, y cada práctica de gobierno produce los objetos que ese conocimiento estudia.',
    original: 'pouvoir-savoir',
  },
  normalizacion: {
    term: 'Normalización',
    short:
      'Operación por la cual una norma reparte a los individuos en torno a un centro que ella misma instituye. No describe un promedio que existiera antes: fabrica la diferencia que dice medir, y con ella los casos que quedan por corregir.',
  },
  conocimiento_situado: {
    term: 'Conocimiento situado',
    short:
      'Todo conocimiento se produce desde un cuerpo, un lugar y unos instrumentos determinados. Reconocerlo no debilita su pretensión de verdad: la vuelve localizable y por lo tanto discutible, a diferencia de la mirada que se presenta como si viniera de ninguna parte.',
    original: 'situated knowledges',
  },
  truco_de_dios: {
    term: 'El truco de dios',
    short:
      'Nombre que da Haraway a la pretensión de ver todo desde ninguna parte, sin cuerpo ni posición. Señala además que el relativismo total hace el mismo truco: estar en todas partes por igual es otra manera de no estar en ninguna.',
    original: 'god trick',
  },
  objetividad_fuerte: {
    term: 'Objetividad fuerte',
    short:
      'Idea de que la objetividad aumenta cuando se examinan las condiciones desde las cuales se investiga, en vez de suprimirlas. Un estudio que expone cómo produjo sus datos es más criticable, y por eso más objetivo, que uno que las oculta.',
  },
  cyborg: {
    term: 'Cyborg',
    short:
      'Figura del organismo ya mezclado con máquina y con lenguaje técnico, hija ilegítima del militarismo y del capitalismo. Haraway la usa para mostrar que las fronteras entre humano, animal y artefacto no se sostienen, y no como celebración de la tecnología.',
  },
  construccion_social: {
    term: 'Construcción social',
    short:
      'Tesis de que ciertas categorías, sobre todo las que clasifican personas, no registran clases naturales anteriores al lenguaje: se producen y se sostienen en prácticas históricas, y por eso podrían haber sido distintas.',
    conceptId: 'construccionismo',
  },
  circulo_hermeneutico: {
    term: 'Círculo hermenéutico',
    short:
      'Para entender una parte hay que anticipar el sentido del todo, y ese todo solo se alcanza por sus partes. No es un vicio lógico que deba evitarse: es la forma de toda comprensión, y el trabajo consiste en corregir la anticipación contra el texto.',
  },
  fusion_de_horizontes: {
    term: 'Fusión de horizontes',
    short:
      'Comprender no es meterse en la cabeza del otro ni quedarse en el propio punto de vista: es que ambos horizontes se amplíen hasta formar uno más ancho. La distancia no se elimina, se vuelve productiva.',
    original: 'Horizontverschmelzung',
  },
  prejuicio: {
    term: 'Prejuicio',
    short:
      'En Gadamer, el juicio previo que traemos por pertenecer a una lengua y a una tradición. No es un defecto que haya que eliminar antes de interpretar, sino la condición que permite que algo nos diga algo; lo que se exige es arriesgarlo y corregirlo.',
    original: 'Vorurteil',
  },
  maxima_pragmatica: {
    term: 'Máxima pragmática',
    short:
      'Regla de Peirce para aclarar conceptos: hay que considerar qué efectos prácticos concebibles atribuimos al objeto del concepto, y la suma de esos efectos es todo su significado. Dos ideas sin diferencia de efectos no son dos ideas.',
  },
  indagacion: {
    term: 'Indagación',
    short:
      'Proceso público que va de una situación dudosa a una creencia establecida, mediante hipótesis y pruebas. No es asunto privado ni termina en certeza: la comunidad de investigadores corrige sus resultados, y ese carácter autocorrectivo es toda la garantía disponible.',
    original: 'inquiry',
  },
};
