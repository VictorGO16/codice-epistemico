import { ConceptConnection } from '@/types/philosophical';

export const conceptConnections: ConceptConnection[] = [
  {
    source: 'heraclito',
    target: 'platon',
    type: 'influence',
    description: 'Platón conserva el flujo heraclíteo pero lo degrada: si todo cambia, de lo sensible no hay ciencia sino opinión. Reserva el conocimiento para las Formas inmutables y convierte así la tesis del devenir en argumento a favor de un segundo mundo.',
    atStake: 'Que de aquello que cambia sin cesar no pueda haber conocimiento verdadero sino solo opinión cambiante.'
  },
  {
    source: 'heraclito',
    target: 'nagarjuna',
    type: 'continuation',
    description: 'Sin contacto histórico entre ambos, Nāgārjuna radicaliza la intuición del flujo. Para Heráclito algo permanece cambiando, el fuego, el logos que mide la medida. Nāgārjuna niega también ese sustrato y sostiene que nada tiene naturaleza propia, ni siquiera el cambio mismo.',
    atStake: 'Que bajo el cambio permanezca algún principio con naturaleza propia que haga posible describir ese mismo cambio.'
  },
  {
    source: 'platon',
    target: 'aristoteles',
    type: 'critique',
    description: 'Aristóteles conserva que hay esencias cognoscibles y que la ciencia versa sobre lo universal, pero rechaza que las Formas existan separadas. Las trae al interior de las cosas como forma inmanente y vuelve inteligible lo que Platón había dejado en el terreno de la opinión.',
    atStake: 'Que la esencia de una cosa exista separada de ella o solo en las cosas particulares mismas.'
  },
  {
    source: 'platon',
    target: 'descartes',
    type: 'influence',
    description: 'Descartes retoma la desconfianza platónica en los sentidos y la tesis de que hay ideas no adquiridas por experiencia, pero traslada el criterio de verdad desde la contemplación de las Formas hacia la evidencia interna de un sujeto que se examina a sí mismo.',
    atStake: 'Que existan ideas que la mente no recibe de los sentidos y que garanticen conocimiento cierto.'
  },
  {
    source: 'platon',
    target: 'racionalismo',
    type: 'influence',
    description: 'El racionalismo hereda tres piezas platónicas: ideas no derivadas de la experiencia, primacía de la deducción y sospecha ante el testimonio de los sentidos. Abandona en cambio la reminiscencia y el mundo separado, y pone en su lugar a Dios como garante.',
    atStake: 'Que la razón por sí sola, sin apoyo en la observación, pueda establecer verdades sobre el mundo.'
  },
  {
    source: 'aristoteles',
    target: 'galileo',
    type: 'critique',
    description: 'Galileo conserva la exigencia de explicación causal pero amputa dos de las cuatro causas. Preguntar para qué cae una piedra no produce ninguna medida; preguntar cómo varía su velocidad en el tiempo sí la produce. La causa final sale de la física por estéril, no por falsa.',
    atStake: 'Que la pregunta por el fin de un proceso natural aporte algo a su explicación física.'
  },
  {
    source: 'aristoteles',
    target: 'rev_cientifica',
    type: 'critique',
    description: 'La nueva ciencia desmonta el cosmos aristotélico pieza por pieza: suprime la diferencia entre el mundo sublunar y el celeste, sustituye los lugares naturales por la inercia y reemplaza la observación cualitativa por la medición. Conserva el proyecto de una ciencia demostrativa de la naturaleza.',
    atStake: 'Que el cielo y la Tierra obedezcan a las mismas leyes y admitan la misma clase de descripción.'
  },
  {
    source: 'aristoteles',
    target: 'empirismo',
    type: 'influence',
    description: 'El empirismo conserva la máxima de que nada llega al intelecto sin pasar por los sentidos y también las leyes de asociación, pero descarta las formas sustanciales. Queda un asociacionismo sin naturalezas: hábitos entre impresiones en lugar de definiciones reales.',
    atStake: 'Que todo contenido de la mente provenga de los sentidos y no haya conceptos previos a la experiencia.'
  },
  {
    source: 'nagarjuna',
    target: 'enactivismo',
    type: 'influence',
    description: 'El enactivismo toma de Madhyamaka la tesis de que nada existe por sí mismo y la convierte en programa cognitivo: ni el mundo está dado de antemano ni el sujeto lo representa. Lo que hay es codeterminación, una cognición sin fundamento que ninguna de las dos partes precede.',
    atStake: 'Que mente y mundo tengan existencia independiente antes de la relación que los pone en contacto.'
  },
  {
    source: 'nagarjuna',
    target: 'varela',
    type: 'influence',
    description: 'Varela lee Madhyamaka como respuesta al vértigo que abre su propia biología: si el yo no se encuentra en ninguna parte del sistema, asoma el nihilismo. La vacuidad le ofrece otra salida, un yo sin sustancia que sin embargo opera y del cual cabe hacerse cargo.',
    atStake: 'Que la ausencia de un yo sustancial obligue a concluir que el yo es una ilusión prescindible.'
  },
  {
    source: 'tlamatini',
    target: 'hermeneutica',
    type: 'critique',
    description: 'El corpus nahua llega solo en transcripciones hechas por misioneros, en alfabeto latino y con categorías cristianas ya incrustadas en la traducción. El caso tensiona la confianza hermenéutica en la fusión de horizontes: aquí el horizonte del intérprete no se encuentra con el texto, lo produjo.',
    atStake: 'Que una tradición transmitida solo por quienes la destruyeron pueda interpretarse sin quedar reducida a esa mediación.'
  },
  {
    source: 'rev_cientifica',
    target: 'descartes',
    type: 'influence',
    description: 'Descartes traslada a la filosofía el rasgo que admira en la nueva física, un método único capaz de encadenar razones simples hasta lo complejo. Invierte sin embargo el orden de la garantía, porque no funda la certeza en el experimento sino el experimento en una certeza previa.',
    atStake: 'Que la certeza del conocimiento deba fundarse antes en la razón que en el resultado de los experimentos.'
  },
  {
    source: 'rev_cientifica',
    target: 'empirismo',
    type: 'influence',
    description: 'El empirismo convierte el éxito de la física experimental en tesis epistemológica: si así se conoce la naturaleza, así se conoce todo. Extiende el procedimiento de observar y generalizar al estudio de la mente, y hace de la experiencia el único tribunal de las ideas.',
    atStake: 'Que el método que funciona en la física deba valer también para el estudio de la mente.'
  },
  {
    source: 'galileo',
    target: 'rev_cientifica',
    type: 'continuation',
    description: 'Galileo aporta a la revolución en curso dos piezas que Copérnico no tenía: el telescopio como argumento y la matematización del movimiento. Deja de describir cómo se comportan los cuerpos según su naturaleza y escribe funciones que valen igual para cualquier cuerpo.',
    atStake: 'Que el lenguaje adecuado para describir la naturaleza sea el matemático y no el de las cualidades.'
  },
  {
    source: 'descartes',
    target: 'racionalismo',
    type: 'continuation',
    description: 'El racionalismo generaliza el gesto cartesiano de buscar un punto de partida indudable y deducir desde ahí. Retiene la duda metódica y el criterio de las ideas claras y distintas, pero se desprende del dualismo, que Spinoza y Leibniz consideran el precio más caro del sistema.',
    atStake: 'Que el conocimiento requiera un primer principio indudable desde el cual deducir todo lo demás.'
  },
  {
    source: 'descartes',
    target: 'psicoanalisis',
    type: 'critique',
    description: 'Freud conserva la introspección como vía de acceso pero le retira su garantía: el sujeto sigue diciendo lo que le pasa, solo que ya no sabe lo que dice. La conciencia deja de ser el lugar donde la mente se muestra entera y pasa a ser un efecto de otra escena.',
    atStake: 'Que el sujeto tenga acceso privilegiado y transparente a los contenidos y motivos de su propia mente.'
  },
  {
    source: 'locke',
    target: 'empirismo',
    type: 'continuation',
    description: 'Locke convierte una tesis suelta sobre el origen de las ideas en un programa: primero un inventario de lo que la mente puede recibir, luego un límite a lo que puede afirmar. La tabula rasa no describe una mente vacía sino una mente sin contenidos previos a la experiencia.',
    atStake: 'Que la mente no traiga ningún contenido antes de la experiencia y solo aporte la capacidad de combinarlos.'
  },
  {
    source: 'locke',
    target: 'hume',
    type: 'continuation',
    description: 'Hume acepta el punto de partida de Locke y le cobra las inconsecuencias. Si toda idea procede de una impresión, la sustancia, el yo y la conexión causal no tienen a qué impresión remitirse. Lo que en Locke era prudencia se vuelve escepticismo con el mismo principio.',
    atStake: 'Que el principio empirista aplicado sin excepciones deje en pie la sustancia, el yo y la causalidad.'
  },
  {
    source: 'racionalismo',
    target: 'empirismo',
    type: 'critique',
    description: 'El empirismo niega la pieza central del adversario, las ideas innatas, y le devuelve la carga de la prueba: si algo se sabe sin experiencia, que se muestre cuál. Conserva sin embargo el ideal racionalista de certeza, y por eso su escepticismo posterior resulta tan incómodo.',
    atStake: 'Que existan ideas innatas o que todo contenido mental pueda rastrearse hasta una experiencia sensible.'
  },
  {
    source: 'newton',
    target: 'rev_cientifica',
    type: 'continuation',
    description: 'Newton cierra el programa unificando bajo una sola ley el movimiento de los planetas y el de una piedra. Renuncia además a explicar qué es la gravedad y declara que no finge hipótesis, con lo cual fija el precio de la nueva ciencia: describir con exactitud sin comprender la causa.',
    atStake: 'Que una ciencia pueda considerarse completa describiendo con exactitud fenómenos cuya causa no explica.'
  },
  {
    source: 'empirismo',
    target: 'positivismo_logico',
    type: 'continuation',
    description: 'El Círculo de Viena mantiene que solo la experiencia justifica y añade el instrumento que faltaba, la lógica formal. Con ella traza un criterio de significado y no de verdad: un enunciado que ninguna observación podría verificar no es falso, simplemente no dice nada.',
    atStake: 'Que un enunciado sin verificación posible carezca de sentido y no solo de justificación empírica.'
  },
  {
    source: 'hume',
    target: 'empirismo',
    type: 'continuation',
    description: 'Hume aplica el principio empirista contra el propio empirismo. Busca la impresión que corresponde a la conexión necesaria y no la encuentra: solo halla sucesión repetida y la costumbre de esperar. El resultado no es una teoría del conocimiento sino la constatación de sus límites.',
    atStake: 'Que la necesidad que atribuimos a la conexión causal esté en los hechos y no en el hábito de observarlos.'
  },
  {
    source: 'hume',
    target: 'kant',
    type: 'influence',
    description: 'Kant concede que la necesidad causal no se lee en la experiencia y rechaza la conclusión escéptica. Si no viene de los objetos, viene del sujeto: la causalidad es una condición bajo la cual algo puede aparecer como objeto. El problema se conserva entero y cambia de lugar.',
    atStake: 'Que la causalidad sea una regularidad observada o una condición que el sujeto impone a toda experiencia.'
  },
  {
    source: 'kant',
    target: 'racionalismo',
    type: 'critique',
    description: 'Kant conserva del racionalismo lo a priori pero le quita el objeto. Las estructuras de la razón no describen las cosas en sí, solo las condiciones bajo las cuales algo se nos da. La metafísica queda sin materia y las categorías se vuelven formas de la experiencia posible.',
    atStake: 'Que la razón pura pueda conocer objetos que nunca podrían darse en ninguna experiencia posible.'
  },
  {
    source: 'kant',
    target: 'empirismo',
    type: 'critique',
    description: 'Contra el empirismo, Kant sostiene que la experiencia no basta ni siquiera para constituirse. Recibir impresiones no produce todavía un objeto: hace falta ordenarlas en espacio, tiempo y causa. La mente deja de ser una superficie que recibe y pasa a ser lo que da forma a lo recibido.',
    atStake: 'Que la experiencia baste por sí sola para explicar el conocimiento universal y necesario de la física.'
  },
  {
    source: 'kant',
    target: 'hegel',
    type: 'critique',
    description: 'Hegel acepta que el pensamiento configura su objeto y rechaza el límite: si la cosa en sí es incognoscible, algo se dijo ya de ella y el límite quedó traspasado al trazarlo. Convierte entonces la escisión kantiana en un momento del proceso por el cual el espíritu llega a saberse.',
    atStake: 'Que exista un límite infranqueable del conocimiento que pueda trazarse desde dentro del propio conocimiento.'
  },
  {
    source: 'kant',
    target: 'husserl',
    type: 'influence',
    description: 'Husserl recoge el proyecto de investigar las condiciones del conocimiento y cambia el procedimiento. En lugar de deducir las categorías desde la forma del juicio, describe lo que se da a la conciencia tal como se da. Lo trascendental deja de ser argumento y pasa a ser terreno de descripción.',
    atStake: 'Que las condiciones del conocimiento se establezcan por deducción o describiendo cómo los objetos se dan a la conciencia.'
  },
  {
    source: 'kant',
    target: 'popper',
    type: 'critique',
    description: 'Popper conserva la tesis de que no hay observación sin marco previo y renuncia a que ese marco sea necesario y único. Las categorías se vuelven conjeturas, de origen biológico o teórico, siempre revisables. Lo sintético a priori se disuelve en expectativas que la experiencia puede desmentir.',
    atStake: 'Que los marcos con los que abordamos la experiencia sean necesarios y fijos o conjeturas revisables.'
  },
  {
    source: 'hegel',
    target: 'nietzsche',
    type: 'critique',
    description: 'Nietzsche retiene de Hegel que los valores y las verdades tienen historia, y le arranca el desenlace. No hay razón que se realice ni proceso que culmine: lo que la historia muestra son luchas de fuerzas cuyo resultado se disfraza después de necesidad y de progreso.',
    atStake: 'Que el curso histórico tenga una dirección racional o sea solo el resultado de fuerzas en conflicto.'
  },
  {
    source: 'hegel',
    target: 'foucault',
    type: 'critique',
    description: 'Foucault conserva que el sujeto es un producto histórico y suprime la totalidad que lo produce. No hay espíritu que se despliegue ni sentido que se acumule: hay discontinuidades, umbrales y prácticas concretas. La historia deja de contar cómo llegamos aquí y muestra que pudo ser de otro modo.',
    atStake: 'Que el cambio histórico forme un proceso con sentido acumulativo o una sucesión de rupturas sin dirección.'
  },
  {
    source: 'nietzsche',
    target: 'freud',
    type: 'influence',
    description: 'Freud toma la sospecha nietzscheana de que la conciencia racionaliza fuerzas que la anteceden y la convierte en dispositivo clínico. Lo que en Nietzsche era diagnóstico cultural se vuelve técnica: represión, síntoma, transferencia. La genealogía del moralista pasa a ser historia del deseo de un paciente.',
    atStake: 'Que los motivos que el sujeto se atribuye sean racionalizaciones de fuerzas que él mismo no reconoce.'
  },
  {
    source: 'nietzsche',
    target: 'foucault',
    type: 'influence',
    description: 'Foucault toma la genealogía como procedimiento: rastrear la procedencia de una práctica en lugar de buscar su origen y su esencia. Le añade lo que Nietzsche apenas insinúa, el análisis institucional del poder, y desplaza el examen desde la moral hacia el saber que fabrica sujetos.',
    atStake: 'Que exhibir la procedencia histórica de una verdad baste para socavar su pretensión de validez.'
  },
  {
    source: 'husserl',
    target: 'fenomenologia',
    type: 'continuation',
    description: 'Husserl convierte una consigna, volver a las cosas mismas, en procedimiento reglado: suspender la creencia en la existencia del mundo para describir cómo aparece, y variar imaginariamente el objeto hasta dar con lo que no puede faltarle. La introspección queda descartada porque describe estados, no objetos.',
    atStake: 'Que la experiencia vivida admita una descripción rigurosa y no solo el informe privado de cada quien.'
  },
  {
    source: 'husserl',
    target: 'varela',
    type: 'influence',
    description: 'Varela objeta que la fenomenología se haya quedado en los textos y propone entrenar sujetos para que produzcan descripciones en primera persona utilizables junto a registros neuronales. La reducción deja de ser ejercicio del filósofo y se vuelve método de laboratorio con datos que restringen al otro lado.',
    atStake: 'Que los informes en primera persona puedan producir datos capaces de restringir una explicación neurobiológica.'
  },
  {
    source: 'pragmatismo',
    target: 'met_mixto',
    type: 'application',
    description: 'Los métodos mixtos toman del pragmatismo el criterio de que un procedimiento se juzga por lo que permite averiguar y no por la ontología que supone. Con eso desactivan la incompatibilidad de paradigmas, aunque heredan también su punto débil: qué cuenta como pregunta bien planteada.',
    atStake: 'Que la elección de un método deba responder a la pregunta de investigación y no al compromiso ontológico.'
  },
  {
    source: 'wittgenstein',
    target: 'giro_linguistico',
    type: 'continuation',
    description: 'Wittgenstein desplaza dos veces el eje de la filosofía, primero hacia la forma lógica del lenguaje y luego hacia su uso en prácticas compartidas. Los problemas filosóficos dejan de ser preguntas por resolver y pasan a ser confusiones que se disuelven al describir cómo se usan las palabras.',
    atStake: 'Que los problemas filosóficos sean confusiones del lenguaje y no cuestiones sustantivas sobre el mundo.'
  },
  {
    source: 'wittgenstein',
    target: 'construccionismo',
    type: 'influence',
    description: 'El construccionismo lleva el argumento del lenguaje privado a la psicología: si el significado está en el uso público, los estados mentales no son objetos internos que las palabras nombran sino posiciones dentro de prácticas. Wittgenstein habría rechazado la conclusión ontológica que de ahí se extrae.',
    atStake: 'Que los términos psicológicos nombren estados internos o adquieran sentido en prácticas públicas compartidas.'
  },
  {
    source: 'popper',
    target: 'postpositivismo',
    type: 'continuation',
    description: 'El postpositivismo conserva el falibilismo y afloja la asimetría lógica que lo sostenía, porque ninguna teoría se abandona por una refutación aislada aunque toda teoría siga siendo provisional. Queda un realismo modesto: hay un mundo independiente y el acceso a él es siempre corregible.',
    atStake: 'Que exista una realidad independiente del observador a la que solo accedemos mediante conjeturas siempre corregibles.'
  },
  {
    source: 'popper',
    target: 'psicoanalisis',
    type: 'critique',
    description: 'Popper no acusa al psicoanálisis de ser falso sino de explicar demasiado, porque cualquier conducta y también su contraria confirman la teoría. Le concede valor descriptivo y le niega estatuto científico: una teoría que ningún hecho podría desmentir no arriesga nada al afirmarse.',
    atStake: 'Que una teoría compatible con cualquier resultado posible pueda considerarse conocimiento científico.'
  },
  {
    source: 'popper',
    target: 'met_cuantitativo',
    type: 'application',
    description: 'El contraste de hipótesis reproduce el esquema falsacionista: se formula una hipótesis nula, se fija de antemano el riesgo de rechazarla mal y se decide con ese criterio. Nunca se prueba la hipótesis del investigador, solo se descarta la contraria, y ese descarte siempre puede revertirse.',
    atStake: 'Que un resultado estadísticamente significativo permita afirmar la hipótesis y no solo descartar provisionalmente la nula.'
  },
  {
    source: 'fenomenologia',
    target: 'hermeneutica',
    type: 'continuation',
    description: 'Heidegger y Gadamer conservan la descripción de la experiencia y abandonan la conciencia pura. No hay reducción posible porque quien describe está ya situado en una lengua y una tradición. El prejuicio deja de ser obstáculo y pasa a ser la condición que hace posible entender algo.',
    atStake: 'Que el intérprete pueda suspender su propia tradición para acceder al fenómeno tal como este se da.'
  },
  {
    source: 'fenomenologia',
    target: 'enactivismo',
    type: 'influence',
    description: 'El enactivismo recoge de Merleau-Ponty el cuerpo como condición de la percepción y no como su instrumento. Percibir es moverse, y lo percibido depende de lo que el organismo puede hacer. Con eso la ciencia cognitiva pierde su objeto favorito, la representación interna de un mundo dado.',
    atStake: 'Que percibir consista en construir una representación interna de un mundo previamente dado e independiente.'
  },
  {
    source: 'kuhn',
    target: 'popper',
    type: 'critique',
    description: 'Kuhn objeta que la falsación describe lo que los científicos dicen hacer y no lo que hacen. En periodos normales una anomalía se archiva en lugar de refutar, y cuando el paradigma cae no lo hace por un experimento sino porque hay otro paradigma capaz de reemplazarlo.',
    atStake: 'Que una teoría se abandone por una refutación empírica y no por la aparición de una alternativa disponible.'
  },
  {
    source: 'kuhn',
    target: 'postpositivismo',
    type: 'influence',
    description: 'El postpositivismo incorpora la carga teórica de la observación y con ella renuncia al lenguaje observacional neutro, de modo que los datos ya no arbitran entre teorías desde fuera. Retiene en cambio la idea de progreso y busca la objetividad en el control intersubjetivo.',
    atStake: 'Que exista un lenguaje de observación neutral capaz de decidir entre teorías rivales sin presuponer ninguna.'
  },
  {
    source: 'kuhn',
    target: 'construccionismo',
    type: 'influence',
    description: 'El construccionismo extiende a la realidad lo que Kuhn decía del conocimiento: si la comunidad define qué cuenta como hecho, el hecho es un producto social. Kuhn resistió esa lectura, porque para él la naturaleza restringe lo que un paradigma puede sostener aunque no lo determine.',
    atStake: 'Que el acuerdo de una comunidad científica constituya los hechos o solo determine cómo se los describe.'
  },
  {
    source: 'kuhn',
    target: 'met_cualitativo',
    type: 'influence',
    description: 'Los métodos cualitativos encuentran en Kuhn el permiso epistemológico que les faltaba: si toda observación está cargada de teoría, la posición del investigador deja de ser contaminación y pasa a ser un dato que hay que explicitar. De ahí vienen la reflexividad y la declaración de supuestos.',
    atStake: 'Que la implicación del investigador en lo que estudia invalide sus resultados o forme parte del método.'
  },
  {
    source: 'foucault',
    target: 'construccionismo',
    type: 'continuation',
    description: 'Foucault provee al construccionismo su repertorio: el discurso que produce aquello que nombra, la verdad como efecto de prácticas, el sujeto como resultado. Pero él investiga instituciones, archivos y cuerpos, mientras buena parte del construccionismo se queda en el texto y pierde la materialidad del poder.',
    atStake: 'Que las categorías con que se describe a las personas produzcan aquello que dicen simplemente describir.'
  },
  {
    source: 'foucault',
    target: 'psicoanalisis',
    type: 'critique',
    description: 'Foucault invierte el relato de la represión: la modernidad no calló el sexo, obligó a hablar de él sin descanso. El psicoanálisis no libera entonces una verdad reprimida sino que continúa la confesión bajo forma clínica, y produce el deseo cuya verdad promete descubrir.',
    atStake: 'Que el psicoanálisis descubra una verdad reprimida del sujeto o produzca la interioridad que dice revelar.'
  },
  {
    source: 'maturana',
    target: 'enactivismo',
    type: 'influence',
    description: 'El enactivismo hereda la autopoiesis y el cierre operacional: el sistema nervioso no recibe información, responde a sus propias perturbaciones. De ahí sale la crítica a la representación. Maturana llegaba a negar todo mundo compartido, y en ese punto el enactivismo se separa de él.',
    atStake: 'Que un sistema operacionalmente cerrado pueda conocer algo de un medio que solamente lo perturba.'
  },
  {
    source: 'positivismo_logico',
    target: 'popper',
    type: 'critique',
    description: 'Popper acepta el problema de la demarcación y rechaza la solución. La verificación es imposible porque ningún número de casos establece una ley, y además deja fuera del sentido lo que solo es especulación fértil. Propone la falsabilidad, criterio sobre el estatuto científico y no sobre el significado.',
    atStake: 'Que el criterio para separar ciencia de no ciencia sea la verificación posible o la posibilidad de refutación.'
  },
  {
    source: 'met_cuantitativo',
    target: 'met_mixto',
    type: 'continuation',
    description: 'Los métodos mixtos conservan del enfoque cuantitativo la estimación de magnitudes, la comparación entre grupos y la pretensión de generalizar a una población, y le retiran el monopolio de la evidencia: la cifra pasa a ser un resultado que todavía requiere interpretación para decir algo.',
    atStake: 'Que la medición estandarizada baste por sí sola para establecer qué ocurre en un fenómeno psicológico.'
  },
  {
    source: 'haraway',
    target: 'construccionismo',
    type: 'critique',
    description: 'Haraway concede que todo conocimiento se produce desde una posición y niega que de ahí se siga el relativismo. Situarse obliga a responder por lo que se ve; el relativismo, igual que la mirada desde ninguna parte, es una manera de no responder por nada.',
    atStake: 'Que reconocer la posición situada de todo conocimiento obligue a renunciar a cualquier pretensión de objetividad.'
  },
  {
    source: 'varela',
    target: 'enactivismo',
    type: 'continuation',
    description: 'Varela reúne tres tradiciones que no se hablaban entre sí, la biología autopoiética, la fenomenología y el análisis budista de la mente, y las convierte en un programa con problemas propios: la emergencia del sentido, el cuerpo como condición del conocer y la circularidad entre acción y percepción.',
    atStake: 'Que una ciencia de la mente pueda integrar la descripción en primera persona sin perder rigor explicativo.'
  },
  {
    source: 'giro_linguistico',
    target: 'construccionismo',
    type: 'influence',
    description: 'El construccionismo radicaliza el giro: donde este sostenía que los problemas filosóficos se juegan en el lenguaje, aquel sostiene que las categorías psicológicas y sociales se constituyen en él. Identidad, emoción y trastorno pasan a ser efectos discursivos y no cosas que el lenguaje describe.',
    atStake: 'Que las categorías psicológicas nombren entidades preexistentes o sean producidas por las prácticas que las usan.'
  },
  {
    source: 'postpositivismo',
    target: 'met_cuantitativo',
    type: 'application',
    description: 'Los métodos cuantitativos traducen el postpositivismo en decisiones concretas: control de variables para aislar efectos, muestreo para generalizar y niveles de significación que fijan cuánto error se acepta. Lo que se obtiene es probable y revisable, no verdadero, aunque los informes rara vez lo digan así.',
    atStake: 'Que un diseño experimental controlado permita atribuir causalidad a la variable manipulada sobre una población.'
  },
  {
    source: 'hermeneutica',
    target: 'met_cualitativo',
    type: 'application',
    description: 'El análisis narrativo y el temático operan con el círculo hermenéutico: la parte se entiende por el todo y el todo se corrige con la parte. La saturación y la triangulación disciplinan ese movimiento, pero ninguna regla elimina que la interpretación la produce alguien situado.',
    atStake: 'Que la interpretación de un relato pueda validarse mediante procedimientos y no dependa del intérprete que la hace.'
  },
  {
    source: 'met_cualitativo',
    target: 'met_mixto',
    type: 'continuation',
    description: 'Los métodos mixtos incorporan del enfoque cualitativo la reconstrucción del significado que los participantes dan a su experiencia y la atención al contexto, y le retiran la exclusividad: la comprensión de casos pasa a convivir con estimaciones que indican hasta dónde se extiende lo encontrado.',
    atStake: 'Que la comprensión de casos singulares pueda combinarse con la generalización estadística sin que una anule la otra.'
  },
  {
    source: 'construccionismo',
    target: 'met_cualitativo',
    type: 'application',
    description: 'El análisis de discurso invierte la pregunta habitual de la entrevista: ya no qué hay detrás de lo que el participante dice, sino qué hace al decirlo y con qué recursos disponibles. El relato deja de ser ventana hacia una experiencia y pasa a ser la acción misma que se estudia.',
    atStake: 'Que lo que alguien dice en una entrevista exprese una experiencia previa o construya la realidad que enuncia.'
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
