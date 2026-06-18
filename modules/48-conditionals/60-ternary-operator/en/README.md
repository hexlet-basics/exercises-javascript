
Look at the definition of a function that returns the absolute value of the passed number:

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

Can we write it more concisely? Something like `return <answer depending on the condition>`? For this, there must be an expression to the right of return, but `if` is a statement, not an expression.

In JavaScript there is a construct that behaves like the *if-else* construct but is itself an expression. It is called the **ternary operator**.

The ternary operator is the only operator of its kind that requires three operands:

```javascript
const abs = (number) => {
  return number >= 0 ? number : -number;
};
```

The general pattern looks like this: `<predicate> ? <expression on true> : <expression on false>`.

The shortened version of the `abs()` function looks like this:

```javascript
const abs = (number) => (number >= 0 ? number : -number);
```

Pay attention to the parentheses around the ternary. They are not required, but the linter [strongly recommends](https://eslint.org/docs/rules/no-confusing-arrow) using them to avoid ambiguities.

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

If you remember the power of expressions, you have probably already guessed that a ternary operator can be nested inside another ternary operator. **Don't do this :)** Such code is hard to both read and debug, and it is very bad practice.
