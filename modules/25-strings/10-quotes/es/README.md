
```javascript
'Hola'
'Adiós'
'G'
' '
''
```

¿Cuáles de estas cinco opciones son cadenas de texto?

Con las primeras dos opciones está claro, son definitivamente cadenas de texto, ya hemos trabajado con construcciones similares y hemos dicho que las cadenas de texto son conjuntos de caracteres.

Cualquier carácter individual entre comillas es una cadena de texto. Una cadena de texto vacía `''` también es una cadena de texto. Es decir, consideramos como cadena de texto todo lo que está dentro de comillas, incluso si es un espacio, un solo carácter o incluso la ausencia de caracteres.

Anteriormente, en las lecciones escribimos cadenas de texto entre comillas simples, pero esa no es la única forma. También se pueden usar comillas dobles:

```javascript
// El estándar de codificación de airbnb recomienda
// usar comillas simples siempre que sea posible
console.log("¡Dracarys!");
```

Imagina que quieres imprimir la frase _Dragon's Mother_. El apóstrofe antes de la letra **s** es el mismo carácter que una comilla simple. Intentemos:

```javascript
console.log('Dragon's Mother');
// Uncaught SyntaxError: missing ) after argument list
```

Este programa no funcionará. Desde el punto de vista de JavaScript, la cadena de texto comenzó con una comilla simple y luego terminó después de la letra **n**. Luego hubo caracteres `s mother` sin comillas, lo que significa que no es una cadena de texto. Y luego hubo una comilla de apertura de cadena que nunca se cerró: `');`. Este código es sintácticamente incorrecto (se puede ver incluso por cómo se resalta el código).

Aquí es donde las comillas dobles nos ayudan. Esta versión del programa funcionará correctamente:

```javascript
console.log("Dragon's Mother");
```

Ahora el intérprete sabe que la cadena de texto comenzó con una comilla doble, por lo que también debe terminar con una comilla doble. Y la comilla simple dentro se convirtió en parte de la cadena de texto.

Lo contrario también es cierto. Si queremos usar comillas dobles dentro de una cadena de texto, debemos hacer la cadena de texto con comillas simples. Y la cantidad de comillas dentro de la cadena de texto no importa.

¿Y si queremos crear una cadena de texto como esta?

```
Dragon's mother said "No"
```

En ella hay tanto comillas simples como comillas dobles. ¿Qué hacer en esta situación? De alguna manera tenemos que decirle al intérprete que cada comilla es parte de la cadena de texto y no el comienzo o el final de la cadena de texto.

Para esto se **escapan** los caracteres especiales. En nuestro caso, el carácter que indica el final y el comienzo de la cadena de texto es una comilla simple o una comilla doble, dependiendo de la situación. Para escapar se utiliza una barra invertida `\`.

```javascript
// Solo se escapa ", ya que en esta situación
// las comillas dobles tienen un significado especial
console.log("Dragon's mother said \"No\"");
// => Dragon's mother said "No"
```

Mira atentamente: tuvimos que agregar `\` para las comillas dobles, pero no para la comilla simple (apóstrofe), porque la cadena de texto en sí se creó con comillas dobles. Si la cadena de texto se hubiera creado con comillas simples, entonces se habría necesitado un carácter de escape antes del apóstrofe, pero no antes de las comillas dobles.

```javascript
// \ no se muestra si después de él hay un carácter normal,
// no un carácter especial
console.log("Death is \so terribly final");
// => Death is so terribly final
```

¿Y si queremos imprimir la barra invertida en sí? De la misma manera que cualquier otro carácter especial, debemos escaparlo con el mismo carácter.

```javascript
console.log("\\");
// => \
```

Pregunta de autoevaluación, ¿qué imprimirá este código?

```javascript
console.log("\\ \\ \\\\ \\\ \'\"");
```

<details>
<summary>Respuesta</summary>

Este código imprimirá la siguiente cadena de texto: `\ \ \\ \ '"`.

</details>
