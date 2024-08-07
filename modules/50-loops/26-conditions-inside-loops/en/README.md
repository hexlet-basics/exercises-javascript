
Both the loop body and function body are places where statements are executed. So we can use everything we already learned inside it, such as conditionals.

Imagine a function that counts the number of times a letter appears in a sentence. Here's how it might work:

```javascript
countChars('Fear cuts deeper than swords.', 'e'); // 4
// If there are no matches, the result is 0
countChars('Sansa', 'y'); // 0
```

Before examining its contents, answer these questions:

* Is this an aggregate operation?
* What will be the test condition for whether the character occurs?

```javascript
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i] === char) {
      // Count only relevant characters
      count = count + 1;
    }
    // Counter increases no matter what happens
    i = i + 1;
  }

  return count;
};
```

This is an aggregate task. Although it doesn't count every character, you still have to parse through each character to calculate the sum.

A key feature of this loop is the condition inside its body. The variable `count` only increases when the current character matches the expected one.

Apart from that, it is a generic aggregate function that returns the number of required characters.
