// ============================================================
// BANCO DE PREGUNTAS — RDA2 questionsRDA2Tema56
// Formato y Distribución Equilibrada: Prof. Juan Francisco Chafla
// Adaptado rigurosamente al estilo de evaluación del docente
// ============================================================

const questionsRDA2Tema56 = [
  {
    "question": "Según la metáfora de la silla explicada en el cambio de paradigma de la interfaz móvil, ¿cómo se describe el enfoque declarativo (Jetpack Compose)?",
    "options": [
      "Describe la secuencia exacta de pasos, como \"Camina 5 pasos, gira a la derecha y siéntate\".",
      "Delega al programador la actualización manual de cada componente de la interfaz mediante comandos como setText().",
      "Se describe únicamente el resultado final deseado, como \"Quiero estar sentado\", y el sistema gestiona la ejecución.",
      "Requiere el uso exclusivo de código XML para sincronizar la interfaz con la lógica de negocio."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Se describe únicamente el resultado final deseado, como \"Quiero estar sentado\", y el sistema gestiona la ejecución."
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
    "feedback": "La respuesta correcta es: La UI se define en un archivo XML y la lógica en Java/Kotlin; el programador está forzado a buscar referencias con findViewById, mantener variables de estado duplicadas y llamar manualmente a setters (como setText() o setVisibility()), siendo altamente propenso a desincronizaciones. El modelo tradicional separa rígidamente la vista (XML) de la lógica (Java), forzando al programador a mantener dos estados sincronizados a mano con findViewById() y setters continuos, lo que provoca código frágil y duplicación."
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
    "feedback": "La respuesta correcta es: 'Si olvidamos llamar a setText(), el dato cambia en la lógica pero la UI no se entera, mostrando información falsa o desactualizada al usuario'. En el paradigma imperativo: 'Si olvidamos llamar a setText(), el dato cambia pero la UI no'. Al no existir un enlace reactivo automático, el estado interno se divorcia de la representación visual."
  },
  {
    "question": "En el desarrollo de interfaces móviles, ¿en qué consiste el \"Efecto Cascada\" como causa principal de inconsistencias visuales y bugs de sincronización?",
    "options": [
      "La descarga secuencial de imágenes desde servidores CDN remotos.",
      "La propagación de excepciones no controladas desde el kernel Linux hacia la capa de presentación.",
      "La animación fluida de transiciones entre fragments de Android.",
      "Múltiples controladores ➔ Actualizaciones Manuales dispersas ➔ Inconsistencia Visual por dispersión de la fuente de verdad."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Múltiples controladores ➔ Actualizaciones Manuales dispersas ➔ Inconsistencia Visual por dispersión de la fuente de verdad. El Efecto Cascada se formula así: Múltiples controladores que intentan manipular la UI ➔ necesidad de actualizaciones manuales en decenas de callbacks ➔ inconsistencia visual inevitable debido a la pérdida de una fuente única de verdad."
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
    "feedback": "La respuesta correcta es: La interfaz visual no tiene vida propia ni estado interno desconectado; se describe declarativamente como una función pura que toma el estado actual como entrada y proyecta la UI correspondiente, recalculándose automáticamente ante cualquier cambio del estado. En Compose la UI es una función matemática directa del estado: UI = f(Estado). Cuando el estado cambia, Compose reejecuta la función transformadora y redibuja la interfaz sin manipulación manual."
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
    "feedback": "La respuesta correcta es: Informa al compilador especializado de Compose que la función está destinada a emitir elementos visuales dinámicos en el árbol de composición, permitiéndole inyectar metadatos para rastrear estados y habilitar la recomposición inteligente. La anotación @Composable transforma el tipo de la función. Le indica al compilador de Compose que acepte la inyección del contexto de composición y gestione el ciclo de vida reactivo del nodo visual."
  },
  {
    "question": "En el modelo conceptual de Jetpack Compose para la gestión del estado reactivo, ¿cuál es la tríada fundamental que articula la interfaz?",
    "options": [
      "INICIO (onCreate) ➔ PAUSA (onPause) ➔ FIN (onDestroy)",
      "VISTA (XML) ➔ CONTROLADOR (Java) ➔ MODELO (SQLite)",
      "RECUERDO (remember) ➔ OBSERVADOR (mutableStateOf) ➔ RESULTADO (Interfaz UI)",
      "ORIGEN (API) ➔ FILTRO (Lambda) ➔ DESTINO (Room)"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: RECUERDO (remember) ➔ OBSERVADOR (mutableStateOf) ➔ RESULTADO (Interfaz UI). La tríada fundamental es: 1. RECUERDO (remember: conserva el valor entre recomposiciones), 2. OBSERVADOR (mutableStateOf: notifica cambios al runtime) y 3. RESULTADO (Interfaz UI: se deriva automáticamente del estado sin setters manuales)."
  },
  {
    "question": "En el manejo del estado con Jetpack Compose, ¿cuál es el propósito fundamental de la función \"remember\"?",
    "options": [
      "Actuar como un sensor o notificador que avisa a Compose cuándo debe redibujar toda la interfaz desde cero.",
      "Convertir un archivo de vistas XML tradicional en código Kotlin de forma automática durante la compilación.",
      "Crear un bucle forEach optimizado para recorrer listas y bases de datos locales.",
      "Conservar el valor de una variable (como una nota adhesiva) durante las recomposiciones de la interfaz para que no se reinicie a su valor inicial."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Conservar el valor de una variable (como una nota adhesiva) durante las recomposiciones de la interfaz para que no se reinicie a su valor inicial."
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
    "feedback": "La respuesta correcta es: Crea un objeto de estado mutable observable por el runtime de Compose; cuando su valor cambia (.value), notifica de inmediato a todas las funciones Composable que lo leyeron para que se recompongan automáticamente. mutableStateOf() es el 'OBSERVADOR' de Compose: empaqueta el valor y rastrea quién lo lee; en el instante en que el valor cambia, programa la recomposición de los nodos dependientes."
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
    "feedback": "La respuesta correcta es: Una estructura jerárquica de nodos construida por Compose que refleja la relación de anidamiento de las funciones Composable (ej. Screen ➔ Column ➔ TopBar / Text / Icon). El Árbol de Composición es la representación jerárquica interna que Compose construye al ejecutar las funciones @Composable, donde cada nodo representa un elemento visual o contenedor y sus relaciones padre-hijo."
  },
  {
    "question": "¿Cuáles son los dos elementos esenciales de metadata que almacena cada nodo del \"Árbol de Composición\" para hacer posible la \"Recomposición Inteligente\"?",
    "options": [
      "La dirección IP del cliente y la firma SHA-256 de la APK.",
      "El número de línea en el archivo de texto y el nombre del autor en Git.",
      "Los parámetros recibidos por la función y el estado específico que observa.",
      "La versión de Android Runtime y el porcentaje de batería consumida."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Los parámetros recibidos por la función y el estado específico que observa. Cada nodo del árbol retiene: 1. Los parámetros recibidos, y 2. El estado que observa. Con estos metadatos, Compose puede comparar si las entradas cambiaron y decidir si ejecuta o salta (skips) ese nodo."
  },
  {
    "question": "¿Qué analogía del mundo real utilizaría para explicar la \"Recomposición Inteligente\" del Árbol de Composición en Jetpack Compose?",
    "options": [
      "El proyector de un cine que imprime absolutamente todos los frames de una película antes de mostrar el primero.",
      "El comportamiento de una máquina de escribir tradicional, que obliga a reescribir toda la hoja al cometer un solo error.",
      "El funcionamiento de una hoja de cálculo (como Excel), donde al cambiar el valor de una celda solo se recalculan las celdas que dependen de ella.",
      "El sistema de un semáforo cerrado que obliga a los componentes a mantenerse en estado de error perpetuo."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: El funcionamiento de una hoja de cálculo (como Excel), donde al cambiar el valor de una celda solo se recalculan las celdas que dependen de ella."
  },
  {
    "question": "En un componente reactivo como WeatherDashboard(temp: Int), ¿por qué un nodo con Text(\"Ciudad: Quito\") se cataloga como \"ESTÁTICO\" mientras que Text(\"Temperatura actual: $temp\") es \"DINÁMICO\"?",
    "options": [
      "Porque Text(\"Ciudad: Quito\") no recibe ni lee el parámetro 'temp', por lo que Compose la omite (skip) durante recomposiciones; mientras que la segunda sí depende de 'temp' y se redibuja ante cada cambio de temperatura.",
      "Porque 'Ciudad: Quito' está escrita en español y la temperatura utiliza caracteres alfanuméricos.",
      "Porque 'Ciudad: Quito' está protegida por una clave de cifrado simétrico.",
      "Porque las ciudades no pueden cambiar de nombre en la base de datos Room."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Porque Text(\"Ciudad: Quito\") no recibe ni lee el parámetro 'temp', por lo que Compose la omite (skip) durante recomposiciones; mientras que la segunda sí depende de 'temp' y se redibuja ante cada cambio de temperatura. La Recomposición Inteligente discrimina nodos estáticos y dinámicos: el nodo de la ciudad no depende del parámetro 'temp' (omite su ejecución), mientras que el de la temperatura lee el parámetro mutado y se recompone."
  },
  {
    "question": "En un componente reactivo como WeatherDashboard(temp: Int), ¿qué mecanismo reactivo ilustra el bloque condicional \"if (temp > 30) { AlertIcon() }\"?",
    "options": [
      "El bloqueo obligatorio del compilador para evitar temperaturas peligrosas en el hardware.",
      "La generación de UI Dinámica y Condicional, donde nodos enteros se agregan o retiran del árbol de composición en tiempo de ejecución en función del estado.",
      "Una llamada al sistema operativo para encender el ventilador del procesador.",
      "Una falla de concurrencia al no utilizar un bloque synchronized."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: La generación de UI Dinámica y Condicional, donde nodos enteros se agregan o retiran del árbol de composición en tiempo de ejecución en función del estado. Las estructuras condicionales (if/when) dentro de Compose generan UI Dinámica: el nodo AlertIcon() se inserta en el árbol cuando temp > 30 y se remueve automáticamente cuando la condición deja de cumplirse."
  },
  {
    "question": "¿Qué define conceptualmente a un \"DSL\" (Domain-Specific Language) en la construcción de interfaces modernas como Jetpack Compose y SwiftUI?",
    "options": [
      "Un protocolo de telecomunicaciones para conectar dispositivos por cable telefónico.",
      "Un nuevo lenguaje binario que reemplaza por completo a Kotlin y Swift en el kernel.",
      "Un 'lenguaje dentro de un lenguaje', diseñado para una tarea concreta y especializada; donde no se programan algoritmos paso a paso, sino que se describe directamente qué se quiere ver.",
      "Un compilador de bases de datos relacionales para teléfonos de gama baja."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Un 'lenguaje dentro de un lenguaje', diseñado para una tarea concreta y especializada; donde no se programan algoritmos paso a paso, sino que se describe directamente qué se quiere ver. Un DSL (Lenguaje Específico de Dominio) es un dialecto o lenguaje embebido diseñado para resolver un problema puntual: en lugar de lógica algorítmica imperativa, describe el resultado visual de forma concisa y declarativa."
  },
  {
    "question": "¿Por qué se afirma en el desarrollo declarativo moderno que con Jetpack Compose y SwiftUI \"el código se convierte en la documentación visual de la interfaz\"?",
    "options": [
      "Porque Android Studio toma capturas de pantalla automáticas y las sube a GitHub.",
      "Porque el código se exporta directamente como un archivo de diseño en formato Figma.",
      "Porque es obligatorio escribir comentarios de tipo KDoc de más de 50 palabras por función.",
      "Porque al eliminar el ruido ceremonial y describir la estructura jerárquica con claridad declarativa, leer el código equivale a visualizar directamente la disposición y elementos de la pantalla."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Porque al eliminar el ruido ceremonial y describir la estructura jerárquica con claridad declarativa, leer el código equivale a visualizar directamente la disposición y elementos de la pantalla. Al usar un DSL declarativo, la jerarquía de funciones (Column { TopBar(); Text(); Button() }) refleja fielmente la composición espacial de la pantalla, haciendo que el código sea auto-documentado visualmente."
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
    "feedback": "La respuesta correcta es: Compose: Column / Row ⟷ SwiftUI: VStack / HStack. La convergencia arquitectónica muestra un paralelismo exacto: el contenedor vertical es Column en Compose y VStack en SwiftUI; el horizontal es Row en Compose y HStack en SwiftUI."
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
    "feedback": "La respuesta correcta es: A los métodos encadenados de vista como .padding(), .background() y .frame(), que actúan como 'adjetivos' que califican y transforman la apariencia del componente. Los modificadores en ambos frameworks operan como 'adjetivos' que califican el componente: en Compose se encadenan mediante Modifier.padding().background(), y en SwiftUI mediante .padding().background()."
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
    "feedback": "La respuesta correcta es: El decorador @State. remember en Compose retiene el estado local en el árbol de composición; en SwiftUI, el property wrapper @State cumple idéntica función reteniendo el valor y disparando el redibujado de la vista ante mutaciones."
  },
  {
    "question": "Si un estudiante nota que una lista de 1000 elementos se ralentiza significativamente durante el scroll porque utilizó un contenedor \"Column\" con un bucle \"forEach\", ¿cuál es la solución técnica correcta en el paradigma declarativo?",
    "options": [
      "Utilizar una clase anónima de Java en lugar del estado \"mutableStateOf\".",
      "Implementar \"LazyColumn\", el cual ahorra recursos porque solo compone y mantiene en memoria los elementos visibles en pantalla.",
      "Aplicar el patrón de diseño \"UiState\" usando variables booleanas globales independientes.",
      "Separar la lista en un archivo XML externo para mejorar el rendimiento del renderizado en Android."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Implementar \"LazyColumn\", el cual ahorra recursos porque solo compone y mantiene en memoria los elementos visibles en pantalla."
  },
  {
    "question": "¿Por qué el contenedor \"Column\" convencional no debe utilizarse para listas dinámicas o extensas a diferencia de \"LazyColumn\"?",
    "options": [
      "Porque \"Column\" evalúa y compone de golpe todos los elementos de la lista en memoria simultáneamente, saturando el Main Thread y provocando caídas de frames.",
      "Porque \"Column\" compila directamente hacia vistas XML tradicionales que no soportan scroll interactivo.",
      "Porque \"Column\" requiere obligatoriamente una conexión de red activa para renderizar sus componentes hijos.",
      "Porque \"Column\" solo admite un máximo estricto de 10 elementos Composable por pantalla según las directrices de Android."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Porque \"Column\" evalúa y compone de golpe todos los elementos de la lista en memoria simultáneamente, saturando el Main Thread y provocando caídas de frames. A diferencia de LazyColumn (que recicla y compone bajo demanda únicamente los ítems visibles en el viewport), Column compone de golpe toda la jerarquía en memoria, provocando jank y congelamiento."
  },
  {
    "question": "Al implementar interfaces reactivas, ¿cuál es el propósito principal de utilizar el patrón \"UiState\" (basado en Sealed Classes) junto con un bloque when para manejar estados como Loading, Success y Error?",
    "options": [
      "Reemplazar la necesidad de usar funciones con la anotación @Composable en las pantallas principales.",
      "Evitar estados inconsistentes en la pantalla asegurando que la interfaz se encuentre en un solo estado válido a la vez de forma exhaustiva.",
      "Generar automáticamente una base de datos local para persistir los errores de red.",
      "Permitir que la aplicación muestre el ícono de carga y la lista de datos exitosa de manera simultánea."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Evitar estados inconsistentes en la pantalla asegurando que la interfaz se encuentre en un solo estado válido a la vez de forma exhaustiva."
  },
  {
    "question": "Al procesar un estado modelado con una Sealed Class en Jetpack Compose mediante la estructura \"when(uiState)\", ¿qué beneficio de seguridad en tiempo de compilación se obtiene?",
    "options": [
      "Se autogenera el código de las vistas XML equivalentes en tiempo de compilación.",
      "Se optimiza el consumo de batería desactivando la tarjeta gráfica del dispositivo móvil.",
      "El compilador convierte la Sealed Class en una variable global mutable para acceso público.",
      "El compilador verifica exhaustivamente que todas las ramas (Loading, Success, Error) estén contempladas, garantizando que no existan estados sin controlar."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: El compilador verifica exhaustivamente que todas las ramas (Loading, Success, Error) estén contempladas, garantizando que no existan estados sin controlar. Al usar sealed classes con when como expresión, el compilador obliga a cubrir cada variante posible; si se añade un nuevo estado a la jerarquía en el futuro, el código no compilará hasta que la UI defina cómo dibujarlo."
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
    "feedback": "La respuesta correcta es: Porque al no existir setters manuales (como setText o setVisibility), la UI no tiene un estado paralelo propio: es una proyección directa y reactiva del estado, derivándose automáticamente cada vez que éste muta. En Compose desaparece el intermediario manual: la UI no se 'actualiza con órdenes', sino que 'reacciona al estado'. Si el estado cambia, la UI se recompone reflejando exactamente el nuevo valor."
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
    "feedback": "La respuesta correcta es: La capacidad del runtime de Compose de omitir (skip) la ejecución de funciones Composable cuyos parámetros y estados observados no han cambiado, redibujando estrictamente los nodos que sufrieron modificaciones. Smart Recomposition optimiza el rendimiento evitando el redibujado ciego: si una función Composable recibe los mismos argumentos y su estado observado no cambió, Compose la salta sin consumir ciclos de CPU."
  },
  {
    "question": "En el desarrollo de interfaces con Compose, ¿cuál es la diferencia conceptual entre un Composable 'Stateful' y uno 'Stateless'?",
    "options": [
      "Stateful utiliza internet; Stateless funciona en modo avión.",
      "Stateful requiere clases abstractas; Stateless solo admite interfaces Java.",
      "Stateful es compatible con Android 16; Stateless solo funciona en Android 5.",
      "Stateful posee y gestiona su propio estado interno (ej. con remember); Stateless no retiene estado interno, recibe sus datos por parámetros y emite eventos hacia arriba mediante lambdas (State Hoisting)."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Stateful posee y gestiona su propio estado interno (ej. con remember); Stateless no retiene estado interno, recibe sus datos por parámetros y emite eventos hacia arriba mediante lambdas (State Hoisting). Stateful maneja su propio estado interno; Stateless recibe el valor desde afuera y reporta cambios vía callbacks. Los componentes Stateless son altamente reutilizables, modulares y fáciles de testear."
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
    "feedback": "La respuesta correcta es: El estado debe elevarse al ancestro común más cercano que necesite leerlo o modificarlo, fluyendo hacia abajo como datos y hacia arriba como eventos (UDF). State Hoisting sigue el patrón UDF (Unidirectional Data Flow): el estado se eleva al ancestro común mínimo; los datos fluyen hacia abajo (state down) y las intenciones de cambio suben mediante eventos (events up)."
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
    "feedback": "La respuesta correcta es: Porque los modificadores se aplican de forma secuencial envolviendo al elemento; por ejemplo, aplicar .padding() antes de .background() coloca el color dentro del margen, mientras que aplicar .background() antes de .padding() colorea el área total y aplica el relleno internamente. Los modificadores en Compose funcionan por envoltura sucesiva (decoradores). El orden importa: Modifier.background().padding() dibuja el fondo y luego separa el contenido; el orden inverso deja el padding fuera del fondo."
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
    "feedback": "La respuesta correcta es: Se produce un bucle de recomposición infinito (Recomposition Loop): la mutación del estado dentro del cuerpo dispara una recomposición, la cual vuelve a ejecutar la función, provocando una nueva mutación inmediata que congela la aplicación. Las funciones Composable deben ser libres de efectos secundarios (side-effect free). Mutar un estado en el cuerpo de la función provoca que Compose se reejecute eternamente, provocando un congelamiento (freeze) de la app."
  },
  {
    "question": "En el panorama del desarrollo móvil contemporáneo, ¿por qué dominar el paradigma de Jetpack Compose acelera significativamente la adopción de SwiftUI en iOS?",
    "options": [
      "Porque el código de Compose se puede copiar y pegar directamente en Xcode sin cambiar ninguna letra.",
      "Porque ambos frameworks comparten la misma filosofía declarativa, conceptos de estado reactivo, estructuras de contenedores (Column/Row vs VStack/HStack) y composición funcional, permitiendo que la transición conceptual entre plataformas sea prácticamente directa.",
      "Porque Apple compró los derechos de Jetpack Compose para integrarlo en iOS 19.",
      "Porque ambos lenguajes fueron creados por la misma fundación de código abierto en 2026."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Porque ambos frameworks comparten la misma filosofía declarativa, conceptos de estado reactivo, estructuras de contenedores (Column/Row vs VStack/HStack) y composición funcional, permitiendo que la transición conceptual entre plataformas sea prácticamente directa. La convergencia hacia DSLs declarativos unifica la industria: entender la UI como función del estado, UDF, árboles reactivos y modificadores en Compose prepara al desarrollador para comprender SwiftUI de forma inmediata."
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
    "feedback": "La respuesta correcta es: Row organiza los elementos horizontalmente (uno al lado del otro); Column los organiza verticalmente (uno debajo del otro). Row organiza elementos visuales de forma secuencial horizontal (eje X), análogo a HStack en SwiftUI; Column los organiza verticalmente (eje Y), análogo a VStack."
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
    "feedback": "La respuesta correcta es: Es un contenedor que apila elementos uno encima del otro en el eje Z (profundidad); corresponde a ZStack en SwiftUI. Box permite superponer elementos en el eje Z (uno encima de otro con alineaciones relativas), siendo el análogo directo de ZStack en SwiftUI."
  },
  {
    "question": "¿Cómo impacta la \"Recomposición Inteligente\" en la mantenibilidad y legibilidad del código más allá de la optimización del rendimiento?",
    "options": [
      "Al eliminar los setters manuales y centralizar la lógica de actualización exclusivamente en el estado, el código describe limpiamente la intención del diseño, reduciendo la carga cognitiva y facilitando el mantenimiento.",
      "Permite eliminar todas las pruebas unitarias del repositorio.",
      "Genera esquemas de bases de datos automáticos en la nube de Google Cloud.",
      "Obliga al desarrollador a utilizar una única función para toda la aplicación."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Al eliminar los setters manuales y centralizar la lógica de actualización exclusivamente en el estado, el código describe limpiamente la intención del diseño, reduciendo la carga cognitiva y facilitando el mantenimiento. La Recomposición Inteligente no solo ahorra CPU: al liberar al programador de gestionar setters manuales, el código pasa a ser un reflejo claro y conciso de la lógica de negocio, reduciendo bugs y deuda técnica."
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
    "feedback": "La respuesta correcta es: Para que el runtime de Compose identifique la identidad estable de cada elemento ante inserciones, eliminaciones o reordenamientos, evitando recomposiciones innecesarias y preservando animaciones y estados de scroll fluidos. Proveer una key estable (ej. ID único del producto) permite a LazyColumn rastrear qué elemento se movió o cambió de lugar sin tener que recomponer la lista completa, optimizando drásticamente el scroll."
  },
  {
    "question": "En la declaración idiomática \"var count by remember { mutableStateOf(0) }\", ¿qué rol cumple la palabra reservada \"by\" de Kotlin?",
    "options": [
      "Multiplica el valor de la variable por el factor de densidad de pantalla.",
      "Convierte la variable en un hilo secundario asíncrono.",
      "Aplica el patrón Property Delegation (delegación de propiedades), permitiendo leer y escribir en la variable 'count' directamente como un entero (Int) sin tener que acceder manualmente a count.value.",
      "Obliga a que la variable sea serializada en disco mediante SharedPreferences."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Aplica el patrón Property Delegation (delegación de propiedades), permitiendo leer y escribir en la variable 'count' directamente como un entero (Int) sin tener que acceder manualmente a count.value. El operador 'by' utiliza la delegación de propiedades de Kotlin (getValue / setValue) para que tratemos a count como un Int normal, mientras Compose intercepta transparentemente las lecturas y escrituras."
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
    "feedback": "La respuesta correcta es: En el imperativo la fuente de la verdad se fragmenta: existe el dato en las variables del controlador y existe el dato reflejado en la propiedad visual del View en pantalla; mantener ambos en sincronía depende de la disciplina del programador. En el modelo imperativo se crea duplicidad: la variable en memoria y el texto dentro del TextView son dos entidades separadas. Si el programador actualiza la variable pero olvida el setText(), la app queda en un estado inconsistente."
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
    "feedback": "La respuesta correcta es: Porque Compose adopta el principio de 'Composición sobre Herencia' utilizando funciones simples anotadas con @Composable que se ensamblan y configuran modularmente mediante Modifiers, evitando jerarquías de clases pesadas y rígidas. Compose reemplaza la compleja y pesada jerarquía de herencia de View (donde cada elemento arrastraba miles de líneas de código base) por funciones puras que se componen entre sí, aplicando 'Composition over Inheritance'."
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
    "feedback": "La respuesta correcta es: Que Compose determinó que ninguno de los argumentos de entrada ni los estados observados por esa función cambiaron de valor, por lo que reutiliza el resultado del dibujo anterior sin ejecutar el cuerpo de la función. 'Skipping' es el núcleo del alto rendimiento en Compose: si los parámetros de un Composable son iguales a los de la recomposición previa, Compose reutiliza la salida gráfica anterior y omite la ejecución del código."
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
    "feedback": "La respuesta correcta es: Emitiendo eventos hacia arriba mediante lambdas (callbacks como onValueChange o onClick) hacia el nivel superior donde reside el estado. En UDF: los datos descienden por los parámetros (State flows down), y los eventos suben a través de lambdas de retorno (Events flow up), manteniendo un flujo predecible y unidireccional."
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
    "feedback": "La respuesta correcta es: Porque al ser Stateless, el formulario se puede previsualizar fácilmente en el IDE (@Preview), se puede reutilizar en diferentes pantallas y se puede testear con pruebas unitarias sin levantar el framework de Android. Un Composable Stateless es puramente funcional: al no depender de instancias locales de remember, es trivial de probar, se previsualiza instantáneamente con datos falsos en Android Studio y se reutiliza libremente."
  },
  {
    "question": "En la filosofía de diseño declarativo compartida por Jetpack Compose y SwiftUI, ¿qué mecanismo ilustra el uso de \"adjetivos\" que modifican y califican a los componentes visuales?",
    "options": [
      "Los modificadores (Modifier en Compose y los métodos encadenados como .padding() en SwiftUI).",
      "Las funciones suspendidas de Kotlin.",
      "Los archivos de configuración de manifiesto.",
      "Los hilos del recolector de basura."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Los modificadores (Modifier en Compose y los métodos encadenados como .padding() en SwiftUI). La slide 14 señala explícitamente: 'Los modificadores funcionan como adjetivos que definen la apariencia de la interfaz'. El componente es el sustantivo (Text), y el modificador es el adjetivo (.padding().background())."
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
    "feedback": "La respuesta correcta es: En cada recomposición de la función, la variable se volverá a crear desde cero con el valor inicial 0, perdiendo cualquier incremento o mutación previa que el usuario haya realizado. mutableStateOf notifica mutaciones, pero no retiene la instancia. Si se omite remember, al recomponer la función se ejecuta de nuevo desde la primera línea, reseteando la variable a 0."
  },
  {
    "question": "¿Por qué la transición hacia Jetpack Compose se considera un cambio de paradigma estructural en el desarrollo móvil moderno?",
    "options": [
      "Porque obliga a los desarrolladores a cambiar de computadoras y sistemas operativos.",
      "Porque elimina el uso de Kotlin en favor de código ensamblador.",
      "Porque sustituye el modelo imperativo de manipulación manual de vistas por un paradigma declarativo, reactivo y componible, eliminando desincronizaciones de UI y unificando la filosofía de desarrollo con SwiftUI.",
      "Porque hace que las aplicaciones móviles funcionen exclusivamente en servidores en la nube."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Porque sustituye el modelo imperativo de manipulación manual de vistas por un paradigma declarativo, reactivo y componible, eliminando desincronizaciones de UI y unificando la filosofía de desarrollo con SwiftUI. Compose representa un cambio de era: abandona el modelo imperativo heredado de los años 90 (DOM/XML/Views) para adoptar la computación reactiva declarativa moderna, marcando el estándar definitivo en la industria."
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
    "feedback": "La respuesta correcta es: Porque múltiples booleanos pueden combinarse en estados imposibles o contradictorios (ej. isLoading = true Y isError = true simultáneamente); mientras que la sealed class modela estados mutuamente excluyentes donde solo una variante puede existir en un instante dado. Los booleanos independientes dan lugar a estados inválidos (Loading y Error activos a la vez). Sealed class garantiza exclusión mutua: la UI está en Loading, o en Success, o en Error, jamás en una mezcla incoherente."
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
    "feedback": "La respuesta correcta es: Al calcular el diff de cambios y redibujar únicamente los píxeles y nodos que realmente mutaron, minimiza el tiempo de procesamiento por cuadro manteniéndolo por debajo de 16 milisegundos, evitando caídas de frames (jank). Para sostener 60fps cada cuadro debe procesarse en menos de 16ms. Smart Recomposition logra esta meta omitiendo nodos estáticos y redibujando solo lo mínimo indispensable."
  }
];

if (typeof window !== 'undefined') {
    window.questionsRDA2Tema56 = questionsRDA2Tema56;
}
