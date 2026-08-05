Al trabajar con cadenas nos encontramos a menudo con una tarea: extraer una parte de la cadena. Por ejemplo, obtener el año de una fecha, el nombre de un nombre completo o los primeros caracteres de una dirección de correo electrónico. Para esos casos, JavaScript tiene una herramienta cómoda: el método `slice()`.

## ¿Qué es una subcadena?

Una subcadena es una parte de una cadena, algo que está contenido dentro de otra cadena. Por ejemplo, en la cadena `'12-08-2034'` una subcadena puede ser `'2034'`, `'12'` o incluso `'-'`. Todo depende de qué información necesitemos extraer.

Supongamos que tenemos una cadena con la fecha `'12-08-2034'`. Queremos obtener de ella solo el año, `'2034'`. En esta cadena cada carácter tiene un índice (una posición), empezando por cero:

```text
'1' '2' '-' '0' '8' '-' '2' '0' '3' '4'
 0   1   2   3   4   5   6   7   8   9
```

El año empieza en el índice 6 y termina en el 9. Para extraerlo usamos `slice()`:

```javascript
const value = '12-08-2034';
const year = value.slice(6, 10);
console.log(year); // => 2034
```

La forma de escribir «valor, punto, nombre» es una llamada a un método; qué son los métodos lo veremos en la lección sobre objetos, por ahora basta con usar `.slice()` siguiendo el ejemplo.

La llamada `value.slice(6, 10)` toma los caracteres desde el índice 6 hasta el 9 inclusive. El formato:

```text
cadena.slice(inicio, fin)
```

El carácter cuyo índice se indica como «fin» no se incluye. Se puede entender como el número del carácter ante el cual hay que detenerse.

```javascript
const value = 'code-basics';

console.log(value.slice(5, 11)); // => basics (del índice 5 al 10)
console.log(value.slice(0, 7));  // => code-ba (del índice 0 al 6)
console.log(value.slice(2, 6));  // => de-b
```

## El corte devuelve una cadena

`slice()` siempre devuelve una cadena, incluso si dentro solo hay dígitos. Eso significa que el resultado se puede usar como una cadena normal: concatenarlo, mostrarlo, pasarlo a funciones y volver a cortarlo:

```javascript
const value = '01-12-9873';

const part = value.slice(3, 7); // => 12-9
console.log(part.slice(0, 2));  // => 12
```

Primero obtuvimos la subcadena `'12-9'`, y después hicimos de ella un nuevo corte, `'12'`.

## Corte hasta el final o desde el principio

Si no se indica el segundo argumento, `slice()` devolverá todo desde el índice inicial hasta el final de la cadena. Y `slice(0)` o `slice()` sin argumentos devolverá la cadena completa:

```javascript
const value = 'Hexlet';

console.log(value.slice(3));  // => let     // del carácter 3 al final
console.log(value.slice(0, 3)); // => Hex   // del principio al carácter 3
console.log(value.slice());   // => Hexlet  // la cadena completa
```

## Índices negativos

`slice()` también sabe contar desde el final de la cadena. Para eso se usan índices negativos: `-1` corresponde al último carácter, `-2` al penúltimo y así sucesivamente. Es cómodo cuando no se conoce de antemano la longitud de la cadena, pero hay que tomar la «cola» o la «parte media» respecto al final:

```javascript
const value = 'Hexlet';

console.log(value.slice(-1));   // => t   // el último carácter
console.log(value.slice(3, -1)); // => le // del 3 al penúltimo
console.log(value.slice(-3));   // => let // los últimos tres caracteres
```

## Corte con variables

Los límites del corte no tienen que estar fijados con números. Se pueden usar variables:

```javascript
const start = 1;
const end = 5;

const value = 'Hexlet';
console.log(value.slice(start, end)); // => exle
```

Esto resulta especialmente útil cuando los límites se calculan durante la ejecución del programa.

## Lo que `slice()` no tiene

En algunos lenguajes (por ejemplo, en Python) el corte tiene un tercer parámetro, el paso, y con él se puede tomar cada segundo carácter o invertir la cadena. El método `slice()` no tiene paso. Ese tipo de tareas en JavaScript se resuelven con bucles y otras herramientas a las que volveremos más adelante.

Existe también un método parecido, `substring()`. Funciona casi como `slice()`, pero no entiende los índices negativos (los trata como `0`), por eso para extraer la «cola» de una cadena resulta más cómodo `slice()`.

## Chuleta rápida

```javascript
const value = 'Hexlet';

value.slice();      // Hexlet  — la cadena completa
value.slice(0);     // Hexlet
value.slice(5);     // t
value.slice(0, 5);  // Hexle
value.slice(-1);    // t       — el último carácter
value.slice(-3);    // let     — los últimos tres caracteres
value.slice(2, -1); // xle     — del tercero al penúltimo
```

No te preocupes si ahora no memorizas todas las combinaciones: empezarás a usarlas en la práctica muy pronto. Lo principal es entender la estructura básica `cadena.slice(inicio, fin)`.
