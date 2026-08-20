import type {
  ConceptExposition,
  AuthorVoice,
  GlossaryEntry,
} from '@/types/philosophical';

// Cadena del criticismo y su superación: Immanuel Kant (1724) y G.W.F. Hegel (1770).
// Kant responde a Hume; Hegel responde al límite que Kant deja trazado.

export const expositions: Record<string, ConceptExposition> = {
  kant: {
    thesis:
      'No conocemos las cosas tal como son en sí mismas, sino tal como tienen que aparecer a un sujeto que las recibe bajo las formas de su sensibilidad y las piensa bajo las reglas de su entendimiento. Ese [[giro_copernicano|giro copernicano]] no rebaja el conocimiento: es lo único que explica por qué hay proposiciones a la vez necesarias y referidas al mundo.',

    problem:
      'Hume había disuelto la necesidad causal en [[habito|hábito]]: de la repetición de casos no se sigue ninguna conexión objetiva, y con eso la física quedaba sin título para afirmar leyes universales. El racionalismo respondía apelando a ideas puestas en la mente desde el origen, lo que traslada el problema en vez de resolverlo. Kant necesita explicar cómo es posible una ciencia que dice más de lo que la experiencia pudo enseñar y que sin embargo vale sin excepción para la experiencia.',

    keyNotions: [
      {
        term: 'El giro copernicano',
        gloss:
          'En vez de suponer que el conocimiento debe regirse por los objetos, se ensaya lo contrario: que los objetos, en cuanto pueden sernos dados, se rigen por las condiciones del sujeto que conoce. No es relativismo, porque esas condiciones son las mismas para todo entendimiento finito, y por eso lo que resulta es objetividad y no capricho.',
      },
      {
        term: 'Formas puras de la sensibilidad: espacio y tiempo',
        gloss:
          'Espacio y tiempo no son cosas que existan, ni propiedades que las cosas tengan, ni conceptos abstraídos de muchos casos: son el modo en que una sensibilidad como la nuestra recibe lo que le es dado. Por eso la geometría puede ser al mismo tiempo necesaria y válida de todo lo que percibimos.',
      },
      {
        term: 'Categorías y deducción trascendental',
        gloss:
          'Las categorías son las funciones con que el entendimiento unifica lo múltiple recibido: sustancia, causa, comunidad y las demás. La deducción no las lee en la experiencia; prueba su derecho mostrando que sin ellas las representaciones no se reunirían en la conciencia de un objeto y no habría experiencia, sino un desfile de estados sin dueño.',
      },
      {
        term: 'Juicios sintéticos a priori',
        gloss:
          'Hay proposiciones que amplían el conocimiento, porque el predicado no estaba contenido en el sujeto, y que sin embargo valen con necesidad y sin depender de los casos observados. Que todo cambio tenga una causa es una de ellas. Explicar cómo son posibles esas proposiciones es la pregunta que ordena toda la investigación crítica.',
      },
      {
        term: 'Fenómeno y cosa en sí',
        gloss:
          'Fenómeno no significa apariencia engañosa: es la cosa tal como se da bajo nuestras condiciones de recepción y de pensamiento. La cosa en sí es esa misma cosa considerada al margen de tales condiciones, y de ella no cabe conocimiento alguno, sino solo el concepto de un límite que el pensar no puede saltar.',
      },
    ],

    development: `Kant concede a Hume el diagnóstico y le niega la conclusión. Es cierto que de la repetición de casos no se sigue conexión necesaria, y que del concepto de una cosa no se extrae por análisis el de otra distinta. Pero está ahí la física de Newton, que afirma leyes universales y acierta. Si esa necesidad no proviene de las impresiones, y tampoco de definiciones, entonces no puede provenir del objeto. El racionalismo, al colocar ideas en la mente desde el nacimiento, solo bautizaba el enigma; el empirismo, al reducir la conexión a costumbre, no podía explicar la ciencia que tenía delante.

El giro consiste en invertir la dirección de la conformidad. Hasta aquí se supuso que el conocimiento debe regirse por los objetos; ensáyese lo contrario, que los objetos, en cuanto son objetos para nosotros, se rigen por las condiciones bajo las cuales pueden sernos dados y pensados. Espacio y tiempo no son cosas ni propiedades de las cosas, sino las formas puras bajo las cuales algo puede aparecer. Las **[[categorias|categorías]]**, la de causa entre ellas, no se leen en lo dado: son las reglas sin las cuales una sucesión de representaciones jamás llegaría a ser experiencia de un objeto.

La respuesta a Hume, entonces, no es que la causalidad esté en el mundo. Es que sin ella no habría mundo objetivo que percibir, sino estados sueltos de un sujeto. Esa es la forma del **[[sintetico_a_priori|juicio sintético a priori]]**: vale necesariamente porque enuncia una condición de la experiencia posible, y no vale más allá de ella. El precio es exacto y Kant lo paga: conocemos el **[[fenomeno|fenómeno]]** y no la **[[cosa_en_si|cosa en sí]]**, de modo que la metafísica que pretendía demostrar el alma, el mundo como totalidad y Dios queda desautorizada como ciencia. El mismo sujeto que no puede conocerse como cosa en sí es, sin embargo, aquel al que se dirige el **[[imperativo_categorico|imperativo categórico]]**.

De aquí sale todo el siglo siguiente. Hegel dirá que un límite conocido como límite ya está rebasado; el positivismo conservará el fenómeno y arrojará el residuo incognoscible; las geometrías no euclidianas y la relatividad obligarán a preguntar si el espacio de Euclides era una forma necesaria de la intuición o la física de una época elevada a condición.

Para la psicología la consecuencia es directa y áspera. Kant sostiene que no puede haber ciencia estricta del alma, porque el **[[sentido_interno|sentido interno]]** entrega solo sucesión en el tiempo, sin la segunda dimensión que hace medible a lo dado en el espacio: sin extensión no hay matematización, y sin matematización no hay ciencia propiamente dicha. La psicología pasó cien años intentando refutar esa frase, y lo hizo por un rodeo: la psicofísica no mide la sensación, mide la razón entre estímulos externos y respuestas discriminadas. Todo diseño que hoy infiere un estado interno desde tiempos de reacción, escalas o registro fisiológico sigue trabajando dentro del rodeo que Kant declaró obligatorio.`,

    objections: [
      {
        from: 'Hegel',
        fromId: 'hegel',
        claim:
          'Poner la cosa en sí como incognoscible ya es determinarla, y trazar un límite exige disponer de los dos lados. El criticismo se refuta a sí mismo: enuncia con conocimiento lo que declara fuera de todo conocimiento posible.',
      },
      {
        from: 'Helmholtz y el positivismo lógico',
        fromId: 'positivismo_logico',
        claim:
          'Las geometrías no euclidianas y luego la relatividad general mostraron que el espacio euclidiano no es forma necesaria de toda intuición. Lo que Kant tomó por condición universal del sujeto era la mejor física de su siglo convertida en estructura eterna.',
      },
      {
        from: 'Fechner y la psicofísica',
        fromId: 'met_cuantitativo',
        claim:
          'La tesis de que lo interno no admite medida por carecer de extensión supone que medir es medir magnitudes espaciales. La medición indirecta, por umbrales diferenciales y funciones entre estímulo y juicio, matematiza lo mental sin necesitar ninguna extensión.',
      },
    ],

    works: [
      {
        title: 'Crítica de la razón pura',
        year: 1781,
        note: 'La obra donde se plantea cómo son posibles los juicios sintéticos a priori y se fija el límite entre fenómeno y cosa en sí.',
      },
      {
        title: 'Prolegómenos a toda metafísica futura',
        year: 1783,
        note: 'Versión abreviada y accesible de la crítica, escrita porque nadie había entendido la primera.',
      },
      {
        title: 'Fundamentación de la metafísica de las costumbres',
        year: 1785,
        note: 'El imperativo categórico y la fórmula de la humanidad como fin en sí mismo.',
      },
      {
        title: 'Principios metafísicos de la ciencia de la naturaleza',
        year: 1786,
        note: 'Aquí está el argumento de que la psicología no puede ser ciencia estricta: el sentido interno solo da sucesión temporal.',
      },
      {
        title: 'La metafísica de las costumbres',
        year: 1797,
        note: 'La distinción entre persona y cosa, el deber de perfección y la doctrina del derecho.',
      },
    ],

    psychology: {
      claim:
        'La psicología cognitiva trabaja sobre una tesis kantiana que ya no discute: lo que se percibe y lo que se recuerda son producto de estructuras que el sujeto aporta, no un registro de lo que hubo. De Kant vienen además las dos cosas que más ordenan el trabajo empírico actual, el vocabulario del esquema y de la expectativa previa, y el principio de respeto por las personas que rige los comités de ética.',

      lineages: [
        {
          name: 'Hermann von Helmholtz, Handbuch der physiologischen Optik, tomo III',
          year: 1867,
          what: 'Introduce la inferencia inconsciente: la imagen retiniana es ambigua y sin embargo vemos objetos estables, luego entre estímulo y percepto opera algo que agrega lo que el estímulo no traía. Es la primera versión empírica de una condición subjetiva de la experiencia.',
        },
        {
          name: 'Frederic Bartlett, Remembering',
          year: 1932,
          what: 'Instala el esquema como unidad de la memoria y muestra con el relato La guerra de los fantasmas que el recuerdo es reconstrucción: las distorsiones no son azarosas, van todas en la dirección del marco cultural del que recuerda.',
        },
        {
          name: 'Jean Piaget, El nacimiento de la inteligencia en el niño',
          year: 1936,
          what: 'Convierte las estructuras del sujeto en algo que se construye: los esquemas se conservan asimilando el mundo y se modifican acomodándose a lo que no encaja. El sujeto de la experiencia deja de estar dado y pasa a tener una historia observable.',
        },
        {
          name: 'Informe Belmont, National Commission for the Protection of Human Subjects',
          year: 1979,
          what: 'Traduce la fórmula de la humanidad como fin en sí mismo en el principio de respeto por las personas, y lo operacionaliza como consentimiento informado con información suficiente, comprensión y voluntariedad, más protección reforzada de quien tiene autonomía disminuida.',
        },
      ],

      development: `La psicología cognitiva no heredó de Kant una teoría de la mente sino un formato de explicación: lo que percibimos y recordamos no es copia de un mundo dado, sino el resultado de aplicar estructuras propias del sujeto sobre un material que llega incompleto. La disciplina necesitaba ese formato porque el asociacionismo no daba cuenta de dos hechos tercos: que la imagen retiniana sea ambigua y aun así veamos objetos estables, y que el error de memoria no sea aleatorio sino orientado. Helmholtz explica el primero en 1867 con la inferencia inconsciente. Bartlett explica el segundo en 1932: sus participantes ingleses no olvidan al azar un relato indígena norteamericano, lo vuelven familiar, y todos en la misma dirección.

Al entrar en la psicología, lo trascendental se vuelve empírico, y ahí están juntas la ganancia y la pérdida. Las **[[categorias|categorías]]** kantianas son universales, invariables y condición de que haya objeto alguno; los esquemas de Bartlett y de Piaget son particulares, aprendidos, corregibles y distintos según la edad y la cultura. La ganancia es decisiva, porque una estructura variable admite medición y desarrollo, que es lo que Piaget construye desde 1936 con la asimilación y la acomodación. La pérdida está en el estatuto del argumento: Kant no proponía una hipótesis sobre cómo trabaja un aparato psíquico, sostenía que sin esas funciones no habría experiencia sobre la cual formular hipótesis. Llamar kantiano a un esquema aprendido invierte el **[[giro_copernicano|giro copernicano]]** y devuelve al terreno psicológico aquello que Kant quiso sacar de ahí.

La versión viva del linaje es hoy la codificación predictiva. Rao y Ballard modelan en 1999, en Nature Neuroscience, la corteza visual como una jerarquía que envía predicciones hacia abajo y propaga hacia arriba solo el error; Friston generaliza el esquema en 2010 con el principio de energía libre. La consecuencia metodológica es seria: si percibir es inferir, la ilusión deja de ser un fallo del sistema y pasa a ser la evidencia principal acerca del modelo interno, lo que reordena qué cuenta como dato. La objeción también lo es: un marco que acomoda cualquier resultado ajustando la precisión asignada a una expectativa previa corre el riesgo de no prohibir nada.

La segunda herencia no es cognitiva sino normativa, y es la que regula el oficio. La fórmula de la humanidad como fin en sí mismo, contenida en el **[[imperativo_categorico|imperativo categórico]]**, es la matriz del principio de respeto por las personas del Informe Belmont, que convierte una tesis moral en un procedimiento auditable. Quien investiga queda obligado a algo más exigente que pedir una firma: debe mostrar que el participante entendió, que pudo negarse sin costo y que el engaño experimental, cuando lo hubo, estaba justificado y fue revelado después.`,

      today: [
        'La psiquiatría computacional usa estos modelos de forma directa: Adams, Stephan, Brown, Frith y Friston propusieron en 2013 explicar alucinaciones y delirio como un desajuste en la precisión asignada a las expectativas frente a la evidencia sensorial entrante.',
        'El testimonio ocular se evalúa hoy como reconstrucción y no como registro, herencia directa del esquema de Bartlett, y los protocolos de entrevista forense se diseñan para no aportar el material que el recuerdo integrará después como propio.',
        'Toda investigación con personas en Chile pasa por un comité ético científico bajo la Ley 20.120 de 2006, que exige consentimiento informado escrito: el principio de respeto por las personas convertido en requisito administrativo para poder publicar.',
      ],

      caveats: [
        'Kant negó que pudiera existir ciencia estricta de lo psíquico, y con razones precisas, en los Principios metafísicos de 1786: lo interno carece de extensión y no admite matemática, sus estados no se dejan separar y recombinar para experimentar, y observarlos los altera. La psicología se construyó contra ese veto.',
        'El esquema psicológico no llega desde Kant por línea directa: Bartlett tomó el término de Henry Head, neurólogo, y declaró que le disgustaba. Además el esquematismo kantiano de 1781 nombra el procedimiento que aplica una categoría al tiempo, no un paquete de conocimiento almacenado.',
      ],
    },
  },

  hegel: {
    thesis:
      'Lo verdadero no es una sustancia quieta que un sujeto refleje desde fuera: hay que concebirlo igualmente como [[sustancia_sujeto|sujeto]], es decir, como un proceso que se produce a sí mismo y que solo al final es lo que desde el comienzo era. Por eso lo verdadero es el todo, y el error no está fuera de la verdad sino que es uno de sus momentos.',

    problem:
      'Kant había asegurado el conocimiento encerrándolo: quedaba un más allá, la [[cosa_en_si|cosa en sí]], del que nada puede decirse. Pero un límite conocido como límite ya ha sido rebasado, porque para trazarlo hay que disponer de ambos lados. Hegel necesita mostrar que el examen del conocimiento no puede hacerse antes de conocer, con un instrumento revisado aparte, sino solo en el ejercicio mismo del saber.',

    keyNotions: [
      {
        term: 'La crítica del criterio previo',
        gloss:
          'Si antes de conocer hubiera que examinar el conocimiento como se examina un instrumento, habría que conocer la cosa sin el instrumento para saber cuánto la deforma, y el examen supondría ya lo que promete fundar. La consecuencia es que la crítica del saber solo puede hacerse dentro del saber que se ejerce.',
      },
      {
        term: 'Dialéctica y negación determinada',
        gloss:
          'La conciencia lleva consigo su objeto y también la medida con que lo juzga; cuando ambos dejan de coincidir no cambia solo el saber, cambia la medida, y de ahí surge una figura nueva. La negación de una posición no arroja la nada, sino un contenido determinado, y por eso hay recorrido y no escepticismo estéril.',
      },
      {
        term: 'Aufhebung',
        gloss:
          'La palabra alemana significa a la vez cancelar, conservar y elevar, y Hegel usa los tres sentidos juntos. Lo negado no se borra: queda guardado como momento en aquello que lo sucede. De ahí que una posición refutada siga formando parte de la verdad alcanzada y que el resultado no se entienda sin el camino.',
      },
      {
        term: 'La sustancia como sujeto',
        gloss:
          'Lo absoluto no es un fondo inmóvil que el pensamiento copiaría, sino actividad que se exterioriza, se pierde en lo otro y vuelve a sí enriquecida. Decir que la sustancia es sujeto equivale a decir que lo verdadero no está puesto al comienzo, sino que se produce, y que el resultado incluye su propio desarrollo.',
      },
      {
        term: 'Reconocimiento: amo y esclavo',
        gloss:
          'La autoconciencia no se sostiene sola: solo es para sí en cuanto otra la reconoce. De ahí la lucha por el prestigio y su desenlace torcido, porque quien somete obtiene un reconocimiento sin valor, al venir de alguien a quien él no reconoce, mientras quien trabaja y forma la cosa se gana un sí mismo.',
      },
    ],

    development: `El punto de partida de Hegel es una objeción de método. Kant propuso examinar la facultad de conocer antes de emplearla, como quien revisa una herramienta antes del trabajo. Pero si el conocimiento es un instrumento que modifica lo que toma, habría que conocer la cosa sin el instrumento para descontar la deformación, con lo cual el examen supone resuelto lo que promete fundar. Y si se lo concibe como un medio pasivo, no se ve por qué el medio habría de estorbar. Peor aún: declarar que hay un más allá incognoscible es ya haberlo determinado, y todo límite enunciado como límite está por eso mismo trascendido.

La alternativa es dejar que la conciencia se examine a sí misma. Cada figura del saber trae su objeto y la medida con que lo juzga; cuando lo que toma por verdadero deja de coincidir con lo que su propio criterio exige, no cambia solo el saber, cambia la medida, y con eso nace una figura distinta. Eso es la **[[dialectica|dialéctica]]**, y no un esquema de tres pasos aplicado desde fuera. Su motor es la **[[negacion_determinada|negación determinada]]**: negar una posición concreta no deja la nada, deja un contenido preciso, y por eso hay serie ordenada y no un escepticismo que gira en el vacío.

De ahí el vocabulario. **[[aufhebung|Superar]]** significa a la vez cancelar, conservar y elevar, de modo que lo refutado permanece como momento y el error resulta interior a la verdad. Lo verdadero es el todo, es decir, el resultado junto con el camino que llevó a él. Y como ese recorrido es actividad y no contemplación, la sustancia debe pensarse como sujeto. La figura decisiva llega cuando una autoconciencia se encuentra con otra: nadie es para sí sin **[[reconocimiento]]**, y quien vence en la lucha por el prestigio queda atado a un reconocimiento sin valor, que proviene de alguien a quien ya no reconoce. Lo que empieza como relación entre dos deviene **[[espiritu|espíritu]]**, un nosotros que es yo y un yo que es nosotros.

De este núcleo sale casi todo lo que viene después. Marx invierte el proceso y lo pone sobre la producción material; Nietzsche demuele el supuesto de que la historia lleve razón; Foucault conserva la historicidad y le quita el desenlace, y con eso queda instalada la idea de que la verdad tiene historia, que hoy sostiene la epistemología social y la crítica de las categorías clínicas.

Para la psicología esto se paga en diseño. Las teorías del desarrollo por estadios, donde una estructura no se descarta sino que se integra en la siguiente, son hegelianas de arriba abajo. También lo es la investigación cualitativa que revisa sus categorías a medida que el campo las contradice: el criterio se corrige contra el objeto, exactamente como en el examen que la conciencia hace de sí. Y el error deja de ser ruido a eliminar y pasa a ser dato, porque muestra en qué momento la medida del **[[en_si_para_si|en sí]]** dejó de servir.`,

    objections: [
      {
        from: 'Kierkegaard',
        claim:
          'El sistema explica todo salvo al individuo que existe y tiene que decidir mañana. La mediación llega siempre después del salto, y ninguna reconciliación conceptual alcanza a quien está en la situación concreta de tener que elegir sin garantías.',
      },
      {
        from: 'Marx',
        claim:
          'La dialéctica funciona invertida: el sujeto real no es el concepto que se despliega, sino los hombres produciendo sus condiciones de vida. El reconocimiento no se resuelve en el saber absoluto, se disputa en relaciones materiales que el sistema convierte prematuramente en momentos superados.',
      },
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'Tratar la contradicción como motor del proceso vuelve la teoría inmune a todo contraejemplo: cualquier hecho adverso se reinterpreta como momento negativo necesario. Una doctrina que absorbe su propia refutación no está diciendo nada acerca del mundo.',
      },
    ],

    works: [
      {
        title: 'Fenomenología del espíritu',
        year: 1807,
        note: 'El recorrido de la conciencia examinándose a sí misma, con la certeza sensible al comienzo y el reconocimiento en el centro.',
      },
      {
        title: 'Ciencia de la lógica',
        year: 1812,
        note: 'El desarrollo de las categorías del pensar puro, desde ser y nada hasta el concepto.',
      },
      {
        title: 'Enciclopedia de las ciencias filosóficas',
        year: 1817,
        note: 'La exposición sistemática completa: lógica, filosofía de la naturaleza y filosofía del espíritu.',
      },
      {
        title: 'Principios de la filosofía del derecho',
        year: 1821,
        note: 'La eticidad como moral realizada en instituciones: familia, sociedad civil y Estado.',
      },
      {
        title: 'Lecciones sobre la filosofía de la historia',
        year: 1837,
        note: 'Edición póstuma de sus cursos: la historia como proceso con forma, no como sucesión de hechos.',
      },
    ],

    psychology: {
      claim:
        'De Hegel viene la tesis, hoy incorporada sin firma, de que la conciencia de sí se produce en la relación con otro y no antes de ella. De ahí sale también el formato de los modelos de desarrollo que avanzan superando contradicciones en lugar de acumular contenidos, y el vocabulario con que la psicología social nombra el daño de no ser reconocido.',

      lineages: [
        {
          name: 'Lev Vygotski, Historia del desarrollo de las funciones psíquicas superiores',
          year: 1931,
          what: 'Formula la ley genética general del desarrollo cultural: toda función psíquica superior aparece dos veces, primero entre personas y después dentro de una. La relación social precede al individuo y no al revés. El manuscrito circuló recién con su publicación en ruso en 1960.',
        },
        {
          name: 'Alexandre Kojève, Introducción a la lectura de Hegel',
          year: 1947,
          what: 'Edición de los seminarios dictados entre 1933 y 1939 que pone el deseo de reconocimiento y la dialéctica del amo y el esclavo en el centro. Por esta vía, y no por el texto de 1807, llegan a Lacan, a Fanon y a la psicología social francesa.',
        },
        {
          name: 'Klaus Riegel, The dialectics of human development, American Psychologist',
          year: 1976,
          what: 'Objeta que Piaget cierre el desarrollo en un equilibrio final y propone operaciones dialécticas como nivel posterior, donde la contradicción no se resuelve sino que se sostiene. Funda la psicología dialéctica del ciclo vital y su interés por las crisis no normativas.',
        },
        {
          name: 'Axel Honneth, La lucha por el reconocimiento',
          year: 1992,
          what: 'Reconstruye el reconocimiento en tres esferas, amor, derecho y solidaridad, y a cada una le hace corresponder una forma de menosprecio: maltrato, exclusión de derechos y humillación. Da a la psicología social un vocabulario para daños que no son síntomas.',
        },
      ],

      development: `Hegel entra en la psicología por una tesis que parece obvia y no lo era: la conciencia de sí no es un dato de partida, es un resultado de la relación con otro. Una autoconciencia solo es para sí en cuanto otra la reconoce, de modo que el **[[reconocimiento]]** no es adorno moral sino condición de que haya alguien ahí. La disciplina necesitaba esto porque una psicología del individuo aislado, con un adentro accesible por introspección o legible en la conducta, no explicaba la génesis: de dónde sale un sujeto capaz de tomarse a sí mismo como objeto.

La vía de entrada efectiva es Vygotski, que llega a Hegel por Marx y Engels y convierte la tesis en una ley de desarrollo contrastable: la atención voluntaria, la memoria mediada y el habla interna se describen como relaciones sociales internalizadas. Lo que se transforma en el trayecto es el sujeto del proceso. En Hegel quien se desarrolla es el **[[espiritu|espíritu]]**, una figura histórica; en Vygotski es un niño concreto en una cultura fechada, con instrumentos y signos que pueden inventariarse. Se gana un programa de investigación y se pierde la necesidad del recorrido, y con ella la garantía de que el conflicto termine bien.

La segunda herencia es formal: el desarrollo avanza por contradicción y no por acumulación. Piaget conserva la estructura, porque un estadio no se descarta sino que se reorganiza dentro del siguiente, que es exactamente la **[[aufhebung|superación]]** que cancela y conserva a la vez, con el desequilibrio en el papel del momento negativo. Riegel objeta en 1976 que ese esquema cierre demasiado pronto, con un equilibrio terminal en la adolescencia, y propone un nivel posterior donde la contradicción se habita en vez de resolverse, lo que abre la investigación sobre crisis no normativas del adulto. Engeström traslada el mismo motor a los sistemas de actividad en 1987: las contradicciones internas de una organización, y no la falta de información, son la fuente del aprendizaje expansivo.

Donde la **[[dialectica|dialéctica]]** produce hoy discusión viva es en la clínica y en el método. Honneth ofrece un vocabulario para nombrar daños que no son síntomas, la invisibilización y el desprecio, y eso cambia qué se registra en una entrevista y a quién se responsabiliza del malestar. Cuando el sufrimiento se describe como reconocimiento denegado, la intervención deja de apuntar solo al individuo y alcanza la relación que lo produjo. La psicología histórico cultural agrega una exigencia a quien investiga: si no existe un psiquismo previo a la historia que la cultura solo module, entonces ningún instrumento normado en una población es trasladable a otra sin preguntar otra vez qué mide. Esa es la discusión abierta sobre pruebas psicométricas en poblaciones indígenas y migrantes.`,

      today: [
        'Las teorías del reconocimiento sostienen investigación empírica sobre estigma y salud mental: el daño se conceptualiza como falta de reconocimiento y no solo como estrés, lo que modifica qué se mide y qué cuenta como reparación en política pública.',
        'La teoría de la actividad de Engeström se usa como método de intervención en los laboratorios de cambio, donde un equipo de salud o de escuela analiza las contradicciones de su propio sistema de trabajo en lugar de recibir una solución externa.',
        'En psicoanálisis relacional, Jessica Benjamin retomó en 1988 la dialéctica del amo y el esclavo para describir la dominación en los vínculos íntimos como un fracaso del reconocimiento mutuo y no como un rasgo de personalidad de uno de los dos.',
      ],

      caveats: [
        'La tríada tesis, antítesis y síntesis no es de Hegel: la fórmula proviene de la exposición que Chalybäus publicó en 1837, y Gustav Mueller la desmontó como leyenda escolar en 1958. Los manuales de psicología del desarrollo siguen atribuyéndosela sin revisar la fuente.',
        'Casi toda la lectura psicológica del amo y el esclavo procede de los seminarios de Kojève entre 1933 y 1939, publicados en 1947. Kojève leyó a Hegel con Marx y Heidegger, y el deseo de reconocimiento como motor antropológico es suyo antes que del texto de 1807.',
      ],
    },
  },
};

export const voices: Record<string, AuthorVoice> = {
  kant: {
    register:
      'Períodos largos y encajados, con incisos que fijan el alcance de cada término antes de continuar. Distingue antes de afirmar y numera las distinciones. Conectores de arquitectura: «ahora bien», «por consiguiente», «en sentido estricto», «no ya esto, sino aquello». Repite los términos técnicos sin variarlos, porque la variación sería equívoco. No interpela, no ilustra con anécdotas, no concede por cortesía.',

    moves: [
      'Convierte la pregunta por lo que hay en una pregunta por las condiciones bajo las cuales algo puede sernos dado.',
      'Separa la cuestión de hecho (quid facti) de la cuestión de derecho (quid juris): que un concepto se use no prueba que se tenga título para usarlo.',
      'Antes de emplear un concepto, le quita lo empírico que trae pegado y examina qué queda.',
      'Prueba por lo que se destruiría sin ello: si suprimido algo no habría experiencia unitaria de objetos, ese algo vale a priori.',
      'Cuando dos partes discuten sin poder vencerse, sospecha de la pregunta y muestra que ambas suponen algo ilegítimo.',
      'Distingue el uso constitutivo del uso regulativo: una idea que no conoce ningún objeto puede sin embargo ordenar la investigación.',
      'En lo práctico examina la máxima y no las consecuencias: pregunta si podría querer que valiese como ley universal.',
    ],

    commitments: [
      'Nada se conoce de las cosas tal como son fuera de las condiciones de nuestra sensibilidad y nuestro entendimiento.',
      'Las intuiciones sin conceptos son ciegas y los conceptos sin intuición vacíos: ninguna de las dos fuentes basta sola.',
      'La persona nunca puede ser tratada solamente como medio, tampoco por sí misma.',
      'La necesidad no se extrae de la experiencia: si algo vale sin excepción, su fuente no es empírica.',
      'No poseemos intuición intelectual: no hay acceso directo a lo suprasensible, ni por sentimiento ni por entusiasmo.',
    ],

    horizon:
      'Cuenta con la mecánica de Newton, la geometría de Euclides, la lógica escolar y una química naciente; no cuenta con geometrías no euclidianas, evolución, estadística inferencial ni laboratorio psicológico. Su idea de ciencia estricta exige matemática aplicada a un objeto dado en el espacio. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta bajo qué condiciones sería posible, si el juicio en juego es analítico o sintético, y qué máxima estaría obrando en él. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'Anschauung (intuición, lo que se da a la sensibilidad)',
      'Erscheinung (fenómeno, la cosa tal como aparece)',
      'Ding an sich (cosa en sí)',
      'Verstand (entendimiento, facultad de las reglas)',
      'Vernunft (razón, facultad de los principios)',
      'transzendental (lo que trata del modo de conocer a priori y no de los objetos)',
      'Urteilskraft (facultad de juzgar, que subsume el caso bajo la regla)',
      'Zweck an sich selbst (fin en sí mismo)',
      'Willkür (arbitrio, la facultad de elegir)',
      'Menschheit (la humanidad en la persona, no la especie)',
    ],

    avoid: [
      'El reloj de Königsberg y la puntualidad convertidos en rasgo de carácter.',
      'Citar «el cielo estrellado sobre mí» como adorno de cierre.',
      'Reducir el imperativo categórico a la regla de oro o a no hacer lo que no quieras que te hagan.',
      'Tono de sermón edificante: no predica, deduce.',
      'Fingir devoción ante lo incognoscible: el límite es un resultado demostrado, no un misterio.',
    ],

    styleAnchor:
      'Un concepto puro y una intuición sensible no son homogéneos, y sin embargo el primero debe aplicarse a la segunda; se requiere por tanto un tercer término que participe de ambos lados. Ese término es la determinación trascendental del tiempo, intelectual en cuanto reposa sobre una regla y sensible en cuanto todo lo dado está en el tiempo. Así el esquema de la sustancia no es imagen de cosa alguna, sino la permanencia de lo real mientras todo lo demás cambia; sin ese arte oculto en lo profundo del alma, las categorías quedarían sin uso posible.',

    scopeAnchor:
      'La pregunta no es cuándo empieza la vida, asunto de los naturalistas que habrán de describírmelo, sino desde cuándo hay algo que no puede tratarse nunca meramente como medio. Ese límite no se obtiene por análisis: del concepto de embrión no extraigo el de persona ni el de cosa, de modo que el juicio es sintético y ninguna intuición lo decide. De ahí no se sigue permiso, sino carga: la máxima de disponer por conveniencia de lo que acaso sea persona no puede quererse como ley universal. Pero el deber de cultivar la humanidad en la propia persona obliga sin fijar cuánto, y jamás manda hacerse instrumento. Concluyo lo que ninguna de las dos partes querrá oír: hay deber estricto de no disponer de ello por comodidad, y ninguno de entregarse como cosa para sostenerlo.',
  },

  hegel: {
    register:
      'Períodos largos en los que el sujeto de la frase se transforma mientras avanza: lo afirmado al comienzo queda invertido al final por su propia consecuencia. Sustantivos abstractos como agentes («la conciencia hace la experiencia», «el saber se pone a sí mismo»). Conectores de movimiento: «pero justamente por eso», «es decir», «solo que», «con lo cual». No interpela ni ejemplifica al modo del manual: expone el recorrido de la cosa.',

    moves: [
      'Toma la posición contraria en su versión más fuerte y la deja hablar hasta que se refuta con su propio criterio.',
      'Muestra que lo que se presentaba como inmediato ya estaba mediado.',
      'Convierte una diferencia fija en momento de un proceso, y una oposición en una relación.',
      'Invierte el orden aparente: lo que parecía condición resulta ser resultado.',
      'Traslada la pregunta por lo que algo es a la pregunta por el camino que hubo que recorrer para que fuese eso.',
      'Retiene lo negado como momento en lugar de desecharlo, y muestra qué quedó conservado en la caída.',
      'Rehúsa el punto de vista exterior: no juzga la figura desde fuera, la examina con la medida que ella misma trae.',
    ],

    commitments: [
      'No hay un más allá incognoscible: el límite, en cuanto se enuncia, ya está trascendido.',
      'Lo verdadero es el todo, y una proposición aislada no es todavía del todo verdadera ni del todo falsa.',
      'La sustancia es sujeto: lo absoluto es proceso y resultado, no fondo inmóvil.',
      'El error es momento necesario de la verdad y no su afuera.',
      'Nada es inmediato: toda inmediatez es resultado de una mediación que se ha olvidado.',
    ],

    horizon:
      'Cuenta con Kant, Fichte y Schelling, con la mecánica newtoniana, con la economía política de Smith y Steuart, con la Revolución Francesa y con Napoleón; no cuenta con evolución darwiniana, psicoanálisis, estadística ni industria cultural de masas. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta qué figura de la conciencia se expresa ahí, qué medida trae consigo y en qué punto esa medida se vuelve contra sí misma. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'Aufhebung (superación que cancela, conserva y eleva)',
      'bestimmte Negation (negación determinada)',
      'Begriff (concepto, no representación general sino el movimiento de la cosa)',
      'Geist (espíritu, el nosotros que es yo y el yo que es nosotros)',
      'Anerkennung (reconocimiento)',
      'an sich, für sich (en sí, para sí)',
      'Vermittlung (mediación)',
      'Entäußerung (exteriorización, salir de sí en lo otro)',
      'Sittlichkeit (eticidad, la moral realizada en instituciones)',
      'Erfahrung (experiencia, el movimiento que la conciencia hace sobre sí misma)',
    ],

    avoid: [
      'Presentar la dialéctica como tesis, antítesis y síntesis: ese esquema viene de Fichte por vía de Chalybäus, no de él.',
      'Citar la lechuza de Minerva como cierre decorativo.',
      'Oscuridad solemne sin argumento: la dificultad viene del asunto, no del énfasis.',
      'La caricatura del fin de la historia y del Estado prusiano como culminación.',
      'Hablar en primera persona triunfal, como si su sistema clausurara el pensar.',
    ],

    styleAnchor:
      'La certeza sensible se tiene por el saber más rico y es el más pobre: de lo suyo no dice más sino que la cosa es. Si se pregunta qué es este ahora y se responde que es la noche, basta anotar la respuesta y volver a mirarla al mediodía; la verdad escrita se ha vuelto rancia sin que nadie la tocara. Y sin embargo no se ha perdido nada, pues el ahora se conserva justamente como aquello que permanece siendo mientras lo que en él era ha dejado de ser. Lo inmediato resulta así ser lo mediado.',

    scopeAnchor:
      'Dos que se enfrentan de ese modo no disputan por canciones, cuyo contenido habrán de describirme, sino por la certeza de valer, y ninguno la tiene por sí solo: la tiene únicamente en cuanto el otro se la concede o se la niega. Por eso el que ataca necesita que el atacado sea alguien, y lo eleva en el acto mismo de rebajarlo. El público no mira desde fuera: es el momento en que una pretensión singular se pone como universal, y sin esa instancia el combate sería ruido privado. Aquí está la inversión: el vencedor queda reconocido por una conciencia que él ya declaró indigna de reconocer, de suerte que su verdad le llega prestada por aquello que desvalorizó. Lo que gana no es certeza de sí, sino dependencia de la mirada que lo corona.',
  },
};

export const glossary: Record<string, GlossaryEntry> = {
  giro_copernicano: {
    term: 'Giro copernicano',
    short:
      'Inversión propuesta por Kant: en vez de suponer que el conocimiento se ajusta a los objetos, se supone que los objetos, para poder sernos dados, se ajustan a las condiciones del sujeto que conoce.',
  },
  fenomeno: {
    term: 'Fenómeno',
    short:
      'La cosa tal como se nos aparece bajo nuestras formas de recibirla y pensarla. No significa apariencia falsa: es el único objeto posible de conocimiento, y sobre él vale todo lo que la ciencia afirma.',
    original: 'Erscheinung',
  },
  cosa_en_si: {
    term: 'Cosa en sí',
    short:
      'La cosa considerada al margen de las condiciones bajo las cuales podría aparecernos. Kant la conserva como concepto límite, no como objeto conocido; Hegel replica que un límite enunciado ya ha sido rebasado.',
    original: 'Ding an sich',
  },
  a_priori: {
    term: 'A priori',
    short:
      'Lo que vale con independencia de toda experiencia particular y por eso puede afirmarse con necesidad y sin excepciones. Se opone a a posteriori, que es lo que solo se sabe después de haber observado los casos.',
  },
  sintetico_a_priori: {
    term: 'Juicio sintético a priori',
    short:
      'Proposición que amplía el conocimiento, porque el predicado no estaba contenido en el sujeto, y que sin embargo no depende de casos observados. Ejemplo canónico: todo cambio tiene una causa.',
  },
  categorias: {
    term: 'Categorías',
    short:
      'Conceptos puros del entendimiento, como sustancia, causa o comunidad, que no se sacan de la experiencia sino que son las reglas por las cuales una sucesión de representaciones llega a valer como percepción de un objeto.',
  },
  apercepcion: {
    term: 'Apercepción trascendental',
    short:
      'La unidad que hace que todas mis representaciones puedan ser reconocidas como mías. No es una observación de uno mismo ni un alma sustancial: es la condición formal sin la cual lo diverso no se reuniría en una experiencia.',
  },
  sentido_interno: {
    term: 'Sentido interno',
    short:
      'La forma en que nos captamos a nosotros mismos: solo como sucesión en el tiempo, sin extensión espacial. De ahí concluye Kant que lo psíquico no admite medida matemática directa y que no habría ciencia estricta del alma.',
  },
  imperativo_categorico: {
    term: 'Imperativo categórico',
    short:
      'Regla que manda sin condiciones, a diferencia de las que valen solo si se quiere cierto fin. Exige obrar según una máxima que uno pueda querer como ley universal y tratar la humanidad siempre también como fin.',
  },
  dialectica: {
    term: 'Dialéctica',
    short:
      'En Hegel, el movimiento por el cual una posición se vuelve insostenible según su propio criterio y da lugar a otra más rica. No es un método aplicado desde afuera ni el esquema de tesis, antítesis y síntesis.',
  },
  negacion_determinada: {
    term: 'Negación determinada',
    short:
      'Negar algo concreto no deja la nada, deja un contenido preciso que resulta de aquello negado. Gracias a eso el fracaso de una posición produce la siguiente, y la serie avanza en lugar de terminar en escepticismo.',
    original: 'bestimmte Negation',
  },
  aufhebung: {
    term: 'Aufhebung',
    short:
      'Palabra alemana que significa a la vez cancelar, conservar y elevar. Nombra la operación por la cual lo refutado no desaparece sino que queda guardado como momento dentro de la posición que lo sucede.',
    original: 'Aufhebung',
  },
  sustancia_sujeto: {
    term: 'La sustancia como sujeto',
    short:
      'Tesis de Hegel según la cual lo verdadero no es un fondo inmóvil que el pensar copie, sino una actividad que sale de sí, se pierde en lo otro y regresa: por eso el resultado incluye el camino que llevó a él.',
  },
  reconocimiento: {
    term: 'Reconocimiento',
    short:
      'Una autoconciencia solo es para sí en cuanto otra la reconoce como tal. De esa dependencia recíproca nacen la lucha por el prestigio y la relación de dominio, en la que el que manda recibe un reconocimiento sin valor.',
    original: 'Anerkennung',
  },
  espiritu: {
    term: 'Espíritu',
    short:
      'No una entidad inmaterial, sino la vida común en la que varias autoconciencias se reconocen: un yo que es nosotros y un nosotros que es yo. Incluye lengua, costumbres, derecho e instituciones.',
    original: 'Geist',
  },
  en_si_para_si: {
    term: 'En sí y para sí',
    short:
      'En sí es lo que algo es todavía sin saberlo; para sí, lo que ya es sabiendo que lo es. Un mismo contenido puede estar primero como disposición y luego como algo asumido, y ese paso es el desarrollo mismo.',
    original: 'an sich, für sich',
  },
};
