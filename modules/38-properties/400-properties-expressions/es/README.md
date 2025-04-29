
Las propiedades y métodos son expresiones al igual que las variables, constantes o llamadas a funciones, por lo tanto, se pueden combinar de diversas formas.

Uso en operaciones:

```javascript
const name = 'Shaya';
name.length + 5; // 10
`Hello, ${name.toUpperCase()}!`; // Hello, SHAYA!
```

Uso en parámetros de funciones:

```javascript
const name1 = 'Robb';
const name2 = 'Shaya';
console.log(name2.length); // => 5
console.log(name2.toLowerCase()); // => shaya
console.log(Math.min(name1.length, name2.length)); // => 4
```
