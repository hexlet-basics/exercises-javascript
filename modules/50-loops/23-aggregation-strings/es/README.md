
La agregación se aplica no solo a los números, sino también a las cadenas. Estas son tareas en las que una cadena se construye dinámicamente, es decir, no se sabe de antemano qué tamaño tendrá ni qué contendrá.

Imagina una función que sabe "multiplicar" una cadena, es decir, la repite una cantidad determinada de veces:

```javascript
repeat('hexlet', 3); // hexlethexlethexlet
```

El principio de funcionamiento de esta función es bastante simple: en un bucle se produce el "crecimiento" de la cadena la cantidad de veces indicada:

```javascript
const repeat = (text, times) => {
  // El elemento neutro para las cadenas es la cadena vacía
  let result = '';
  let i = 1;

  while (i <= times) {
    // Cada vez agregamos la cadena al resultado
    result = `${result}${text}`;
    i = i + 1;
  }

  return result;
};
```

Detallemos la ejecución de este código paso a paso:

```javascript
// Para la llamada repeat('hexlet', 3);
let result = '';
result = `${result}hexlet`; // hexlet
result = `${result}hexlet`; // hexlethexlet
result = `${result}hexlet`; // hexlethexlethexlet
```

Visualmente, el proceso de crecimiento de la cadena se ve así:

```text
repeat('hexlet', 3):

i=1: result = ''             + 'hexlet' = 'hexlet'
i=2: result = 'hexlet'       + 'hexlet' = 'hexlethexlet'
i=3: result = 'hexlethexlet' + 'hexlet' = 'hexlethexlethexlet'
                                            └── resultado
```

## Elemento neutro

Para que el crecimiento funcione, se necesita un valor inicial. Para las cadenas, ese valor es la **cadena vacía** `''`.

Se llama elemento neutro porque no cambia nada durante la concatenación:

```javascript
console.log('' + 'abc'); // => abc
console.log('abc' + ''); // => abc
```

Por eso la cadena vacía siempre se usa como valor inicial al agregar cadenas.
