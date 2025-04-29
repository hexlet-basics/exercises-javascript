
You can use aggregation with strings as well as with numbers. In most cases, this applies to dynamic string generation, where you don't know in advance what size the string will be and what it will contain.

Imagine a function "multiplying" a string, that is, repeating a string a given number of times:

```javascript
repeat('hexlet', 3); // 'hexlethexlethexlet'
```

The core mechanism of this function is simple, the loop "increments" the string a given number of times:

```javascript
const repeat = (text, times) => {
  // A neutral element in terms of strings is an empty string
  let result = '';
  let i = 1;

  while (i <= times) {
    // Add a string on each iteration
    result = `${result}${text}`;
    i = i + 1;
  }

  return result;
};
```

Break down the code's execution into steps:

```javascript
// Calling repeat('hexlet', 3);
let result = '';
result = `${result}hexlet`; // hexlet
result = `${result}hexlet`; // hexlethexlet
result = `${result}hexlet`; // hexlethexlethexlet
```
