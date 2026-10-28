const questionsRDA2Tema4 = [
  {
    "question": "¿Por qué la evolución de los sistemas operativos móviles modernos ha transformado la noción de aplicación, pasando de un 'ejecutable lineal' a un ecosistema de 'componentes efímeros y reactivos'?",
    "options": [
      "Porque el sistema operativo debe gestionar recursos limitados de forma dinámica, pudiendo destruir y recrear componentes en cualquier instante por presión de memoria RAM o cambios de configuración del entorno (rotación, multiwindow).",
      "Porque el compilador divide la aplicación en micro-servicios aislados que delegan su persistencia en el daemon init de Linux, exigiendo una renegociación síncrona de permisos de usuario cada vez que la app entra en suspensión en segundo plano.",
      "Porque los nuevos procesadores multinúcleo invalidan la memoria caché del proceso al cambiar de foco visual, forzando a la arquitectura a reconstruir el grafo de vistas únicamente desde almacenamiento flash secundario sin estado previo.",
      "Porque las directrices de seguridad de Google Play prohíben la permanencia continua de estados en segundo plano, exigiendo que cada Activity sea reciclada mediante un hilo de ejecución efímero del Android Runtime de manera mandatoria."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Porque el sistema operativo debe gestionar recursos limitados de forma dinámica, pudiendo destruir y recrear componentes en cualquier instante por presión de memoria RAM o cambios de configuración del entorno (rotación, multiwindow). Las apps móviles ya no son programas lineales que controlan su propio ciclo de vida de inicio a fin; son ecosistemas reactivos donde el SO puede destruir y recrear componentes en respuesta a condiciones externas como falta de RAM o cambios de configuración (rotación, multi-ventana)."
  },
  {
    "question": "¿Cuál es la responsabilidad principal y mandatoria del callback onCreate() en el ciclo de vida de una Activity?",
    "options": [
      "Reanudar las animaciones complejas de la interfaz gráfica, calibrar sensores del dispositivo y restaurar sesiones activas de Bluetooth persistidas en el almacenamiento secundario.",
      "Inicializar la arquitectura básica del componente, instanciar el ViewModel y configurar la interfaz de usuario mediante setContentView() o setContent {} en Jetpack Compose.",
      "Ejecutar operaciones intensivas de lectura en disco mediante Room Database sobre el hilo de la interfaz gráfica garantizando la precarga de entidades en memoria caché de datos.",
      "Registrar receptores globales de BroadcastReceiver para eventos del hardware y sincronizar llamadas asíncronas de red antes de permitir la visualización de la ventana gráfica activa."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Inicializar la arquitectura básica del componente, instanciar el ViewModel y configurar la interfaz de usuario mediante setContentView() o setContent {} en Jetpack Compose. onCreate() se invoca una sola vez al nacer el componente y su propósito es la inicialización estructural: instanciar ViewModels y enlazar la vista (setContentView en XML o setContent en Compose)."
  },
  {
    "question": "¿Qué callback del ciclo de vida de una Activity señala el estado de 'interactividad plena' en el que la aplicación tiene el foco del usuario?",
    "options": [
      "onStart()",
      "onRestart()",
      "onResume()",
      "onCreate()"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: onResume(). onResume() es el único estado donde la Activity tiene interactividad plena (foco de entrada del usuario y primer plano absoluto). En onStart() ya es visible, pero aún no necesariamente interactiva."
  },
  {
    "question": "¿Por qué el profesor y las guías de Android advierten rigurosamente que las operaciones en onPause() deben ser ultra ligeras y no bloquear la UI?",
    "options": [
      "Porque el sistema operativo revoca inmediatamente la cuota de CPU asignada a la aplicación si onPause() consume más de cincuenta milisegundos continuos en su ejecución.",
      "Porque la memoria heap de la máquina virtual ART se congela de forma atómica impidiendo cualquier asignación de nuevos objetos durante la pausa de la ventana visual.",
      "Porque cualquier llamada asíncrona no finalizada en onPause() corrompe irreversiblemente el archivo de base de datos Room en el almacenamiento flash de la aplicación.",
      "Porque la siguiente Activity no puede iniciar su transición visual hasta que el callback onPause() de la Activity actual haya terminado de ejecutarse."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Porque la siguiente Activity no puede iniciar su transición visual hasta que el callback onPause() de la Activity actual haya terminado de ejecutarse. Android no puede reanudar ni mostrar la siguiente pantalla hasta que la actual complete onPause(). Si se realizan tareas pesadas (como guardar en disco o llamadas de red), la transición visual se congela provocando lentitud perceptible o ANR."
  },
  {
    "question": "En las buenas prácticas de arquitectura, ¿cuál es la diferencia de responsabilidad clave entre onPause() y onStop() al liberar recursos?",
    "options": [
      "onPause() realiza operaciones ligeras y guardado rápido de estado; onStop() libera los recursos pesados como GPS, sensores continuos, hilos secundarios o conexiones de red.",
      "onPause() purga la caché de memoria de Room y serializa los ViewModels; onStop() únicamente oculta los componentes gráficos de Compose del renderizador Skia en pantalla.",
      "onPause() destruye el árbol de composición de Compose liberando el hardware; onStop() suspende temporalmente el subproceso principal en el kernel de Linux del dispositivo.",
      "onPause() se ejecuta exclusivamente ante eventos de pantalla dividida o pop-ups; onStop() se reserva para cuando el usuario finaliza la app con el botón físico de retroceso."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: onPause() realiza operaciones ligeras y guardado rápido de estado; onStop() libera los recursos pesados como GPS, sensores continuos, hilos secundarios o conexiones de red. onPause() debe ser casi instantáneo (la app puede seguir parcialmente visible en multi-ventana). onStop() se ejecuta cuando la pantalla ya no es visible en absoluto, siendo el lugar ideal para apagar sensores pesados, animaciones continuas o pausar hilos."
  },
  {
    "question": "Al implementar el registro de sensores pesados en onStart() (por ejemplo sensorManager.registerListener(...)), ¿en qué callback es mandatorio desregistrarlos para evitar fugas de memoria y drenado de batería?",
    "options": [
      "En onResume()",
      "En onStop()",
      "En onPause()",
      "En onDestroy()"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: En onStop(). Por principio de simetría arquitectónica: lo que se inicializa/conecta en onStart() (cuando la UI se vuelve visible) debe liberarse/desconectarse en onStop() (cuando deja de ser visible), evitando que sensores como el acelerómetro o GPS sigan consumiendo batería en segundo plano."
  },
  {
    "question": "Ante una 'Muerte de Proceso' (Process Death) forzada por el sistema operativo debido a escasez de memoria RAM, ¿cuál es el comportamiento del ViewModel tradicional y qué herramienta es obligatoria para recuperar el estado?",
    "options": [
      "El ViewModel sobrevive en una partición de memoria protegida del sistema operativo y restaura automáticamente sus variables mutables mediante reflexión nativa de Kotlin.",
      "El compilador K2 guarda de forma transparente un volcado completo de la memoria RAM en DataStore, reanudando la ejecución sin requerir APIs adicionales de persistencia local.",
      "El ViewModel se destruye junto con todo el proceso; es obligatorio usar SavedStateHandle inyectado en el ViewModel para persistir y restaurar el estado desde el Bundle del sistema.",
      "El ViewModel preserva los estados reactivos de tipo StateFlow y descarta las lambdas anónimas, permitiendo que la interfaz se reconstruya sin necesidad de serialización previa."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: El ViewModel se destruye junto con todo el proceso; es obligatorio usar SavedStateHandle inyectado en el ViewModel para persistir y restaurar el estado desde el Bundle del sistema. A diferencia de una simple rotación de pantalla (donde el ViewModel sobrevive en memoria), durante una muerte de proceso todo el proceso de la app es eliminado de la RAM. Solo SavedStateHandle (que se apoya en el Bundle persistido por el SO) permite recuperar el estado previo."
  },
  {
    "question": "¿Cuál es la limitación fundamental de remember en Jetpack Compose que obliga a utilizar rememberSaveable para formularios y entradas de usuario?",
    "options": [
      "remember está restringido a colecciones inmutables de solo lectura; cualquier intento de almacenar tipos primitivos o State mutables produce un fallo en tiempo de compilación con K2.",
      "remember fuerza la serialización continua de las variables en la memoria flash interna, lo que degrada drásticamente la tasa de refresco a sesenta cuadros por segundo en animaciones.",
      "remember delega la retención en el ciclo de vida del subproceso secundario de Compose, el cual es terminado automáticamente por el sistema al entrar en segundo plano en el dispositivo.",
      "remember retiene el estado únicamente durante las recomposiciones en memoria; ante un cambio de configuración (como rotar la pantalla), la Activity se destruye y el valor de remember se pierde."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: remember retiene el estado únicamente durante las recomposiciones en memoria; ante un cambio de configuración (como rotar la pantalla), la Activity se destruye y el valor de remember se pierde. remember retiene el estado entre recomposiciones, pero vive en la memoria de la instancia de la Activity. Si la Activity se destruye (rotación, cambio de idioma), remember se pierde. rememberSaveable empaqueta los datos en un SavedInstanceState Bundle, sobreviviendo a la recreación."
  },
  {
    "question": "En Android 16 (API 36), ¿cuál es la innovación introducida por la API retain en la gestión de estado de Jetpack Compose?",
    "options": [
      "Permite retener en memoria objetos pesados no serializables (como instancias de ExoPlayer, Bitmaps grandes o grafos complejos) a través de la rotación de pantalla, sin requerir empaquetamiento en un Bundle.",
      "Almacena automáticamente en un archivo local cifrado de DataStore todo el historial de peticiones de red y respuestas JSON sin requerir la intervención de Room o SQLite en el dispositivo móvil.",
      "Fuerza a la máquina virtual ART a mantener bloqueado el recolector de basura sobre las referencias de Compose durante transiciones complejas entre fragmentos de interfaz en segundo plano.",
      "Garantiza la migración en caliente de los objetos de Compose hacia servicios en segundo plano de WorkManager para evitar pérdidas de estado durante la actualización del sistema operativo móvil."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Permite retener en memoria objetos pesados no serializables (como instancias de ExoPlayer, Bitmaps grandes o grafos complejos) a través de la rotación de pantalla, sin requerir empaquetamiento en un Bundle. La nueva API retain de Compose en Android 16 permite mantener instancias pesadas en memoria heap que no se pueden serializar fácilmente en un Bundle (como reproductores de vídeo o bitmaps), sobreviviendo a los cambios de configuración sin necesidad de recrearlos."
  },
  {
    "question": "En la arquitectura de tres capas recomendada por Google (UI / Domain / Data), ¿cuál es la responsabilidad exclusiva de la capa de Dominio (Domain Layer)?",
    "options": [
      "Gestionar el renderizado visual de componentes declarativos mediante Jetpack Compose y capturar los eventos táctiles directamente en el hilo de renderizado.",
      "Encapsular la lógica de negocio pura y compleja mediante Casos de Uso (Use Cases), haciéndola reutilizable e independiente de frameworks de UI o bases de datos.",
      "Orquestar la conexión directa con APIs RESTful mediante Retrofit, parsear las respuestas JSON y escribir físicamente en la base de datos relacional Room.",
      "Monitorear el ciclo de vida de las Activities en el sistema Android y despachar eventos de ventana hacia el WindowManager durante cambios de orientación."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Encapsular la lógica de negocio pura y compleja mediante Casos de Uso (Use Cases), haciéndola reutilizable e independiente de frameworks de UI o bases de datos. La capa de dominio es opcional pero crucial en apps complejas: aloja casos de uso (ej. FormatUserPinUseCase, CalculateTaxUseCase) que no dependen de Android ni de vistas, facilitando pruebas unitarias puras."
  },
  {
    "question": "En la arquitectura oficial de Google, ¿cuál es la función de la Capa de Datos (Data Layer) y qué componentes la integran?",
    "options": [
      "Traducir las interacciones táctiles del usuario en transiciones fluidas de Material You y sincronizar la navegación jerárquica con NavHostController en la capa gráfica de Compose.",
      "Supervisar el árbol compositivo de Compose y disparar corrutinas de animación sobre el hilo principal asegurando una tasa de refresco estable de sesenta cuadros por segundo en pantalla.",
      "Actuar como el cimiento de la aplicación gestionando la obtención, persistencia física y sincronización de datos mediante Repositorios, APIs remotas y bases de datos locales (Room / DataStore).",
      "Controlar la recolección de basura del Android Runtime y compilar dinámicamente archivos DEX hacia código nativo optimizado durante la instalación del paquete APK en la memoria interna."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Actuar como el cimiento de la aplicación gestionando la obtención, persistencia física y sincronización de datos mediante Repositorios, APIs remotas y bases de datos locales (Room / DataStore). La capa de datos gestiona las fuentes de datos (red, base de datos local, sensores) y expone modelos a través de repositorios, actuando como la fuente única de verdad (SSOT)."
  },
  {
    "question": "¿Cuáles son los \"Cuatro Pilares\" o componentes fundamentales sobre los que se estructura el sistema operativo Android?",
    "options": [
      "Scaffold, TopAppBar, NavHost y ModalBottomSheet.",
      "ViewModel, StateFlow, Room y Navigation Compose.",
      "Linux Kernel, Android Runtime, Binder e Intent.",
      "Activity, Service, BroadcastReceiver y ContentProvider."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Activity, Service, BroadcastReceiver y ContentProvider. Los 4 componentes fundamentales de Android desde sus orígenes son: Activity (UI), Service (segundo plano), BroadcastReceiver (escucha de eventos globales/sistema) y ContentProvider (gestión y compartición de datos estructurados entre apps)."
  },
  {
    "question": "Dentro de los cuatro pilares de Android, ¿qué componente facilita la compartición segura de datos entre diferentes aplicaciones mediante contratos estructurados?",
    "options": [
      "ContentProvider",
      "BroadcastReceiver",
      "ForegroundService",
      "IntentFilterBridge"
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: ContentProvider. ContentProvider expone datos de una aplicación a otra bajo un esquema seguro basado en URIs con control de permisos granular (por ejemplo, acceder a la agenda de contactos o a la galería multimedia)."
  },
  {
    "question": "En la comparación arquitectónica entre Android e iOS, ¿cuál es el análogo directo en el UIViewController de iOS para el método onCreate() de una Activity de Android?",
    "options": [
      "viewWillAppear()",
      "viewDidLoad()",
      "viewDidAppear()",
      "viewDidUnload()"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: viewDidLoad(). viewDidLoad() en UIKit (iOS) se invoca una sola vez cuando la jerarquía de vistas ha sido cargada en memoria, cumpliendo exactamente el rol de inicialización que tiene onCreate() en Android."
  },
  {
    "question": "En la comparativa de ciclo de vida entre Android (Activity) y iOS (UIViewController), ¿a qué método de iOS corresponde la etapa de visibilidad onStart() de Android?",
    "options": [
      "viewDidUnload()",
      "viewDidAppear()",
      "viewWillAppear()",
      "viewWillDisappear()"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: viewWillAppear(). viewWillAppear() notifica que la vista está a punto de hacerse visible en pantalla, correspondiendo directamente a onStart() en Android donde la Activity se vuelve visible para el usuario."
  },
  {
    "question": "En la comparativa de ciclo de vida entre Android e iOS, ¿cuál es el método de UIViewController correspondiente al estado de interactividad plena onResume() de Android?",
    "options": [
      "viewWillAppear()",
      "viewDidLayout()",
      "viewDidLoad()",
      "viewDidAppear()"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: viewDidAppear(). viewDidAppear() indica que la vista ya se ha mostrado completamente en pantalla y está lista para recibir interacciones del usuario, equivalente a onResume() de Android."
  },
  {
    "question": "¿Cuál es la diferencia práctica fundamental entre el callback onDestroy() de Android y el método deinit de iOS?",
    "options": [
      "onDestroy() es un evento de ciclo de vida emitido por el SO Android cuando la Activity culmina o es recreada; deinit en Swift es el desinicializador de ARC cuando el contador de referencias del objeto llega a cero.",
      "onDestroy() es un método obligatorio invocado exclusivamente por el Garbage Collector en Java; deinit es una función síncrona despachada manualmente por el desarrollador antes de liberar memoria swap.",
      "onDestroy() purga irreversiblemente la base de datos Room del dispositivo móvil; deinit simplemente invalida las variables estáticas y borra los archivos temporales almacenados en el disco caché de la app.",
      "onDestroy() se ejecuta únicamente cuando el hardware entra en reposo absoluto de batería; deinit es un callback gráfico que suspende las animaciones visuales en el hilo principal de renderizado de iOS."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: onDestroy() es un evento de ciclo de vida emitido por el SO Android cuando la Activity culmina o es recreada; deinit en Swift es el desinicializador de ARC cuando el contador de referencias del objeto llega a cero. onDestroy() es un callback del framework de Android que avisa que el componente está muriendo (puede recrearse tras rotación); deinit en Swift/iOS es el destructor nativo invocado por el recolector de referencias (ARC) solo cuando no queda ninguna referencia viva al objeto."
  },
  {
    "question": "En Android 16 (API 36), ¿qué innovación elimina el uso tradicional de onBackPressed() en favor de una experiencia fluida basada en gestos?",
    "options": [
      "System Intent Sniffer, redirigiendo los eventos táctiles directamente al kernel Linux.",
      "Predictive Back (retroceso predictivo), obligando a migrar hacia OnBackInvokedDispatcher.",
      "Gestural ART Bypass, descartando la pila del Back Stack desde la memoria caché global.",
      "Navigation Flow Controller, reemplazando a las Activities por Services en segundo plano."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Predictive Back (retroceso predictivo), obligando a migrar hacia OnBackInvokedDispatcher. Android 16 consolida el retroceso predictivo: el usuario ve una vista previa de la pantalla anterior o del launcher antes de soltar el gesto. Para soportarlo, se deprecó onBackPressed() y es obligatorio usar OnBackInvokedCallback / OnBackInvokedDispatcher (o BackHandler en Compose)."
  },
  {
    "question": "¿Cómo impacta la innovación de 'Eficiencia Energética' de Android 16 en la prioridad de ejecución de las tareas en segundo plano (Jobs)?",
    "options": [
      "Deshabilita selectivamente la recepción de paquetes en segundo plano mediante antenas de radio celular cuando la pantalla pasa a un estado de reposo prolongado del hardware.",
      "Cancela irrevocablemente la totalidad de corrutinas activas y subprocesos en segundo plano que superen un consumo de tiempo de CPU continuo superior a tres segundos en el sistema.",
      "Asigna cuotas de ejecución dinámicas a los Jobs, otorgando mayor prioridad y cuota de procesamiento mientras la aplicación se encuentra en estado 'Top Resumed' (interactiva en primer plano).",
      "Interrumpe la escritura síncrona en bases de datos SQLite forzando a que las transacciones pendientes se sincronicen únicamente a través de servidores cloud de respaldo en la nube."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Asigna cuotas de ejecución dinámicas a los Jobs, otorgando mayor prioridad y cuota de procesamiento mientras la aplicación se encuentra en estado 'Top Resumed' (interactiva en primer plano). En Android 16, la gestión de energía adapta dinámicamente las cuotas del JobScheduler: si la app está en 'Top Resumed', tiene máxima prioridad y acceso a recursos; al descender en la jerarquía, sus cuotas se restringen severamente para ahorrar batería."
  },
  {
    "question": "En la práctica del laboratorio sobre 'Muerte del Proceso' (Process Death), ¿qué ajuste de las Opciones de Desarrollador del dispositivo se activa para simular la recolección agresiva de memoria del SO?",
    "options": [
      "Forzar aceleración por hardware de GPU en pantalla",
      "Límite estricto de procesos en segundo plano a cero",
      "Habilitar depuración por capas de red sobre Wi-Fi",
      "No mantener actividades ('Don't keep activities')"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: No mantener actividades ('Don't keep activities'). La opción de desarrollador 'Don't keep activities' destruye de inmediato la Activity tan pronto como el usuario sale de ella (pasa a onStop()), permitiendo testear si el estado sobrevive mediante SavedStateHandle / rememberSaveable como si el SO hubiera matado el proceso por falta de RAM."
  },
  {
    "question": "Al implementar SavedStateHandle en un ViewModel, ¿cuál es el snippet idiomático para exponer un valor como StateFlow reactivo y cómo se actualiza?",
    "options": [
      "val userId = state.getStateFlow('user_id', 'default'); state['user_id'] = newId",
      "val userId = state.getLiveData('user_id', 'default'); state.postValue(newId)",
      "val userId = rememberSaveable { state.get('user_id') }; state.saveValue(newId)",
      "val userId = state.observeAsFlow('user_id'); state.commitTransaction(newId)"
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: val userId = state.getStateFlow('user_id', 'default'); state['user_id'] = newId. SavedStateHandle.getStateFlow(key, initialValue) expone el valor como StateFlow reactivo de solo lectura, y se actualiza escribiendo directamente como un mapa: state[key] = newValue, garantizando reactividad y persistencia."
  },
  {
    "question": "¿Cuál es la forma recomendada en código para observar el ciclo de vida de una pantalla sin acoplar la lógica dentro de la propia Activity?",
    "options": [
      "Sobrescribir el método nativo finalize() de la clase Object vinculando hilos secundarios manuales para sondear cambios de visibilidad.",
      "Implementar la interfaz DefaultLifecycleObserver (ej. override fun onResume(owner: LifecycleOwner)) y vincularla con lifecycle.addObserver().",
      "Crear un bucle infinito en una corrutina de Kotlin que sondee periódicamente el estado de la ventana en el WindowManager de Android.",
      "Envolver todas las llamadas de la función Composable dentro de un bloque try-catch con captura de excepciones de ciclo de vida del sistema."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Implementar la interfaz DefaultLifecycleObserver (ej. override fun onResume(owner: LifecycleOwner)) y vincularla con lifecycle.addObserver(). La arquitectura desacoplada usa LifecycleObserver (específicamente DefaultLifecycleObserver). La clase observadora reacciona a eventos como onResume/onPause sin que la Activity deba contener código ajeno a su responsabilidad."
  },
  {
    "question": "Para datos que deben sobrevivir a la desinstalación de la app o a reinicios completos del dispositivo físico, ¿qué herramienta de la arquitectura es la indicada?",
    "options": [
      "Retención volátil en memoria heap mediante rememberSaveable en el árbol compositivo",
      "Retención de estado ante recreaciones mediante ViewModel y SavedStateHandle",
      "Persistencia física definitiva mediante Room (base de datos local) o DataStore",
      "Retención de instancias complejas en memoria flash mediante la nueva API retain"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Persistencia física definitiva mediante Room (base de datos local) o DataStore. rememberSaveable y SavedStateHandle solo sobreviven a la muerte del proceso o rotación mientras la app siga instalada en la sesión actual. Para persistencia permanente (incluso tras apagar el teléfono o desinstalar y restaurar copia), se requiere almacenamiento en disco con Room o DataStore."
  },
  {
    "question": "¿Cuál es la \"Regla de Oro\" en el diseño de interfaces móviles modernas respecto a la \"Fuente Única de la Verdad\" (Single Source of Truth)?",
    "options": [
      "La interfaz gráfica debe retener los datos en variables globales para que cualquier componente composable pueda modificarlos libremente.",
      "Las operaciones asíncronas de red deben despacharse directamente desde los eventos onClick de los botones para optimizar el rendimiento.",
      "Cada elemento visual debe instanciar su propia base de datos SQLite en memoria para eliminar la necesidad de usar ViewModels.",
      "La interfaz de usuario (UI) debe derivarse siempre de modelos de datos persistentes y flujos reactivos, nunca ser la dueña del estado."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: La interfaz de usuario (UI) debe derivarse siempre de modelos de datos persistentes y flujos reactivos, nunca ser la dueña del estado. En la arquitectura recomendada por Google, la UI es una función pura del estado (UI = f(State)). La fuente única de verdad reside en la capa de datos o en el ViewModel; la UI solo observa y emite eventos hacia arriba."
  },
  {
    "question": "¿Cuál es la función del callback onRestart() en el ciclo de vida de una Activity?",
    "options": [
      "Indicar que la Activity estaba detenida (en estado Stopped tras onStop) y está a punto de volver a iniciarse hacia onStart().",
      "Reiniciar los contadores de consumo de batería de la CPU y sincronizar los permisos de ubicación con el kernel de Android.",
      "Destruir la memoria caché de Compose forzando una recomposición completa del árbol jerárquico antes de volver a la pantalla.",
      "Cerrar de forma segura las conexiones activas con bases de datos Room e invalidar los sockets HTTP abiertos previamente."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Indicar que la Activity estaba detenida (en estado Stopped tras onStop) y está a punto de volver a iniciarse hacia onStart(). onRestart() es un paso intermedio que solo se invoca cuando la Activity ya existía pero estaba en segundo plano (onStop()) y el usuario regresa a ella. Precede inmediatamente a onStart()."
  },
  {
    "question": "En el contexto de los cambios de configuración (ej. rotación de pantalla), ¿por qué Android destruye y recrea la Activity por defecto en lugar de simplemente redibujar?",
    "options": [
      "Para purgar los hilos de red secundarios y restablecer el contador de memoria heap evitando excepciones OutOfMemoryError en la GPU del teléfono móvil ante giros rápidos.",
      "Para permitir que la aplicación recargue automáticamente los recursos alternativos adecuados (layouts, drawables, strings) según la nueva orientación de pantalla o configuración regional.",
      "Para forzar que el compilador K2 genere un nuevo archivo binario optimizado específicamente para la resolución horizontal del dispositivo Android en tiempo de ejecución.",
      "Para garantizar el reinicio ordenado de las corrutinas vinculadas a la ventana gráfica y recalibrar los sensores giroscópicos del sistema operativo durante la rotación."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Para permitir que la aplicación recargue automáticamente los recursos alternativos adecuados (layouts, drawables, strings) según la nueva orientación de pantalla o configuración regional. Android destruye y recrea la Activity para consultar el sistema de recursos (`res/layout-land`, `values-es`, etc.) y aplicar las configuraciones exactas de la nueva densidad, idioma o tamaño de pantalla."
  },
  {
    "question": "¿Qué riesgo severo ocurre si un desarrollador utiliza android:configChanges en el Manifest para evitar que el sistema destruya la Activity ante una rotación?",
    "options": [
      "El subsistema de seguridad revoca permanentemente los permisos de cámara y ubicación por infringir directrices de Google Play en segundo plano durante giros del terminal.",
      "El motor gráfico Skia suspende la renderización por hardware forzando al dispositivo a utilizar primitivas visuales lentas por software puro en el hilo de la vista activa.",
      "El desarrollador asume la responsabilidad manual de actualizar cada recurso, layout, dimensiones y estados de Compose, corriendo el riesgo de congelar la UI y generar inconsistencias visuales.",
      "La máquina virtual ART desactiva la optimización de código Ahead-Of-Time generando fallos de incompatibilidad de tipos en tiempo de ejecución al rotar la ventana del móvil."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: El desarrollador asume la responsabilidad manual de actualizar cada recurso, layout, dimensiones y estados de Compose, corriendo el riesgo de congelar la UI y generar inconsistencias visuales. Al usar `configChanges`, el sistema ya no recarga recursos automáticamente. El desarrollador debe interceptar `onConfigurationChanged()` a mano; si se omite algo, la interfaz presentará layouts deformados, textos no traducidos o pérdidas de sincronización."
  },
  {
    "question": "En la comparación entre Android (Activity) y iOS (UIViewController), ¿qué etapa de desmontaje de iOS corresponde a onPause() y onStop()?",
    "options": [
      "Android: onPause() / onStop() ⟷ iOS: viewDidLoad() / viewWillAppear()",
      "Android: onPause() / onStop() ⟷ iOS: viewDidAppear() / viewLayoutMargins()",
      "Android: onPause() / onStop() ⟷ iOS: deinit() / didReceiveMemoryWarning()",
      "Android: onPause() / onStop() ⟷ iOS: viewWillDisappear() / viewDidDisappear()"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Android: onPause() / onStop() ⟷ iOS: viewWillDisappear() / viewDidDisappear(). En iOS, cuando la vista comienza a perder visibilidad se llama viewWillDisappear() (análogo a onPause()), y cuando queda totalmente oculta se invoca viewDidDisappear() (análogo a onStop())."
  },
  {
    "question": "Dentro de los cuatro pilares del sistema Android, ¿qué restricción crítica impone API 36 sobre el componente Service?",
    "options": [
      "Restricciones severas para iniciar servicios directamente desde segundo plano (background), obligando a migrar tareas diferibles hacia WorkManager.",
      "Prohibición total de utilizar corrutinas o subprocesos dentro de un Service para forzar el procesamiento síncrono en el hilo de renderizado.",
      "Obligatoriedad de asociar cada Service a un archivo de maquetación XML estático para validar los permisos de ejecución del usuario.",
      "Limitación del tiempo máximo de vida de un Foreground Service a exactamente cinco segundos antes de ser terminado por el recolector ART."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Restricciones severas para iniciar servicios directamente desde segundo plano (background), obligando a migrar tareas diferibles hacia WorkManager. Desde Android 8 hasta Android 16 (API 36), las restricciones a background services son muy estrictas: una app no puede arrancar servicios en segundo plano arbitrariamente. Se debe usar WorkManager para tareas diferidas o Foreground Services con notificación visible."
  },
  {
    "question": "En los cuatro pilares de Android, ¿qué restricción impone API 36 sobre el BroadcastReceiver para salvaguardar la batería del dispositivo?",
    "options": [
      "Prohibir que los BroadcastReceivers escuchen intenciones personalizadas emitidas mediante la clase Intent dentro de la misma aplicación.",
      "Limita las prioridades en anuncios globales (system broadcasts) para evitar que procesos en segundo plano se despierten masivamente y degraden la CPU.",
      "Exigir que todo receptor de eventos del sistema declare una función Composable para mostrar alertas visuales al usuario en primer plano.",
      "Obligar a registrar los receptores únicamente a través de archivos de configuración binaria compilados por el compilador LLVM de Android."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Limita las prioridades en anuncios globales (system broadcasts) para evitar que procesos en segundo plano se despierten masivamente y degraden la CPU. En versiones modernas como Android 16, la mayoría de los broadcasts implícitos del sistema ya no pueden declararse estáticamente en el Manifest para evitar que decenas de apps se despierten a la vez ante eventos como cambios de red o batería."
  },
  {
    "question": "¿Por qué mover lógica de procesamiento pesada (como cálculos matemáticos o consultas a disco) dentro de onResume() es un grave antipatrón?",
    "options": [
      "Porque el sistema operativo revoca inmediatamente los certificados criptográficos HTTPS de las conexiones de red abiertas, provocando cierres inesperados por violaciones de seguridad en el hilo de la vista.",
      "Porque la base de datos Room aborta cualquier transacción pendiente arrojando una excepción TransactionAbortedException de forma irremediable, corrompiendo la caché de entidades en disco flash del teléfono.",
      "Porque esos callbacks se ejecutan en el Hilo Principal (Main Thread), y cualquier bloqueo superior a unos pocos milisegundos congela la renderización visual provocando el temido diálogo ANR (Application Not Responding).",
      "Porque el recolector de basura suspende indefinidamente la ejecución de los servicios en segundo plano gestionados por WorkManager, degradando severamente el ciclo de procesamiento y la batería del terminal."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Porque esos callbacks se ejecutan en el Hilo Principal (Main Thread), y cualquier bloqueo superior a unos pocos milisegundos congela la renderización visual provocando el temido diálogo ANR (Application Not Responding). Todos los callbacks del ciclo de vida se ejecutan en el hilo principal (UI thread). Si se ejecuta código pesado ahí, la UI no puede responder a toques ni renderizar a 60/120 fps, arrojando el error ANR al superar 5 segundos de bloqueo."
  },
  {
    "question": "Al rotar el dispositivo en un formulario que utiliza solo remember { mutableStateOf(\"\") }, ¿qué ocurre con el texto ingresado y cuál es la causa?",
    "options": [
      "El texto se conserva intacto, porque el compilador K2 vincula automáticamente las variables mutables a la memoria física de la aplicación sin requerir empaquetamiento en Bundles.",
      "El texto se duplica en la pantalla, porque la recomposición ejecuta dos veces la función Composable sobre el mismo árbol de composición al cambiar las dimensiones de la ventana.",
      "El texto se bloquea en modo solo lectura, porque el runtime de Compose suspende las entradas táctiles hasta recibir un nuevo evento de composición emitido por el sistema operativo.",
      "El texto se borra por completo, porque la Activity es destruida y recreada, provocando que remember descarte su instancia en memoria heap al no persistir en el Bundle."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: El texto se borra por completo, porque la Activity es destruida y recreada, provocando que remember descarte su instancia en memoria heap al no persistir en el Bundle. remember solo retiene el estado durante las recomposiciones ordinarias. Al rotar, la Activity se destruye por completo y el valor en memoria heap se pierde. Para conservarlo se debe usar rememberSaveable."
  },
  {
    "question": "Al implementar una estrategia de persistencia robusta de formularios frente a rotaciones y recreaciones del sistema, ¿qué combinación de herramientas entre Compose y ViewModel es la recomendada?",
    "options": [
      "ViewModel + SavedStateHandle (o rememberSaveable en UI) para retención de estado, complementado con Room o DataStore para el guardado automático de borradores.",
      "Variables globales estáticas en memoria heap combinadas con escrituras síncronas bloqueantes sobre archivos temporales de SharedPreferences en disco.",
      "La API retain para campos de texto planos asociada a ejecuciones en segundo plano gestionadas mediante tareas asíncronas tradicionales AsyncTask.",
      "El callback onDestroy() para escribir físicamente cadenas de texto no estructuradas en el almacenamiento raíz del sistema operativo móvil local."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: ViewModel + SavedStateHandle (o rememberSaveable en UI) para retención de estado, complementado con Room o DataStore para el guardado automático de borradores. La arquitectura profesional combina niveles: rememberSaveable/SavedStateHandle salvan datos temporales ante rotación y muerte de proceso, mientras Room/DataStore persisten borradores permanentes en disco."
  },
  {
    "question": "Al gestionar la retención del estado en Jetpack Compose bajo Android 16, ¿cuál es el criterio técnico para elegir entre \"rememberSaveable\" y la API \"retain\"?",
    "options": [
      "Usar retain para tipos numéricos básicos y cadenas cortas en orientación horizontal; y rememberSaveable para listas complejas y estados de navegación jerárquica en pantallas verticales.",
      "Usar rememberSaveable para inputs de UI simples y serializables (textos, scroll position, selección de pestañas); y retain para objetos pesados no serializables (reproductores, grafos, bitmaps).",
      "Usar rememberSaveable exclusivamente para sincronizaciones reactivas con bases de datos Room; y retain únicamente para el intercambio dinámico de intenciones entre diferentes aplicaciones del sistema.",
      "Usar retain para llamadas asíncronas de corta duración mediante Retrofit; y rememberSaveable para almacenar credenciales confidenciales de autenticación en segundo plano mediante DataStore cifrado."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Usar rememberSaveable para inputs de UI simples y serializables (textos, scroll position, selección de pestañas); y retain para objetos pesados no serializables (reproductores, grafos, bitmaps). rememberSaveable requiere serialización en Bundle (limitado a ~1MB y propenso a TransactionTooLargeException); retain mantiene objetos pesados en memoria RAM sin serializar durante la rotación."
  },
  {
    "question": "Al analizar la arquitectura de tres capas, ¿por qué la capa de UI NO debe comunicarse directamente con los orígenes de datos (Room / Retrofit) saltándose los Repositorios?",
    "options": [
      "Porque el compilador K2 genera un error fatal de dependencias circulares que impide la exportación del archivo APK para producción, forzando la creación de interfaces intermedias en cada vista.",
      "Porque el sistema Android restringe las peticiones de red y accesos a disco únicamente a clases que hereden explícitamente de la interfaz ContentProvider para proteger la privacidad del usuario.",
      "Porque acopla rígidamente la vista a la implementación técnica del almacenamiento, destruyendo la modularidad, impidiendo el testeo unitario y violando el principio de separación de responsabilidades.",
      "Porque los componentes gráficos de Compose requieren que todas las respuestas de datos se encuentren obligatoriamente en formato XML tradicional antes de poder insertarse en el árbol compositivo."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Porque acopla rígidamente la vista a la implementación técnica del almacenamiento, destruyendo la modularidad, impidiendo el testeo unitario y violando el principio de separación de responsabilidades. La UI no debe conocer si los datos vienen de caché local (Room) o de internet (Retrofit). El Repositorio abstrae esto, permitiendo cambiar la base de datos o el backend sin alterar una sola línea de código visual."
  },
  {
    "question": "En el ciclo de vida de una Activity, ¿en qué estado se encuentra la Activity durante el lapso de tiempo en que un diálogo modal semitransparente ocupe parte de la pantalla?",
    "options": [
      "En estado Detenido (onStop)",
      "En estado Reiniciado (onRestart)",
      "En estado Destruido (onDestroy)",
      "En estado Pausado (onPause)"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: En estado Pausado (onPause). Si una ventana pierde el foco pero sigue siendo visible (como cuando se abre un diálogo modal semitransparente o en modo multi-ventana sin tener el foco activo), la Activity pasa a onPause(), no a onStop()."
  },
  {
    "question": "¿Cuál de los siguientes escenarios provoca que una Activity pase por onPause() y luego onStop(), sin pasar inmediatamente por onDestroy()?",
    "options": [
      "El usuario presiona el botón Home o cambia a otra aplicación mediante el selector de tareas recientes.",
      "El desarrollador invoca explícitamente el método finish() desde el controlador del botón de salida de la pantalla.",
      "El usuario rota físicamente el teléfono noventa grados forzando una reconstrucción completa de la ventana gráfica.",
      "El sistema operativo liquida instantáneamente el proceso de la aplicación por una escasez crítica de memoria RAM."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: El usuario presiona el botón Home o cambia a otra aplicación mediante el selector de tareas recientes. Al presionar Home o cambiar de app, la Activity pasa a segundo plano: pierde el foco (onPause) y deja de verse (onStop), pero permanece en memoria RAM en espera de que el usuario regrese."
  },
  {
    "question": "Cuando una Activity detenida en segundo plano (onStop) es reabierta por el usuario, ¿cuál es la secuencia exacta de callbacks que se ejecutan hasta volver a la interactividad?",
    "options": [
      "onCreate() ➔ onStart() ➔ onResume()",
      "onRestart() ➔ onStart() ➔ onResume()",
      "onStart() ➔ onResume() ➔ onRestart()",
      "onResume() ➔ onStart() ➔ onRestoreInstanceState()"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: onRestart() ➔ onStart() ➔ onResume(). Una Activity que estaba en segundo plano (Stopped) no vuelve a pasar por onCreate(); reingresa ejecutando onRestart() ➔ onStart() (se hace visible) ➔ onResume() (recupera el foco interactivo)."
  },
  {
    "question": "¿Por qué un ViewModel ordinario NO puede prevenir la pérdida de datos cuando el usuario cierra deliberadamente la app barriéndola del menú de tareas recientes?",
    "options": [
      "Porque el sistema operativo purga automáticamente los ViewModels de la memoria heap cada quince minutos de inactividad, obligando a persistir cada cambio en servicios web remotos de Google Cloud.",
      "Porque los ViewModels requieren obligatoriamente una conexión Wi-Fi activa para sincronizar sus propiedades con el servidor, bloqueando la lectura local de datos al activarse el modo avión.",
      "Porque el ViewModel solo vive mientras dure el scope de ciclo de vida de la tarea; al descartar deliberadamente la app, el proceso y su memoria son terminados definitivamente por voluntad del usuario.",
      "Porque el compilador de Kotlin inhabilita la reactividad de los StateFlows cuando la aplicación abandona el primer plano de pantalla, perdiendo el enlace con el árbol de funciones composables."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Porque el ViewModel solo vive mientras dure el scope de ciclo de vida de la tarea; al descartar deliberadamente la app, el proceso y su memoria son terminados definitivamente por voluntad del usuario. El ViewModel gestiona el estado en memoria para cambios de configuración y navegación. Si el usuario descarta intencionalmente la aplicación, su ciclo de vida concluye y el ViewModel se destruye."
  },
  {
    "question": "¿Qué representa el estado 'Top Resumed' introducido en las directrices de eficiencia y multi-ventana de Android?",
    "options": [
      "La Activity que mantiene la mayor asignación de memoria heap y procesa corrutinas prioritarias en segundo plano, recibiendo privilegios especiales de hardware para optimizar el consumo de batería de la CPU del terminal.",
      "La clase base de la cual deben descender jerárquicamente todos los componentes composables reactivos en API 36, garantizando la compatibilidad con el nuevo estándar de renderizado gráfico de Skia en la interfaz.",
      "Un entorno virtualizado exclusivo para perfiles de pruebas unitarias que simula ejecuciones concurrentes de hardware en emulador, verificando que los hilos de interfaz gráfica no superen su cuota de memoria en pantalla.",
      "La única Activity con la que el usuario está interactuando activamente en el momento presente, especialmente crítica en entornos multi-ventana o pantallas plegables donde múltiples pantallas son visibles pero solo una es interactiva."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: La única Activity con la que el usuario está interactuando activamente en el momento presente, especialmente crítica en entornos multi-ventana o pantallas plegables donde múltiples pantallas son visibles pero solo una es interactiva. En multi-ventana o pantallas plegables varias apps pueden estar en onResume() (visibles y reanudadas), pero solo una tiene el foco activo del usuario: esa es la 'Top Resumed'."
  },
  {
    "question": "Al evaluar la arquitectura de componentes efímeros en Android, ¿qué premisa fundamental debe guiar el diseño del desarrollador móvil respecto al ciclo de vida?",
    "options": [
      "Que el desarrollador debe asumir que los componentes visuales son descartables en cualquier segundo y diseñar la app de modo que la experiencia del usuario sea inmune a la destrucción del entorno.",
      "Que el desarrollador debe implementar servicios infinitos en primer plano para asegurar que la Activity nunca sea eliminada de la memoria RAM del teléfono móvil en ningún momento.",
      "Que el ciclo de vida de las Activities será reemplazado en versiones futuras por un modelo monohilo idéntico a las aplicaciones de terminal en sistemas operativos Linux embebidos.",
      "Que la persistencia de datos debe ser delegada exclusivamente en la red remota, omitiendo cualquier mecanismo de serialización en el dispositivo móvil y descartando Room o DataStore."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Que el desarrollador debe asumir que los componentes visuales son descartables en cualquier segundo y diseñar la app de modo que la experiencia del usuario sea inmune a la destrucción del entorno. 'Las apps modernas son ecosistemas de componentes efímeros'. El desarrollador profesional diseña interfaces desacopladas cuya UX no se rompe ni se reinicia cuando el SO destruye y recrea la vista."
  },
  {
    "question": "¿Cuál es la función del método setContentView() en el paradigma clásico de Activities frente al bloque setContent {} en Jetpack Compose?",
    "options": [
      "setContentView() conecta la base de datos relacional Room; setContent {} inicializa los receptores globales de eventos del hardware y servicios en segundo plano.",
      "setContentView() infla un archivo XML estático en un árbol de objetos View; setContent {} establece una función Composable como la raíz compositiva de la interfaz de usuario.",
      "setContentView() gestiona la persistencia en disco de DataStore; setContent {} compila los estilos gráficos hacia código máquina nativo para la pantalla del móvil.",
      "setContentView() se invoca de manera obligatoria en onResume(); setContent {} se ejecuta de forma asíncrona dentro de onDestroy() al culminar la Activity."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: setContentView() infla un archivo XML estático en un árbol de objetos View; setContent {} establece una función Composable como la raíz compositiva de la interfaz de usuario. setContentView() inflaba jerarquías imperativas de Views desde archivos XML; setContent {} define el CompositionContext donde vive el árbol de funciones reactivas de Jetpack Compose."
  },
  {
    "question": "¿Qué consecuencia directa tiene una fuga de memoria provocada por no desregistrar un listener de sensores pesados en onStop()?",
    "options": [
      "El hardware del dispositivo suspende la alimentación eléctrica del acelerómetro desactivando la orientación automática y forzando a la app a reiniciarse de forma imprevista.",
      "El compilador K2 emite una advertencia crítica durante la siguiente compilación impidiendo la generación del bundle AAB para su distribución oficial en Google Play Store.",
      "La instancia de la Activity destruida queda retenida en la memoria heap por el SensorManager impidiendo que el Garbage Collector la recolecte, drenando batería y provocando un OutOfMemoryError.",
      "El entorno de ejecución cambia automáticamente el tema gráfico de la interfaz a modo de alto contraste para alertar al usuario sobre un uso indebido de recursos del sistema."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: La instancia de la Activity destruida queda retenida en la memoria heap por el SensorManager impidiendo que el Garbage Collector la recolecte, drenando batería y provocando un OutOfMemoryError. Si no se libera el listener en onStop(), el gestor del sistema (SensorManager) mantendrá una referencia viva a la Activity destruida, provocando fugas de memoria y eventuales cuelgues por OutOfMemoryError."
  },
  {
    "question": "En una prueba de rotación de pantalla, si un contador implementado dentro de un ViewModel se reinicia a cero al rotar el teléfono, ¿cuál es la causa del error?",
    "options": [
      "El sensor giroscópico del teléfono no cuenta con las etiquetas de permiso declaradas dentro del archivo AndroidManifest.xml para monitorear la rotación del dispositivo.",
      "El runtime de Android ART no soporta la ejecución de StateFlows reactivos en dispositivos configurados con orientación apaisada bajo las directrices de la API 36.",
      "El sistema operativo tiene habilitado el modo de ahorro estricto de batería, restringiendo la asignación de memoria a los hilos de UI durante el cambio de orientación.",
      "El ViewModel fue instanciado manualmente en el cuerpo de la Activity con 'val vm = MyViewModel()' en lugar de delegar su ciclo de vida al sistema con 'by viewModels()'."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: El ViewModel fue instanciado manualmente en el cuerpo de la Activity con 'val vm = MyViewModel()' en lugar de delegar su ciclo de vida al sistema con 'by viewModels()'. Si se crea el ViewModel llamando a su constructor (MyViewModel()), se crea una nueva instancia en cada recreación; la delegación 'by viewModels()' vincula la instancia al ViewModelStoreOwner para que sobreviva a la rotación."
  },
  {
    "question": "¿Cuál es la jerarquía de llamadas que se ejecuta cuando el usuario presiona el botón físico/gestual de retroceso y la Activity se cierra definitivamente?",
    "options": [
      "onPause() ➔ onStop() ➔ onDestroy()",
      "onStop() ➔ onPause() ➔ onDestroy()",
      "onDestroy() ➔ onPause() ➔ onStop()",
      "onRestart() ➔ onStop() ➔ onDestroy()"
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: onPause() ➔ onStop() ➔ onDestroy(). Al salir definitivamente de la Activity, la degradación pasa ordenadamente por: onPause() (pierde el foco) ➔ onStop() (deja de ser visible) ➔ onDestroy() (limpieza final y liberación del componente)."
  }
];
