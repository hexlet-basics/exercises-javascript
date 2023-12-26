
Look at the definition of this function, which returns the modulus of a given number:

```javascript
const abs = (number) => {
  if (number >= 0) {
    return number;
  }

  return -number;
};

abs(10); // 10
abs(-10); // 10
```

Can we write it more concisely? Something like `return <something depending on the condition>`? That would require an expression following return, but `if` is a statement, not an expression.

We have a construct in JavaScript that works the same way as the *if-else* construct, except it's an expression. It's called the **ternary operator**.

The ternary operator is the only JavaScript operator that takes three operands:

```javascript
const abs = (number) => {
  return number >= 0 ? number : -number;
};
```

The general pattern looks like this: `<predicate> ? <expression on true> : <expression on false>`.

Here is a shortened version of the `abs()` function:

```javascript
const abs = (number) => (number >= 0 ? number : -number);
```

Note the parentheses around the ternary. They are optional, but linter [strongly recommends](https://eslint.org/docs/rules/no-confusing-arrow) to put them to avoid ambiguities.

Let's rewrite the initial version of `getTypeOfSentence()` in the same way:

Before:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence.slice(-1);

  if (lastChar === '?') {
      return 'question';
  }

  return 'normal';
};
```

After:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence.slice(-1);

  return (lastChar === '?') ? 'question' : 'normal';
};

getTypeOfSentence('Hodor');  // normal
getTypeOfSentence('Hodor?'); // question
```

---

If you remember the main strength of expressions, then you probably figured out by now that you can put a ternary operator into a ternary operator. **Don't do it :)** Such code is hard both to read and to debug, it's very bad practice.
