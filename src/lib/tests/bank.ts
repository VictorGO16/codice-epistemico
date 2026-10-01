import type { PracticeTest } from './types';

export const TESTS = [
  {
    "id": "s1",
    "title": "Sesión 1 · Introducción",
    "questions": [
      {
        "id": "s1-q1",
        "text": "Anaximandro plantea el problema de la regresión al infinito al preguntarse:",
        "options": [
          {
            "id": "a",
            "text": "Si todo cambia constantemente, ¿cómo medirlo?",
            "correct": false,
            "feedback": "Esta alternativa remite al problema del cambio asociado a Heráclito. No apunta a la cadena de fundamentos que preocupa a Anaximandro."
          },
          {
            "id": "b",
            "text": "Si todo viene del agua, ¿de dónde viene el agua?",
            "correct": true,
            "feedback": "Correcta. La pregunta muestra que un principio como el agua también exigiría explicación. El ápeiron busca detener esa regresión."
          },
          {
            "id": "c",
            "text": "¿Puede el alma recordar verdades eternas?",
            "correct": false,
            "feedback": "Esta alternativa corresponde al problema de la anamnesis en Platón. No es el problema que se trabaja con Anaximandro."
          },
          {
            "id": "d",
            "text": "¿Cómo se demuestra un silogismo?",
            "correct": false,
            "feedback": "Esta alternativa corresponde a la lógica demostrativa asociada a Aristóteles. Anaximandro aparece antes, en el problema del fundamento último."
          }
        ]
      },
      {
        "id": "s1-q2",
        "text": "La máxima 'panta rhei' ('todo fluye') de Heráclito desafía especialmente a:",
        "options": [
          {
            "id": "a",
            "text": "Los métodos que buscan medir estados fijos y discretos, como los tests de personalidad.",
            "correct": true,
            "feedback": "Correcta. Si el fenómeno está en cambio continuo, una medición que fija un estado puede representar solo un momento del proceso."
          },
          {
            "id": "b",
            "text": "Las explicaciones que reducen fenómenos complejos a componentes más simples.",
            "correct": false,
            "feedback": "Esta alternativa describe el problema del reduccionismo, vinculado en la clase con el atomismo. El punto de Heráclito es el devenir."
          },
          {
            "id": "c",
            "text": "La lógica que deriva conclusiones necesarias mediante silogismos.",
            "correct": false,
            "feedback": "Esta alternativa remite a la lógica demostrativa. Heráclito plantea una dificultad distinta, cómo conocer algo que cambia."
          },
          {
            "id": "d",
            "text": "La idea de que conocer puede consistir en recordar verdades ya poseídas.",
            "correct": false,
            "feedback": "Esta alternativa corresponde a la anamnesis platónica. No responde al problema del flujo y la estabilidad."
          }
        ]
      },
      {
        "id": "s1-q3",
        "text": "La búsqueda de rasgos de personalidad estables y transituacionales, como el modelo Big Five, se conecta filosóficamente con:",
        "options": [
          {
            "id": "a",
            "text": "Heráclito y el devenir",
            "correct": false,
            "feedback": "Heráclito enfatiza el cambio y el devenir. La búsqueda de rasgos estables apunta en la dirección contraria."
          },
          {
            "id": "b",
            "text": "Parménides y la inmutabilidad del Ser",
            "correct": true,
            "feedback": "Correcta. La conexión está en la búsqueda de algo estable e invariante bajo la variabilidad observable."
          },
          {
            "id": "c",
            "text": "Los atomistas y el reduccionismo",
            "correct": false,
            "feedback": "El atomismo se vincula con explicar lo complejo a partir de componentes simples. La pregunta apunta a estabilidad e invariancia."
          },
          {
            "id": "d",
            "text": "Peirce y la abducción",
            "correct": false,
            "feedback": "Peirce aparece en relación con la generación de hipótesis explicativas. No con la búsqueda de rasgos estables."
          }
        ]
      },
      {
        "id": "s1-q4",
        "text": "Los atomistas, Leucipo y Demócrito, inauguran el problema epistemológico de:",
        "options": [
          {
            "id": "a",
            "text": "La demarcación entre ciencia y no ciencia",
            "correct": false,
            "feedback": "La demarcación pregunta qué separa la ciencia de otras formas de conocimiento. No es el problema central asociado al atomismo."
          },
          {
            "id": "b",
            "text": "El reduccionismo",
            "correct": true,
            "feedback": "Correcta. El atomismo explica fenómenos complejos mediante la combinación de componentes elementales."
          },
          {
            "id": "c",
            "text": "La inconmensurabilidad paradigmática",
            "correct": false,
            "feedback": "La inconmensurabilidad se refiere a diferencias entre marcos que no comparten los mismos criterios de dato y evidencia."
          },
          {
            "id": "d",
            "text": "El razonamiento abductivo",
            "correct": false,
            "feedback": "La abducción corresponde a Peirce y a la formulación de hipótesis plausibles ante datos inesperados."
          }
        ]
      }
    ]
  },
  {
    "id": "s2",
    "title": "Sesión 2 · Problemas tempranos del conocer",
    "questions": [
      {
        "id": "s2-q1",
        "text": "En el diálogo del Menón, Sócrates guía a un esclavo sin educación formal para que 'descubra' el teorema de Pitágoras. Este experimento mental ilustra el debate entre:",
        "options": [
          {
            "id": "a",
            "text": "Inducción vs. deducción",
            "correct": false,
            "feedback": "Inducción y deducción son formas de razonamiento. El Menón se usa para discutir de dónde proviene el conocimiento."
          },
          {
            "id": "b",
            "text": "Empirismo vs. racionalismo/innatismo",
            "correct": true,
            "feedback": "Correcta. La pregunta es si el esclavo adquiere un conocimiento nuevo o si actualiza un conocimiento que ya poseía."
          },
          {
            "id": "c",
            "text": "Descubrimiento vs. demostración",
            "correct": false,
            "feedback": "Esta distinción se trabaja con Aristóteles. El Menón plantea principalmente la tensión entre aprendizaje desde la experiencia y conocimiento previo."
          },
          {
            "id": "d",
            "text": "Objetividad vs. subjetividad",
            "correct": false,
            "feedback": "Esa oposición no organiza el problema del Menón presentado en clase. La discusión está en el origen del conocimiento."
          }
        ]
      },
      {
        "id": "s2-q2",
        "text": "Según la distinción de Aristóteles, la lógica que usa inducción, observación e intuición (nous) para generar conocimiento nuevo se llama:",
        "options": [
          {
            "id": "a",
            "text": "Lógica de la demostración",
            "correct": false,
            "feedback": "La lógica de la demostración organiza y justifica conocimiento ya obtenido. No es la que genera el conocimiento nuevo."
          },
          {
            "id": "b",
            "text": "Lógica del descubrimiento",
            "correct": true,
            "feedback": "Correcta. La lógica del descubrimiento reúne observación, inducción e intuición para llegar a nuevos principios o conocimientos."
          },
          {
            "id": "c",
            "text": "Razonamiento abductivo",
            "correct": false,
            "feedback": "La abducción se trabaja con Peirce. Puede cumplir una función de descubrimiento, pero no es el nombre de la distinción aristotélica preguntada."
          },
          {
            "id": "d",
            "text": "Silogismo",
            "correct": false,
            "feedback": "El silogismo pertenece al plano de la demostración deductiva. No designa la lógica que genera conocimiento nuevo."
          }
        ]
      },
      {
        "id": "s2-q3",
        "text": "El razonamiento abductivo (Peirce) se caracteriza por:",
        "options": [
          {
            "id": "a",
            "text": "Generalizar una regla a partir de una serie de casos observados.",
            "correct": false,
            "feedback": "Eso describe una inferencia inductiva. La abducción parte de algo que requiere explicación y propone una hipótesis."
          },
          {
            "id": "b",
            "text": "Proponer la hipótesis explicativa más plausible ante datos inesperados, sin garantizar verdad.",
            "correct": true,
            "feedback": "Correcta. La abducción propone una explicación plausible, la compara con alternativas y permanece abierta a revisión."
          },
          {
            "id": "c",
            "text": "Derivar una conclusión necesaria a partir de premisas aceptadas.",
            "correct": false,
            "feedback": "Eso describe una inferencia deductiva. La conclusión abductiva no queda garantizada por las premisas."
          },
          {
            "id": "d",
            "text": "Controlar variables para aislar una relación entre factores.",
            "correct": false,
            "feedback": "Eso describe una operación propia del método experimental. No define la estructura inferencial de la abducción."
          }
        ]
      },
      {
        "id": "s2-q4",
        "text": "¿Qué significa que la psicología contemporánea presente 'inconmensurabilidad paradigmática'?",
        "options": [
          {
            "id": "a",
            "text": "Que las distintas tradiciones trabajan con escalas temporales que no pueden compararse.",
            "correct": false,
            "feedback": "Las escalas temporales pueden diferir, pero ese no es el núcleo de la inconmensurabilidad presentada en clase."
          },
          {
            "id": "b",
            "text": "Que las distintas tradiciones definen de forma mutuamente excluyente qué cuenta como dato o evidencia válida.",
            "correct": true,
            "feedback": "Correcta. El problema aparece cuando las tradiciones no comparten los mismos criterios sobre qué constituye un dato, una explicación o una evidencia válida."
          },
          {
            "id": "c",
            "text": "Que los distintos niveles explicativos pueden ordenarse siempre desde lo neuronal hasta lo cultural.",
            "correct": false,
            "feedback": "Eso describe una jerarquización de niveles. La inconmensurabilidad apunta a criterios diferentes para construir y evaluar conocimiento."
          },
          {
            "id": "d",
            "text": "Que las tradiciones usan métodos distintos, pero comparten los mismos criterios de explicación y evidencia.",
            "correct": false,
            "feedback": "Si compartieran los mismos criterios de explicación y evidencia, la dificultad de inconmensurabilidad sería mucho menor."
          }
        ]
      }
    ]
  },
  {
    "id": "s3",
    "title": "Sesión 3 · Inicio de la formalización científica",
    "questions": [
      {
        "id": "s3-q1",
        "text": "El telescopio de Galileo ejemplifica la mediación instrumental porque:",
        "options": [
          {
            "id": "a",
            "text": "Permite acceder a fenómenos fuera del alcance de los sentidos mediante un instrumento situado entre observador y realidad.",
            "correct": true,
            "feedback": "Correcta. El instrumento amplía lo observable y participa activamente en la relación entre quien conoce y aquello que se observa."
          },
          {
            "id": "b",
            "text": "Permite traducir cualquier fenómeno directamente a una ley matemática sin interpretación adicional.",
            "correct": false,
            "feedback": "La matematización es otro componente de la ciencia moderna. El telescopio ilustra primero la mediación instrumental de la observación."
          },
          {
            "id": "c",
            "text": "Permite aceptar una observación como verdadera por la autoridad de quien utiliza el instrumento.",
            "correct": false,
            "feedback": "La ruptura galileana cuestiona precisamente la primacía de la autoridad como criterio de verdad."
          },
          {
            "id": "d",
            "text": "Permite observar la naturaleza sin que exista ninguna mediación entre el observador y el fenómeno.",
            "correct": false,
            "feedback": "Es lo contrario de la idea central. El instrumento introduce una mediación y hace posible observar aquello que los sentidos no alcanzan por sí solos."
          }
        ]
      },
      {
        "id": "s3-q2",
        "text": "¿Qué distingue al método experimental de una observación pasiva?",
        "options": [
          {
            "id": "a",
            "text": "Crear condiciones controladas, manipular factores relevantes y reducir explicaciones alternativas.",
            "correct": true,
            "feedback": "Correcta. El experimento construye una situación controlada para interrogar activamente al fenómeno."
          },
          {
            "id": "b",
            "text": "Registrar repetidamente un fenómeno sin modificar las condiciones en que ocurre.",
            "correct": false,
            "feedback": "Eso sigue siendo observación. El rasgo distintivo del experimento es intervenir sobre las condiciones."
          },
          {
            "id": "c",
            "text": "Interponer un instrumento entre el observador y un fenómeno que no puede percibirse directamente.",
            "correct": false,
            "feedback": "Eso describe la mediación instrumental. Puede formar parte de un experimento, pero no define por sí sola el método experimental."
          },
          {
            "id": "d",
            "text": "Expresar los resultados mediante relaciones cuantitativas y fórmulas matemáticas.",
            "correct": false,
            "feedback": "Eso corresponde a la matematización. Un experimento se distingue por el control y la manipulación de condiciones."
          }
        ]
      },
      {
        "id": "s3-q3",
        "text": "En un test psicométrico, la respuesta observable y cuantificable de una persona funciona como:",
        "options": [
          {
            "id": "a",
            "text": "El constructo psicológico mismo, observado de manera directa.",
            "correct": false,
            "feedback": "El constructo no se observa directamente. Se infiere a partir de indicadores o respuestas observables."
          },
          {
            "id": "b",
            "text": "Un dato empírico desde el cual se infiere el estado de un constructo latente.",
            "correct": true,
            "feedback": "Correcta. La respuesta observable actúa como indicador y permite realizar una inferencia sobre un constructo que no es directamente visible."
          },
          {
            "id": "c",
            "text": "Una prueba de que el constructo posee necesariamente una causa biológica.",
            "correct": false,
            "feedback": "Una respuesta psicométrica no establece por sí sola la causa del constructo. Permite inferir su estado dentro del modelo de medición."
          },
          {
            "id": "d",
            "text": "Una descripción completa del fenómeno psicológico que se intenta evaluar.",
            "correct": false,
            "feedback": "La respuesta es un indicador parcial. El constructo se infiere a partir de uno o varios indicadores, no queda agotado por una sola respuesta."
          }
        ]
      },
      {
        "id": "s3-q4",
        "text": "La matematización de la naturaleza consolidada con Newton supone que:",
        "options": [
          {
            "id": "a",
            "text": "La realidad posee un orden cuantificable que puede expresarse mediante leyes matemáticas.",
            "correct": true,
            "feedback": "Correcta. La matematización supone regularidades que pueden formularse cuantitativamente y utilizarse para describir y predecir fenómenos."
          },
          {
            "id": "b",
            "text": "La naturaleza solo puede conocerse mediante situaciones experimentales artificiales.",
            "correct": false,
            "feedback": "El control experimental es otro pilar de la ciencia moderna. La pregunta se refiere específicamente a la formulación matemática de regularidades."
          },
          {
            "id": "c",
            "text": "Los instrumentos permiten observar fenómenos que los sentidos no alcanzan por sí solos.",
            "correct": false,
            "feedback": "Eso corresponde a la mediación instrumental. Newton se usa aquí para trabajar la idea de un orden cuantificable expresable en leyes."
          },
          {
            "id": "d",
            "text": "Las afirmaciones científicas son válidas cuando derivan de una autoridad reconocida.",
            "correct": false,
            "feedback": "Ese criterio corresponde al paradigma escolástico que la ciencia moderna busca desplazar."
          }
        ]
      }
    ]
  },
  {
    "id": "s4",
    "title": "Sesión 4 · ¿De dónde viene el conocimiento?",
    "questions": [
      {
        "id": "s4-q1",
        "text": "¿Cómo explica Locke el origen del contenido de la mente desde la idea de tabula rasa?",
        "options": [
          {
            "id": "a",
            "text": "El contenido mental proviene de la experiencia mediante sensación y reflexión.",
            "correct": true,
            "feedback": "Correcta. Locke rechaza las ideas innatas y sitúa el origen del contenido mental en la experiencia."
          },
          {
            "id": "b",
            "text": "El contenido mental procede de principios innatos que la experiencia solo activa.",
            "correct": false,
            "feedback": "Esta alternativa corresponde a una posición innatista. Locke defiende precisamente que no nacemos con ese contenido ya dado."
          },
          {
            "id": "c",
            "text": "El contenido mental se organiza mediante categorías a priori presentes antes de toda experiencia.",
            "correct": false,
            "feedback": "Esta formulación corresponde a Kant. Locke sostiene que el contenido de la mente proviene de la experiencia."
          },
          {
            "id": "d",
            "text": "El contenido mental depende principalmente del reforzamiento de respuestas observables.",
            "correct": false,
            "feedback": "Esta alternativa se acerca a la explicación conductista asociada a Skinner. No expresa la propuesta empirista de Locke."
          }
        ]
      },
      {
        "id": "s4-q2",
        "text": "Para Hume, si la inducción no puede justificarse lógicamente, ¿por qué seguimos confiando en que regularidades pasadas continuarán en el futuro?",
        "options": [
          {
            "id": "a",
            "text": "Porque la repetición genera hábito o costumbre y produce expectativas en la mente.",
            "correct": true,
            "feedback": "Correcta. La respuesta de Hume es psicológica. La repetición genera una expectativa habitual, no una demostración lógica."
          },
          {
            "id": "b",
            "text": "Porque toda regularidad observada demuestra una conexión causal necesaria.",
            "correct": false,
            "feedback": "Hume cuestiona precisamente que podamos observar o demostrar una conexión necesaria a partir de la repetición."
          },
          {
            "id": "c",
            "text": "Porque poseemos principios innatos que garantizan la validez de la inducción.",
            "correct": false,
            "feedback": "Esta respuesta introduce un fundamento innato. Hume explica nuestra confianza por hábito y costumbre."
          },
          {
            "id": "d",
            "text": "Porque una ley general puede deducirse necesariamente de una serie de observaciones.",
            "correct": false,
            "feedback": "Pasar de observaciones particulares a una ley general no es una deducción necesaria. Ese es justamente el problema de la inducción."
          }
        ]
      },
      {
        "id": "s4-q3",
        "text": "¿Cómo intenta Kant superar la oposición entre empirismo y racionalismo?",
        "options": [
          {
            "id": "a",
            "text": "La experiencia aporta el contenido y la mente aporta estructuras a priori que lo organizan.",
            "correct": true,
            "feedback": "Correcta. Kant sostiene que el conocimiento comienza con la experiencia, pero no todo procede de ella."
          },
          {
            "id": "b",
            "text": "Todo el conocimiento proviene de la experiencia y la mente no aporta ninguna estructura propia.",
            "correct": false,
            "feedback": "Esta alternativa lleva la posición hacia un empirismo fuerte. Kant atribuye a la mente formas y categorías a priori."
          },
          {
            "id": "c",
            "text": "Todo conocimiento verdadero está presente desde el nacimiento y la experiencia solo lo recuerda.",
            "correct": false,
            "feedback": "Esta alternativa representa una posición racionalista o innatista mucho más fuerte que la síntesis kantiana."
          },
          {
            "id": "d",
            "text": "El conocimiento surge del reforzamiento de asociaciones entre estímulos y respuestas.",
            "correct": false,
            "feedback": "Esta alternativa corresponde a una explicación conductista del aprendizaje. No es la síntesis entre experiencia y estructuras a priori propuesta por Kant."
          }
        ]
      },
      {
        "id": "s4-q4",
        "text": "¿Qué oposición representa correctamente el debate entre Chomsky y Skinner sobre la adquisición del lenguaje?",
        "options": [
          {
            "id": "a",
            "text": "Chomsky propone estructuras innatas y Skinner explica el lenguaje mediante aprendizaje y reforzamiento.",
            "correct": true,
            "feedback": "Correcta. Chomsky recurre a una arquitectura innata y Skinner a principios generales de aprendizaje y reforzamiento."
          },
          {
            "id": "b",
            "text": "Chomsky explica el lenguaje por reforzamiento y Skinner propone una Gramática Universal.",
            "correct": false,
            "feedback": "Las posiciones están invertidas. La Gramática Universal pertenece a Chomsky y el reforzamiento a Skinner."
          },
          {
            "id": "c",
            "text": "Chomsky defiende la tabula rasa y Skinner propone categorías a priori para organizar la experiencia.",
            "correct": false,
            "feedback": "La tabula rasa corresponde a Locke y las categorías a priori a Kant. Ninguna de las dos describe este debate sobre lenguaje."
          },
          {
            "id": "d",
            "text": "Chomsky explica el lenguaje por hábito inductivo y Skinner lo explica por duda metódica.",
            "correct": false,
            "feedback": "El hábito inductivo se trabaja con Hume y la duda metódica con Descartes. No corresponden a Chomsky ni a Skinner."
          }
        ]
      }
    ]
  }
] satisfies PracticeTest[];

export const TESTS_BY_ID = Object.fromEntries(
  TESTS.map((test) => [test.id, test])
) as Record<string, PracticeTest>;
