
Let's write a function `getTypeOfSentence()` that analyzes text and returns a description of its tone: for ordinary sentences – *General sentence*, for interrogative ones – *Question sentence*.

```javascript
  getTypeOfSentence('Hodor');  // General sentence
  getTypeOfSentence('Hodor?'); // Question sentence
```

The function implementation:

```javascript
const getTypeOfSentence = (sentence) => {
  // Declare a variable to store the sentence type
  let sentenceType;
  // A predicate that checks the end of the text
  // If it ends with the '?' character, it returns true,
  // otherwise false
  if (sentence.endsWith('?')) {
    // If the condition above was met,
    // then this is an interrogative sentence.
    // Assign the corresponding value to sentenceType.
    sentenceType = 'Question';
  } else {
    // In all other cases the sentence is a general one
    sentenceType = 'General';
  }

  // Using interpolation we build a string
  return `${sentenceType} sentence`;
};
```

We added the keyword `else` and a new block with curly braces. This block runs only if the condition in `if` is false.

```text
      ┌───────────┐
      │ condition?│
      └─────┬─────┘
  true │         │ false
      ↓         ↓
┌──────────┐ ┌──────────┐
│ if body  │ │ else body│
└──────────┘ └──────────┘
```

## Nested conditions

Inside the `else` block (just like inside the `if` block) you can nest other conditions. Thanks to the curly braces, the nesting is always explicitly visible:

```javascript
const number = 10;

if (number > 10) {
  console.log('Number is greater than 10');
} else {
  if (number === 10) {
    console.log('Number is exactly 10');
  } else {
    console.log('Number is less than 10');
  }
}
// => Number is exactly 10
```

Here `number > 10` is checked first. The condition is false, so control passes to `else`, where the nested condition `number === 10` is checked. It is true — `Number is exactly 10` is printed.

There are two ways to lay out an *if-else* construct. Using negation, you can swap the order of the blocks:

```javascript
const getTypeOfSentence = (sentence) => {
  let sentenceType;
  // A negation was added
  // The contents of else moved to if and vice versa
  if (!sentence.endsWith('?')) {
    sentenceType = 'General';
  } else {
    sentenceType = 'Question';
  }

  return `${sentenceType} sentence`;
};
```

Which way is preferable? The human brain finds it easier to think in a straightforward way rather than through negation. Try to choose a check that does not contain negations, and adjust the contents of the blocks to fit it.
