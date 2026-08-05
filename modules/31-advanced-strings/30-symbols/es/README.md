A veces hace falta obtener un solo carácter de una cadena. Por ejemplo, si el sitio conoce el nombre y el apellido del usuario y hay que mostrarlos en formato abreviado, del tipo `A. Ivanov`. Para eso se necesita tomar la primera letra del nombre.

En JavaScript, para acceder a los caracteres de una cadena se usa la indexación. La indexación significa que cada carácter de la cadena tiene su propio número, es decir, su índice. La indexación empieza en cero: el primer carácter tiene el índice `0`, el segundo el `1` y así sucesivamente. Imaginemos que tenemos una cadena:

```javascript
const firstName = 'Alexander';
```

Para obtener la primera letra, indicamos su posición (el índice) entre corchetes:

```javascript
console.log(firstName[0]); // => A
```

Los índices en JavaScript (y en muchos lenguajes) empiezan en cero:

```text
Carácter  A  l  e  x  a  n  d  e  r
Índice    0  1  2  3  4  5  6  7  8
```

La longitud de la cadena `Alexander` es `9`, por eso el índice del último carácter es `8`, es decir, `9 - 1`. La longitud de una cadena se puede averiguar con la función `length()`:

```javascript
import { length } from 'hexlet-basics/string';

console.log(length(firstName));               // => 9
console.log(firstName[length(firstName) - 1]); // => r
```

La línea `import` al principio del archivo conecta la función didáctica `length()` de la biblioteca: hay que copiarla tal cual. Cómo están hechas las importaciones lo veremos en las lecciones sobre módulos.

Si cambia la longitud de la cadena, el último carácter también se desplaza y habrá que volver a calcular su índice.

## Salirse de los límites de la cadena

A diferencia de algunos lenguajes, en JavaScript acceder a un índice que no existe no provoca un error: se devuelve un valor especial, `undefined`. Es el «aquí no hay nada» del mundo de JavaScript; lo veremos en detalle en el módulo sobre tipos de datos.

```javascript
console.log(firstName[9]); // => undefined
```

Por eso, en programación se acostumbra a comprobar la longitud de la cadena y acceder a sus caracteres solo cuando es seguro. Llegaremos a eso en lecciones futuras.

## Extraer caracteres desde el final

En algunos lenguajes (por ejemplo, en Python) para acceder a los caracteres desde el final se usan índices negativos. En JavaScript los corchetes **no** entienden los índices negativos: `firstName[-1]` devolverá `undefined`. Por eso el índice de un carácter contado desde el final se calcula a través de la longitud de la cadena:

```javascript
import { length } from 'hexlet-basics/string';

const word = 'Hexlet';

console.log(word[length(word) - 1]); // => t, el último carácter
console.log(word[length(word) - 2]); // => e, el penúltimo carácter
```

```text
Cadena:  'H' 'e' 'x' 'l' 'e' 't'
Índice:   0   1   2   3   4   5
```

Aquí `length(word)` es igual a `6`, por eso el último carácter tiene el índice `length(word) - 1`, es decir, `5`. Este enfoque funciona correctamente incluso si la cadena cambia de longitud.

El índice se puede guardar en una variable:

```javascript
const index = 0;
console.log(word[index]); // => H
```

Este enfoque es útil cuando el índice se calcula en algún lugar del código y después se usa para acceder al carácter necesario.

## Caracteres especiales

En la indexación se cuentan las letras normales, los signos y los caracteres especiales. Todos ocupan una posición en la cadena y tienen su índice, aunque «no se vean» en la pantalla.

Por ejemplo, en la cadena `'\nyou'` el primer carácter es `\n` (el salto de línea), y en el índice `1` ya está la letra `y`. Por eso el acceso `magic[1]` devolverá precisamente `y`.

## Piensa: ¿qué mostrará este código?

```javascript
const magic = '\nyou';
console.log(magic[1]); // => ?
```

La salida será:

```text
y
```
