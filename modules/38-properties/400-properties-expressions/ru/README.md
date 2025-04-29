
Свойства и методы — такие же выражения, как переменные, константы или вызовы функции, а значит, их можно всячески комбинировать.

Использование в операциях:

```javascript
const name = 'Shaya';
name.length + 5; // 10
`hi, ${name.toUpperCase()}!`; // hi, SHAYA!
```

Использование в параметрах функций:

```javascript
const name1 = 'Robb';
const name2 = 'Shaya';
console.log(name2.length); // => 5
console.log(name2.toLowerCase()); // => shaya
console.log(Math.min(name1.length, name2.length)); // => 4
```
