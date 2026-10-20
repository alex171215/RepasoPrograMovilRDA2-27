// ============================================================
// BANCO DE PREGUNTAS — RDA2 questionsRDA2Tema56
// Formato y Distribución Equilibrada: Prof. Juan Francisco Chafla
// ============================================================

const questionsRDA2Tema56 = [
  {
    "question": "En la introducción al desarrollo declarativo, ¿en qué consiste 'La Metáfora de la Silla' utilizada por el profesor para contrastar el paradigma imperativo con Jetpack Compose?",
    "options": [
      "El imperativo se asemeja a un carpintero ensamblando paso a paso las patas, tornillos y lijando la madera (cómo construir); mientras que el declarativo simplemente manifiesta el resultado final: 'Quiero estar sentado', dejando que el framework gestione la ejecución del estado.",
      "El imperativo describe los materiales de la silla; el declarativo calcula su precio de venta en la tienda.",
      "El imperativo utiliza sillas de plástico para simular emuladores; el declarativo utiliza sillas ergonómicas para programadores senior.",
      "El imperativo delega la construcción en corrutinas en segundo plano; el declarativo bloquea el hilo principal hasta terminar la silla."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es b. 'La Metáfora de la Silla' explica la diferencia radical de filosofías: el imperativo especifica minuciosamente la secuencia de pasos ('corta la madera, pon 4 tornillos, barniza'); el declarativo declara la intención final deseada ('Quiero estar sentado') y el framework se encarga de materializarla."
  },
  {
    "question": "En el paradigma tradicional de Android (XML + Java/Kotlin), ¿cuál es el problema arquitectónico de la 'Separación de Archivos y Sincronización Manual'?",
    "options": [
      "Que los archivos XML ocupan el doble de memoria RAM que los archivos de código fuente compilado.",
      "La UI se define en un archivo XML y la lógica en Java/Kotlin; el programador está forzado a buscar referencias con findViewById, mantener variables de estado duplicadas y llamar manualmente a setters (como setText() o setVisibility()), siendo altamente propenso a desincronizaciones.",
      "Que Android Studio no permite abrir archivos XML y Java en la misma ventana de trabajo.",
      "Que el compilador K2 prohíbe la interoperabilidad entre lenguajes declarativos y hojas de estilo XML."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El modelo tradicional separa rígidamente la vista (XML) de la lógica (Java), forzando al programador a mantener dos estados sincronizados a mano con findViewById() y setters continuos, lo que provoca código frágil y duplicación."
  },
  {
    "question": "En el desarrollo imperativo con XML, ¿qué afirmación del profesor resume el riesgo de desincronización manual cuando el programador olvida actualizar una vista?",
    "options": [
      "'Si olvidamos llamar a findViewById, el procesador se reinicia automáticamente'.",
      "'El compilador convierte automáticamente los archivos XML en funciones de Compose'.",
      "'Si olvidamos llamar a setText(), el dato cambia en la lógica pero la UI no se entera, mostrando información falsa o desactualizada al usuario'.",
      "'El sistema operativo cierra la aplicación con un error de OutOfMemoryError'."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es b. En el paradigma imperativo: 'Si olvidamos llamar a setText(), el dato cambia pero la UI no'. Al no existir un enlace reactivo automático, el estado interno se divorcia de la representación visual."
  },
  {
    "question": "¿En qué consiste el 'Efecto Cascada' descrito en el Tema 5 como causa principal de inconsistencias visuales y bugs en aplicaciones grandes?",
    "options": [
      "La descarga secuencial de imágenes desde servidores CDN remotos.",
      "La propagación de excepciones no controladas desde el kernel Linux hacia la capa de presentación.",
      "La animación fluida de transiciones entre fragments de Android.",
      "Múltiples controladores ➔ Actualizaciones Manuales dispersas ➔ Inconsistencia Visual por dispersión de la fuente de verdad."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es b. El Efecto Cascada se formula así: Múltiples controladores que intentan manipular la UI ➔ necesidad de actualizaciones manuales en decenas de callbacks ➔ inconsistencia visual inevitable debido a la pérdida de una fuente única de verdad."
  },
  {
    "question": "¿Cuál es la premisa fundamental que define a Jetpack Compose al establecer que 'La UI es una Función del Estado'?",
    "options": [
      "La interfaz visual no tiene vida propia ni estado interno desconectado; se describe declarativamente como una función pura que toma el estado actual como entrada y proyecta la UI correspondiente, recalculándose automáticamente ante cualquier cambio del estado.",
      "La interfaz gráfica se dibuja una sola vez al encender el teléfono y nunca más vuelve a cambiar.",
      "La interfaz visual requiere que el desarrollador invoque explícitamente invalidate() en cada ciclo del reloj.",
      "La UI se programa mediante scripts de shell que se comunican con el WindowManager de Android."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es b. En Compose la UI es una función matemática directa del estado: UI = f(Estado). Cuando el estado cambia, Compose reejecuta la función transformadora y redibuja la interfaz sin manipulación manual."
  },
  {
    "question": "¿Qué rol cumple la anotación @Composable en el ecosistema de Jetpack Compose?",
    "options": [
      "Es una directiva para que el recolector de basura no libere la memoria de la pantalla.",
      "Informa al compilador especializado de Compose que la función está destinada a emitir elementos visuales dinámicos en el árbol de composición, permitiéndole inyectar metadatos para rastrear estados y habilitar la recomposición inteligente.",
      "Es un decorador cosmético opcional que solo sirve para generar documentación KDoc.",
      "Convierte la función en un hilo de corrutina secundario para procesamiento en background."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La anotación @Composable transforma el tipo de la función. Le indica al compilador de Compose que acepte la inyección del contexto de composición y gestione el ciclo de vida reactivo del nodo visual."
  },
  {
    "question": "En el esquema de tres elementos sobre 'Cómo Compose mantiene el estado', ¿cuál es la tríada conceptual presentada en la slide 8 del Tema 5?",
    "options": [
      "INICIO (onCreate) ➔ PAUSA (onPause) ➔ FIN (onDestroy)",
      "VISTA (XML) ➔ CONTROLADOR (Java) ➔ MODELO (SQLite)",
      "RECUERDO (remember) ➔ OBSERVADOR (mutableStateOf) ➔ RESULTADO (Interfaz UI)",
      "ORIGEN (API) ➔ FILTRO (Lambda) ➔ DESTINO (Room)"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es a. La tríada fundamental es: 1. RECUERDO (remember: conserva el valor entre recomposiciones), 2. OBSERVADOR (mutableStateOf: notifica cambios al runtime) y 3. RESULTADO (Interfaz UI: se deriva automáticamente del estado sin setters manuales)."
  },
  {
    "question": "¿Cuál es la función específica de remember en una función Composable?",
    "options": [
      "Persistir datos en el disco local para que sobrevivan al reinicio del teléfono.",
      "Forzar al recolector de basura a liberar la memoria de las vistas no utilizadas.",
      "Enviar reportes analíticos a Firebase Crashlytics.",
      "Actuar como la memoria de corto plazo de la función Composable, conservando un valor a través de sucesivas recomposiciones para evitar que se reinicie a su estado por defecto en cada redibujado."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es b. remember es el mecanismo de retención en memoria durante la recomposición. Sin remember, cada vez que la función Composable se ejecuta de nuevo crearía la variable desde cero, perdiendo el valor acumulado."
  },
  {
    "question": "¿Cuál es la función de mutableStateOf() en Jetpack Compose y por qué se le asocia con el rol de 'OBSERVADOR'?",
    "options": [
      "Crea un objeto de estado mutable observable por el runtime de Compose; cuando su valor cambia (.value), notifica de inmediato a todas las funciones Composable que lo leyeron para que se recompongan automáticamente.",
      "Es un observador que imprime logs en la consola Logcat cada vez que la app entra en segundo plano.",
      "Observa el estado de la batería del dispositivo y desactiva las animaciones pesadas.",
      "Convierte una variable inmutable val en un puntero de memoria de lenguaje C."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es b. mutableStateOf() es el 'OBSERVADOR' de Compose: empaqueta el valor y rastrea quién lo lee; en el instante en que el valor cambia, programa la recomposición de los nodos dependientes."
  },
  {
    "question": "¿Qué representa la estructura interna denominada 'Árbol de Composición' en Jetpack Compose?",
    "options": [
      "Un árbol binario balanceado de almacenamiento de archivos en el disco flash del dispositivo.",
      "Una estructura jerárquica de nodos construida por Compose que refleja la relación de anidamiento de las funciones Composable (ej. Screen ➔ Column ➔ TopBar / Text / Icon).",
      "Un organigrama gráfico que muestra las clases heredadas de la Activity principal.",
      "El árbol de dependencias de Gradle configurado en el archivo build.gradle.kts."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. El Árbol de Composición es la representación jerárquica interna que Compose construye al ejecutar las funciones @Composable, donde cada nodo representa un elemento visual o contenedor y sus relaciones padre-hijo."
  },
  {
    "question": "Según la slide 9 del Tema 5, ¿cuáles son los dos elementos de metadata indispensables que almacena cada nodo del Árbol de Composición para hacer posible la Recomposición Inteligente?",
    "options": [
      "La dirección IP del cliente y la firma SHA-256 de la APK.",
      "El número de línea en el archivo de texto y el nombre del autor en Git.",
      "Los parámetros recibidos por la función y el estado específico que observa.",
      "La versión de Android Runtime y el porcentaje de batería consumida."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es b. Cada nodo del árbol retiene: 1. Los parámetros recibidos, y 2. El estado que observa. Con estos metadatos, Compose puede comparar si las entradas cambiaron y decidir si ejecuta o salta (skips) ese nodo."
  },
  {
    "question": "En el Tema 5, ¿cuál es 'La Analogía de Excel' utilizada para explicar el comportamiento de la Recomposición Inteligente en Compose?",
    "options": [
      "'Compose formatea los datos en celdas y columnas como una hoja de cálculo imprimible'.",
      "'Las funciones Composable se limitan a operaciones aritméticas de suma y multiplicación'.",
      "'Compose guarda los datos en formato CSV para que puedan abrirse en cualquier suite ofimática'.",
      "'Si cambias el valor de una celda, Excel no recalcula todo el libro; solo se recalculan las fórmulas que dependen directamente de esa celda específica'."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es b. 'La Analogía de Excel' es clara: cambiar un estado no destruye la pantalla entera, igual que modificar una celda en Excel solo recalcula las fórmulas que leen dicha celda, dejando intacto el resto."
  },
  {
    "question": "En el ejemplo WeatherDashboard(temp: Int) del Tema 5, ¿por qué la línea Text(\"Ciudad: Quito\") se cataloga como 'ESTÁTICO' mientras que Text(\"Temperatura actual: $temp\") es 'DINÁMICO'?",
    "options": [
      "Porque Text(\"Ciudad: Quito\") no recibe ni lee el parámetro 'temp', por lo que Compose la omite (skip) durante recomposiciones; mientras que la segunda sí depende de 'temp' y se redibuja ante cada cambio de temperatura.",
      "Porque 'Ciudad: Quito' está escrita en español y la temperatura utiliza caracteres alfanuméricos.",
      "Porque 'Ciudad: Quito' está protegida por una clave de cifrado simétrico.",
      "Porque las ciudades no pueden cambiar de nombre en la base de datos Room."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es b. La Recomposición Inteligente discrimina nodos estáticos y dinámicos: el nodo de la ciudad no depende del parámetro 'temp' (omite su ejecución), mientras que el de la temperatura lee el parámetro mutado y se recompone."
  },
  {
    "question": "En el ejemplo WeatherDashboard, ¿qué mecanismo ilustra el bloque condicional 'if (temp > 30) { AlertIcon() }'?",
    "options": [
      "El bloqueo obligatorio del compilador para evitar temperaturas peligrosas en el hardware.",
      "La generación de UI Dinámica y Condicional, donde nodos enteros se agregan o retiran del árbol de composición en tiempo de ejecución en función del estado.",
      "Una llamada al sistema operativo para encender el ventilador del procesador.",
      "Una falla de concurrencia al no utilizar un bloque synchronized."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es a. Las estructuras condicionales (if/when) dentro de Compose generan UI Dinámica: el nodo AlertIcon() se inserta en el árbol cuando temp > 30 y se remueve automáticamente cuando la condición deja de cumplirse."
  },
  {
    "question": "¿Qué es conceptualmente un 'DSL' (Domain-Specific Language) según la evolución lingüística explicada en el Tema 5?",
    "options": [
      "Un protocolo de telecomunicaciones para conectar dispositivos por cable telefónico.",
      "Un nuevo lenguaje binario que reemplaza por completo a Kotlin y Swift en el kernel.",
      "Un 'lenguaje dentro de un lenguaje', diseñado para una tarea concreta y especializada; donde no se programan algoritmos paso a paso, sino que se describe directamente qué se quiere ver.",
      "Un compilador de bases de datos relacionales para teléfonos de gama baja."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es b. Un DSL (Lenguaje Específico de Dominio) es un dialecto o lenguaje embebido diseñado para resolver un problema puntual: en lugar de lógica algorítmica imperativa, describe el resultado visual de forma concisa y declarativa."
  },
  {
    "question": "¿Por qué el profesor afirma que con Jetpack Compose y SwiftUI 'el código se convierte en la documentación visual de la interfaz'?",
    "options": [
      "Porque Android Studio toma capturas de pantalla automáticas y las sube a GitHub.",
      "Porque el código se exporta directamente como un archivo de diseño en formato Figma.",
      "Porque es obligatorio escribir comentarios de tipo KDoc de más de 50 palabras por función.",
      "Porque al eliminar el ruido ceremonial y describir la estructura jerárquica con claridad declarativa, leer el código equivale a visualizar directamente la disposición y elementos de la pantalla."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es b. Al usar un DSL declarativo, la jerarquía de funciones (Column { TopBar(); Text(); Button() }) refleja fielmente la composición espacial de la pantalla, haciendo que el código sea auto-documentado visualmente."
  },
  {
    "question": "En la tabla comparativa de convergencia entre Jetpack Compose y SwiftUI, ¿cuáles son los equivalentes directos de los contenedores Vertical y Horizontal?",
    "options": [
      "Compose: Column / Row ⟷ SwiftUI: VStack / HStack",
      "Compose: LinearLayout / RelativeLayout ⟷ SwiftUI: UIView / UIStackView",
      "Compose: VerticalGrid / HorizontalGrid ⟷ SwiftUI: List / ScrollView",
      "Compose: Box / Scaffold ⟷ SwiftUI: ZStack / ContentView"
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es a. La convergencia arquitectónica muestra un paralelismo exacto: el contenedor vertical es Column en Compose y VStack en SwiftUI; el horizontal es Row en Compose y HStack en SwiftUI."
  },
  {
    "question": "En la comparativa de estilo y apariencia entre Compose y SwiftUI, ¿a qué elemento de SwiftUI corresponde el Modifier de Jetpack Compose?",
    "options": [
      "A las variables @Binding de los protocolos.",
      "A los métodos encadenados de vista como .padding(), .background() y .frame(), que actúan como 'adjetivos' que califican y transforman la apariencia del componente.",
      "A la función body de la estructura View.",
      "Al protocolo ObservableObject de Combine."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Los modificadores en ambos frameworks operan como 'adjetivos' que califican el componente: en Compose se encadenan mediante Modifier.padding().background(), y en SwiftUI mediante .padding().background()."
  },
  {
    "question": "En la gestión de estado local, ¿cuál es el análogo directo en SwiftUI para el mecanismo remember de Jetpack Compose?",
    "options": [
      "El contenedor NavigationView",
      "El modificador .onAppear()",
      "El decorador @State",
      "El método DispatchQueue.main"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es a. remember en Compose retiene el estado local en el árbol de composición; en SwiftUI, el property wrapper @State cumple idéntica función reteniendo el valor y disparando el redibujado de la vista ante mutaciones."
  },
  {
    "question": "En la actividad práctica de refuerzo del Inspector de Composición, un estudiante reporta que su lista de 1000 elementos sufre una ralentización extrema (lag) durante el scroll. ¿Cuál es la causa técnica de este problema?",
    "options": [
      "El teléfono se quedó sin conexión a internet.",
      "Haber compilado la aplicación utilizando el modo Release de Gradle.",
      "El uso de Modifier.fillMaxSize() en la raíz de la pantalla.",
      "El uso erróneo de Column con forEach, lo que obliga al runtime a componer, renderizar y mantener en memoria los 1000 elementos simultáneamente, agotando el presupuesto de fotogramas del Main Thread."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es b. Column evalúa todo su contenido de golpe: con 1000 elementos crea 1000 nodos en memoria de forma simultánea, colapsando el rendimiento. Column nunca debe usarse para listas dinámicas o grandes."
  },
  {
    "question": "Ante el problema de lentitud al renderizar 1000 elementos en una Column, ¿cuál es la solución arquitectónica correcta en Jetpack Compose y cómo funciona?",
    "options": [
      "Reemplazar Column por LazyColumn, el equivalente declarativo de RecyclerView, que solo compone y mantiene en memoria los elementos que son visibles actualmente en pantalla (reciclaje virtual).",
      "Agregar un hilo Thread.sleep(10) dentro del forEach para darle descanso a la CPU.",
      "Dividir los 1000 elementos en diez Activities separadas.",
      "Convertir todos los textos de la lista en imágenes vectoriales SVG."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es b. LazyColumn implementa carga bajo demanda y virtualización (análogo moderno de RecyclerView): solo compone los elementos que caben en la ventana visible, reciclando recursos durante el desplazamiento."
  },
  {
    "question": "En la actividad práctica con Sealed Classes del Tema 5, ¿cuál es el patrón arquitectónico recomendado para modelar el estado de una pantalla reactiva?",
    "options": [
      "Variables booleanas independientes como isLoading, isSuccess e isError dentro de la Activity.",
      "El patrón UiState modelado mediante una sealed class (o sealed interface) con variantes estrictas: Loading, Success y Error, garantizando estados mutuamente excluyentes.",
      "Un archivo de configuración JSON guardado en la carpeta de recursos assets.",
      "Una lista de enteros en la que el código 0 es éxito y 1 es error."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Modelar UiState con sealed class (Loading, Success, Error) garantiza que la pantalla solo pueda estar en un estado válido a la vez, eliminando incoherencias (ej. mostrar el spinner de carga y el error al mismo tiempo)."
  },
  {
    "question": "¿Cómo se complementa el patrón UiState con el bloque when(uiState) en Jetpack Compose según las directrices de robustez del docente?",
    "options": [
      "Permite ignorar los errores de red sin notificar al usuario.",
      "Convierte la interfaz en un servicio que se ejecuta con la pantalla apagada.",
      "Aprovecha 'El Escudo del Compilador' para exigir exhaustividad total en tiempo de compilación: cada variante (Loading, Success, Error) renderiza su UI correspondiente sin requerir cláusula else, evitando estados no gestionados.",
      "Genera automáticamente la base de datos Room a partir de las ramas del when."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es b. Al evaluar un UiState de clase sellada con when, el compilador verifica matemáticamente que todos los estados posibles estén cubiertos en la UI, alertando en compilación si el desarrollador omitió alguna condición."
  },
  {
    "question": "¿Por qué el paradigma declarativo de Compose elimina por diseño la 'desincronización entre el estado lógico y lo que el usuario visualiza'?",
    "options": [
      "Porque los teléfonos modernos tienen procesadores de ocho núcleos.",
      "Porque el código se almacena en el servidor y no en la memoria RAM del teléfono.",
      "Porque Compose bloquea la pantalla cada vez que el usuario intenta realizar un cambio de configuración.",
      "Porque al no existir setters manuales (como setText o setVisibility), la UI no tiene un estado paralelo propio: es una proyección directa y reactiva del estado, derivándose automáticamente cada vez que éste muta."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es b. En Compose desaparece el intermediario manual: la UI no se 'actualiza con órdenes', sino que 'reacciona al estado'. Si el estado cambia, la UI se recompone reflejando exactamente el nuevo valor."
  },
  {
    "question": "En Jetpack Compose, ¿qué se entiende por 'Recomposición Inteligente' (Smart Recomposition)?",
    "options": [
      "La capacidad del runtime de Compose de omitir (skip) la ejecución de funciones Composable cuyos parámetros y estados observados no han cambiado, redibujando estrictamente los nodos que sufrieron modificaciones.",
      "El proceso mediante el cual Android Studio reescribe automáticamente el código mal optimizado del estudiante.",
      "La descarga de layouts pre-renderizados desde Google Play Services.",
      "La recolección de basura forzada que ejecuta ART antes de cada animación."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es b. Smart Recomposition optimiza el rendimiento evitando el redibujado ciego: si una función Composable recibe los mismos argumentos y su estado observado no cambió, Compose la salta sin consumir ciclos de CPU."
  },
  {
    "question": "En el desarrollo de interfaces con Compose, ¿cuál es la diferencia conceptual entre un Composable 'Stateful' y uno 'Stateless'?",
    "options": [
      "Stateful utiliza internet; Stateless funciona en modo avión.",
      "Stateful posee y gestiona su propio estado interno (ej. con remember); Stateless no retiene estado interno, recibe sus datos por parámetros y emite eventos hacia arriba mediante lambdas (State Hoisting).",
      "Stateful es compatible con Android 16; Stateless solo funciona en Android 5.",
      "Stateful requiere clases abstractas; Stateless solo admite interfaces Java."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Stateful maneja su propio estado interno; Stateless recibe el valor desde afuera y reporta cambios vía callbacks. Los componentes Stateless son altamente reutilizables, modulares y fáciles de testear."
  },
  {
    "question": "¿Cuál es la 'Regla de Oro' del State Hoisting (elevación de estado) en Jetpack Compose?",
    "options": [
      "Todo el estado debe guardarse obligatoriamente en el archivo strings.xml.",
      "El estado nunca debe salir de la función que lo creó originalmente.",
      "El estado debe elevarse al ancestro común más cercano que necesite leerlo o modificarlo, fluyendo hacia abajo como datos y hacia arriba como eventos (UDF).",
      "Cada botón debe alojar el estado de toda la aplicación en una variable global."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es a. State Hoisting sigue el patrón UDF (Unidirectional Data Flow): el estado se eleva al ancestro común mínimo; los datos fluyen hacia abajo (state down) y las intenciones de cambio suben mediante eventos (events up)."
  },
  {
    "question": "Al trabajar con Modifiers en Jetpack Compose, ¿por qué el orden de encadenamiento altera de forma determinante el resultado visual?",
    "options": [
      "Porque el compilador de Compose ejecuta los modificadores en orden aleatorio si no se usa la palabra reservada inline.",
      "Porque los modificadores modifican el código XML subyacente en tiempo de ejecución.",
      "Porque Skia descarta cualquier modificador declarado después de una propiedad de tamaño.",
      "Porque los modificadores se aplican de forma secuencial envolviendo al elemento; por ejemplo, aplicar .padding() antes de .background() coloca el color dentro del margen, mientras que aplicar .background() antes de .padding() colorea el área total y aplica el relleno internamente."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es b. Los modificadores en Compose funcionan por envoltura sucesiva (decoradores). El orden importa: Modifier.background().padding() dibuja el fondo y luego separa el contenido; el orden inverso deja el padding fuera del fondo."
  },
  {
    "question": "¿Qué riesgo severo ocurre si un programador muta un estado directamente en el cuerpo principal de una función @Composable (por ejemplo: count++)?",
    "options": [
      "Se produce un bucle de recomposición infinito (Recomposition Loop): la mutación del estado dentro del cuerpo dispara una recomposición, la cual vuelve a ejecutar la función, provocando una nueva mutación inmediata que congela la aplicación.",
      "El teléfono libera toda la memoria caché del navegador.",
      "El compilador K2 genera un error de sintaxis y no compila el archivo.",
      "La función se convierte automáticamente en una corrutina en segundo plano."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es b. Las funciones Composable deben ser libres de efectos secundarios (side-effect free). Mutar un estado en el cuerpo de la función provoca que Compose se reejecute eternamente, provocando un congelamiento (freeze) de la app."
  },
  {
    "question": "En el contexto de la convergencia tecnológica entre Compose y SwiftUI, ¿por qué el Tema 5 sostiene que dominar Compose unifica las habilidades del desarrollador en la industria móvil?",
    "options": [
      "Porque el código de Compose se puede copiar y pegar directamente en Xcode sin cambiar ninguna letra.",
      "Porque ambos frameworks comparten la misma filosofía declarativa, conceptos de estado reactivo, estructuras de contenedores (Column/Row vs VStack/HStack) y composición funcional, permitiendo que la transición conceptual entre plataformas sea prácticamente directa.",
      "Porque Apple compró los derechos de Jetpack Compose para integrarlo en iOS 19.",
      "Porque ambos lenguajes fueron creados por la misma fundación de código abierto en 2026."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. La convergencia hacia DSLs declarativos unifica la industria: entender la UI como función del estado, UDF, árboles reactivos y modificadores en Compose prepara al desarrollador para comprender SwiftUI de forma inmediata."
  },
  {
    "question": "En Compose, ¿cuál es la diferencia fundamental entre utilizar un contenedor Row y un contenedor Column?",
    "options": [
      "Row es un componente imperativo de XML; Column es exclusivo de Compose.",
      "Row solo admite textos; Column solo admite botones e imágenes.",
      "Row organiza los elementos horizontalmente (uno al lado del otro); Column los organiza verticalmente (uno debajo del otro).",
      "Row requiere permisos de administrador; Column no los requiere."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es a. Row organiza elementos visuales de forma secuencial horizontal (eje X), análogo a HStack en SwiftUI; Column los organiza verticalmente (eje Y), análogo a VStack."
  },
  {
    "question": "¿Qué función cumple el contenedor Box en Jetpack Compose y a qué elemento corresponde en SwiftUI?",
    "options": [
      "Es una herramienta para empaquetar archivos ZIP de recursos.",
      "Es un contenedor para enviar correos electrónicos; corresponde a MailBox en iOS.",
      "Es una caja de texto editable; corresponde a TextField en SwiftUI.",
      "Es un contenedor que apila elementos uno encima del otro en el eje Z (profundidad); corresponde a ZStack en SwiftUI."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es a. Box permite superponer elementos en el eje Z (uno encima de otro con alineaciones relativas), siendo el análogo directo de ZStack en SwiftUI."
  },
  {
    "question": "¿Cuál es la conclusión del Tema 5 respecto a cómo la Recomposición Inteligente mejora la claridad del código además del rendimiento?",
    "options": [
      "Al eliminar los setters manuales y centralizar la lógica de actualización exclusivamente en el estado, el código describe limpiamente la intención del diseño, reduciendo la carga cognitiva y facilitando el mantenimiento.",
      "Permite eliminar todas las pruebas unitarias del repositorio.",
      "Genera esquemas de bases de datos automáticos en la nube de Google Cloud.",
      "Obliga al desarrollador a utilizar una única función para toda la aplicación."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es b. La Recomposición Inteligente no solo ahorra CPU: al liberar al programador de gestionar setters manuales, el código pasa a ser un reflejo claro y conciso de la lógica de negocio, reduciendo bugs y deuda técnica."
  },
  {
    "question": "Al procesar una lista de elementos en LazyColumn, ¿por qué es una buena práctica crítica proveer una clave única mediante el parámetro 'key' en items()?",
    "options": [
      "Para encriptar los datos del usuario en la memoria RAM.",
      "Para que el runtime de Compose identifique la identidad estable de cada elemento ante inserciones, eliminaciones o reordenamientos, evitando recomposiciones innecesarias y preservando animaciones y estados de scroll fluidos.",
      "Porque sin el parámetro key el sistema operativo prohíbe el uso de internet.",
      "Para que el Garbage Collector elimine los elementos duplicados de la lista."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. Proveer una key estable (ej. ID único del producto) permite a LazyColumn rastrear qué elemento se movió o cambió de lugar sin tener que recomponer la lista completa, optimizando drásticamente el scroll."
  },
  {
    "question": "En el ejemplo de código de la slide 7 del Tema 5: 'var count by remember { mutableStateOf(0) }', ¿qué rol cumple la palabra reservada 'by' de Kotlin?",
    "options": [
      "Multiplica el valor de la variable por el factor de densidad de pantalla.",
      "Convierte la variable en un hilo secundario asíncrono.",
      "Aplica el patrón Property Delegation (delegación de propiedades), permitiendo leer y escribir en la variable 'count' directamente como un entero (Int) sin tener que acceder manualmente a count.value.",
      "Obliga a que la variable sea serializada en disco mediante SharedPreferences."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es b. El operador 'by' utiliza la delegación de propiedades de Kotlin (getValue / setValue) para que tratemos a count como un Int normal, mientras Compose intercepta transparentemente las lecturas y escrituras."
  },
  {
    "question": "¿Qué afirmación describe correctamente la relación entre el Paradigma Imperativo y el Manejo de la Fuente de la Verdad?",
    "options": [
      "En el imperativo existe una única fuente de la verdad perfectamente sincronizada por el kernel.",
      "El imperativo delega la verdad visual en el servidor web remoto.",
      "El imperativo no utiliza variables de memoria RAM.",
      "En el imperativo la fuente de la verdad se fragmenta: existe el dato en las variables del controlador y existe el dato reflejado en la propiedad visual del View en pantalla; mantener ambos en sincronía depende de la disciplina del programador."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es b. En el modelo imperativo se crea duplicidad: la variable en memoria y el texto dentro del TextView son dos entidades separadas. Si el programador actualiza la variable pero olvida el setText(), la app queda en un estado inconsistente."
  },
  {
    "question": "¿Por qué Jetpack Compose NO utiliza el concepto tradicional de 'herencia de clases de View' (como TextView heredando de View)?",
    "options": [
      "Porque Compose adopta el principio de 'Composición sobre Herencia' utilizando funciones simples anotadas con @Composable que se ensamblan y configuran modularmente mediante Modifiers, evitando jerarquías de clases pesadas y rígidas.",
      "Porque Kotlin no soporta herencia orientada a objetos.",
      "Porque los dispositivos Android no tienen suficiente memoria para cargar clases Java.",
      "Porque la máquina virtual ART prohibió el polimorfismo a partir de API 30."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es b. Compose reemplaza la compleja y pesada jerarquía de herencia de View (donde cada elemento arrastraba miles de líneas de código base) por funciones puras que se componen entre sí, aplicando 'Composition over Inheritance'."
  },
  {
    "question": "En el contexto de la Recomposición Inteligente, ¿qué significa que una función Composable sea 'omitida' (Skipped)?",
    "options": [
      "Que el compilador detectó un error y decidió saltarse esa pantalla para no cerrar la app.",
      "Que Compose determinó que ninguno de los argumentos de entrada ni los estados observados por esa función cambiaron de valor, por lo que reutiliza el resultado del dibujo anterior sin ejecutar el cuerpo de la función.",
      "Que la función tarda más de un segundo en responder y es cancelada por el sistema.",
      "Que el usuario apagó la pantalla del teléfono."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. 'Skipping' es el núcleo del alto rendimiento en Compose: si los parámetros de un Composable son iguales a los de la recomposición previa, Compose reutiliza la salida gráfica anterior y omite la ejecución del código."
  },
  {
    "question": "En el flujo de datos unidireccional (UDF) de Compose, ¿cómo se propagan las acciones del usuario (como pulsar un botón o escribir en un campo)?",
    "options": [
      "Modificando directamente el valor de la base de datos Room mediante punteros.",
      "Enviando mensajes de broadcast globales a todo el sistema operativo.",
      "Emitiendo eventos hacia arriba mediante lambdas (callbacks como onValueChange o onClick) hacia el nivel superior donde reside el estado.",
      "Reiniciando la Activity con un Intent explícito."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es b. En UDF: los datos descienden por los parámetros (State flows down), y los eventos suben a través de lambdas de retorno (Events flow up), manteniendo un flujo predecible y unidireccional."
  },
  {
    "question": "Si una pantalla de Compose contiene un formulario con 5 campos de texto, ¿por qué es recomendable que el formulario sea Stateless y delegue su estado a un ViewModel?",
    "options": [
      "Porque de lo contrario el formulario no puede conectarse a internet.",
      "Porque la tienda Google Play Store rechaza aplicaciones con funciones Stateful.",
      "Porque los formularios con estado propio consumen el doble de batería.",
      "Porque al ser Stateless, el formulario se puede previsualizar fácilmente en el IDE (@Preview), se puede reutilizar en diferentes pantallas y se puede testear con pruebas unitarias sin levantar el framework de Android."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es b. Un Composable Stateless es puramente funcional: al no depender de instancias locales de remember, es trivial de probar, se previsualiza instantáneamente con datos falsos en Android Studio y se reutiliza libremente."
  },
  {
    "question": "En la tabla comparativa de convergencia del Tema 5, ¿qué concepto de Compose y SwiftUI ilustra que ambos frameworks operan como 'adjetivos' que califican a los componentes?",
    "options": [
      "Los modificadores (Modifier en Compose y los métodos encadenados como .padding() en SwiftUI).",
      "Las funciones suspendidas de Kotlin.",
      "Los archivos de configuración de manifiesto.",
      "Los hilos del recolector de basura."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es a. La slide 14 señala explícitamente: 'Los modificadores funcionan como adjetivos que definen la apariencia de la interfaz'. El componente es el sustantivo (Text), y el modificador es el adjetivo (.padding().background())."
  },
  {
    "question": "¿Cuál es la consecuencia de no utilizar remember al declarar una variable 'var x = mutableStateOf(0)' dentro de una función Composable?",
    "options": [
      "El compilador K2 arroja una excepción fatal al compilar el proyecto.",
      "En cada recomposición de la función, la variable se volverá a crear desde cero con el valor inicial 0, perdiendo cualquier incremento o mutación previa que el usuario haya realizado.",
      "La pantalla se vuelve monocromática en blanco y negro.",
      "El teléfono bloquea la entrada táctil del usuario."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es b. mutableStateOf notifica mutaciones, pero no retiene la instancia. Si se omite remember, al recomponer la función se ejecuta de nuevo desde la primera línea, reseteando la variable a 0."
  },
  {
    "question": "¿Por qué Jetpack Compose es calificado en el Tema 5 como un 'cambio estructural' en el desarrollo móvil contemporáneo?",
    "options": [
      "Porque obliga a los desarrolladores a cambiar de computadoras y sistemas operativos.",
      "Porque elimina el uso de Kotlin en favor de código ensamblador.",
      "Porque sustituye el modelo imperativo de manipulación manual de vistas por un paradigma declarativo, reactivo y componible, eliminando desincronizaciones de UI y unificando la filosofía de desarrollo con SwiftUI.",
      "Porque hace que las aplicaciones móviles funcionen exclusivamente en servidores en la nube."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es b. Compose representa un cambio de era: abandona el modelo imperativo heredado de los años 90 (DOM/XML/Views) para adoptar la computación reactiva declarativa moderna, marcando el estándar definitivo en la industria."
  },
  {
    "question": "En la Actividad de Refuerzo sobre Sealed Classes, ¿por qué el uso de UiState con variantes de Loading, Success y Error es superior a tener múltiples variables booleanas (ej. val isLoading = false, val isError = false)?",
    "options": [
      "Porque las variables booleanas ocupan más espacio en disco que las clases selladas.",
      "Porque las clases selladas permiten que la aplicación funcione sin conexión de red.",
      "Porque los booleanos no son compatibles con el recolector de basura de Android.",
      "Porque múltiples booleanos pueden combinarse en estados imposibles o contradictorios (ej. isLoading = true Y isError = true simultáneamente); mientras que la sealed class modela estados mutuamente excluyentes donde solo una variante puede existir en un instante dado."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es b. Los booleanos independientes dan lugar a estados inválidos (Loading y Error activos a la vez). Sealed class garantiza exclusión mutua: la UI está en Loading, o en Success, o en Error, jamás en una mezcla incoherente."
  },
  {
    "question": "¿Qué rol juega la Recomposición Inteligente en el mantenimiento de una tasa de refresco constante de 60 a 120 fotogramas por segundo (fps) en la pantalla del dispositivo?",
    "options": [
      "Al calcular el diff de cambios y redibujar únicamente los píxeles y nodos que realmente mutaron, minimiza el tiempo de procesamiento por cuadro manteniéndolo por debajo de 16 milisegundos, evitando caídas de frames (jank).",
      "Aumenta la frecuencia de reloj del procesador al máximo nivel posible de forma permanente.",
      "Reduce la resolución de la pantalla a la mitad mientras el usuario desplaza el dedo.",
      "Desactiva las notificaciones del sistema para evitar interrupciones visuales."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es b. Para sostener 60fps cada cuadro debe procesarse en menos de 16ms. Smart Recomposition logra esta meta omitiendo nodos estáticos y redibujando solo lo mínimo indispensable."
  }
];

if (typeof window !== 'undefined') {
    window.questionsRDA2Tema56 = questionsRDA2Tema56;
}
