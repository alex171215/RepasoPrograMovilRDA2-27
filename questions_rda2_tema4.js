// ============================================================
// BANCO DE PREGUNTAS — RDA2 questionsRDA2Tema4
// Formato y Distribución Equilibrada: Prof. Juan Francisco Chafla
// Adaptado rigurosamente al estilo de evaluación del docente
// ============================================================

const questionsRDA2Tema4 = [
  {
    "question": "¿Por qué la evolución de los sistemas operativos móviles modernos ha transformado la noción de aplicación, pasando de un 'ejecutable lineal' a un ecosistema de 'componentes efímeros y reactivos'?",
    "options": [
      "Porque el sistema operativo debe gestionar recursos limitados de forma dinámica, pudiendo destruir y recrear componentes en cualquier instante por presión de memoria RAM o cambios de configuración del entorno (rotación, multiwindow).",
      "Porque el compilador K2 divide el código binario en micro-hilos independientes que se ejecutan en servidores remotos de Google.",
      "Porque la máquina virtual ART descarta periódicamente las clases compiladas en Ahead-Of-Time para evitar el recalentamiento de la CPU.",
      "Porque las directrices de Material Design 3 exigen que las pantallas no permanezcan en memoria más de diez segundos sin interacción."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Porque el sistema operativo debe gestionar recursos limitados de forma dinámica, pudiendo destruir y recrear componentes en cualquier instante por presión de memoria RAM o cambios de configuración del entorno (rotación, multiwindow). Las apps móviles ya no son programas lineales que controlan su propio ciclo de vida de inicio a fin; son ecosistemas reactivos donde el SO puede destruir y recrear componentes en respuesta a condiciones externas como falta de RAM o cambios de configuración (rotación, multi-ventana)."
  },
  {
    "question": "¿Cuál es la responsabilidad principal y mandatoria del callback onCreate() en el ciclo de vida de una Activity?",
    "options": [
      "Reanudar animaciones pesadas, sensores de giroscopio y conexiones activas de Bluetooth.",
      "Inicializar la arquitectura básica del componente, instanciar el ViewModel y configurar la interfaz de usuario mediante setContentView() o setContent {} en Jetpack Compose.",
      "Ejecutar operaciones de entrada/salida a base de datos Room bloqueando el hilo principal hasta completar la carga.",
      "Registrar receptores globales de BroadcastReceiver para escuchar eventos del sistema operativo."
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
    "feedback": "La respuesta correcta es: onResume(). sitúa a la Activity en el estado 'Resumed' o interactivo, donde el usuario tiene el foco completo para interactuar con botones, gestos y entradas de texto."
  },
  {
    "question": "¿Por qué el profesor y las guías de Android advierten rigurosamente que las operaciones en onPause() deben ser ultra ligeras y no bloquear la UI?",
    "options": [
      "Porque el Garbage Collector de ART suspende el recolector de basura si un método tarda más de 5 milisegundos.",
      "Porque Android 16 apaga el chip de memoria RAM de forma inmediata al entrar en pausa.",
      "Porque el kernel de Linux revoca los permisos de internet de la aplicación si detecta operaciones de entrada/salida en este estado.",
      "Porque la siguiente Activity no puede iniciar su transición visual hasta que el callback onPause() de la Activity actual haya terminado de ejecutarse."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Porque la siguiente Activity no puede iniciar su transición visual hasta que el callback onPause() de la Activity actual haya terminado de ejecutarse. onPause() bloquea la transición de la pantalla entrante. Por eso solo debe contener operaciones mínimas y rápidas; cualquier tarea pesada provocará parpadeos y retrasos perceptibles en la UX."
  },
  {
    "question": "En las buenas prácticas de arquitectura, ¿cuál es la diferencia de responsabilidad clave entre onPause() y onStop() al liberar recursos?",
    "options": [
      "onPause() realiza operaciones ligeras y guardado rápido de estado; onStop() libera los recursos pesados como GPS, sensores continuos, hilos secundarios o conexiones de red.",
      "onPause() libera la base de datos Room; onStop() limpia las variables primitivas de Kotlin.",
      "onPause() destruye el árbol de Compose; onStop() reinicia el proceso del sistema operativo.",
      "onPause() es exclusivo para modo multi-ventana; onStop() solo se invoca cuando el usuario apaga físicamente el teléfono."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: onPause() realiza operaciones ligeras y guardado rápido de estado; onStop() libera los recursos pesados como GPS, sensores continuos, hilos secundarios o conexiones de red. onPause() debe ser breve (ej. pausar un video o guardar un borrador veloz); onStop() se ejecuta cuando la pantalla ya no es visible para el usuario, siendo el momento oportuno para desregistrar GPS, sensores y liberar conexiones pesadas."
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
    "feedback": "La respuesta correcta es: En onStop(). La regla de oro del ciclo de vida exige simetría: los recursos que se adquieren en onStart() se liberan en onStop(), mientras que los adquiridos en onResume() se liberan en onPause()."
  },
  {
    "question": "Ante una 'Muerte de Proceso' (Process Death) forzada por el sistema operativo debido a escasez de memoria RAM, ¿cuál es el comportamiento del ViewModel tradicional y qué herramienta es obligatoria para recuperar el estado?",
    "options": [
      "El ViewModel sobrevive en la memoria swap del kernel y restaura los datos automáticamente mediante reflexión.",
      "El compilador K2 genera un clon inmutable del ViewModel en el almacenamiento flash de Room sin intervención del programador.",
      "El ViewModel se destruye junto con todo el proceso; es obligatorio usar SavedStateHandle inyectado en el ViewModel para persistir y restaurar el estado desde el Bundle del sistema.",
      "El ViewModel pierde únicamente las funciones suspendidas, manteniendo las variables de tipo LiveData intactas."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: El ViewModel se destruye junto con todo el proceso; es obligatorio usar SavedStateHandle inyectado en el ViewModel para persistir y restaurar el estado desde el Bundle del sistema. El ViewModel sobrevive a cambios de configuración (rotación), pero NO sobrevive a la muerte del proceso (Process Death). Para sobrevivir al Process Death es mandatorio utilizar SavedStateHandle."
  },
  {
    "question": "¿Cuál es la limitación fundamental de remember en Jetpack Compose que obliga a utilizar rememberSaveable para formularios y entradas de usuario?",
    "options": [
      "remember no admite tipos primitivos como Int o String; solo admite listas mutables.",
      "remember bloquea la navegación declarativa impidiendo el retroceso con el botón Atrás.",
      "remember consume el 100% de la cuota del hilo de renderizado Skia si se usa más de tres veces.",
      "remember retiene el estado únicamente durante las recomposiciones en memoria; ante un cambio de configuración (como rotar la pantalla), la Activity se destruye y el valor de remember se pierde."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: remember retiene el estado únicamente durante las recomposiciones en memoria; ante un cambio de configuración (como rotar la pantalla), la Activity se destruye y el valor de remember se pierde. remember solo vive en el árbol de composición durante recomposiciones. Al rotar la pantalla, la Activity anfitriona se recrea y remember se reinicia; rememberSaveable guarda el dato en el Bundle del sistema permitiendo que sobreviva."
  },
  {
    "question": "En Android 16 (API 36), ¿cuál es la innovación introducida por la API retain en la gestión de estado de Jetpack Compose?",
    "options": [
      "Permite retener en memoria objetos pesados no serializables (como instancias de ExoPlayer, Bitmaps grandes o grafos complejos) a través de la rotación de pantalla, sin requerir empaquetamiento en un Bundle.",
      "Permite guardar automáticamente todas las llamadas de red en una base de datos SQLite sin declarar entidades.",
      "Obliga al recolector de basura a congelar la memoria heap durante un máximo de dos horas.",
      "Elimina la necesidad de utilizar ViewModels en proyectos multiplataforma KMP."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Permite retener en memoria objetos pesados no serializables (como instancias de ExoPlayer, Bitmaps grandes o grafos complejos) a través de la rotación de pantalla, sin requerir empaquetamiento en un Bundle. La API retain de API 36 está diseñada específicamente para retener en memoria objetos pesados que no son serializables (Bitmaps, reproductores multimedia, grafos) durante cambios de configuración, evitando recargas costosas."
  },
  {
    "question": "En la arquitectura de tres capas recomendada por Google (UI / Domain / Data), ¿cuál es la responsabilidad exclusiva de la capa de Dominio (Domain Layer)?",
    "options": [
      "Renderizar botones, textos y listas utilizando Jetpack Compose.",
      "Encapsular la lógica de negocio pura y compleja mediante Casos de Uso (Use Cases), haciéndola reutilizable e independiente de frameworks de UI o bases de datos.",
      "Consumir directamente endpoints HTTP utilizando Retrofit y deserializar respuestas JSON.",
      "Controlar la rotación de la pantalla e interactuar con el WindowManager de Android."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Encapsular la lógica de negocio pura y compleja mediante Casos de Uso (Use Cases), haciéndola reutilizable e independiente de frameworks de UI o bases de datos. La Domain Layer contiene los Casos de Uso (Use Cases). Es lógica de negocio pura de Kotlin, no depende de la UI ni de detalles de persistencia, lo que facilita el testing unitario y la reutilización."
  },
  {
    "question": "En la arquitectura oficial de Google, ¿cuál es la función de la Capa de Datos (Data Layer) y qué componentes la integran?",
    "options": [
      "Transformar eventos de pulsación del usuario en animaciones de Material Design 3.",
      "Supervisar el ciclo de vida de los Fragments y coordinar la pila de navegación hacia atrás.",
      "Actuar como el cimiento de la aplicación gestionando la obtención, persistencia física y sincronización de datos mediante Repositorios, APIs remotas y bases de datos locales (Room / DataStore).",
      "Generar el bytecode intermedio de la máquina virtual ART mediante el compilador K2."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Actuar como el cimiento de la aplicación gestionando la obtención, persistencia física y sincronización de datos mediante Repositorios, APIs remotas y bases de datos locales (Room / DataStore). La Data Layer es el cimiento de la app. Expone datos limpios a través de Repositorios, combinando fuentes remotas (APIs) y locales (Room/DataStore) mediante flujos reactivos."
  },
  {
    "question": "¿Cuáles son los \"Cuatro Pilares\" o componentes fundamentales sobre los que se estructura el sistema operativo Android?",
    "options": [
      "Scaffold, TopAppBar, NavHost y BottomBar.",
      "ViewModel, LiveData, Room y Compose.",
      "Kernel, ART, Binder e Intent.",
      "Activity, Service, BroadcastReceiver y ContentProvider."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Activity, Service, BroadcastReceiver y ContentProvider. Los cuatro pilares clásicos sobre los que se sustenta el sistema Android son: Activity (UI), Service (fondo), BroadcastReceiver (eventos globales) y ContentProvider (compartición de datos)."
  },
  {
    "question": "Dentro de los cuatro pilares de Android, ¿qué componente facilita la compartición segura de datos entre diferentes aplicaciones mediante contratos estructurados?",
    "options": [
      "ContentProvider",
      "BroadcastReceiver",
      "Service",
      "Intent Filter"
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: ContentProvider. encapsula datos y los ofrece a otras aplicaciones de forma segura y controlada (por ejemplo, el proveedor del sistema para la agenda de contactos o fotos)."
  },
  {
    "question": "En la comparación arquitectónica entre Android e iOS, ¿cuál es el análogo directo en el UIViewController de iOS para el método onCreate() de una Activity de Android?",
    "options": [
      "viewWillAppear()",
      "viewDidLoad()",
      "viewDidAppear()",
      "deinit"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: viewDidLoad(). En iOS, viewDidLoad() es el punto donde la vista se ha cargado en memoria por primera vez y se configuran las dependencias iniciales, exactamente como onCreate() en Android."
  },
  {
    "question": "En la comparativa de ciclo de vida entre Android (Activity) y iOS (UIViewController), ¿a qué método de iOS corresponde la etapa de visibilidad onStart() de Android?",
    "options": [
      "viewDidLoad()",
      "viewDidAppear()",
      "viewWillAppear()",
      "viewWillDisappear()"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: viewWillAppear(). onStart() hace visible la Activity antes de ser interactiva; en iOS, viewWillAppear() se invoca justo antes de que la vista sea visible en pantalla."
  },
  {
    "question": "En la comparativa de ciclo de vida entre Android e iOS, ¿cuál es el método de UIViewController correspondiente al estado de interactividad plena onResume() de Android?",
    "options": [
      "viewWillAppear()",
      "deinit",
      "viewDidLoad()",
      "viewDidAppear()"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: viewDidAppear(). onResume() en Android corresponde a viewDidAppear() en iOS: la pantalla no solo es visible sino que el usuario puede interactuar plenamente con ella."
  },
  {
    "question": "¿Cuál es la diferencia práctica fundamental entre el callback onDestroy() de Android y el método deinit de iOS?",
    "options": [
      "onDestroy() es un evento de ciclo de vida emitido por el SO Android cuando la Activity culmina o es recreada; deinit en Swift es el desinicializador de ARC cuando el contador de referencias del objeto llega a cero.",
      "onDestroy() es llamado automáticamente por el Garbage Collector; deinit lo invoca el usuario desde la UI.",
      "onDestroy() borra la base de datos de la app; deinit solo borra los archivos temporales de caché.",
      "No existe ninguna diferencia; son idénticos en implementación y ejecución a nivel de kernel."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: onDestroy() es un evento de ciclo de vida emitido por el SO Android cuando la Activity culmina o es recreada; deinit en Swift es el desinicializador de ARC cuando el contador de referencias del objeto llega a cero. onDestroy() es un callback del framework del SO cuando la interfaz se destruye; deinit es un mecanismo nativo de memoria en Swift ejecutado por ARC (Automatic Reference Counting) cuando un objeto ya no tiene referencias vivas."
  },
  {
    "question": "En Android 16 (API 36), ¿qué innovación elimina el uso tradicional de onBackPressed() en favor de una experiencia fluida basada en gestos?",
    "options": [
      "System Intent Sniffer, que redirige todos los eventos táctiles directamente al kernel Linux.",
      "Predictive Back (retroceso predictivo), obligando a migrar hacia OnBackInvokedDispatcher.",
      "Gestural ART Bypass, que elimina el Back Stack de la pila de memoria.",
      "Navigation Flow Controller, que sustituye a las Activities por Services."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Predictive Back (retroceso predictivo), obligando a migrar hacia OnBackInvokedDispatcher. Predictive Back permite al usuario previsualizar la pantalla anterior antes de soltar el gesto. API 36 declara obsoleto onBackPressed() y exige OnBackInvokedDispatcher."
  },
  {
    "question": "¿Cómo impacta la innovación de 'Eficiencia Energética' de Android 16 en la prioridad de ejecución de las tareas en segundo plano (Jobs)?",
    "options": [
      "Desactiva las antenas 5G del dispositivo cada vez que la app entra en onStop().",
      "Cancela de forma permanente todas las corrutinas que lleven más de 30 segundos activas.",
      "Asigna cuotas de ejecución dinámicas a los Jobs, otorgando mayor prioridad y cuota de procesamiento mientras la aplicación se encuentra en estado 'Top Resumed' (interactiva en primer plano).",
      "Bloquea la compilación de aplicaciones que no utilicen algoritmos de compresión de batería."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Asigna cuotas de ejecución dinámicas a los Jobs, otorgando mayor prioridad y cuota de procesamiento mientras la aplicación se encuentra en estado 'Top Resumed' (interactiva en primer plano). En Android 16 las cuotas de ejecución son dinámicas: las apps que están en estado Top Resumed reciben máxima cuota y prioridad, mientras que en segundo plano sufren severas restricciones."
  },
  {
    "question": "En la práctica del laboratorio sobre 'Muerte del Proceso' (Process Death), ¿qué ajuste de las Opciones de Desarrollador del dispositivo se activa para simular la recolección agresiva de memoria del SO?",
    "options": [
      "Forzar aceleración por GPU",
      "Límite de procesos en segundo plano a 10",
      "Depuración USB por Wi-Fi",
      "No mantener actividades ('Don't keep activities')"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: No mantener actividades ('Don't keep activities'). Activar 'Don't keep activities' (No mantener actividades) fuerza al SO a destruir la Activity en cuanto el usuario sale de ella, permitiendo comprobar si SavedStateHandle restaura correctamente el estado."
  },
  {
    "question": "Al implementar SavedStateHandle en un ViewModel, ¿cuál es el snippet idiomático para exponer un valor como StateFlow reactivo y cómo se actualiza?",
    "options": [
      "val userId = state.getStateFlow('user_id', 'default'); state['user_id'] = newId",
      "val userId = state.getLiveData(); state.put('user_id', newId)",
      "val userId = rememberSaveable { state.getString('user_id') }; state.save(newId)",
      "val userId = state.asFlow(); state.commit('user_id', newId)"
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: val userId = state.getStateFlow('user_id', 'default'); state['user_id'] = newId. Según el snippet del Tema 4: state.getStateFlow('user_id', 'default') genera un StateFlow reactivo respaldado por el SavedStateHandle, y la actualización se realiza mediante asignación de índice: state['user_id'] = newId."
  },
  {
    "question": "¿Cuál es la forma recomendada en código para observar el ciclo de vida de una pantalla sin acoplar la lógica dentro de la propia Activity?",
    "options": [
      "Sobrescribir el método finalize() de la clase Object de Java.",
      "Implementar la interfaz DefaultLifecycleObserver (ej. override fun onResume(owner: LifecycleOwner)) y vincularla con lifecycle.addObserver().",
      "Crear un hilo infinito de Kotlin que consulte periódicamente el estado de la ventana en el WindowManager.",
      "Usar un bloque try-catch dentro de la función setContent {}."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Implementar la interfaz DefaultLifecycleObserver (ej. override fun onResume(owner: LifecycleOwner)) y vincularla con lifecycle.addObserver(). La arquitectura moderna utiliza DefaultLifecycleObserver (mostrada en la slide 16) para que clases externas puedan reaccionar a eventos del ciclo de vida limpiamente sin contaminar la Activity."
  },
  {
    "question": "Para datos que deben sobrevivir a la desinstalación de la app o a reinicios completos del dispositivo físico, ¿qué herramienta de la arquitectura es la indicada?",
    "options": [
      "rememberSaveable",
      "ViewModel con SavedStateHandle",
      "Persistencia física definitiva mediante Room (base de datos local) o DataStore",
      "La API retain de Android 16"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Persistencia física definitiva mediante Room (base de datos local) o DataStore. Las herramientas en memoria o en Bundle (ViewModel, SavedStateHandle, retain) solo viven durante el ciclo de vida de la aplicación. Para datos críticos y permanentes se requiere persistencia en disco: Room o DataStore."
  },
  {
    "question": "¿Cuál es la \"Regla de Oro\" en el diseño de interfaces móviles modernas respecto a la \"Fuente Única de la Verdad\" (Single Source of Truth)?",
    "options": [
      "La UI debe almacenar los datos en variables globales para que cualquier Composable pueda editarlos.",
      "Las peticiones de red deben ejecutarse siempre en el hilo principal para evitar asincronía.",
      "Cada botón debe tener su propia base de datos SQLite integrada para máxima velocidad.",
      "La interfaz de usuario (UI) debe derivarse siempre de modelos de datos persistentes y flujos reactivos, nunca ser la dueña del estado."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: La interfaz de usuario (UI) debe derivarse siempre de modelos de datos persistentes y flujos reactivos, nunca ser la dueña del estado. 'La UI debe derivarse siempre de modelos de datos persistentes'. La vista es una representación visual pasajera; la fuente de la verdad reside en el repositorio y la capa de datos."
  },
  {
    "question": "¿Cuál es la función del callback onRestart() en el ciclo de vida de una Activity?",
    "options": [
      "Indicar que la Activity estaba detenida (en estado Stopped tras onStop) y está a punto de volver a iniciarse hacia onStart().",
      "Reiniciar los contadores de batería y CPU del sistema operativo.",
      "Borrar la memoria caché generada por Jetpack Compose antes de recomponer.",
      "Cerrar las conexiones activas con bases de datos Room."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Indicar que la Activity estaba detenida (en estado Stopped tras onStop) y está a punto de volver a iniciarse hacia onStart(). onRestart() es el callback de transición intermedio que se invoca únicamente cuando una Activity que ya había pasado por onStop() vuelve a ser llamada al frente antes de ejecutar onStart()."
  },
  {
    "question": "En el contexto de los cambios de configuración (ej. rotación de pantalla), ¿por qué Android destruye y recrea la Activity por defecto en lugar de simplemente redibujarla?",
    "options": [
      "Porque el compilador de Kotlin pierde el mapeo de punteros de memoria durante el giro físico del sensor.",
      "Para permitir que la aplicación recargue automáticamente los recursos alternativos más apropiados (layouts para orientación horizontal, drawables específicos, densidades de pantalla, idioma o tema).",
      "Porque la máquina virtual ART necesita vaciar el Garbage Collector obligatoriamente cada 90 grados de giro.",
      "Para forzar al usuario a iniciar sesión nuevamente como medida de seguridad biométrica."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Para permitir que la aplicación recargue automáticamente los recursos alternativos más apropiados (layouts para orientación horizontal, drawables específicos, densidades de pantalla, idioma o tema). El propósito fundamental de recrear la Activity es recargar los recursos más adecuados para la nueva configuración del dispositivo (ej. carpetas layout-land, values-night, etc.)."
  },
  {
    "question": "¿Qué riesgo severo ocurre si un desarrollador utiliza android:configChanges en el AndroidManifest.xml para evitar que el sistema recree su Activity ante una rotación?",
    "options": [
      "La aplicación deja de ser compatible con Android Runtime y no compila.",
      "El sistema operativo revoca los certificados de seguridad de Google Play Store.",
      "El desarrollador asume la responsabilidad manual de actualizar cada recurso, layout y configuración de UI, lo cual es propenso a inconsistencias visuales, fugas de memoria y fallas de accesibilidad.",
      "El dispositivo se reinicia automáticamente en modo de recuperación (Recovery)."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: El desarrollador asume la responsabilidad manual de actualizar cada recurso, layout y configuración de UI, lo cual es propenso a inconsistencias visuales, fugas de memoria y fallas de accesibilidad. Usar configChanges para eludir el ciclo de vida traslada toda la carga de adaptar recursos manualmente al programador, generando código frágil y desincronizaciones visuales."
  },
  {
    "question": "En la comparación entre Android (Activity) y iOS (UIViewController), ¿qué etapa del ciclo de vida engloba la ocultación del componente visual?",
    "options": [
      "Android: onResume() ⟷ iOS: viewWillAppear()",
      "Android: onDestroy() ⟷ iOS: viewDidLoad()",
      "Android: onStart() ⟷ iOS: deinit",
      "Android: onPause() / onStop() ⟷ iOS: viewWillDisappear() / viewDidDisappear()"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Android: onPause() / onStop() ⟷ iOS: viewWillDisappear() / viewDidDisappear(). La etapa de ocultación corresponde a onPause()/onStop() en Android, mientras que en iOS se maneja con la pareja viewWillDisappear()/viewDidDisappear()."
  },
  {
    "question": "Dentro de los cuatro pilares del sistema Android, ¿qué restricción crítica impone Android 16 (API 36) sobre el componente Service?",
    "options": [
      "Restricciones severas para iniciar servicios directamente desde segundo plano (background starts), forzando el uso de WorkManager o JobScheduler.",
      "Los Services no pueden comunicarse con bases de datos locales.",
      "Obliga a que todos los Services tengan una interfaz gráfica construida en Compose.",
      "Limita el tamaño del Service en memoria a un máximo estricto de 2 Kilobytes."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Restricciones severas para iniciar servicios directamente desde segundo plano (background starts), forzando el uso de WorkManager o JobScheduler. Como señala la slide 9, en API 36 los Services tienen severas restricciones para inicios desde segundo plano para proteger la batería y el rendimiento general del dispositivo."
  },
  {
    "question": "En los cuatro pilares de Android, ¿qué restricción impone API 36 sobre el BroadcastReceiver para garantizar la estabilidad del sistema?",
    "options": [
      "Elimina todos los receptores de eventos del sistema operativo.",
      "Limita las prioridades en anuncios globales (system broadcasts) para evitar que apps individuales saturen el hilo de eventos del SO.",
      "Exige que los BroadcastReceiver sean funciones suspendidas de corrutinas.",
      "Prohíbe escuchar eventos de cambio de batería o modo avión."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Limita las prioridades en anuncios globales (system broadcasts) para evitar que apps individuales saturen el hilo de eventos del SO. En API 36 se limitan las prioridades en los anuncios globales (broadcasts) para impedir que aplicaciones con alta prioridad monopolicen el despachador de eventos del sistema."
  },
  {
    "question": "¿Por qué mover lógica de procesamiento pesada (como cálculos matemáticos o consultas a red) a los callbacks de ciclo de vida de la UI (onCreate, onStart, onResume) es una pésima práctica arquitectónica?",
    "options": [
      "Porque las consultas a red se borran automáticamente al terminar el callback.",
      "Porque el compilador K2 no permite instanciar variables dentro de callbacks de ciclo de vida.",
      "Porque esos callbacks se ejecutan en el Hilo Principal (Main Thread), y cualquier bloqueo superior a unos pocos milisegundos congela la pantalla provocando lag o un error ANR (Application Not Responding).",
      "Porque el consumo de batería se duplica inmediatamente por culpa del sensor giroscópico."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Porque esos callbacks se ejecutan en el Hilo Principal (Main Thread), y cualquier bloqueo superior a unos pocos milisegundos congela la pantalla provocando lag o un error ANR (Application Not Responding). Todos los callbacks del ciclo de vida se ejecutan en el hilo principal (Main Thread). Saturarlos con lógica pesada degrada la tasa de refresco a menos de 60fps y causa ANRs."
  },
  {
    "question": "Al rotar el dispositivo en un formulario que utiliza solo remember { mutableStateOf(\"\") }, ¿qué le ocurre al texto ingresado por el usuario y por qué?",
    "options": [
      "El texto se conserva intacto porque remember guarda los datos en la memoria flash del teléfono.",
      "El texto se encripta con una clave temporal y requiere autenticación biométrica para reaparecer.",
      "El texto se transfiere automáticamente a la base de datos Room mediante el compilador de Compose.",
      "El texto se borra por completo, porque la Activity es destruida y recreada, provocando que la función Composable se ejecute desde cero con su valor inicial."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: El texto se borra por completo, porque la Activity es destruida y recreada, provocando que la función Composable se ejecute desde cero con su valor inicial. remember solo sobrevive a recomposiciones dentro de la misma instancia de Activity. Al rotar, la Activity se destruye por completo y remember se reinicializa a su valor por defecto vaciando el campo."
  },
  {
    "question": "Al implementar una estrategia de persistencia robusta de formularios frente a rotaciones y recreaciones del sistema, ¿qué combinación de herramientas entre Compose y ViewModel es la recomendada?",
    "options": [
      "ViewModel + SavedStateHandle (o rememberSaveable en UI) para retención de estado, complementado con Room o DataStore para el guardado automático de borradores.",
      "Variables globales estáticas + sharedPreferences síncronas.",
      "retain API para textos + AsyncTask en segundo plano.",
      "onDestroy() para escribir un archivo de texto en la carpeta raíz del sistema."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: ViewModel + SavedStateHandle (o rememberSaveable en UI) para retención de estado, complementado con Room o DataStore para el guardado automático de borradores. La estrategia recomendada une retención en memoria y Bundle (ViewModel con SavedStateHandle o rememberSaveable para inputs rápidos) y persistencia física (Room o DataStore para persistir borradores de forma duradera)."
  },
  {
    "question": "Al gestionar la retención del estado en Jetpack Compose bajo Android 16, ¿cuál es el criterio técnico para elegir entre \"rememberSaveable\" y la API \"retain\"?",
    "options": [
      "Usar retain para números enteros y rememberSaveable para cadenas de texto largas.",
      "Usar rememberSaveable para inputs de UI simples y serializables (textos, scroll position, selección de pestañas); y retain para objetos pesados no serializables (reproductores, grafos, bitmaps).",
      "Usar rememberSaveable únicamente en modo horizontal y retain únicamente en modo vertical.",
      "Usar retain para peticiones HTTP y rememberSaveable para la configuración de idioma."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Usar rememberSaveable para inputs de UI simples y serializables (textos, scroll position, selección de pestañas); y retain para objetos pesados no serializables (reproductores, grafos, bitmaps). rememberSaveable empaqueta datos livianos en un Bundle (textos, tabs, scroll); retain retiene en memoria de ejecución objetos pesados que no pueden ni deben serializarse."
  },
  {
    "question": "Al analizar la arquitectura de tres capas, ¿por qué la capa de UI NO debe comunicarse directamente con los orígenes de datos (Room / Retrofit) saltándose los Repositorios?",
    "options": [
      "Porque Room y Retrofit no pueden compilarse en el mismo archivo que una función Composable.",
      "Porque el sistema Android lanza una excepción SecurityException si una Activity abre un socket de red.",
      "Porque acopla rígidamente la vista a la implementación técnica del almacenamiento, destruyendo la modularidad, impidiendo el testeo unitario y violando el principio de separación de responsabilidades.",
      "Porque las interfaces de Compose solo aceptan datos en formato XML binario."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Porque acopla rígidamente la vista a la implementación técnica del almacenamiento, destruyendo la modularidad, impidiendo el testeo unitario y violando el principio de separación de responsabilidades. Saltar la capa de repositorios/dominio genera acoplamiento fuerte; si cambia la API o la base de datos, la UI se rompería. El repositorio abstrae y desacopla la fuente de los datos."
  },
  {
    "question": "En el ciclo de vida de una Activity, ¿en qué estado se encuentra la Activity durante el lapso de tiempo en que un diálogo modal semitransparente ocupe parte de la pantalla?",
    "options": [
      "En estado Stopped (onStop)",
      "En estado Restarted (onRestart)",
      "En estado Destroyed (onDestroy)",
      "En estado Paused (onPause)"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: En estado Paused (onPause). La Activity pasa a estado Paused (onPause) cuando pierde el foco del usuario pero sigue siendo parcial o totalmente visible (por ejemplo detrás de un diálogo modal o en pantalla dividida)."
  },
  {
    "question": "¿Cuál de los siguientes escenarios provoca que una Activity pase por onPause() y luego onStop(), sin pasar inmediatamente por onDestroy()?",
    "options": [
      "El usuario presiona el botón Home o cambia a otra aplicación mediante el selector de tareas recientes.",
      "Llamar explícitamente al método finish() en un botón de cierre.",
      "El usuario gira físicamente el teléfono 90 grados.",
      "El sistema operativo liquida el proceso por falta crítica de memoria RAM."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: El usuario presiona el botón Home o cambia a otra aplicación mediante el selector de tareas recientes. Cuando el usuario presiona Home o cambia de app, la Activity pasa a segundo plano: se pausa (onPause) y se detiene (onStop), quedando viva en memoria en la pila del Back Stack."
  },
  {
    "question": "Cuando una Activity detenida en segundo plano (onStop) es reabierta por el usuario, ¿cuál es la secuencia exacta de callbacks que se ejecutan hasta volver a la interactividad?",
    "options": [
      "onCreate() ➔ onStart() ➔ onResume()",
      "onRestart() ➔ onStart() ➔ onResume()",
      "onResume() ➔ onStart()",
      "onRestoreInstanceState() ➔ onDestroy()"
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: onRestart() ➔ onStart() ➔ onResume(). Una Activity que estaba en segundo plano (Stopped) no vuelve a pasar por onCreate(); reingresa ejecutando onRestart() ➔ onStart() (se hace visible) ➔ onResume() (recupera el foco interactivo)."
  },
  {
    "question": "¿Por qué un ViewModel ordinario NO puede prevenir la pérdida de datos cuando el usuario cierra deliberadamente la app barriéndola del menú de tareas recientes?",
    "options": [
      "Porque Android 16 borra los ViewModels cada 15 minutos de forma automática.",
      "Porque los ViewModels requieren obligatoriamente una conexión Wi-Fi para guardar sus datos en el servidor.",
      "Porque el ViewModel solo vive mientras dure el scope de ciclo de vida de la tarea; al descartar deliberadamente la app, el proceso y su memoria son terminados definitivamente por voluntad del usuario.",
      "Porque el compilador de Kotlin solo permite retener datos si se utiliza la palabra reservada var."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Porque el ViewModel solo vive mientras dure el scope de ciclo de vida de la tarea; al descartar deliberadamente la app, el proceso y su memoria son terminados definitivamente por voluntad del usuario. El ViewModel gestiona el estado en memoria para cambios de configuración y navegación. Si el usuario descarta intencionalmente la aplicación, su ciclo de vida concluye y el ViewModel se destruye."
  },
  {
    "question": "¿Qué representa el estado 'Top Resumed' introducido en las directrices de eficiencia y multi-ventana de Android?",
    "options": [
      "La Activity que tiene el mayor porcentaje de memoria heap asignada.",
      "La clase base de la cual deben heredar todos los componentes Composable de API 36.",
      "Un estado exclusivo de emuladores para depuración de rendimiento.",
      "La única Activity con la que el usuario está interactuando activamente en el momento presente, especialmente crítica en entornos multi-ventana o pantallas plegables donde múltiples pantallas son visibles pero solo una es interactiva."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: La única Activity con la que el usuario está interactuando activamente en el momento presente, especialmente crítica en entornos multi-ventana o pantallas plegables donde múltiples pantallas son visibles pero solo una es interactiva. En multi-ventana o pantallas plegables varias apps pueden estar en onResume() (visibles y reanudadas), pero solo una tiene el foco activo del usuario: esa es la 'Top Resumed'."
  },
  {
    "question": "Al evaluar la arquitectura de componentes efímeros en Android, ¿qué premisa fundamental debe guiar el diseño del desarrollador móvil respecto al ciclo de vida?",
    "options": [
      "Que el desarrollador debe asumir que los componentes visuales son descartables en cualquier segundo y diseñar la app de modo que la experiencia del usuario sea inmune a la destrucción del entorno.",
      "Que el desarrollador debe forzar a que su aplicación nunca se detenga manteniendo servicios infinitos en primer plano.",
      "Que el ciclo de vida de Android será eliminado en futuras versiones para copiar el modelo de ejecución de servidores Linux.",
      "Que la persistencia de datos solo debe preocupar al equipo de backend, no al desarrollador de la interfaz móvil."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Que el desarrollador debe asumir que los componentes visuales son descartables en cualquier segundo y diseñar la app de modo que la experiencia del usuario sea inmune a la destrucción del entorno. 'Las apps modernas son ecosistemas de componentes efímeros'. El desarrollador profesional diseña interfaces desacopladas cuya UX no se rompe ni se reinicia cuando el SO destruye y recrea la vista."
  },
  {
    "question": "¿Cuál es la función del método setContentView() en el paradigma clásico de Activities frente al bloque setContent {} en Jetpack Compose?",
    "options": [
      "setContentView() conecta la base de datos Room; setContent {} enlaza los servicios en segundo plano.",
      "setContentView() infla un archivo XML estático en un árbol de objetos View; setContent {} establece una función Composable como la raíz compositiva de la interfaz de usuario.",
      "setContentView() se llama en onResume(); setContent {} se llama en onDestroy().",
      "Son idénticos y pueden intercambiarse sin modificar las dependencias del proyecto."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: setContentView() infla un archivo XML estático en un árbol de objetos View; setContent {} establece una función Composable como la raíz compositiva de la interfaz de usuario. setContentView() inflaba jerarquías imperativas de Views desde archivos XML; setContent {} define el CompositionContext donde vive el árbol de funciones reactivas de Jetpack Compose."
  },
  {
    "question": "¿Qué consecuencia directa tiene una fuga de memoria provocada por no desregistrar un listener de sensores pesados en onStop()?",
    "options": [
      "El teléfono se apaga inmediatamente por sobrecarga eléctrica.",
      "El compilador K2 marca el proyecto como obsoleto en la siguiente compilación.",
      "La instancia de la Activity destruida queda retenida en la memoria heap por el SensorManager impidiendo que el Garbage Collector la recolecte, drenando batería y provocando un OutOfMemoryError.",
      "La aplicación pasa automáticamente al modo oscuro de Material You."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: La instancia de la Activity destruida queda retenida en la memoria heap por el SensorManager impidiendo que el Garbage Collector la recolecte, drenando batería y provocando un OutOfMemoryError. Si no se libera el listener en onStop(), el gestor del sistema (SensorManager) mantendrá una referencia viva a la Activity destruida, provocando fugas de memoria y eventuales cuelgues por OutOfMemoryError."
  },
  {
    "question": "En una prueba de rotación de pantalla, si un contador implementado dentro de un ViewModel se reinicia a cero al rotar el teléfono, ¿cuál es la causa del error?",
    "options": [
      "El sensor giroscópico del teléfono no tiene permisos en el AndroidManifest.xml.",
      "El compilador ART no admite orientación horizontal en API 36.",
      "El teléfono tiene activado el modo ahorro de batería.",
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
      "onRestart() ➔ onDestroy()"
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: onPause() ➔ onStop() ➔ onDestroy(). Al salir definitivamente de la Activity, la degradación pasa ordenadamente por: onPause() (pierde el foco) ➔ onStop() (deja de ser visible) ➔ onDestroy() (limpieza final y liberación del componente)."
  }
];

if (typeof window !== 'undefined') {
    window.questionsRDA2Tema4 = questionsRDA2Tema4;
}
