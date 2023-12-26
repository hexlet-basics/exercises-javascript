
Let's write a function `getTypeOfSentence()` to analyze a piece of text and return its type: *General sentence* for normal sentences and *Question sentence* for questions.

```javascript
  getTypeOfSentence('Hodor');  // General sentence
  getTypeOfSentence('Hodor?'); // Question sentence
```

Implementation:

```javascript
const getTypeOfSentence = (sentence) => {
  // Declare a variable to store the sentence type
  let sentenceType;
  // Predicate checking the text ending
  // If it ends with '?', it will return true,
  // otherwise, it'll return false
  if (sentence.endsWith('?')) {
    // If the condition above holds true,
    // we have a question sentence.
    // Assign an appropriate value to sentenceType
    sentenceType = 'Question';
  } else {
    // Otherwise, the sentenceType is 'General'
    sentenceType = 'General';
  }

  // Build a string via interpolation
  return `${sentenceType} sentence`;
};
```

We have added the keyword `else` and a new block with curly brackets. This block executes only if the condition in `if` is false.

There are two ways to design an *if-else* clause. The negation allows you to change the order of the blocks:

```javascript
const getTypeOfSentence = (sentence) => {
  let sentenceType;
  // Add negation
  // The code blocks with the 'else' and 'if' statements are swapped
  if (!sentence.endsWith('?')) {
    sentenceType = 'General';
  } else {
    sentenceType = 'Question';
  }

  return `${sentenceType} sentence`;
};
```

Which way is preferable? It is easier for the human brain to reason in a straightforward manner rather than via negation. Try to pick a test that has no negations, and then modify the contents of the code blocks to suit it.
