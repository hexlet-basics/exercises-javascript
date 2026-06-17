El programa recibe los códigos numéricos de los caracteres y los muestra en pantalla: esto es útil cuando un carácter es difícil de escribir con el teclado. Encuentra los caracteres con los códigos 126, 94 y 37 en la tabla ASCII y muestra cada uno en una línea distinta con la función `String.fromCharCode()`.

```javascript
console.log(String.fromCharCode(...));
console.log(String.fromCharCode(...));
console.log(String.fromCharCode(...));
```

Por ejemplo, el carácter `?` tiene el código 63:

```javascript
console.log(String.fromCharCode(63)); // salida: ?
```
