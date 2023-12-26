
Para reforzar el tema anterior, intentaremos utilizar variables con concatenación. Sintácticamente no cambia nada: sabemos cómo concatenar (unir) dos cadenas:

```javascript
let what = 'Kings' + 'road';
console.log(what); // => Kingsroad
```

... lo que significa que también podemos concatenar una cadena y una variable en la que se almacena una cadena:

```javascript
let primero = 'Kings';
let que = primero + 'road';

console.log(que); // => Kingsroad
```

... e incluso concatenar dos variables en las que se almacenan cadenas:

```javascript
let primero = 'Kings';
let ultimo = 'road';

let que = primero + ultimo;
console.log(que); // => Kingsroad
```

https://replit.com/@hexlet/variables-expression
