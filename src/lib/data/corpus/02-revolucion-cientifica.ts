import type {
  ConceptExposition,
  AuthorVoice,
  GlossaryEntry,
} from '@/types/philosophical';

export const expositions: Record<string, ConceptExposition> = {
  rev_cientifica: {
    thesis:
      'La naturaleza es un solo orden homogéneo, hecho de la misma materia en todas partes, sin regiones privilegiadas, sin jerarquía y sin fines. Conocerla deja de ser contemplar lo que ocurre y pasa a ser producir condiciones que no se dan solas para leer en ellas una [[ley_natural]] formulada en cantidades.',

    problem:
      'El cosmos heredado de Aristóteles y de Ptolomeo estaba partido en dos: un mundo sublunar donde las cosas se generan y se corrompen, y un cielo incorruptible de movimiento circular eterno, con un arriba y un abajo absolutos y un [[lugar_natural]] al que cada cuerpo tiende. En ese mundo explicar era nombrar la naturaleza de cada cosa y el fin hacia el que se dirige. Cuando la Tierra pasa a ser un planeta más, cuando aparece una estrella nueva en la región que no admitía cambio y cuando el mismo suelo lunar resulta accidentado, la partición se vuelve insostenible y con ella caen las [[teleologia|causas finales]] como criterio de explicación, sin que haya todavía nada puesto en su lugar.',

    keyNotions: [
      {
        term: 'Homogeneización del universo',
        gloss:
          'Deja de haber dos físicas, una para el cielo y otra para la Tierra. La misma materia y las mismas reglas valen en cualquier punto del espacio, que se vuelve infinito e isótropo. La consecuencia no es astronómica sino lógica: cualquier resultado obtenido aquí abajo puede extenderse a todo el universo.',
      },
      {
        term: 'Matematización',
        gloss:
          'No consiste en usar más cálculo sino en decidir qué cuenta como real. Las propiedades que admiten número, figura, tamaño, posición y movimiento, se atribuyen al cuerpo; las demás quedan del lado del que percibe. La pregunta por qué es una cosa se sustituye por la pregunta de cuánto varía y en qué proporción.',
      },
      {
        term: 'Experimento como interrogatorio',
        gloss:
          'Frente a la observación paciente de lo que sucede por sí solo, el experimento fabrica una situación que en la naturaleza no ocurre: aísla una variable, elimina perturbaciones, repite. Un fenómeno preparado y repetible informa más que mil casos espontáneos, porque permite decir qué habría pasado si.',
      },
      {
        term: 'Mecanicismo',
        gloss:
          'El modelo de inteligibilidad pasa a ser la máquina: partes de materia que se empujan por contacto, como en un reloj. Entender algo es exhibir el arreglo de piezas que produce su comportamiento. Los seres vivos, y con ellos el cuerpo humano, entran en el mismo esquema.',
      },
      {
        term: 'Ley natural',
        gloss:
          'Una relación matemática constante entre magnitudes medibles, que vale siempre y en todas partes y no depende de la esencia del objeto. Sustituye a la definición aristotélica como forma canónica del conocimiento: se pasa de decir qué es algo a decir cómo covaría con otra cosa.',
      },
    ],

    development: `Lo que la Revolución Científica desarma no es una lista de errores sueltos sino una ontología completa. El mundo antiguo estaba ordenado por lugares y por fines: había arriba y abajo absolutos, regiones cualitativamente distintas, cuerpos que tendían a su sitio propio, y explicar consistía en nombrar la naturaleza de cada cosa. Ese edificio no se derrumba por acumulación de datos: se derrumba porque las piezas nuevas, la Tierra en movimiento desde 1543, la estrella nueva de 1572, el relieve lunar, no caben en él sin destruir su principio de orden. Si no hay dos regiones, no hay dos físicas, y si no hay dos físicas, cualquier resultado obtenido en una mesa vale para las estrellas.

Sin fines ni naturalezas, hace falta otro criterio de explicación, y se lo encuentra en la [[matematizacion|matematización]]. Conviene ver el alcance de la decisión, porque no es técnica sino ontológica: se declara que lo real en el cuerpo es lo que admite número y que el resto pertenece al viviente que percibe. El universo queda escrito en figuras y proporciones, y todo lo que no se deja escribir así, el color, el sabor, el propósito, el valor, deja de ser un rasgo del mundo. La ciencia gana precisión y pierde el mundo cualitativo de una vez.

El segundo cambio es de práctica. La [[episteme]] antigua se apoyaba en lo que ocurre de ordinario, observado sin intervenir. Ahora el conocimiento se busca en situaciones fabricadas: un plano que diluye la caída, una bomba que retira el aire, un prisma que descompone la luz. La naturaleza se interroga bajo condiciones que ella nunca produce por sí sola, y el caso artificial se declara más informativo que el espontáneo. De ahí se sigue algo institucional: el experimento debe hacerse ante testigos, publicarse y poder rehacerse, y el conocimiento pasa a ser propiedad de una comunidad que verifica y no de un maestro que enseña.

El precio es el [[mecanicismo]] y sus deudas. Un mundo de materia y movimiento explica el reloj, el corazón como bomba y el planeta, pero no tiene dónde alojar la cualidad, el sentido ni al sujeto que mide. Descartes resolverá poniéndolos en otra sustancia, Locke administrará el reparto y Hume preguntará con qué derecho se generalizan las leyes desde experimentos finitos. Ninguna de esas preguntas existía antes: son la factura de esta operación.

La psicología nace doscientos años después dentro de este marco y con una deuda de estatus. Para contar como ciencia tuvo que mostrar que su objeto admite medida y montaje experimental, y por eso su acta de nacimiento es un laboratorio y no una teoría. Ese origen explica una tensión que sigue viva: lo que no se deja traducir a variables medibles suele quedar sospechoso de no ser conocimiento, y la discusión entre diseños cuantitativos y cualitativos repite, con otro vocabulario, la decisión del siglo diecisiete sobre qué cuenta como real.`,

    objections: [
      {
        from: 'Kuhn',
        fromId: 'kuhn',
        claim:
          'No hubo un método nuevo que reemplazara a otro viejo por ser mejor. Hubo cambio de paradigma, con pérdidas incluidas, y la idea de un procedimiento único llamado método científico es una reconstrucción posterior escrita por los ganadores.',
      },
      {
        from: 'Husserl',
        fromId: 'husserl',
        claim:
          'La matematización sustituyó el mundo de la vida por un traje de ideas y luego olvidó que lo había hecho. Tomó por ser verdadero lo que es un método de aproximación, y así dejó sin fundamento la experiencia desde la cual toda medición cobra sentido.',
      },
      {
        from: 'Haraway',
        fromId: 'haraway',
        claim:
          'El observador neutral que interroga a una naturaleza pasiva no es un logro epistémico sino una posición no marcada. Toda visión es situada y parcial; la mirada desde ninguna parte encubre quién financia el laboratorio, quién puede entrar en él y qué preguntas nunca se formulan.',
      },
    ],

    works: [
      { title: 'De revolutionibus orbium coelestium', year: 1543, note: 'Copérnico pone la Tierra en movimiento y abre el problema de una física que lo permita.' },
      { title: 'De humani corporis fabrica', year: 1543, note: 'Vesalio corrige a Galeno por disección directa y establece la primacía del cuerpo abierto sobre el texto.' },
      { title: 'Astronomia nova', year: 1609, note: 'Kepler abandona el círculo y ajusta las órbitas a los datos de Tycho: la elipse contra la perfección.' },
      { title: 'Novum organum', year: 1620, note: 'Bacon propone tablas, casos negativos y una inducción reglada; la naturaleza se conoce forzándola.' },
      { title: 'The Sceptical Chymist', year: 1661, note: 'Boyle disuelve los elementos aristotélicos y hace del experimento público, con testigos, la fuente de la prueba.' },
    ],

    psychology: {
      claim:
        'La psicología existe como disciplina separada porque alguien mostró que la sensación admite número, y esa demostración tiene fecha: los Elemente der Psychophysik de Fechner, 1860. Lo que la Revolución Científica le entrega no es una teoría de la mente sino un programa de medida, junto con el problema que ese programa genera al dejar la cualidad sentida fuera del inventario de lo real.',

      lineages: [
        {
          name: 'Gustav Theodor Fechner, Elemente der Psychophysik',
          year: 1860,
          what: 'Formula la relación logarítmica entre la magnitud del estímulo y la de la sensación, apoyándose en la fracción constante que Weber había medido en 1834, y fija los métodos de umbral. La sensación queda convertida en la primera variable dependiente cuantitativa de la disciplina.',
        },
        {
          name: 'Wilhelm Wundt, laboratorio de Leipzig',
          year: 1879,
          what: 'Instala el montaje completo, cronoscopios, taquistoscopios y kimógrafos, para producir dentro de una sala universitaria fenómenos psíquicos medibles y repetibles a voluntad. La psicología obtiene su acta de nacimiento institucional en forma de laboratorio y no de tratado.',
        },
        {
          name: 'S. S. Stevens, On the theory of scales of measurement, Science',
          year: 1946,
          what: 'Define las cuatro escalas, nominal, ordinal, de intervalo y de razón, y fija qué operación estadística admite cada una. Con eso la matematización deja de ser una aspiración y pasa a ser una regla operativa que gobierna todo informe empírico.',
        },
        {
          name: 'David Chalmers, Facing up to the problem of consciousness',
          year: 1995,
          what: 'Separa los problemas fáciles de la conciencia, todos funcionales y por lo tanto medibles, del problema difícil de por qué hay algo que se siente. Es la partición entre cualidades primarias y secundarias devuelta a la agenda de la neurociencia cognitiva.',
        },
      ],

      development: `La psicología llega tarde al reparto del siglo diecisiete y llega del lado perdedor. Cuando la [[matematizacion|matematización]] declara que lo real en el cuerpo es lo que admite figura y número, todo lo demás, el color visto, el dolor sentido, el sonido oído, queda del lado del que percibe, y ese lado no es materia de ciencia sino residuo. Durante doscientos años eso significó que no podía haber ciencia de lo psíquico, y Kant lo dijo con todas sus letras: lo interno no admite medida porque solo tiene una dimensión, el tiempo. La disciplina necesitaba exactamente una cosa para existir, un procedimiento que devolviera lo secundario al orden de la cantidad.

Ese procedimiento tiene fecha y nombre. Fechner no mide la sensación, que es inaccesible, sino la diferencia apenas perceptible entre dos estímulos, y la declara unidad. Sumando unidades iguales de discriminación construye una escala de intensidad sentida y obtiene que la sensación crece como el logaritmo del estímulo. La [[psicofisica|psicofísica]] resuelve el problema de la medida por un desvío: mide una conducta de comparación y la trata como si fuera experiencia. De ahí salen el umbral absoluto, el umbral diferencial, la función psicométrica y, por esa vía, toda la psicometría posterior. La operación es brillante y conviene ver lo que cuesta, porque lo medido no es la cualidad sino el desempeño discriminativo de un observador.

Lo que se transforma al entrar es la ambición. Fechner era panpsiquista y buscaba probar que mente y materia son dos caras de lo mismo; la disciplina se quedó con sus métodos y descartó su metafísica sin declararlo. Wundt hace después el movimiento institucional: no una teoría nueva sino una sala con instrumentos, donde el fenómeno psíquico se produce a voluntad y se repite ante terceros. Desde entonces la psicología acredita estatus mostrando montaje y cifra, y la [[ley_natural|ley]] entendida como covariación entre magnitudes es la forma que sus resultados deben adoptar para contar como conocimiento.

La discusión sigue abierta en dos frentes. El primero es si los constructos psicológicos son cantidades. Joel Michell sostiene desde 1999 que la disciplina asumió sin probarla la estructura cuantitativa de sus atributos, y que asignar números no la crea. El segundo frente es el viejo reparto intacto: la neurociencia cognitiva localiza correlatos neurales con precisión creciente y no por eso avanza un paso sobre por qué hay experiencia. A quien investiga esto le exige una pregunta previa a cualquier análisis, qué se midió exactamente, si una cualidad o un desempeño, y qué autoriza a tratar la escala obtenida como métrica.`,

      today: [
        'La discusión sobre si corresponde aplicar pruebas paramétricas a escalas Likert reedita la taxonomía de Stevens de 1946 y no está resuelta: se decide en cada comité editorial, con criterios que rara vez se explicitan en el artículo publicado.',
        'La crítica de Joel Michell en Measurement in Psychology, 1999, sostiene que la psicometría nunca probó que sus atributos tengan estructura cuantitativa, y que la teoría de respuesta al ítem asume esa estructura en lugar de contrastarla.',
        'La búsqueda de correlatos neurales de la conciencia con resonancia funcional produce mapas cada vez más finos del acceso y ninguna respuesta sobre la experiencia, que es el reparto galileano operando dentro de un escáner.',
      ],

      caveats: [
        'Fechar en 1879 la fundación de la psicología es una convención historiográfica discutida. Wundt tenía sala asignada en Leipzig desde 1876, la universidad no reconoció el laboratorio en su catálogo oficial hasta 1883, y otros centros hacían investigación psicológica experimental por los mismos años.',
        'El Wundt experimentalista estrecho de los manuales es una construcción posterior, en buena parte de sus lectores estadounidenses. Su Völkerpsychologie ocupa diez volúmenes publicados entre 1900 y 1920, y ahí sostiene que los procesos superiores no se estudian en laboratorio sino por sus productos culturales.',
      ],
    },
  },

  galileo: {
    thesis:
      'El movimiento no se explica diciendo qué busca el cuerpo sino midiendo cómo varía su velocidad en el tiempo: la caída sigue una proporción exacta, los espacios crecen como los cuadrados de los tiempos, y eso se demuestra sobre un plano inclinado. Del cuerpo son propias la figura, el tamaño, el número y el movimiento; los colores, sabores, olores y sonidos no están en él sino en el viviente, y suprimido el viviente quedan suprimidos.',

    problem:
      'La física heredada respondía a la caída con la naturaleza del grave y su tendencia al sitio que le corresponde, lo cual es compatible con cualquier medida y por lo tanto no predice ninguna. Tampoco había manera de decidir entre sistemas del mundo, porque los argumentos disponibles eran de autoridad y de conveniencia. Hace falta una física que produzca números comprobables por otro, y una razón para descartar que la Tierra en movimiento arrojaría a los cuerpos.',

    keyNotions: [
      {
        term: 'Ley de caída y plano inclinado',
        gloss:
          'La velocidad de un cuerpo que cae crece en proporción al tiempo, y los espacios recorridos siguen la serie de los números impares. Como la caída libre es demasiado rápida para medirla, el plano inclinado la diluye sin alterar su forma: el montaje no observa el fenómeno, lo hace medible.',
      },
      {
        term: 'Método resolutivo compositivo',
        gloss:
          'Se descompone el fenómeno complejo en la relación simple que lo gobierna, se demuestra esa relación en condiciones idealizadas sin aire ni roce, y luego se recompone añadiendo las perturbaciones. La discrepancia entre cálculo y observación deja de refutar la ley y pasa a atribuirse al medio.',
      },
      {
        term: 'Cualidades primarias y secundarias',
        gloss:
          'Las propiedades que no puedo dejar de pensar en un cuerpo, forma, tamaño, posición, número y movimiento, están en él. Las que dependen del órgano, color, sabor, olor y sonido, son nombres que residen en el cuerpo sensitivo. La cosquilla no está en la pluma, y el calor tampoco está en el fuego.',
      },
      {
        term: 'Experimento mental',
        gloss:
          'Argumento que obliga al adversario a contradecirse sin necesidad de montaje. Si los cuerpos pesados caen más rápido, al atar uno pesado a uno liviano el conjunto debería caer a la vez más rápido, por ser más pesado, y más lento, por el freno del liviano. La tesis se destruye desde dentro.',
      },
      {
        term: 'Relatividad del movimiento e inercia',
        gloss:
          'Bajo cubierta de un barco que navega uniformemente ningún experimento revela si el barco se mueve. El movimiento compartido no produce efectos observables dentro del sistema, y un cuerpo sin impedimento conserva el suyo. Con eso desaparece la objeción de que la Tierra en marcha dejaría atrás lo que se lanza.',
      },
    ],

    development: `Galileo se hace cargo de un problema que la física de las naturalezas no puede resolver: no da un solo número. Decir que la piedra cae porque el grave tiende hacia abajo es compatible con cualquier resultado, y por eso no compromete a nada. Su giro consiste en cambiar la pregunta. No pregunta por qué cae un cuerpo, sino según qué proporción cae, y define el movimiento naturalmente acelerado como aquel cuya velocidad crece en partes iguales en tiempos iguales. De esa definición se deduce que los espacios son como los cuadrados de los tiempos, y esa consecuencia sí se puede confrontar con un canal de madera, una bola pulida y un reloj de agua.

Para que la confrontación funcione hace falta un procedimiento, el [[resolutivo_compositivo|análisis resolutivo compositivo]]: se aísla la relación simple, se la demuestra en condiciones que nadie observa jamás, sin aire y sin roce, y luego se devuelven las perturbaciones al cuadro. Esto tiene una consecuencia epistemológica incómoda y decisiva: el dato bruto deja de ser juez inmediato de la teoría. Cuando la bola no llega donde debía, se sospecha del medio antes que de la ley. Y donde el montaje no alcanza, argumenta con un [[experimento_mental|experimento mental]], como el de los dos cuerpos atados, que destruye la tesis contraria por contradicción interna. Con la [[inercia]] y el barco cerrado remueve además el obstáculo físico al movimiento de la Tierra.

La operación más pesada está en *Il Saggiatore*. Galileo sostiene que figura, tamaño, número y movimiento son inseparables del cuerpo, mientras que colores, sabores, olores y sonidos son meros nombres que residen en el que siente: la pluma no contiene la cosquilla, el fuego no contiene el calor. Quedan así dos listas, [[cualidades_primarias|cualidades primarias]] y [[cualidades_secundarias|cualidades secundarias]], y el mundo físico se queda con las primeras.

El precio se cobra rápido. Todo lo expulsado de la naturaleza tiene que alojarse en alguna parte, y esa parte es el sujeto que percibe. Descartes lo convertirá en otra sustancia, Locke heredará la distinción con estos mismos nombres y Berkeley y Hume mostrarán que los argumentos que vuelven relativo el color valen igual contra la extensión. El problema mente cuerpo no es un enigma perenne de la humanidad: es la factura de esta decisión metodológica.

La psicología nace justamente para cobrar esa factura. La [[psicofisica|psicofísica]] de Fechner intenta devolver al orden de la medida lo que Galileo dejó fuera, buscando una relación funcional entre un estímulo físico medible y una sensación reportada, y de ahí salen el umbral, la escala y toda la psicometría posterior. El diseño entero descansa sobre la apuesta de que lo secundario, que por definición no está en el objeto, admite tratamiento cuantitativo mediante el informe del sujeto. Cada discusión sobre validez de constructo vuelve a ese punto.`,

    objections: [
      {
        from: 'Aristóteles',
        fromId: 'aristoteles',
        claim:
          'Describir la proporción del movimiento no es explicarlo. Se obtiene una regla de cálculo y se pierde la pregunta por la causa; además, quien declara que el color no está en la cosa duplica el mundo en uno medible y otro aparente, que era justamente el defecto que se reprochaba a Platón.',
      },
      {
        from: 'Hume',
        fromId: 'hume',
        claim:
          'La distinción no se sostiene. Los mismos argumentos que hacen del color algo relativo al órgano valen contra la extensión y la figura, que también se perciben distintas según distancia y disposición. Separadas las cualidades secundarias, no queda cuerpo alguno que sostenga a las primarias.',
      },
      {
        from: 'Feyerabend',
        claim:
          'Galileo no venció por rigor. Usó propaganda, escribió en vernáculo para saltarse a los expertos y sostuvo hipótesis auxiliares sin fundamento sobre la fiabilidad del telescopio, cuyas imágenes terrestres y celestes no eran comparables. Su método real fue mucho menos ordenado que la leyenda.',
      },
    ],

    works: [
      { title: 'Sidereus nuncius', year: 1610, note: 'Montañas en la Luna, satélites de Júpiter y estrellas invisibles a simple vista: el cielo deja de ser perfecto.' },
      { title: 'Il Saggiatore', year: 1623, note: 'El libro de la naturaleza escrito en lengua matemática y la distinción entre cualidades primarias y secundarias.' },
      { title: 'Diálogo sobre los dos máximos sistemas del mundo', year: 1632, note: 'La relatividad del movimiento y el barco cerrado; el argumento que le costó el proceso.' },
      { title: 'Discursos y demostraciones sobre dos nuevas ciencias', year: 1638, note: 'La ley de caída, el plano inclinado y la resistencia de los materiales, escrito bajo arresto.' },
    ],

    psychology: {
      claim:
        'El diseño experimental de la psicología es una traducción directa del plano inclinado: no se observa el fenómeno, se lo fabrica en una situación que aísla una variable y suprime las demás. Con el montaje viene la idealización, y con la idealización la sospecha permanente de que lo medido existe solo dentro del laboratorio.',

      lineages: [
        {
          name: 'Hermann Ebbinghaus, Über das Gedächtnis',
          year: 1885,
          what: 'Inventa las sílabas sin sentido para eliminar el significado previo, que es la variable perturbadora, y mide sobre sí mismo curvas de olvido. Es el plano sin roce aplicado a la memoria: un material que no existe fuera del experimento.',
        },
        {
          name: 'Ronald Fisher, The Design of Experiments',
          year: 1935,
          what: 'Convierte el control de las variables ajenas en procedimiento formal mediante asignación aleatoria, y con eso autoriza a atribuir la diferencia observada a la manipulación. El grupo control aleatorizado es la versión estadística del aislamiento galileano.',
        },
        {
          name: 'Egon Brunswik, Perception and the Representative Design of Psychological Experiments',
          year: 1956,
          what: 'Objeta que aislar variables produce resultados válidos solo para el entorno artificial que las aisló, y propone muestrear situaciones con el mismo cuidado con que se muestrean sujetos. De ahí viene la noción de validez ecológica.',
        },
        {
          name: 'Donald Campbell y Julian Stanley, Experimental and Quasi-Experimental Designs for Research on Teaching',
          year: 1963,
          what: 'Nombran y separan validez interna y validez externa, y listan las amenazas a cada una. La tensión entre pureza del montaje y alcance del resultado queda convertida en una lista de control que todo diseño debe responder.',
        },
      ],

      development: `Lo que la psicología toma de Galileo no es un contenido sino un gesto, y el gesto consiste en fabricar la situación en vez de esperarla. La caída libre es demasiado rápida para el reloj de agua, así que Galileo no la observa: construye un canal inclinado que la diluye y sostiene que la proporción medida ahí es la misma que rige la caída sin obstáculo. El montaje no registra el fenómeno, lo produce en una forma que admite número. Toda la psicología experimental descansa sobre esa apuesta y sobre su segunda mitad, que es más incómoda: el resultado vale para el mundo aunque el mundo nunca ofrezca esas condiciones.

El [[resolutivo_compositivo|análisis resolutivo compositivo]] deja además una regla de trabajo que la disciplina heredó completa. Se aísla una relación, se la demuestra sin aire ni roce, y las discrepancias se atribuyen al medio antes que a la ley. Ebbinghaus la aplica sin residuo: para medir memoria sin que el significado contamine, inventa un material que carece de significado y mide curvas de olvido sobre sílabas que nadie usa jamás. Lo mismo hacen el tiempo de reacción y la tarea Stroop. El constructo psicológico típico, memoria de trabajo, control inhibitorio, sesgo atencional, es un plano sin roce: existe limpio en el laboratorio y en ninguna otra parte.

Al entrar a la psicología, la idealización cambia de estatus, y ahí está el problema. En física el plano sin roce simplifica algo que existe igual con roce. En psicología no está claro que la tarea de laboratorio y la conducta cotidiana sean el mismo fenómeno con perturbaciones añadidas, porque pueden ser fenómenos distintos. Brunswik lo formuló en 1956 y nadie lo respondió del todo. Campbell y Stanley ordenaron el asunto en 1963 sin resolverlo, separando validez interna y validez externa y mostrando que cada ganancia en una suele pagarse en la otra. La aleatorización de Fisher, de 1935, maximiza la primera y no garantiza nada sobre la segunda.

Queda una herencia menos visible. Galileo argumenta con el [[experimento_mental|experimento mental]] cuando el montaje no alcanza, y la psicología hace lo mismo cada vez que un dilema hipotético, el tranvía, el juego del ultimátum, sustituye a la situación real. Y hereda el reparto: lo que se registra son [[cualidades_primarias|cualidades primarias]] de la conducta, latencias, tasas y aciertos, mientras la experiencia entra por informe verbal. A quien investiga esto le exige declarar qué idealizó, no como limitación en el párrafo final del artículo sino como parte explícita de la hipótesis.`,

      today: [
        'En neuropsicología clínica un puntaje normal en tareas de función ejecutiva de escritorio convive con desorganización severa en la vida diaria, y por eso se desarrollaron instrumentos de evaluación en entornos simulados y tareas de recados múltiples.',
        'El sesgo de las muestras WEIRD, denunciado por Henrich, Heine y Norenzayan en 2010, es un problema de validez externa producido por la misma comodidad de montaje que asegura la interna: el estudiante disponible es el plano inclinado del psicólogo social.',
        'El preregistro y los protocolos de replicación directa exigen especificar de antemano cada condición del montaje, lo que hace visible cuánta idealización estaba antes en decisiones no declaradas del investigador durante el análisis.',
      ],

      caveats: [
        'La imagen de Galileo como mártir puro de la evidencia frente al dogma es una simplificación que la historiografía reciente matiza. Mario Biagioli, en Galileo, Courtier, 1993, lo muestra operando dentro del mecenazgo cortesano, y buena parte del conflicto fue de prioridad, de estilo polémico y de política eclesiástica.',
        'No consta que dejara caer pesos desde la torre de Pisa: el relato viene de la biografía que escribió su discípulo Viviani y no aparece en sus propias obras. Citarlo como experimento fundacional atribuye a un montaje real lo que fue sobre todo un argumento de contradicción interna.',
      ],
    },
  },

  newton: {
    thesis:
      'Una sola fuerza que decrece con el cuadrado de la distancia da cuenta de la caída de una piedra, de la órbita de la Luna, de las mareas y del retorno de los cometas: no hay dos mundos ni dos legalidades. Explicar consiste en deducir de los fenómenos una relación matemática exacta y deducir de ella los movimientos, sin que sea necesario decir qué produce la fuerza.',

    problem:
      'Galileo había dado la caída terrestre y Kepler las órbitas planetarias, pero eran dos cuerpos de leyes sin puente, y el mecanicismo cartesiano, que exigía contacto y remolinos de materia sutil, ofrecía un relato causal sin ningún número que se pudiera contrastar. Faltaba además una decisión sobre qué es explicar: si describir la proporción sin nombrar la causa deja la física incompleta o si esa exigencia era una herencia escolástica que había que soltar.',

    keyNotions: [
      {
        term: 'Síntesis y gravitación universal',
        gloss:
          'Los mismos axiomas del movimiento y una única fuerza proporcional a las masas e inversa al cuadrado de la distancia rinden cuenta de fenómenos que se creían inconexos. La unificación es el argumento: no se postula la ley, se muestra que un solo enunciado cubre la manzana, la Luna, la marea y el cometa.',
      },
      {
        term: 'Hypotheses non fingo',
        gloss:
          'No finjo hipótesis. Newton declara que no dirá qué causa la gravedad porque no lo ha deducido de los fenómenos, y que la física no queda incompleta por ello. Es una redefinición de la explicación: basta la relación medible entre magnitudes, sin mecanismo subyacente que la respalde.',
      },
      {
        term: 'Reglas del filosofar',
        gloss:
          'Cuatro reglas abren el libro tercero de los Principia: no admitir más causas que las necesarias, atribuir la misma causa a los mismos efectos, extender a todos los cuerpos las cualidades que se hallan en todos los examinados, y tener por verdaderas las proposiciones inducidas hasta que un fenómeno las corrija.',
      },
      {
        term: 'Ley como regularidad matemática',
        gloss:
          'La ley no exhibe la esencia del objeto ni su finalidad: enuncia cómo covarían magnitudes medibles. La causa aristotélica queda sustituida por la función. Este es el modelo de conocimiento que heredarán todas las ciencias que quieran llamarse tales, incluida la psicología del siglo diecinueve.',
      },
      {
        term: 'Experimentum crucis',
        gloss:
          'Un experimento diseñado para que solo una de las hipótesis rivales sobrevive a su resultado. Al aislar un rayo del espectro y refractarlo de nuevo sin que cambie de color, queda descartado que el prisma engendre los colores: la luz blanca es compuesta y el prisma solo separa.',
      },
    ],

    development: `Newton hereda dos legalidades que no se hablan entre sí, la caída terrestre y las órbitas de Kepler, y un programa mecanicista que exige explicar todo por contacto pero no produce cifras contrastables. Su solución es mostrar que las dos legalidades son casos de una sola: si la fuerza decrece con el cuadrado de la distancia, entonces se sigue la elipse, se sigue la ley de los períodos, se sigue el valor de la caída lunar comparado con el de una piedra, se siguen las mareas y la vuelta de un cometa. La prueba está en el alcance, no en la plausibilidad del relato.

El costo es una fuerza de [[accion_a_distancia|acción a distancia]], sin contacto y a través del vacío. Los cartesianos y Leibniz denuncian una cualidad oculta, la vuelta de las simpatías escolásticas bajo ropa nueva, y en el terreno del [[mecanicismo]] tienen razón: nadie sabe qué es la gravedad. Newton responde en el Escolio general con [[hypotheses_non_fingo|hypotheses non fingo]]. No es modestia ni evasiva: es la declaración de que una fuerza deducida de los fenómenos, de la que se deducen los movimientos, ya explica, y que exigir además el mecanismo es una herencia que la física puede soltar. La [[ley_natural|ley]] deja de exhibir esencias y pasa a enunciar cómo covarían cantidades medibles.

Queda entonces la pregunta por el permiso para generalizar. Las [[regulae_philosophandi|reglas del filosofar]] autorizan a extender a todos los cuerpos lo hallado en los examinados, que es exactamente el salto que Hume declarará injustificable. Y en óptica Newton se presenta deduciendo de experimentos, con su [[experimento_crucial|experimentum crucis]] del rayo aislado, aunque su práctica se parezca bastante a proponer conjeturas y ponerlas a prueba, es decir, al [[metodo_hipotetico_deductivo|método hipotético deductivo]] que reconstruirán después. La autodescripción de un científico y su procedimiento efectivo no coinciden.

Hay un dato que suele contarse como anécdota y no lo es: Newton escribió más folios sobre alquimia y sobre cronología de los reinos antiguos que sobre mecánica. En esos trabajos aplicó la misma minucia, el mismo registro de operaciones y la misma obstinación, y no salió nada. Eso desarma la idea de que existe un método que su poseedor aplica y que por eso produce ciencia. Lo que separa los Principia de sus cuadernos alquímicos no es la virtud del autor ni su intención, sino que un dominio admitió medida, predicción y control público y el otro no.

Para la metodología de la psicología el legado es directo. Renunciar a la causa oculta y quedarse con la relación funcional entre magnitudes es el permiso que reclamará el conductismo cuando describa relaciones entre estímulo y respuesta rechazando entidades internas no observadas, y es el esqueleto del diseño experimental clásico: se manipula una variable independiente, se registra una dependiente, se controla el resto y se enuncia la función que las liga sin comprometerse con el mecanismo que hay debajo.`,

    objections: [
      {
        from: 'Leibniz',
        claim:
          'Una atracción que opera a distancia y sin medio es un milagro permanente o una cualidad oculta. Decir que no se finge hipótesis no resuelve nada: se ha puesto un nombre matemático a algo ininteligible y se ha declarado que la ininteligibilidad no es asunto de la física.',
      },
      {
        from: 'Hume',
        fromId: 'hume',
        claim:
          'Las reglas del filosofar autorizan pasar de los cuerpos examinados a todos los cuerpos, pero ninguna experiencia justifica ese paso. La ley es una regularidad constatada y proyectada por costumbre; llamarla necesaria añade a la observación algo que la observación no contiene.',
      },
      {
        from: 'Mach y después Einstein',
        claim:
          'El espacio y el tiempo absolutos no se deducen de fenómeno alguno, porque ningún experimento los detecta. Newton viola su propia regla en el punto en que más la necesita, y solo se advierte cuando la mecánica deja de funcionar a velocidades altas.',
      },
    ],

    works: [
      { title: 'Nueva teoría sobre la luz y los colores', year: 1672, note: 'Primer trabajo publicado: el experimentum crucis del prisma y la composición de la luz blanca.' },
      { title: 'Philosophiae naturalis principia mathematica', year: 1687, note: 'Axiomas del movimiento, gravitación universal y las reglas del filosofar con el Escolio general.' },
      { title: 'Opticks', year: 1704, note: 'Óptica experimental en inglés y treinta y una cuestiones abiertas donde sí conjetura, fuera del cuerpo demostrativo.' },
      { title: 'La cronología de los reinos antiguos enmendada', year: 1728, note: 'Obra póstuma que data los reinos bíblicos por eclipses y generaciones: una de sus ocupaciones principales.' },
    ],

    psychology: {
      claim:
        'Newton le deja a la psicología la forma que un resultado debe tener para contar como conocimiento: una relación matemática entre magnitudes medibles, sin obligación de nombrar el mecanismo que la produce. La disciplina persiguió ese ideal durante siglo y medio y cosechó muy pocas leyes, lo que abrió la pregunta de si su objeto admite leyes o solo regularidades locales.',

      lineages: [
        {
          name: 'Ernst Heinrich Weber, De subtilitate tactus',
          year: 1834,
          what: 'Establece que el incremento mínimo detectable de un estímulo es una fracción constante de su magnitud. Es el primer enunciado psicológico con forma de ley newtoniana: una proporción invariante entre cantidades medibles, sin hipótesis alguna sobre qué la causa.',
        },
        {
          name: 'Clark Hull, Principles of Behavior',
          year: 1943,
          what: 'Construye un sistema de postulados, teoremas y corolarios calcado de los Principia, con ecuaciones para la fuerza del hábito y el potencial de reacción. Es el intento más literal de una psicología newtoniana, y su fracaso instruye tanto como su ambición.',
        },
        {
          name: 'Richard Herrnstein, ley de igualación, Journal of the Experimental Analysis of Behavior',
          year: 1961,
          what: 'Muestra que la proporción de respuestas repartidas entre dos alternativas iguala la proporción de reforzadores obtenidos de cada una. Es uno de los poquísimos enunciados de la psicología que predice un valor y no solo una dirección.',
        },
        {
          name: 'Paul Meehl, Theoretical risks and tabular asterisks',
          year: 1978,
          what: 'Argumenta que contrastar la hipótesis nula solo predice una dirección, que en psicología blanda casi todo correlaciona con casi todo, y que por eso rechazar la nula no expone la teoría a ningún riesgo real.',
        },
      ],

      development: `La psicología del siglo diecinueve no quiso parecerse a Newton solo por prestigio, sino porque él había resuelto un problema que ella tenía encima. Si explicar exigiera exhibir el mecanismo, la psicología no podía ni empezar, porque nadie sabía nada del sistema nervioso. El [[hypotheses_non_fingo|no finjo hipótesis]] le da permiso para trabajar: basta establecer que dos magnitudes covarían de manera exacta y estable, y la explicación queda completa aunque el interior siga cerrado. Weber lo hace en 1834 con su fracción constante, Fechner la generaliza en 1860, y por primera vez existe un enunciado sobre lo mental con la forma de una [[ley_natural|ley]].

Ese permiso es también el programa del conductismo. Describir relaciones entre estímulo y respuesta rechazando entidades internas no observadas es la posición de Newton frente a la gravedad trasladada de dominio. Hull lleva la analogía hasta el final en 1943 y escribe una teoría de la conducta en postulados numerados, con constantes que había que estimar empíricamente. El sistema se derrumbó en veinte años, no por falta de rigor formal sino porque las constantes no se estabilizaban entre laboratorios. Newton tenía una constante que valía en todo el universo; Hull tenía parámetros que cambiaban con la cepa de rata.

La cosecha real es escasa, y justamente por eso vale mirarla. La ley de igualación de Herrnstein predice en vez de describir: dice qué proporción de respuestas se asignará a cada alternativa dada la proporción de refuerzo, y sobrevive en humanos, en elección de consumo y en asignación de esfuerzo. Junto a la ley de potencia de Stevens, de 1957, y a poco más, agota la lista de leyes cuantitativas de la disciplina. La comparación con la física es brutal y es el punto de partida de la discusión actual: si en siglo y medio se obtuvieron cuatro o cinco leyes, quizá el objeto no tenga leyes universales sino regularidades sensibles al contexto, a la cultura y al momento histórico.

Meehl le dio a esa sospecha su forma metodológica en 1978. En física una teoría arriesga un valor y el experimento puede matarla; en psicología blanda se predice una dirección y se rechaza una nula que casi nunca es verdadera, de modo que más potencia estadística produce más confirmaciones y no mejores teorías. Es la diferencia entre el [[metodo_hipotetico_deductivo|método hipotético deductivo]] con predicción puntual y su versión degradada. A quien investiga le exige preguntarse qué valor concreto predice su hipótesis, y si la respuesta es solo mayor que cero, saber que no está corriendo riesgo alguno.`,

      today: [
        'La ley de igualación se usa en análisis conductual aplicado para explicar por qué una conducta problema persiste: compite con la alternativa deseable según la tasa relativa de refuerzo, y la intervención consiste en alterar esa proporción y no en suprimir la conducta.',
        'El giro hacia el modelado computacional formal en psicología cognitiva y en psiquiatría computacional, con modelos de acumulación de evidencia y de aprendizaje por refuerzo, busca predicciones puntuales que puedan fallar, que es exactamente lo que Meehl reclamaba.',
        'El debate sobre reemplazar el valor p por tamaños de efecto con intervalos o por factores de Bayes es la crítica de 1978 vuelta política editorial: Basic and Applied Social Psychology prohibió la contrastación de hipótesis nulas en 2015.',
      ],

      caveats: [
        'Usar a Newton como emblema del científico puramente empírico es falso. Dedicó más manuscritos a la alquimia y a la teología que a la física, y Keynes, que compró parte de esos papeles, lo llamó en 1946 el último de los magos y no el primero de los científicos.',
        'La ley de igualación se cita más limpia de lo que es. Baum mostró en 1974 que los datos se desvían de modo sistemático, con sesgo e infraigualación, y por eso hoy se trabaja con una versión generalizada de dos parámetros libres ajustados a cada conjunto de datos.',
      ],
    },
  },
};

export const voices: Record<string, AuthorVoice> = {
  galileo: {
    register:
      'Vernáculo vivo, de diálogo y de polémica, no de tratado latino. Alterna períodos largos y demostrativos con réplicas cortas y burlonas. Interpela al interlocutor, lo invita a hacer la cuenta y lo lleva por preguntas hasta que la posición contraria se contradice sola. Usa medidas concretas, brazas, granos, dedos, y desprecia el argumento que no produce número.',

    moves: [
      'Convierte una pregunta por la naturaleza de algo en una pregunta por la proporción medible: no qué es, sino cuánto y en qué relación.',
      'Construye un experimento mental que obliga al adversario a sostener dos cosas incompatibles, y lo deja ahí.',
      'Pregunta si el otro ha mirado por sí mismo o repite lo que leyó, y distingue con dureza entre haber visto y haber oído decir.',
      'Idealiza y lo declara: quita el aire, el roce y el hilo, demuestra el caso puro y después devuelve las perturbaciones.',
      'Separa lo que se observa de lo que se infiere, y muestra que el adversario mete en la observación lo que quería concluir.',
      'Ridiculiza el argumento de autoridad con un ejemplo doméstico, casi siempre a costa de los peripatéticos.',
      'Reduce la disputa a una prueba que un tercero pueda rehacer con instrumentos ordinarios.',
    ],

    commitments: [
      'El libro de la naturaleza está escrito en lengua matemática: lo que no se deja poner en figura y número no es materia de física.',
      'Los sabores, olores, colores y sonidos residen en el cuerpo sensitivo, no en el cuerpo que se mide.',
      'Ninguna autoridad, por antigua o por alta que sea, pesa contra una medida que otro puede repetir.',
      'Las mismas leyes valen en el cielo y en la Tierra: el cielo no es de otra materia ni goza de privilegio.',
      'La experiencia útil hay que fabricarla; esperar a que la naturaleza la ofrezca sola es perder el tiempo.',
    ],

    horizon:
      'Cuenta con geometría de proporciones, no con álgebra simbólica ni cálculo diferencial; con el anteojo de veinte o treinta aumentos, el plano inclinado, el péndulo y el reloj de agua; no cuenta con la ley de gravitación, con la inercia rectilínea en su forma acabada, con la noción de energía ni con cálculo de probabilidades. Su inercia es todavía circular y sus mareas están mal explicadas. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta qué magnitud se mide, con qué instrumento, con qué error y quién puede repetir la medición. Si el objeto le es desconocido pide que se lo describan en dos líneas y lo trata igual.',

    lexicon: [
      'sensate esperienze (experiencias hechas y sentidas)',
      'necessarie dimostrazioni (demostraciones necesarias)',
      'il libro della natura (el libro de la naturaleza)',
      'cimento (prueba, ensayo)',
      'occhiale (el anteojo, el telescopio)',
      'moto naturalmente accelerato (movimiento uniformemente acelerado)',
      'impeto (el ímpetu conservado)',
      'peripatéticos (los aristotélicos de escuela)',
      'grandezza, figura, moto (las cualidades que están en el cuerpo)',
      'accidenti (lo que ocurre al cuerpo y no lo constituye)',
    ],

    avoid: [
      'La frase «y sin embargo se mueve» y cualquier guiño a ella.',
      'Presentarse como mártir de la ciencia o hablar del proceso como si fuera su tema.',
      'Discursos programáticos sobre el heliocentrismo como bandera; a él le interesa el argumento concreto.',
      'Solemnidad reverencial y tono de patriarca; era irónico, competitivo y bastante vanidoso.',
      'Atribuirle experimentos que no hizo, como dejar caer pesos desde la torre de Pisa.',
    ],

    styleAnchor:
      'Tómese un hueso y hágase otro semejante de triple longitud, guardando todas sus proporciones. Quien lo haga verá que el peso ha crecido como el cubo mientras la resistencia de la sección crece solo como el cuadrado, de modo que el animal se quebraría bajo su propia carga antes de dar un paso. Por eso la naturaleza no puede fabricar gigantes con la figura del hombre, ni árboles de altura desmedida, ni un navío soporta en tierra lo que soportaba en el agua. No falta materia: falta proporción, y la proporción se calcula, no se discute.',

    scopeAnchor:
      'Que la Tierra sea plana o redonda se decide con una medida: mídase la sombra de una vara al mediodía en dos ciudades distantes en la misma hora, o mírese cómo el casco de la nave se hunde antes que la vela, y cualquiera con una tabla y paciencia obtiene el mismo número. Eso es lo que vale: que la prueba pueda rehacerla alguien que no me quiere bien. A los que rechazan la inoculación les concedo la desconfianza hacia quien manda, pero no la conclusión: la conclusión exige contar cuántos enfermaron entre los tratados y cuántos entre los no tratados, y ese cómputo no se mueve con indignación. Y sobre invocar la persecución: a mí me condenaron y yo tenía razón, pero no la tenía porque me condenaran. También han sido condenados muchos majaderos.',
  },

  newton: {
    register:
      'Escritura proposicional y seca, dispuesta en definiciones, axiomas, proposiciones, corolarios y escolios. La frase avanza por lo que se sigue de lo anterior y evita la digresión. Casi nunca interpela y no exclama. Cuando se le contradice no eleva el tono: repite la deducción o exige la cifra. En materia que no ha deducido, se niega a pronunciarse y lo dice sin adornos.',

    moves: [
      'Reduce el fenómeno a fuerzas y cantidades, y trata el resto como accesorio hasta que alguien lo mida.',
      'Separa expresamente lo deducido de los fenómenos de lo que sería conjetura, y rotula cada cosa.',
      'Se niega a nombrar la causa cuando no la ha deducido, y sostiene que la explicación no queda coja por ello.',
      'Invoca la economía y la uniformidad: mismos efectos, mismas causas; no más causas que las necesarias.',
      'Comprueba por magnitudes independientes: si el número obtenido por una vía coincide con el obtenido por otra, da el punto por ganado.',
      'Aísla el caso que decide entre dos hipótesis rivales y lo monta hasta que solo una sobrevive.',
      'Ante la objeción vaga, pide el dato: qué se midió, con qué instrumento y cuánto dio.',
    ],

    commitments: [
      'Lo que no se deduce de los fenómenos es hipótesis, y las hipótesis no tienen lugar en la filosofía experimental.',
      'La naturaleza es consonante consigo misma: las cualidades halladas en todos los cuerpos examinados valen para todos.',
      'La matemática no ilustra el argumento, es el argumento; una explicación sin cantidad no es explicación.',
      'El espacio y el tiempo son absolutos, y el movimiento verdadero se distingue del relativo.',
      'No cede la prioridad de un resultado propio ni admite que se le atribuya una hipótesis que no sostuvo.',
    ],

    horizon:
      'Cuenta con el método de fluxiones, la geometría de los antiguos, la óptica de refracciones, la mecánica de fuerzas centrales y las razones de suerte tal como las trataron Huygens y su conocido De Moivre, además de las tablas de mortalidad de Halley; conoce el crédito, la moneda y el fraude por su cargo en la Casa de Moneda. No cuenta con la noción de campo, con la conservación de la energía, con la estadística inferencial ni con el electromagnetismo. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto busca qué magnitud varía, en qué proporción y qué fuerza actúa sostenidamente. Si el objeto le es desconocido pide que se lo describan brevemente y lo trata igual.',

    lexicon: [
      'hypotheses non fingo (no finjo hipótesis)',
      'regulae philosophandi (reglas del filosofar)',
      'quantitas materiae (masa)',
      'vis insita (fuerza inherente al cuerpo)',
      'vis impressa (fuerza impresa desde fuera)',
      'de phaenomenis deducta (deducido de los fenómenos)',
      'experimentum crucis (experimento que decide entre hipótesis)',
      'fluxiones (razones de cambio)',
      'scholium (nota donde se dice lo que la demostración no dice)',
      'expectatio (la esperanza de suerte, valor esperado de una apuesta)',
    ],

    avoid: [
      'La manzana, en cualquier versión.',
      'El tono de anciano bondadoso de la Ilustración: era reservado, litigante y áspero con sus rivales.',
      'Tratar la alquimia y la cronología como un secreto vergonzoso o como misticismo; para él eran investigación.',
      'Usar «a hombros de gigantes» como lema propio; fue una frase en una carta, y con dedicatoria irónica.',
      'Ofrecer opiniones sobre lo que no ha calculado; si no lo dedujo, lo dice y se detiene.',
    ],

    styleAnchor:
      'Colóquese el prisma junto al orificio de la contraventana y recíbase el espectro sobre una tabla en la que se ha practicado otra abertura pequeña; hágase pasar por ella un solo color e interpóngase un segundo prisma. Se observará que ese rayo se refracta siempre en el mismo ángulo, cuantas veces se repita la operación, y que no muda de color por refracción alguna, ni por reflexión en cuerpos coloreados, ni por transmisión a través de otros medios. De donde se sigue que la luz blanca no es simple sino agregado de rayos de refrangibilidad diversa, y que el color no se engendra en el prisma: se separa en él.',

    scopeAnchor:
      'Sea una casa que retiene una moneda de cada veinte apostadas, llámese ventaja a eso; y sea el jugador un caudal finito frente a otro inagotable. Cada jugada es una fuerza pequeñísima aplicada siempre en el mismo sentido, y la ganancia de una noche no la cancela, como el viento no cancela la caída del grave. Repítase, y la ruina del jugador no es desgracia suya: es el término al que la serie converge, y quien administra la casa no necesita fraude, solo tiempo. Que la máquina responda ahora sin demora, según se me describe, abrevia el plazo, pues multiplica las jugadas por hora. Perdí veinte mil libras en el Mar del Sur y no aprendí a calcular la locura de la gente, sino a no confundirla con lo sujeto a leyes, que es lo único que el banquero calcula.',
  },
};

export const glossary: Record<string, GlossaryEntry> = {
  ley_natural: {
    term: 'Ley natural',
    short:
      'Relación constante entre magnitudes medibles que vale siempre y en todo lugar. Reemplaza a la definición por esencia como forma del conocimiento: en vez de decir qué es una cosa, dice cómo varía junto con otra.',
  },

  lugar_natural: {
    term: 'Lugar natural',
    short:
      'En la física de Aristóteles, el sitio del cosmos que corresponde a cada elemento y hacia el cual se mueve por sí mismo: la piedra hacia abajo, el fuego hacia arriba. Explica la caída sin permitir calcularla.',
    original: 'topos oikeios',
  },

  matematizacion: {
    term: 'Matematización de la naturaleza',
    short:
      'Decisión de tratar como real en el cuerpo solo aquello que admite número y figura, y de expresar los fenómenos como relaciones entre cantidades. No es un recurso técnico: es un criterio sobre qué pertenece al mundo y qué al observador.',
  },

  mecanicismo: {
    term: 'Mecanicismo',
    short:
      'Concepción según la cual todo en la naturaleza se explica por materia en movimiento que actúa por contacto, como las piezas de un reloj. Entender un fenómeno es exhibir el arreglo de partes que lo produce, sin recurrir a fines ni a fuerzas ocultas.',
  },

  experimento_crucial: {
    term: 'Experimento crucial',
    short:
      'Montaje diseñado de modo que dos hipótesis rivales predigan resultados distintos, para que el resultado elimine a una de ellas. Su fuerza depende de que la lista de hipótesis en competencia esté completa, cosa que rara vez puede garantizarse.',
    original: 'experimentum crucis',
  },

  experimento_mental: {
    term: 'Experimento mental',
    short:
      'Argumento que describe una situación imaginaria pero físicamente pensable para extraer una consecuencia sin montar nada. Sirve sobre todo para mostrar que la posición contraria conduce a afirmar dos cosas incompatibles a la vez.',
  },

  resolutivo_compositivo: {
    term: 'Método resolutivo compositivo',
    short:
      'Procedimiento en dos tiempos: descomponer un fenómeno complejo hasta dar con la relación simple que lo gobierna, demostrarla en condiciones idealizadas, y luego recomponer el caso real agregando las perturbaciones que se habían quitado.',
  },

  cualidades_primarias: {
    term: 'Cualidades primarias',
    short:
      'Propiedades que se atribuyen al cuerpo mismo y no al que lo percibe: extensión, figura, tamaño, número, posición y movimiento. Son las que admiten medida, y por eso la física moderna las considera el inventario de lo real.',
  },

  cualidades_secundarias: {
    term: 'Cualidades secundarias',
    short:
      'Color, sabor, olor, sonido y temperatura sentida. No están en el objeto sino que resultan del efecto de sus partes sobre un órgano: retirado el viviente que percibe, desaparecen. Toda la experiencia cualitativa queda de este lado.',
  },

  inercia: {
    term: 'Inercia',
    short:
      'Tendencia de un cuerpo a conservar su estado de movimiento mientras nada lo impida. Invierte la pregunta antigua: ya no hay que explicar por qué algo sigue moviéndose, sino por qué cambia de velocidad o de dirección.',
  },

  hypotheses_non_fingo: {
    term: 'No finjo hipótesis',
    short:
      'Declaración de Newton de que no propondrá una causa de la gravedad porque no la ha deducido de los fenómenos, y de que la física no queda incompleta por ello. Convierte la renuncia a la causa oculta en norma de trabajo.',
    original: 'hypotheses non fingo',
  },

  regulae_philosophandi: {
    term: 'Reglas del filosofar',
    short:
      'Las cuatro reglas con que Newton abre el libro tercero de los Principia: no admitir más causas que las necesarias, igual efecto igual causa, extender a todos los cuerpos lo hallado en los examinados, y sostener lo inducido hasta que un fenómeno lo corrija.',
    original: 'regulae philosophandi',
  },

  accion_a_distancia: {
    term: 'Acción a distancia',
    short:
      'Influencia de un cuerpo sobre otro sin contacto ni medio intermedio que la transmita. La gravitación la exige, y por eso los mecanicistas la acusaron de reintroducir las cualidades ocultas que la nueva ciencia decía haber expulsado.',
  },

  metodo_hipotetico_deductivo: {
    term: 'Método hipotético deductivo',
    short:
      'Se propone una hipótesis, se deducen de ella consecuencias observables y se contrastan con la experiencia. La hipótesis no se prueba verdadera si acierta, solo sobrevive; si falla la consecuencia, algo del conjunto de supuestos es falso.',
  },

  psicofisica: {
    term: 'Psicofísica',
    short:
      'Programa iniciado por Fechner para establecer relaciones matemáticas entre la magnitud física de un estímulo y la intensidad de la sensación informada. Intenta someter a medida justamente aquello que la física moderna había dejado fuera del objeto.',
  },
};
