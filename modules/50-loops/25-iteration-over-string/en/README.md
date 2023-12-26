
You can use loops to process strings as well as numbers. Mainly as a method for retrieving a specific character by its index. Below is an example of code that prints each letter of a word on a single line:

```javascript
const printNameBySymbol = (name) => {
  let i = 0;
  // This test works until a string ends,
  // including the last character. The last index is `length - 1`
  while (i < name.length) {
    // Get a character by its index
    console.log(name[i]);
    i = i + 1;
  }
};

const name = 'Arya';
printNameBySymbol(name);
// => 'A'
// => 'r'
// => 'y'
// => 'a'
```

The right test condition for the `while` loop is essential in this code. You can do it two ways: `i < name.length` or `i <= name.length - 1`. Both lead to the same result.
