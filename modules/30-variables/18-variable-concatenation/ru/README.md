
Для закрепления предыдущей темы, попробуем использовать переменные с конкатенацией. Синтаксически ничего не меняется: мы умеем конкатенировать (склеивать) две строки:

```javascript
let what = 'Kings' + 'road';
console.log(what); // => Kingsroad
```

… а значит сумеем конкатенировать строку и одну переменную, в которой записана строка:

```javascript
let first = 'Kings';
let what = first + 'road';

console.log(what); // => Kingsroad
```

… и даже конкатенировать две переменные, в которых записаны строки:

```javascript
let first = 'Kings';
let last = 'road';

let what = first + last;
console.log(what); // => Kingsroad
```

https://replit.com/@hexlet/variables-expression
