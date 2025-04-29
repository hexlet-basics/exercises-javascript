
The `getTypeOfSentence()` function from the previous lesson only distinguishes between questions and normal sentences. Let's try to extend it to exclamation sentences:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  let sentenceType;

  if (lastChar === '!') {
    sentenceType = 'exclamation';
  } else {
    sentenceType = 'normal';
  }

  if (lastChar === '?') {
    sentenceType = 'question';
  }

  return `Sentence is ${sentenceType}`;
};

getTypeOfSentence('Who?'); // 'Sentence is question'
getTypeOfSentence('No');   // 'Sentence is normal'
getTypeOfSentence('No!');  // 'Sentence is exclamation'
```

We added one more test. Technically the function works, but there are semantics issues.

- It tests for the question mark in any case, regardless of whether an exclamation point was found or not
- The `else` branch is defined for the first condition, not for the second

It would be better to use another condition feature:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  let sentenceType;

  if (lastChar === '?') {
    sentenceType = 'question';
  } else if (lastChar === '!') {
    sentenceType = 'exclamation';
  } else {
    sentenceType = 'normal';
  }

  return `Sentence is ${sentenceType}`;
};

getTypeOfSentence('Who?'); // 'Sentence is question'
getTypeOfSentence('No');   // 'Sentence is normal'
getTypeOfSentence('No!');  // 'Sentence is exclamation'
```

Now all the conditions are framed in a single construction. `else if` means "if the previous condition is not satisfied, but this condition is". This is the scenario we get:

- if the last character is `?`, then it's a `'question'`
- else, if the last character is `!`, then it's an `'exclamation'`
- else it's `'normal'`

Only one of the code blocks belonging to the entire `if` construct will be executed.
