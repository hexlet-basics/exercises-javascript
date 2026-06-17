En la programación en JavaScript, las cadenas de texto se utilizan con mucha frecuencia y en las situaciones más diversas. Con su ayuda trabajamos con texto, mostramos mensajes en la pantalla, procesamos la entrada del usuario e interactuamos con sistemas externos.

Desde el punto de vista de JavaScript, una cadena de texto es simplemente un conjunto de caracteres encerrado entre comillas. Veamos algunos ejemplos.

```javascript
'Hello'
'Goodbye'
'G'
' '
''
```

Todas estas opciones son cadenas de texto.

- `'Hello'`, `'Goodbye'` y `'G'` son cadenas de varios caracteres o de un solo carácter.
- `' '` es una cadena que consta de un solo espacio.
- `''` es una cadena vacía; no contiene ningún carácter. Cumple el mismo papel que el 0 en matemáticas.

Es decir, todo lo que está dentro de las comillas se considera una cadena de texto, incluso si solo hay un espacio o no hay nada.

Si mostramos las cadenas en la pantalla, `'Hello'` y `'Goodbye'` se verán claramente. Pero `' '` y `''` pueden resultar confusas, porque la salida de una cadena vacía parece una ausencia total, mientras que una cadena con un espacio muestra un "espacio vacío" que visualmente es difícil de distinguir. Aun así, JavaScript las distingue claramente. Una cadena vacía significa la ausencia de caracteres, mientras que una cadena con un espacio contiene un carácter de espacio concreto.

Pregunta de control. ¿Son estas las mismas cadenas o no?

```javascript
'hexlet'
' hexlet'
```

## Terminología. ¿Cadena o línea?

En la programación existe una trampa terminológica.

- Una cadena (string) es un tipo de datos (el que analizamos arriba), por ejemplo `'hello'`.
- Una línea (line) es una línea de texto en un archivo o en el código.

Por ejemplo, en el código de abajo hay una línea, pero no una cadena.

```javascript
console.log(5);
```

Para evitar confusiones, en este curso usaremos las siguientes formulaciones.

- Cadena, cuando hablamos del tipo de datos.
- Línea, cuando se trata de líneas de código.

## Comillas simples y dobles

En JavaScript, las cadenas de texto se pueden escribir tanto entre comillas simples como entre comillas dobles.

```javascript
console.log('Hello');
console.log("Hello");
```

Por defecto, se acostumbra usar comillas simples `'` si no se requieren comillas dobles dentro de la cadena. Este estilo lo sigue el popular estándar de formato de código de [AirBnb](https://github.com/airbnb/javascript).

## El problema con las comillas dentro de una cadena

Imagina que quieres imprimir la cadena *Dragon's mother*. Contiene un apóstrofe (*'s*) que coincide con el carácter de comilla simple. Intentemos así.

```javascript
console.log('Dragon's mother');
// Uncaught SyntaxError: missing ) after argument list
```

JavaScript decidirá que la cadena termina después de la palabra `Dragon`, y no reconocerá el resto como código válido, lo que provocará un error de sintaxis. Para evitar esto, encerremos la cadena entre comillas dobles.

```javascript
console.log("Dragon's mother");
```

Ahora JavaScript entiende que la comilla simple dentro de la cadena es un carácter común, y que la cadena en sí empieza y termina con comillas dobles.

Si necesitas comillas dobles dentro de la cadena y comillas simples fuera, tampoco habrá ningún problema.

```javascript
console.log('He said "No"');
```

A veces aparecen ambos tipos de comillas en una cadena.

```
Dragon's mother said "No"
```

En este caso, para que JavaScript no confunda las comillas dentro de la cadena con las exteriores, se utiliza el carácter de escape: la barra invertida `\`. Le indica al intérprete que el carácter que la sigue es parte de la cadena y no un carácter de control.

```javascript
console.log("Dragon's mother said \"No\"");
// => Dragon's mother said "No"
```

Aquí escapamos las comillas dobles dentro de una cadena encerrada entre comillas dobles.

Ten en cuenta que JavaScript interpreta `\"` como un único carácter de comilla, no como dos caracteres. Lo mismo ocurre con `\'`, `\\`, `\n` y otras secuencias de escape. Se ven como dos caracteres en el código, pero en la cadena cuentan como uno.

Lo mismo funciona en el caso inverso.

```javascript
console.log('Dragon\'s mother said "No"');
// => Dragon's mother said "No"
```

## Cómo imprimir una barra invertida

Para imprimir la barra invertida en sí, también hay que escaparla.

```javascript
console.log("\\");
// => \
```
