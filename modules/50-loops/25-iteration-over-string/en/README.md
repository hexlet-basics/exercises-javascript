
Loops are suitable not only for processing numbers but also for working with strings. This is primarily due to the ability to access a specific character by its index. Below is an example of code that prints each letter of a word on a separate line:

```javascript
const printNameBySymbol = (name) => {
  let i = 0;
  // This check runs until the end of the string,
  // including the last character. Its index is `length - 1`.
  while (i < name.length) {
    // Access the character by its index
    console.log(name[i]);
    i = i + 1;
  }
};

const name = 'Arya';
printNameBySymbol(name);
// => A
// => r
// => y
// => a
```

The most important thing in this code is to set the right condition in `while`. This can be done in two ways at once: `i < name.length` or `i <= name.length - 1`. Both approaches lead to the same result.

The loop goes through each character of the string in turn:

```text
'Arya'
 │ │ │ │
 A r y a
 ↓ ↓ ↓ ↓
each character is processed in turn
```

## Reversing a string

Instead of printing, you can build a new string. For example, let's write a function that reverses a string:

```javascript
const reverseString = (text) => {
  let result = '';
  let i = text.length - 1;
  while (i >= 0) {
    result = `${result}${text[i]}`;
    i -= 1;
  }
  return result;
};

console.log(reverseString('Arya'));   // => ayrA
console.log(reverseString('hexlet')); // => telxeh
```

The `result` variable is initialized with an empty string as a neutral element for concatenation. The loop starts at the last index (`text.length - 1`), moves toward zero, and ends when the index becomes less than zero. At each step, the current character is added to the result — and the string is built in reverse order.
