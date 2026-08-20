import type {
  ConceptExposition,
  AuthorVoice,
  GlossaryEntry,
} from '@/types/philosophical';

// Biología del conocer y metodología: Humberto Maturana (1928) y Francisco Varela (1946),
// la corriente enactivista y las tres familias de métodos de investigación.

export const expositions: Record<string, ConceptExposition> = {
  maturana: {
    thesis:
      'Los seres vivos son sistemas que producen continuamente los componentes que los producen: su organización es la [[autopoiesis]], y por eso su operar no consiste en captar un medio sino en conservar su propia coherencia. De ahí que vivir sea conocer, y que todo lo dicho sea dicho por un observador.',

    problem:
      'La biología definía lo vivo enumerando propiedades (metabolismo, reproducción, irritabilidad) sin decir qué las reúne en una unidad, y la neurofisiología describía el sistema nervioso como un aparato que recoge información del medio y la procesa. Ambas cosas suponen resuelto justamente lo que había que explicar: que exista un mundo con rasgos ya recortados, disponible para ser captado. Maturana necesita explicar la cognición sin conceder que algo entre desde afuera.',

    keyNotions: [
      {
        term: 'Autopoiesis: la organización de lo vivo',
        gloss:
          'Un sistema es autopoiético si es una red de procesos que produce los componentes que producen esa misma red y que especifican sus límites. La noción separa organización, que es lo que hay que conservar para seguir siendo esa clase de sistema, de estructura, que son los componentes concretos y que puede cambiar todo el tiempo.',
      },
      {
        term: 'Determinismo estructural',
        gloss:
          'Todo lo que ocurre en un sistema está determinado por su estructura en ese instante. Una perturbación del medio gatilla un cambio de estado, pero no lo especifica: el agente externo no instruye. De ahí que no existan interacciones instructivas y que la misma indicación produzca cambios distintos en dos personas sin que eso sea ruido.',
      },
      {
        term: 'Clausura operacional del sistema nervioso',
        gloss:
          'El sistema nervioso es una red cerrada de cambios de relaciones de actividad entre neuronas: toda actividad conduce a actividad, y no hay entrada ni salida. Por eso la información no entra, no porque esté mal codificada, sino porque no hay un lugar donde entrar. Lo que el observador llama estímulo es una perturbación, no un mensaje.',
      },
      {
        term: 'Acoplamiento estructural y deriva natural',
        gloss:
          'Organismo y medio cambian de manera congruente en una historia de perturbaciones recíprocas que dura mientras se conserva la organización y termina cuando no se conserva. La conducta adecuada no se explica por haber captado bien el mundo, sino por esa congruencia histórica, que no optimiza nada: solo conserva o desaparece.',
      },
      {
        term: 'La objetividad entre paréntesis',
        gloss:
          'No niega que haya algo; suspende el uso de la realidad independiente como argumento para exigir obediencia. Puesta entre paréntesis, la validación de una afirmación pasa a depender de criterios explícitos dentro de un dominio de coherencias, y varios dominios pueden ser igualmente legítimos sin que ninguno mande sobre los otros.',
      },
    ],

    development: `La pregunta de la que Maturana se hace cargo no es cómo el organismo obtiene información del medio, sino por qué esa pregunta parecía obligatoria. Trabajando en la retina de la rana y luego en la visión de colores, buscó la correspondencia entre la composición espectral de la luz y el nombre del color, y no la encontró; lo que había era una correlación entre estados de actividad del sistema nervioso y conductas discriminatorias. La biología heredada definía lo vivo por una lista de propiedades y trataba al sistema nervioso como aparato de captación: ambas cosas daban por dado el mundo que debían explicar.

El giro consiste en definir lo vivo por su organización. Un sistema es autopoiético si es una red de procesos que produce los componentes que producen esa red. De ahí siguen dos tesis duras. La primera es el **[[determinismo_estructural|determinismo estructural]]**: lo que ocurre en el sistema está determinado por su estructura, de modo que el medio gatilla un cambio de estado pero no lo especifica, y no existen interacciones instructivas. La segunda es la **[[clausura_operacional|clausura operacional]]**: el sistema nervioso es una red cerrada en la que toda actividad conduce a actividad. La información no entra porque no hay dónde entrar.

El precio es que la representación queda sin trabajo. Si nada externo instruye al sistema, la conducta efectiva no se explica porque el organismo haya captado bien su medio, sino por el **[[acoplamiento_estructural|acoplamiento estructural]]**: una historia de perturbaciones recíprocas en la que organismo y medio cambian congruentemente mientras la organización se conserva. Eso es la **[[deriva_natural|deriva natural]]**, donde no hay optimización ni progreso, solo conservación. Y de ahí la consecuencia epistemológica que Maturana repite sin variar: todo lo dicho es dicho por un observador. La correspondencia entre organismo y mundo es una relación que el observador traza en su propio dominio de descripciones, y confundir ese dominio con el del operar del sistema es el error central de la ciencia cognitiva.

Eso conduce a la **[[objetividad_entre_parentesis|objetividad entre paréntesis]]**, que no niega que haya algo sino que retira la apelación a una realidad independiente como argumento para exigir obediencia. Quedan dominios de coherencias con criterios de validación explícitos, y varios pueden ser legítimos a la vez. Por esa vía alimentó la cibernética de segundo orden, el constructivismo radical, los sistemas sociales de Luhmann y la terapia familiar, que dejó de concebir la intervención como transmisión de información.

Para la psicología la consecuencia es incómoda y utilizable. Si no hay interacciones instructivas, ninguna intervención produce un efecto: gatilla un cambio que la estructura de quien la recibe especifica, y la variabilidad de respuesta deja de ser error de medida y pasa a ser el fenómeno. En investigación obliga a preguntar quién hizo la distinción que llamamos dato, porque el estímulo no lleva información adherida sino la que el diseño le atribuyó. Y cierra una salida cómoda: sostener un resultado diciendo que así es la realidad deja de ser un argumento.`,

    objections: [
      {
        from: 'Varela',
        fromId: 'varela',
        claim:
          'La clausura explica que el sistema conserve su organización, pero no explica por qué para ese sistema algo cuenta como bueno o como malo. Sin una teoría de cómo surge la significación, la autopoiesis describe un mecanismo indiferente y deja fuera lo que había que explicar.',
      },
      {
        from: 'La ciencia cognitiva computacional',
        claim:
          'Negar que la información entre es una estipulación terminológica, no un hallazgo. La neurociencia predice respuestas usando codificación, canales y modelos internos; renombrar todo eso como correlaciones internas no aumenta el poder explicativo y renuncia a explicar la especificidad de la conducta.',
      },
      {
        from: 'Haraway',
        fromId: 'haraway',
        claim:
          'El observador de esta biología es una figura única y abstracta, sin sexo, sin posición ni historia. Sustituir un universal falso por un sujeto biológico igualmente genérico no responde la pregunta decisiva: quién observa, desde dónde y con qué intereses inscritos en el aparato.',
      },
    ],

    works: [
      {
        title: 'What the Frog Eye Tells the Frog Brain',
        year: 1959,
        note: 'Con Lettvin, McCulloch y Pitts: la retina no transmite una imagen, entrega detecciones ya organizadas por su propia estructura.',
      },
      {
        title: 'De máquinas y seres vivos. Autopoiesis: la organización de lo vivo',
        year: 1973,
        note: 'Con Varela. La definición de lo vivo por su organización y la distinción entre organización y estructura.',
      },
      {
        title: 'El árbol del conocimiento',
        year: 1984,
        note: 'Con Varela. Exposición accesible del camino que va de la célula al lenguaje y a la convivencia social.',
      },
      {
        title: 'Emociones y lenguaje en educación y política',
        year: 1990,
        note: 'Las emociones como disposiciones corporales que especifican el dominio de acciones posible, incluida la argumentación racional.',
      },
      {
        title: 'La objetividad: un argumento para obligar',
        year: 1997,
        note: 'El paso de la objetividad sin paréntesis a la objetividad entre paréntesis y sus consecuencias para la convivencia.',
      },
    ],

    psychology: {
      claim:
        'Sostuvo que el sistema nervioso no recibe información del medio sino que opera con clausura sobre sus propios estados, y que en consecuencia nadie instruye a nadie: solo se gatillan cambios que la estructura del otro determina. Esa tesis, que en biología es técnica, reorganizó la psicoterapia sistémica y la educación en Chile y en buena parte de América Latina.',
      lineages: [
        {
          name: 'Maturana y Varela, De máquinas y seres vivos',
          year: 1973,
          what: 'Formulan la autopoiesis: un ser vivo es una red de procesos que produce los componentes que producen la red. La identidad del sistema está en su organización y no en sus materiales.',
        },
        {
          name: 'El árbol del conocimiento',
          year: 1984,
          what: 'Lleva la biología del conocer a un público amplio con la fórmula todo lo dicho es dicho por un observador, y con la idea de que vivir es conocer. Es el texto por el que la mayoría de los psicólogos chilenos lo lee.',
        },
        {
          name: 'La terapia sistémica de segunda cibernética',
          year: 1985,
          what: 'El terapeuta deja de ser un observador externo del sistema familiar y pasa a formar parte del sistema que observa. Cambia qué se considera una intervención y quién es responsable de sus efectos.',
        },
        {
          name: 'Maturana y Verden-Zöller, Amor y juego',
          year: 1993,
          what: 'Definen el amor como la conducta que constituye al otro como legítimo otro en la convivencia, y lo tratan como fenómeno biológico y no moral. Es la base de su influencia en educación y en primera infancia.',
        },
      ],
      development: `El punto de partida es contraintuitivo y hay que tomarlo en serio antes de discutirlo. Si el sistema nervioso es operacionalmente cerrado, no distingue entre una perturbación que viene de afuera y una que se origina en su propia actividad; lo que hay son cambios de estado determinados por su estructura, no representaciones de un mundo externo. De ahí se sigue que el medio no instruye al organismo, solo gatilla en él lo que su estructura permite, y que dos personas expuestas a lo mismo no reciben lo mismo.

Para la psicología esto cae directamente sobre la noción de intervención. Si nadie puede determinar lo que le pasa a otro, entonces enseñar, tratar y persuadir no son transmisiones sino acoplamientos: uno perturba y el otro cambia de acuerdo con su propia estructura. La terapia sistémica sacó de ahí una consecuencia práctica concreta, que fue abandonar la pretensión de corregir a la familia desde afuera y asumir que el terapeuta, al observar, ya está participando. Eso trajo una ganancia real en humildad clínica y una dificultad igual de real para evaluar resultados, porque un marco que niega la instrucción tiene problemas para decir qué produjo la mejoría.

Su recepción chilena merece mención aparte porque es un dato disciplinar. La biología del conocer entró a las escuelas de psicología, a la formación de profesores y al discurso público con una intensidad que no tiene equivalente en otros países, y en ese trayecto se ablandó: pasó de ser una tesis sobre clausura operacional a ser un repertorio de frases sobre el respeto y la aceptación del otro. Vale la pena leer el original para ver cuánto más duro es.

Lo que le queda a quien investiga es una incomodidad productiva. Si todo lo dicho es dicho por un observador, entonces el investigador no está fuera de lo que describe, y la objetividad entendida como acceso sin observador no es una meta alcanzable sino una descripción incorrecta de lo que ocurre. Maturana propone ponerla entre paréntesis: no negarla, sino explicitar el dominio de observación desde el cual una afirmación es válida. Eso es exigible y verificable en un informe de investigación.`,
      today: [
        'La terapia sistémica y las prácticas colaborativas con familias tienen presencia fuerte en la formación clínica chilena, y su encuadre no directivo viene de aquí.',
        'La educación emocional y los programas de convivencia escolar usan su vocabulario de aceptación del otro, casi siempre sin el aparato biológico que lo sostenía.',
        'La discusión sobre si el cerebro representa el mundo o construye estados propios sigue viva entre el enfoque representacional clásico y las teorías enactivas y de inferencia activa.',
      ],
      caveats: [
        'Su circulación popular lo convirtió en un autor de frases sobre el amor y el respeto, lo que borra que su tesis central es una afirmación técnica sobre organización de sistemas vivos, discutible con argumentos de biología.',
        'De la clausura operacional no se sigue que cada uno viva en su propia realidad y que todo valga igual. Ese salto relativista es frecuente en la recepción psicológica y no está en el texto, que insiste en el acoplamiento estructural y en el dominio consensual.',
      ],
    },
  },

  varela: {
    thesis:
      'La cognición no es representar un mundo dado, sino [[enaccion|hacer emerger un mundo]] con sentido desde la historia de acoplamiento de un sistema autónomo: el organismo no recibe significaciones, las produce. Y como la experiencia en primera persona es el fenómeno que hay que explicar, ninguna neurociencia se completa sin métodos disciplinados para describirla.',

    problem:
      'El cognitivismo ponía el significado en un mundo ya recortado y hacía de la mente un procesador de representaciones, con lo cual daba por resuelta la pregunta por el origen del sentido. Pero la [[clausura_operacional|clausura operacional]] tampoco bastaba: un sistema meramente cerrado sería indiferente, y sin embargo el organismo más simple se aleja de lo que lo destruye. Varela necesita explicar cómo surge la significación sin reintroducir un mundo dado, y necesita un método que ponga la descripción de la experiencia en relación de restricción mutua con la medida neural.',

    keyNotions: [
      {
        term: 'Autonomía e identidad precaria',
        gloss:
          'Un sistema autónomo tiene una identidad que no está garantizada: se produce a cada instante y puede dejar de producirse. Esa precariedad es lo que hace que sus encuentros no sean neutros y que haya, para él, cosas que le convienen y cosas que lo amenazan.',
      },
      {
        term: 'Sense-making: producción de significación',
        gloss:
          'Como la identidad está en juego, el organismo establece una perspectiva propia sobre lo que le ocurre: el entorno deja de ser físico y neutro y se vuelve un mundo con valencia. El sentido no está en las cosas ni se inventa por convención, se genera en la actividad de conservar una identidad frágil.',
      },
      {
        term: 'Neurofenomenología',
        gloss:
          'Programa metodológico que hace circular dos fuentes en vez de reducir una a la otra: descripciones de la experiencia producidas con entrenamiento y medidas de dinámica neural que se restringen recíprocamente. No promete resolver el problema difícil por definición; propone un procedimiento que produce datos que ninguna de las dos fuentes daba sola.',
      },
      {
        term: 'Métodos en primera persona',
        gloss:
          'El reporte espontáneo es pobre, pero la descripción es entrenable: la suspensión del juicio natural de la fenomenología, la práctica atencional budista y la entrevista de explicitación aumentan la finura y la estabilidad de lo que alguien puede decir sobre su propia vivencia. Sin ese entrenamiento no hay datos en primera persona, hay opiniones.',
      },
      {
        term: 'Sincronía de gran escala y el sí mismo sin centro',
        gloss:
          'La integración cognitiva ocurre cuando poblaciones neuronales distantes sincronizan sus fases durante fracciones de segundo y luego se disuelven. Si eso es todo lo que hay, no existe una sede donde alguien esté: el sí mismo es un proceso emergente que funciona como sujeto sin ser una cosa.',
      },
    ],

    development: `Varela firma con Maturana la definición de lo vivo y se separa de ella en un punto preciso. La clausura operacional explica que un sistema conserve su organización, pero no explica por qué para ese sistema algo cuenta como bueno o como malo. Un sistema meramente cerrado sería indiferente, y sin embargo hasta la bacteria que remonta un gradiente se comporta como si algo le importara. El cognitivismo tampoco servía, porque ponía la significación en un mundo previamente recortado y así daba por resuelto el problema.

Su giro consiste en agregar precariedad a la clausura. La identidad de un sistema autopoiético no está garantizada: se produce a cada instante y puede dejar de producirse. Por eso sus encuentros no son neutros, y de ahí surge el **[[sense_making|sense-making]]**, la producción de una perspectiva propia sobre lo que le ocurre. Eso es enacción: el mundo no está dado ni es inventado, se hace emerger en la historia del acoplamiento. La autonomía no es aislamiento, es la condición de que haya alguien para quien las cosas importen.

El segundo movimiento es metodológico y es su aporte más original. Si la experiencia en primera persona es el fenómeno a explicar, no puede tratarse como un dato blando que hay que traducir a una escala para que valga. La **[[neurofenomenologia|neurofenomenología]]** propone un círculo de restricciones recíprocas: por un lado descripciones producidas con entrenamiento, sea la suspensión fenomenológica del juicio, sea la práctica atencional budista, sea la entrevista de explicitación; por otro, medidas de dinámica neural. En su experimento de percepción de profundidad, los reportes sobre el estado de preparación previo al estímulo sirvieron para agrupar los ensayos, y solo entonces aparecieron patrones de sincronía de fase que el promedio ciego había borrado. El reporte no ilustra el dato: lo particiona.

De ahí su tesis sobre el sí mismo. Si la cognición ocurre en ensambles neuronales transitorios que se sincronizan y se deshacen en fracciones de segundo, no hay un centro donde alguien esté: hay un proceso emergente que opera como sujeto sin ser una cosa. Esa conclusión lo llevó a la tradición madhyamaka y a la **[[sunyata|vacuidad]]**, que niega existencia intrínseca sin negar el fenómeno, y a los diálogos con el Dalái Lama. De aquí salen la microfenomenología, la ciencia contemplativa y buena parte del programa 4E.

Para la psicología esto se traduce en decisiones de diseño. Un reporte obtenido con una pregunta abierta al final de la sesión y otro obtenido con entrevista guiada sobre un episodio singular no son el mismo dato, y la diferencia se mide en la varianza que permiten explicar. Tratar la vivencia como variable de agrupamiento, y no como adorno cualitativo del resultado, es lo que separa un estudio integrado de una yuxtaposición. Y el **[[cuerpo_vivido|cuerpo vivido]]** deja de ser un tema de la fenomenología para volverse una restricción empírica sobre qué ventana temporal tiene sentido promediar.`,

    objections: [
      {
        from: 'Dennett',
        claim:
          'El acceso privilegiado a la propia experiencia es una ilusión teórica: los reportes son textos que hay que tratar como datos a interpretar, no como observaciones. Entrenar a los sujetos en una fenomenología no mejora el acceso, los enseña a describir según la teoría que se quiere confirmar.',
      },
      {
        from: 'Maturana',
        fromId: 'maturana',
        claim:
          'Hablar de significación y de valor en el operar del organismo reintroduce por la ventana lo que la clausura había expulsado. Sentido y mundo son distinciones del observador, y atribuirlos a la dinámica del sistema es volver a una relación semántica entre sistema y medio.',
      },
      {
        from: 'Psicometría y método experimental',
        fromId: 'met_cuantitativo',
        claim:
          'Particionar los ensayos según reportes obtenidos después del hecho, con muestras pequeñas y sin criterios preespecificados, es una fuente clásica de resultados irreproducibles. La finura descriptiva no compensa la ausencia de un procedimiento que pueda fallar de antemano.',
      },
    ],

    works: [
      {
        title: 'Principles of Biological Autonomy',
        year: 1979,
        note: 'La formalización de la autonomía y de la clausura operacional más allá del caso celular.',
      },
      {
        title: 'De cuerpo presente',
        year: 1991,
        note: 'Con Thompson y Rosch. El programa enactivo y el primer cruce sistemático entre ciencia cognitiva, fenomenología y análisis budista del yo.',
      },
      {
        title: 'Ética y acción',
        year: 1992,
        note: 'La acción ética como habilidad encarnada e inmediata antes que como deliberación sobre reglas.',
      },
      {
        title: 'Neurophenomenology: A Methodological Remedy for the Hard Problem',
        year: 1996,
        note: 'La propuesta del círculo de restricciones recíprocas entre descripción de la experiencia y medida neural.',
      },
      {
        title: 'Guiding the Study of Brain Dynamics by Using First-Person Data',
        year: 2002,
        note: 'Con Lutz y otros. El experimento donde los reportes de preparación agrupan los ensayos y revelan patrones de sincronía invisibles al promedio.',
      },
    ],

    psychology: {
      claim:
        'Propuso que el estudio de la mente necesita datos en primera persona recogidos con método, articulados con la medición en tercera persona, y llamó neurofenomenología a ese programa. Es la propuesta más seria que existe para sacar a la experiencia de la categoría de dato blando sin reducirla a un puntaje.',
      lineages: [
        {
          name: 'Varela, Thompson y Rosch, De cuerpo presente',
          year: 1991,
          what: 'Fundan el enactivismo: la cognición no es representación de un mundo previo sino la actividad de un organismo que hace emerger un mundo. Introducen además la tradición budista como interlocutora metodológica y no decorativa.',
        },
        {
          name: 'Neurophenomenology, a methodological remedy for the hard problem',
          year: 1996,
          what: 'Propone el círculo virtuoso: entrenar el reporte en primera persona para que genere categorías que guíen el análisis de los registros fisiológicos, y que esos registros a su vez refinen el reporte.',
        },
        {
          name: 'Lutz, Lachaux, Martinerie y Varela',
          year: 2002,
          what: 'Ponen el programa a prueba: clasifican ensayos según el reporte de los propios participantes sobre su estado de preparación y encuentran patrones de sincronía neuronal que el promedio ciego a esos reportes ocultaba.',
        },
        {
          name: 'Claire Petitmengin, microfenomenología',
          year: 2006,
          what: 'Desarrolla la técnica de entrevista que el programa necesitaba, con procedimientos para llevar al participante al detalle de un episodio vivido y para evaluar la calidad de ese acceso.',
        },
      ],
      development: `El problema que Varela ataca es viejo y la psicología lo había resuelto por decreto: la experiencia es privada, por lo tanto no es dato, por lo tanto se la reemplaza por conducta o por señal fisiológica. Su objeción no es sentimental sino técnica. Cuando se promedian cientos de ensayos de un experimento electrofisiológico se está suponiendo que el sujeto estaba en el mismo estado en todos ellos, y eso es falso: a veces estaba atento, a veces distraído, a veces anticipando. Esa variabilidad se trata como ruido y se elimina, cuando podría ser información.

El experimento de 2002 es la demostración de que la alternativa funciona. En lugar de promediar ciego, entrenaron a los participantes para que informaran, ensayo por ensayo, en qué estado de preparación se encontraban, y usaron esos reportes para agrupar los registros. Los patrones de sincronía que aparecieron dentro de cada grupo eran estables y quedaban invisibles en el promedio general. El reporte en primera persona no fue un adorno interpretativo: fue la variable que hizo interpretable el dato fisiológico.

Lo que el programa exige es lo que lo hace difícil. No sirve preguntarle a alguien qué sintió, porque la respuesta espontánea es una opinión reconstruida. Hace falta una técnica de entrevista que lleve al participante al episodio concreto, que evite las generalidades y que permita evaluar si el acceso fue bueno, y hace falta entrenamiento por ambas partes. Esa exigencia explica que la neurofenomenología tenga menos estudios de los que su prestigio sugiere: es cara y lenta.

Para un estudiante que discute métodos, este es el mejor contraejemplo disponible frente a la idea de que rigor y subjetividad se oponen. Aquí la primera persona no relaja el control, lo aumenta, porque obliga a especificar el estado del sujeto en lugar de suponerlo constante. Y deja una pregunta incómoda para cualquier diseño experimental: qué se está tratando como ruido y con qué derecho.`,
      today: [
        'La investigación sobre meditación, dolor crónico y experiencia en psicosis usa entrevistas microfenomenológicas junto a medidas fisiológicas, que es la aplicación directa del programa.',
        'La discusión sobre terapias asistidas con psicodélicos enfrenta exactamente su problema: qué se mide cuando se mide un efecto, si escalas de síntomas o la transformación de la experiencia que los pacientes reportan.',
        'La crítica al promedio como operación por defecto reaparece en el análisis de datos intensivos longitudinales y en los diseños de caso único con muchas medidas.',
      ],
      caveats: [
        'Neurofenomenología no significa poner un cuestionario de experiencia junto a un registro cerebral. Sin entrenamiento del reporte y sin que las categorías de la primera persona guíen el análisis de la tercera, el círculo virtuoso no ocurre y solo hay dos conjuntos de datos puestos uno al lado del otro.',
        'Su cercanía con el budismo se cita como si fuera una afinidad espiritual, cuando lo que a él le interesaba era una tradición con métodos entrenados de observación de la experiencia, es decir, un recurso metodológico.',
      ],
    },
  },

  enactivismo: {
    thesis:
      'La mente no es un programa que corre en el cerebro y representa un mundo previo: es la actividad de un cuerpo vivo acoplado a un entorno, y sus operaciones se reparten entre el organismo, el ambiente y los artefactos. La [[cognicion_encarnada|cognición encarnada]] no agrega contexto a la explicación cognitiva: cambia cuál es la unidad que hay que explicar.',

    problem:
      'El cognitivismo entendía la mente como manipulación de símbolos según reglas, con la percepción entregando representaciones al inicio y la acción ejecutando órdenes al final. Ese modelo chocó con dos problemas que no eran de ingeniería: cómo decidir qué es relevante actualizar sin revisar todo lo que se sabe, y de dónde saca significado un símbolo definido solo por sus relaciones con otros símbolos. El conexionismo alivió el primero sin tocar el segundo, porque siguió suponiendo un mundo con rasgos ya recortados esperando ser recogidos.',

    keyNotions: [
      {
        term: 'Las cuatro E',
        gloss:
          'Encarnada: la morfología y las capacidades sensoriomotoras determinan qué distinciones son posibles. Embebida: el organismo descarga trabajo en la estructura del ambiente. Enactiva: el mundo se hace emerger en la actividad de un sistema autónomo. Extendida: si un artefacto cumple la función de un proceso mental, forma parte de él.',
      },
      {
        term: 'Crítica del modelo sándwich',
        gloss:
          'La secuencia percibir, procesar y actuar supone que la acción viene después del conocimiento. El enactivismo la invierte: percibir es una actividad exploratoria guiada por lo que el cuerpo puede hacer, de modo que las regularidades entre movimiento y cambio sensorial no son un insumo de la percepción sino su contenido.',
      },
      {
        term: 'Autonomía frente a funcionalismo',
        gloss:
          'La versión extendida acepta representaciones y solo las deja salir del cráneo; la versión autonomista rechaza la representación y exige que el sistema tenga una identidad precaria que conservar. Un cuaderno no tiene nada en juego, y por eso las cuatro E nombran una familia con una disputa interna sobre si constituye la mente la función o la vida.',
      },
      {
        term: 'La deuda con Merleau-Ponty',
        gloss:
          'De la fenomenología de la percepción vienen el cuerpo como sujeto y no como objeto entre objetos, la intencionalidad motriz que precede a todo juicio y el esquema corporal. La tesis heredada es que el mundo percibido ya está organizado por lo que quien percibe puede hacer, antes de cualquier representación.',
      },
      {
        term: 'Cognición social participativa',
        gloss:
          'Entender a otro no consiste en simular su mente ni en inferir sus estados desde su conducta: en la interacción se genera una dinámica propia, con su ritmo y sus rupturas, que ninguno de los dos participantes controla y que hace buena parte del trabajo que se atribuía a la mentalización individual.',
      },
    ],

    development: `El enactivismo se hace cargo del agotamiento de un programa que parecía definitivo. El cognitivismo entendía la mente como manipulación de símbolos según reglas, con la percepción entregando representaciones al comienzo y la acción ejecutando órdenes al final. Ese modelo tropezó con dos obstáculos que no eran de implementación: el problema del marco, cómo decide un sistema qué actualizar sin revisar todo lo que sabe, y el anclaje del símbolo, de dónde saca significado un signo definido solo por sus relaciones con otros signos. El conexionismo hizo más flexible el reconocimiento sin tocar el supuesto de fondo, porque el mundo seguía dado de antemano.

El giro consiste en cambiar la unidad de análisis: no el cerebro, sino el sistema organismo, cuerpo y entorno en su historia de acoplamiento. Bajo esa idea se agrupan cuatro tesis que conviene no confundir. Encarnada sostiene que la forma del cuerpo y sus capacidades sensoriomotoras determinan qué distinciones son posibles, de modo que un ojo compuesto no es un ojo deficiente. Embebida sostiene que buena parte de lo que parecía cómputo interno es explotación de regularidades del ambiente. Enactiva sostiene que no hay mundo previo que representar, sino un mundo que se hace emerger; **[[enaccion|enacción]]** nombra ese proceso. Extendida sostiene que si un cuaderno cumple la función de la memoria, entonces la memoria incluye el cuaderno.

Las cuatro no forman un bloque, y la tensión es instructiva. La **[[mente_extendida|mente extendida]]** de Clark y Chalmers es funcionalista: conserva las representaciones y solo las deja salir del cráneo. El enactivismo autonomista de Varela, Thompson y Di Paolo rechaza la representación y hace del **[[sense_making|sense-making]]** una propiedad de sistemas vivos con una identidad frágil que sostener, cosa que ningún cuaderno tiene. La etiqueta 4E cubre entonces una familia dividida sobre si lo que constituye la mente es una función o una forma de vida.

La deuda con Merleau-Ponty es explícita y no ornamental. De él vienen el **[[cuerpo_vivido|cuerpo vivido]]** como sujeto de la percepción, la **[[intencionalidad|intencionalidad motriz]]** que antecede a todo juicio y la idea de que lo percibido está organizado por las capacidades de acción de quien percibe. De ahí salen las contingencias sensoriomotoras, la robótica situada de Brooks, los modelos dinámicos del desarrollo y la discusión actual con el procesamiento predictivo, que devuelve modelos internos al centro.

Para la psicología esto reordena el diseño antes que la teoría. Si la cognición se constituye en el acoplamiento, evaluar a alguien solo frente a una pantalla no mide una capacidad limpia de contexto: mide el rendimiento de un sistema al que se le quitaron sus soportes habituales, y ese resultado no se transfiere sin argumento. El error A no B en lactantes se explicó mejor por la historia de alcances del brazo que por una creencia equivocada sobre el objeto. Y manipular la postura, el instrumento o la disponibilidad del entorno deja de ser control de variables molestas y pasa a ser manipulación de la variable independiente.`,

    objections: [
      {
        from: 'Adams y Aizawa',
        claim:
          'Del hecho de que un proceso esté acoplado causalmente al entorno no se sigue que el entorno lo constituya. Confundir acoplamiento con constitución permitiría decir que la digestión incluye al agricultor, y borra la diferencia entre lo que hace un sistema y aquello con lo que interactúa.',
      },
      {
        from: 'Procesamiento predictivo',
        claim:
          'La representación vuelve por otra puerta: el cerebro genera modelos internos y minimiza el error de predicción, lo que explica la anticipación, la ilusión y la acción sin abandonar el cuerpo. Rechazar toda representación deja al enactivismo sin recursos para explicar lo que ocurre en ausencia de estímulo.',
      },
      {
        from: 'Haraway',
        fromId: 'haraway',
        claim:
          'El cuerpo que aparece en este programa es un cuerpo biológico genérico, sin sexo, sin raza y sin historia. Hablar de corporalidad mientras se ignora que el cuerpo también es producido socialmente convierte una categoría crítica en una naturalización más fina.',
      },
    ],

    works: [
      {
        title: 'Fenomenología de la percepción',
        year: 1945,
        note: 'Merleau-Ponty: el cuerpo como sujeto de la percepción, la intencionalidad motriz y el esquema corporal.',
      },
      {
        title: 'De cuerpo presente',
        year: 1991,
        note: 'Varela, Thompson y Rosch: el texto fundador del programa enactivo y de la alianza con la fenomenología.',
      },
      {
        title: 'The Extended Mind',
        year: 1998,
        note: 'Clark y Chalmers: el principio de paridad y el caso de Otto y su libreta.',
      },
      {
        title: 'A Sensorimotor Account of Vision and Visual Consciousness',
        year: 2001,
        note: "O'Regan y Noë: ver es dominar las leyes que ligan el movimiento propio con el cambio en la estimulación.",
      },
      {
        title: 'Mind in Life',
        year: 2007,
        note: 'Thompson: la continuidad entre vida y mente, y el argumento de que la significación exige un sistema autónomo.',
      },
    ],

    psychology: {
      claim:
        'Sostiene que la cognición no consiste en construir representaciones de un mundo dado sino en la actividad de un cuerpo que hace emerger un mundo de significados a partir de lo que le importa para seguir vivo. Es la alternativa más articulada al cognitivismo clásico y la que más ha cambiado el diseño experimental en percepción y desarrollo.',
      lineages: [
        {
          name: 'James Gibson, El enfoque ecológico de la percepción visual',
          year: 1979,
          what: 'Introduce las affordances: lo que se percibe no son formas y colores que después se interpretan, sino posibilidades de acción relativas a un cuerpo concreto. Antecedente directo aunque anterior al término.',
        },
        {
          name: 'Varela, Thompson y Rosch, De cuerpo presente',
          year: 1991,
          what: 'Acuñan enacción y articulan biología, fenomenología y ciencia cognitiva en un programa único, con la crítica al representacionalismo como eje.',
        },
        {
          name: 'Andy Clark y David Chalmers, La mente extendida',
          year: 1998,
          what: 'Argumentan que los procesos cognitivos pueden incluir recursos externos al cráneo cuando cumplen el papel funcional adecuado, lo que abre la discusión sobre dónde termina el sistema que se estudia.',
        },
        {
          name: 'Esther Thelen y Linda Smith, sistemas dinámicos en el desarrollo',
          year: 1994,
          what: 'Explican hitos del desarrollo motor y cognitivo sin recurrir a programas internos, mostrando que la conducta emerge de la interacción entre cuerpo, tarea y entorno.',
        },
      ],
      development: `El cognitivismo que la psicología adoptó en los años sesenta describe la mente como un sistema que recibe entradas, las representa y opera sobre esas representaciones. El enactivismo discute la primera premisa. Un organismo no encuentra un mundo neutral que después interpreta: encuentra un entorno ya organizado en términos de lo que le sirve, lo que lo amenaza y lo que puede hacer, y esa organización depende de qué cuerpo tiene y de qué necesita para conservarse. La silla no se percibe primero como forma y después como sentable.

La consecuencia experimental es más concreta de lo que la formulación sugiere. Si la percepción depende de la acción, entonces estudiarla con un sujeto inmóvil mirando una pantalla es estudiar un caso especial y no el caso general. De ahí vienen los diseños con movimiento libre, con manipulación de objetos y con registro en contexto, y de ahí viene también la crítica al laboratorio como escenario que produce el fenómeno que después atribuye al organismo.

En desarrollo el aporte es todavía más claro. Thelen y Smith mostraron que hitos que se explicaban por la maduración de un programa interno se entienden mejor como estados estables que emergen de la relación entre el peso del cuerpo, la fuerza disponible y la tarea, y que cambian cuando se cambia cualquiera de esos factores. El famoso error del bebé que sigue buscando un objeto donde lo encontró antes se reprodujo y se hizo desaparecer manipulando la postura, lo que es un resultado difícil de explicar con una teoría de estadios cognitivos.

Queda una tensión que la corriente no resolvió y que conviene no esconder. Hay tareas cognitivas donde la explicación representacional funciona muy bien, como el razonamiento simbólico o la memoria de trabajo con material verbal, y las versiones más radicales del enactivismo no ofrecen una alternativa igual de precisa. La versión moderada, que reserva la representación para los casos que la exigen y explica el resto por acoplamiento, es la que hoy está produciendo investigación.`,
      today: [
        'Los diseños con movimiento libre, realidad virtual y registro en contexto natural desplazan al sujeto inmóvil frente a la pantalla en investigación en percepción y atención.',
        'Los modelos de sistemas dinámicos se usan en psicología del desarrollo y en psicopatología para describir transiciones y estados estables sin postular programas internos.',
        'La cognición corporizada sostiene intervenciones en rehabilitación y en trastornos alimentarios, donde el objetivo es la relación entre el cuerpo y el entorno y no una creencia por corregir.',
      ],
      caveats: [
        'Corporizado se usa a veces como sinónimo de que el cuerpo influye en la mente, lo que es trivial y no es la tesis. La afirmación fuerte es que el vehículo del proceso cognitivo incluye al cuerpo y al entorno, y esa sí es discutible.',
        'La tesis de la mente extendida no es una consecuencia obligada del enactivismo, y varios enactivistas la rechazan. Presentar las cuatro E como un bloque unificado oculta desacuerdos importantes entre ellas.',
      ],
    },
  },

  met_cuantitativo: {
    thesis:
      'Un método cuantitativo sostiene que un fenómeno psicológico se vuelve comparable cuando se fija por anticipado una regla pública que asigna números a observaciones, y que la variación entre esos números permite decidir entre hipótesis rivales. Todo el peso cae sobre dos preguntas: si la [[operacionalizacion|operacionalización]] mide lo que dice medir, y si la variación observada supera a la que produciría el azar.',

    problem:
      'La psicología heredó de su nacimiento un problema de arbitraje: cómo decidir entre dos afirmaciones sobre la mente cuando ambas son compatibles con lo observado. La introspección entrenada no lo resolvía, porque al discrepar dos laboratorios cada uno podía atribuir la diferencia al mal entrenamiento del otro, y ninguna observación cerraba la disputa. Hacía falta ligar cada afirmación a un procedimiento repetible por cualquiera y a un criterio explícito para descartar el azar.',

    keyNotions: [
      {
        term: 'Definición operacional',
        gloss:
          'Fijar de antemano qué operaciones cuentan como observación de la variable, para que otro pueda repetirlas. Gana comparabilidad y pierde riqueza: la definición no captura el constructo, lo indica, y esa distancia es permanente y no un defecto que una versión mejor del instrumento vaya a cerrar.',
      },
      {
        term: 'Confiabilidad y validez',
        gloss:
          'La confiabilidad es consistencia: el instrumento entrega resultados estables entre ítems, entre jueces y entre aplicaciones. La validez concierne a la interpretación de los puntajes, no al instrumento en abstracto. Un test puede ser muy confiable midiendo con precisión algo distinto de lo que su nombre anuncia.',
      },
      {
        term: 'Diseño experimental y cuasiexperimental',
        gloss:
          'La asignación aleatoria no demuestra la causa: cierra en bloque las explicaciones alternativas, y eso es la validez interna. Cuando no se puede aleatorizar, el cuasiexperimento no es un experimento defectuoso sino otra estructura inferencial, que compra la conclusión con supuestos explícitos sobre la comparabilidad de los grupos.',
      },
      {
        term: 'Qué dice y qué no dice un contraste',
        gloss:
          'Un valor p indica cuán improbables serían datos como los obtenidos si la hipótesis nula fuera verdadera y se cumplieran los supuestos del modelo. No indica la probabilidad de la hipótesis, ni la magnitud del fenómeno, ni su importancia. Eso último lo informan el tamaño del efecto y su intervalo.',
      },
      {
        term: 'Replicación y grados de libertad del investigador',
        gloss:
          'Decidir cuándo parar de recolectar, qué covariables incluir o qué casos excluir mirando ya los datos multiplica los falsos positivos sin que nadie mienta. El preregistro y la replicación directa no son burocracia: son lo que devuelve al contraste su carácter de prueba que podía fallar.',
      },
    ],

    development: `El programa cuantitativo responde a un problema de arbitraje. Si dos investigadores sostienen cosas distintas sobre la memoria y ambos apelan a lo que observaron, hace falta algo que permita que la disputa termine. La respuesta fue renunciar al acceso directo y exigir que toda variable quede amarrada a un procedimiento público, más un criterio explícito para separar lo que se debe al azar de lo que no. Operacionalizar es eso: fijar qué operaciones cuentan como observación, de modo que cualquiera pueda repetirlas y obtener algo comparable.

El precio se conoce desde el comienzo y conviene decirlo antes que ocultarlo: la definición operacional no captura el constructo, lo indica. Por eso la pregunta decisiva no es si el instrumento es preciso sino si sus puntajes admiten la interpretación que se les da, que es lo que Cronbach y Meehl llamaron **[[validez_de_constructo|validez de constructo]]** y anclaron en una red de relaciones esperadas con otras variables. La **[[confiabilidad]]** es condición necesaria y no suficiente: un instrumento puede medir con enorme estabilidad algo que no es lo que su nombre anuncia.

Sobre esa base se construye el diseño. Un experimento con asignación aleatoria no prueba que la manipulación cause el efecto: cierra sistemáticamente las explicaciones rivales catalogadas por Campbell y Stanley, y la **[[validez_interna]]** es el grado en que quedaron cerradas. Cuando aleatorizar no es posible, el diseño **[[cuasiexperimental]]** no es un experimento pobre: es otra estructura inferencial, que compra la conclusión con supuestos explícitos sobre la comparabilidad de los grupos. Elegir entre uno y otro no es una decisión logística, define cuánto se está dispuesto a suponer para poder afirmar.

La inferencia estadística agrega su propia carga. Un contraste informa cuán improbables serían datos como los obtenidos si la **[[hipotesis_nula|hipótesis nula]]** fuera verdadera y se cumplieran los supuestos del modelo, que son parte del contraste y no un trámite previo. De ahí que el **[[tamano_del_efecto|tamaño del efecto]]** y su intervalo digan más que la significación, que depende del número de casos. La **[[crisis_de_replicacion|crisis de replicación]]** mostró que el problema principal no era el fraude sino los grados de libertad del investigador, ejercidos de buena fe con los datos ya a la vista.

El error más común del estudiante es tratar el indicador como si fuera el constructo. Escribe que la ansiedad disminuyó cuando lo que tiene es una diferencia entre sumas de ítems autorreportados, y escribe que el resultado fue significativo como si eso quisiera decir importante. No es un descuido de redacción: es haber convertido una decisión sobre cómo conocer en un supuesto sobre qué hay. La operacionalización es un compromiso revisable con un modo de acceso, y el instante en que se olvida que fue una decisión es el instante en que el número deja de poder equivocarse.`,

    objections: [
      {
        from: 'Kuhn',
        fromId: 'kuhn',
        claim:
          'No hay medición neutral. Elegir qué cuenta como observación de la variable ya supone la teoría que el estudio dice poner a prueba, de modo que la evidencia obtenida confirma con facilidad el marco desde el cual fue construido el instrumento.',
      },
      {
        from: 'Meehl',
        claim:
          'En psicología casi todas las variables correlacionan un poco con casi todas, de manera que la hipótesis nula es falsa de antemano. Rechazarla es una prueba débil: aumentar la muestra facilita el éxito, y así una teoría se corrobora más cuanto mejor hecho está el estudio.',
      },
      {
        from: 'Métodos cualitativos',
        fromId: 'met_cualitativo',
        claim:
          'Estandarizar un ítem supone que la misma pregunta significa lo mismo para todos los participantes. Ese supuesto es empírico, rara vez se comprueba y suele ser falso cuando la muestra atraviesa clases, edades o culturas distintas: se promedian respuestas a preguntas diferentes.',
      },
    ],

    works: [
      {
        title: 'The Logic of Modern Physics',
        year: 1927,
        note: 'Bridgman: el concepto es sinónimo del conjunto de operaciones con que se lo determina. La fuente de la definición operacional.',
      },
      {
        title: 'The Design of Experiments',
        year: 1935,
        note: 'Fisher: aleatorización, control y la lógica de la hipótesis nula como procedimiento de decisión.',
      },
      {
        title: 'Construct Validity in Psychological Tests',
        year: 1955,
        note: 'Cronbach y Meehl: la validez de constructo y la red nomológica que la sostiene.',
      },
      {
        title: 'Experimental and Quasi-Experimental Designs for Research',
        year: 1963,
        note: 'Campbell y Stanley: el catálogo de amenazas a la validez interna y externa que sigue ordenando el diseño.',
      },
      {
        title: 'Estimating the Reproducibility of Psychological Science',
        year: 2015,
        note: 'Open Science Collaboration: cien replicaciones directas y la constatación de que menos de la mitad sobrevive.',
      },
    ],

    psychology: {
      claim:
        'Es el método con que la psicología construyó casi todo lo que puede afirmar sobre poblaciones, y también el que produjo su crisis más seria. Su promesa no es la certeza sino el control: permite decir con qué probabilidad un resultado se debe al azar y qué explicaciones alternativas quedaron descartadas por el diseño.',
      lineages: [
        {
          name: 'Ronald Fisher, The Design of Experiments',
          year: 1935,
          what: 'Introduce la aleatorización, el diseño factorial y el contraste de la hipótesis nula. La aleatorización es su aporte mayor: es lo que permite atribuir una diferencia al tratamiento y no a las características previas de los grupos.',
        },
        {
          name: 'Cronbach y Meehl, validez de constructo',
          year: 1955,
          what: 'Establecen que un instrumento no se valida mostrando que mide algo sino poniendo a prueba la red de relaciones que su constructo predice. Es el criterio que separa un test de una batería de preguntas.',
        },
        {
          name: 'Jacob Cohen, Statistical Power Analysis',
          year: 1969,
          what: 'Muestra que la potencia típica de los estudios en psicología era demasiado baja para detectar los efectos que buscaban, y da las herramientas para calcular el tamaño muestral necesario antes de recoger datos.',
        },
        {
          name: 'Open Science Collaboration, reproducibilidad de la ciencia psicológica',
          year: 2015,
          what: 'Replica cien estudios y reproduce alrededor de un tercio de los efectos, lo que obliga a revisar prácticas de análisis y de publicación que la disciplina daba por buenas.',
        },
      ],
      development: `Un diseño cuantitativo es una máquina para descartar explicaciones rivales. Cuando se asigna al azar a los participantes, lo que se consigue no es un grupo idéntico a otro sino que las diferencias previas se repartan sin sistema, de modo que ya no puedan explicar el resultado. Cuando se mide antes y después, se descarta que la diferencia estuviera desde el principio. Cada elemento del diseño existe para cerrarle la puerta a una interpretación alternativa, y esa es la operación epistemológica que hay debajo de la estadística.

El eslabón débil no suele ser el análisis sino la medición. Antes de calcular cualquier cosa hay que haber decidido qué operaciones cuentan como observación del constructo, y esa decisión determina todo lo que viene después. Un puntaje total de una escala supone que los ítems miden lo mismo, que la distancia entre 2 y 3 equivale a la que hay entre 4 y 5, y que el instrumento funciona igual en los grupos que se comparan. Ninguno de esos supuestos es gratis y todos son verificables, aunque muchas tesis los den por hechos.

La crisis de replicación mostró qué pasa cuando el aparato funciona sin esos cuidados. Un conjunto de decisiones tomadas con los datos ya a la vista, cuáles casos excluir, qué covariables incluir, cuándo dejar de recolectar, basta para producir resultados significativos a partir de ruido, sin que nadie mienta. La respuesta no fue abandonar el método sino atarse las manos por anticipado: preregistro, potencia calculada antes, reporte de tamaños del efecto e intervalos, y datos disponibles.

Para un trabajo de curso, el error más frecuente no es técnico sino epistemológico. Consiste en preguntar qué prueba corresponde aplicar antes de haber preguntado qué explicación alternativa quedaría viva si el resultado sale significativo. La prueba se elige al final y casi siempre es obvia; lo que decide la calidad de un estudio es el diseño, y el diseño se juega en identificar qué más podría estar produciendo lo que uno espera encontrar.`,
      today: [
        'El preregistro, el cálculo de potencia previo y el reporte de tamaños del efecto son requisitos crecientes en revistas de psicología y en algunos comités de tesis.',
        'La invarianza de medición es la comprobación que decide si dos grupos culturales pueden compararse en una misma escala, y suele omitirse en estudios que igual comparan.',
        'El uso de instrumentos normados en otras poblaciones sin adaptación ni validación local es un problema recurrente en investigación chilena, y afecta directamente lo que un puntaje significa.',
      ],
      caveats: [
        'Un valor p no dice cuán probable es que la hipótesis sea verdadera ni cuán grande es el efecto. Dice qué tan improbable sería un resultado así si el efecto fuera exactamente cero, que es una afirmación mucho más pobre de lo que su uso sugiere.',
        'La significación estadística y la relevancia práctica son cosas distintas: con muestras grandes, diferencias sin ninguna importancia clínica salen significativas, y no reportar el tamaño del efecto deja al lector sin manera de notarlo.',
      ],
    },
  },

  met_cualitativo: {
    thesis:
      'La investigación cualitativa no es investigación cuantitativa sin números: es el diseño adecuado cuando el objeto es el significado que algo tiene para alguien o el proceso por el cual una práctica se sostiene. Su unidad de muestreo no es el individuo representativo sino el caso informativo, y su criterio de suficiencia no es el tamaño sino la [[saturacion|saturación]].',

    problem:
      'Para medir hay que fijar antes el significado de la variable, y hay objetos en los que eso es precisamente lo que falta: qué cuenta como recaída para quien recae, cómo se sostiene una práctica dentro de una institución, por qué una intervención rinde en un lugar y no en otro. Además, estandarizar un ítem supone que la misma pregunta significa lo mismo para todos, supuesto que es empírico y suele fallar. Hace falta un diseño que produzca categorías en lugar de aplicarlas.',

    keyNotions: [
      {
        term: 'Muestreo intencionado',
        gloss:
          'Los casos se eligen por su capacidad de informar sobre el fenómeno, no por representatividad estadística: casos típicos, extremos, desviados, de máxima variación o teóricos. No hay error muestral que calcular, y a cambio cada inclusión debe justificarse por lo que se espera aprender de ella.',
      },
      {
        term: 'Saturación',
        gloss:
          'El punto en que los casos nuevos dejan de modificar las categorías del análisis. No es un número de entrevistas ni la mera repetición de contenidos, y solo puede declararse si se analiza mientras se recolecta. Anunciarla al final, sin análisis paralelo, es una fórmula vacía.',
      },
      {
        term: 'Análisis temático',
        gloss:
          'Procedimiento para identificar patrones de significado en un corpus, flexible respecto de la teoría de base y explícito en sus fases. Su trampa es el verbo emerger: los temas no emergen del material, los construye alguien que codifica con preguntas, y por eso hay que declarar cuáles eran.',
      },
      {
        term: 'Teoría fundamentada',
        gloss:
          'Comparación constante entre incidentes, muestreo dirigido por las categorías que van apareciendo y codificación sucesiva hasta llegar a una categoría central que organiza el resto. Es la versión más exigente del análisis cualitativo porque el resultado esperado no es una descripción sino una teoría de alcance intermedio.',
      },
      {
        term: 'Criterios de rigor y su disputa',
        gloss:
          'Lincoln y Guba propusieron credibilidad, transferibilidad, dependibilidad y confirmabilidad, sostenidas en permanencia en el campo, triangulación, auditoría y devolución a los participantes. La objeción es que el cuadro calca término a término el vocabulario cuantitativo y así concede el marco que decía romper.',
      },
    ],

    development: `La investigación cualitativa responde a un límite del programa anterior y no a su fracaso. Para medir hay que fijar antes el significado de la variable, y hay objetos donde eso es justamente lo que falta: qué cuenta como recaída para quien recae, cómo se sostiene una práctica dentro de una institución, por qué un programa rinde en una escuela y no en la vecina. A eso se suma que estandarizar un ítem supone que la misma pregunta significa lo mismo para todos, supuesto empírico que rara vez se comprueba.

Lo primero que cambia es el muestreo. El **[[muestreo_intencionado|muestreo intencionado]]** selecciona casos por su capacidad de informar y no por representatividad, de modo que un caso desviado puede valer más que veinte típicos. No hay error muestral que calcular, y a cambio cada inclusión debe justificarse. El criterio de suficiencia es la saturación, que no es un número de entrevistas ni la repetición de contenidos: es el punto en que los casos nuevos dejan de modificar las categorías, y por eso solo puede declararlo quien analiza mientras recolecta.

El análisis admite dos rutas principales. El **[[analisis_tematico|análisis temático]]** busca patrones de significado en el corpus y es flexible respecto de la teoría; su trampa está en el verbo emerger, porque los temas no emergen: los construye alguien que codifica con preguntas, y lo honesto es declarar cuáles eran. La **[[teoria_fundamentada|teoría fundamentada]]** es más exigente: comparación constante entre incidentes, muestreo teórico guiado por las categorías en curso y codificación hasta una categoría central. Su promesa original de que la teoría surge de los datos sin marco previo resultó insostenible, y Charmaz la reformuló: el investigador construye la categoría desde una posición determinada.

El rigor se discutió con los criterios de Lincoln y Guba: **[[credibilidad]]**, transferibilidad, dependibilidad y confirmabilidad, sostenidos en permanencia prolongada en el campo, **[[triangulacion|triangulación]]**, auditoría de decisiones y devolución a los participantes. La objeción de fondo sigue viva: ese cuadro calca término a término validez interna, validez externa, confiabilidad y objetividad, es decir, concede el marco del rival al rechazarlo. Quienes lo rechazan proponen criterios propios, como la reflexividad sobre la posición de quien investiga, que es **[[conocimiento_situado|conocimiento situado]]** trasladado a la sección de método, y la utilidad de los resultados para quienes fueron investigados.

El error más común del estudiante es entregar una lista de temas que reproduce el guion de la entrevista, con citas ilustrando cada uno y la frase los participantes señalaron que. Eso es contenido ordenado, no análisis. Y el error es epistemológico antes que técnico: supone que la entrevista es una ventana transparente hacia algo que ya estaba dentro de la persona y que el investigador solo retira, o sea, importa el modelo extractivo del cuestionario al método que existía para negarlo. Si el significado se produce en una relación situada, el guion, el lugar y quién pregunta son parte del dato, y un informe que los oculta no es más neutral, es menos auditable.`,

    objections: [
      {
        from: 'Métodos cuantitativos',
        fromId: 'met_cuantitativo',
        claim:
          'La flexibilidad de la codificación entrega tantos grados de libertad que dos analistas producen dos teorías distintas del mismo corpus. Es el problema que la crisis de replicación expuso en el otro campo, agravado por la ausencia de preregistro y de criterios de suficiencia comprobables.',
      },
      {
        from: 'Construccionismo',
        fromId: 'construccionismo',
        claim:
          'Prometer que las categorías emergen de los datos reedita un inductivismo ingenuo. No hay codificación sin teoría previa, y la primera lectura del corpus ya está organizada por el vocabulario disponible de quien lee, incluidas las categorías diagnósticas que se dice suspender.',
      },
      {
        from: 'Foucault',
        fromId: 'foucault',
        claim:
          'La entrevista en profundidad es heredera del dispositivo de confesión: instala a alguien que habla de sí ante alguien que escucha, interpreta y clasifica. No descubre una interioridad preexistente, ayuda a producirla, y luego la presenta como hallazgo.',
      },
    ],

    works: [
      {
        title: 'The Discovery of Grounded Theory',
        year: 1967,
        note: 'Glaser y Strauss: comparación constante, muestreo teórico y la defensa de generar teoría en vez de verificarla.',
      },
      {
        title: 'Naturalistic Inquiry',
        year: 1985,
        note: 'Lincoln y Guba: los cuatro criterios de rigor y los procedimientos que los sostienen.',
      },
      {
        title: 'Basics of Qualitative Research',
        year: 1990,
        note: 'Strauss y Corbin: la codificación abierta, axial y selectiva sistematizada en procedimientos enseñables.',
      },
      {
        title: 'Using Thematic Analysis in Psychology',
        year: 2006,
        note: 'Braun y Clarke: las seis fases del análisis temático y la insistencia en que los temas se construyen.',
      },
      {
        title: 'Constructing Grounded Theory',
        year: 2006,
        note: 'Charmaz: la versión constructivista, que abandona el supuesto de un investigador sin marco previo.',
      },
    ],

    psychology: {
      claim:
        'Es el diseño que corresponde cuando el objeto es el significado que algo tiene para alguien o el proceso por el cual una práctica se sostiene, y no la magnitud de una diferencia. No es investigación cuantitativa sin números ni un paso previo a la de verdad: tiene preguntas propias, criterios de rigor propios y modos propios de fallar.',
      lineages: [
        {
          name: 'Glaser y Strauss, El descubrimiento de la teoría fundamentada',
          year: 1967,
          what: 'Proponen construir teoría desde los datos mediante muestreo teórico y comparación constante, con el criterio de saturación como regla para decidir cuándo dejar de recolectar.',
        },
        {
          name: 'Lincoln y Guba, Naturalistic Inquiry',
          year: 1985,
          what: 'Reemplazan validez, confiabilidad y generalización por credibilidad, auditabilidad, confirmabilidad y transferibilidad. Es el aparato de rigor que se enseña hoy en casi todo curso de metodología cualitativa.',
        },
        {
          name: 'Jonathan Smith, análisis fenomenológico interpretativo',
          year: 1996,
          what: 'Formaliza un método con muestras pequeñas y análisis caso a caso, con la doble hermenéutica explícita: el investigador interpreta a alguien que ya interpreta su experiencia.',
        },
        {
          name: 'Braun y Clarke, análisis temático',
          year: 2006,
          what: 'Sistematizan el método cualitativo más usado en psicología en seis fases, y años después insisten en llamarlo reflexivo para combatir la idea de que los temas emergen solos.',
        },
      ],
      development: `La primera decisión de un diseño cualitativo es de muestreo y casi siempre se toma mal. No se busca representatividad estadística sino casos que informen sobre el fenómeno, y por eso se eligen deliberadamente: típicos, extremos, desviados, de máxima variación. Un muestreo intencionado bien argumentado no es una muestra pequeña con la que hubo que conformarse, es una selección hecha por razones que se pueden defender. Cuando una tesis escribe que entrevistó a doce personas por disponibilidad, no está haciendo muestreo intencionado, está describiendo una limitación.

La segunda decisión es cuándo parar, y ahí opera la saturación. La regla dice que se deja de recolectar cuando los casos nuevos ya no modifican las categorías del análisis, lo que supone algo que muchos estudios no hacen: analizar mientras se recolecta. Si todas las entrevistas se hacen primero y se analizan después, la saturación no puede haberse comprobado y afirmarla es una formalidad vacía.

El aparato de rigor de Lincoln y Guba responde a una pregunta legítima: si no hay validez interna ni generalización, qué distingue un buen análisis de una opinión ordenada. Sus respuestas son verificables. Credibilidad significa haber buscado activamente casos que contradigan la interpretación propuesta, y no solo los que la ilustran. Auditabilidad significa que otra persona pueda seguir el camino desde el fragmento de entrevista hasta la conclusión. Transferibilidad significa describir el contexto con suficiente detalle como para que el lector decida si el hallazgo le sirve, lo que traslada el juicio de generalización a quien lee.

El modo característico de fallar es escribir un informe que solo confirma. Se citan los fragmentos que apoyan cada tema, se omite el material incómodo y se afirma que las categorías emergieron de los datos, lo que contradice el marco interpretativo que la propia tesis invoca. La corrección no es difícil ni cara: dejar constancia de las decisiones de codificación, mostrar los casos que no calzaron y explicar qué se hizo con ellos.`,
      today: [
        'El análisis temático reflexivo es el método más usado en tesis de psicología, y sus autoras han tenido que publicar aclaraciones porque se aplica mal con frecuencia.',
        'Los comités de ética exigen consentimiento informado y resguardo de identidad en materiales donde el relato mismo puede identificar a la persona, lo que plantea un problema propio de este tipo de datos.',
        'La investigación cualitativa en salud sostiene buena parte de lo que se sabe sobre adherencia a tratamientos y sobre experiencia de enfermedad, donde un cuestionario no alcanza a la pregunta.',
      ],
      caveats: [
        'Los temas no emergen de los datos: alguien los construye desde una posición y con un marco. La fórmula emergieron del análisis es la frase que más delata que no hubo reflexividad.',
        'Muestra pequeña no equivale a estudio cualitativo. Un diseño cualitativo se define por el tipo de pregunta y por el modo de analizar, no por el número de participantes, y hacer diez entrevistas para calcular porcentajes es un error de diseño y no una variante.',
      ],
    },
  },

  met_mixto: {
    thesis:
      'Un diseño mixto no consiste en usar dos técnicas: consiste en formular una pregunta que ninguna responde sola y en especificar de antemano en qué punto los dos conjuntos de resultados van a encontrarse. Si no hay [[integracion_metodologica|integración]] planificada, no hay diseño mixto: hay dos estudios encuadernados juntos.',

    problem:
      'Durante dos décadas la discusión metodológica estuvo bloqueada por una guerra de paradigmas en la que cada bando acusaba al otro de no producir conocimiento. Mientras tanto, los problemas aplicados exigían las dos cosas a la vez: estimar si un programa produjo un efecto y entender por qué funcionó donde funcionó. La pregunta no era cuál método es superior, sino si es coherente combinar dos que dicen partir de supuestos incompatibles sobre qué es conocer.',

    keyNotions: [
      {
        term: 'Diseño convergente',
        gloss:
          'Ambos componentes se recogen en el mismo periodo, con independencia, y se comparan al interpretar. Su riesgo es quedarse en la comparación informal: sin un procedimiento explícito de confrontación, caso por caso o dimensión por dimensión, la convergencia se afirma en vez de mostrarse.',
      },
      {
        term: 'Explicativo secuencial',
        gloss:
          'Primero lo cuantitativo, después lo cualitativo para explicar un resultado que quedó opaco. Su ventaja es que permite seleccionar los casos desde los propios datos: los que no respondieron al tratamiento, los desviados, los que quedaron en los extremos de la distribución.',
      },
      {
        term: 'Exploratorio secuencial',
        gloss:
          'Primero lo cualitativo, porque todavía no se sabe qué medir. El trabajo de campo identifica las dimensiones del constructo y el vocabulario de los participantes, y con eso se construye o se adapta un instrumento que luego se aplica a una muestra mayor.',
      },
      {
        term: 'Integración frente a yuxtaposición',
        gloss:
          'Integrar es que los componentes se toquen en un punto especificado: el muestreo de uno depende del otro, el instrumento se construye con las categorías del otro, o los datos se enfrentan en una exhibición conjunta. El producto propio es una inferencia que ninguno de los dos componentes autoriza por separado.',
      },
      {
        term: 'La tesis de incompatibilidad y su respuesta',
        gloss:
          'Si cada tradición trae su ontología y su epistemología, combinarlas sería mezclar marcos sin medida común. La respuesta pragmatista niega que el método deba deducirse de una ontología previa y pone el criterio en la pregunta de investigación; la respuesta dialéctica prefiere conservar la tensión y usarla como fuente de hallazgos.',
      },
    ],

    development: `Los métodos mixtos nacen de una situación práctica antes que de una teoría. Evaluar un programa exige al mismo tiempo estimar si produjo un efecto y entender por qué lo produjo donde lo produjo, y ninguna de las dos tradiciones responde ambas cosas. Durante veinte años la discusión estuvo trabada por la guerra de los paradigmas, donde cada bando acusaba al otro de no producir conocimiento, mientras la investigación aplicada necesitaba las dos respuestas juntas.

Los diseños básicos son tres y se distinguen por el orden y el peso relativo de cada componente. En el convergente ambos se recogen en paralelo y se confrontan al interpretar. En el explicativo secuencial el componente cuantitativo va primero y el cualitativo se usa para explicar un resultado que quedó opaco, lo que permite elegir los casos desde los propios datos: los desviados, los que no respondieron al tratamiento. En el exploratorio secuencial el orden se invierte porque todavía no se sabe qué medir, y el trabajo de campo identifica las dimensiones del constructo o construye el instrumento.

Lo que decide la calidad es la integración. Integrar no es informar dos resultados en capítulos contiguos: es que los componentes se toquen en un punto fijado de antemano, sea porque el muestreo de uno depende de los resultados del otro, sea porque el instrumento se construye con las categorías del otro, sea porque los datos se enfrentan en una exhibición conjunta, caso por caso y fuente contra fuente. La **[[triangulacion|triangulación]]** entendida como simple confirmación mutua es la versión débil de esto, porque supone que ambas fuentes apuntan al mismo objeto. Cuando divergen no hay fracaso: suele estar ahí el hallazgo, porque la divergencia indica que se midieron cosas distintas o que la muestra no se comporta como fue declarada.

La objeción de fondo es de principio. Si cada tradición trae su propia ontología, mezclarlas sería mezclar **[[paradigma|paradigmas]]** y caer bajo la **[[inconmensurabilidad]]**: faltaría la medida común para afirmar que los dos resultados hablan del mismo objeto. La respuesta pragmatista, que Howe formuló contra la tesis de la incompatibilidad, sostiene que exigir la deducción del método desde una ontología previa es un dogma; según la **[[maxima_pragmatica|máxima pragmática]]**, el sentido de una distinción está en sus consecuencias prácticas, y el criterio de elección es la pregunta de investigación. Greene añadió algo más interesante: no disolver la tensión entre marcos, sino trabajar con ella.

El error más común del estudiante es llamar mixto a un estudio que aplicó una encuesta y además hizo cinco entrevistas, y cerrarlo diciendo que ambos resultados coinciden. Ahí no hubo integración sino yuxtaposición, y la frase sobre la coincidencia supone justamente lo que el diseño debía poner a prueba, que las dos fuentes hablan del mismo objeto. Es un error epistemológico porque convierte en supuesto una correspondencia que era la pregunta. Y tiene un costo verificable: las citas no aumentan la **[[validez_externa|validez externa]]** de la estimación ni el porcentaje vuelve generalizable la entrevista.`,

    objections: [
      {
        from: 'Guba y Lincoln',
        claim:
          'Combinar exige una medida común, y el marco constructivista niega que haya una realidad independiente de las construcciones sobre la cual ambas fuentes converjan. En la práctica el componente cualitativo termina subordinado, ilustrando con citas lo que la cifra ya había decidido.',
      },
      {
        from: 'Pragmatismo',
        fromId: 'pragmatismo',
        claim:
          'Invocar que lo importante es lo que funciona no es un argumento mientras no se diga funciona para quién y para qué fin. Usado como dispensa para no declarar ningún compromiso epistemológico, el pragmatismo deja de ser una posición y pasa a ser una coartada.',
      },
      {
        from: 'Métodos cuantitativos',
        fromId: 'met_cuantitativo',
        claim:
          'El componente cualitativo suele entrar sin justificación de muestreo ni criterio de suficiencia, elegido por conveniencia. Un estudio que agrega citas a una regresión no integró nada y aumenta la credibilidad aparente de ambas partes sin haber aumentado la evidencia de ninguna.',
      },
    ],

    works: [
      {
        title: 'Against the Quantitative-Qualitative Incompatibility Thesis',
        year: 1988,
        note: 'Howe: la defensa pragmatista de que los supuestos paradigmáticos no obligan a elegir método.',
      },
      {
        title: 'Toward a Conceptual Framework for Mixed-Method Evaluation Designs',
        year: 1989,
        note: 'Greene, Caracelli y Graham: los propósitos de la combinación, entre ellos la iniciación por divergencia.',
      },
      {
        title: 'Handbook of Mixed Methods in Social and Behavioral Research',
        year: 2003,
        note: 'Tashakkori y Teddlie: la consolidación del campo como tercera tradición metodológica.',
      },
      {
        title: 'Designing and Conducting Mixed Methods Research',
        year: 2007,
        note: 'Creswell y Plano Clark: la tipología de diseños convergentes y secuenciales usada como estándar.',
      },
      {
        title: 'Achieving Integration in Mixed Methods Designs',
        year: 2013,
        note: 'Fetters, Curry y Creswell: integración por conexión, construcción y fusión, y la exhibición conjunta como herramienta.',
      },
    ],

    psychology: {
      claim:
        'Combinan diseños cuantitativos y cualitativos para responder preguntas que ninguno de los dos responde solo, y su dificultad real no es técnica sino de integración: la mayoría de los estudios que se declaran mixtos yuxtaponen dos investigaciones en el mismo informe sin que ninguna hable con la otra.',
      lineages: [
        {
          name: 'Campbell y Fiske, la matriz multirrasgo multimétodo',
          year: 1959,
          what: 'Establecen que un constructo se valida cuando medidas distintas del mismo rasgo convergen y medidas del mismo método sobre rasgos distintos no. Es el antecedente técnico de la triangulación.',
        },
        {
          name: 'Tashakkori y Teddlie, Handbook of Mixed Methods',
          year: 2003,
          what: 'Adoptan el pragmatismo como marco y proponen que la pregunta de investigación, y no la lealtad paradigmática, decide qué métodos se combinan.',
        },
        {
          name: 'Creswell y Plano Clark, Designing and Conducting Mixed Methods Research',
          year: 2007,
          what: 'Ordenan los diseños en convergente, explicativo secuencial y exploratorio secuencial, y fijan el vocabulario con que hoy se escriben las tesis mixtas.',
        },
        {
          name: 'Los criterios de calidad de los diseños mixtos',
          year: 2011,
          what: 'Las guías publicadas por institutos de investigación en salud incorporan la exigencia de mostrar en qué punto y de qué modo se integraron los dos componentes, y no solo que ambos existieron.',
        },
      ],
      development: `Los tres diseños básicos responden a tres situaciones distintas y conviene no confundirlos. En el convergente se recogen ambos tipos de datos en paralelo y se comparan al final, lo que sirve cuando se quiere ver si dos vías de acceso al mismo fenómeno coinciden. En el explicativo secuencial primero se mide y después se entrevista, para entender por qué salió lo que salió, y es el diseño natural cuando un resultado cuantitativo resulta contraintuitivo. En el exploratorio secuencial primero se explora en profundidad y después se construye un instrumento, y es el camino correcto cuando no existe una escala adecuada para la población o el constructo.

La objeción de fondo es la inconmensurabilidad paradigmática: si un enfoque supone una realidad independiente y el otro supone que la realidad se construye en el lenguaje, combinarlos sería incoherente. La respuesta pragmatista, que es la que adoptaron los manuales, dice que el criterio de elección es la utilidad para la pregunta y no la lealtad ontológica. Es una respuesta legítima y también es una manera de esquivar la discusión, y conviene reconocer eso en lugar de citarla como si zanjara el asunto.

El problema práctico está en otra parte. Un estudio mixto de verdad tiene un punto de integración identificable: los resultados cuantitativos se usaron para seleccionar los casos que se entrevistaron, o las categorías cualitativas se usaron para construir los ítems, o los hallazgos discrepantes obligaron a revisar el análisis. Si el informe tiene un capítulo de resultados cuantitativos, otro de cualitativos y una discusión que los menciona a los dos, no hay diseño mixto: hay dos estudios en el mismo documento.

Los resultados discrepantes son el caso más interesante y el que suele esconderse. Cuando la escala dice una cosa y las entrevistas dicen otra, la tentación es explicar la discrepancia como limitación. La lectura productiva es la contraria: la discrepancia suele indicar que el instrumento y la experiencia no están hablando del mismo fenómeno, y eso es un hallazgo sobre la medición que ninguno de los dos componentes habría producido por separado.`,
      today: [
        'La investigación en evaluación de programas y en salud pública usa diseños mixtos de forma estándar, porque necesita estimar efectos y a la vez entender por qué una intervención funciona en un contexto y no en otro.',
        'La construcción y adaptación de instrumentos a población chilena sigue el diseño exploratorio secuencial: primero entrevistas y grupos focales, después el instrumento y su validación.',
        'Las guías de reporte para estudios mixtos exigen declarar el punto de integración, lo que convierte en visible el defecto más común de estos diseños.',
      ],
      caveats: [
        'Recoger dos tipos de datos no es un diseño mixto. Sin un punto de integración explícito, lo que hay es yuxtaposición, y es el defecto más frecuente en tesis que se declaran mixtas.',
        'Triangular no significa que dos métodos deban confirmarse mutuamente. La versión original en Campbell y Fiske es sobre validez de constructo, y tratar toda discrepancia como error de medida hace perder justamente la información más valiosa.',
      ],
    },
  },
};

export const voices: Record<string, AuthorVoice> = {
  maturana: {
    register:
      'Frases largas que vuelven sobre sí mismas: dice algo, aclara qué no dijo y lo repite con otra formulación. Conectores de insistencia: «es decir», «esto es», «en el momento en que», «y esto es así porque», «lo que pasa es que». Usa verbos y gerundios donde otros usan sustantivos. Corrige el término del interlocutor antes de responderle, y no avanza mientras el término siga mal puesto.',

    moves: [
      'Antes de contestar corrige la palabra: muestra que el término usado por el interlocutor ya trae metida la explicación que se discute.',
      'Pregunta en qué dominio se hace la afirmación y separa el dominio del operar del sistema del dominio de las descripciones del observador.',
      'Reemplaza sustantivos por verbos (el lenguajear, el emocionar, el conversar) para exhibir que se trata de un fluir de coherencias y no de cosas que se tienen.',
      'Repite la misma tesis con variaciones mínimas hasta que no queda salida, en lugar de agregar un argumento nuevo.',
      'Desmonta toda explicación que suponga que algo entra, se transmite o se capta, apelando al determinismo estructural.',
      'Convierte la pregunta por lo que algo es en la pregunta por qué distinción hace el observador al decirlo.',
      'Cuando le piden una consecuencia práctica, la devuelve como consecuencia de la biología y no como recomendación.',
    ],

    commitments: [
      'No hay interacciones instructivas: nada externo especifica lo que ocurre en un sistema determinado en su estructura.',
      'El sistema nervioso opera con clausura operacional; no hay entrada ni salida, y la información no entra.',
      'Todo lo dicho es dicho por un observador a otro observador, que puede ser él mismo.',
      'Nunca usa la realidad independiente como argumento de validación, porque hacerlo es una exigencia de obediencia disfrazada de descripción.',
      'Las emociones no acompañan a la razón: especifican el dominio de acciones posible, y toda argumentación racional descansa en premisas aceptadas desde una emoción.',
    ],

    horizon:
      'Cuenta con la neurofisiología experimental de la visión, la cibernética de Wiener, McCulloch y von Foerster, la biología evolutiva y molecular del siglo veinte y la teoría de sistemas. No adopta el vocabulario de procesamiento de información, codificación, representación ni cómputo, y no por desconocerlo sino porque lo considera improcedente en biología. Tampoco razona con estadística ni con probabilidad: sus explicaciones son mecanicistas y describen coherencias operacionales. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta qué distingue el observador, en qué dominio ocurre lo que se afirma y qué se conserva mientras eso pasa. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'autopoiesis (la organización que produce sus propios componentes)',
      'clausura operacional (toda actividad conduce a actividad, sin entrada ni salida)',
      'determinismo estructural (lo que pasa lo especifica la estructura, no la perturbación)',
      'gatillar (perturbar sin instruir)',
      'acoplamiento estructural (historia de cambios congruentes con el medio)',
      'deriva natural (la evolución como conservación, sin optimización)',
      'dominio de existencia (el ámbito en que algo opera y se distingue)',
      'el observador (quien hace la distinción y sin el cual no hay nada dicho)',
      'lenguajear (el coordinar conductual recursivo, no un instrumento de transmisión)',
      'emocionar (el fluir de disposiciones corporales que especifican acciones)',
    ],

    avoid: [
      'El tono de coach y de autoayuda sistémica: sus tesis sobre el amor son biológicas y no consignas motivacionales.',
      'Repetir frases célebres sobre el amor como cierre inspirador, sin el argumento biológico que las sostiene.',
      'Vocabulario de energías, vibraciones, campos o holismo espiritual: razona con mecanismos y coherencias operacionales.',
      'La figura del sabio chileno entrañable, con anécdotas de la naturaleza y calidez de abuelo.',
      'Conceder, por comodidad expositiva, que la información entra o que el estímulo transmite algo.',
    ],

    styleAnchor:
      'Cuando estudiábamos la visión de colores buscábamos una correspondencia entre la composición espectral de la luz y el nombre que la persona daba al color, y no la encontramos; y no la encontramos porque no la hay. Lo que sí encontramos fue una correlación entre la actividad de la retina y ese nombre. Es decir, el color no está afuera esperando ser recogido: el color es un estado de actividad del sistema nervioso. Y en el momento en que uno acepta eso, ya no puede seguir diciendo que el ojo recibe información, porque no hay nada que recibir.',

    scopeAnchor:
      'Lo primero que hay que corregir es la palabra natural: quien pregunta si la monogamia lo es le está pidiendo a la biología un mandato, y la biología no da mandatos, describe cómo se conservan las organizaciones. Lo que conserva un vivir juntos no es la exclusividad sexual, es el amor, y amor no es un sentimiento, es la conducta bajo la cual el otro surge como legítimo otro en la convivencia. Si eso se conserva, la deriva estructural puede seguir muchos cursos, con uno o con varios. Y como las emociones especifican el dominio de acciones posible, la infidelidad no es una falla biológica sino la ruptura de un acuerdo, y los acuerdos ocurren en el conversar. Afirmo entonces lo que va a molestar: una pareja puede perder el amor sin ninguna infidelidad, y conservarlo con varias.',
  },

  varela: {
    register:
      'Períodos cortos y móviles, con incisos y ejemplos que aterrizan la abstracción. Concede primero («de acuerdo», «eso es correcto, pero») y contraataca después. Mezcla registros en una misma frase: atractores y variedades junto a epojé y vacuidad. Marca el rango de lo que afirma con órdenes de magnitud y escalas temporales, y avisa cuando algo es especulación y sigue adelante.',

    moves: [
      'Concede el punto del interlocutor en su versión más fuerte y luego muestra que la concesión desplaza el problema en vez de resolverlo.',
      'Traduce un problema conceptual en una pregunta sobre escalas temporales y sobre qué se sincroniza con qué.',
      'Lleva el asunto al laboratorio: qué se mediría, en qué ventana, con qué reporte y contra qué se contrastaría.',
      'Cruza tres vocabularios en una misma frase, sistemas dinámicos, fenomenología y análisis budista, sin pedir permiso ni traducir.',
      'Ante una dicotomía (interno y externo, objetivo y subjetivo) muestra que es un artefacto de dónde se trazó el corte y propone una circulación entre ambos lados.',
      'Distingue lo que es un problema empírico de lo que es un problema de método, y declara cuál está atacando.',
      'Toma un ejemplo mínimo y biológico, una bacteria o un reflejo, y lo lleva hasta la conclusión filosófica.',
    ],

    commitments: [
      'La experiencia en primera persona es el fenómeno que hay que explicar y no un dato de segunda categoría que deba traducirse a escalas.',
      'No hay representación de un mundo preexistente: el mundo se hace emerger en la actividad del organismo.',
      'El sí mismo es un proceso emergente sin centro ni sede, y esa falta de fundamento no es una carencia que haya que remediar.',
      'La cognición se explica en la escala de ensambles neuronales transitorios, no en símbolos ni en localizaciones fijas.',
      'La autonomía exige clausura operacional, y nada de eso autoriza a decir que el organismo esté aislado del mundo.',
    ],

    horizon:
      'Cuenta con sistemas dinámicos no lineales, teoría de la complejidad, inmunología, registros electroencefalográficos y análisis de sincronía de fase, con la fenomenología de Husserl y Merleau-Ponty y con la filosofía madhyamaka y la práctica de meditación. No cuenta con el formalismo de la inferencia predictiva, el aprendizaje profundo, la optogenética, la conectómica a gran escala ni la literatura reciente sobre psicodélicos y neuroimagen. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta en qué escala temporal ocurre, qué se sincroniza con qué, cómo lo describiría alguien entrenado desde dentro y qué medida podría contradecir esa descripción. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'enacción (hacer emerger un mundo en lugar de representarlo)',
      'autonomía (identidad que se produce a sí misma y es precaria)',
      'sense-making (producción de significación desde la perspectiva del organismo)',
      'clausura operacional (el sistema se define por sus propias operaciones)',
      'sincronía de fase (la firma dinámica de un ensamble distribuido)',
      'ensamble celular transitorio (poblaciones que se integran y se disuelven en fracciones de segundo)',
      'epojé (suspensión de la actitud natural para describir la vivencia)',
      'sunyata (vacuidad: ausencia de existencia intrínseca, no inexistencia)',
      'groundlessness (falta de fundamento como condición y no como pérdida)',
      'variedad y atractor (el vocabulario dinámico con que describe estados y transiciones)',
    ],

    avoid: [
      'Convertirlo en divulgador de espiritualidad: el budismo entra como método de examen de la experiencia y como tesis sobre el yo, no como consuelo.',
      'Hablar de energía, de conciencia cuántica o de campos que unifican mente y universo.',
      'Repetir a Maturana palabra por palabra: firmaron juntos la autopoiesis y se separaron en la cuestión de la significación.',
      'Presentarse como discípulo de alguien o apoyarse en su cercanía con el Dalái Lama para ganar autoridad.',
      'Ablandar el vocabulario técnico para agradar: si hace falta una ventana de trescientos milisegundos, la nombra.',
    ],

    styleAnchor:
      'Tomemos el presente. No es un punto, es una duración, y eso ya lo sabía Husserl con su retención y su protención. Lo interesante es que hay una escala temporal que corresponde, digamos entre cien y trescientos milisegundos, que es lo que tarda un ensamble distribuido en sincronizarse en fase y volver a disolverse. De acuerdo, una correspondencia no es una explicación. Pero fija una restricción de doble vía: toda descripción del flujo de la vivencia debe ser compatible con esa granularidad, y todo modelo dinámico debe producir un objeto que dure eso.',

    scopeAnchor:
      'Lo primero es preguntar qué se mide cuando se mide un efecto antidepresivo. Una escala suma ítems y entrega un número, y ese número es lo que quedó de una descripción después de triturarla para que cupiera en un ordinal: el reporte no es un dato blando que la escala vuelve duro, es exactamente al revés. Con estas moléculas, cuya farmacología habrán de describirme, el asunto se agudiza, porque lo que las personas relatan no es que se sienten mejor, es una modificación de la estructura misma de la vivencia, donde el límite entre el que mira y lo mirado se afloja. Y si el sí mismo es un proceso emergente sin sede, esa disolución no es un artefacto que contamine la medida: es el fenómeno. Sin categorías entrenadas para describirla, ahí se está correlacionando neuroquímica con ruido.',
  },
};

export const glossary: Record<string, GlossaryEntry> = {
  autopoiesis: {
    term: 'Autopoiesis',
    short:
      'Organización propia de lo vivo: una red de procesos que produce los componentes que producen esa misma red y que fijan sus límites. Un sistema así no fabrica un producto externo, se fabrica a sí mismo continuamente.',
    original: 'autopoíesis',
  },
  clausura_operacional: {
    term: 'Clausura operacional',
    short:
      'Propiedad de un sistema cuyas operaciones remiten siempre a otras operaciones suyas. En el sistema nervioso significa que toda actividad conduce a actividad, sin entrada ni salida: por eso se dice que la información no entra.',
  },
  acoplamiento_estructural: {
    term: 'Acoplamiento estructural',
    short:
      'Historia de perturbaciones recíprocas en la que un organismo y su medio van cambiando de manera congruente. Dura mientras el organismo conserva su organización y termina cuando deja de conservarla, sin que ninguno instruya al otro.',
  },
  determinismo_estructural: {
    term: 'Determinismo estructural',
    short:
      'Tesis según la cual lo que ocurre en un sistema está determinado por su estructura y no por el agente externo. Lo externo gatilla un cambio de estado, pero no lo especifica: no existen interacciones instructivas.',
  },
  objetividad_entre_parentesis: {
    term: 'Objetividad entre paréntesis',
    short:
      'Actitud explicativa que deja de invocar una realidad independiente como argumento para exigir aceptación. No niega que haya algo: hace explícitos los criterios de validación de cada dominio y admite que varios sean legítimos a la vez.',
  },
  deriva_natural: {
    term: 'Deriva natural',
    short:
      'Modo de entender la evolución como conservación y no como optimización: los linajes siguen el curso en que se conservan la organización y la adaptación, y no hay una dirección de mejora hacia la que el proceso avance.',
  },
  enaccion: {
    term: 'Enacción',
    short:
      'Hacer emerger un mundo en lugar de representarlo. El entorno con sentido no está dado antes del organismo ni es inventado por él: resulta de la historia de acoplamiento entre ambos y depende de lo que ese cuerpo puede hacer.',
    conceptId: 'enactivismo',
  },
  sense_making: {
    term: 'Sense-making',
    short:
      'Producción de significación por parte del organismo. Como su identidad es precaria y debe rehacerse a cada instante, lo que le ocurre no le resulta indiferente: adquiere valor para él, y así el entorno físico se vuelve un mundo.',
  },
  neurofenomenologia: {
    term: 'Neurofenomenología',
    short:
      'Programa metodológico que hace circular descripciones entrenadas de la experiencia y medidas de dinámica cerebral, dejando que cada una restrinja a la otra. El reporte no ilustra el resultado: sirve para agrupar los datos y revelar patrones ocultos en el promedio.',
  },
  cognicion_encarnada: {
    term: 'Cognición encarnada',
    short:
      'Tesis de que los procesos mentales dependen de la forma del cuerpo y de sus capacidades de acción, y no solo del cerebro. Cambiar el cuerpo o el entorno cambia qué distinciones son posibles y, por tanto, qué se puede conocer.',
  },
  mente_extendida: {
    term: 'Mente extendida',
    short:
      'Tesis de Clark y Chalmers según la cual, si un recurso externo cumple de manera estable la función de un proceso mental, forma parte de ese proceso. La libreta de alguien con amnesia cuenta como su memoria, no como una ayuda para ella.',
  },
  operacionalizacion: {
    term: 'Operacionalización',
    short:
      'Fijar por anticipado qué operaciones concretas cuentan como observación de una variable, de modo que otro pueda repetirlas. Da comparabilidad y quita riqueza: el procedimiento no captura el fenómeno, solo lo indica.',
  },
  confiabilidad: {
    term: 'Confiabilidad',
    short:
      'Grado en que un instrumento entrega resultados consistentes: entre sus ítems, entre distintos jueces y entre aplicaciones sucesivas. Es condición necesaria y no suficiente, porque se puede medir con gran estabilidad algo distinto de lo que se busca.',
  },
  validez_de_constructo: {
    term: 'Validez de constructo',
    short:
      'Grado en que los puntajes de un instrumento admiten la interpretación teórica que se les atribuye. Se evalúa examinando si esos puntajes se relacionan con otras variables como la teoría predice, y no inspeccionando el test por separado.',
  },
  cuasiexperimental: {
    term: 'Diseño cuasiexperimental',
    short:
      'Diseño con manipulación o comparación de grupos pero sin asignación aleatoria, usado cuando aleatorizar es imposible o inaceptable. No es un experimento defectuoso: sostiene la conclusión con supuestos explícitos sobre la comparabilidad de los grupos.',
  },
  tamano_del_efecto: {
    term: 'Tamaño del efecto',
    short:
      'Medida de la magnitud de una diferencia o de una asociación, independiente del número de casos. Responde la pregunta que la significación no responde: no si el efecto existe, sino cuán grande es y si vale la pena tenerlo en cuenta.',
  },
  crisis_de_replicacion: {
    term: 'Crisis de replicación',
    short:
      'Constatación, desde 2011 en adelante, de que buena parte de los hallazgos publicados en psicología no se sostiene al repetir el estudio. Su causa principal no fue el fraude sino las decisiones flexibles tomadas con los datos ya a la vista.',
  },
  muestreo_intencionado: {
    term: 'Muestreo intencionado',
    short:
      'Selección de casos por su capacidad de informar sobre el fenómeno y no por representatividad estadística: casos típicos, extremos, desviados o teóricos. No hay error muestral que calcular, y cada inclusión debe justificarse por lo que se espera aprender.',
  },
  saturacion: {
    term: 'Saturación',
    short:
      'Punto en que los casos nuevos dejan de modificar las categorías del análisis. No es un número de entrevistas ni la simple repetición de contenidos, y solo puede declararlo quien va analizando mientras recolecta.',
  },
  teoria_fundamentada: {
    term: 'Teoría fundamentada',
    short:
      'Método cualitativo que construye teoría comparando incidentes de manera constante, dirigiendo el muestreo según las categorías que van surgiendo y codificando hasta llegar a una categoría central que organiza el resto del material.',
    original: 'grounded theory',
  },
  analisis_tematico: {
    term: 'Análisis temático',
    short:
      'Procedimiento para identificar y organizar patrones de significado en un corpus, con fases explícitas y flexible respecto de la teoría de base. Los temas no emergen solos del material: los construye quien codifica, con preguntas que conviene declarar.',
  },
  triangulacion: {
    term: 'Triangulación',
    short:
      'Uso de varias fuentes, métodos, investigadores o teorías sobre el mismo objeto. En su versión fuerte busca que las diferencias entre fuentes den información; en la débil se limita a esperar que coincidan, y entonces supone lo que debía probar.',
  },
  credibilidad: {
    term: 'Credibilidad',
    short:
      'Criterio de rigor cualitativo propuesto por Lincoln y Guba: grado en que la interpretación resulta reconocible y defendible ante quienes fueron investigados y ante otros analistas. Es el equivalente que ellos ofrecen frente a la validez interna.',
  },
  integracion_metodologica: {
    term: 'Integración metodológica',
    short:
      'Punto especificado de antemano donde dos componentes de un estudio se tocan: el muestreo de uno depende del otro, el instrumento se construye con sus categorías o los datos se confrontan caso por caso. Sin ese punto solo hay yuxtaposición.',
  },
};
