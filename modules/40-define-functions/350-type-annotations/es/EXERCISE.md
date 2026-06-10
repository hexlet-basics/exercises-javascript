
La aplicación crea separadores de texto a partir de caracteres repetidos — por ejemplo, `-------` o `=====`. Implementa la función `wordMultiply()`. Recibe dos parámetros:

* Una cadena
* Un número que indica cuántas veces hay que repetir la cadena

Devuelve la cadena repetida n veces. Si se pasa cero, devuelve una cadena vacía.

```javascript
const text = 'javascript';
console.log(wordMultiply(text, 2)); // => javascriptjavascript
console.log(wordMultiply(text, 0)); // =>
```

Añade anotaciones de tipos JSDoc en la definición de la función: etiquetas `@param` para ambos parámetros y `@returns` para el valor de retorno.

## Pistas

* El método de cadenas [repeat()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) resulta útil aquí
* No olvides la anotación del valor de retorno
