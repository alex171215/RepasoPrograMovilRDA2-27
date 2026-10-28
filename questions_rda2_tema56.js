const questionsRDA2Tema56 = [
  {
    "question": "Según la metáfora de la silla explicada en el cambio de paradigma de la interfaz móvil, ¿cómo se describe el enfoque declarativo (Jetpack Compose)?",
    "options": [
      "Describe la secuencia manual de instrucciones, como \"Camina cinco pasos hacia adelante, gira noventa grados y toma asiento\".",
      "Delega al programador la actualización manual de cada componente de la interfaz mediante llamadas continuas a métodos setText().",
      "Se describe únicamente el resultado final deseado, como \"Quiero estar sentado\", y el sistema gestiona la ejecución.",
      "Requiere el uso exclusivo de etiquetas XML jerárquicas para sincronizar la interfaz de usuario con la lógica de negocio."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Se describe únicamente el resultado final deseado, como \"Quiero estar sentado\", y el sistema gestiona la ejecución. El paradigma declarativo describe 'el qué' (el estado final de la UI deseado), delegando al compilador y runtime de Compose la responsabilidad de calcular 'el cómo' llegar a ese estado."
  },
  {
    "question": "En el paradigma tradicional de Android (XML + Java/Kotlin), ¿cuál es el problema arquitectónico de la 'Separación de Archivos y Sincronización Manual'?",
    "options": [
      "Que los archivos XML ocupan el doble de memoria RAM en el heap del sistema operativo móvil, forzando al compilador K2 a generar hojas de estilo binarias independientes y provocando caídas severas en la tasa de refresco a sesenta cuadros por segundo durante la interacción visual continua.",
      "La UI se define en un archivo XML y la lógica en Java/Kotlin; el programador está forzado a buscar referencias con findViewById, mantener variables de estado duplicadas y llamar manualmente a setters (como setText() o setVisibility()), siendo altamente propenso a desincronizaciones.",
      "Que el compilador K2 prohíbe terminantemente la interoperabilidad directa entre clases imperativas y layouts estáticos, exigiendo la reescritura completa del árbol jerárquico de vistas cada vez que el usuario rota físicamente la pantalla del dispositivo en producción.",
      "Que las herramientas de desarrollo en Android Studio bloquean la inspección de dependencias y la navegación tipada cuando coexisten controladores visuales de Activities y vistas infladas en la partición protegida de memoria secundaria del emulador o dispositivo físico."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: La UI se define en un archivo XML y la lógica en Java/Kotlin; el programador está forzado a buscar referencias con findViewById, mantener variables de estado duplicadas y llamar manualmente a setters (como setText() o setVisibility()), siendo altamente propenso a desincronizaciones. El modelo tradicional separa rígidamente la vista (XML) de la lógica (Java), forzando al programador a mantener dos estados sincronizados a mano con findViewById() y setters continuos, lo que provoca código frágil y duplicación."
  },
  {
    "question": "En la ecuación matemática fundamental de la arquitectura declarativa de Compose: UI = f(State), ¿qué representa conceptualmente el elemento 'f'?",
    "options": [
      "Un archivo de configuración XML compilado en tiempo de compilación por el procesador de anotaciones de Android.",
      "El subproceso en segundo plano que gestiona las peticiones de red y escribe los datos en la base de datos local.",
      "La función composable anotada con @Composable que transforma el estado en una representación visual pura.",
      "El intermediario de comunicación IPC Binder que conecta la Activity con los servicios del sistema operativo."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: La función composable anotada con @Composable que transforma el estado en una representación visual pura. En UI = f(State), 'State' son los datos inmutables y 'f' es la función Composable que recibe ese estado y describe la interfaz visual que corresponde exactamente a esos datos."
  },
  {
    "question": "¿Cuál es la principal ventaja ergonómica de declarar la interfaz de usuario en el mismo lenguaje que la lógica de negocio (Kotlin puro)?",
    "options": [
      "Que la máquina virtual ART descarta la comprobación de tipos permitiendo la inyección dinámica de scripts en caliente.",
      "Que los layouts generados en Kotlin puro prescinden completamente del hilo principal de renderizado de la pantalla.",
      "Que el compilador K2 unifica el bytecode de la interfaz eliminando la necesidad de empaquetar imágenes o recursos drawables.",
      "Poder utilizar todas las capacidades completas del lenguaje Kotlin (condicionales 'if', bucles 'for', lambdas y tipos estrictos)."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Poder utilizar todas las capacidades completas del lenguaje Kotlin (condicionales 'if', bucles 'for', lambdas y tipos estrictos). Con Compose se programa la UI con Kotlin puro: la UI dinámica se logra con un simple 'if' o un bucle 'for', sin necesidad de recurrir a adaptadores complejos, visibilidades GONE o XMLs inflados a mano."
  },
  {
    "question": "¿Qué papel cumple el compilador especializado de Compose (@Composable Compiler Plugin) respecto al código fuente de Kotlin?",
    "options": [
      "Intercepta las llamadas a funciones anotadas con @Composable e inyecta parámetros sintéticos ocultos ($composer) para rastrear dependencias de estado y habilitar la recomposición inteligente.",
      "Traduce las funciones anotadas con @Composable a archivos XML planos en disco para que el sistema operativo los infle mediante el método tradicional setContentView().",
      "Convierte el código fuente de Kotlin en sentencias SQL estructuradas para que la base de datos Room gestione directamente los árboles jerárquicos de vistas en segundo plano.",
      "Empaqueta las llamadas visuales en micro-hilos aislados del kernel de Linux que transfieren el procesamiento gráfico exclusivamente a servidores remotos de Google Cloud."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Intercepta las llamadas a funciones anotadas con @Composable e inyecta parámetros sintéticos ocultos ($composer) para rastrear dependencias de estado y habilitar la recomposición inteligente. El compilador de Compose no es un transpilador a XML; es un plugin de compilador que inyecta parámetros de composer en cada función composable para registrar qué estados lee y poder reejecutarla selectivamente cuando ese estado cambie."
  },
  {
    "question": "En la analogía de la 'Recomposición Inteligente', ¿cuál es la diferencia entre el funcionamiento de una 'Máquina de Escribir' (Imperativo) y una 'Hoja de Cálculo' (Declarativo)?",
    "options": [
      "La máquina de escribir valida los tipos de datos en tiempo real mediante reflexión; la hoja de cálculo requiere compilar la fórmula a código binario antes de mostrar los números en pantalla.",
      "La máquina de escribir obliga a reimprimir o corregir toda la página ante cualquier cambio; la hoja de cálculo recalcula y actualiza exclusivamente las celdas dependientes del valor modificado.",
      "La máquina de escribir almacena los datos en memoria heap del proceso; la hoja de cálculo serializa automáticamente las variables en la partición protegida de SQLite para evitar pérdidas de estado.",
      "La máquina de escribir gestiona los eventos con callbacks asíncronos en segundo plano; la hoja de cálculo detiene todos los procesos concurrentes hasta actualizar los nodos visuales de la interfaz."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: La máquina de escribir obliga a reimprimir o corregir toda la página ante cualquier cambio; la hoja de cálculo recalcula y actualiza exclusivamente las celdas dependientes del valor modificado. En imperativo, un cambio obligaba a buscar componentes y manipularlos manualmente uno a uno; Compose funciona como Excel: cambias una celda (estado) y solo se recalculan las fórmulas (nodos composables) que dependían de ella."
  },
  {
    "question": "¿Qué afirmación describe con exactitud el concepto de 'Estado' (State) en una aplicación móvil?",
    "options": [
      "Es el subproceso secundario del sistema operativo encargado de compilar los recursos gráficos.",
      "Es el protocolo de comunicación cifrado que valida las peticiones HTTP contra servidores backend.",
      "Cualquier valor susceptible de cambiar a lo largo del ciclo de vida de la aplicación.",
      "La interfaz gráfica que se muestra congelada mientras el dispositivo se encuentra sin red."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Cualquier valor susceptible de cambiar a lo largo del ciclo de vida de la aplicación. En términos de arquitectura de software, el Estado es cualquier valor o dato dinámico que puede mutar con el tiempo: desde el texto en un campo, un booleano de carga, hasta una lista de productos descargados."
  },
  {
    "question": "En el manejo del estado con Jetpack Compose, ¿cuál es el propósito fundamental de la función remember?",
    "options": [
      "Persistir el valor del estado en el almacenamiento flash del teléfono para que sobreviva a la desinstalación.",
      "Sincronizar el árbol de vistas con el servidor remoto a través de una conexión permanente de WebSockets.",
      "Obligar a la Activity a reiniciar su ciclo de vida ejecutando ordenadamente los métodos onPause y onStop.",
      "Conservar el valor de una variable (como una nota adhesiva) durante las recomposiciones en la memoria heap."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Conservar el valor de una variable (como una nota adhesiva) durante las recomposiciones en la memoria heap. remember actúa como una 'nota adhesiva' en el Árbol de Composición: guarda el valor calculado en la memoria heap durante la composición inicial para no reinicializarlo en las recomposiciones sucesivas."
  },
  {
    "question": "¿Cuál es la función de mutableStateOf() en Jetpack Compose y por qué se le asocia con la metáfora de un 'Campanero'?",
    "options": [
      "Crea un objeto de estado mutable observable por el runtime de Compose; cuando su valor interno muta, 'toca la campana' avisando que los composables que lo leen deben recomponerse.",
      "Despacha una notificación push a la barra de estado del sistema operativo cada vez que una variable numérica incrementa su valor en memoria principal durante la sesión.",
      "Interrumpe la ejecución del hilo principal de Android y obliga al recolector de basura a purgar todas las referencias obsoletas de la memoria caché de la pantalla.",
      "Genera una alarma síncrona en el kernel de Linux que desconecta las antenas de comunicación inalámbrica si se detecta una lectura nula en un campo del formulario."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Crea un objeto de estado mutable observable por el runtime de Compose; cuando su valor interno muta, 'toca la campana' avisando que los composables que lo leen deben recomponerse. mutableStateOf() envuelve un valor y lo hace observable. Al mutar su valor (.value = nuevo), el runtime de Compose detecta el cambio ('hace sonar la campana') y agenda la recomposición de los composables que dependen de él."
  },
  {
    "question": "¿Qué representa la estructura interna denominada 'Árbol de Composición' en Jetpack Compose?",
    "options": [
      "Un archivo de configuración jerárquico en formato XML que el sistema operativo lee al arrancar la aplicación para mapear los IDs de vistas del sistema.",
      "Una estructura jerárquica de nodos construida por Compose que refleja la relación padre-hijo de la UI y gestiona qué partes del árbol deben recomponerse.",
      "Un árbol binario balanceado en memoria swap que el compilador K2 utiliza para optimizar las llamadas a funciones de extensión puras.",
      "Una base de datos relacional interna gestionada por Room que registra el historial cronológico de todas las interacciones del usuario."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Una estructura jerárquica de nodos construida por Compose que refleja la relación padre-hijo de la UI y gestiona qué partes del árbol deben recomponerse. El Árbol de Composición es el grafo interno que Compose mantiene en memoria para registrar qué composable es padre de quién y qué estados observa cada nodo para optimizar el repintado."
  },
  {
    "question": "¿Cuáles son los dos elementos esenciales de metadata que almacena cada nodo del Árbol de Composición?",
    "options": [
      "El identificador numérico único de la vista y la ruta física del archivo XML en el almacenamiento del sistema.",
      "El tiempo de compilación del binario en milisegundos y el porcentaje de batería consumido por el proceso móvil.",
      "Los parámetros de entrada recibidos por la función y las instancias observables de estado que lee activamente.",
      "La dirección IP del servidor backend de autenticación y los permisos de usuario concedidos en el Manifest."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Los parámetros de entrada recibidos por la función y las instancias observables de estado que lee activamente. Cada nodo del árbol registra: 1) Los parámetros con los que fue invocado, y 2) Los objetos State que leyó durante su ejecución. Gracias a esta metadata, Compose sabe exactamente si debe saltárselo o recomponerlo."
  },
  {
    "question": "¿Qué analogía del mundo real utilizaría para explicar la \"Recomposición Inteligente\" del Árbol de Composición en Jetpack Compose?",
    "options": [
      "El proyector de un cine que imprime absolutamente todos los fotogramas de una película en celuloide antes de proyectar la primera escena.",
      "El comportamiento de una máquina de escribir tradicional, que obliga a reescribir la página entera desde cero al cometer un solo error mecanográfico.",
      "El funcionamiento de una hoja de cálculo (como Excel), donde al cambiar el valor de una celda solo se recalculan y actualizan las celdas dependientes.",
      "La fabricación en masa de automóviles en una línea de montaje rígida donde cualquier desperfecto en una pieza detiene por completo la producción fabril."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: El funcionamiento de una hoja de cálculo (como Excel), donde al cambiar el valor de una celda solo se recalculan y actualizan las celdas dependientes."
  },
  {
    "question": "En un componente reactivo como WeatherDashboard(temp: Int), ¿por qué un nodo con Text(\"Ciudad: Quito\") NO se recompone cuando la temperatura cambia de 18 a 19 grados?",
    "options": [
      "Porque Text(\"Ciudad: Quito\") no recibe ni lee el parámetro 'temp', por lo que Compose omite inteligentemente su ejecución reutilizando el nodo previo.",
      "Porque las cadenas de texto estáticas se compilan como constantes en la partición protegida del kernel Linux impidiendo cualquier lectura posterior.",
      "Porque el sistema operativo suspende las actualizaciones de pantalla de los elementos alfabéticos para priorizar las animaciones de componentes numéricos.",
      "Porque la máquina virtual ART restringe la recomposición únicamente a las funciones que cuenten con modificadores gráficos de tipo background o padding."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Porque Text(\"Ciudad: Quito\") no recibe ni lee el parámetro 'temp', por lo que Compose omite inteligentemente su ejecución reutilizando el nodo previo. Recomposición inteligente (Smart Recomposition): Compose compara los argumentos. Como 'Ciudad: Quito' no cambió ni depende de 'temp', su nodo se salta (skips) sin consumir CPU."
  },
  {
    "question": "En un componente reactivo como WeatherDashboard(temp: Int), ¿qué mecanismo reactivo ocurre en el Árbol de Composición cuando se evalúa un bloque 'if (temp > 25)'?",
    "options": [
      "El compilador K2 invalida la memoria caché y fuerza a la Activity a recrearse completamente mediante el método setContentView().",
      "La generación de UI Dinámica y Condicional, donde nodos enteros se agregan o retiran del Árbol de Composición en tiempo real según el estado.",
      "La ejecución de una consulta asíncrona a Room que bloquea el hilo principal hasta comprobar que el valor numérico es un entero válido.",
      "El intercambio en caliente del tema gráfico de Material You pasando automáticamente del modo claro al modo oscuro por contraste térmico."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: La generación de UI Dinámica y Condicional, donde nodos enteros se agregan o retiran del Árbol de Composición en tiempo real según el estado. En Compose, la estructura del árbol no es fija: al evaluar un 'if', los nodos pueden aparecer o podarse dinámicamente del árbol de composición según cambie la condición."
  },
  {
    "question": "¿Qué define conceptualmente a un \"DSL\" (Domain-Specific Language) en la construcción de interfaces con Jetpack Compose?",
    "options": [
      "Un compilador externo escrito en lenguaje C++ que traduce hojas de estilos web CSS hacia código nativo de Android en segundo plano.",
      "Un protocolo binario de comunicación entre procesos que sustituye al mecanismo tradicional Binder en las llamadas del sistema operativo.",
      "Un 'lenguaje dentro de un lenguaje', diseñado para una tarea concreta y especializada mediante lambdas con receptor (trailing lambdas y scope).",
      "Una extensión del formato XML que permite incluir etiquetas de lógica algorítmica imperativa directamente en los archivos de recursos estáticos."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Un 'lenguaje dentro de un lenguaje', diseñado para una tarea concreta y especializada mediante lambdas con receptor (trailing lambdas y scope). Compose implementa un DSL (Domain-Specific Language) aprovechando las características de Kotlin (lambdas con receptor como ColumnScope, BoxScope), permitiendo escribir código visual que parece un lenguaje dedicado a diseñar pantallas."
  },
  {
    "question": "¿Por qué se afirma en el desarrollo declarativo moderno que con Jetpack Compose \"El Código se Autodocumenta\"?",
    "options": [
      "Porque Android Studio genera automáticamente archivos de documentación HTML en cada compilación sin intervención del programador.",
      "Porque el compilador ART inyecta comentarios explicativos en lenguaje natural dentro del bytecode intermedio de los archivos de clase DEX.",
      "Porque los componentes gráficos exportan su estructura visual a diagramas UML vectoriales sincronizados con repositorios en la nube.",
      "Porque al eliminar el ruido ceremonial y describir la estructura jerárquica con funciones y parámetros expresivos, el código refleja la UI."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Porque al eliminar el ruido ceremonial y describir la estructura jerárquica con funciones y parámetros expresivos, el código refleja la UI. Al leer una función composable con Column { Text(); Button() }, la jerarquía visual es idéntica a lo que se ve en la pantalla, eliminando la discrepancia entre el XML y el código Java/Kotlin."
  },
  {
    "question": "En la comparativa de paradigmas entre Jetpack Compose y SwiftUI, ¿cuál es el análogo conceptual directo en SwiftUI para el 'Árbol de Composición' de Compose?",
    "options": [
      "View Hierarchy (Jerarquía de Vistas declarativas)",
      "Storyboards y archivos de interfaz gráfica XIB",
      "El gestor de eventos táctiles EventKit de iOS",
      "CoreData Model Schema persistido en disco flash"
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: View Hierarchy (Jerarquía de Vistas declarativas). Tanto Compose como SwiftUI construyen un árbol/grafo jerárquico de nodos ligeros inmutables en memoria para determinar qué debe renderizarse y cuándo actualizarlo."
  },
  {
    "question": "En la comparativa de estilo y apariencia entre Compose y SwiftUI, ¿a qué elemento de SwiftUI corresponden los 'Modifiers' de Jetpack Compose?",
    "options": [
      "A las variables de entorno inyectadas mediante @EnvironmentObject en vistas jerárquicas de interfaces complejas.",
      "A los métodos encadenados de vista como .padding(), .background() y .frame(), que decoran o envuelven componentes.",
      "A las etiquetas de maquetación XML administradas mediante el diseñador gráfico de interfaces en Xcode.",
      "A los protocolos de serialización que transforman estructuras de datos Swift en diccionarios JSON en disco."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: A los métodos encadenados de vista como .padding(), .background() y .frame(), que decoran o envuelven componentes. En SwiftUI se encadenan modificadores de vista (.padding().background(Color.blue)) exactamente igual que en Compose se encadena Modifier.padding().background(Color.Blue)."
  },
  {
    "question": "¿Qué análogo de SwiftUI cumple el rol de la función 'remember' de Jetpack Compose para retener el estado local de una vista?",
    "options": [
      "El wrapper de propiedad @Binding utilizado para compartir estados con vistas hijas.",
      "La directiva @Published utilizada dentro de clases que implementan ObservableObject.",
      "El wrapper de propiedad @State que retiene valores a lo largo de los redibujados de la vista.",
      "El macro de compilación @Environment que extrae configuraciones del sistema operativo iOS."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: El wrapper de propiedad @State que retiene valores a lo largo de los redibujados de la vista. @State en SwiftUI retiene el valor entre redibujados y notifica cambios a la vista, cumpliendo el rol combinado de remember y mutableStateOf en Compose."
  },
  {
    "question": "Si un estudiante nota que una lista de 1000 elementos se ralentiza significativamente y produce caídas de frames con Column, ¿qué solución debe aplicar?",
    "options": [
      "Aumentar la cuota de memoria RAM del emulador desde las opciones avanzadas de hardware del SDK.",
      "Implementar \"LazyColumn\", el cual ahorra recursos porque solo compone y mantiene en memoria los elementos visibles.",
      "Sustituir los textos por imágenes vectoriales estáticas para reducir la carga de procesamiento del compilador K2.",
      "Envolver cada elemento de la lista en una corrutina independiente despachada en el Dispatchers.Main de Kotlin."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Implementar \"LazyColumn\", el cual ahorra recursos porque solo compone y mantiene en memoria los elementos visibles. Column compone todos los hijos de golpe, agotando recursos. LazyColumn solo compone los ítems que están visibles en pantalla (equivalente al RecyclerView en XML), reciclando recursos para mantener 60 fps."
  },
  {
    "question": "¿Por qué el contenedor \"Column\" convencional no debe utilizarse para listas dinámicas o con gran cantidad de elementos?",
    "options": [
      "Porque \"Column\" evalúa y compone de golpe todos los elementos de la lista en memoria, consumiendo recursos y degradando el rendimiento.",
      "Porque el compilador K2 emite un error de tipos al detectar más de diez componentes anidados dentro de una función composable.",
      "Porque el sistema Android bloquea la entrada táctil si un contenedor vertical supera la resolución física de la pantalla.",
      "Porque \"Column\" exige que todos sus elementos hijos pertenezcan a la misma clase de datos inmutable de manera obligatoria."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Porque \"Column\" evalúa y compone de golpe todos los elementos de la lista en memoria, consumiendo recursos y degradando el rendimiento. Column instancia y mide todos los elementos de la lista en el momento de componerse. Si hay 1000 elementos, crea 1000 nodos en memoria, colapsando el rendimiento."
  },
  {
    "question": "Al implementar interfaces reactivas, ¿cuál es el propósito principal de utilizar una Sealed Class para modelar el UiState (Loading, Success, Error)?",
    "options": [
      "Permitir que la interfaz gráfica sea renderizada en navegadores web de escritorio mediante transpilación JavaScript.",
      "Evitar estados inconsistentes en la pantalla asegurando que la interfaz se encuentre exactamente en un único estado a la vez.",
      "Optimizar el consumo de batería de la pantalla desactivando los sensores giroscópicos mientras la app carga datos de la red.",
      "Habilitar la exportación del código fuente de Kotlin hacia bibliotecas compartidas de C++ sin pérdida de rendimiento."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Evitar estados inconsistentes en la pantalla asegurando que la interfaz se encuentre exactamente en un único estado a la vez. Una Sealed Class o Sealed Interface garantiza estados mutuamente excluyentes (no se puede estar cargando y mostrando error a la vez), eliminando los 'estados imposibles' que provocaban múltiples variables booleanas."
  },
  {
    "question": "Al procesar un estado modelado con una Sealed Class en Jetpack Compose mediante la expresión 'when (uiState)', ¿qué garantía clave ofrece el compilador?",
    "options": [
      "Garantiza que la ejecución de la función se realice en un subproceso aislado del kernel Linux para evitar bloqueos gráficos.",
      "Obliga al recolector de basura a congelar la memoria heap durante el cambio de ramas para prevenir excepciones OutOfMemory.",
      "Descarta automáticamente las llamadas a métodos obsoletos de la biblioteca de compatibilidad de Android en tiempo de diseño.",
      "El compilador verifica exhaustivamente que todas las ramas (Loading, Success, Error) estén cubiertas sin requerir una cláusula else."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: El compilador verifica exhaustivamente que todas las ramas (Loading, Success, Error) estén cubiertas sin requerir una cláusula else. Con Sealed Classes, la comprobación 'when' es exhaustiva: el compilador de Kotlin obliga a manejar todos los casos posibles (Loading, Success, Error). Si se añade un nuevo estado en el futuro, el compilador avisa dónde falta manejarlo."
  },
  {
    "question": "¿Por qué el paradigma declarativo de Compose elimina por diseño la 'desincronización entre la lógica y la interfaz' típica de Android clásico?",
    "options": [
      "Porque el sistema operativo Android suspende las interacciones táctiles mientras el modelo de datos se sincroniza con el servidor.",
      "Porque las interfaces de usuario de Compose se ejecutan en servidores remotos que transmiten únicamente fotogramas de vídeo comprimidos.",
      "Porque el runtime de Compose sustituye las variables de memoria RAM por registros directos del procesador multinúcleo del terminal.",
      "Porque al no existir setters manuales (como setText o setVisibility), la UI no tiene estado propio; se deriva del estado observado."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Porque al no existir setters manuales (como setText o setVisibility), la UI no tiene estado propio; se deriva del estado observado. Al no haber 'views' que guarden su propio estado mutable ni setters manuales, es imposible que la UI muestre un dato desactualizado respecto al estado que la generó: UI = f(State)."
  },
  {
    "question": "En Jetpack Compose, ¿qué se entiende por 'Recomposición Inteligente' (Smart Recomposition)?",
    "options": [
      "La capacidad del runtime de Compose de omitir (skip) la ejecución de funciones Composable cuyos parámetros de entrada no han cambiado.",
      "El proceso automático por el cual el compilador K2 convierte funciones complejas en archivos de diseño estáticos XML tradicionales.",
      "La técnica de precarga en memoria secundaria de todas las pantallas posibles de la aplicación antes de que el usuario inicie sesión.",
      "La optimización de hardware que apaga temporalmente los núcleos de alta frecuencia de la CPU del móvil durante transiciones visuales."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: La capacidad del runtime de Compose de omitir (skip) la ejecución de funciones Composable cuyos parámetros de entrada no han cambiado. Smart Recomposition analiza los argumentos de cada composable. Si son estables y no cambiaron desde la última recomposición, Compose se salta la ejecución de esa función por completo, ahorrando batería y CPU."
  },
  {
    "question": "En el desarrollo de interfaces con Compose, ¿cuál es la diferencia conceptual entre un componente 'Stateful' y uno 'Stateless'?",
    "options": [
      "Stateful se utiliza únicamente en teléfonos inteligentes; Stateless está reservado para pantallas de televisores Android TV.",
      "Stateful requiere obligatoriamente una conexión de red activa; Stateless puede ejecutarse completamente en modo fuera de línea.",
      "Stateful compila sus vistas en código máquina nativo; Stateless genera código interpretado por la máquina virtual de Android.",
      "Stateful posee y gestiona su propio estado interno (ej. con remember); Stateless no tiene estado propio y recibe datos por parámetros."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Stateful posee y gestiona su propio estado interno (ej. con remember); Stateless no tiene estado propio y recibe datos por parámetros. Stateful almacena su estado interno con remember; Stateless recibe su estado por parámetros y emite eventos hacia arriba, facilitando pruebas, vistas previas y reutilización."
  },
  {
    "question": "¿Cuál es la 'Regla de Oro' del State Hoisting (elevación de estado) en Jetpack Compose?",
    "options": [
      "El estado debe declararse siempre como una variable global dentro del archivo AndroidManifest.xml para que todas las vistas accedan sin restricciones de ciclo de vida.",
      "Las lambdas de eventos deben procesarse exclusivamente en el hilo de renderizado visual para evitar cuellos de botella en la interfaz y prevenir excepciones síncronas.",
      "El estado debe elevarse al ancestro común más cercano que necesite leerlo o modificarlo, fluyendo hacia abajo como datos y hacia arriba como eventos (UDF).",
      "Cada componente individual debe mantener copias duplicadas de las variables de estado en memoria caché para asegurar redundancia ante fallos imprevistos de la vista."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: El estado debe elevarse al ancestro común más cercano que necesite leerlo o modificarlo, fluyendo hacia abajo como datos y hacia arriba como eventos (UDF). La regla del State Hoisting indica elevar el estado al ancestro común mínimo de todos los composables que lo leen o modifican, asegurando la Fuente Única de la Verdad (SSOT) y el Flujo Unidireccional de Datos (UDF)."
  },
  {
    "question": "Al trabajar con Modifiers en Jetpack Compose, ¿por qué el orden de encadenamiento altera de forma determinante el resultado visual?",
    "options": [
      "Porque el compilador K2 descarta los modificadores declarados después de un método de tamaño fijo (ejemplo: .size(100.dp)), ignorando cualquier configuración de espaciado subsiguiente.",
      "Porque los modificadores impares se procesan en la GPU y los modificadores pares se ejecutan por software en el hilo principal de la vista, generando conflictos de sincronización visual.",
      "Porque cambiar el orden de los métodos altera el identificador único del componente forzando una recomposición completa y destructiva de todo el árbol jerárquico de Jetpack Compose.",
      "Porque los modificadores se aplican secuencialmente envolviendo al elemento: por ejemplo, .padding() antes de .background() coloca el color dentro del margen, y al revés cubre el área total."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Porque los modificadores se aplican secuencialmente envolviendo al elemento: por ejemplo, .padding() antes de .background() coloca el color dentro del margen, y al revés cubre el área total. Los modificadores en Compose no son propiedades estáticas; se aplican secuencialmente de afuera hacia adentro (como capas de una cebolla). Por tanto, `padding().background()` produce un efecto completamente distinto a `background().padding()`."
  },
  {
    "question": "¿Qué riesgo severo ocurre si un programador muta un estado directamente en el cuerpo principal de una función @Composable (por ejemplo: count++)?",
    "options": [
      "Se produce un bucle de recomposición infinito (Recomposition Loop): la mutación del estado dentro del cuerpo dispara una recomposición, la cual vuelve a ejecutar la función, provocando una nueva mutación inmediata que congela la aplicación.",
      "El compilador K2 genera una advertencia durante el análisis estático y reescribe la variable mutando el código hacia una constante inmutable, evitando que el árbol compositivo registre futuros cambios de valor en memoria.",
      "La máquina virtual ART suspende de forma preventiva el subproceso secundario de Compose y descarga los recursos visuales del disco flash, forzando a la aplicación a cerrarse con un diálogo de error del sistema operativo.",
      "El sistema operativo revoca los certificados criptográficos HTTPS de las peticiones de red abiertas en la capa de datos de la arquitectura móvil, interpretando la mutación concurrente como una brecha de seguridad grave."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Se produce un bucle de recomposición infinito (Recomposition Loop): la mutación del estado dentro del cuerpo dispara una recomposición, la cual vuelve a ejecutar la función, provocando una nueva mutación inmediata que congela la aplicación. Las funciones composables deben ser puras y sin efectos secundarios (Side Effects) en su cuerpo principal. Si se muta un estado directamente en el cuerpo, cada recomposición disparará otra recomposición, creando un bucle infinito que congela la app."
  },
  {
    "question": "En el panorama del desarrollo móvil contemporáneo, ¿por qué dominar el paradigma de Jetpack Compose acelera significativamente la adopción de SwiftUI en iOS?",
    "options": [
      "Porque Apple y Google unificaron sus especificaciones de compilación para permitir que los archivos de Kotlin se compilen directamente en paquetes binarios IPA nativos de iOS sin requerir entornos de desarrollo adicionales ni capas de traducción intermedia.",
      "Porque ambos frameworks comparten la misma filosofía declarativa, conceptos de estado reactivo, estructuras de contenedores (Column/Row vs VStack/HStack) y composición funcional, permitiendo que la transición conceptual entre plataformas sea prácticamente directa.",
      "Porque SwiftUI utiliza la biblioteca estándar de Kotlin para ejecutar operaciones de persistencia relacional en bases de datos locales, garantizando que los modelos de entidades de Room sean compatibles con CoreData en dispositivos móviles de Apple.",
      "Porque las interfaces de SwiftUI pueden exportarse como archivos de diseño XML tradicionales compatibles con el motor de renderizado de Android, permitiendo compartir componentes gráficos sin modificar la lógica declarativa del proyecto móvil."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Porque ambos frameworks comparten la misma filosofía declarativa, conceptos de estado reactivo, estructuras de contenedores (Column/Row vs VStack/HStack) y composición funcional, permitiendo que la transición conceptual entre plataformas sea prácticamente directa. Compose y SwiftUI son espejos conceptuales: quien comprende State, Modifiers, Column/Row y State Hoisting en Android, comprende automáticamente @State, ViewModifiers, VStack/HStack y Bindings en iOS."
  },
  {
    "question": "En Compose, ¿cuál es la diferencia fundamental entre utilizar un contenedor Row y un contenedor Column?",
    "options": [
      "Row organiza los componentes en capas de profundidad en el eje Z; Column los distribuye en una cuadrícula bidimensional fija.",
      "Row solo admite componentes de tipo botón e imagen; Column está restringido exclusivamente a elementos de texto y cajas de entrada.",
      "Row organiza los elementos horizontalmente (uno al lado del otro); Column los organiza verticalmente (uno debajo del otro).",
      "Row requiere declarar un adaptador de reciclaje en memoria heap; Column compila los hijos de forma síncrona en el procesador gráfico."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Row organiza los elementos horizontalmente (uno al lado del otro); Column los organiza verticalmente (uno debajo del otro). Row coloca sus componentes secundarios secuencialmente a lo largo del eje horizontal (X), mientras que Column los apila verticalmente a lo largo del eje vertical (Y)."
  },
  {
    "question": "¿Qué función cumple el contenedor Box en Jetpack Compose y a qué elemento corresponde en SwiftUI?",
    "options": [
      "Es un contenedor que distribuye elementos en filas y columnas alternadas en la pantalla; corresponde a LazyGrid en SwiftUI.",
      "Es un componente exclusivo para la visualización de listas dinámicas con reciclaje de memoria; corresponde a List en SwiftUI.",
      "Es un contenedor que alinea sus componentes secundarios a lo largo del eje horizontal de lectura; corresponde a HStack en SwiftUI.",
      "Es un contenedor que apila elementos uno encima del otro en el eje Z (profundidad); corresponde a ZStack en SwiftUI."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Es un contenedor que apila elementos uno encima del otro en el eje Z (profundidad); corresponde a ZStack en SwiftUI. Box superpone sus hijos en el eje Z (uno encima del otro, como capas), permitiendo posicionar elementos con Modifier.align(), equivalente directo a ZStack en SwiftUI y FrameLayout en XML."
  },
  {
    "question": "¿Cómo impacta la \"Recomposición Inteligente\" en la mantenibilidad y legibilidad del código más allá de la optimización del rendimiento?",
    "options": [
      "Al eliminar los setters manuales y centralizar la lógica de actualización exclusivamente en el estado, el código describe limpiamente la intención del diseño, reduciendo la carga cognitiva y facilitando el mantenimiento.",
      "Al delegar la renderización gráfica en servidores remotos de Google Cloud, el código de la aplicación prescinde de cualquier interacción con las APIs del sistema operativo Android, reduciendo la complejidad del cliente móvil.",
      "Al forzar a que todas las funciones visuales hereden de una clase base compartida en Java, el proyecto cumple automáticamente con las normas de interoperabilidad del compilador K2 y previene incompatibilidades de bytecode.",
      "Al almacenar el historial completo de cambios de estado en un archivo de texto plano en el disco de almacenamiento, los desarrolladores pueden depurar anomalías visuales sin requerir herramientas avanzadas en Android Studio."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Al eliminar los setters manuales y centralizar la lógica de actualización exclusivamente en el estado, el código describe limpiamente la intención del diseño, reduciendo la carga cognitiva y facilitando el mantenimiento. Al no tener que escribir ni mantener cientos de líneas de 'if (x) textView.setText()' ni listeners encadenados, el código se vuelve predecible y la lógica se concentra en los datos y no en la fontanería visual."
  },
  {
    "question": "Al procesar una lista de elementos en LazyColumn, ¿por qué es una buena práctica crítica proveer una clave única mediante el parámetro 'key' en items()?",
    "options": [
      "Para que el sistema operativo reserve una partición de memoria RAM exclusiva en la máquina virtual ART antes de inflar los elementos, garantizando que el recolector de basura no interrumpa la navegación en listas dinámicas largas.",
      "Para que el runtime de Compose identifique la identidad estable de cada elemento ante inserciones, eliminaciones o reordenamientos, evitando recomposiciones innecesarias y preservando animaciones y estados de scroll fluidos.",
      "Para que la base de datos Room reconozca automáticamente los tipos de datos primitivos de cada fila sin necesidad de declarar entidades, acelerando la lectura de registros relacionales durante el desplazamiento vertical.",
      "Para habilitar el soporte de modo oscuro de Material You en cada celda de la lista de forma independiente al tema del sistema, recalculando la paleta tonal algorítmica de acuerdo con el fondo de pantalla del usuario."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Para que el runtime de Compose identifique la identidad estable de cada elemento ante inserciones, eliminaciones o reordenamientos, evitando recomposiciones innecesarias y preservando animaciones y estados de scroll fluidos. Sin 'key', Compose se guía por la posición en la lista (índice 0, 1, 2...). Si se elimina el primer ítem, Compose recompondrá todos los demás. Con una key única y estable (ej. product.id), Compose sabe exactamente qué elemento cambió y anima la transición limpiamente."
  },
  {
    "question": "En la declaración idiomática \"var count by remember { mutableStateOf(0) }\", ¿qué rol cumple la palabra reservada \"by\" de Kotlin?",
    "options": [
      "Define una función de extensión asíncrona que transfiere la ejecución de la lectura de variables a un subproceso secundario, evitando bloqueos temporales en el hilo principal de renderizado.",
      "Indica al recolector de basura de Android que la variable debe limpiarse inmediatamente al finalizar la composición visual, impidiendo que referencias obsoletas permanezcan en la memoria heap.",
      "Aplica el patrón Property Delegation (delegación de propiedades), permitiendo leer y escribir en la variable 'count' directamente como un entero (Int) sin tener que acceder manualmente a count.value.",
      "Crea un puente de interoperabilidad binaria para permitir que controladores escritos en Java accedan al estado de Compose sin requerir adaptadores de compatibilidad en la capa de interfaz de usuario."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Aplica el patrón Property Delegation (delegación de propiedades), permitiendo leer y escribir en la variable 'count' directamente como un entero (Int) sin tener que acceder manualmente a count.value. La delegación de propiedades mediante 'by' implementa getValue y setValue de Kotlin, permitiendo usar 'count' directamente en lugar de 'count.value', haciendo el código mucho más limpio."
  },
  {
    "question": "¿Qué afirmación describe correctamente la relación entre el Paradigma Imperativo y el Manejo de la Fuente de la Verdad?",
    "options": [
      "En el imperativo el compilador unifica automáticamente el estado de la lógica y la interfaz gráfica en un solo objeto inmutable, asegurando que cualquier mutación se propague instantáneamente al árbol de composición sin intervención manual.",
      "En el imperativo las vistas de Android son funciones matemáticas puras que no retienen ninguna información interna en memoria RAM, recalculando su apariencia en cada ciclo de ejecución para evitar inconsistencias en la pantalla del terminal.",
      "En el imperativo el estado siempre reside en un repositorio central que notifica de forma reactiva a todos los componentes visuales mediante flujos asíncronos StateFlow, eliminando la necesidad de actualizar los valores a través de setters.",
      "En el imperativo la fuente de la verdad se fragmenta: existe el dato en las variables del controlador y existe el dato reflejado en la propiedad visual del View en pantalla; mantener ambos en sincronía depende de la disciplina del programador."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: En el imperativo la fuente de la verdad se fragmenta: existe el dato en las variables del controlador y existe el dato reflejado en la propiedad visual del View en pantalla; mantener ambos en sincronía depende de la disciplina del programador. En el modelo tradicional, el TextView almacena su propio texto (mText) y la variable Java/Kotlin almacena el suyo. Hay dos copias del dato. Si olvidas llamar a setText(), la pantalla muestra una mentira: la verdad está fragmentada."
  },
  {
    "question": "¿Por qué Jetpack Compose NO utiliza el concepto tradicional de 'herencia de clases de View' (como TextView heredando de View)?",
    "options": [
      "Porque Compose adopta el principio de 'Composición sobre Herencia' utilizando funciones simples anotadas con @Composable que se ensamblan y configuran modularmente mediante Modifiers, evitando jerarquías de clases pesadas y rígidas.",
      "Porque el lenguaje Kotlin prohíbe la herencia de clases en proyectos que utilicen el compilador K2 y bibliotecas reactivas del sistema, forzando a los desarrolladores a utilizar únicamente interfaces funcionales y tipos de datos planos.",
      "Porque los teléfonos móviles modernos no disponen de suficiente memoria heap para instanciar clases polimórficas de más de dos niveles, lo que provocaría excepciones de desbordamiento de pila al inflar árboles de vistas complejos.",
      "Porque la tienda Google Play Store rechaza aplicaciones móviles que implementen jerarquías de objetos tradicionales de la plataforma Java, exigiendo la migración total hacia componentes declarativos optimizados para Android 16."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Porque Compose adopta el principio de 'Composición sobre Herencia' utilizando funciones simples anotadas con @Composable que se ensamblan y configuran modularmente mediante Modifiers, evitando jerarquías de clases pesadas y rígidas. En Android clásico, la clase View tenía miles de líneas y Button heredaba de TextView, acarreando comportamientos no deseados. Compose reemplaza esto con 'Composición sobre Herencia': piezas pequeñas y especializadas que se combinan con Modifiers."
  },
  {
    "question": "En el contexto de la Recomposición Inteligente, ¿qué significa que una función Composable sea 'omitida' (Skipped)?",
    "options": [
      "Que el sistema operativo canceló la ejecución de la función por superar el límite de tiempo asignado al hilo de la vista, delegando el repintado de los píxeles al subproceso de animaciones secundarias de la GPU.",
      "Que Compose determinó que ninguno de los argumentos de entrada ni los estados observados por esa función cambiaron de valor, por lo que reutiliza el resultado del dibujo anterior sin ejecutar el cuerpo de la función.",
      "Que el compilador detectó un error sintáctico en los Modifiers y aplicó valores por defecto para no abortar la ejecución, evitando que la aplicación se congele o muestre componentes deformados al usuario final de la aplicación.",
      "Que el componente se encuentra fuera de los márgenes de visualización y fue destruido permanentemente de la memoria heap, requiriendo una nueva instanciación completa cuando el usuario vuelva a desplazarse hacia él."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Que Compose determinó que ninguno de los argumentos de entrada ni los estados observados por esa función cambiaron de valor, por lo que reutiliza el resultado del dibujo anterior sin ejecutar el cuerpo de la función. 'Skipping' (omisión) es la clave del rendimiento en Compose: si una función composable recibe parámetros estables que no han mutado, Compose se salta su ejecución por completo y reutiliza la salida previa del Árbol de Composición."
  },
  {
    "question": "En el flujo de datos unidireccional (UDF) de Compose, ¿cómo se propagan las acciones del usuario (como pulsar un botón o escribir en un campo)?",
    "options": [
      "Modificando directamente las variables privadas del componente padre mediante punteros de memoria compartida en la arquitectura.",
      "Invocando métodos estáticos del sistema operativo que fuerzan el redibujado de la pantalla completa en el siguiente ciclo de reloj.",
      "Emitiendo eventos hacia arriba mediante lambdas (callbacks como onValueChange o onClick) hacia el nivel superior donde reside el estado.",
      "Guardando de forma síncrona la acción en un archivo temporal de SharedPreferences para que el controlador la lea en segundo plano."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Emitiendo eventos hacia arriba mediante lambdas (callbacks como onValueChange o onClick) hacia el nivel superior donde reside el estado. UDF (Unidirectional Data Flow): El estado fluye hacia abajo (State goes down) desde el poseedor del estado a los componentes visuales, y los eventos fluyen hacia arriba (Events go up) desde los componentes interactivos hacia el poseedor del estado."
  },
  {
    "question": "Si una pantalla de Compose contiene un formulario con 5 campos de texto, ¿por qué es recomendable que el formulario sea Stateless y delegue su estado a un ViewModel?",
    "options": [
      "Porque los componentes Stateless consumen menos memoria de vídeo en la tarjeta gráfica del dispositivo móvil durante el scroll, permitiendo renderizar animaciones vectoriales a ciento veinte cuadros por segundo de forma fluida.",
      "Porque el sistema operativo Android destruye automáticamente cualquier formulario que contenga más de dos variables locales remember, para prevenir el agotamiento prematuro de los recursos de la batería en segundo plano.",
      "Porque de esa manera se habilita el soporte para compilar la aplicación hacia microcontroladores y dispositivos inteligentes sin pantalla, facilitando la reutilización del código fuente en arquitecturas embebidas de IoT.",
      "Porque al ser Stateless, el formulario se puede previsualizar fácilmente en el IDE (@Preview), se puede reutilizar en diferentes pantallas y se puede testear con pruebas unitarias sin levantar el framework de Android."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Porque al ser Stateless, el formulario se puede previsualizar fácilmente en el IDE (@Preview), se puede reutilizar en diferentes pantallas y se puede testear con pruebas unitarias sin levantar el framework de Android. Un componente Stateless es puro: solo recibe datos y emite eventos. Esto permite renderizarlo en `@Preview` pasando datos ficticios, reutilizarlo en múltiples flujos y hacerle tests unitarios sin dependencias de Android ni de emuladores."
  },
  {
    "question": "En la filosofía de diseño declarativo compartida por Jetpack Compose y SwiftUI, ¿qué mecanismo ilustra el uso de \"adjetivos\" que modifican y califican a los componentes visuales?",
    "options": [
      "Los modificadores (Modifier en Compose y los métodos encadenados como .padding() en SwiftUI) que decoran y alteran el componente.",
      "Los archivos de maquetación XML estáticos que definen los estilos de fuentes y colores en las carpetas de recursos del proyecto.",
      "Los adaptadores de datos que transforman entidades de base de datos relacional en estructuras legibles por los controladores de vista.",
      "Las bibliotecas externas de diseño vectorial que compilan gráficos SVG en código binario ejecutable para la GPU del teléfono móvil."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Los modificadores (Modifier en Compose y los métodos encadenados como .padding() en SwiftUI) que decoran y alteran el componente. Los Modifiers son los 'adjetivos' de los componentes: si Button() es el sustantivo, .fillMaxWidth().padding() son los adjetivos que modifican su tamaño y espaciado."
  },
  {
    "question": "¿Cuál es la consecuencia de no utilizar remember al declarar una variable 'var x = mutableStateOf(0)' dentro de una función Composable?",
    "options": [
      "El compilador K2 emite un error de compilación crítico que impide generar el archivo binario ejecutable de la aplicación para su posterior instalación en dispositivos móviles físicos del mercado.",
      "En cada recomposición de la función, la variable se volverá a crear desde cero con el valor inicial 0, perdiendo cualquier incremento o mutación previa que el usuario haya realizado.",
      "La máquina virtual ART desactiva la aceleración por hardware de la pantalla obligando a renderizar las vistas mediante software puro, degradando drásticamente el rendimiento general.",
      "El dispositivo entra en un estado de reposo forzado para evitar la sobrecarga de la memoria heap del sistema operativo del terminal ante la asignación masiva de variables en Compose."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: En cada recomposición de la función, la variable se volverá a crear desde cero con el valor inicial 0, perdiendo cualquier incremento o mutación previa que el usuario haya realizado. Si no usas remember, cada vez que la función se recompone, la línea 'mutableStateOf(0)' se ejecuta nuevamente desde el inicio, reseteando la variable a 0 y haciendo que parezca que la app nunca responde."
  },
  {
    "question": "¿Por qué la transición hacia Jetpack Compose se considera un cambio de paradigma estructural en el desarrollo móvil moderno?",
    "options": [
      "Porque exige reescribir la totalidad de las bibliotecas del sistema operativo Android en lenguaje Rust para evitar fallos de memoria, abandonando por completo las llamadas nativas tradicionales en C++.",
      "Porque elimina la necesidad de contar con procesadores multinúcleo al trasladar el renderizado visual a la memoria swap del dispositivo, prescindiendo del uso de la GPU para optimizar el consumo eléctrico.",
      "Porque sustituye el modelo imperativo de manipulación manual de vistas por un paradigma declarativo, reactivo y componible, eliminando desincronizaciones de UI y unificando la filosofía de desarrollo con SwiftUI.",
      "Porque restringe el desarrollo de software móvil exclusivamente a equipos de ingenieros certificados por el consorcio de Google y Apple, estableciendo un estándar único de distribución para tiendas oficiales."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Porque sustituye el modelo imperativo de manipulación manual de vistas por un paradigma declarativo, reactivo y componible, eliminando desincronizaciones de UI y unificando la filosofía de desarrollo con SwiftUI. Compose no es solo 'otra librería': cambia la forma de pensar, abandonando la manipulación imperativa de vistas ('busca el botón y cámbiale el texto') por una descripción declarativa ('la vista es un reflejo del estado')."
  },
  {
    "question": "En la Actividad de Refuerzo sobre Sealed Classes, ¿por qué el uso de UiState con variantes de Loading, Success y Error es superior a tener múltiples variables booleanas (ej. val isLoading = false, val isError = false)?",
    "options": [
      "Porque las variables booleanas ocupan cuatro veces más memoria RAM en la máquina virtual ART que una clase sellada con subclases, degradando la eficiencia del recolector de basura durante recomposiciones frecuentes en pantallas de alta densidad de píxeles.",
      "Porque el compilador K2 prohíbe el uso de tipos booleanos dentro de funciones composables que contengan listas dinámicas en pantalla, forzando la declaración de enumeraciones estáticas para garantizar la compatibilidad con el motor de renderizado de Compose.",
      "Porque las clases selladas permiten que los datos de la red se sincronicen directamente con servicios en la nube sin usar ViewModels, reduciendo la cantidad de capas arquitectónicas necesarias para gestionar el ciclo de vida de la aplicación en producción.",
      "Porque múltiples booleanos pueden combinarse en estados imposibles o contradictorios (ej. isLoading = true Y isError = true simultáneamente); mientras que la sealed class modela estados mutuamente excluyentes donde solo una variante puede existir en un instante dado."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Porque múltiples booleanos pueden combinarse en estados imposibles o contradictorios (ej. isLoading = true Y isError = true simultáneamente); mientras que la sealed class modela estados mutuamente excluyentes donde solo una variante puede existir en un instante dado. Dos booleanos generan 4 estados posibles: ¿qué pasa si isLoading=true y isError=true? La UI no sabe si mostrar el spinner o el error. Una Sealed Class o Sealed Interface hace que los estados ilegales sean irrepresentables por diseño."
  },
  {
    "question": "¿Qué rol juega la Recomposición Inteligente en el mantenimiento de una tasa de refresco constante de 60 a 120 fotogramas por segundo (fps) en la pantalla del dispositivo?",
    "options": [
      "Al calcular el diff de cambios y redibujar únicamente los píxeles y nodos que realmente mutaron, minimiza el tiempo de procesamiento por cuadro manteniéndolo por debajo de 16 milisegundos, evitando caídas de frames (jank).",
      "Al desactivar de forma temporal el procesamiento de corrutinas en segundo plano cada vez que el usuario desliza el dedo sobre la pantalla, garantizando que el hilo principal disponga del cien por ciento de la capacidad de la CPU.",
      "Al compilar el código de las funciones composables directamente en instrucciones de microcódigo ejecutadas por la GPU del dispositivo, eliminando cualquier paso intermedio por la máquina virtual de Android o el sistema Skia.",
      "Al forzar a que el sistema operativo reinicie el recolector de basura de la memoria heap exclusivamente cuando la aplicación pasa a onStop(), evitando interrupciones visuales durante la interacción activa del usuario con la UI."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Al calcular el diff de cambios y redibujar únicamente los píxeles y nodos que realmente mutaron, minimiza el tiempo de procesamiento por cuadro manteniéndolo por debajo de 16 milisegundos, evitando caídas de frames (jank). A 60 fps, cada fotograma dispone de solo 16.6 ms (y a 120 fps de 8.3 ms). Al recomponer solo lo que cambió y omitir todo lo demás, Compose mantiene el uso de CPU muy bajo, garantizando una fluidez extrema sin saltos visuales."
  }
];
