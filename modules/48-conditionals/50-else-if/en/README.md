
The `getTypeOfSentence()` function from the previous lesson distinguishes only between questions and regular sentences. Let's try to add support for exclamatory sentences:

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

getTypeOfSentence('Who?'); // Sentence is question
getTypeOfSentence('No');   // Sentence is normal
getTypeOfSentence('No!');  // Sentence is exclamation
```

We added one more check. Technically the function works, but from a semantics standpoint there are problems.

- The check for a question mark runs in any case, even if an exclamation mark has already been detected.
- The `else` branch is described for the first condition only, but not for the second.

It would be more correct to use one more feature of the conditional construct:

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

getTypeOfSentence('Who?'); // Sentence is question
getTypeOfSentence('No');   // Sentence is normal
getTypeOfSentence('No!');  // Sentence is exclamation
```

Now all conditions are arranged into a single construct. `else if` means "if the previous condition was not met, but the current one is".

```text
  ┌─────────────────┐
  │ condition 1?    │
  └────┬────────┬───┘
  true │        │ false
       ↓        ↓
┌──────────┐  ┌─────────────────┐
│ if body  │  │ condition 2?    │
└──────────┘  └────┬────────┬───┘
              true │        │ false
                   ↓        ↓
         ┌──────────────┐ ┌────────────┐
         │ else if body │ │ else body  │
         └──────────────┘ └────────────┘
```

The function logic results in the following scheme:

- if the last character is `?`, then `'question'`
- otherwise, if the last character is `!`, then `'exclamation'`
- otherwise `'normal'`

Only one of the code blocks belonging to the whole `if` construct will be executed.
