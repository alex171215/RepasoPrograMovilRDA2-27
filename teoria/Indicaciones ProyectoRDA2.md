# Indicaciones para el Examen Práctico – RDA-2

## Aplicación: EcoTrip 2026 – Sistema Resiliente de Planificación de Rutas e Identidad Visual Adaptativa

Estimado/a estudiante:

Debe desarrollar el Examen Práctico de Programación Móvil correspondiente al RDA-2 siguiendo de forma estricta todas las instrucciones detalladas en la hoja guía del examen **EcoTrip 2026** incluida en el archivo adjunto. El trabajo se realizará en los grupos establecidos en el curso y disponen de un periodo de **3 días** para completarlo y entregar el software finalizado.

El examen evalúa su dominio práctico y conceptual sobre la arquitectura de componentes y la experiencia estética nativa revisada en la segunda unidad del curso, incluyendo:

- **Arquitectura y Gestión de Estados:** Implementación del patrón de arquitectura.
- **Resiliencia Multinivel de Datos:** Blindaje contra la pérdida de datos en la UI mediante persistencia en:
  - Memoria (`ViewModel`).
  - Proceso (`SavedStateHandle` ante Process Death).
  - Disco (`DataStore` para preferencias globales permanentes).
- **Arquitectura de Flujo de Navegación:** Orquestación moderna de pantallas de forma declarativa y fuertemente tipada (Type-Safety) utilizando clases `@Serializable` como rutas, `NavController`, `NavHost` y la correcta higiene de la pila de transiciones (Back Stack) mediante `popUpTo` con la bandera `launchSingleTop`.
- **Estética Semántica Adaptativa:** Diseño de interfaces completamente declarativas integradas a las directrices de Material Design 3 y el uso de Color Dinámico (Material You) mediante `dynamicColorScheme` y roles cromáticos semánticos (`MaterialTheme.colorScheme`).
- **Andamiaje Estructural Complejo:** Uso avanzado de componentes contenedores como `Scaffold`, `TopAppBar` y `FloatingActionButton`.
- **Mindset Kotlin Moderno:** Código idiomático libre de ruido sintáctico, inmutabilidad (`val`), control indestructible de nulos (`?.`, `?:`) y desinfección de entradas numéricas en tiempo real (`toIntOrNull()`).

---

## ✅ 1. Entrega en Moodle: Informe Técnico de Ingeniería + Proyecto Android Studio

La entrega consta de la subida a esta plataforma de un archivo **PDF** con el informe académico formal y un archivo comprimido **`.zip`** que contenga el proyecto de software completo:

### a) Informe Técnico Académico (Obligatorio en formato PDF)

El informe debe cumplir estándares formales de nivel de ingeniería y reflejar rigurosamente el diseño, lógica y pruebas de estabilidad aplicadas. Debe contener:

- Portada formal con la identificación de los integrantes del grupo de trabajo.
- Introducción y contexto analítico del problema de la volatilidad del estado en dispositivos móviles.
- Descripción de la arquitectura implementada, incluyendo una explicación clara o diagrama conceptual de cómo interactúan la `data class PreferenciaViaje`, el `ViewModel`, `SavedStateHandle` y `DataStore`.
- Enlace (URL) público al repositorio de GitHub.
- Evidencias Gráficas (Capturas de pantalla completas del Emulador API 36):
  - Captura del Formulario de Viaje en ejecución con datos válidos ingresados (modo vertical).
  - Captura que evidencie el éxito de la Prueba de Rotación de Pantalla o de Muerte del Proceso, demostrando que no existe pérdida de texto ni estados en los campos de entrada.
  - Captura de la Pantalla de Resumen de Ruta evidenciando el acoplamiento cromático al Color Dinámico del sistema (Material You) tras haber modificado el fondo de pantalla (Wallpaper) del emulador.
- Explicación Conceptual: Una de las secciones críticas de su reporte; deben proveer una justificación técnica fundamentada sobre por qué el uso de la navegación fuertemente tipada (Type-Safety) incorporada en la arquitectura moderna de Android reduce los errores en tiempo de ejecución (crashes) en comparación con el antiguo paso de parámetros por cadenas de texto (Strings) o Bundles manuales.
- Conclusiones y recomendaciones de ingeniería basadas en los resultados operativos de las pruebas de resiliencia locales.
- Anexo completo con el código fuente estructurado de la aplicación.

### b) Proyecto Android Studio (Obligatorio en archivo `.zip`)

Debe entregar el código fuente limpio de la aplicación. Para garantizar el "blindaje" técnico trabajado desde el primer laboratorio, la aplicación debe cumplir con:

- Entorno de ejecución basado estrictamente en **Java 21 / JBR 21**.
- Configuración del SDK apuntando a: `compileSdk = 36` y `targetSdk = 36` (Android 16).
- Gestión de dependencias centralizada y blindada mediante el Catálogo de Versiones (`libs.versions.toml`).
- Construcción basada 100% en interfaces declarativas en **Jetpack Compose** (está terminantemente prohibido el uso de archivos XML de vistas tradicionales o llamadas a `findViewById`).

### c) Control de Versiones en GitHub (Obligatorio)

El repositorio debe reflejar un flujo de trabajo profesional y colaborativo. El historial de control de cambios debe contener al menos **4 commits significativos y descriptivos** firmados por los integrantes, utilizando la nomenclatura técnica revisada en clase, por ejemplo:

- `feat: data models and routes`
- `feat: viewmodel and dataStore implementation`
- `feat: compose ui layout with material design 3`
- `feat: type-safe navigation and testing`

---

## 🎤 2. Evaluación Oral Individual (Defensa Técnica)

Posterior a la entrega del proyecto, cada estudiante deberá rendir de manera mandatoria una evaluación oral individual para validar la autoría del código y el dominio de los principios de ingeniería de software móvil aplicados. Se verificará:

- Comprensión profunda sobre el ciclo de vida y la persistencia multinivel (`DataStore` vs. `SavedStateHandle` vs. memoria estable del `ViewModel`).
- Dominio conceptual del Flujo Unidireccional de Datos (UDF) y el patrón State Hoisting en árboles de composición reactiva.
- Capacidad para justificar y explicar la orquestación del grafo de navegación y la higiene del historial de pantallas (Back Stack).
- Resolución de un reto técnico en vivo: El estudiante deberá realizar una modificación o refactorización puntual de su código fuente en un lapso de **10 a 15 minutos** durante la evaluación.

Esta etapa es **presencial/sincrónica, individual y obligatoria** para promediar la nota final del examen.

---

## 📌 Rúbrica de Evaluación

Consulte la rúbrica detallada adjunta en este módulo del EVA para conocer los criterios de puntuación específicos:

- **Calidad Técnica y Entorno:** Compilación exitosa en API 36 con Java 21 utilizando el catálogo de versiones sin errores lógicos.
- **Implementación Arquitectónica:** Correcta elevación de estados, aislamiento de la capa visual de la lógica de datos.
- **Manejo Seguro y Resiliencia Local:** Cero cierres forzados (crashes) ante datos anómalos y superación de las pruebas de supervivencia de estado ante rotación, muerte de proceso y cierre total de la app.
- **Calidad de Entregables e Historial:** Rigurosidad en el informe de ingeniería y trazabilidad lógica en los commits de GitHub.
- **Sustentación y Modificación Oral:** Solvencia en el uso de vocabulario técnico y éxito en la alteración del código en tiempo real.

---

## 📤 Entrega

Una vez finalizado su trabajo en grupo, suba el informe en formato **PDF** y el archivo **`.zip`** de la aplicación en este espacio habilitado en Moodle.