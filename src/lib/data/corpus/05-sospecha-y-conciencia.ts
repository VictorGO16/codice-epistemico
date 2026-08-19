import type {
  ConceptExposition,
  AuthorVoice,
  GlossaryEntry,
} from '@/types/philosophical';

// Sospecha y conciencia: Nietzsche (1844), Freud (1856) y el psicoanálisis (1896),
// Husserl (1859) y la fenomenología (1913).

export const expositions: Record<string, ConceptExposition> = {
  nietzsche: {
    thesis:
      'Todo conocer es un conocer desde algún lugar, con algún interés y al servicio de alguna forma de vida: el [[perspectivismo]] no renuncia a la objetividad, la redefine como el arte de hacer hablar a muchos ojos sobre la misma cosa. La pregunta decisiva ante una creencia no es si es verdadera, sino qué tipo de vida necesitó creerla.',

    problem:
      'La filosofía moderna aseguró el conocimiento fundándolo en un sujeto: Kant en las condiciones formales de una conciencia cualquiera, Hegel en un proceso que termina sabiendo de sí. Ambos dejaron intacta una valoración que nunca sometieron a examen, la de que lo verdadero vale más que la ilusión y que quien busca la verdad no tiene otro interés que ella. Nietzsche necesita preguntar por el valor de ese valor, y para eso hay que salir de la teoría del conocimiento y entrar en la historia de la moral.',

    keyNotions: [
      {
        term: 'Perspectivismo',
        gloss:
          'No hay un ver que no sea ver desde alguna parte, ni un conocer sin afectos que lo orienten. De ahí no se sigue que todo valga igual: se sigue que la objetividad consiste en multiplicar las perspectivas y en saber usar la diferencia entre ellas, no en suprimir el punto de vista, cosa que sería suprimir el ojo.',
      },
      {
        term: 'Genealogía',
        gloss:
          'Método que sustituye la pregunta por la esencia de algo por la pregunta por su procedencia y por los usos sucesivos que se le impusieron. Sirve para mostrar que un concepto que se presenta como eterno tiene fecha, tuvo enemigos y prestó servicios a alguien: el sentido actual es solo el último de una serie de apropiaciones.',
      },
      {
        term: 'Voluntad de poder',
        gloss:
          'No es afán de mandar sobre otros ni deseo de cargos, sino la tendencia de toda fuerza a extenderse, interpretar y asimilar lo que la rodea. Explica por qué hay valoración antes que conocimiento: un organismo no registra el mundo, lo simplifica y lo recorta según lo que necesita para crecer.',
      },
      {
        term: 'Resentimiento e inversión de los valores',
        gloss:
          'Cuando la reacción no puede descargarse en un acto, se vuelve creadora en el terreno del concepto: inventa un culpable, declara mérito la propia incapacidad y llama justicia a la venganza aplazada. Es un mecanismo psicológico con efectos históricos, y por eso una moral puede estudiarse como síntoma de las condiciones de vida de quien la sostiene.',
      },
      {
        term: 'La superstición gramatical del sujeto',
        gloss:
          'Decimos que el rayo brilla como si hubiera un rayo aparte de su brillar, y así duplicamos el acontecimiento en un agente y su obra. Esa costumbre de la lengua sostiene la creencia en un yo detrás de la acción, y con ella la posibilidad de imputar, premiar y castigar: la moral vive de un error de sintaxis.',
      },
    ],

    development: `Nietzsche no discute con la filosofía crítica en su terreno, se pregunta qué la mueve. Kant aseguró la objetividad describiendo las condiciones de un sujeto formal, Hegel la aseguró convirtiendo el error en momento de un proceso, y ninguno de los dos examinó la valoración que ambos daban por descontada: que la verdad vale más que la ilusión y que el deseo de verdad es desinteresado. Esa voluntad de verdad tiene historia, tiene procedencia ascética, y ha servido a intereses que no son teóricos. Mientras eso no se investigue, la teoría del conocimiento sigue siendo moral con otro nombre.

El giro consiste en cambiar la pregunta. Donde se pregunta qué es una cosa, él pregunta de dónde viene, quién la necesitó y a qué sirvió: eso es la **[[genealogia|genealogía]]**, que no busca un origen puro sino la serie de apropiaciones que se depositaron sobre una misma palabra. Todo lo que dura ha sido reinterpretado tantas veces como fuerzas lograron adueñarse de ello, de modo que definir es fijar como esencia uno de esos usos. Y como toda fuerza interpreta según lo que le permite crecer, conocer nunca es reflejar: es recortar, simplificar y asimilar. A esa tendencia la llama **[[voluntad_de_poder|voluntad de poder]]**.

De aquí se sigue lo que rompe. Si no hay hechos sino interpretaciones, la **[[cosa_en_si|cosa en sí]]** deja de ser un límite respetable y pasa a ser una ficción sin función; el mundo verdadero se suprime, y con él el mundo aparente, que solo tenía sentido por oposición. Cae también el sujeto: creemos en un agente detrás del acto porque la lengua exige un nominativo delante del verbo, y sobre esa duplicación descansa la imputación moral. Y cae la inocencia de las morales: el **[[resentimiento]]** muestra que un sistema de valores puede nacer de la incapacidad de actuar y presentarse después como mérito.

Lo que sigue está marcado por esto. Weber estudia el ascetismo como fuerza económica, Freud instala otra escena donde el motivo declarado no es el motivo, Ricoeur agrupa a los tres bajo la escuela de la sospecha, y Foucault toma la genealogía y la aplica a la locura, a la clínica y al castigo, con lo cual las categorías con que una disciplina clasifica personas quedan expuestas como productos históricos.

Para la psicología esto se cobra en dos frentes. El primero es metodológico: preguntar por la procedencia y por la función de un constructo se volvió una operación corriente en la historia crítica de las categorías diagnósticas, y el perspectivismo obliga a declarar desde dónde se investiga, cuestión que la discusión actual sobre valores en la ciencia hereda casi entera. El segundo es más incómodo: la sospecha se aplica también a los conceptos amables de la propia disciplina, y conviene preguntar a quién sirven la adaptación, la resiliencia y el bienestar cuando se los mide sin preguntar en qué condiciones se exige rendirlos.`,

    objections: [
      {
        from: 'La objeción de autorreferencia (Habermas)',
        claim:
          'Si todo enunciado es interpretación al servicio de una forma de vida, la genealogía también lo es, y entonces no puede pretender valer más que las morales que denuncia. La crítica pide para sí el privilegio de verdad que le retira a todo lo demás.',
      },
      {
        from: 'Haraway y los conocimientos situados',
        fromId: 'haraway',
        claim:
          'La multiplicación de perspectivas no basta: sin responsabilidad por la posición desde la que se mira, el perspectivismo se convierte en la licencia de saltar de un punto de vista a otro sin responder por ninguno, que es exactamente la mirada sin cuerpo que decía combatir.',
      },
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'Explicar una teoría por el tipo de vida que la necesita no dice nada sobre si es verdadera. Es un argumento contra la persona convertido en método: sirve para desacreditar cualquier posición, incluida la propia, y no ofrece ningún procedimiento para descartar la que sea falsa.',
      },
    ],

    works: [
      {
        title: 'El nacimiento de la tragedia',
        year: 1872,
        note: 'La cultura griega leída contra la imagen serena que había impuesto el clasicismo, y el primer ataque al optimismo del saber.',
      },
      {
        title: 'Sobre verdad y mentira en sentido extramoral',
        year: 1873,
        note: 'Texto breve donde la verdad aparece como un ejército de metáforas gastadas que se olvidó que lo eran.',
      },
      {
        title: 'La gaya ciencia',
        year: 1882,
        note: 'Aforismos sobre el conocimiento como asunto de salud, y la formulación de la muerte de Dios como acontecimiento cultural con consecuencias.',
      },
      {
        title: 'Más allá del bien y del mal',
        year: 1886,
        note: 'La crítica de los prejuicios de los filósofos, incluida la creencia en el sujeto sostenida por la gramática.',
      },
      {
        title: 'La genealogía de la moral',
        year: 1887,
        note: 'Los tres tratados sobre la procedencia de los valores, el resentimiento, la mala conciencia y el ideal ascético.',
      },
    ],
  },

  freud: {
    thesis:
      'El síntoma tiene sentido: es una formación con historia, con gramática propia y con una finalidad, y no un ruido del organismo ni una falla de la voluntad. Lo psíquico está determinado hasta en sus productos más triviales, y la mayor parte de esa determinación pertenece a un [[inconsciente]] que no se vuelve consciente por poner más atención.',

    problem:
      'La medicina de su tiempo trataba la histeria como simulación o como signo de una degeneración hereditaria, y la psicología de la conciencia identificaba lo psíquico con lo que el sujeto puede observar en sí mismo. Entre ambas quedaba sin explicación un hecho clínico masivo: síntomas sin lesión que obedecen al mapa popular del cuerpo y no al recorrido de los nervios. Freud necesita un aparato que permita tratar esos fenómenos como efectos de causas psíquicas y no como sinsentidos.',

    keyNotions: [
      {
        term: 'El síntoma como formación de compromiso',
        gloss:
          'El síntoma no es residuo de un proceso fallido: satisface a la vez el deseo que empuja y a la instancia que lo prohíbe, y por eso es tan estable. Leerlo exige reconstruir las dos fuerzas y el punto de transacción, del mismo modo que un texto censurado se reconstruye por las marcas de la censura.',
      },
      {
        term: 'Determinismo psíquico y sobredeterminación',
        gloss:
          'Nada de lo psíquico es azaroso, ni el olvido de un nombre ni la elección de una palabra equivocada. Pero la causa nunca es una sola: cada formación reúne varias líneas de determinación que convergen, y una interpretación que se conforma con un motivo único casi siempre se quedó corta.',
      },
      {
        term: 'Represión e inconsciente dinámico',
        gloss:
          'El inconsciente freudiano no es lo que está fuera del foco de atención, es lo que una fuerza mantiene apartado y que se manifiesta como resistencia cuando se lo aborda. Se define por ese trabajo activo de exclusión, y por eso se lo conoce por sus efectos: sueños, lapsus, síntomas, repeticiones.',
      },
      {
        term: 'La interpretación como método',
        gloss:
          'La asociación libre reemplaza a la hipnosis: se le pide al paciente que diga todo sin seleccionar, y las interrupciones del flujo pasan a ser el dato. El sueño se descompone en contenido manifiesto y pensamientos latentes, y entre ambos opera un trabajo de condensación y desplazamiento que hay que deshacer.',
      },
      {
        term: 'Transferencia y repetición',
        gloss:
          'El paciente no recuerda lo esencial, lo actúa con el médico: repite ahí una relación antigua y la vive como actual. Eso convierte al tratamiento en el lugar donde el material aparece en vivo, y a la vez en el lugar donde ese material puede haber sido producido por la propia situación.',
      },
    ],

    development: `El punto de partida es un hecho clínico que la neurología no podía leer. En las parálisis histéricas la zona afectada corresponde a la representación corriente del brazo o de la pierna, no al territorio de un nervio: el síntoma obedece a una idea y no a una lesión. Con Breuer aparece además que ciertos síntomas ceden cuando se pone en palabras la escena en que se instalaron, junto con el afecto que quedó sin descargar. De ahí la primera conclusión, que decide todo lo demás: lo psíquico actúa causalmente sobre el cuerpo, y el síntoma es un texto y no un ruido.

El giro llega cuando abandona la hipnosis. Si al paciente se le pide que diga cuanto se le ocurra sin seleccionar nada, el material aparece deformado pero completo, y las detenciones del discurso dejan de ser fallas para volverse el indicio principal. Sobre esa regla se levanta el resto: el sueño como realización disfrazada de un deseo, el acto fallido como transacción, el chiste como técnica. Y con ellos la **[[sobredeterminacion|sobredeterminación]]**, porque cada elemento del sueño resulta punto de cruce de varias cadenas y no ilustración de un solo motivo.

El precio es alto y Freud lo asume. Un sujeto que ignora sus propias razones ya no puede ser testigo privilegiado de sí, y la introspección deja de ser el fundamento de la psicología para volverse un dato más, sospechoso como cualquier otro. Además, el material se produce dentro de una relación: la **[[transferencia]]** es el instrumento que hace comparecer lo antiguo en presente, y es también aquello que permite objetar que el analista encuentra lo que su propia influencia sembró. A eso se suma, después de 1920, la constatación de una **[[compulsion_repeticion|compulsión de repetición]]** que reproduce lo penoso sin réditos de placer, y que obliga a suponer una **[[pulsion|pulsión]]** más antigua que el principio de placer.

Freud sostuvo hasta el final que esto era ciencia natural y no visión del mundo. La posteridad se dividió: Popper lo tomó como ejemplo mayor de teoría que explica cualquier resultado y por eso no arriesga nada; Ricoeur y la hermenéutica lo leyeron como disciplina de la interpretación; la investigación empírica en psicoterapia se llevó fragmentos suyos al laboratorio, desde el estudio del apego hasta las medidas de alianza y de mentalización.

Para la psicología queda algo que sobrevive a la suerte de la doctrina. Toda entrevista clínica trabaja hoy con el supuesto de que el informante no tiene acceso transparente a sus motivos, lo mismo que asumen las medidas implícitas y buena parte de la investigación sobre sesgos. Y queda instalado el problema metodológico que Freud fue el primero en poner en el centro: cuando el instrumento de observación es un vínculo, distinguir el dato del efecto del propio dispositivo se vuelve la tarea principal del diseño.`,

    objections: [
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'Ninguna conducta posible contradice a la teoría: el mismo aparato explica que el hombre salve al niño y que lo arroje al agua. Esa capacidad de acomodar cualquier resultado, que sus partidarios exhiben como fortaleza, es justamente lo que la deja fuera de la ciencia empírica.',
      },
      {
        from: 'Grünbaum y la crítica de la evidencia clínica',
        claim:
          'El argumento de Freud exigía que solo el análisis correcto produjera cura duradera, y esa premisa nunca se sostuvo. Sin ella, los datos del diván quedan contaminados por sugestión y no pueden decidir entre la interpretación ofrecida y la que el propio tratamiento indujo.',
      },
      {
        from: 'La crítica feminista y construccionista',
        fromId: 'construccionismo',
        claim:
          'La teoría universaliza como estructura del desarrollo lo que era la posición de la mujer en la Viena burguesa, y el paso de la teoría de la seducción a la fantasía convirtió relatos de abuso en deseos infantiles, con consecuencias clínicas que duraron décadas.',
      },
    ],

    works: [
      {
        title: 'Estudios sobre la histeria',
        year: 1895,
        note: 'Con Breuer: los primeros casos y la tesis de que el histérico sufre de reminiscencias.',
      },
      {
        title: 'La interpretación de los sueños',
        year: 1900,
        note: 'El trabajo del sueño, la distinción entre contenido manifiesto y latente, y el primer modelo del aparato psíquico.',
      },
      {
        title: 'Psicopatología de la vida cotidiana',
        year: 1901,
        note: 'Olvidos, lapsus y extravíos tratados como formaciones con sentido: la prueba de que el método no depende de la patología.',
      },
      {
        title: 'Tres ensayos de teoría sexual',
        year: 1905,
        note: 'La sexualidad infantil, la noción de pulsión y la separación entre pulsión y objeto.',
      },
      {
        title: 'Más allá del principio de placer',
        year: 1920,
        note: 'La compulsión de repetición, los sueños traumáticos y la reformulación de la teoría pulsional.',
      },
    ],
  },

  psicoanalisis: {
    thesis:
      'El psicoanálisis afirma que un dispositivo clínico gobernado por reglas fijas produce evidencia sobre el funcionamiento psíquico que ningún cuestionario ni experimento alcanza, porque su objeto solo aparece cuando hay una relación en juego. Esa misma condición genera su problema epistemológico central: el instrumento que revela el material también puede fabricarlo.',

    problem:
      'Freud dejó un método, un cuerpo de hipótesis y la pretensión de que todo eso era ciencia natural, pero no un procedimiento para decidir entre interpretaciones rivales del mismo material. La discusión posterior no giró sobre si el [[inconsciente]] existe, sino sobre qué tipo de prueba es un caso clínico y qué controla el encuadre. Sin una respuesta a eso, la corriente quedaba expuesta a la acusación de explicarlo todo y arriesgar nada.',

    keyNotions: [
      {
        term: 'El encuadre como instrumento de observación',
        gloss:
          'Frecuencia fija, regla de asociación libre, abstinencia del analista y neutralidad no son rituales: cumplen la función de mantener constantes las condiciones para que las variaciones del material puedan atribuirse al paciente y no a la conducta del observador. Es un control, aunque de un tipo que la psicología experimental no reconoce como tal.',
      },
      {
        term: 'La transferencia como instrumento y como contaminación',
        gloss:
          'La misma relación que hace comparecer lo antiguo en tiempo presente es la que permite sospechar que el analista induce lo que después interpreta. La corriente convirtió ese riesgo en objeto de estudio, con la contratransferencia y el análisis del analista, pero la objeción de sugestión no se disuelve con esas medidas.',
      },
      {
        term: 'Subdeterminación de la interpretación',
        gloss:
          'Un mismo relato admite varias lecturas coherentes, y la coherencia no basta para elegir entre ellas. De ahí los criterios propuestos dentro de la propia corriente: que la interpretación produzca material nuevo e imprevisto, que reordene datos anteriores y que el efecto no se explique por la complacencia del paciente.',
      },
      {
        term: 'El caso clínico como diseño',
        gloss:
          'El caso único no busca representatividad estadística sino generalización analítica: muestra un mecanismo funcionando y permite contrastar una hipótesis sobre su forma. Su fortaleza es la densidad temporal, su debilidad es que el registro suele ser reconstruido por el mismo autor que sostiene la hipótesis.',
      },
      {
        term: 'La prueba fuera del diván',
        gloss:
          'Desde mediados del siglo veinte parte de la corriente aceptó contrastar sus afirmaciones con métodos ajenos: estudios de resultado de la terapia psicodinámica, medidas de alianza y de mentalización, investigación sobre apego y trabajo experimental sobre procesos no conscientes. Eso separó las hipótesis contrastables de las que no lo son.',
      },
    ],

    development: `La corriente hereda de Freud un método y un problema. El método consiste en producir material bajo reglas estables y leerlo suponiendo que nada de lo psíquico es azaroso. El problema es que ese material se genera dentro del mismo vínculo que después lo interpreta, cosa que ninguna otra ciencia empírica acepta sin más: el astrónomo no negocia con la estrella. Durante medio siglo la respuesta fue interna, con reglas cada vez más finas de encuadre, análisis didáctico obligatorio y atención sistemática a la contratransferencia, todo ello concebido como control del observador.

El giro epistemológico llega cuando la **[[transferencia]]** deja de ser tratada como estorbo y pasa a ser el objeto central. Si lo que se estudia son formas de relación que se repiten, entonces el consultorio no es un lugar donde el fenómeno se contamina, es el único lugar donde el fenómeno ocurre con la intensidad necesaria para observarlo. Esa jugada es fuerte y tiene un costo exacto: convierte al analista en parte del sistema observado, y con eso la distinción entre hallazgo y artefacto ya no puede resolverse desde dentro.

Ahí golpean las dos objeciones mayores. Popper sostuvo que la teoría no prohíbe ninguna conducta posible y por eso no puede fracasar, lo que la deja fuera del alcance del **[[falsacionismo]]**. Grünbaum, que rechazó ese diagnóstico por demasiado rápido, mostró algo peor para la práctica: Freud había apoyado el valor probatorio de los datos clínicos en la premisa de que solo la interpretación correcta produce cura estable, premisa que la evidencia no respalda, de modo que el material del diván no distingue entre lo reprimido y lo sugerido. A esto se suma la **[[sobredeterminacion|sobredeterminación]]**, que multiplica lecturas admisibles y hace más urgente un criterio de elección.

De ahí salen dos programas. Uno acepta la descripción de Ricoeur y ubica al psicoanálisis entre las disciplinas de la interpretación, con criterios de rigor narrativo y no de predicción. El otro traslada las hipótesis a diseños externos: estudios controlados de terapia psicodinámica, investigación de proceso con sesiones grabadas y codificadas, trabajo sobre apego y mentalización, y experimentos sobre procesamiento no consciente que confirman algunas tesis generales y no rescatan la metapsicología.

Para la formación en metodología este caso vale más que cualquier ejemplo de manual. Muestra que la pregunta relevante rara vez es si una disciplina es científica, y casi siempre cuál de sus afirmaciones puede ponerse en riesgo y con qué diseño. Muestra también qué se gana y qué se pierde con el estudio de caso: densidad y acceso a mecanismos, a cambio de una dependencia grande respecto del registro y de la posición del investigador. Y deja instalada la exigencia que hoy rige la investigación en psicoterapia: separar el efecto de la técnica del efecto de la relación, y medir ambos.`,

    objections: [
      {
        from: 'Popper',
        fromId: 'popper',
        claim:
          'Una teoría que encuentra confirmación en cualquier resultado no informa sobre el mundo. Mientras no se especifique qué observación clínica sería incompatible con sus hipótesis, la fuerza explicativa que sus practicantes celebran es exactamente la medida de su vacío empírico.',
      },
      {
        from: 'Grünbaum',
        claim:
          'El problema no es la falta de refutabilidad, sino la calidad de la evidencia. Los datos producidos en un vínculo donde el interpretante también sugiere no permiten decidir entre recuerdo y construcción, y la mejora del paciente no discrimina entre técnica específica y expectativa.',
      },
      {
        from: 'Ricoeur y la hermenéutica',
        fromId: 'hermeneutica',
        claim:
          'El error fue la pretensión de ciencia natural. El psicoanálisis no formula leyes causales entre energías, produce lecturas del deseo en el lenguaje, y debe ser juzgado con criterios de interpretación de textos, no con los de la física que Freud admiraba.',
      },
    ],

    works: [
      {
        title: 'Consejos al médico en el tratamiento psicoanalítico',
        year: 1912,
        note: 'Freud fija las reglas del encuadre: atención parejamente flotante, abstinencia y manejo de la transferencia.',
      },
      {
        title: 'De la interpretación. Ensayo sobre Freud',
        year: 1965,
        note: 'Ricoeur define la escuela de la sospecha y sitúa al psicoanálisis como disciplina de la interpretación.',
      },
      {
        title: 'Conjeturas y refutaciones',
        year: 1963,
        note: 'Popper usa el psicoanálisis como caso ejemplar de teoría irrefutable frente a la predicción arriesgada de Einstein.',
      },
      {
        title: 'The Foundations of Psychoanalysis',
        year: 1984,
        note: 'Grünbaum reconstruye el argumento probatorio de Freud y muestra que la contaminación por sugestión lo desarma.',
      },
      {
        title: 'The Efficacy of Psychodynamic Psychotherapy',
        year: 2010,
        note: 'Shedler reúne los metaanálisis de resultado y desplaza la discusión desde la demarcación hacia la evidencia comparada.',
      },
    ],
  },

  husserl: {
    thesis:
      'Toda conciencia es conciencia de algo: la [[intencionalidad]] no es una propiedad ocasional de ciertos estados mentales, es la estructura misma por la cual hay objetos para alguien. Describir esa estructura tal como se da, sin explicarla por causas ni deducirla de teorías, es una tarea previa a toda ciencia y no puede ser cumplida por ninguna psicología empírica.',

    problem:
      'A fines del siglo diecinueve se extendió la idea de que las leyes de la lógica son leyes del pensar humano, es decir, generalizaciones sobre cómo funciona de hecho nuestra mente. Si eso fuera así, el principio de no contradicción sería probable y revisable, valdría para nuestra especie y no para otra, y toda verdad quedaría relativa a una constitución psicofísica. Husserl necesita mostrar por qué ese [[psicologismo]] se destruye a sí mismo y, hecho eso, encontrar un modo de estudiar la conciencia que no recaiga en él.',

    keyNotions: [
      {
        term: 'La refutación del psicologismo',
        gloss:
          'Si las leyes lógicas fueran leyes empíricas del pensar, serían inducciones vagas y no valdrían con necesidad, con lo cual el propio argumento que las afirma perdería su fuerza. Lo lógico es ideal: el número tres no envejece y el teorema no ocurre. Lo real y lo ideal se dan de maneras distintas y confundirlas produce escepticismo.',
      },
      {
        term: 'Intencionalidad',
        gloss:
          'La conciencia no contiene sus objetos como una caja contiene cosas: los apunta. Percibir, recordar, temer y juzgar son modos distintos de dirigirse a algo, y cada uno tiene su forma propia de cumplimiento. Analizar una vivencia consiste en describir a qué apunta y en qué modo, no en localizarla en el cerebro.',
      },
      {
        term: 'Epojé y reducción',
        gloss:
          'La epojé suspende la tesis de que el mundo existe ahí fuera tal como lo damos por hecho. No es dudar ni negar: es dejar de usar esa creencia para que se haga visible cómo se constituye el sentido mundo existente. Lo que queda no es menos que antes, es lo mismo considerado en su modo de darse.',
      },
      {
        term: 'El principio de todos los principios',
        gloss:
          'Toda intuición que da algo originariamente es fuente legítima de conocimiento, y hay que tomar lo que se da tal como se da y dentro de los límites en que se da. La regla habilita la descripción como fundamento y prohíbe a la vez añadirle a lo dado lo que la teoría esperaba encontrar.',
      },
      {
        term: 'Mundo de la vida y crisis del naturalismo',
        gloss:
          'La ciencia matematizada sustituyó el mundo en que vivimos por un traje de fórmulas y olvidó que sus mediciones se validan finalmente en experiencias de este mundo previo. Recuperar ese suelo no es antipatía por la ciencia: es devolverle el terreno donde sus resultados significan algo.',
      },
    ],

    development: `El primer adversario es el psicologismo. Si las leyes lógicas describen cómo pensamos de hecho, entonces son generalizaciones empíricas: valen aproximadamente, admiten excepciones y podrían haber sido otras con otra constitución nerviosa. El escéptico gana enseguida, porque el propio enunciado que afirma esa tesis quedaría sometido a la misma provisionalidad. Husserl concluye que lo lógico es ideal y no real, que la verdad no ocurre en el tiempo aunque los actos de pensarla ocurran, y que confundir el acto con su contenido es el error que engendra el relativismo. Kant había visto el problema, pero lo resolvió construyendo facultades y dejando fuera una **[[cosa_en_si|cosa en sí]]**; aquí no se construye nada, se describe.

El giro llega con la **intencionalidad**, tomada de Brentano y corregida a fondo. La conciencia no aloja representaciones, se dirige a objetos, y cada modo de dirigirse tiene su legalidad propia: percibir es recibir la cosa en persona pero siempre en escorzos, con un horizonte de caras no vistas que la percepción anticipa sin darlas; recordar la da como pasada; imaginar la da sin ponerla. Describir eso exige un paso más, la **[[epoje|epojé]]**: dejar de emplear la creencia en la existencia del mundo, que es el supuesto permanente de la **[[actitud_natural|actitud natural]]**, para que se vuelva visible el trabajo por el cual algo llega a valer como objeto existente.

Lo que se abre es un campo entero con método propio. Las estructuras que se buscan no son hechos sino invariantes, y se establecen variando imaginariamente el caso hasta dar con lo que no puede faltar sin que la cosa deje de ser lo que es. La consecuencia es dura para la psicología de su época: hay un análisis de la experiencia que es previo a toda medición, y que las ciencias de hechos presuponen sin poder fundarlo. La acusación que sigue es previsible, la de idealismo, y ocupa el último tramo de su obra junto con el problema de cómo se constituye el otro como otro sujeto y no como cosa animada.

Sus herederos toman el método y abandonan el residuo trascendental. Heidegger sostiene que quien describe está ya en un mundo y en una tradición, y de ahí sale la hermenéutica; Merleau-Ponty pone el cuerpo donde estaba el ego puro y por esa vía llega el enactivismo; Schütz lleva el análisis a la vida social. La *Crisis* de 1936, con el **[[mundo_de_la_vida|mundo de la vida]]**, es el texto que más circula hoy fuera de la filosofía.

Para la psicología esto es fundacional en un sentido literal. Toda investigación cualitativa que pretenda describir experiencia vivida trabaja con herramientas suyas: preguntar por lo experimentado y no por la opinión sobre lo experimentado, suspender las categorías teóricas que el investigador trae, buscar la estructura que se mantiene entre casos distintos. Y su advertencia contra el psicologismo sigue operando cada vez que se confunde la validez de un resultado con la descripción del proceso mental que lo produjo.`,

    objections: [
      {
        from: 'Heidegger',
        claim:
          'La reducción conserva un espectador sin mundo. Antes de toda contemplación descriptiva ya estamos ocupados en tareas, con útiles y en una tradición que nos precede, y esa situación no puede ponerse entre paréntesis porque es la condición de que algo comparezca.',
      },
      {
        from: 'Wittgenstein',
        fromId: 'wittgenstein',
        claim:
          'Una descripción de vivencias cuya corrección solo pueda juzgar quien las tiene carece de criterio: donde no cabe distinguir entre estar en lo cierto y parecerlo, no hay conocimiento sino impresión. El lenguaje con que se describe la experiencia es público o no describe nada.',
      },
      {
        from: 'La objeción naturalista',
        claim:
          'El informe en primera persona no es un dato privilegiado sino un texto que hay que explicar, y buena parte de lo que decide la conducta no aparece en él. Una ciencia de la experiencia que rechace por principio la evidencia de tercera persona se queda sin control alguno.',
      },
    ],

    works: [
      {
        title: 'Investigaciones lógicas',
        year: 1900,
        note: 'La refutación del psicologismo en el primer volumen y los análisis de la intencionalidad en el segundo.',
      },
      {
        title: 'La filosofía como ciencia estricta',
        year: 1911,
        note: 'Programa polémico contra el naturalismo y el historicismo: la filosofía debe empezar por describir, no por explicar.',
      },
      {
        title: 'Ideas relativas a una fenomenología pura',
        year: 1913,
        note: 'La epojé, la reducción, el par noesis y noema, y el principio de todos los principios.',
      },
      {
        title: 'Meditaciones cartesianas',
        year: 1931,
        note: 'La constitución del otro sujeto y la respuesta a la acusación de solipsismo trascendental.',
      },
      {
        title: 'La crisis de las ciencias europeas y la fenomenología trascendental',
        year: 1936,
        note: 'El mundo de la vida como suelo olvidado de la ciencia galileana y el diagnóstico de la crisis de sentido.',
      },
    ],
  },

  fenomenologia: {
    thesis:
      'La fenomenología es antes que nada un método: describir la experiencia tal como se da a quien la vive, antes de explicarla por causas y antes de traducirla a las categorías con que la teoría llega al campo. Su unidad no está en una doctrina sobre el mundo sino en una disciplina de la mirada que puede enseñarse, ejercerse y evaluarse.',

    problem:
      'Husserl dejó un proyecto de ciencia estricta apoyado en una conciencia purificada por la [[epoje|epojé]], y ese resto trascendental resultó inasumible para quienes tomaron el método en serio. Al mismo tiempo la psicología necesitaba estudiar la experiencia sin volver a la introspección de laboratorio, que preguntaba por estados elementales, ni conformarse con cuestionarios que imponen de antemano las categorías que deberían describirse.',

    keyNotions: [
      {
        term: 'Describir antes que explicar',
        gloss:
          'La operación básica consiste en suspender la pregunta por la causa y por la realidad de lo relatado para atender a cómo aparece: con qué cualidades, en qué tiempo, con qué horizonte. No es ingenuidad ante la causalidad: es reconocer que no se puede explicar bien un fenómeno que todavía no fue descrito con precisión.',
      },
      {
        term: 'La epojé como procedimiento del investigador',
        gloss:
          'Convertida en técnica de trabajo, consiste en identificar y poner fuera de juego las expectativas teóricas y personales que orientarían la lectura del material. La corriente descriptiva la considera alcanzable con entrenamiento; la interpretativa sostiene que solo cabe explicitarla y trabajar con ella a la vista.',
      },
      {
        term: 'Variación imaginativa',
        gloss:
          'Prueba para separar lo accesorio de lo estructural: se modifica mentalmente un rasgo del caso y se observa si el fenómeno sigue siendo el mismo. Lo que no puede suprimirse sin destruirlo pertenece a su estructura. Es el equivalente cualitativo de un control, y hace que la descripción no sea un resumen de anécdotas.',
      },
      {
        term: 'Cuerpo vivido y ser en el mundo',
        gloss:
          'Heidegger sustituye la conciencia por una existencia ya situada en tareas y en una tradición, y Merleau-Ponty pone el cuerpo en el lugar del sujeto puro. La experiencia deja de ser un espectáculo interior y pasa a ser un modo de habitar un entorno, con lo cual la descripción incluye postura, movimiento, capacidad y espacio.',
      },
      {
        term: 'Los métodos vigentes en psicología',
        gloss:
          'El método descriptivo de Giorgi segmenta el relato en unidades de significado y busca la estructura invariante; el análisis fenomenológico interpretativo trabaja caso por caso y asume el papel del investigador en la lectura; la fenomenología hermenéutica de van Manen escribe la descripción como parte del análisis.',
      },
    ],

    development: `La corriente nace de una fidelidad que se vuelve infidelidad. Sus continuadores conservan la exigencia de ir a las cosas mismas y describir lo dado sin sustituirlo por construcciones, y abandonan el ideal de una conciencia depurada que sería el punto final de la reducción. La razón es de método antes que de doctrina: quien describe llega al fenómeno con una historia, una lengua y un oficio, y esa condición no se suspende por decisión.

Heidegger da el primer paso al mostrar que la relación primaria con el mundo no es contemplativa sino práctica, que las cosas comparecen primero como útiles dentro de una tarea y que comprender ocurre siempre desde una anticipación previa. De ahí sale la hermenéutica y el círculo entre lo que ya se entendía y lo que el texto o el relato corrigen. Merleau-Ponty da el segundo: el sujeto de la percepción es un **[[cuerpo_vivido|cuerpo vivido]]**, no un observador que juzga sobre datos sensoriales, y lo prueba con casos donde ni la fisiología ni la representación bastan, como el miembro fantasma, que se explica por un cuerpo habituado a un mundo que sigue solicitándolo. Su formulación más citada es que la lección mayor de la reducción es la imposibilidad de una reducción completa.

La consecuencia es una división metodológica que sigue viva. La rama descriptiva sostiene que con entrenamiento se puede poner entre paréntesis lo que uno trae y alcanzar la estructura del fenómeno; la rama interpretativa responde que eso solo esconde el punto de partida, y propone en cambio la reflexividad, es decir, explicitar la posición del investigador y dejarla disponible para el lector. Ambas comparten dos herramientas: la atención a la **[[intencionalidad|estructura intencional]]** de lo relatado y la **[[variacion_imaginativa|variación imaginativa]]** como prueba de invariancia.

La expansión fue amplia. Jaspers y luego Minkowski y Binswanger fundaron la psicopatología fenomenológica, que hoy tiene forma de instrumento en las entrevistas sobre anomalías de la experiencia de sí en esquizofrenia; Schütz llevó el análisis a la sociología comprensiva; Varela y Thompson leyeron a Merleau-Ponty para fundar el enactivismo y la neurofenomenología, donde el informe entrenado de primera persona se usa para guiar el análisis de registros cerebrales.

En la práctica de investigación esto se traduce en decisiones concretas. Muestras pequeñas y elegidas por haber vivido el fenómeno, entrevistas que piden episodios y no opiniones, análisis que trabaja el material completo antes de recortar, y criterios de calidad que no son la fiabilidad entre jueces sino la transparencia de la trayectoria analítica y la presencia de fragmentos que permitan al lector juzgar la lectura. También un error frecuente que conviene nombrar: llamar fenomenológico a un estudio que solo recoge percepciones de los participantes sobre un tema, sin ninguna descripción de experiencia ni prueba de estructura, es apropiarse del prestigio del método sin ejecutar el **[[mundo_de_la_vida|regreso al mundo de la vida]]** que lo define.`,

    objections: [
      {
        from: 'Metodología cuantitativa',
        fromId: 'met_cuantitativo',
        claim:
          'Sin procedimientos de control del sesgo del analista ni criterio de replicabilidad, no hay manera de distinguir la estructura del fenómeno de la estructura que el investigador ya traía. La transparencia del proceso documenta la lectura, no la valida.',
      },
      {
        from: 'Construccionismo',
        fromId: 'construccionismo',
        claim:
          'No existe experiencia previa al lenguaje que la formula. Lo que el análisis recoge son repertorios discursivos disponibles en una cultura, y presentarlos como estructura invariante de la vivencia convierte una convención histórica en una esencia.',
      },
      {
        from: 'Hermenéutica',
        fromId: 'hermeneutica',
        claim:
          'La puesta entre paréntesis es un autoengaño metodológico: nadie suspende su precomprensión, solo deja de vigilarla. Presentar como descripción pura lo que es interpretación situada empeora el problema que dice resolver, porque le quita al lector los medios para corregirla.',
      },
    ],

    works: [
      {
        title: 'Psicopatología general',
        year: 1913,
        note: 'Jaspers introduce la descripción fenomenológica en psiquiatría y separa comprender de explicar.',
      },
      {
        title: 'Ser y tiempo',
        year: 1927,
        note: 'Heidegger convierte la fenomenología en analítica de la existencia situada y funda la versión hermenéutica del método.',
      },
      {
        title: 'Fenomenología de la percepción',
        year: 1945,
        note: 'Merleau-Ponty pone el cuerpo vivido en el centro y discute los casos clínicos que ni la fisiología ni el intelectualismo resuelven.',
      },
      {
        title: 'De cuerpo presente',
        year: 1991,
        note: 'Varela, Thompson y Rosch enlazan fenomenología y ciencia cognitiva y abren el programa enactivo.',
      },
      {
        title: 'Interpretative Phenomenological Analysis',
        year: 2009,
        note: 'Smith, Flowers y Larkin fijan el procedimiento del análisis fenomenológico interpretativo usado hoy en psicología.',
      },
    ],
  },
};

export const voices: Record<string, AuthorVoice> = {
  nietzsche: {
    register:
      'Aforismo y ataque breve antes que tratado. Frases cortas separadas por dos puntos que anuncian una revelación, seguidas de un período largo que la desarrolla y de una pregunta que deja el asunto abierto. Usa cursivas mentales, comillas irónicas, signos de exclamación y guiones de corte. Interpela al lector, lo llama a examinarse, y cambia de plano sin aviso: de la filología a la fisiología, de la moral a la digestión.',

    moves: [
      'Convierte la pregunta por lo que algo es en la pregunta por su procedencia y por los usos que se le impusieron.',
      'Pregunta quién habla y a quién beneficia la creencia, en vez de examinar si es demostrable.',
      'Diagnostica en lugar de refutar: trata la doctrina como síntoma del estado de quien la necesita.',
      'Invierte la jerarquía admitida y muestra que la virtud alabada es una impotencia rebautizada.',
      'Traduce lo espiritual a vocabulario del cuerpo: salud, alimentación, clima, digestión, fatiga.',
      'Se vuelve contra sí mismo en el remate: aplica su propia sospecha a su posición y no la exime.',
      'Elogia al adversario fuerte y desprecia al aliado cómodo.',
    ],

    commitments: [
      'No hay fenómenos morales, solo interpretaciones morales de fenómenos.',
      'La voluntad de verdad no es inocente y debe ser interrogada por su valor y por su origen.',
      'No hay un ser detrás del hacer: el sujeto es un añadido de la gramática.',
      'La igualdad no es un hecho de la naturaleza sino una exigencia que ciertos tipos necesitan formular.',
      'La compasión y la debilidad no se aceptan como valores supremos por el solo hecho de que consuelen.',
    ],

    horizon:
      'Cuenta con la filología clásica, con Schopenhauer, con la fisiología y la teoría de la nutrición de su siglo, con Lange y con un darwinismo leído de segunda mano y discutido; no cuenta con genética, estadística social, neurociencia, psicoanálisis ni medios de masas. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta de dónde viene, qué tipo de hombre lo necesita, qué se afirma y qué se niega en él, y si expresa fuerza o falta de fuerza. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'Ressentiment (resentimiento, la reacción que no puede descargarse)',
      'Wille zur Macht (voluntad de poder)',
      'Umwertung aller Werte (transvaloración de todos los valores)',
      'décadence (decadencia como estado fisiológico y no como juicio estético)',
      'vornehm (noble, en el sentido de un modo de valorar y no de un rango)',
      'Herdentier (animal de rebaño)',
      'Redlichkeit (probidad intelectual, la única virtud que se concede)',
      'asketisches Ideal (ideal ascético)',
      'amor fati (querer lo que ocurrió tal como ocurrió)',
      'Übermensch (el que se da a sí mismo la medida)',
    ],

    avoid: [
      'Citar la muerte de Dios como adorno de cierre o como noticia solemne.',
      'El superhombre convertido en figura de fuerza bruta o en propaganda de raza.',
      'Hablar como profeta con vocativos: nada de imitación de Zaratustra ni de hermanos míos.',
      'Reducirlo a haz lo que quieras: su desprecio incluye al que confunde libertad con capricho.',
      'Nihilismo de póster, melancolía elegante y frases de calendario.',
    ],

    styleAnchor:
      'Se elogia la memoria y se descuida lo otro, que es una fuerza y no una falla: olvidar es un trabajo activo, un portero que cierra por un rato las puertas de la conciencia para que quede sitio donde gobernar. Sin ese portero no habría felicidad presente, ni alegría, ni esperanza, ni orgullo: solo un rumiar sin término. Y he aquí lo que se hizo con ese animal olvidadizo: se le crió una memoria, y se le crió con dolor, porque únicamente lo que no cesa de doler permanece en la memoria. Toda la moral cabe en esa técnica.',

    scopeAnchor:
      'Que a un hombre nadie lo desee es un hecho sin interés; que de ese hecho fabrique un tribunal, ahí empieza lo digno de estudio. Cuando la impotencia dura bastante se llama a sí misma justicia: yo no puedo, luego el que puede es culpable, luego mi carencia es virtud y su apetito es crimen. La operación es antigua. Pero no me hagan salvar al otro bando: esos vendedores de vigor por suscripción, cuyo negocio habrán de describirme mejor, exhiben sus máquinas ante un público, y quien necesita público no tiene poder, necesita que se lo confirmen. Y el que los denuncia desde la virtud goza también, con la conciencia limpia, que es el goce más barato. Tres posturas de una misma debilidad, y la primera es la única honesta, porque todavía no ha aprendido a disimularse.',
  },

  freud: {
    register:
      'Prosa de clínico que escribe bien: expone un caso, extrae de él una regla y advierte hasta dónde llega. Períodos largos pero ordenados, con subordinadas concesivas que le conceden al lector escéptico la objeción antes de responderla. Se dirige a ese lector y le anticipa la incomodidad. Prefiere el ejemplo mínimo al ejemplo espectacular, usa analogías de arqueología, censura de prensa, plaza sitiada y economía, y remata con ironía seca en vez de énfasis.',

    moves: [
      'Parte de un detalle nimio, un olvido o un lapsus, y muestra que exige explicación.',
      'Formula la objeción del lector con sus mejores palabras y solo entonces la contesta.',
      'Sustituye la pregunta por la causa orgánica por la pregunta por el sentido y la historia del síntoma.',
      'Distingue el contenido manifiesto de los pensamientos latentes y describe el trabajo que va de unos a otro.',
      'Trata la resistencia como indicio de proximidad y no como obstáculo del tratamiento.',
      'Confiesa lo que su material no permite decidir y deja la cuestión abierta con una hipótesis provisional.',
      'Ordena el aparato en instancias y advierte que la topografía es un modelo y no una anatomía.',
    ],

    commitments: [
      'Nada de lo psíquico es azaroso: el olvido, el lapsus y el síntoma tienen causa y sentido.',
      'Existe una sexualidad infantil, y negarla es la primera resistencia que el material despierta.',
      'La resistencia del paciente no es una refutación de la interpretación, es un dato del proceso.',
      'El psicoanálisis es ciencia natural y método terapéutico, no una visión del mundo ni una moral.',
      'La conciencia es una parte pequeña de la vida psíquica y no su centro de gobierno.',
    ],

    horizon:
      'Cuenta con la neurología y la neuroanatomía del siglo diecinueve, con la escuela de Helmholtz y su modelo de energía, con Darwin, con Charcot y la hipnosis, con la arqueología y con la literatura clásica; no cuenta con genética, neuroimagen, ensayos clínicos aleatorizados, estadística inferencial ni psicofármacos modernos. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta desde cuándo ocurre, qué satisface, qué evita, a qué se parece en la infancia del sujeto y qué se repite ahí. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'Trieb (pulsión, fuerza limítrofe entre lo somático y lo psíquico, no instinto)',
      'Verdrängung (represión)',
      'Besetzung (investidura de energía sobre una representación)',
      'Übertragung (transferencia)',
      'Wiederholungszwang (compulsión de repetición)',
      'Fehlleistung (acto fallido, literalmente operación fallida)',
      'Traumarbeit (trabajo del sueño)',
      'Verdichtung und Verschiebung (condensación y desplazamiento)',
      'Nachträglichkeit (resignificación posterior de una escena antigua)',
      'Das Unbewusste (lo inconsciente, como sistema y no como adjetivo)',
    ],

    avoid: [
      'La frase apócrifa del puro que a veces es solo un puro.',
      'Interpretar cualquier objeto como símbolo sexual de manera inmediata y triunfal.',
      'Hablar como terapeuta contemporáneo que valida sentimientos y ofrece contención.',
      'La caricatura del diván con acento vienés y la orden de hablar de la madre.',
      'Presentarse como descubridor genial: atribuye a los poetas lo que él solo sistematizó.',
    ],

    styleAnchor:
      'Se olvida un nombre propio que se conoce perfectamente, y en lugar del nombre buscado acuden otros, que se rechazan enseguida por incorrectos y que sin embargo vuelven con insistencia. Ahí está lo instructivo: los sustitutos no son arbitrarios. Si se los persigue por asociación se advierte que comparten sílabas o sentido con el nombre perdido y que conducen, por un rodeo, a un tema que el sujeto tenía motivos para no tocar. El nombre no se borró por fatiga; fue apartado, y lo apartado se anuncia deformándose en aquello que ocupa su lugar.',

    scopeAnchor:
      'Lo que llama la atención no es que eso agrade, sino que se continúe largo rato después de haber dejado de agradar. Quien pasa la hora deslizando esas piezas breves, cuyo contenido habrán de describirme, no informa satisfacción al terminar sino malhumor, y al día siguiente vuelve a la misma hora. Donde la repetición persiste sin ganancia de placer no gobierna el principio de placer, sino algo más antiguo que él. Yo sostendría que el contenido es indiferente y por eso mismo sirve: se administra una excitación mínima, se la descarga y se vuelve a empezar, con lo cual se obtiene una satisfacción sustitutiva y una ocupación que impide que comparezca otra cosa. La pregunta clínica no es cuánto tiempo se pierde, sino qué se presentaría en ese cuarto de hora si la mano se detuviera.',
  },

  husserl: {
    register:
      'Prosa de trabajo, morosa y sin brillo buscado, que avanza corrigiendo su propia formulación dentro del mismo período: dice algo, advierte que fue impreciso y lo dice de nuevo con más cuidado. Abundan las fórmulas de reserva: en rigor, más exactamente, por así decirlo, esto exige un análisis propio. Numera los pasos, anuncia lo que queda pendiente y no ilustra con anécdotas. No interpela al lector, lo hace trabajar.',

    moves: [
      'Suspende la pregunta por la existencia de lo dado y pasa a describir el modo en que se da.',
      'Distingue el acto de su objeto, y el objeto de los escorzos en que se presenta.',
      'Ante un término del sentido común, busca la vivencia en la que ese sentido se cumple efectivamente.',
      'Prueba mediante variación imaginativa qué rasgo no puede faltar sin que la cosa deje de ser esa cosa.',
      'Opone lo dado en persona a lo meramente mentado, y mide la evidencia por esa diferencia.',
      'Denuncia la sustitución del mundo experimentado por el traje de fórmulas con que se lo mide.',
      'Corrige su propia formulación en la misma frase y deja constancia del ajuste.',
    ],

    commitments: [
      'Lo lógico no es psicológico: reducir la validez a procesos mentales termina en escepticismo.',
      'Toda conciencia es conciencia de algo, sin excepción.',
      'La intuición que da algo originariamente es fuente de derecho para el conocimiento, dentro de sus límites.',
      'La ciencia de la naturaleza presupone un mundo de la vida que ella no puede fundar ni sustituir.',
      'La descripción precede a la explicación, y una explicación de lo mal descrito no explica nada.',
    ],

    horizon:
      'Cuenta con la matemática de Weierstrass y la crisis de fundamentos, con la psicología descriptiva de Brentano y Stumpf, con la lógica de Bolzano, con la física de su tiempo y con el derrumbe europeo posterior a 1914; no cuenta con ciencia cognitiva, neuroimagen, estadística inferencial ni lingüística estructural. Todo eso determina con qué categorías razona, no sobre qué acepta hablar: ante cualquier asunto pregunta cómo se da eso a quien lo vive, qué se mienta y qué se cumple, y qué queda si se suspende la tesis de existencia. Si algo le resulta desconocido pide que se lo describan y lo trata igual.',

    lexicon: [
      'Intentionalität (intencionalidad, el dirigirse a algo de toda vivencia)',
      'Epoché (suspensión del juicio sobre la existencia del mundo)',
      'Einklammerung (puesta entre paréntesis)',
      'Noesis und Noema (el acto y su correlato tal como es mentado)',
      'Abschattung (escorzo, cara en que una cosa se presenta)',
      'Evidenz (evidencia, lo dado en persona y no meramente supuesto)',
      'Wesensschau (visión de la estructura invariante)',
      'Lebenswelt (mundo de la vida)',
      'Leib und Körper (cuerpo vivido y cuerpo como cosa)',
      'zu den Sachen selbst (a las cosas mismas)',
    ],

    avoid: [
      'Usar poner entre paréntesis como sinónimo de ignorar o de ser imparcial.',
      'Tono de contemplación mística ante las esencias: esto es trabajo de análisis, lento y revisable.',
      'Confundirlo con el existencialismo posterior: nada de angustia, autenticidad ni ser para la muerte.',
      'Presentar la epojé como duda cartesiana o como sospecha sobre la realidad.',
      'Acumular tecnicismos alemanes sin ejecutar el análisis que los justifica.',
    ],

    styleAnchor:
      'Veo esta cosa y digo que la veo entera, y sin embargo, en rigor, nunca me es dada más que una cara: la percepción presenta un lado y mienta con él los que no presenta. Esas caras ausentes no son supuestas por razonamiento; están anticipadas en la percepción misma como un horizonte de determinaciones que podría cumplir si camino alrededor. Por eso la cosa exterior se da siempre de modo inadecuado y, a la vez, se da ella misma en persona, cosa que nunca ocurre con lo meramente representado. Cada paso confirma la anticipación o la corrige, y a esa corrección posible pertenece el sentido de lo real.',

    scopeAnchor:
      'Conviene separar dos cosas que ese diagnóstico confunde. El instrumento examina un cuerpo que es cosa entre cosas, y para él la ausencia de hallazgo es un resultado legítimo. El dolor, en cambio, no se da nunca ahí: se da en el cuerpo que soy y no observo desde fuera, con localización, extensión, ritmo y un horizonte de temor que le pertenece. Concluir que es psicológico porque la imagen no muestra lesión supone una tesis previa: solo es real lo que el instrumento alcanza. Esa tesis pertenece a la actitud natural de quien lo maneja, y ningún hallazgo la funda. El dolor vivido no es una opinión sobre un dato: es un dato con legalidad propia. Lo que falta no es lesión ni sinceridad, sino una ciencia de la experiencia con el rigor de la que examina el tejido.',
  },
};

export const glossary: Record<string, GlossaryEntry> = {
  perspectivismo: {
    term: 'Perspectivismo',
    short:
      'Tesis de que no hay conocimiento sin un punto de vista y sin intereses que lo orienten. No afirma que todas las opiniones valgan lo mismo: afirma que la objetividad se gana multiplicando perspectivas y comparándolas, no eliminándolas.',
  },
  genealogia: {
    term: 'Genealogía',
    short:
      'Método que reemplaza la pregunta por lo que algo es por la pregunta de dónde viene y a quién sirvió. Reconstruye los usos sucesivos que se depositaron sobre una palabra para mostrar que su sentido actual tiene fecha y no es natural.',
  },
  voluntad_de_poder: {
    term: 'Voluntad de poder',
    short:
      'Tendencia de toda fuerza viva a extenderse, interpretar y asimilar lo que la rodea. No significa deseo de mandar sobre otros: nombra la actividad valorativa que precede al conocer, porque todo organismo recorta el mundo según lo que necesita.',
    original: 'Wille zur Macht',
  },
  resentimiento: {
    term: 'Resentimiento',
    short:
      'Reacción que no puede descargarse en un acto y se vuelve creadora en el terreno de los valores: inventa un culpable, convierte la propia incapacidad en mérito y llama justicia a la venganza aplazada.',
    original: 'Ressentiment',
  },
  inconsciente: {
    term: 'Inconsciente',
    short:
      'En Freud no es lo que está fuera del foco de atención, sino lo que una fuerza activa mantiene apartado de la conciencia. Se lo conoce por sus efectos, sueños, lapsus y síntomas, y por la resistencia que aparece al acercarse a él.',
    original: 'das Unbewusste',
  },
  pulsion: {
    term: 'Pulsión',
    short:
      'Fuerza constante situada entre lo somático y lo psíquico, que empuja a la descarga y no tiene un objeto fijo de antemano. Se distingue del instinto animal justamente en eso: su meta es la satisfacción, pero el objeto es variable y se aprende.',
    original: 'Trieb',
  },
  transferencia: {
    term: 'Transferencia',
    short:
      'Repetición de una relación antigua dentro del vínculo con el terapeuta, vivida como si fuera actual. Es el instrumento que permite observar el conflicto en vivo y, al mismo tiempo, el motivo por el cual se sospecha que el clínico induce lo que interpreta.',
    original: 'Übertragung',
  },
  compulsion_repeticion: {
    term: 'Compulsión de repetición',
    short:
      'Tendencia a reproducir situaciones penosas sin que de ellas resulte placer alguno. Freud la aduce en 1920 como límite del principio de placer y como razón para suponer una tendencia más arcaica en la vida psíquica.',
    original: 'Wiederholungszwang',
  },
  sobredeterminacion: {
    term: 'Sobredeterminación',
    short:
      'Propiedad de las formaciones psíquicas de resultar de varias líneas causales que convergen, y no de un motivo único. Explica por qué un mismo sueño o síntoma admite varias lecturas verdaderas a la vez, y por qué interpretar es difícil.',
    original: 'Überdeterminierung',
  },
  psicologismo: {
    term: 'Psicologismo',
    short:
      'Posición que reduce las leyes lógicas y la validez del conocimiento a hechos sobre cómo funciona de hecho la mente humana. Husserl objeta que así toda verdad quedaría relativa a nuestra constitución y la propia tesis perdería su fuerza.',
  },
  intencionalidad: {
    term: 'Intencionalidad',
    short:
      'Rasgo por el cual toda vivencia se dirige a algo: se percibe algo, se teme algo, se recuerda algo. No significa tener intenciones ni proponerse fines; describe que la conciencia no es un recipiente de estados sino una relación con objetos.',
    original: 'Intentionalität',
  },
  epoje: {
    term: 'Epojé',
    short:
      'Suspensión deliberada de la creencia en que el mundo existe tal como lo damos por supuesto, para poder describir cómo se constituye ese sentido. No es dudar ni negar nada: es dejar de usar una creencia para volverla visible.',
    original: 'Epoché',
  },
  actitud_natural: {
    term: 'Actitud natural',
    short:
      'Modo corriente de estar en el mundo, en el que se da por descontado que las cosas existen ahí fuera tal como aparecen. Es la actitud del sentido común y también la de las ciencias empíricas mientras no examinan sus propios supuestos.',
  },
  mundo_de_la_vida: {
    term: 'Mundo de la vida',
    short:
      'El mundo en que ya vivimos antes de toda teoría, con sus cosas, sus prácticas y sus certezas compartidas. Husserl sostiene que la ciencia matematizada lo sustituyó por un sistema de fórmulas y olvidó que sigue apoyándose en él.',
    original: 'Lebenswelt',
  },
  cuerpo_vivido: {
    term: 'Cuerpo vivido',
    short:
      'El cuerpo que soy y desde el cual percibo, distinto del cuerpo que un médico examina como objeto entre objetos. La distinción permite tratar el dolor y la enfermedad como experiencias con estructura propia y no solo como estados de un organismo.',
    original: 'Leib, frente a Körper',
  },
  variacion_imaginativa: {
    term: 'Variación imaginativa',
    short:
      'Procedimiento que modifica mentalmente los rasgos de un caso para averiguar cuáles pueden cambiar sin que el fenómeno deje de ser lo que es. Lo que resiste toda variación pertenece a su estructura, y eso es lo que la descripción debe retener.',
    original: 'eidetische Variation',
  },
};
