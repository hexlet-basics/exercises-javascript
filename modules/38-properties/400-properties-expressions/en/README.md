
Properties and methods are expressions just like variables, constants, or function calls, which means they can be combined in many different ways.

In operations:

```javascript
const name = 'Shaya';
name.length + 5; // 10
`hi, ${name.toUpperCase()}!`; // hi, SHAYA!
```

In function parameters:

```javascript
const name1 = 'Robb';
const name2 = 'Shaya';
console.log(name2.length); // => 5
console.log(name2.toLowerCase()); // => shaya
console.log(Math.min(name1.length, name2.length)); // => 4
```
