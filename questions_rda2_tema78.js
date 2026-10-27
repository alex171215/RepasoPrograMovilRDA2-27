// ============================================================
// BANCO DE PREGUNTAS — RDA2 questionsRDA2Tema78
// Formato y Distribución Equilibrada: Prof. Juan Francisco Chafla
// Adaptado rigurosamente al estilo de evaluación del docente
// ============================================================

const questionsRDA2Tema78 = [
  {
    "question": "En la filosofía de diseño de Material Design 3 (Material You), ¿qué premisa fundamental define el propósito de la estética visual en las aplicaciones móviles modernas?",
    "options": [
      "'M3 no es decoración: es comunicación. El diseño algorítmico reduce la fricción emocional al crear una experiencia visual coherente y personal con el usuario'.",
      "'M3 es un conjunto de reglas rígidas para obligar a que todas las apps luzcan idénticas a las de Google'.",
      "'M3 elimina los colores primarios para reducir el consumo de batería de la pantalla OLED'.",
      "'M3 delega la interfaz gráfica en servicios web remotos para evitar el uso de memoria local'."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: 'M3 no es decoración: es comunicación. El diseño algorítmico reduce la fricción emocional al crear una experiencia visual coherente y personal con el usuario'. La slide 4 lo define con contundencia: 'M3 no es decoración: es comunicación'. La estética algorítmica de Material You adapta la interfaz para reducir la fricción emocional y hacer que la app se sienta personal y viva."
  },
  {
    "question": "¿Qué es el 'Motor Monet' (Monet Engine) en el ecosistema de Material You y cuál es su metáfora de diseño?",
    "options": [
      "Un motor de renderizado gráfico de bajo nivel en lenguaje C++ que reemplaza a Skia.",
      "El motor de extracción algorítmica de colores del fondo de pantalla (wallpaper) del usuario, que genera paletas armónicas dinámicas convirtiendo a la aplicación en un 'camaleón digital'.",
      "Un módulo de monetización publicitaria automática para la tienda Google Play Store.",
      "Un compilador de animaciones vectoriales para botones flotantes (FAB)."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: El motor de extracción algorítmica de colores del fondo de pantalla (wallpaper) del usuario, que genera paletas armónicas dinámicas convirtiendo a la aplicación en un 'camaleón digital'. El Motor Monet extrae la paleta cromática dominante y de acento del fondo de pantalla del usuario, transformando a la app en un 'camaleón digital' que armoniza de forma personalizada con el dispositivo."
  },
  {
    "question": "En Material Design 3, ¿cuál es el principio cardinal del 'Color Semántico' frente al uso tradicional de colores fijos?",
    "options": [
      "Que cada color debe especificarse obligatoriamente con valores hexadecimales fijos como #FF0000 o #00FF00.",
      "Que los colores deben ser elegidos al azar por el sistema operativo cada vez que se abre la app.",
      "'En M3 no se piensa en colores, sino en funciones'. Los colores se asignan por roles lógicos (Primary, Secondary, Tertiary, Surface) asociados al propósito y peso de la acción, nunca por su tono estático.",
      "Que los botones solo pueden utilizar colores secundarios para evitar distracciones."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: 'En M3 no se piensa en colores, sino en funciones'. Los colores se asignan por roles lógicos (Primary, Secondary, Tertiary, Surface) asociados al propósito y peso de la acción, nunca por su tono estático. 'En M3 no se piensa en colores, sino en funciones'. El color semántico abstrae los tonos: se programa con roles funcionales (onPrimary, surfaceVariant, error), permitiendo que el sistema calcule los tonos exactos según el tema y contraste."
  },
  {
    "question": "¿Cuál es la función del rol de color 'Primary' en el sistema semántico de Material Design 3 y qué componentes lo utilizan?",
    "options": [
      "Planos de fondo neutros y divisores de listas.",
      "Mensajes de advertencia de pérdida de conexión a internet.",
      "Textos de pie de página y marcas de agua legales.",
      "Acciones principales y componentes de más alta prioridad visual en la pantalla, como los Floating Action Buttons (FABs) y botones de acción clave."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Acciones principales y componentes de más alta prioridad visual en la pantalla, como los Floating Action Buttons (FABs) y botones de acción clave. El rol Primary comanda la jerarquía visual: se reserva para las acciones principales e interacciones clave que el usuario debe identificar primero, como botones principales y FABs."
  },
  {
    "question": "En el sistema de color semántico de M3, ¿cuál es la responsabilidad específica del rol 'Secondary'?",
    "options": [
      "Soporte visual: es menos prominente que Primary, utilizado para agrupar elementos relacionados, destacar filtros o proveer balance en componentes de mediana jerarquía.",
      "Almacenar las claves criptográficas de la sesión del usuario.",
      "Pintar el fondo de la barra de navegación del sistema operativo.",
      "Indicar fallas catastróficas en llamadas a bases de datos Room."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Soporte visual: es menos prominente que Primary, utilizado para agrupar elementos relacionados, destacar filtros o proveer balance en componentes de mediana jerarquía. Secondary provee soporte visual: ofrece distinción sin competir con Primary, ideal para chips de filtrado, barras secundarias y elementos de soporte."
  },
  {
    "question": "¿Qué rol juegan los colores de la categoría 'Tertiary' en la paleta de Material Design 3?",
    "options": [
      "Colores invisibles utilizados únicamente para lectores de pantalla TalkBack.",
      "Acentos equilibrantes: colores de contraste calculados algorítmicamente para dar distinción o balance a elementos que necesitan atención independiente del color primario.",
      "Colores exclusivos para aplicaciones que se ejecutan en relojes Wear OS.",
      "Degradados lineales obligatorios en todos los encabezados de pantalla."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Acentos equilibrantes: colores de contraste calculados algorítmicamente para dar distinción o balance a elementos que necesitan atención independiente del color primario. Tertiary aporta acentos equilibrantes: un tono armónico pero diferenciado para evitar monotonía y destacar elementos específicos que no deben confundirse con la acción principal."
  },
  {
    "question": "¿Cómo maneja Material Design 3 los planos de fondo (Surface / Background) en contraste con la versión clásica de Material 2?",
    "options": [
      "Utiliza sombras negras muy pesadas y difusas en todos los bordes.",
      "Elimina todos los fondos dejando la pantalla transparente.",
      "Capas neutras donde la elevación y separación espacial se comunican mediante 'elevación por tono' (Tonal Elevation) en lugar de depender de sombras proyectadas.",
      "Prohíbe el uso de temas oscuros en dispositivos con pantalla AMOLED."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Capas neutras donde la elevación y separación espacial se comunican mediante 'elevación por tono' (Tonal Elevation) en lugar de depender de sombras proyectadas. En M3 las superficies utilizan elevación tonal: a mayor jerarquía o elevación, mayor tinte de color se mezcla sobre la superficie neutra, sustituyendo las sombras pesadas de M2."
  },
  {
    "question": "En el Estándar de Accesibilidad de Material Design 3, ¿cuál es el ratio de contraste mínimo exigido para texto y elementos interactivos?",
    "options": [
      "1.5:1",
      "3.0:1",
      "10.0:1",
      "4.5:1"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: 4.5:1. La slide 5 detalla los estándares de accesibilidad: 'Contraste mínimo: 4.5:1 para texto y elementos interactivos' (en consonancia con el estándar WCAG AA)."
  },
  {
    "question": "¿Qué significa que la accesibilidad en Material Design 3 posea 'Legibilidad Algorítmica' y 'Sin dependencia de matiz'?",
    "options": [
      "Los algoritmos de M3 calculan y ajustan automáticamente los colores para garantizar el contraste en temas claros y oscuros, basando la jerarquía visual en la luminancia y no en el matiz (hue) del color.",
      "Que el usuario debe ingresar manualmente fórmulas matemáticas para ver los textos.",
      "Que las fuentes tipográficas solo pueden tener un tamaño fijo de 12 puntos.",
      "Que el sistema operativo convierte todos los textos en código Morse táctil."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Los algoritmos de M3 calculan y ajustan automáticamente los colores para garantizar el contraste en temas claros y oscuros, basando la jerarquía visual en la luminancia y no en el matiz (hue) del color. Legibilidad Algorítmica garantiza que el contraste se calcule por luminancia (brillo relativo) y no por matiz, asegurando legibilidad total incluso para usuarios con daltonismo o en condiciones lumínicas adversas."
  },
  {
    "question": "Al comparar el diseño de temas entre el sistema tradicional (XML/Java) y Jetpack Compose, ¿cuál es la diferencia fundamental en la naturaleza de su aplicación?",
    "options": [
      "En XML los temas son dinámicos en tiempo real; en Compose son estáticos y requieren reiniciar el teléfono.",
      "En Java/XML los temas son estáticos y rígidos definidos en archivos XML (styles.xml); mientras que en Compose el tema es una 'función reactiva basada en el estado'.",
      "XML no soporta temas oscuros; Compose solo admite temas oscuros.",
      "No existe diferencia; ambos leen el mismo archivo styles.xml compilado por K2."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: En Java/XML los temas son estáticos y rígidos definidos en archivos XML (styles.xml); mientras que en Compose el tema es una 'función reactiva basada en el estado'. En XML los temas eran colecciones rígidas de atributos inflados al crear la Activity; en Compose el tema es un Composable reactivo (MaterialTheme) que responde fluidamente a cambios de estado."
  },
  {
    "question": "¿Qué comportamiento experimentaba una aplicación en el sistema tradicional de vistas (XML) al cambiar entre temas claro/oscuro o modificar el fondo, frente a la respuesta reactiva de Jetpack Compose?",
    "options": [
      "En XML la pantalla cambiaba a color verde; en Compose se requiere reinstalar la APK.",
      "En XML no había ningún impacto; en Compose el teléfono se bloquea durante 5 segundos.",
      "En XML la Activity debía destruirse y recrearse obligatoriamente con parpadeos e interrupción del flujo (Stop/Start); en Compose la Recomposición Inteligente actualiza los colores de inmediato de forma fluida y sin reiniciar la pantalla.",
      "En ambos sistemas la pantalla parpadea de forma obligatoria por limitación del hardware."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: En XML la Activity debía destruirse y recrearse obligatoriamente con parpadeos e interrupción del flujo (Stop/Start); en Compose la Recomposición Inteligente actualiza los colores de inmediato de forma fluida y sin reiniciar la pantalla. En el modelo legacy cambiar el tema forzaba un restart completo de la Activity con parpadeos visuales desagradables; en Compose se produce una recomposición inteligente instantánea y continua."
  },
  {
    "question": "En la implementación técnica en API 36 (ejemplo SafePassTheme), ¿a partir de qué versión de Android SDK están disponibles las funciones dinámicas dynamicDarkColorScheme() y dynamicLightColorScheme()?",
    "options": [
      "Build.VERSION.SDK_INT >= 21 (Android 5.0 Lollipop)",
      "Build.VERSION.SDK_INT >= 26 (Android 8.0 Oreo)",
      "Build.VERSION.SDK_INT >= 36 exclusivamente",
      "Build.VERSION.SDK_INT >= 31 (Android 12 Snow Cone)"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Build.VERSION.SDK_INT >= 31 (Android 12 Snow Cone). El soporte nativo de Material You para colores dinámicos extraídos del wallpaper comenzó en Android 12 (API 31). El código valida: 'dynamicColor && Build.VERSION.SDK_INT >= 31'."
  },
  {
    "question": "En el snippet de SafePassTheme en API 36, ¿cuál es la estructura de selección con when recomendada para configurar el esquema de color?",
    "options": [
      "when { dynamicColor && Build.VERSION.SDK_INT >= 31 -> if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context); darkTheme -> DarkColorScheme; else -> LightColorScheme }",
      "when { Build.VERSION.SDK_INT < 20 -> ErrorTheme; else -> DefaultTheme }",
      "when (theme) { 'dark' -> Color.Black; 'light' -> Color.White }",
      "when { true -> dynamicDarkColorScheme(context) }"
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: when { dynamicColor && Build.VERSION.SDK_INT >= 31 -> if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context); darkTheme -> DarkColorScheme; else -> LightColorScheme }. La estructura evalúa primero si se solicitó dynamicColor y el SDK es >= 31 (llamando a dynamicDark/LightColorScheme); de lo contrario, recurre a DarkColorScheme o LightColorScheme fijos de respaldo."
  },
  {
    "question": "¿Por qué se considera una pésima práctica de ingeniería móvil (\"pecado de desarrollo\") incrustar texto plano directamente (hardcoded strings) en los componentes de la interfaz de usuario?",
    "options": [
      "Porque los textos en código aumentan el peso de la APK en más de 500 Megabytes.",
      "Porque destruye la accesibilidad (impidiendo que lectores como TalkBack se adapten), bloquea la internacionalización (traducción a otros idiomas) e imposibilita la adaptación cultural y de formatos, arruinando la resiliencia visual.",
      "Porque el compilador K2 se niega a compilar cadenas de texto con caracteres especiales.",
      "Porque Google cobra una penalización económica por cada palabra hardcodeada en producción."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Porque destruye la accesibilidad (impidiendo que lectores como TalkBack se adapten), bloquea la internacionalización (traducción a otros idiomas) e imposibilita la adaptación cultural y de formatos, arruinando la resiliencia visual. Slide 8: 'Hardcodear texto es un pecado capital del desarrollo móvil'. Centralizar en strings.xml es mandatorio para TalkBack (accesibilidad), traducción sin tocar código (escalabilidad) y localización cultural."
  },
  {
    "question": "En la arquitectura de aplicaciones Android profesionales, ¿qué premisa define el valor del archivo centralizado \"strings.xml\"?",
    "options": [
      "'Es una base de datos relacional para contraseñas seguras'.",
      "'Es un archivo obsoleto que ya no se utiliza en Jetpack Compose'.",
      "'Un recurso centralizado no es solo una lista de palabras, es la arquitectura que permite que tu App hable al mundo'.",
      "'Es un archivo de configuración exclusivo para emuladores de escritorio'."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: 'Un recurso centralizado no es solo una lista de palabras, es la arquitectura que permite que tu App hable al mundo'. Es el pilar de la resiliencia visual y la internacionalización profesional."
  },
  {
    "question": "En el Ecosistema Declarativo de Navegación de Jetpack Compose, ¿cuáles son los tres componentes esenciales que integran la arquitectura de flujo?",
    "options": [
      "Column, Row y Box.",
      "Activity, Fragment y Intent.",
      "ViewModel, SavedStateHandle y LiveData.",
      "NavController (Cerebro estratégico), NavHost (Escenario dinámico) y Grafo/NavGraph (Mapa de destinos)."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: NavController (Cerebro estratégico), NavHost (Escenario dinámico) y Grafo/NavGraph (Mapa de destinos). La trilogía declarativa de navegación está compuesta por: 1. NavController (cerebro y guardián), 2. NavHost (escenario contenedor) y 3. NavGraph/Grafo (mapa declarativo de rutas)."
  },
  {
    "question": "¿Cuál es la responsabilidad principal del NavController en la arquitectura de flujo de Compose?",
    "options": [
      "Actuar como el 'Cerebro estratégico' y 'Guardián del Back Stack': gestiona el estado de la pila de pantallas, coordina las transiciones entre nodos y facilita la transferencia segura de datos.",
      "Pintar los píxeles de los botones en la pantalla usando Skia.",
      "Monitorear la temperatura de la batería del dispositivo móvil.",
      "Almacenar las credenciales de autenticación en la memoria swap."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Actuar como el 'Cerebro estratégico' y 'Guardián del Back Stack': gestiona el estado de la pila de pantallas, coordina las transiciones entre nodos y facilita la transferencia segura de datos. El NavController administra el historial de navegación (Back Stack), despacha órdenes de navegación hacia nuevos destinos y transfiere argumentos entre pantallas."
  },
  {
    "question": "¿Por qué el NavController debe implementarse siguiendo el patrón 'State Hoisting' (declararse en un nivel alto de la jerarquía)?",
    "options": [
      "Para que el sistema operativo pueda cerrar la aplicación más rápidamente.",
      "Para que una única instancia del controlador pueda ser compartida por múltiples pantallas y componentes hijos, garantizando coherencia en la pila de navegación y facilitando el testeo.",
      "Porque los niveles inferiores de Compose no admiten llamadas a funciones de Kotlin.",
      "Para forzar a que todos los Composables sean funciones suspendidas."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Para que una única instancia del controlador pueda ser compartida por múltiples pantallas y componentes hijos, garantizando coherencia en la pila de navegación y facilitando el testeo. NavController debe alojarse arriba en el árbol (generalmente en la raíz de la pantalla principal) para gobernar toda la app y pasarse a donde sea necesario, evitando múltiples controladores desincronizados."
  },
  {
    "question": "En el Ecosistema de Navegación, ¿cuál es la función del componente NavHost?",
    "options": [
      "Un servicio de nube que aloja las páginas web de soporte.",
      "Un interceptor de llamadas telefónicas del sistema operativo.",
      "Funciona como un 'Escenario dinámico' o teatral: es el contenedor visual que intercambia dinámicamente las funciones Composable según la ruta activa orquestada por el NavController.",
      "Una base de datos que guarda las preferencias de usuario."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Funciona como un 'Escenario dinámico' o teatral: es el contenedor visual que intercambia dinámicamente las funciones Composable según la ruta activa orquestada por el NavController. NavHost es el escenario: provee el espacio físico en pantalla donde los diferentes Composables entran y salen conforme el NavController cambia el destino actual."
  },
  {
    "question": "¿Qué error común de arquitectura debe evitarse al declarar el componente \"NavHost\" y cuál es su impacto negativo?",
    "options": [
      "Usar NavHost dentro de un Scaffold.",
      "Colocar botones dentro del NavHost.",
      "Usar rutas con más de 10 caracteres.",
      "Declarar múltiples NavHost sin una estrategia arquitectónica clara, lo que provoca un comportamiento errático y descontrolado del botón o gesto 'Atrás' al existir varias pilas de navegación compitiendo."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Declarar múltiples NavHost sin una estrategia arquitectónica clara, lo que provoca un comportamiento errático y descontrolado del botón o gesto 'Atrás' al existir varias pilas de navegación compitiendo. Crear varios NavHost sin coordinación fragmenta el Back Stack, provocando que presionar el botón 'Atrás' cierre la app o retroceda en la pantalla equivocada."
  },
  {
    "question": "¿Qué caracteriza al Grafo de Navegación (NavGraph) en Jetpack Compose en comparación con el sistema legacy de Android?",
    "options": [
      "En Compose el grafo es código fluido en Kotlin, no un archivo XML rígido; permite definición programática de rutas y argumentos, facilitando Deep Linking nativo y reconstrucción tras rotaciones.",
      "En Compose el grafo se dibuja a mano con un lápiz óptico en la pantalla táctil.",
      "En Compose el grafo requiere un servidor HTTP local corriendo en el teléfono.",
      "El grafo de Compose solo soporta dos pantallas en toda la aplicación."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: En Compose el grafo es código fluido en Kotlin, no un archivo XML rígido; permite definición programática de rutas y argumentos, facilitando Deep Linking nativo y reconstrucción tras rotaciones. En Compose el NavGraph es código Kotlin fluido y puro (composable<Route> {}). Desaparece el rígido navigation.xml, ganando flexibilidad, seguridad de tipos y soporte nativo de Deep Links."
  },
  {
    "question": "¿En qué consiste la problemática histórica de las rutas de navegación basadas en cadenas de texto plano (String Routes) en Android?",
    "options": [
      "Las cadenas de texto consumían todo el espacio del disco duro del teléfono.",
      "El uso de Strings mágicos (\"perfil/{id}\") compromete la estabilidad: pequeños errores tipográficos (typos como \"pérfil\") son invisibles para el compilador, y pasar tipos equivocados causa crashes tardíos en tiempo de ejecución (en manos del usuario).",
      "Los caracteres alfabéticos no eran compatibles con la máquina virtual ART.",
      "Google Play prohibió la publicación de apps que utilicen la clase java.lang.String."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: El uso de Strings mágicos (\"perfil/{id}\") compromete la estabilidad: pequeños errores tipográficos (typos como \"pérfil\") son invisibles para el compilador, y pasar tipos equivocados causa crashes tardíos en tiempo de ejecución (en manos del usuario). La navegación con Strings es frágil: el compilador no puede verificar errores tipográficos, ni valida los tipos de argumentos; un fallo tonto explota en producción con un crash."
  },
  {
    "question": "En la Navegación Tipada (Type-Safe Navigation) introducida en Navigation 2.8+ y API 36, ¿cómo se define un contrato de destino para una pantalla que requiere argumentos?",
    "options": [
      "Creando un archivo navigation_routes.xml con etiquetas <argument>.",
      "Definiendo un enum con constantes enteras del archivo R.id.",
      "Definiendo una data class de Kotlin anotada con @Serializable (de Kotlinx Serialization), especificando fuertemente los tipos de sus propiedades (ej. @Serializable data class ProductDetail(val productId: Int, val title: String)).",
      "Pasando un HashMap<String, Any> a través de un Intent implícito."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Definiendo una data class de Kotlin anotada con @Serializable (de Kotlinx Serialization), especificando fuertemente los tipos de sus propiedades (ej. @Serializable data class ProductDetail(val productId: Int, val title: String)). Las rutas tipadas se modelan con @Serializable data class Ruta(val arg1: Tipo). Esto convierte los destinos en tipos seguros verificados por el compilador de Kotlin."
  },
  {
    "question": "Al utilizar Contratos Tipados en API 36, ¿cómo se invoca la navegación hacia una pantalla de detalle pasando parámetros de forma tipada?",
    "options": [
      "navController.navigate(\"product_detail?id=42&title=Teclado\")",
      "navController.dispatchRoute(\"detail\", 42, \"Teclado\")",
      "navController.startActivity(Intent(ProductDetail::class.java))",
      "navController.navigate(ProductDetail(productId = 42, title = \"Teclado Mecánico\"))"
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: navController.navigate(ProductDetail(productId = 42, title = \"Teclado Mecánico\")). Con la API Type-Safe se pasa una instancia real del objeto tipado: navController.navigate(ProductDetail(productId = 42, title = \"Teclado Mecánico\")), eliminando cadenas de texto propensas a errores."
  },
  {
    "question": "En la pantalla receptora de un destino tipado, ¿cómo se extraen los argumentos de la ruta desde el NavBackStackEntry de forma automática y sin boilerplate?",
    "options": [
      "Utilizando la función de extensión genérica: val args = backStackEntry.toRoute<ProductDetail>()",
      "Llamando a backStackEntry.arguments?.getInt(\"id\") con casting manual.",
      "Consultando la base de datos Room mediante una consulta SQL SELECT.",
      "Leyendo los parámetros directamente del archivo strings.xml."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Utilizando la función de extensión genérica: val args = backStackEntry.toRoute<ProductDetail>(). El método toRoute<T>() deserializa automáticamente los argumentos tipados en la instancia del objeto, sin parseos manuales de Bundle ni riesgos de ClassCastException."
  },
  {
    "question": "En la navegación moderna con Navigation Compose y Kotlin Serialization, ¿cuáles son los cuatro pilares que garantizan los Contratos Tipados con \"@Serializable\"?",
    "options": [
      "1. Más velocidad de internet, 2. Batería infinita, 3. Gráficos en 4K, 4. Seguridad biométrica.",
      "1. Destinos como clases/objetos (ciudadanos de primera clase), 2. Validación en compilación, 3. Refactorización segura, 4. Deserialización automática con toRoute().",
      "1. Reemplazo de Kotlin por Swift, 2. Uso obligatorio de XML, 3. Eliminación de ViewModels, 4. Modo multi-ventana.",
      "1. Permisos de superusuario, 2. Cifrado RSA, 3. Compilación Just-In-Time, 4. Almacenamiento en caché."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: 1. Destinos como clases/objetos (ciudadanos de primera clase), 2. Validación en compilación, 3. Refactorización segura, 4. Deserialización automática con toRoute(). Los 4 pilares son: 1. Rutas como ciudadanos de primera clase, 2. Validación en compilación (no en producción), 3. Refactorización segura guiada por el compilador, y 4. Deserialización automática con toRoute()."
  },
  {
    "question": "En la Navegación Tipada, ¿qué significa el pilar de 'Refactorización Segura' verificado por el compilador?",
    "options": [
      "Que el código se formatea automáticamente con espaciado de 4 tabulaciones.",
      "Que el sistema operativo crea una copia de seguridad en la tarjeta SD externa.",
      "Que si el desarrollador renombra una propiedad, cambia un tipo o añade un argumento en la data class de la ruta, el compilador marcará inmediatamente error en todos los puntos de la app que no hayan actualizado el contrato, impidiendo compilar código roto.",
      "Que los iconos de Material You cambian de color automáticamente."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Que si el desarrollador renombra una propiedad, cambia un tipo o añade un argumento en la data class de la ruta, el compilador marcará inmediatamente error en todos los puntos de la app que no hayan actualizado el contrato, impidiendo compilar código roto. Con rutas basadas en Strings, renombrar un parámetro no avisaba al compilador y rompía la app en runtime. Con contratos @Serializable, cualquier cambio de estructura es validado implacablemente por el compilador."
  },
  {
    "question": "¿Qué representa el 'Back Stack' en el sistema operativo Android y cómo lo administra el NavController?",
    "options": [
      "Una pila de memoria secundaria en el kernel Linux para almacenar paquetes TCP.",
      "La lista de aplicaciones descargadas recientemente desde Google Play.",
      "La cola de mensajes pendientes en el hilo de renderizado de la GPU.",
      "Una estructura de datos LIFO (Last-In, First-Out) que almacena el historial cronológico de destinos visitados por el usuario para gestionar el comportamiento del retroceso de forma coherente."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Una estructura de datos LIFO (Last-In, First-Out) que almacena el historial cronológico de destinos visitados por el usuario para gestionar el comportamiento del retroceso de forma coherente. El Back Stack es la pila LIFO del historial de pantallas: cada pantalla visitada se apila en la cima; al presionar Atrás, el NavController desapila la pantalla actual para revelar la anterior."
  },
  {
    "question": "¿Cómo se define un destino tipado para una pantalla que NO recibe ningún argumento (por ejemplo la pantalla Home)?",
    "options": [
      "@Serializable data object Home",
      "@Serializable data class Home(val empty: Unit)",
      "const val HOME_ROUTE = \"home\"",
      "class Home : NavDestination()"
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: @Serializable data object Home. Para pantallas sin parámetros se utiliza de forma idiomática '@Serializable data object Home', creando una entidad singleton tipada y serializable sin sobrecarga de memoria."
  },
  {
    "question": "En el contexto de la internacionalización (i18n), ¿cómo asiste el archivo strings.xml a la herramienta de accesibilidad TalkBack de Android?",
    "options": [
      "TalkBack acelera la frecuencia de muestreo del acelerómetro.",
      "TalkBack lee los textos centralizados permitiendo que las descripciones de contenido (contentDescription) y etiquetas se sinteticen en la voz y lengua materna configurada por el usuario con discapacidad visual.",
      "TalkBack apaga la pantalla para que nadie pueda ver los textos.",
      "TalkBack traduce automáticamente los videos de YouTube al inglés."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: TalkBack lee los textos centralizados permitiendo que las descripciones de contenido (contentDescription) y etiquetas se sinteticen en la voz y lengua materna configurada por el usuario con discapacidad visual. TalkBack depende de strings.xml y contentDescription: al separar el texto de la vista, el motor de accesibilidad puede pronunciar las descripciones correctas en el idioma activo del usuario."
  },
  {
    "question": "Al trabajar con paletas tonales generadas por el Motor Monet en Material Design 3, ¿qué valor numérico representa el tono de Luminancia de mayor brillo/luz?",
    "options": [
      "0 (Negro absoluto)",
      "50 (Tono medio equilibrado)",
      "100 (Blanco absoluto)",
      "1000 (Saturación máxima)"
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: 100 (Blanco absoluto). Las paletas tonales de Monet se indexan de 0 a 100 de luminancia: el tono 0 es el negro absoluto (ausencia de luz) y el tono 100 es el blanco absoluto (máxima luminosidad)."
  },
  {
    "question": "En el sistema de diseño Material Design 3, ¿cómo se define técnicamente el concepto de \"Color Semántico\" (Semantic Color)?",
    "options": [
      "Un algoritmo de inteligencia artificial que cambia el wallpaper cada 24 horas.",
      "Una paleta de colores exclusiva para personas con problemas auditivos.",
      "La compresión de imágenes JPG para ahorrar ancho de banda.",
      "El uso de nombres lógicos para colores (ej. primary, onSurface, error) en lugar de valores fijos hexadecimales, vinculando el color a su función y comportamiento."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: El uso de nombres lógicos para colores (ej. primary, onSurface, error) en lugar de valores fijos hexadecimales, vinculando el color a su función y comportamiento. Glosario Técnico: 'Semantic Color: Uso de nombres lógicos para colores (ej: primary, onSurface) en lugar de valores fijos', permitiendo que la interfaz se adapte dinámicamente sin romper la intención de diseño."
  },
  {
    "question": "En el diseño de interfaces con M3, ¿qué función cumple el par de roles 'Surface' y 'On-Surface'?",
    "options": [
      "Surface define el color de fondo de una tarjeta o contenedor neutro; On-Surface define el color garantizado para el texto e iconos que se posicionan sobre esa superficie para cumplir accesibilidad.",
      "Surface se usa en la cámara frontal; On-Surface en la cámara trasera.",
      "Surface es para modo offline; On-Surface para modo online.",
      "Son identificadores exclusivos de emuladores para pruebas de estrés."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Surface define el color de fondo de una tarjeta o contenedor neutro; On-Surface define el color garantizado para el texto e iconos que se posicionan sobre esa superficie para cumplir accesibilidad. La convención 'On-[Rol]' (On-Surface, On-Primary) asegura legibilidad: cualquier elemento que se coloque 'sobre' (on) la superficie debe usar el color On correspondiente para garantizar contraste suficiente."
  },
  {
    "question": "¿Por qué Material Design 3 establece en sus conclusiones que su sistema 'democratiza el diseño' para todas las aplicaciones?",
    "options": [
      "Porque permite a cualquier usuario votar en encuestas online sobre los colores de la aplicación.",
      "Porque cualquier aplicación, incluso sin un equipo dedicado de diseñadores gráficos, hereda automáticamente coherencia estética, adaptación al entorno del usuario y cumplimiento riguroso de accesibilidad gracias a los algoritmos de Material You.",
      "Porque el código de M3 se ejecuta exclusivamente en servidores públicos gratuitos.",
      "Porque todas las aplicaciones de Google Play pasan a ser gratuitas obligatoriamente."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Porque cualquier aplicación, incluso sin un equipo dedicado de diseñadores gráficos, hereda automáticamente coherencia estética, adaptación al entorno del usuario y cumplimiento riguroso de accesibilidad gracias a los algoritmos de Material You. Slide 16: 'M3 democratiza el diseño'. Al delegar la paleta en algoritmos matemáticos probados (Monet) y reglas de luminancia, los desarrolladores logran interfaces profesionales y accesibles de serie."
  },
  {
    "question": "Si una aplicación diseñada bajo Material You se ejecuta en un dispositivo con Android 10 (API 29), ¿cuál es el comportamiento esperado según el código de SafePassTheme?",
    "options": [
      "La aplicación se cierra inmediatamente con una excepción RuntimeException.",
      "El teléfono se actualiza forzadamente a Android 16.",
      "La condición Build.VERSION.SDK_INT >= 31 se evalúa como falsa, por lo que la app recurre elegantemente a los esquemas de color estáticos predefinidos (DarkColorScheme o LightColorScheme) sin crashear.",
      "La pantalla permanece en blanco hasta que el usuario conecte el cargador."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: La condición Build.VERSION.SDK_INT >= 31 se evalúa como falsa, por lo que la app recurre elegantemente a los esquemas de color estáticos predefinidos (DarkColorScheme o LightColorScheme) sin crashear. El código defensivo con when asegura compatibilidad hacia atrás (backward compatibility): si el SDK es menor a 31, ignora los colores dinámicos y aplica la paleta estática de la marca sin errores."
  },
  {
    "question": "¿Cuál es la función del parámetro 'popUpTo' en la navegación declarativa al implementar un flujo de inicio de sesión (Login)?",
    "options": [
      "Mostrar una ventana flotante para calificar la app con 5 estrellas.",
      "Cerrar la conexión Bluetooth para ahorrar batería.",
      "Aumentar el volumen del timbre del teléfono al entrar al Home.",
      "Remover de la pila de retroceso (Back Stack) la pantalla de Login para que el usuario no pueda volver a ella al pulsar el botón 'Atrás' una vez que ya ha iniciado sesión."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Remover de la pila de retroceso (Back Stack) la pantalla de Login para que el usuario no pueda volver a ella al pulsar el botón 'Atrás' una vez que ya ha iniciado sesión. popUpTo permite podar el Back Stack: tras autenticarse con éxito, se navega al Home haciendo popUpTo<LoginRoute> { inclusive = true } para evitar que presionar Atrás regrese al login."
  },
  {
    "question": "En la arquitectura de navegación declarativa, ¿cómo se define el principio de \"Seguridad de Tipos\" (Type-Safety)?",
    "options": [
      "La garantía estricta de tipos de datos en la navegación que previene fallos en tiempo de ejecución al verificar en compilación los argumentos transmitidos entre pantallas.",
      "La protección contra virus y software espía en el teclado táctil.",
      "La velocidad a la que el usuario escribe texto en la pantalla.",
      "La encriptación de datos en bases de datos SQLite."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: La garantía estricta de tipos de datos en la navegación que previene fallos en tiempo de ejecución al verificar en compilación los argumentos transmitidos entre pantallas. Glosario Técnico: 'Type-Safety: Garantía de tipos en la navegación que evita errores en tiempo de ejecución al pasar argumentos'. El compilador es el árbitro que asegura que emisor y receptor coincidan en tipos."
  },
  {
    "question": "¿Por qué hardcodear textos directamente en funciones Composable rompe la escalabilidad de un proyecto empresarial?",
    "options": [
      "Porque los textos hardcodeados son borrados por el compilador K2 durante la optimización ProGuard.",
      "Porque para traducir la app o corregir faltas ortográficas se requiere buscar y modificar código fuente Kotlin, arriesgando la introducción de regresiones de lógica y encareciendo la labor de traductores externos.",
      "Porque Android Studio limita los archivos a un máximo de 100 caracteres de texto.",
      "Porque los servidores de testing rechazan archivos con cadenas entre comillas dobles."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Porque para traducir la app o corregir faltas ortográficas se requiere buscar y modificar código fuente Kotlin, arriesgando la introducción de regresiones de lógica y encareciendo la labor de traductores externos. Hardcodear texto acopla el contenido lingüístico a la lógica de código. Al centralizar en strings.xml, los equipos de traducción editan archivos de recursos sin tocar ni compilar código de la app."
  },
  {
    "question": "En el diseño de componentes M3, ¿qué elemento visual caracteriza a los botones de navegación inferior NavigationBar frente a versiones antiguas?",
    "options": [
      "Bordes negros con sombras puntiagudas de estilo neomórfico.",
      "Menús desplegables con iconos en formato GIF animado.",
      "Indicadores de selección en forma de píldora activa flotante y adaptación de altura e iluminación a la elevación tonal de Material You.",
      "La eliminación total de iconos dejando solo números romanos."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Indicadores de selección en forma de píldora activa flotante y adaptación de altura e iluminación a la elevación tonal de Material You. NavigationBar en M3 utiliza el distintivo active indicator en forma de píldora (pill), mayor altura ergonómica y coloración semántica armónica con la elevación de superficie."
  },
  {
    "question": "¿Qué rol cumple la función stringResource(R.string.nombre) dentro de una función Composable en Jetpack Compose?",
    "options": [
      "Descargar un archivo de texto desde una base de datos remota.",
      "Encriptar el texto para guardarlo en SharedPreferences.",
      "Imprimir el texto en la impresora inalámbrica más cercana.",
      "Acceder de forma reactiva y tipada al recurso de texto centralizado en strings.xml, respondiendo automáticamente a cambios de configuración de idioma del dispositivo."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: Acceder de forma reactiva y tipada al recurso de texto centralizado en strings.xml, respondiendo automáticamente a cambios de configuración de idioma del dispositivo. stringResource() es la API declarativa idiomática para consumir strings.xml en Compose: vincula la UI al recurso del sistema y recompone si el usuario cambia el idioma en Ajustes."
  },
  {
    "question": "Al declarar una ruta tipada en el NavGraph mediante la función 'composable<T> { ... }', ¿qué representa el tipo genérico T?",
    "options": [
      "La clase de datos o data object anotado con @Serializable que define de forma unívoca el contrato y parámetros de dicha pantalla.",
      "El número de identificación del proceso en el kernel Linux.",
      "El nombre del archivo XML que contiene el diseño de la pantalla.",
      "Una interfaz gráfica heredada de la clase View de Java."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: La clase de datos o data object anotado con @Serializable que define de forma unívoca el contrato y parámetros de dicha pantalla. En composable<T> {}, T es el tipo de la ruta (@Serializable data class o data object). Navigation Compose usa ese tipo para asociar la ruta en el grafo y extraer argumentos tipados."
  },
  {
    "question": "En el contexto de la resiliencia visual, ¿por qué es fundamental que la interfaz soporte la 'Localización' cultural además de la simple traducción de palabras?",
    "options": [
      "Porque el GPS del teléfono deja de funcionar si la app no está localizada.",
      "Porque las diferentes culturas y países presentan variaciones en formatos de fecha, convenciones horarias, monedas y longitudes de texto que pueden romper layouts rígidos si no se diseñan con resiliencia.",
      "Porque la tienda Google Play exige que todas las apps tengan música folclórica local.",
      "Porque los teléfonos en Asia no admiten números arábigos."
    ],
    "correctIndex": 1,
    "feedback": "La respuesta correcta es: Porque las diferentes culturas y países presentan variaciones en formatos de fecha, convenciones horarias, monedas y longitudes de texto que pueden romper layouts rígidos si no se diseñan con resiliencia. Localización abarca formatos de números, monedas, fechas y expansión de texto (el alemán ocupa ~30% más espacio que el inglés). Una UI resiliente se adapta dinámicamente sin romper elementos."
  },
  {
    "question": "En la arquitectura de flujo de una aplicación Android, ¿cuál es el beneficio directo para el usuario de una gestión rigurosa de la pila de navegación (\"Back Stack\")?",
    "options": [
      "Aumentar el brillo de la pantalla un 20%.",
      "Eliminar la necesidad de introducir contraseñas en el dispositivo.",
      "Una experiencia de usuario (UX) predecible y sin frustraciones, donde el retroceso gestual o físico devuelve al usuario al punto lógico esperado sin saltos incoherentes ni cierres accidentales de la aplicación.",
      "Descargar actualizaciones automáticas sin consumir datos móviles."
    ],
    "correctIndex": 2,
    "feedback": "La respuesta correcta es: Una experiencia de usuario (UX) predecible y sin frustraciones, donde el retroceso gestual o físico devuelve al usuario al punto lógico esperado sin saltos incoherentes ni cierres accidentales de la aplicación. Una gestión experta del Back Stack garantiza que la navegación sea natural e intuitiva: el usuario siempre regresa al estado anterior esperado, evitando loops y cierres inesperados."
  },
  {
    "question": "¿Cuál es la principal ventaja de utilizar 'data object' frente a 'data class' al definir rutas tipadas sin argumentos?",
    "options": [
      "data object permite crear múltiples instancias con diferentes IDs.",
      "data object convierte la ruta en una página web HTML.",
      "data object es compatible con Android 2.3 Gingerbread.",
      "data object implementa el patrón Singleton nativo en Kotlin, garantizando una única instancia inmutable en memoria, lo que optimiza recursos y genera una sintaxis limpia sin paréntesis vacíos () innecesarios."
    ],
    "correctIndex": 3,
    "feedback": "La respuesta correcta es: data object implementa el patrón Singleton nativo en Kotlin, garantizando una única instancia inmutable en memoria, lo que optimiza recursos y genera una sintaxis limpia sin paréntesis vacíos () innecesarios. Para rutas sin argumentos, @Serializable data object es la forma idiomática y limpia: actúa como singleton inmutable y evita instanciaciones redundantes (ej. Perfil en lugar de Perfil())."
  },
  {
    "question": "En síntesis, ¿cómo interactúan armónicamente Material You y la Navegación Tipada para transformar una aplicación móvil en un producto de nivel profesional?",
    "options": [
      "Material You viste la aplicación como un camaleón que respeta la identidad visual y accesibilidad del usuario; mientras que la Navegación Tipada blinda la estructura interna contra errores humanos en tiempo de compilación, logrando belleza externa y solidez arquitectónica interna.",
      "Material You hace que la app consuma menos internet y la Navegación Tipada aumenta la resolución de la cámara.",
      "Ambos sistemas fueron diseñados para sustituir a los servidores de backend.",
      "Obligan a que el código se escriba exclusivamente en lenguaje Java heredado."
    ],
    "correctIndex": 0,
    "feedback": "La respuesta correcta es: Material You viste la aplicación como un camaleón que respeta la identidad visual y accesibilidad del usuario; mientras que la Navegación Tipada blinda la estructura interna contra errores humanos en tiempo de compilación, logrando belleza externa y solidez arquitectónica interna. Es la conclusión maestra del Tema 7-8: Material You entrega estética adaptativa, armonía visual y accesibilidad algorítmica; la Navegación Tipada provee robustez estructural, contratos seguros y cero crashes por rutas en producción."
  }
];

if (typeof window !== 'undefined') {
    window.questionsRDA2Tema78 = questionsRDA2Tema78;
}
