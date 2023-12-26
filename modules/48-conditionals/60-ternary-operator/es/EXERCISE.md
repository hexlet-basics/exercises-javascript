
Implementa la función `convertText()`, que recibe una cadena de texto y, si la primera letra no está en mayúscula, devuelve la versión invertida de la cadena original. Si la primera letra está en mayúscula, la función devuelve la cadena sin cambios. Si se pasa una cadena vacía como argumento, la función debe devolver una cadena vacía.

Ejemplos de uso:

```javascript
convertText('Hello'); // Hello
convertText('hello'); // olleh

// No olvides tener en cuenta la cadena vacía
convertText(''); // ''
```

Puedes invertir una cadena utilizando la función `reverse()`. Debes pasar la cadena que deseas invertir como argumento:

```javascript
const result = reverse('Hello!');
console.log(result); // => !olleH
```

Hay diferentes enfoques para resolver este problema. Es posible que necesites el método [toUpperCase()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) y la capacidad de obtener un carácter de una cadena (por ejemplo, `str[0]`).

Intenta escribir dos versiones de la función: una con un if-else normal y otra con un operador ternario.

## Consejos

* Piensa en qué verificación debes hacer primero: si la primera letra es mayúscula o si la cadena está vacía. ¿Qué es más importante?
