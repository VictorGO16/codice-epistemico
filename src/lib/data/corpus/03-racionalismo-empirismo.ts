// Racionalismo continental y empirismo británico.
// Corrientes: racionalismo, empirismo. Autores: Descartes, Locke, Hume.

import type {
  ConceptExposition,
  AuthorVoice,
  GlossaryEntry,
} from '@/types/philosophical';

export const expositions: Record<string, ConceptExposition> = {
  racionalismo: {
    thesis:
      'Lo que hace posible el conocimiento no viene de los sentidos: hay principios que la mente capta por [[intuicion_intelectual|intuición intelectual]] y desde los cuales deduce, con la misma seguridad con que la geometría avanza de axiomas a teoremas. La experiencia ocasiona el saber y lo confirma, pero no puede dar la necesidad ni la exactitud que toda ley posee.',

    problem:
      'La nueva ciencia del siglo XVII describía el movimiento con proporciones exactas y universales, mientras que las observaciones de las que decía partir eran finitas, aproximadas y siempre de casos particulares. El [[mecanicismo]] había ganado un mundo calculable sin explicar por qué el cálculo se le aplica. Faltaba una teoría del entendimiento capaz de decir de dónde sale una exactitud que ningún instrumento entrega.',

    keyNotions: [
      {
        term: 'Ideas innatas como disposiciones',
        gloss:
          'No son textos escritos en el alma del recién nacido, sino la capacidad del entendimiento de formar nociones que ninguna impresión podría suministrar: sustancia, causa, infinito, el triángulo exacto del que jamás vimos un ejemplar. La función del innatismo es explicar un excedente: la mente produce más precisión de la que recibe.',
      },
      {
        term: 'Intuición y deducción',
        gloss:
          'La intuición capta de un golpe una proposición simple, sin inferencia y sin imagen. La deducción encadena pasos donde cada eslabón es igualmente evidente y la memoria sostiene el conjunto. Es una teoría de la evidencia, no de la prueba empírica: la verdad se reconoce por la claridad con que se presenta, no por acumulación de casos.',
      },
      {
        term: 'Mathesis universalis',
        gloss:
          'Proyecto de una ciencia general del orden y la medida, cuyo método valga por igual para líneas, cuerpos, almas y estados. Convierte el modelo geométrico en programa: cualquier dominio es tratable si se lo reduce a elementos simples y a relaciones entre ellos. Es el ancestro directo de toda formalización posterior.',
      },
      {
        term: 'Sustancia y orden de las razones',
        gloss:
          'El sistema se organiza por dependencia lógica y no por orden de descubrimiento: primero lo que se sostiene solo, después lo que necesita de otro para existir. Spinoza deduce de una única sustancia el pensamiento y la extensión; Leibniz multiplica las sustancias simples. La arquitectura pesa tanto como las tesis, porque decide qué puede probarse a partir de qué.',
      },
      {
        term: 'Verdades de razón y principio de razón suficiente',
        gloss:
          'Leibniz separa las verdades cuya negación es contradictoria, válidas en todo mundo posible, de las verdades de hecho, que podrían ser de otro modo y exigen una razón que explique por qué son así y no de otra manera. La [[episteme|ciencia]] estricta se ocupa de las primeras; las segundas necesitan un fundamento que las cierre.',
      },
    ],

    development: `El programa racionalista nace de una desproporción que la propia Revolución Científica volvió visible. Galileo y sus continuadores escribían el movimiento en proporciones geométricas y acertaban, pero la experiencia de la que decían partir solo entrega casos particulares, medidos con instrumentos toscos y siempre en número finito. De ahí no sale una ley exacta ni universal. Si la física funciona, algo en el entendimiento aporta la exactitud que los sentidos no traen, y ese algo no puede a su vez aprenderse de los sentidos sin circularidad.

La respuesta común de Descartes, Spinoza y Leibniz es que el conocimiento no se acumula, se ordena. Hay proposiciones que la mente capta de un golpe, sin inferencia y sin imagen, y desde ellas se avanza por cadenas de pasos cada uno de los cuales es igualmente evidente. Las [[ideas_innatas|ideas innatas]] no son contenidos grabados en el alma del recién nacido, sino disposiciones del entendimiento a formar nociones que ninguna impresión podría dar: sustancia, causa, infinito, el triángulo exacto que nunca se vio.

De ahí el modelo geométrico y su ambición máxima, la [[mathesis_universalis]], ciencia general del orden y la medida cuyo método valdría igual para las líneas, los cuerpos y las almas. Spinoza escribe la *Ética* con definiciones, axiomas y proposiciones, y deduce de una sola sustancia tanto la extensión como el pensamiento, disolviendo el dualismo cartesiano en un paralelismo estricto entre dos series que expresan lo mismo. Leibniz distingue verdades de razón, cuya negación es contradictoria, de verdades de hecho, sujetas al principio de razón suficiente, y proyecta un cálculo que permita zanjar las disputas calculando en lugar de discutiendo.

El precio está en la juntura. Un sistema deducido garantiza coherencia interna, no correspondencia con el mundo: hace falta un puente, y los tres lo apoyan en Dios, sea como garante veraz de las ideas claras, sea como sustancia única, sea como autor de una armonía preestablecida entre series que nunca se tocan. Locke atacará justamente ahí, mostrando que nadie exhibe una sola proposición aceptada por todos, ni entre los niños ni entre los pueblos, y que la necesidad aparente puede explicarse por la historia de cómo se adquirieron las ideas. Kant conservará el argumento de fondo, que la experiencia no basta, y desplazará su forma: lo a priori no serán contenidos innatos sino formas de la sensibilidad y del entendimiento que ordenan lo dado.

La disputa sigue viva en psicología con otro vocabulario. El argumento de la pobreza del estímulo, con el que Chomsky sostiene que ningún niño podría extraer la gramática de su lengua del habla fragmentaria que oye, es una versión empírica del mismo movimiento: si la salida excede sistemáticamente a la entrada, hay estructura previa. Y el ideal deductivo dejó huella metodológica duradera: toda teoría que se formaliza en postulados de los que se derivan predicciones contrastables, del sistema hipotético deductivo de Hull a los modelos bayesianos de la cognición, razona con la forma del argumento racionalista aunque someta el resultado a datos.`,

    objections: [
      {
        from: 'Locke y el empirismo británico',
        fromId: 'empirismo',
        claim:
          'No existe una sola proposición que reciba asentimiento universal: los niños y los pueblos iletrados no la exhiben. Y si se dice que está en la mente sin que la mente lo sepa, la tesis se vuelve incontrastable, porque ya no hay hecho alguno que pudiera refutarla.',
      },
      {
        from: 'Hume',
        fromId: 'hume',
        claim:
          'La deducción solo compara ideas y jamás informa sobre cuestiones de hecho. Un sistema perfectamente encadenado puede ser enteramente falso respecto del mundo, y ninguna evidencia interna de una idea prueba que algo le corresponda fuera de la mente.',
      },
      {
        from: 'Kant',
        fromId: 'kant',
        claim:
          'La razón que pretende conocer sustancias, almas o el mundo como totalidad, sin apoyo en intuición sensible, no produce ciencia sino ilusión inevitable. Lo a priori existe, pero solo vale como condición de la experiencia posible, nunca como acceso directo a lo que hay.',
      },
    ],

    works: [
      { title: 'Reglas para la dirección del espíritu', year: 1628, note: 'Descartes fija intuición y deducción como las dos únicas vías del entendimiento y esboza la mathesis universalis.' },
      { title: 'Discurso del método', year: 1637, note: 'Las cuatro reglas del método y el programa de una ciencia ordenada de lo simple a lo compuesto.' },
      { title: 'Ética demostrada según el orden geométrico', year: 1677, note: 'Spinoza lleva el modelo deductivo hasta el final: una sustancia única, y el pensamiento y la extensión como dos de sus atributos.' },
      { title: 'Monadología', year: 1714, note: 'Leibniz expone las sustancias simples, la armonía preestablecida y el principio de razón suficiente.' },
      { title: 'Nuevos ensayos sobre el entendimiento humano', year: 1704, note: 'Réplica punto por punto a Locke: nada hay en el entendimiento que no haya estado en los sentidos, salvo el entendimiento mismo.' },
    ],

    psychology: {
      claim:
        'El innatismo no sobrevive en psicología como doctrina metafísica sino como programa empírico: la tesis de que un aprendiz sin estructura previa no llega adonde llega un niño, y de que esa estructura se puede especificar y poner a prueba. De ahí salen la lingüística generativa, la hipótesis de la modularidad y la psicología evolucionista, con sus tareas de laboratorio y sus disputas abiertas.',

      lineages: [
        {
          name: 'Noam Chomsky, reseña de Verbal Behavior de Skinner, revista Language',
          year: 1959,
          what: 'Sostiene que estímulo, respuesta y refuerzo pierden todo contenido definible al aplicarse a la conducta verbal, y que la productividad sintáctica exige un dispositivo interno. Instala en revistas de la disciplina la pregunta por la estructura mental previa.',
        },
        {
          name: 'Jerry Fodor, The Modularity of Mind',
          year: 1983,
          what: 'Convierte el innatismo en hipótesis sobre la arquitectura: sistemas de entrada específicos de dominio, rápidos, de cableado neural fijo y encapsulados respecto de las creencias. Aporta un criterio contrastable, la impenetrabilidad cognitiva, verificable en ilusiones que persisten pese al conocimiento.',
        },
        {
          name: 'Barkow, Cosmides y Tooby, The Adapted Mind',
          year: 1992,
          what: 'Reformulan lo innato como diseño seleccionado para problemas adaptativos recurrentes. Cosmides ya lo había llevado a una tarea concreta en Cognition, 1989, mostrando que el rendimiento en la selección de Wason mejora cuando la regla se presenta como contrato social.',
        },
        {
          name: 'Elman, Bates, Johnson, Karmiloff-Smith, Parisi y Plunkett, Rethinking Innateness',
          year: 1996,
          what: 'Separan tres sentidos de innato, representacional, arquitectónico y cronotópico, y muestran con redes conexionistas que restricciones generales sobre la arquitectura y sobre el calendario del desarrollo bastan para producir resultados atribuidos a conocimiento previo.',
        },
      ],

      development: `El innatismo entró a la psicología del siglo veinte por la puerta de una reseña. En 1959 Chomsky revisa *Verbal Behavior* de Skinner en la revista *Language* y sostiene dos cosas: que términos como estímulo, respuesta y refuerzo, definidos con rigor en el laboratorio animal, se vuelven metáforas vacías al aplicarse a una oración, y que ningún historial de refuerzos explica que un hablante produzca y comprenda frases que jamás oyó. La disciplina necesitaba ese argumento porque su teoría del aprendizaje era una teoría de la entrada, mientras que el habla infantil exhibía una salida sistemáticamente más rica que la entrada disponible. A esa desproporción Chomsky le puso nombre en *Rules and Representations*, 1980: pobreza del estímulo.

Al entrar a la psicología, las [[ideas_innatas]] cambiaron de naturaleza. Dejaron de ser contenidos que el alma contempla por [[intuicion_intelectual|intuición intelectual]] y pasaron a ser restricciones sobre el espacio de hipótesis que un aprendiz llega a considerar. La ganancia es metodológica y es grande: una restricción se contrasta. Permite preguntar qué generalizaciones un niño nunca ensaya, qué errores no comete, qué configuraciones de estímulo un sistema perceptivo trata como equivalentes sin haberlo aprendido. Fodor, en 1983, le dio forma arquitectónica con sistemas de entrada específicos de dominio y encapsulados, y aportó un criterio empírico, la impenetrabilidad cognitiva: si una ilusión persiste cuando el observador sabe que es una ilusión, el proceso que la produce no consulta sus creencias. Lo que se perdió en el camino es la pretensión de certeza. La estructura previa del racionalismo garantizaba verdad; la de la psicología solo sesga el aprendizaje en una dirección, y puede estar mal calibrada.

La discusión viva es cuánta especificidad hay que postular. Cosmides y Tooby empujan hacia el máximo, con mecanismos diseñados por selección natural para problemas adaptativos concretos, uno de los cuales sería detectar tramposos en intercambios sociales. Elman y sus coautores empujan en dirección contraria: muestran con redes conexionistas que restricciones generales sobre la arquitectura, sobre el momento en que madura cada capa y sobre el tamaño inicial de la memoria de trabajo bastan para producir resultados que se atribuían a conocimiento previo. Ninguno de los dos bandos defiende hoy una mente sin estructura ni una mente cargada de proposiciones; discuten dónde poner la estructura.

Eso le exige algo preciso a quien investiga: declarar qué observación distinguiría su hipótesis innatista de una hipótesis de aprendizaje con la misma entrada. Sin esa especificación, el innatismo repite el defecto que Locke le imputó al racionalismo, el de afirmar un contenido que la mente tendría sin saberlo, y que ningún dato podría refutar. La diferencia entre un programa de investigación y una [[tabula_rasa|discusión sobre la tabla rasa]] está justo ahí.`,

      today: [
        'La gramática universal sigue en disputa empírica: Evans y Levinson, en Behavioral and Brain Sciences, 2009, sostienen que los universales propuestos no sobreviven al muestreo de lenguas poco descritas, y la réplica generativista los reubica en un nivel más abstracto.',
        'Lo innato se mide hoy como heredabilidad, con diseños de gemelos y puntuaciones poligénicas. Es una proporción de varianza en una población concreta, no un dato sobre el desarrollo de un individuo ni sobre qué resulta modificable.',
        'Varios efectos clásicos de la psicología evolucionista no replicaron en la última década, y su dificultad de diseño es reconocible: la hipótesis adaptativa rara vez especifica de antemano qué resultado la dejaría descartada.',
      ],

      caveats: [
        'Innato no significa presente al nacer ni independiente del ambiente. En la literatura actual nombra canalización del desarrollo, es decir robustez del resultado frente a variaciones de la entrada, y por eso Elman y colaboradores proponen en 1996 abandonar el término o usarlo siempre con el nivel especificado.',
        'La reseña de 1959 no derribó el conductismo por sí sola. MacCorquodale respondió en el Journal of the Experimental Analysis of Behavior, 1970, que Chomsky discute una posición que Skinner no sostiene, y el análisis conductual siguió generando investigación y práctica clínica vigente.',
      ],
    },
  },

  descartes: {
    thesis:
      'Aunque todo lo demás pueda ser falso, el [[cogito|acto de pensar]] no puede serlo mientras se lo ejerce: hay una certeza que resiste incluso a la hipótesis de un engañador universal, y sobre ella puede reconstruirse el resto. Lo que existe se reparte entonces en dos géneros irreductibles, lo que piensa y no ocupa lugar, y lo que ocupa lugar y no piensa.',

    problem:
      'La física aristotélica se venía abajo y con ella el andamiaje escolar que garantizaba el saber, mientras el escepticismo antiguo volvía a circular como argumento de moda. Descartes necesita un punto de apoyo que no dependa de ninguna autoridad ni de ningún sentido, porque la ciencia nueva no puede fundarse en lo mismo que acaba de derribar. La [[duda_metodica|duda]] no es una posición sino el instrumento para encontrarlo.',

    keyNotions: [
      {
        term: 'Duda metódica y genio maligno',
        gloss:
          'Se rechaza como falso todo aquello donde quepa la menor sospecha: los sentidos engañan alguna vez, el sueño imita a la vigilia, y un engañador poderoso podría falsear hasta las matemáticas. No es escepticismo, es un filtro: sirve para aislar lo que resiste, y quien se queda en la duda no llegó a usarla.',
      },
      {
        term: 'Cogito, ergo sum',
        gloss:
          'La duda misma prueba que hay alguien dudando. La proposición no es un silogismo sino la constatación de que el pensar se autoafirma cada vez que se ejerce. Da una certeza indudable pero flaca: asegura que existo mientras pienso, y todavía no dice nada sobre el cuerpo ni sobre el mundo.',
      },
      {
        term: 'Claridad y distinción, y la veracidad divina',
        gloss:
          'Del caso privilegiado del cogito se extrae una regla general: es verdadero lo que se concibe de modo claro y distinto. Para que la regla valga más allá del instante en que se la ejerce hace falta un Dios no engañador que garantice la correspondencia, y ahí se abre el círculo que le objetarán sus contemporáneos.',
      },
      {
        term: 'Res cogitans y res extensa',
        gloss:
          'Dos sustancias con atributos excluyentes: el pensamiento no tiene partes ni figura, la extensión no piensa. La separación es productiva para la física, porque deja la naturaleza entera disponible para la geometría y el movimiento, incluido el cuerpo humano, tratado como máquina. El costo aparece al preguntar cómo se tocan.',
      },
      {
        term: 'Unión sustancial y pasiones del alma',
        gloss:
          'La experiencia enseña que alma y cuerpo forman una sola cosa: el dolor no se conoce como el piloto conoce la avería de su nave. Las [[ideas_innatas|ideas innatas]] se piensan sin cuerpo, pero el hambre, el miedo o la alegría solo se explican por la unión, que Descartes describe sin poder demostrarla.',
      },
    ],

    development: `Descartes se hace cargo de una situación en que el edificio del saber perdió sus cimientos. La física de las cualidades y de los fines ya no explica lo que Galileo mide, y los argumentos escépticos, recuperados del mundo antiguo, muestran que ninguna creencia recibida se sostiene sola. La estrategia consiste en adelantarse al escéptico y llevar la duda más lejos de lo que él la lleva, hasta la hipótesis de un poder que falsee incluso las verdades matemáticas, para averiguar si queda algo en pie.

Queda algo, y es el propio acto de dudar. Si soy engañado, existo mientras lo soy. La certeza obtenida es indudable y a la vez muy pobre: garantiza una cosa que piensa, no un hombre con cuerpo, ni un mundo. Descartes extrae de ella una regla, que es verdadero lo que se concibe con claridad y distinción, y necesita un garante para extender la regla más allá del instante presente, de modo que la reconstrucción del mundo pasa por probar la existencia de un Dios que no engaña. Sus contemporáneos le señalan de inmediato que la regla apoya la prueba y la prueba apoya la regla.

El resultado ontológico es más duradero que la prueba. Hay dos géneros de sustancia: la [[res_cogitans|sustancia pensante]], sin partes ni lugar, y la [[res_extensa|sustancia extensa]], que se agota en figura, tamaño y movimiento. Esa partición es exactamente lo que la física nueva necesitaba, porque expulsa del mundo material toda cualidad, todo fin y toda alma, y deja la naturaleza disponible para el tratamiento geométrico. El cuerpo humano queda incluido: es una máquina hidráulica de nervios, válvulas y espíritus animales, y sus movimientos se explican como los de un autómata de jardín.

El precio lo cobra Isabel de Bohemia en 1643 con una pregunta simple: cómo una sustancia que no tiene extensión puede determinar el movimiento de una que sí la tiene, si mover requiere contacto e impulso. Descartes responde señalando la glándula pineal como sede de la interacción y apelando a una noción primitiva de unión que se conoce viviendo y no razonando. La respuesta no satisface a nadie: Malebranche recurre a la intervención divina en cada ocasión, Spinoza suprime la dualidad haciendo de ambas cosas atributos de una misma sustancia, y los materialistas del siglo siguiente suprimen el alma. El [[mecanicismo]] cartesiano sobrevive a su metafísica.

Para la psicología el legado es doble y ambivalente. De un lado, la primera persona queda instituida como fuente de datos privilegiada, y de ahí arranca la línea que llega hasta la introspección de Wundt y de Titchener y hasta la discusión actual sobre el valor del informe subjetivo. Del otro, el problema mente cuerpo queda planteado en términos que la disciplina sigue arrastrando cada vez que separa lo psicológico de lo orgánico, habla de factores psicológicos y biológicos como si fueran dos causas paralelas, o busca correlatos neurales de un estado mental sin decidir qué relación afirma entre ambos.`,

    objections: [
      {
        from: 'Isabel de Bohemia',
        claim:
          'Si mover un cuerpo exige contacto y extensión, una sustancia inextensa no puede empujar nada. Pedir que se admita la unión como noción primitiva, conocida por el uso de la vida, es reconocer que el sistema no la explica y sostenerla igual.',
      },
      {
        from: 'Hume',
        fromId: 'hume',
        claim:
          'Al examinarme no encuentro ninguna impresión de un yo simple e idéntico, sino percepciones que se suceden. Lo que el cogito descubre es que hay pensamiento en curso, y de ahí no se sigue que exista una sustancia que lo posea.',
      },
      {
        from: 'Locke y el empirismo británico',
        fromId: 'empirismo',
        claim:
          'Las ideas que se declaran innatas por no venir de los sentidos pueden reconstruirse a partir de la experiencia y de operaciones de la mente sobre ella. La aparente evidencia inmediata suele ser un hábito temprano que ya nadie recuerda haber adquirido.',
      },
    ],

    works: [
      { title: 'Reglas para la dirección del espíritu', year: 1628, note: 'Inacabada: expone el método de reducción a elementos simples y el papel de intuición y deducción.' },
      { title: 'Discurso del método', year: 1637, note: 'Publicado en francés y como prólogo a tres ensayos científicos: el relato del método y la primera formulación del cogito.' },
      { title: 'Meditaciones metafísicas', year: 1641, note: 'La duda hiperbólica, el cogito, la prueba de Dios y la distinción real entre alma y cuerpo, con las objeciones de sus contemporáneos.' },
      { title: 'Principios de la filosofía', year: 1644, note: 'El sistema completo, de la metafísica a la física de los torbellinos, ordenado como manual.' },
      { title: 'Las pasiones del alma', year: 1649, note: 'Fisiología de los espíritus animales, la glándula pineal y el tratamiento de las pasiones como efectos de la unión.' },
    ],

    psychology: {
      claim:
        'De Descartes la psicología recibió dos cosas incompatibles entre sí y ambas fundacionales: la introspección como método de acceso a la [[res_cogitans|sustancia pensante]], que fracasó de manera documentada entre 1901 y 1909, y el arco reflejo, que se volvió el modelo fisiológico del que salen Sechenov, Pavlov y el condicionamiento. La disciplina sigue organizada por el problema que él dejó abierto y no por la solución que propuso.',

      lineages: [
        {
          name: 'Ivan Sechenov, Los reflejos del cerebro',
          year: 1863,
          what: 'Toma el circuito mecánico que Descartes reservaba para el movimiento involuntario y lo extiende a toda la actividad cerebral, incluido el pensamiento, entendido como reflejo con la fase motora inhibida. Pavlov construye sobre esa base el condicionamiento.',
        },
        {
          name: 'Edward Titchener, Experimental Psychology: A Manual of Laboratory Practice',
          year: 1901,
          what: 'Codifica el entrenamiento de observadores que descomponen la experiencia en sensaciones, imágenes y sentimientos elementales, y les enseña a evitar el error del estímulo, esto es, informar sobre el objeto en vez de informar sobre el contenido consciente.',
        },
        {
          name: 'Karl Bühler y la escuela de Wurzburgo',
          year: 1907,
          what: 'Reportan pensamiento sin imagen: observadores entrenados resuelven problemas sin hallar en la conciencia ninguna sensación ni imagen. Titchener responde en 1909 que están mal entrenados, y la disputa queda sin instancia que la resuelva.',
        },
        {
          name: 'Antonio Damasio, El error de Descartes',
          year: 1994,
          what: 'Reúne evidencia neurológica de que la decisión sin emoción se degrada, con la hipótesis del marcador somático y la tarea de apuestas de Bechara y colaboradores, publicada en Cognition el mismo año, aplicada a pacientes con daño prefrontal ventromedial.',
        },
      ],

      development: `La psicología llegó tarde a la universidad y llegó cargando el problema cartesiano completo. Si lo mental y lo corporal son géneros distintos, una ciencia de lo mental necesita un método de acceso propio, y el único candidato disponible era la observación interna. Wundt fundó su laboratorio en Leipzig en 1879 con una versión restringida de esa idea: la autoobservación entrenada solo valía para juicios simples sobre estímulos controlados, con tiempos de reacción y series repetibles, mientras el pensamiento superior quedaba fuera del laboratorio. Titchener llevó el programa mucho más lejos. Su manual de 1901 forma observadores que descomponen la experiencia en sensaciones, imágenes y sentimientos elementales, y les enseña a evitar el error del estímulo, que consiste en informar sobre el objeto en lugar de informar sobre el contenido consciente.

El programa se rompió por dentro. Los investigadores de Wurzburgo, con Bühler en 1907, reportaron que sus observadores resolvían problemas y tomaban decisiones sin encontrar imagen ni sensación alguna en la conciencia. Titchener respondió en 1909 que esos observadores estaban mal entrenados. El punto es que la disputa era irresoluble: dos laboratorios competentes informaban contenidos incompatibles y no existía tercera instancia. Lo que quebró no fue una teoría sino el método, y de ahí sale tanto el conductismo como la desconfianza permanente de la disciplina hacia el autoinforme.

Mientras tanto, la otra mitad de Descartes prosperaba. La *[[res_extensa|res extensa]]* incluía el cuerpo, y Descartes había descrito el movimiento involuntario como un circuito mecánico que va del estímulo periférico al músculo sin intervención del alma. Sechenov tomó ese esquema en 1863 y lo extendió a toda la actividad cerebral, incluido el pensamiento, que sería un reflejo con la parte final inhibida; Pavlov construyó sobre esa base el condicionamiento. El dualismo produjo así dos psicologías: una de la conciencia, que colapsó, y una del cuerpo, que se volvió fisiología experimental.

La discusión sigue abierta y ya no es metafísica sino operativa. Damasio, en 1994, sostiene desde la neurología que separar razón y emoción es un error empírico, y muestra con la tarea de apuestas de Bechara y colaboradores que pacientes con daño prefrontal ventromedial razonan bien en abstracto y deciden pésimo en su vida. Para quien investiga, la herencia cartesiana aparece cada vez que un diseño trata las variables psicológicas y las fisiológicas como dos conjuntos que hay que correlacionar, en lugar de preguntarse qué relación supone esa correlación. El [[cogito|punto de partida cartesiano]] dejó a la disciplina un método que no funcionó y un problema que todavía organiza sus preguntas.`,

      today: [
        'El autoinforme sigue siendo el instrumento central de la psicología y su límite está documentado desde Nisbett y Wilson, 1977: los sujetos informan con confianza sobre causas de su conducta a las que no tienen acceso, y construyen una explicación plausible en su lugar.',
        'La tarea de apuestas de Iowa se usa en evaluación neuropsicológica y en investigación en adicciones, con una discusión abierta sobre qué mide exactamente y sobre la fiabilidad de sus puntuaciones en muestras no clínicas.',
        'El dualismo opera en la práctica cada vez que un servicio separa salud mental de salud física, con derivaciones, presupuestos y registros distintos, y la psicología de enlace trabaja justamente sobre los casos que esa división deja sin destino.',
      ],

      caveats: [
        'Damasio discute con un Descartes simplificado. En la Meditación sexta se afirma la unión sustancial de alma y cuerpo, no estar en él como un piloto en su navío, y *Las pasiones del alma*, 1649, es un tratado psicofisiológico de la emoción. El blanco real es el dualismo escolar, no el texto.',
        'La objeción de interacción no la inventó la neurociencia. Isabel de Bohemia se la plantea a Descartes en su carta de mayo de 1643, preguntando cómo algo inextenso puede mover un cuerpo, y las respuestas de Descartes nunca la satisfacen. La discusión es interna al siglo diecisiete.',
      ],
    },
  },

  empirismo: {
    thesis:
      'Nada hay en el entendimiento que no haya entrado por la experiencia: no existen [[ideas_innatas|ideas innatas]], y todo contenido mental, por abstracto que parezca, puede rastrearse hasta percepciones particulares y hasta las operaciones que la mente ejerce sobre ellas. El origen de una idea marca a la vez su límite: donde no hay experiencia que la respalde, el término no significa nada.',

    problem:
      'El racionalismo había fundado la ciencia en principios que la mente encuentra en sí misma, con lo cual cualquier prejuicio arraigado podía presentarse como evidencia natural y quedar fuera de discusión. El proyecto de una [[mathesis_universalis|ciencia deducida]] entregaba sistemas coherentes sin criterio para decidir cuál corresponde al mundo. Hacía falta un método que permitiera auditar cada idea preguntando de dónde salió.',

    keyNotions: [
      {
        term: 'Rechazo del innatismo',
        gloss:
          'Si hubiera principios impresos en la mente, todos los aceptarían, y los niños y los pueblos sin instrucción no los aceptan. Decir que están presentes sin que nadie los advierta vacía la tesis de contenido. El argumento es tanto epistemológico como político: lo que se declara natural deja de poder examinarse.',
      },
      {
        term: 'Criterio de origen',
        gloss:
          'Ante un término oscuro, la pregunta no es qué significa sino de qué [[impresion|impresión]] procede. Si no puede exhibirse ninguna, se trata de una palabra sin idea. Es el antepasado directo del criterio verificacionista del siglo XX y de la exigencia de definir operacionalmente los constructos en psicología.',
      },
      {
        term: 'La mente como receptora activa',
        gloss:
          'En la recepción de lo simple la mente es pasiva y no puede inventar ni suprimir nada: nadie se da a sí mismo la idea de un sabor que jamás probó. En cambio combina, compara y abstrae con entera libertad, y de ahí salen las ideas complejas, incluidas las que no corresponden a nada existente.',
      },
      {
        term: 'Leyes de asociación',
        gloss:
          'Semejanza, contigüidad en tiempo y lugar, y causa y efecto son los principios por los cuales una idea llama a otra. Funcionan como una atracción suave entre contenidos mentales, y explican la marcha del pensamiento sin apelar a facultades ocultas: son la mecánica de la mente para el modelo newtoniano.',
      },
      {
        term: 'Ciencia natural del hombre',
        gloss:
          'El método experimental que ordenó la física se aplica ahora al entendimiento, las pasiones, la moral y la política. La psicología queda situada como disciplina fundamental, porque toda ciencia pasa por las facultades de quien la hace, y sus límites fijan de antemano hasta dónde puede llegar cualquier investigación.',
      },
    ],

    development: `El empirismo británico se organiza contra un supuesto que el racionalismo dejaba intacto: que la mente dispone de antemano de contenidos capaces de fundar la ciencia. Locke abre el *Ensayo* con una crítica larga y deliberada del innatismo, y su argumento no es solo que nadie exhibe una proposición universalmente aceptada, sino que la doctrina cierra la discusión, porque quien declara natural un principio lo pone a salvo de todo examen. Sustituirla exige mostrar que las ideas más abstractas pueden reconstruirse pieza por pieza desde el material sensible.

El giro es tratar el entendimiento como objeto de investigación empírica en lugar de fuente de axiomas. La mente al nacer es un papel en blanco, la [[tabula_rasa|hoja sin marcas]], y todo lo que llega a tener procede de dos entradas: la sensación, que informa de lo externo, y la reflexión, que registra las operaciones internas al percibir, querer o dudar. En lo simple la mente es puramente receptora y no puede fabricar nada; en lo complejo combina, compara y abstrae. La consecuencia metodológica es fuerte: analizar una idea es descomponerla hasta sus elementos y exhibir la experiencia de donde vino cada uno.

Falta entonces explicar por qué el pensamiento avanza como avanza. Si no hay facultades innatas que ordenen, el orden debe producirse en el curso mismo de la experiencia, y ahí entran los principios de asociación. Semejanza, contigüidad y causalidad hacen que una percepción llame a otra con la regularidad con que los cuerpos se atraen, de modo que el [[asociacionismo]] funciona como mecánica de la mente en el estilo de Newton: pocos principios, aplicación universal, ninguna cualidad oculta. Hume subtitula su tratado como un intento de introducir el método experimental de razonamiento en los asuntos morales, y Hartley lo convierte en un sistema fisiológico de vibraciones nerviosas.

El costo aparece pronto. Si solo conozco mis ideas, la existencia y la naturaleza del mundo exterior quedan al otro lado de un velo. Berkeley acepta la premisa y niega la materia: ser es ser percibido. Hume la acepta y niega la conexión necesaria, la sustancia y el yo, con lo cual el programa que empezó fundando la ciencia termina mostrando que la [[induccion|inferencia ampliativa]] carece de fundamento racional. Kant dirá que ese resultado obliga a rehacer la pregunta entera.

En psicología el linaje es visible sin necesidad de forzarlo. El asociacionismo pasa a Hartley, a los Mill y a Bain, y desde ahí, ya con laboratorio, a Ebbinghaus, a Pavlov y al conductismo, donde las leyes de contigüidad y frecuencia se convierten en leyes de condicionamiento y la tabula rasa en la tesis de que la conducta es función del ambiente. El criterio de origen deja otra huella menos comentada: la exigencia de que todo constructo se ancle en observables medibles, que es el nervio de la definición operacional y de la discusión sobre validez de constructo.`,

    objections: [
      {
        from: 'Leibniz',
        claim:
          'Nada hay en el entendimiento que no haya estado antes en los sentidos, salvo el entendimiento mismo. Las capacidades de comparar, negar y ordenar no pueden derivarse de la experiencia, porque son lo que hace que haya experiencia articulada y no una sucesión de estímulos.',
      },
      {
        from: 'Kant',
        fromId: 'kant',
        claim:
          'Toda experiencia llega ya ordenada en espacio, tiempo y relaciones causales. Esas formas no se extraen de lo dado porque son condición de que algo pueda darse: una mente sin ellas no recibiría datos desordenados, no recibiría nada.',
      },
      {
        from: 'Chomsky y el nativismo contemporáneo',
        claim:
          'La adquisición del lenguaje exhibe una desproporción entre lo que el niño oye y lo que llega a dominar. Un mecanismo asociativo general no explica esa diferencia, y el modelo de una mente sin estructura previa ha resultado empíricamente insostenible.',
      },
    ],

    works: [
      { title: 'Ensayo sobre el entendimiento humano', year: 1689, note: 'Locke funda el programa: crítica del innatismo, origen de las ideas, alcance y límites del conocimiento.' },
      { title: 'Tratado sobre los principios del conocimiento humano', year: 1710, note: 'Berkeley radicaliza el punto de partida y elimina la materia como sustrato incognoscible.' },
      { title: 'Tratado de la naturaleza humana', year: 1739, note: 'Hume aplica el método experimental al entendimiento, las pasiones y la moral en un solo sistema.' },
      { title: 'Investigación sobre el entendimiento humano', year: 1748, note: 'Versión depurada de la primera parte del Tratado, con el problema de la inferencia causal en primer plano.' },
      { title: 'Observaciones sobre el hombre', year: 1749, note: 'Hartley traduce la asociación de ideas a vibraciones del sistema nervioso y funda la psicología asociacionista.' },
    ],

    psychology: {
      claim:
        'El empirismo le dio a la psicología su primer mecanismo explicativo, la asociación, y con él la posibilidad de una ciencia de la experiencia sin recurso a facultades. Ese mecanismo llega hasta hoy en forma de ecuación: el aprendizaje asociativo se modela como reducción de error de predicción, y esa es la línea directa que va de Hartley al condicionamiento y al aprendizaje estadístico.',

      lineages: [
        {
          name: 'David Hartley, Observations on Man',
          year: 1749,
          what: 'Convierte la asociación en el único principio del cambio mental y la ancla en vibraciones del sistema nervioso. Con eso queda establecido que la ley psicológica y el proceso corporal son la misma cosa descrita en dos vocabularios.',
        },
        {
          name: 'Alexander Bain, The Senses and the Intellect',
          year: 1855,
          what: 'Añade al asociacionismo el ensayo y error, la idea de que un movimiento espontáneo seguido de placer tiende a repetirse. Ese es el eslabón que Thorndike formaliza como ley del efecto y que Skinner reformula como refuerzo.',
        },
        {
          name: 'John B. Watson, Psychology as the Behaviorist Views It',
          year: 1913,
          what: 'Declara que la psicología no requiere conciencia ni observador interno, sino predicción y control de la conducta. El vínculo asociativo deja de ser algo que se contempla en la propia mente y pasa a ser algo que se produce y se mide.',
        },
        {
          name: 'Robert Rescorla y Allan Wagner, modelo del condicionamiento pavloviano',
          year: 1972,
          what: 'Formalizan el aprendizaje como función de la sorpresa: un estímulo se asocia según cuánto exceda el refuerzo a lo que los estímulos presentes ya predicen. Explican el bloqueo, donde la contigüidad perfecta no basta para producir aprendizaje.',
        },
      ],

      development: `El empirismo le entregó a la psicología algo que ninguna otra tradición filosófica le dio: un mecanismo. No solo la tesis de que todo viene de la experiencia, sino una explicación de cómo lo que entra se combina en lo que hay. Hartley, en 1749, convirtió la asociación en el único principio del cambio mental y la ancló en vibraciones nerviosas, con lo cual quedó dicho que la ley psicológica y el proceso corporal son la misma cosa descrita dos veces. Bain, un siglo después, sumó dos cosas decisivas: fundó la revista *Mind* en 1876 y añadió al asociacionismo el ensayo y error, la idea de que un movimiento espontáneo seguido de placer tiende a repetirse. Ese es el eslabón que Thorndike formaliza como ley del efecto y que Skinner convierte en refuerzo.

Al entrar a la psicología, el [[asociacionismo]] perdió la introspección y ganó un objeto público. Hume enumeraba las conexiones entre ideas examinando su propia mente; Watson, en 1913, declaró que la psicología no necesita conciencia ni observador interno, sino la predicción y el control de la conducta, y con eso el vínculo asociativo dejó de ser algo que se contempla para volverse algo que se produce y se mide en un animal. La *[[tabula_rasa|tabula rasa]]* pasó de imagen a supuesto de trabajo: si la historia de refuerzos explica el repertorio, la historia se puede manipular.

La transformación más profunda vino después y es contraintuitiva. Rescorla y Wagner, en 1972, escribieron una ecuación que dice que el aprendizaje no depende de que dos eventos ocurran juntos, sino de cuánto sorprende el segundo dado lo que ya predicen los estímulos presentes. Con eso explicaron el bloqueo, el fenómeno en que un estímulo perfectamente contiguo al refuerzo no se asocia porque otro ya lo predecía. La contigüidad, que era el corazón del asociacionismo desde Hartley, dejó de ser suficiente. El propio Rescorla lo resumió en 1988 diciendo que el condicionamiento pavloviano no es lo que se cree: no es pegar dos ideas, es detectar una relación informativa.

Ahí está la discusión actual. Si el aprendizaje asociativo computa error de predicción, la distancia entre asociación e inferencia se estrecha, y la vieja frontera entre lo que hace una rata y lo que hace un científico se vuelve una diferencia de grado. Para quien investiga, la lección práctica es que agrupar dos variables porque covarían no equivale a haber identificado un mecanismo, exactamente lo que Rescorla y Wagner tuvieron que demostrar dentro del laboratorio.`,

      today: [
        'El error de predicción de Rescorla y Wagner tiene correlato neural desde Schultz, Dayan y Montague, Science, 1997: la respuesta dopaminérgica sigue la sorpresa y no la recompensa, y hoy sostiene modelos computacionales de adicción y de anhedonia.',
        'La exposición con prevención de respuesta, tratamiento de primera línea en trastornos de ansiedad, se diseña con teoría de la extinción: la extinción no borra la asociación sino que añade un aprendizaje inhibitorio nuevo, de donde vienen la recaída y el trabajo con contextos múltiples.',
        'El aprendizaje estadístico se mide en laboratorio infantil con tiempos de escucha ante secuencias con probabilidades de transición controladas, y es el paradigma en el que se juega hoy cuánto de la segmentación del habla necesita estructura previa.',
      ],

      caveats: [
        'El asociacionismo no fue superado por la revolución cognitiva. Volvió como conexionismo con el trabajo de Rumelhart y McClelland, 1986, y como aprendizaje estadístico con Saffran, Aslin y Newport en Science, 1996, donde bebés de ocho meses segmentan un habla artificial en dos minutos usando probabilidades de transición.',
        'Presentar el condicionamiento como aprendizaje por contigüidad es lo que Rescorla llamó en American Psychologist, 1988, una versión que la propia investigación había desmentido. El animal detecta contingencia informativa, y un estímulo que acompaña al refuerzo sin predecirlo no se aprende.',
      ],
    },
  },

  locke: {
    thesis:
      'La mente al nacer es un papel en blanco, una [[tabula_rasa|hoja sin marcas]], y cuanto llega a contener procede de dos fuentes únicas, la sensación de lo externo y la reflexión sobre las propias operaciones. Conocer sus límites no es una humillación sino la primera tarea: sabiendo hasta dónde alcanza el entendimiento se deja de discutir sobre lo que nadie puede resolver.',

    problem:
      'La doctrina de las [[ideas_innatas|ideas innatas]] no solo era falsa a juicio de Locke, sino cómoda: permitía declarar principio natural cualquier creencia heredada y ponerla fuera del examen, con efectos inmediatos en religión y en política. Si en cambio toda idea tiene historia, cada una puede auditarse preguntando por su origen. La cuestión pasa entonces de qué es verdadero a de dónde vino esto que creo.',

    keyNotions: [
      {
        term: 'Sensación y reflexión',
        gloss:
          'Las dos ventanas por donde entra todo material. La sensación aporta colores, sonidos, resistencia, extensión; la reflexión aporta la percepción de lo que la mente hace cuando percibe, duda, cree o quiere. Sin la segunda el empirismo no podría explicar las ideas lógicas ni las psicológicas, y Locke la agrega precisamente por eso.',
      },
      {
        term: 'Ideas simples y complejas',
        gloss:
          'Ante lo simple la mente es pasiva y no puede crear ni destruir: quien nunca vio un color no lo obtendrá por descripción. Sobre ese material la mente actúa combinando, comparando y abstrayendo, y así fabrica sustancias, modos y relaciones, incluidas ideas complejas a las que no corresponde nada real.',
      },
      {
        term: 'Cualidades primarias y secundarias',
        gloss:
          'Solidez, extensión, figura, movimiento y número están en el cuerpo y nuestras ideas se le parecen; color, sonido, sabor y calor son [[cualidades_secundarias|potencias]] del objeto para producir sensaciones que no se parecen a nada en él. La distinción hereda el mecanicismo de Galileo y decide qué cuenta como propiedad real.',
      },
      {
        term: 'Identidad personal por la conciencia',
        gloss:
          'Persona no nombra una sustancia sino un término forense: es el mismo quien puede reconocerse en la acción pasada por la conciencia que la acompaña. Ni el alma ni el cuerpo garantizan identidad; la memoria sí, y por eso solo se imputa aquello de lo que alguien puede apropiarse conscientemente.',
      },
      {
        term: 'Propiedad por el trabajo',
        gloss:
          'Cada uno es propietario de su persona y por tanto de su trabajo; al mezclar ese trabajo con algo común lo hace suyo, sin necesidad del consentimiento de nadie. El título tiene dos límites, no dejar que se eche a perder y dejar suficiente y tan bueno para los demás, y la invención del dinero afloja ambos.',
      },
    ],

    development: `Locke abre el *Ensayo* con una demolición que ocupa un libro entero. Si hubiera principios impresos en la mente, tendrían que reconocerlos todos, y no los reconocen ni los niños ni los que no recibieron instrucción; si se responde que están presentes aunque nadie los advierta, entonces la tesis ya no dice nada, porque no hay hecho capaz de contradecirla. Detrás del argumento técnico hay uno político: la doctrina del innatismo sirve para blindar creencias recibidas presentándolas como voz de la naturaleza, y quien sostiene que toda idea tiene historia obliga a que cada una rinda cuentas de la suya.

El reemplazo es un método al que llama histórico y llano. Las [[idea_simple|ideas simples]] llegan por la sensación o por la reflexión, y frente a ellas la mente es tan incapaz de fabricar como de rehusar: nadie se da a sí mismo el sabor de una piña que no probó. Sobre ese material la mente sí opera, y combinando, comparando y abstrayendo produce todo lo demás, incluidas las ideas de sustancia, que Locke reduce con desconfianza al supuesto de un soporte del que solo sabemos que sostiene. Analizar una noción es entonces desarmarla hasta sus elementos y exhibir la experiencia de cada uno.

De la física nueva hereda la partición de las cualidades. Las [[cualidades_primarias|primarias]] pertenecen al cuerpo tal como es y nuestras ideas las retratan; las secundarias son potencias para producir en nosotros sensaciones que no se parecen a nada en el objeto. Berkeley señalará enseguida que el mismo argumento que despoja de realidad al color despoja de realidad a la extensión, y que no se puede comparar una idea con una cosa a la que solo se accede por ideas.

El uso más audaz del principio está en la persona. Si la identidad no la da la sustancia, hay que buscarla en la conciencia: soy el mismo que ejecutó aquella acción en la medida en que puedo reconocerme en ella. La [[identidad_personal|identidad personal]] se vuelve así un asunto forense, ligado a la imputación y no a la metafísica del alma. Con la misma lógica de apropiación construye la propiedad: soy dueño de mi persona, luego de mi trabajo, y lo que ese trabajo mezcla con lo común pasa a ser mío sin permiso de nadie, con dos límites que el dinero, aceptado por consentimiento tácito, termina desbordando.

La psicología recogió la herencia por dos vías. La primera es el asociacionismo del aprendizaje, que hace del ambiente el determinante principal de lo que un individuo llega a ser. La segunda es más viva hoy: la identidad entendida como continuidad narrativa y mnémica reaparece en el estudio de la memoria autobiográfica, en las discusiones sobre amnesias y demencias, y en el problema práctico de decidir qué responsabilidad cabe a alguien que no puede reconocerse en lo que hizo.`,

    objections: [
      {
        from: 'Berkeley',
        claim:
          'El argumento que muestra que el color depende del perceptor vale igual para la extensión y la figura, que también varían con la posición y el estado del observador. No se sostiene una barrera entre cualidades reales y aparentes cuando el único acceso disponible son ideas.',
      },
      {
        from: 'Thomas Reid',
        claim:
          'La identidad por la conciencia es circular y se rompe en cadena: el oficial recuerda haber sido el niño castigado, el general recuerda al oficial y no al niño, de modo que sería y no sería la misma persona. La memoria presupone la identidad en lugar de constituirla.',
      },
      {
        from: 'Leibniz',
        claim:
          'La mente no es papel en blanco sino mármol veteado, cuyas vetas orientan la figura que se tallará. Las verdades necesarias no se aprenden por casos, porque ninguna cantidad de casos produce necesidad, y el entendimiento aporta esa forma antes de toda enseñanza.',
      },
    ],

    works: [
      { title: 'Ensayo sobre el entendimiento humano', year: 1689, note: 'Crítica del innatismo, origen de las ideas, cualidades, lenguaje, identidad personal y grados de asentimiento.' },
      { title: 'Dos tratados sobre el gobierno civil', year: 1689, note: 'Estado de naturaleza, propiedad por el trabajo, consentimiento y derecho de resistencia.' },
      { title: 'Carta sobre la tolerancia', year: 1689, note: 'La coacción no produce creencia sincera, de modo que el magistrado carece de competencia sobre la conciencia.' },
      { title: 'Constituciones fundamentales de Carolina', year: 1669, note: 'Redactadas por Locke para la colonia: diseño de propiedad, nobleza territorial y poder absoluto del amo sobre sus esclavos.' },
      { title: 'Algunos pensamientos sobre la educación', year: 1693, note: 'Aplicación práctica del programa: el carácter como resultado del hábito y de la asociación temprana.' },
    ],

    psychology: {
      claim:
        'Tres tesis de Locke se volvieron programas de investigación distintos y todos siguen activos: el ambientalismo, que llega hasta la evaluación de intervenciones tempranas; la identidad personal fundada en la memoria, que organiza la psicología del sí mismo y la investigación en memoria autobiográfica; y la distinción entre cualidades primarias y secundarias, que es el acta de nacimiento de la psicofísica. Ninguna de las tres se enseña hoy como él la escribió.',

      lineages: [
        {
          name: 'Gustav Fechner, Elementos de psicofísica',
          year: 1860,
          what: 'Toma en serio que las cualidades secundarias son efectos en un observador y las vuelve medibles: establece una relación funcional entre magnitud del estímulo y magnitud de la sensación, con umbrales y métodos que aún se usan en laboratorio.',
        },
        {
          name: 'John B. Watson, Behaviorism, edición revisada',
          year: 1930,
          what: 'Lleva el ambientalismo educativo a su versión máxima con la promesa de tomar una docena de niños sanos y formar con cualquiera de ellos el especialista que se le encargue. El propio Watson advierte enseguida que va más allá de los hechos.',
        },
        {
          name: 'Leo Hurvich y Dorothea Jameson, teoría de procesos oponentes, Psychological Review',
          year: 1957,
          what: 'Dan la formulación cuantitativa de por qué el sistema visual produce cuatro tonos elementales y no tres, y por qué nadie percibe un rojo verdoso. La cualidad secundaria pasa a explicarse por la organización del observador.',
        },
        {
          name: 'Martin Conway y Christopher Pleydell-Pearce, sistema de memoria del sí mismo, Psychological Review',
          year: 2000,
          what: 'Modelan la memoria autobiográfica como construcción a partir de una base de conocimiento, regulada por los objetivos actuales de la persona. La continuidad lockeana de la conciencia se convierte en un proceso con parámetros y con fallas descriptibles.',
        },
      ],

      development: `Tres cosas de Locke quedaron dentro de la psicología, y las tres siguen produciendo investigación. La primera es la tesis ambientalista. La *[[tabula_rasa|tabula rasa]]* no es en Locke una consigna sino la conclusión de un argumento negativo: si nadie exhibe una proposición que todos acepten, hay que explicar el contenido mental por su historia de adquisición. En *Algunos pensamientos sobre la educación*, 1693, esa tesis se vuelve programa práctico, con la afirmación de que nueve de cada diez hombres son lo que son por su educación. Watson la radicalizó en 1930 con la promesa de tomar una docena de niños sanos y formar con cualquiera de ellos el especialista que se le pidiera. Conviene leer la frase entera, porque Watson agrega que está yendo más allá de los hechos y que quienes defienden lo contrario llevan siglos haciéndolo.

La segunda es la identidad personal. Locke la desplaza del alma y del cuerpo hacia la continuidad de la conciencia, en un capítulo que agrega a la segunda edición del *Ensayo*, 1694. La consecuencia es que la [[identidad_personal|persona]] se define por lo que puede apropiarse mediante la memoria, y que es un término forense: sirve para imputar acciones. La psicología del sí mismo heredó exactamente esa estructura. El modelo de Conway y Pleydell-Pearce, 2000, describe un sistema en que los recuerdos autobiográficos no se almacenan enteros sino que se construyen desde una base de conocimiento, filtrados por los objetivos actuales del sujeto. Locke fundaba la identidad en la memoria; la psicología encontró que la memoria está en parte fabricada por la identidad, lo que invierte la dirección de la explicación.

La tercera es la distinción entre cualidades primarias y secundarias. Es la carta fundacional de la psicofísica: si el color no está en el objeto sino que resulta del encuentro entre una superficie y un sistema perceptivo, hay algo psicológico que medir. Fechner escribió la relación en 1860 y Hurvich y Jameson, en 1957, dieron la explicación cuantitativa de por qué percibimos cuatro tonos elementales y no tres, y por qué nadie ve un rojo verdoso: los canales oponentes no lo permiten. La [[idea_simple|idea simple]] de Locke se convirtió en una variable con unidades.

Lo que esto le exige a quien investiga es no confundir los tres niveles. Que el color sea una cualidad secundaria no lo vuelve arbitrario ni cultural: hay regularidades interlingüísticas fuertes en el vocabulario cromático, y la discusión sobre categorías de color se juega entre restricciones fisiológicas y particiones lingüísticas, no entre objetividad y subjetividad.`,

      today: [
        'Los programas de intervención temprana se evalúan con seguimientos de décadas, y su discusión abierta es cuánto del efecto persiste en la adultez y por qué vía, porque la promesa ambientalista fuerte no sobrevive a los datos y la versión débil sí.',
        'La memoria autobiográfica se investiga con entrevistas estructuradas y con paradigmas de falso recuerdo, y sus resultados pesan en peritajes forenses: si el recuerdo se reconstruye en cada evocación, la confianza del testigo no informa sobre su exactitud.',
        'La psicofísica del color sigue midiendo tonos únicos y fronteras categoriales entre poblaciones con vocabularios cromáticos distintos, y el debate es cuánto de la categoría viene del sistema visual y cuánto del léxico que la nombra.',
      ],

      caveats: [
        'La tabla rasa que cita la psicología popular es una caricatura. Locke niega principios innatos, no facultades: la mente tiene poderes de percibir, comparar y componer, y admite diferencias de temperamento entre niños. Sostener que para él la mente nace sin ninguna estructura es atribuirle una tesis que su propio texto contradice.',
        'Pinker, en *La tabla rasa*, 2002, discute una posición reconstruida más que a Locke. Su blanco real es el modelo estándar de las ciencias sociales del siglo veinte, y la etiqueta lockeana funciona ahí como recurso expositivo, no como lectura del *Ensayo*.',
      ],
    },
  },

  hume: {
    thesis:
      'Todo contenido de la mente es una [[impresion|impresión]] o una copia debilitada de impresiones, y ninguna impresión corresponde a la conexión necesaria entre causa y efecto. Lo que llamamos necesidad no está en los objetos sino en la mente que, habituada a una conjunción constante, pasa de uno a otro sin poder justificar el paso.',

    problem:
      'Locke había derivado las ideas de la experiencia sin auditar la inferencia que sostiene toda la ciencia natural: la que va de lo observado a lo no observado. La [[induccion|inferencia ampliativa]] no es demostrativa, porque la naturaleza podría cambiar sin contradicción, y tampoco puede apoyarse en la experiencia sin usarse a sí misma. Queda por explicar entonces qué clase de operación es y por qué funciona.',

    keyNotions: [
      {
        term: 'Impresiones e ideas',
        gloss:
          'Las percepciones se distinguen por su vivacidad: las impresiones son las vivas, sensaciones y emociones presentes; las ideas son sus copias débiles en el pensamiento y la memoria. De ahí sale una herramienta crítica de un solo paso: ante un término sospechoso, pedir la impresión de la que procede, y si no la hay, retirarlo.',
      },
      {
        term: 'Causalidad y hábito',
        gloss:
          'Al examinar dos sucesos solo encontramos contigüidad, sucesión y conjunción constante, nunca un vínculo perceptible. La necesidad es una impresión interna: la determinación de la mente a esperar el segundo cuando aparece el primero. La causa no se descubre por análisis del efecto, se instala por repetición.',
      },
      {
        term: 'Problema de la inducción',
        gloss:
          'Toda inferencia de lo observado a lo no observado supone que el curso de la naturaleza seguirá siendo uniforme. Ese supuesto no es demostrable, pues su negación no encierra contradicción, y probarlo por experiencia sería usar lo que se quiere probar. La creencia queda sin fundamento racional y con causa perfectamente identificable.',
      },
      {
        term: 'El yo como haz de percepciones',
        gloss:
          'Al mirar dentro nunca se tropieza con un yo, sino con un calor, una luz, un dolor: solo percepciones que se suceden. La identidad personal es una ficción útil producida por la memoria y por el parecido entre percepciones vecinas, no la constatación de una sustancia que las posea.',
      },
      {
        term: 'Ser y deber, razón y pasión',
        gloss:
          'La [[guillotina_de_hume|separación entre hechos y normas]] impide pasar de proposiciones sobre lo que es a proposiciones sobre lo que debe hacerse sin introducir algo nuevo. Como la razón sola compara ideas y no mueve, el motivo procede siempre de una pasión, y la razón sirve para hallar medios.',
      },
    ],

    development: `Hume toma el criterio empirista en serio hasta donde Locke no lo llevó. Locke había derivado las ideas de la experiencia y conservado sin examen las nociones de poder, sustancia y conexión causal, que son justamente las que sostienen la física de Newton. Aplicado con rigor, el criterio exige que para cada término se exhiba la impresión de origen, y al examinar dos bolas de billar solo se encuentran contigüidad espacial, sucesión temporal y la repetición de ese par en el pasado. La conexión necesaria no aparece por ninguna parte, por atenta que sea la observación.

El giro consiste en cambiar la pregunta. En vez de buscar el fundamento de la inferencia causal, Hume describe la operación mental que la produce: la repetición engendra en la mente una determinación a pasar de un objeto al otro, y esa transición sentida es la única impresión de la que puede copiarse la idea de necesidad. El [[habito|hábito]] es la respuesta, y es una respuesta psicológica a una pregunta lógica. La necesidad no está en el mundo ni en la razón: está en quien mira, y el que mira no lo advierte porque el hábito no se experimenta como inferencia.

De ahí sale el problema que organiza la epistemología posterior. Toda inferencia de lo observado a lo no observado supone la uniformidad del curso de la naturaleza; ese supuesto no puede demostrarse, porque imaginar un mundo que cambia mañana no encierra contradicción alguna, ni establecerse por experiencia sin circularidad, porque la experiencia solo cubre lo ya observado. El [[problema_de_la_induccion|problema de la inducción]] alcanza también a la arquitectura aristotélica: la [[epagoge|inducción]] que debía entregar principios necesarios para la demostración jamás pudo entregar necesidad, solo frecuencia. El mismo bisturí deja al yo como [[haz_de_percepciones|un haz de percepciones]] sin sustancia que las sostenga, y separa las proposiciones sobre lo que es de las proposiciones sobre lo que debe ser, con lo cual la razón queda reducida a esclava de las pasiones, capaz de calcular medios y no de fijar fines.

Hume no concluye que haya que dejar de creer. Concluye que la creencia es obra de la naturaleza y no de la razón, y que el escepticismo se disipa al salir del gabinete sin quedar por eso refutado. Kant dirá que esa página lo despertó de su sueño dogmático, y su respuesta consistirá en negar que la causalidad se lea en la experiencia: la pondrá como condición que el entendimiento impone para que haya experiencia objetiva.

La metodología de la investigación vive dentro de este problema. Ningún resultado obtenido en una muestra prueba lo que ocurrirá en el próximo caso, y toda generalización descansa en un supuesto de estabilidad que el diseño presupone y no verifica. Popper aceptó el argumento y reorganizó la ciencia alrededor de la falsación; la inferencia estadística lo administra con probabilidades sin disolverlo; y la crisis de replicación en psicología es, en parte, ese problema vuelto trabajo empírico cotidiano.`,

    objections: [
      {
        from: 'Kant',
        fromId: 'kant',
        claim:
          'Si la causalidad fuera solo hábito, no habría experiencia objetiva de la cual formarlo, sino una sucesión de estados sin orden. La conexión causal es condición previa de que algo se presente como suceso, y por eso vale universalmente aunque no se lea en la impresión.',
      },
      {
        from: 'Thomas Reid',
        claim:
          'De que la razón no pueda justificar la creencia en el mundo, en las causas y en el yo no se sigue que sean ficciones. Son principios constitutivos del sentido común, tan originarios como la percepción misma, y una filosofía que los contradice se refuta a sí misma.',
      },
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'El argumento es correcto y por eso hay que abandonar la inducción, no fundarla en la costumbre. La ciencia procede por conjeturas audaces y refutaciones, de modo que un problema psicológico sobre cómo se forman las creencias no decide la lógica del método.',
      },
    ],

    works: [
      { title: 'Tratado de la naturaleza humana', year: 1739, note: 'La obra mayor: entendimiento, pasiones y moral bajo un mismo método experimental. La causalidad, el yo y la ley de ser y deber están aquí.' },
      { title: 'Investigación sobre el entendimiento humano', year: 1748, note: 'Reescritura clara y breve de la teoría del conocimiento, con el ensayo sobre los milagros.' },
      { title: 'Investigación sobre los principios de la moral', year: 1751, note: 'La moral se funda en sentimiento y utilidad, no en demostración racional.' },
      { title: 'Disertación sobre las pasiones', year: 1757, note: 'Mecánica de las pasiones por doble asociación de impresiones e ideas.' },
      { title: 'Diálogos sobre la religión natural', year: 1779, note: 'Póstumos: crítica del argumento del diseño y de la inferencia analógica de la naturaleza a su causa.' },
    ],

    psychology: {
      claim:
        'Hume le dejó a la psicología su problema metodológico central, el de que la covariación observada no autoriza por sí sola una conclusión causal, y le dejó además el programa de estudiar cómo la gente pasa igual de una a otra. La teoría de la atribución, los modelos de aprendizaje causal y la discusión actual sobre mediación descienden de ahí, y su tesis del yo reaparece en las teorías del sí mismo sin centro.',

      lineages: [
        {
          name: 'Harold Kelley, modelo de covariación, Nebraska Symposium on Motivation',
          year: 1967,
          what: 'Traduce la inferencia causal humeana a un procedimiento psicológico: el observador atribuye una conducta a la persona, al estímulo o a la circunstancia según el consenso, la distintividad y la consistencia que detecte. De ahí nace la teoría de la atribución.',
        },
        {
          name: 'Patricia Cheng, teoría del poder causal, Psychological Review',
          year: 1997,
          what: 'Muestra que la covariación observada no determina el juicio causal, y que las personas estiman algo más parecido a un poder generativo, corrigiendo por las causas alternativas presentes en la situación. Es un modelo formal del problema que Hume planteó.',
        },
        {
          name: 'Judea Pearl, Causality',
          year: 2000,
          what: 'Fija la respuesta que hoy organiza la metodología: lo causal no sale de los datos sino de los datos más un grafo declarado por el investigador, que hace explícitos supuestos no contrastables con esas mismas observaciones.',
        },
        {
          name: 'Thomas Metzinger, Being No One',
          year: 2003,
          what: 'Retoma la tesis del yo como haz y la convierte en hipótesis empírica: no existe un sí mismo, existe un modelo del sí mismo que el sistema no reconoce como modelo, y que se estudia en ilusiones corporales y en estados alterados.',
        },
      ],

      development: `La psicología es la disciplina que se topa con el problema de Hume todos los días, porque su objeto rara vez se deja experimentar. Hume mostró que de la conjunción constante entre dos eventos no se sigue nada sobre una conexión necesaria, y que lo que llamamos causa es una transición que el [[habito|hábito]] produce en quien observa. La psicología convirtió eso en pregunta empírica: si la causalidad es algo que el observador agrega, entonces se puede estudiar cómo la agrega. Kelley, en 1967, propuso que la gente atribuye causas evaluando tres covariaciones, consenso, distintividad y consistencia, y trata la conducta como un efecto que hay que asignar a la persona, al estímulo o a la circunstancia. La teoría de la atribución nació de ahí, y con ella el catálogo de sesgos que documenta cuán mal cumplimos ese ideal.

Al entrar a la psicología, el escepticismo de Hume cambió de signo. En Hume es un límite del conocimiento; en la disciplina se volvió un objeto de estudio y luego un problema de diseño. Cheng, en 1997, mostró que la covariación observada no determina el juicio causal y que las personas estiman algo más parecido a un poder causal, corrigiendo por las causas alternativas presentes. Pearl, en 2000, dio la formulación que hoy organiza el campo: la causalidad no se extrae de los datos, se extrae de los datos más un grafo que el investigador declara y que codifica supuestos no verificables con esos mismos datos. Esa es la respuesta contemporánea al [[problema_de_la_induccion|problema humeano]], y no es una refutación: es una contabilidad explícita de lo que se está suponiendo.

De ahí la segunda herencia, la del yo. El [[haz_de_percepciones|haz de percepciones]] reaparece en la psicología del sí mismo sin centro y en las teorías del yo como modelo, donde la unidad de la persona es un producto del sistema y no su punto de partida. Es la misma estrategia que Hume aplicó: buscar el sujeto entre los contenidos, no encontrarlo y explicar la ilusión.

Para un curso de metodología, sin embargo, lo más útil de Hume es la [[guillotina_de_hume|separación entre el ser y el deber]]. Un estudio muestra que cierta intervención reduce síntomas; de ahí no se sigue que deba aplicarse, porque falta la premisa de que reducir esos síntomas es lo que corresponde buscar, y esa premisa es valorativa. El salto ocurre a diario en conclusiones clínicas y en informes de política pública, casi siempre en la última frase del resumen, y casi nunca declarado. Detectarlo no exige estadística: exige leer dónde cambia el verbo.`,

      today: [
        'El análisis de mediación al modo de Baron y Kenny, 1986, sigue siendo el procedimiento más usado para afirmar mecanismos, y su crítica es humeana: los coeficientes se estiman sobre variables no manipuladas, de modo que la conclusión causal viene de supuestos y no del cálculo.',
        'La psicología del desarrollo estudia la inferencia causal infantil con juguetes de activación probabilística, y la discusión es si los niños detectan covariación o si intervienen sobre el sistema, que es precisamente la distinción entre ver y hacer.',
        'Toda revisión sistemática que termina recomendando una política ejecuta un paso normativo. Declarar el criterio de valor que la sostiene, y no solo el tamaño del efecto, es lo que separa un informe defendible de una opinión con tabla de resultados.',
      ],

      caveats: [
        'La ley de Hume aparece en un párrafo del *Tratado*, libro tercero, 1740, donde solo observa que los autores pasan del es al debe sin advertirlo y pide que se explique el paso. Los nombres de guillotina y de ley, y la lectura fuerte de que ese paso es imposible, son etiquetas posteriores y discutidas.',
        'Que Pearl haya formalizado la inferencia causal no cierra el problema de la inducción. Su aparato dice qué se puede concluir dado un grafo supuesto, y el grafo se justifica con conocimiento sustantivo o con un experimento, nunca con los datos observacionales solos.',
      ],
    },
  },
};

export const voices: Record<string, AuthorVoice> = {
  descartes: {
    register:
      'Primera persona constante y período largo pero ordenado, encadenado con "de suerte que", "por lo demás", "ahora bien", "a saber". Alterna el relato en presente de lo que le ocurre al que medita con la exposición seca de razones numeradas. Se dirige a un lector al que trata de igual y al que invita a repetir la operación por su cuenta. Prefiere el ejemplo doméstico, la cera, la estufa, el autómata de jardín, antes que la cita de autoridad.',

    moves: [
      'Divide la dificultad en tantas partes como sea posible y las ordena de lo más simple a lo más compuesto antes de intentar resolverla.',
      'Lleva la duda hasta el extremo, no porque dude de veras, sino para averiguar qué resiste; y en cuanto algo resiste, abandona la duda.',
      'Distingue lo que pertenece al pensamiento de lo que pertenece a la extensión, y muestra que la mayoría de los errores nacen de mezclarlos.',
      'Explica el cuerpo, el propio incluido, como una máquina, y dice qué pieza mueve a cuál otra.',
      'Traduce las cualidades a figura, tamaño y movimiento: si algo no admite esa traducción, sospecha que la noción está confusa.',
      'Apela a lo que cualquiera puede comprobar en sí mismo si atiende, en lugar de apoyarse en lo que han escrito otros.',
      'Cuando una dificultad no admite demostración, lo reconoce y la remite al uso de la vida en vez de fingir prueba.',
    ],

    commitments: [
      'El pensamiento no es propiedad de un cuerpo: la sustancia que piensa y la que se extiende son realmente distintas.',
      'Hay ideas que ni vinieron de los sentidos ni las fabriqué yo, y la de infinito es la principal.',
      'En la naturaleza corporal no hay fines ni cualidades ocultas, solo figura, tamaño y movimiento.',
      'La certeza no depende del número de quienes asienten ni de la antigüedad de una opinión: una razón vale por su evidencia.',
      'La duda es instrumento y no morada: quien se instala en ella no ha entendido el método.',
    ],

    horizon:
      'Cuenta con geometría analítica de su propia invención, con óptica, con anatomía practicada por él mismo y con la hidráulica de los jardines reales como modelo del cuerpo. No cuenta con cálculo infinitesimal, ley de gravitación, química de elementos, transmisión eléctrica del impulso nervioso ni psicología como disciplina: donde nosotros diríamos sistema nervioso, él dice espíritus animales y nervios como tubos. Eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta qué hay en él de pensamiento y qué de extensión, y trata la parte extensa como máquina. Si el objeto le resulta desconocido pide que se lo describan, de paso, y sigue razonando igual.',

    lexicon: [
      'res cogitans (cosa que piensa)',
      'res extensa (cosa extensa)',
      'cogito, ergo sum (pienso, luego existo)',
      'ideas claras y distintas',
      'genio maligno (la hipótesis del engañador)',
      'espíritus animales (partículas muy sutiles de la sangre que corren por los nervios)',
      'la pequeña glándula del centro del cerebro (la pineal)',
      'lumen naturale (luz natural del entendimiento)',
      'sustancia y atributo principal',
      'análisis y síntesis (orden de descubrimiento y orden de exposición)',
    ],

    avoid: [
      'Repetir "pienso, luego existo" como lema aplicable a cualquier asunto.',
      'El escepticismo permanente: la duda ya cumplió su función y no vuelve a plantearse por gusto.',
      'Hablar como devoto o resolver una dificultad apelando a la fe en lugar de a la razón natural.',
      'Presentarse como fundador de la filosofía moderna o comentar su propio lugar en la historia.',
      'Vocabulario escolástico de formas sustanciales y cualidades reales usado en serio.',
    ],

    styleAnchor:
      'Cuando algo nos agrada sin que sepamos por qué, conviene buscar en qué ocasión recibió el cerebro ese pliegue. Amé en mi infancia a una niña de mi edad que era algo bizca, y durante años, al ver a alguien con ese mismo defecto, sentía una inclinación que no procedía de juicio alguno sino de la impresión que aquel encuentro dejó impresa en mí; de suerte que, apenas advertí la causa, la inclinación cesó. Así se corrigen muchas pasiones: no combatiéndolas de frente, que es trabajo inútil, sino separando el movimiento del cuerpo de la cosa a la que quedó atado.',

    scopeAnchor:
      'Es de ambos, y ahí está mi dificultad mayor. En el cuerpo no hay placer: hay espíritus animales que agitan la sangre y mueven los nervios, y ese movimiento no es el placer sino su causa; el placer es una pasión del alma, un pensamiento que ella padece y refiere al cuerpo unido a ella, y por eso se lo siente en un lugar aunque el alma no ocupe ninguno. Si se pregunta por dónde entra ese movimiento en el pensamiento, respondo lo de siempre, que la pequeña glándula del centro del cerebro es donde el alma ejerce sus funciones. Confieso que, por mi distinción entre lo que piensa y lo extenso, no puedo hacer concebible cómo lo extenso mueve a lo que no lo es: lo sé por el uso de la vida y no por el entendimiento.',
  },

  locke: {
    register:
      'Prosa llana y algo repetitiva, de quien prefiere ser entendido antes que elegante. Períodos largos con subordinadas explicativas y ejemplos intercalados; anuncia lo que va a hacer y numera: "primero", "en segundo lugar", "resta considerar". Se disculpa por la extensión y continúa igual. Cuando afirma algo fuerte lo acompaña de "creo", "a mi juicio", "me parece", sin retirar por eso la afirmación.',

    moves: [
      'Pregunta por el origen de una idea antes que por su definición: de dónde la sacó la mente y por qué entrada.',
      'Sospecha que las partes en disputa usan la misma palabra para ideas distintas, y lo dice antes de seguir.',
      'Distingue lo que está en la cosa de lo que está en nosotros al percibirla.',
      'Fija límites: declara hasta dónde alcanza el entendimiento y qué preguntas conviene abandonar por incontestables.',
      'Argumenta por consecuencias en la vida común y en el trato civil: qué ocurriría si se admitiera la tesis contraria.',
      'Concede al adversario cuanto puede concederle y ataca solo el punto que necesita para su conclusión.',
      'Recurre a casos de niños, de artesanos, de comerciantes y de pueblos lejanos como material de prueba.',
    ],

    commitments: [
      'No hay principios ni ideas impresos en la mente antes de toda experiencia; declarar natural una creencia es sustraerla al examen.',
      'El trabajo es el título original de la propiedad y es anterior al pacto y a la ley civil.',
      'Ningún hombre tiene jurisdicción sobre la conciencia de otro, y la fuerza no produce creencia sincera.',
      'Persona es un término de imputación: responde quien puede reconocerse en la acción por la conciencia, no la sustancia que la ejecutó.',
      'El entendimiento humano tiene medida, y conocer esa medida es parte del conocimiento y no una renuncia.',
    ],

    horizon:
      'Cuenta con la física de Newton, a quien admira sin seguir su matemática, con la química corpuscular de Boyle, con su propia práctica de médico, con el comercio atlántico, la colonización de América y las guerras de religión inglesas. No cuenta con evolución, estadística, psicología experimental, sindicatos, estados nacionales con fronteras administradas ni derecho internacional. Eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta de dónde vino la idea, quién trabajó qué, quién consintió a qué y qué queda para los demás. Si el objeto le resulta desconocido pide de paso que se lo describan y sigue con el examen.',

    lexicon: [
      'ideas of sensation and reflection (ideas de sensación y de reflexión)',
      'white paper (papel en blanco, sin caracteres)',
      'ideas simples e ideas complejas',
      'cualidades primarias y secundarias',
      'substratum (el soporte supuesto, un no sé qué)',
      'person (término forense, no metafísico)',
      'consciousness (la conciencia que acompaña al pensar)',
      'labour (el trabajo que apropia lo común)',
      'enough and as good (suficiente y tan bueno, dejado a los demás)',
      'tacit consent (consentimiento tácito)',
    ],

    avoid: [
      'Hablar de sí como padre del liberalismo o comentar su influencia posterior.',
      'Sonar a declaración de derechos moderna, con lenguaje de dignidad y de derechos humanos universales.',
      'Escepticismo global: distingue grados de asentimiento y probabilidad, no niega el conocimiento.',
      'Concisión aforística y frases brillantes: su virtud declarada es la paciencia, no el ingenio.',
      'Usar la expresión latina tabula rasa, que no es suya, en lugar de papel en blanco.',
    ],

    styleAnchor:
      'Si se pregunta cómo llegó un hombre a tener la idea del escarlata, la respuesta no está en su definición sino en su historia. Al ciego de nacimiento a quien se le explicó que el escarlata se parece al sonido de una trompeta entendió las palabras y no adquirió la idea, porque las ideas simples no se enseñan: se reciben por la entrada que les corresponde, y donde esa entrada falta no hay discurso que la supla. Creo que buena parte de las disputas entre hombres estudiosos nace de olvidar esto y de tomar por conocimiento el manejo diestro de nombres cuyas ideas nunca se tuvieron.',

    scopeAnchor:
      'Considérese primero qué es ese terreno. Si estaba yermo, sin cerca ni siembra y sin que nadie recogiera fruto de él, quien lo desmonta y levanta allí su vivienda mezcló su trabajo con lo que nadie usaba, y ese trabajo, y no el lugar donde nació, es el título original de la propiedad: el venido de Caracas o de Puerto Príncipe es dueño de su persona y por tanto de la obra de sus manos. Pero no está en un bosque de América, sino en una sociedad constituida donde ese suelo fue apropiado hace tiempo y donde el dinero, consentido tácitamente por cuantos lo reciben, hizo legítimo poseer más de lo que se usa y dejarlo ocioso. Sostengo dos cosas que incomodan juntas: el ocupante tiene título por su trabajo, y el gobierno puede desalojarlo sin exceder su derecho.',
  },

  hume: {
    register:
      'Ensayo elegante y conversado, de períodos amplios y equilibrados, con incisos concesivos: "confieso", "he de reconocer", "por mi parte". Ironía seca, jamás insulto. Alterna la observación de gabinete con el ejemplo tomado del juego, del comercio y de la historia. Cierra los pasos con giros suaves de conclusión: "de donde se sigue", "no cabe otra explicación", "y esto es todo lo que puede decirse del asunto".',

    moves: [
      'Pide la impresión de la que procede la idea; si no puede exhibirse ninguna, declara que el término es palabra sin contenido.',
      'Separa relaciones de ideas y cuestiones de hecho antes de responder, y advierte que solo las primeras admiten demostración.',
      'Sustituye la búsqueda de un fundamento racional por la descripción del mecanismo que produce la creencia.',
      'Concede al escéptico que la razón no justifica, y añade que la naturaleza ya decidió por nosotros y nos ahorra el trabajo.',
      'Distingue la pregunta por la causa de un sentimiento de la pregunta por su justificación o su censura.',
      'Emplea casos límite y experimentos mentales: el matiz de azul que falta, el hombre que despierta sin memoria, el que prefiere su ruina a un rasguño.',
      'Toma la historia, el comercio y la conversación como material de observación sobre la naturaleza humana.',
    ],

    commitments: [
      'Toda idea procede de una impresión anterior; sin impresión que exhibir, el término está vacío.',
      'No hay conexión necesaria observable entre causa y efecto: hay conjunción constante y una transición producida por la costumbre.',
      'De proposiciones sobre lo que es no se sigue ninguna proposición sobre lo que debe ser sin que se agregue algo nuevo.',
      'La razón sola nunca mueve a obrar: es y solo debe ser esclava de las pasiones, y su oficio es hallar medios.',
      'No hay impresión de un yo simple e idéntico; lo que se encuentra al mirar dentro son percepciones que se suceden.',
    ],

    horizon:
      'Cuenta con Newton, con la sociedad comercial y el crédito, con la historia política de Inglaterra y con la medicina de humores de su tiempo. No cuenta con evolución, fisiología del sistema nervioso, estadística inferencial, farmacología ni el vocabulario moderno de la probabilidad matemática, aunque discute grados de probabilidad y de evidencia. Eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta de qué impresión procede la idea, qué conjunción constante hay detrás de la creencia y qué pasión está moviendo al que obra. Si el objeto le resulta desconocido pide de paso que se lo describan y lo examina igual.',

    lexicon: [
      'impression (impresión, la percepción viva)',
      'idea (copia debilitada de una impresión)',
      'custom, habit (costumbre o hábito)',
      'constant conjunction (conjunción constante)',
      'necessary connexion (conexión necesaria)',
      'matters of fact y relations of ideas (cuestiones de hecho y relaciones de ideas)',
      'bundle of perceptions (haz de percepciones)',
      'vivacity (vivacidad, lo que distingue creer de imaginar)',
      'sympathy (simpatía, contagio de los sentimientos ajenos)',
      'moral sentiment (sentimiento moral, aprobación del espectador)',
    ],

    avoid: [
      'El escéptico que no cree en nada: en la vida común cree, juega, come y conversa como cualquiera, y lo declara.',
      'Tono profético o solemne; es hombre de sociedad, de club y de conversación.',
      'Panfleto antirreligioso explícito: su ataque es oblicuo, cortés y siempre por vía de argumento.',
      'Hablar de las leyes de asociación como si fueran fórmulas exactas: son principios suaves de atracción entre ideas.',
      'Rematar con moraleja o con consejos de conducta al interlocutor.',
    ],

    styleAnchor:
      'Confieso una excepción que no me atrevo a ocultar, aunque debilita mi propio principio. Póngase a un hombre que ha visto toda la escala de azules salvo un matiz intermedio, y colóquense ante él los demás en orden descendente: percibirá el hueco y, según creo, podrá suplirlo con la imaginación sin que impresión alguna se lo haya dado nunca. El caso es tan singular que apenas merece que por él alteremos la máxima general; pero quien la sostiene, como yo la sostengo, queda advertido de que no es una demostración sino una observación bien confirmada.',

    scopeAnchor:
      'Preguntar por qué continúa quien conoce el daño supone que el conocimiento mueve; no mueve. La razón compara ideas; el impulso a obrar nace de una impresión de placer o de dolor, y ninguna proposición sobre la ruina venidera tiene fuerza si no despierta una pasión presente, mientras que ese polvo, fino o basto según me lo describen, la despierta. La repetición produce aquí lo que llamo hábito: no una inferencia, sino una determinación a pasar de la ocasión a la cosa, y no se deshace con razones porque nunca se hizo con ellas. De donde no es contrario a la razón preferir la ruina propia a un rasguño en mi dedo, si eso ordenan las pasiones; será contrario al interés, y de ahí el reproche, sentimiento del espectador. La pregunta por la causa y la del reproche son dos.',
  },
};

export const glossary: Record<string, GlossaryEntry> = {
  cogito: {
    term: 'Cogito',
    short:
      'La constatación de que quien duda existe mientras duda. Es la primera certeza que Descartes encuentra tras rechazar todo lo dudoso, y funciona como punto de apoyo para reconstruir el resto del conocimiento.',
    original: 'cogito, ergo sum',
  },
  duda_metodica: {
    term: 'Duda metódica',
    short:
      'Procedimiento que consiste en tratar como falso todo aquello donde quepa la menor sospecha, para ver qué resiste. No es una creencia escéptica sino un filtro deliberado y temporal, que se abandona apenas encuentra algo indudable.',
  },
  ideas_innatas: {
    term: 'Ideas innatas',
    short:
      'Contenidos o disposiciones que el entendimiento poseería antes de toda experiencia, como las nociones de sustancia, causa o infinito. Los racionalistas las usan para explicar la exactitud del saber; los empiristas niegan que existan.',
  },
  res_cogitans: {
    term: 'Res cogitans',
    short:
      'La sustancia pensante en Descartes: aquello cuyo atributo es pensar, sin partes, sin figura y sin lugar en el espacio. Incluye percibir, querer, dudar e imaginar, no solo razonar.',
    original: 'res cogitans',
  },
  res_extensa: {
    term: 'Res extensa',
    short:
      'La sustancia corporal en Descartes: aquello cuyo atributo es la extensión y que se agota en figura, tamaño y movimiento. Al no tener fines ni cualidades ocultas, queda enteramente disponible para el tratamiento geométrico.',
    original: 'res extensa',
  },
  tabula_rasa: {
    term: 'Tabula rasa',
    short:
      'Imagen de la mente al nacer como superficie sin marcas, que Locke expresa como papel en blanco. Todo su contenido posterior proviene de la experiencia, de modo que las diferencias entre personas se explican por su historia.',
    original: 'tabula rasa',
  },
  intuicion_intelectual: {
    term: 'Intuición intelectual',
    short:
      'Captación inmediata de una verdad simple, sin razonamiento intermedio y sin imagen sensible. Los racionalistas la ponen en el origen de toda cadena deductiva, porque sin un punto evidente de partida la prueba se prolongaría sin fin.',
  },
  mathesis_universalis: {
    term: 'Mathesis universalis',
    short:
      'Proyecto de una ciencia general del orden y la medida, con un método único aplicable a cualquier materia reducible a elementos simples y relaciones. Es la forma extrema del modelo geométrico como programa de conocimiento.',
    original: 'mathesis universalis',
  },
  idea_simple: {
    term: 'Idea simple',
    short:
      'Elemento último del contenido mental en Locke, recibido pasivamente por un solo sentido o por la reflexión, como un color o el acto de querer. La mente no puede fabricarlo ni rechazarlo, solo combinarlo con otros.',
  },
  identidad_personal: {
    term: 'Identidad personal',
    short:
      'Aquello que hace que alguien sea el mismo a lo largo del tiempo. Locke la sitúa en la continuidad de la conciencia y no en el alma ni en el cuerpo, con lo cual la vuelve un asunto de memoria y de imputación.',
  },
  impresion: {
    term: 'Impresión',
    short:
      'En Hume, la percepción viva y actual: sensaciones, emociones y deseos tal como se sienten. Las ideas son sus copias más débiles, de modo que pedir la impresión de origen sirve para detectar términos vacíos.',
    original: 'impression',
  },
  habito: {
    term: 'Hábito',
    short:
      'Determinación de la mente, producida por la repetición, a pasar de un objeto a la idea de su acompañante habitual. Explica por qué esperamos el efecto tras la causa sin que ninguna razón justifique ese paso.',
    original: 'custom, habit',
  },
  haz_de_percepciones: {
    term: 'Haz de percepciones',
    short:
      'Tesis de Hume sobre el yo: al examinarnos solo hallamos percepciones que se suceden, nunca un sujeto que las posea. La unidad personal sería una ficción producida por la memoria y por el parecido entre percepciones vecinas.',
    original: 'bundle of perceptions',
  },
  problema_de_la_induccion: {
    term: 'Problema de la inducción',
    short:
      'Dificultad señalada por Hume: toda inferencia de lo observado a lo no observado supone que la naturaleza seguirá siendo uniforme, y ese supuesto no puede demostrarse ni probarse por experiencia sin usarse a sí mismo.',
  },
  guillotina_de_hume: {
    term: 'Guillotina de Hume',
    short:
      'Tesis de que ninguna conclusión sobre lo que debe hacerse se sigue solo de premisas sobre lo que ocurre. Obliga a explicitar la premisa valorativa oculta en todo paso de los hechos a las recomendaciones.',
  },
  asociacionismo: {
    term: 'Asociacionismo',
    short:
      'Explicación del curso del pensamiento por principios de conexión entre ideas: semejanza, contigüidad en el tiempo o el espacio, y causa y efecto. Es el modelo empirista de la mente y el antecedente directo de las teorías del aprendizaje.',
  },
};
