
To consolidate the previous topic, let's try using variables with concatenation. The syntax remains the same, we know how to concatenate (combine) two strings:

```javascript
let what = 'Kings' + 'road';
console.log(what); // => 'Kingsroad'
```

… which means we can concatenate the string with a variable containing the string:

```javascript
let first = 'Kings';
let what = first + 'road';

console.log(what); // => 'Kingsroad'
```

… and even concatenate two variables containing strings:

```javascript
let first = 'Kings';
let last = 'road';

let what = first + last;
console.log(what); // => 'Kingsroad'
```
