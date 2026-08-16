Cuando distintos desarrolladores escriben código en estilos diferentes, el código se vuelve difícil de leer: aquí sobra un espacio, allí la indentación es distinta. Para evitar estos desacuerdos, los programadores acordaron seguir un único estilo de codificación. Este conjunto de reglas describe cómo debe verse el código: la colocación de espacios, el formato de las funciones y los nombres de las variables.

Un estilo único significa un código igualmente comprensible para todos los miembros del equipo, sin importar quién lo haya escrito. Esto ahorra tiempo, reduce la cantidad de errores y facilita el trabajo en conjunto.

## Estándares de codificación

En el ecosistema de JavaScript no existe un único estándar oficial, pero sí hay guías ampliamente aceptadas, por ejemplo la de [AirBnb](https://github.com/airbnb/javascript). Describen en detalle cómo formatear el código: qué indentación usar, cómo colocar los espacios, qué longitud deben tener las líneas, cómo nombrar las variables y mucho más.

Estas reglas son conocidas y utilizadas por los desarrolladores de JavaScript. A los principiantes les resulta útil consultarlas de vez en cuando y desarrollar buenos hábitos desde el principio. Sin embargo, no es necesario memorizarlo todo de golpe.

## Linters: verificación automática del código

No es necesario memorizar todas las reglas a mano. Existen programas especiales que lo hacen por ti. Se llaman linters.

Un linter es una herramienta que analiza tu código e informa sobre las violaciones de los estándares. Te ayuda a:

- Encontrar lugares sospechosos, por ejemplo una variable que declaraste y olvidaste usar
- Seguir las reglas acordadas en el equipo
- Escribir expresiones legibles y limpias

## Un linter moderno: oxlint

Hoy en día, uno de los linters más rápidos para JavaScript es [oxlint](https://oxc.rs/docs/guide/usage/linter.html). Está escrito en Rust, por eso revisa incluso proyectos grandes en fracciones de segundo.

Veamos un ejemplo:

```javascript
const result = 1 + 3;
```

El valor se calculó y se guardó en una variable, pero después no se usó en ninguna parte. El programa funciona, pero una línea así casi siempre significa un error o código sin terminar. El linter te avisará:

```text
Código                  Linter          Resultado
┌───────────────────┐   ┌────────┐   ┌──────────────────────────┐
│ const result      │ → │ oxlint │ → │ eslint(no-unused-vars):  │
│   = 1 + 3;        │   │        │   │ 'result' is never used   │
└───────────────────┘   └────────┘   └──────────────────────────┘
```

## El formato lo revisa el formateador

La colocación de espacios e indentación es una tarea aparte, y el linter no la resuelve. Para eso está el formateador, que en oxc es [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html). Este código:

```javascript
const result = 1+ 3;
```

El formateador lo convierte en este otro:

```javascript
const result = 1 + 3;
```

Esa es la diferencia entre las dos herramientas. El formateador corrige el formato en silencio y de forma automática, mientras que el linter informa sobre problemas que tendrás que revisar tú.

Casi nunca tendrás que colocar los espacios a mano. Pero vale la pena aprender a notarlos con la vista: así recordarás más rápido cómo se ve un código prolijo y empezarás a escribirlo así desde el principio.

## Las reglas y su significado

Cada mensaje del linter está vinculado a una regla concreta. Unas reglas prohíben las variables sin usar, otras exigen comparar valores con `===`, y otras limitan la longitud de una función. Cuando recién empiezas, estos detalles pueden parecer poco importantes. Pero con el tiempo queda claro que son justamente ellos los que forman un estilo único y legible.

Puedes consultar la lista completa de reglas de oxlint en la [documentación oficial](https://oxc.rs/docs/guide/usage/linter/rules.html).

## Uso del linter en tus propios proyectos

Cuando empieces a escribir tus propios proyectos fuera de la plataforma de aprendizaje, el linter será un ayudante indispensable. Se puede configurar en cualquier editor de código, ejecutar en la terminal o integrar en la compilación del proyecto. El linter muestra los errores y sabe corregirlos automáticamente.
