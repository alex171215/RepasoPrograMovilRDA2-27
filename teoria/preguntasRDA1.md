Pregunta 1

¿A qué equivalente sintáctico de Kotlin en el manejo de nulos (el Operador Elvis `?:`) corresponde la estructura Nil-Coalescing (`??`) en el lenguaje Swift?

a. Proveer un valor por defecto o de respaldo en caso de recibir un nulo
Correcta
b. Inferencia de Tipos
c. Funciones Lambda
d. Smart Casting

Retroalimentación
La respuesta correcta es: Proveer un valor por defecto o de respaldo en caso de recibir un nulo

---

Pregunta 2

2. ¿Cuál de las siguientes características distingue a un data class en Kotlin?

a. Solo puede contener funciones abstractas.
b. No puede tener propiedades en el constructor.
c. Genera automáticamente equals(), hashCode() y toString().
Correcta
d. Permite heredar de múltiples clases.

Retroalimentación
La respuesta correcta es: Genera automáticamente equals(), hashCode() y toString().

---

Pregunta 3

¿Cuál de las siguientes características distingue a un data class en Kotlin?

a. Solo puede contener funciones abstractas.
b. No puede tener propiedades en el constructor.
c. Permite heredar de múltiples clases.
d. Genera automáticamente equals(), hashCode() y toString().
Correcta

Retroalimentación
La respuesta correcta es: Genera automáticamente equals(), hashCode() y toString().

---

Pregunta 4

¿Cuál es el mecanismo de comunicación entre procesos (IPC) de alto rendimiento en Android que sirve como el "corazón" de su sistema nervioso?

a. XNU Data Pipes
b. URL Schemes
c. Binder
Correcta
d. Mach Ports

Retroalimentación
La respuesta correcta es: Binder

---

Pregunta 5

5. ¿Cuál es el propósito principal de una extension function en Kotlin?

a. Crear una nueva clase que reemplace a la original.
b. Modificar el código fuente de una clase existente.
c. Añadir comportamiento adicional a un tipo sin necesidad de herencia.
Correcta
d. Agregar nuevas propiedades almacenadas a un tipo.

Retroalimentación
La respuesta correcta es: Añadir comportamiento adicional a un tipo sin necesidad de herencia.

---

Pregunta 6

¿Cuál es la "Regla de Oro" respecto a la mutabilidad de las variables recomendada en ingeniería móvil?

a. Siempre declarar con `val` como estado por defecto y cambiar a `var` solo si es estrictamente necesario.
Correcta
b. Usar siempre `var` para no agotar la memoria disponible en el dispositivo.
c. Intercambiar entre `val` y `var` dependiendo del tamaño de la clase de datos (data class).
d. Utilizar arreglos mutables de Java para asegurar la interoperabilidad con servicios Legacy.

Retroalimentación
La respuesta correcta es: Siempre declarar con `val` como estado por defecto y cambiar a `var` solo si es estrictamente necesario.

---

Pregunta 7

¿Cuál es la arquitectura subyacente del sistema operativo Android en su capa más profunda?

a. Un entorno de ejecución puramente nativo.
b. Un kernel híbrido basado en Darwin.
c. Un kernel monolítico basado en Linux.
Correcta
d. Un microkernel modular gestionado por Mach.

Retroalimentación
La respuesta correcta es: Un kernel monolítico basado en Linux.

---

Pregunta 8

¿Cuál es la premisa fundamental que diferencia el enfoque de Programación Funcional en Kotlin frente a la programación imperativa en Java puro?

a. La Programación Funcional en Kotlin compila forzosamente hacia lenguaje interpretado.
b. En Java las funciones existen fuera de cualquier clase u objeto principal (Top-Level).
c. En Kotlin, las funciones son "Ciudadanos de Primera Clase", lo que significa que pueden almacenarse, pasarse por parámetro o devolverse como resultados de la misma manera que una variable ordinaria.
Correcta
d. En Kotlin las funciones operan siempre con estados directamente variables (`var`).

Retroalimentación
La respuesta correcta es: En Kotlin, las funciones son "Ciudadanos de Primera Clase", lo que significa que pueden almacenarse, pasarse por parámetro o devolverse como resultados de la misma manera que una variable ordinaria.

---

Pregunta 9

1. ¿Cuál es la principal diferencia entre el paradigma imperativo y el declarativo?

a. El imperativo describe qué se quiere lograr sin indicar cómo hacerlo.
b. El imperativo indica cómo lograr un resultado mediante instrucciones explícitas.
Correcta
c. El declarativo se enfoca en describir paso a paso cómo resolver un problema.
d. El declarativo obliga a usar programación orientada a objetos.

Retroalimentación
La respuesta correcta es: El imperativo indica cómo lograr un resultado mediante instrucciones explícitas.

---

Pregunta 10

¿Cuál es una ventaja crítica de la interoperabilidad directa entre código heredado de Java y código Kotlin nuevo?

a. Permite a los desarrolladores escribir interfaces en Java y lógica nativa con C++.
b. Un archivo `.java` y un archivo `.kt` pueden convivir en el mismo paquete y llamarse directamente sin serialización ni puentes intermedios.
Correcta
c. Hace obligatorio reescribir toda la aplicación (Greenfield) garantizando seguridad absoluta en una sola versión.
d. Permite usar puentes de conversión rápida (bridges) entre ambos lenguajes.

Retroalimentación
La respuesta correcta es: Un archivo `.java` y un archivo `.kt` pueden convivir en el mismo paquete y llamarse directamente sin serialización ni puentes intermedios.

---

Pregunta 11

¿Por qué adoptó Google la filosofía "Kotlin-First" como estándar mandatorio para el ecosistema Android?

a. Porque Kotlin compila mucho más rápido que Java convirtiendo las aplicaciones en ejecutables iOS.
b. Porque Kotlin reduce el ruido sintáctico (boilerplate) permitiendo que la lógica de negocio resalte y se disminuya la deuda técnica.
Correcta
c. Para reemplazar por completo y eliminar el uso de la Máquina Virtual de Java (JVM).
d. Porque es el único lenguaje que el compilador LLVM puede leer.

Retroalimentación
La respuesta correcta es: Porque Kotlin reduce el ruido sintáctico (boilerplate) permitiendo que la lógica de negocio resalte y se disminuya la deuda técnica.

---

Pregunta 12

¿Por qué el compilador de Kotlin prohíbe el uso de la palabra reservada `inline` en funciones que son inherentemente recursivas?

a. Porque en iOS/Swift no existen las optimizaciones necesarias de Smart Casting.
b. Porque el compilador intentaría copiar y expandir el cuerpo de la función dentro de sí misma infinitamente, generando un bucle de compilación sin resolución.
Correcta
c. Porque la JVM no soporta parámetros múltiples implícitos tipo `it` en rutinas recurrentes.
d. Porque las funciones de extensión recursivas consumen demasiada batería cuando se instancian bajo el compilador Ahead-Of-Time.

Retroalimentación
La respuesta correcta es: Porque el compilador intentaría copiar y expandir el cuerpo de la función dentro de sí misma infinitamente, generando un bucle de compilación sin resolución.

---

Pregunta 13

¿Por qué el operador de Aserción No Nula (`!!`) se considera una mala práctica y un "Code Smell" en ingeniería móvil?

a. Porque fuerza a tratar un valor anulable como seguro, lanzando inmediatamente un `NullPointerException` si la suposición falla.
Correcta
b. Porque obliga al compilador K2 a deshabilitar la inferencia de tipos general.
c. Porque ignora por completo la eficiencia de consumo de batería de ART (Android Runtime).
d. Porque hace que el código compilado no sea compatible con dispositivos iOS.

Retroalimentación
La respuesta correcta es: Porque fuerza a tratar un valor anulable como seguro, lanzando inmediatamente un `NullPointerException` si la suposición falla.

---

Pregunta 14

¿Qué afirmación resume el concepto fundamental del "Embudo de Saneamiento de Datos" explicado en la arquitectura Kotlin para Jetpack Compose?

a. Los objetos crudos evaden al compilador K2 a través de un puente asíncrono para aumentar su rendimiento a costa del NullPointerException.
b. Los datos de la red entran como Singletons (`object`) y terminan renderizados en XML tradicional.
c. Toda la información de la base de datos se almacena dinámicamente usando sentencias `var` mutables para un repintado en vivo más fluido.
d. Los datos en bruto pasan estrictamente a través de filtros de Inmutabilidad (Data Classes) y Seguridad frente a Nulos (Null Safety) antes de llegar como "UI State" puro a la vista.
Correcta

Retroalimentación
La respuesta correcta es: Los datos en bruto pasan estrictamente a través de filtros de Inmutabilidad (Data Classes) y Seguridad frente a Nulos (Null Safety) antes de llegar como "UI State" puro a la vista.

---

Pregunta 15

¿Qué concepto utiliza Kotlin para reemplazar definitivamente a los miembros `static` del lenguaje Java, eliminando la compleja necesidad de sincronizar el código defensivo multihilo?

a. La clase `data class Singleton`
b. Las Extension Functions
c. Las Funciones de Orden Superior
d. La declaración `object` (El Patrón Singleton Nativo)
Correcta

Retroalimentación
La respuesta correcta es: La declaración `object` (El Patrón Singleton Nativo)

---

Pregunta 16

4. ¿Qué define una función de orden superior?

a. Una función que se ejecuta únicamente en tiempo de compilación.
b. Una función que solo puede ejecutarse dentro de una coroutine.
c. Una función que recibe o devuelve otra función.
Correcta
d. Una función que no puede tener parámetros.

Retroalimentación
La respuesta correcta es: Una función que recibe o devuelve otra función.

---

Pregunta 17

¿Qué diferencia radical existe entre un clásico `enum` en Java/Kotlin y una `sealed class` moderna en Kotlin?

a. El `enum` es compatible con Compose y la `sealed class` solo funciona en capas de backend.
b. El `enum` solo maneja valores cerrados sin datos adicionales; la `sealed class` es una jerarquía que permite que cada estado contenga un modelo de datos complejo y distinto.
Correcta
c. La `sealed class` es más difícil de evaluar en una expresión `when` que un `enum` simple.
d. El `enum` consume memoria excesiva; la `sealed class` se aloja en el procesador.

Retroalimentación
La respuesta correcta es: El `enum` solo maneja valores cerrados sin datos adicionales; la `sealed class` es una jerarquía que permite que cada estado contenga un modelo de datos complejo y distinto.

---

Pregunta 18

¿Qué es técnicamente una Función de Orden Superior (Higher-Order Function) según los documentos teóricos de Kotlin?

a. Toda expresión que devuelva siempre un tipo inmutable para ser renderizado con Compose.
b. Una función que solo puede invocarse internamente usando recursión compleja.
c. Una función que acepta expresiones lambdas como parámetros o que devuelve una función como resultado.
Correcta
d. Una función que, al procesarse en K2, corre con mayor prioridad en el CPU sobre funciones comunes.

Retroalimentación
La respuesta correcta es: Una función que acepta expresiones lambdas como parámetros o que devuelve una función como resultado.

---

Pregunta 19

¿Qué patrón es el estándar idiomático más recomendado en Android moderno para lograr ejecutar código protegido, combinando "null-safety", "smart casting", transformación y ejecución opcional segura?

a. `?.let { ... }`
Correcta
b. `var as? Class` seguido de `apply`
c. `if(var != null) { ... }`
d. `!!run { ... }`

Retroalimentación
La respuesta correcta es: `?.let { ... }`

---

Pregunta 20

3. ¿Qué representa una lambda en Kotlin?

a. Una clase que implementa una interfaz funcional.
b. Un método estático dentro de un objeto.
c. Un tipo especial de variable inmutable.
d. Una función anónima que puede ser tratada como un valor.
Correcta

Retroalimentación
La respuesta correcta es: Una función anónima que puede ser tratada como un valor.

---

Pregunta 21

¿Qué sintaxis indica que una variable pertenece al conjunto de tipos que sí tienen capacidad de contener la ausencia de valor en Kotlin?

a. La anotación `@Nullable` antes del tipo de variable.
b. La palabra reservada `optional`.
c. El sufijo del signo de exclamación (ej. `String!`).
d. El sufijo de un signo de interrogación (ej. `String?`).
Correcta

Retroalimentación
La respuesta correcta es: El sufijo de un signo de interrogación (ej. `String?`).

---

Pregunta 22

¿Qué ventaja aporta el uso de `Extension Functions` (Funciones de Extensión) en una arquitectura de software limpia en Kotlin?

a. Requieren que se acceda directamente al núcleo del sistema operativo Android y modifiquen las directrices de Binder IPC.
b. Generan herencia forzada en las bibliotecas de Jetpack Compose haciendo que cada botón deba derivar de un componente raíz.
c. Permiten "pegar" nuevo comportamiento, validaciones o utilidades directamente a tipos estándar y clases cerradas (como `String` o `Int`) sin usar herencia tradicional ni "contaminar" las clases de dominio.
Correcta
d. Evitan que se utilice el Operador Elvis obligando al programador a reescribir utilitarios estáticos complejos.

Retroalimentación
La respuesta correcta es: Permiten "pegar" nuevo comportamiento, validaciones o utilidades directamente a tipos estándar y clases cerradas (como `String` o `Int`) sin usar herencia tradicional ni "contaminar" las clases de dominio.

---

Pregunta 23

A diferencia de Android que utiliza "Garbage Collection", ¿qué sistema utiliza iOS para liberar la memoria en el instante exacto en que un objeto deja de usarse?

a. Just-In-Time Compiler (JIT)
b. Profile Guided Optimization (PGO)
c. Low Memory Killer (LMK)
d. Automatic Reference Counting (ARC)
Correcta

Retroalimentación
La respuesta correcta es: Automatic Reference Counting (ARC)

---

Pregunta 24

A diferencia de todas las otras Scope Functions de Kotlin, ¿cuál de ellas es invocada como una función independiente normal que recibe el objeto explícitamente como argumento, en vez de llamarse como una función de extensión con el punto (`.`)?

a. `also`
b. `apply`
c. `with`
Correcta
d. `run`

Retroalimentación
La respuesta correcta es: `with`

---

Pregunta 25

Al combinar una clase sellada (`sealed class`) para modelar estados de red (ej. NetworkResult) y la expresión `when` para evaluarla en la UI, ¿qué representa el "Escudo del Compilador"?

a. La obligación algorítmica del compilador de impedir la ejecución si un nuevo estado no ha sido declarado en la clase sellada base.
b. Un entorno (sandbox) en Android Runtime que absorbe fallos lógicos durante el uso del usuario final.
c. El proceso de verificación matemática que asegura la exhaustividad total, prohibiendo la compilación si un caso nuevo (ej. `Timeout`) no ha sido manejado explícitamente.
Correcta
d. La capacidad del compilador de inyectar variables de tipo nulo automáticamente al detectar lentitud.

Retroalimentación
La respuesta correcta es: El proceso de verificación matemática que asegura la exhaustividad total, prohibiendo la compilación si un caso nuevo (ej. `Timeout`) no ha sido manejado explícitamente.

---

Pregunta 26

Al integrar el paradigma Funcional con la Programación Orientada a Objetos en Kotlin para el desarrollo en Android, ¿cómo se posicionan frente a frente?

a. Ambos paradigmas se complementan: la OOP modela entidades y arquitecturas mientras la FP transforma los datos y pasa comportamiento de forma segura, inmutable y declarativa.
Correcta
b. La Programación Funcional obliga a desechar las jerarquías de dominios en favor de simples scripts matemáticos y declarativos puros en consola.
c. La Orientación a Objetos se ha abandonado totalmente tras la llegada de las Lambdas y las Scope Functions de Jetpack Compose.
d. La Programación Funcional solo se utiliza para construir vistas, delegando el manejo real del estado y seguridad de datos a métodos abstractos polimórficos tradicionales de Java.

Retroalimentación
La respuesta correcta es: Ambos paradigmas se complementan: la OOP modela entidades y arquitecturas mientras la FP transforma los datos y pasa comportamiento de forma segura, inmutable y declarativa.

---

Pregunta 27

Al procesar respuestas de APIs o modelos de datos anidados, ¿qué operador se utiliza para detener la evaluación inmediatamente (cortocircuito) retornando null si algún eslabón es nulo, sin producir una excepción?

a. Smart Casts (is)
b. Operador de Llamada Segura (?.)
Correcta
c. Operador de Aserción No Nula (!!)
d. Operador Elvis (?:)

Retroalimentación
La respuesta correcta es: Operador de Llamada Segura (?.)

---

Pregunta 28

Al procesar un dato proveniente de una fuente insegura (como una API web), si se desea transformar el valor en un modelo UI únicamente en caso de que sea no nulo (encadenando `?.`) y devolver el nuevo resultado renderizado accediendo mediante el alias `it`, ¿qué Scope Function idiomática es obligatoria?

a. `let`
Correcta
b. `apply`
c. `also`
d. `with`

Retroalimentación
La respuesta correcta es: `let`

---

Pregunta 29

Analizando los lenguajes Kotlin y Swift en la plataforma móvil (KMP), ¿qué mecanismo en Swift es análogo directo a declarar una variable nula `String?` en Kotlin?

a. Nil-Coalescing
b. Forced Unwrapping
c. Variables estáticas compartidas
d. El tipo Optional (`Optional<String>`)
Correcta

Retroalimentación
La respuesta correcta es: El tipo Optional (`Optional<String>`)

---

Pregunta 30

Cuando defines una lambda simple de un solo parámetro (ej. la transformación de elementos en una lista `lista.map { ... }`), Kotlin elimina el ruido de tener que nombrar el argumento. ¿Con qué variable implícita se accede al valor?

a. `val`
b. `param`
c. `this`
d. `it`
Correcta

Retroalimentación
La respuesta correcta es: `it`

---

Pregunta 31

Cuando Kotlin consume un método de Java que carece de anotaciones de nulidad (@Nullable o @NotNull), ¿qué tipo de dato problemático le asigna el compilador?

a. Tipo Opcional (Optional)
b. Tipo estrictamente seguro (String)
c. Tipo anulable por defecto (String?)
d. Platform Type o Tipo de Plataforma (String!)
Correcta

Retroalimentación
La respuesta correcta es: Platform Type o Tipo de Plataforma (String!)

---

Pregunta 32

Cuando se utiliza `when` como EXPRESIÓN (devolviendo un valor), ¿qué regla exige implacablemente el compilador de Kotlin para evitar comportamientos impredecibles?

a. Que cada caso solo evalúe valores de variables inmutables creadas por `let`.
b. Que la exhaustividad sea completa (es obligatorio cubrir todos los casos posibles o colocar un bloque `else`).
Correcta
c. Que la expresión no use la palabra reservada `else`.
d. Que el resultado se evalúe de manera paralela en múltiples hilos concurrentes.

Retroalimentación
La respuesta correcta es: Que la exhaustividad sea completa (es obligatorio cubrir todos los casos posibles o colocar un bloque `else`).

---

Pregunta 33

El uso intensivo de lambdas en funciones de colección (como `.filter`, `.map`) crearía numerosos objetos en memoria en Java. Para evitar este costo de rendimiento sin sacrificar código idiomático en Kotlin, ¿qué modificador se utiliza en la declaración de estas funciones de orden superior?

a. `inline`
Correcta
b. `crossinline`
c. `suspend`
d. `reified`

Retroalimentación
La respuesta correcta es: `inline`

---

Pregunta 34

En 2026, ¿qué modelo de compilación utiliza el Android Runtime (ART) para equilibrar el tiempo de instalación, espacio en disco y rendimiento de ejecución?

a. Generación exclusiva de código máquina nativo a través de compilación LLVM.
b. Un sistema puramente interpretado en tiempo real sin almacenamiento en disco.
c. Un modelo de compilación híbrido que combina Just-In-Time (JIT) y Ahead-Of-Time (AOT).
Correcta
d. Ejecución 100% nativa antes de la distribución.

Retroalimentación
La respuesta correcta es: Un modelo de compilación híbrido que combina Just-In-Time (JIT) y Ahead-Of-Time (AOT).

---

Pregunta 35

En arquitecturas reactivas (como Jetpack Compose), es vital modificar estados creando nuevas instancias en vez de alterar las existentes (estabilidad de estado). ¿Qué método autogenerado en una `data class` hace esto posible de manera simple?

a. `componentN()`
b. `equals()`
c. `copy()`
Correcta
d. `hashCode()`

Retroalimentación
La respuesta correcta es: `copy()`

---

Pregunta 36

En el mecanismo de seguridad "Sandboxing", ¿cómo engaña el sistema operativo Android a cada aplicación para garantizar el aislamiento?

a. Le exige pasar por un puente intermedio de serialización llamado Seatbelt.
b. Le asigna un Identificador de Usuario (UID) único haciéndole creer que es el único usuario en el sistema.
Correcta
c. Verifica los permisos de acceso en tiempo de compilación.
d. Le asigna una URL especial de comunicación que no requiere autenticación.

Retroalimentación
La respuesta correcta es: Le asigna un Identificador de Usuario (UID) único haciéndole creer que es el único usuario en el sistema.

---

Pregunta 37

En el sistema operativo iOS, ¿qué componente del kernel híbrido gestiona las tareas de más bajo nivel, como la planificación de hilos (threading)?

a. Seatbelt
b. Mach
Correcta
c. I/O Kit
d. BSD

Retroalimentación
La respuesta correcta es: Mach

---

Pregunta 38

En Java, instanciar un modelo de datos estructurado puede tomar hasta 50 líneas. Al utilizar `data class` en Kotlin esto se reduce a una sola. ¿Qué está haciendo realmente el lenguaje detrás de escena?

a. Usa inteligencia artificial (Gemini AI) para adivinar el contenido del JSON de entrada.
b. Delega al compilador K2 la generación automática del código repetitivo (getters, setters, equals, hashCode, toString y copy).
Correcta
c. Carga toda la validación nula a la memoria virtual distribuida del Kernel.
d. Modifica temporalmente la variable utilizando reflection (reflexión) en ejecución.

Retroalimentación
La respuesta correcta es: Delega al compilador K2 la generación automática del código repetitivo (getters, setters, equals, hashCode, toString y copy).

---

Pregunta 39

En Kotlin 2.0, si validas `if (obj is String)`, ¿qué mecanismo del compilador permite utilizar los métodos de `String` directamente dentro del bloque sin hacer conversiones forzadas manuales?

a. Type Erasure
b. Smart Casts (Moldeado Inteligente)
Correcta
c. Inline Functions
d. Null Safety

Retroalimentación
La respuesta correcta es: Smart Casts (Moldeado Inteligente)

---

Pregunta 40

En Kotlin, ¿qué capacidad del compilador elimina la redundancia visual al no requerir que se declare el tipo de forma explícita si el contexto es evidente (ej. `val age = 25`)?

a. Inferencia de Tipos
Correcta
b. Smart Casting
c. Platform Typing
d. Manejo Seguro de Nulos

Retroalimentación
La respuesta correcta es: Inferencia de Tipos

---

Pregunta 41

En Kotlin, la sentencia `when` no requiere la instrucción `break` utilizada en el antiguo `switch` de Java. ¿Qué error de diseño humano se elimina completamente con este cambio?

a. El desbordamiento de pila (StackOverflow) en funciones recursivas anidadas.
b. El "Fall-through", donde por olvido del programador el código "cae" al siguiente caso accidentalmente.
Correcta
c. La mutabilidad no deseada generada en las variables de control.
d. El uso innecesario de bucles `for` y `while`.

Retroalimentación
La respuesta correcta es: El "Fall-through", donde por olvido del programador el código "cae" al siguiente caso accidentalmente.

---

Pregunta 42

En la "Evolución del modelo de datos: De la Verbosidad a la Expresividad", ¿qué define a un código fuente "expresivo" en Kotlin comparado con su predecesor en Java?

a. Un código orientado exclusivamente a la programación funcional en reemplazo 100% estricto de la Orientación a Objetos.
b. Un código que, al eliminar todo el ruido ceremonial y repetitivo, permite que el desarrollador comunique su intención semántica tan directamente que se entienda tras leerlo una única vez.
Correcta
c. Un código diseñado con comentarios autogenerados (javadocs) insertos por la herramienta de Inteligencia Artificial Gemini en cada línea.
d. Un código que contiene la mayor cantidad de verbos lógicos, pre-condiciones, capturas de excepciones manuales y aserciones matemáticas posibles.

Retroalimentación
La respuesta correcta es: Un código que, al eliminar todo el ruido ceremonial y repetitivo, permite que el desarrollador comunique su intención semántica tan directamente que se entienda tras leerlo una única vez.

---

Pregunta 43

En las buenas prácticas de arquitectura en Kotlin, es considerado perjudicial y un "Code Smell" el anidar múltiples bloques `let` o `run` consecutivos, ¿por qué?

a. Porque esto genera confusión cognitiva al mezclarse internamente referencias anónimas múltiples (ya no se sabe a qué se refiere `it` o `this`).
Correcta
b. Porque el Android Runtime (ART) los ignorará si se interrumpe la conexión a internet.
c. Porque detienen inmediatamente la propagación de corrutinas dentro de las sealed classes.
d. Porque provocan bloqueos permanentes de subprocesos impidiendo que el recolector de basura vacíe memoria.

Retroalimentación
La respuesta correcta es: Porque esto genera confusión cognitiva al mezclarse internamente referencias anónimas múltiples (ya no se sabe a qué se refiere `it` o `this`).

---

Pregunta 44

Para elegir correctamente entre las "Scope Functions" del lenguaje Kotlin (apply, run, with, let, also), se deben contestar dos preguntas fundamentales. ¿Cuáles son?

a. ¿El objeto es de un tipo Platform (`!`) o Nullable (`?`)? y ¿Qué estado sellado lo engloba?
b. ¿El valor a evaluar proviene de red o base de datos local? y ¿Será procesado en JIT o AOT?
c. ¿El proyecto fue iniciado con "Kotlin-First" o migrado desde Java heredado? y ¿Utiliza Jetpack Compose?
d. ¿Cómo quiero acceder al objeto dentro del bloque (como `this` o como `it`)? y ¿Qué necesito que devuelva la función (el objeto original o el resultado del cálculo)?
Correcta

Retroalimentación
La respuesta correcta es: ¿Cómo quiero acceder al objeto dentro del bloque (como `this` o como `it`)? y ¿Qué necesito que devuelva la función (el objeto original o el resultado del cálculo)?

---

Pregunta 45

Para solucionar el histórico problema del `NullPointerException` en entornos de producción, ¿cómo aborda Kotlin el problema desde su raíz?

a. Integrando la nulidad en el Sistema de Tipos (por defecto, las variables NO aceptan nulos).
Correcta
b. Delegando al desarrollador la comprobación manual a través de estructuras `if (variable != null)`.
c. Agregando múltiples sentencias obligatorias `try/catch` de forma automática e invisible.
d. Creando clases anónimas por cada propiedad potencialmente inestable.

Retroalimentación
La respuesta correcta es: Integrando la nulidad en el Sistema de Tipos (por defecto, las variables NO aceptan nulos).

---

Pregunta 46

Según el análisis del ecosistema móvil en 2026, ¿qué tendencia describe el fenómeno de la "Premiumización"?

a. La migración de todos los usuarios de la gama media hacia plataformas basadas en la nube.
b. El abandono definitivo de Android en favor del sistema operativo iOS a nivel mundial.
c. La eliminación total del entorno de ejecución mixto en dispositivos móviles básicos.
d. La renovación de dispositivos hacia modelos con mejor hardware capaz de procesar IA y Realidad Aumentada localmente.
Correcta

Retroalimentación
La respuesta correcta es: La renovación de dispositivos hacia modelos con mejor hardware capaz de procesar IA y Realidad Aumentada localmente.

---

Pregunta 47

Según la filosofía de diseño y robustez de Kotlin, ¿qué representa la palabra reservada `val`?

a. Una referencia de solo lectura (inmutable), que es intrínsecamente segura para hilos.
Correcta
b. Una variable de lectura y escritura (mutable), ideal para contadores.
c. Un valor dinámico inferido en tiempo de ejecución.
d. Un estado cambiante efímero de la interfaz de usuario.

Retroalimentación
La respuesta correcta es: Una referencia de solo lectura (inmutable), que es intrínsecamente segura para hilos.

---

Pregunta 48

Si comparamos el impacto directo medible del sistema de tipos seguro de Kotlin en los proyectos Android modernos frente a los desarrollados exclusivamente en Java, ¿cuál es un beneficio estadístico validado en la industria?

a. La anulación absoluta del consumo de datos en red al usar lambdas optimizadas por el compilador AOT de Android 16.
b. Un ahorro del 94% del espacio total en disco del sistema de archivos al compilar los proyectos.
c. Una reducción probada de casi el 20% en la probabilidad de "crashes" (cierres inesperados) en producción gracias a la detección temprana del compilador de los errores de referencia nula.
Correcta
d. Un rendimiento un 50% superior al ejecutar Garbage Collection en gamas medias locales en Latinoamérica.

Retroalimentación
La respuesta correcta es: Una reducción probada de casi el 20% en la probabilidad de "crashes" (cierres inesperados) en producción gracias a la detección temprana del compilador de los errores de referencia nula.

---

Pregunta 49

Si el objeto evaluado es nulo y deseamos asignar un estado válido garantizado (por ejemplo: `respuestaAPI ?: "Sin conexión"`), ¿qué operador estamos utilizando?

a. El operador de aserción segura (!!)
b. El operador de corto circuito (&&)
c. El operador de Llamada Segura (?.)
d. El operador Elvis (?:)
Correcta

Retroalimentación
La respuesta correcta es: El operador Elvis (?:)

---

Pregunta 50

Si necesitamos acceder al objeto mediante el identificador `it` para ejecutar un efecto secundario (como loggear su estado o almacenar un registro), pero deseamos continuar la cadena de ejecución sin alterar el retorno del objeto original, ¿qué Scope Function corresponde?

a. `run`
b. `apply`
c. `also`
Correcta
d. `let`

Retroalimentación
La respuesta correcta es: `also`