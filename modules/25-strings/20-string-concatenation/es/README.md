A menudo, las cadenas deben ensamblarse a partir de varias partes, por ejemplo, combinar un nombre y un apellido, agregar una unidad de medida o componer un texto a partir de una plantilla. Para ello se utiliza la operación de concatenación, es decir, el pegado de cadenas.

## Cómo combinar cadenas

En JavaScript, las cadenas se combinan con el operador `+`. Aunque este operador también se usa para sumar números, en el caso de las cadenas significa combinar, es decir, pegar el contenido.

```javascript
console.log('Dragon' + 'stone');
// => Dragonstone
```

El orden importa. Primero va la parte izquierda (`'Dragon'`), luego la parte derecha (`'stone'`). El resultado se obtiene en el orden en que se especifican los operandos.

Así funciona la combinación de varias cadenas:

```text
'Hello' + ', ' + 'World!'
└──┬──┘   └┬┘   └──┬───┘
   └────┬───┘       │
  'Hello, '    +  'World!'
     └──────┬───────┘
      'Hello, World!'
```

Ejemplos.

```javascript
console.log('Kings' + 'wood');       // => Kingswood
console.log('Kings' + 'road');       // => Kingsroad
// Aquí usamos comillas dobles por fuera porque hay una comilla simple adentro
console.log("King's" + 'Landing');   // => King'sLanding
```

JavaScript permite combinar cadenas incluso si están escritas con comillas diferentes. Lo principal es que ambas partes sean cadenas.

## Un espacio también es un carácter

Al combinar, JavaScript no inserta espacios automáticamente. Si debe haber un espacio entre las partes, hay que indicarlo manualmente.

```javascript
// Espacio al final de la primera cadena
console.log("King's " + 'Landing');  // => King's Landing

// Espacio al principio de la segunda cadena
console.log("King's" + ' Landing');  // => King's Landing
```

El resultado será el mismo. Pero si no se agrega un espacio, las palabras se pegarán.

## Secuencias de escape

En las cadenas se pueden usar secuencias de escape, por ejemplo `\n` para un salto de línea o `\t` para una tabulación. Durante la concatenación, funcionan igual que cualquier otro carácter.

```javascript
console.log('Hello,' + '\n' + 'World!');
// Hello,
// World!
```

De la misma manera, se puede usar la tabulación `\t` para alinear la salida.

```javascript
console.log('A' + '\t' + 'B'); // => A	B
```

## Conclusión

La concatenación es la combinación de cadenas mediante `+`, y las cadenas se pueden combinar independientemente del tipo de comillas.

- El pegado ocurre estrictamente en orden de izquierda a derecha.
- Los espacios no se agregan automáticamente; hay que incluirlos en las cadenas manualmente.
