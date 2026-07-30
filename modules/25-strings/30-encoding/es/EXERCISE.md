El programa recibe los códigos numéricos de los caracteres y los muestra en pantalla: esto es útil cuando un carácter es difícil de escribir con el teclado. Encuentra los caracteres con los códigos 126, 94 y 37 en la tabla ASCII de abajo y muestra cada uno en una línea distinta con la función `String.fromCharCode()`.

| Carácter | Código |
|----------|--------|
| !        | 33     |
| #        | 35     |
| %        | 37     |
| &        | 38     |
| *        | 42     |
| ?        | 63     |
| @        | 64     |
| ^        | 94     |
| _        | 95     |
| ~        | 126    |

```javascript
console.log(String.fromCharCode(...));
console.log(String.fromCharCode(...));
console.log(String.fromCharCode(...));
```

Por ejemplo, el carácter `?` tiene el código 63:

```javascript
console.log(String.fromCharCode(63)); // salida: ?
```
