# Criterios de calificación

## Rúbrica

### Resiliencia Local y Persistencia Multinivel

| Nivel | Puntaje | Descripción |
|---|---:|---|
| **Necesita mejorar** | 0 puntos | No existe implementación de lógica de persistencia, ni uso de ViewModel o DataStore. La gestión de estados es inexistente o utiliza variables globales desestructuradas. |
| **Regular** | 1 punto | No hay arquitectura multinivel. La aplicación pierde datos elementales al rotar la pantalla o al enviarla a segundo plano. Carece de validación segura de datos, provocando cierres forzados (crashes) ante entradas nulas o de texto. |
| **Bueno** | 2 puntos | El estado sobrevive de forma correcta a la rotación de pantalla y la persistencia en disco (DataStore) funciona, pero la aplicación falla en restaurar los datos temporales del formulario tras simular la muerte del proceso (Process Death). |
| **Excelente** | 2.5 puntos | La persistencia está perfectamente segmentada: los campos efímeros del formulario sobreviven a la rotación (ViewModel) y a la muerte del proceso (SavedStateHandle), mientras que los datos globales persisten en disco (DataStore) tras el cierre completo de la app. Sanitización impecable de entradas numéricas con operadores de seguridad (?:, toIntOrNull). |

### Navegación Segura y Gestión de la Pila

| Nivel | Puntaje | Descripción |
|---|---:|---|
| **Necesita mejorar** | 0 puntos | La navegación está rota o mal configurada, provocando fallos críticos en tiempo de ejecución al intentar transferir datos o interactuar con el botón de retorno. |
| **Regular** | 1 punto | Implementa un flujo entre las pantallas, pero viola las directrices modernas de Android al utilizar rutas basadas en cadenas de texto nativas (Strings manuales) o Bundles legacy, perdiendo la validación en tiempo de compilación. |
| **Bueno** | 2 puntos | La navegación se realiza entre las pantallas inyectando los tipos de datos requeridos, pero la higiene de la pila de transiciones es deficiente (el usuario puede acumular instancias idénticas de la pantalla de formulario si presiona atrás sucesivamente). |
| **Excelente** | 2.5 puntos | Orquestación impecable del grafo de navegación dentro del NavHost utilizando rutas 100% tipadas mediante clases `@Serializable`. Se demuestra una correcta higiene del Back Stack configurando de forma precisa `popUpTo` junto con la bandera `launchSingleTop` para evitar la acumulación redundante de pantallas en memoria. |

### Interfaz Declarativa e Identidad Visual Adaptativa

| Nivel | Puntaje | Descripción |
|---|---:|---|
| **Necesita mejorar** | 0 puntos | No utiliza componentes de Material Design 3 ni la estructura base de andamios. El diseño visual es desorganizado, no adaptativo o mezcla de forma inadecuada paradigmas imperativos (XML). |
| **Regular** | 1 punto | Se evidencian colores hexadecimales y tipografías estáticas incrustadas directamente en los composables (hardcoded), rompiendo el flujo unidireccional de diseño. La interfaz no respeta márgenes o jerarquías visuales. |
| **Bueno** | 2 puntos | La interfaz es declarativa y utiliza correctamente la estructura de contenedores de Material Design 3, pero el dinamismo cromático (Material You) no reacciona al entorno del sistema operativo debido a un acoplamiento laxo en el tema de la aplicación. |
| **Excelente** | 2.5 puntos | Diseño declarativo impecable en Jetpack Compose estructurado bajo componentes semánticos (Scaffold, TopAppBar, Card, FloatingActionButton). Forzado completo del Color Dinámico (Material You); toda la interfaz muta de forma inmediata al cambiar el Wallpaper del emulador sin usar colores fijos (hardcoded). |

### Estándar Técnico y Control de Versiones

| Nivel | Puntaje | Descripción |
|---|---:|---|
| **Necesita mejorar** | 0 puntos | El código fuente no compila debido a errores graves de configuración en los archivos de Gradle, o el enlace al repositorio de GitHub no es público/funcional para su respectiva auditoría técnica. |
| **Regular** | 1 punto | La aplicación se ejecuta, pero corre bajo un entorno técnico obsoleto o diferente al estandarizado en clase (ej: Java 17 o APIs inferiores a la 36). El uso del sistema de control de cambios Git es marginal o fue subido en un commit único final. |
| **Bueno** | 2 puntos | El software compila y se ejecuta en el entorno estandarizado (API 36 / Java 21), pero el repositorio en GitHub es deficiente: presenta menos de 4 commits o sus mensajes carecen de valor descriptivo de ingeniería (ej: "update", "fix"). |
| **Excelente** | 2.5 puntos | El proyecto compila limpiamente bajo la estandarización local: API 36 (Android 16) y Java 21 / JBR 21, centralizado en el catálogo de versiones (`libs.versions.toml`). El repositorio en GitHub demuestra un uso profesional con al menos 4 commits significativos firmados y estructurados progresivamente. |

### Calidad de la Documentación Científico-Técnica (Informe Académico)

| Nivel | Puntaje | Descripción |
|---|---:|---|
| **Necesita mejorar** | 0 puntos | No se entrega el reporte técnico en formato PDF, presenta evidencias plagiadas/copiadas de los laboratorios de clase, o el contenido carece de rigor formal y bibliografía. |
| **Regular** | 1 punto | El informe está incompleto: faltan capturas de pantalla de los escenarios operativos del emulador, omitió el anexo del código fuente fuente, o no cumple con el formato académico ni la justificación conceptual sobre la navegación tipada. |
| **Bueno** | 2 puntos | El documento cuenta con la estructura básica y las capturas de pantalla solicitadas, pero el formato de Normas APA en la bibliografía es impreciso, o las conclusiones y recomendaciones de ingeniería son superficiales y descriptivas en lugar de analíticas. |
| **Excelente** | 2.5 puntos | Informe académico formal de nivel de ingeniería que incluye: portada formal, capturas estructurales de paquetes, y evidencias explícitas de las pruebas de resiliencia del emulador. Incluye conclusiones profundas y recomendaciones técnicas. Uso riguroso de Normas APA en citas y bibliografía. Contiene el código fuente completo como anexo. |