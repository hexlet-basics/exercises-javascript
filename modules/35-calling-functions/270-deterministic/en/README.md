Functions in any programming language have fundamental properties. They help us understand how a function will behave in different situations, how to test it, and where to use it. One such property is **determinism**.

A **deterministic function** always returns the same result for the same input data. For example, a function that counts the number of characters can be called deterministic:

```javascript
import { length } from 'hexlet-basics/string';

length('hexlet'); // 6
length('hexlet'); // 6

length('wow'); // 3
length('wow'); // 3
```

No matter how many times we call this function with the argument `'hexlet'`, it will always return `6`.

## Non-deterministic functions

The opposite type is **non-deterministic functions**. They can return different results for the same input data or in its absence (functions without parameters). A good example is a function that returns a random number:

```javascript
Math.random(); // 0.09856613113197676
Math.random(); // 0.8839904367241888
```

This function has no arguments, but the result is different every time. If even one call out of a million produces a different result, the function is considered non-deterministic.

```text
Deterministic:            Non-deterministic:
length('abc') → always 3  Math.random() → 0.42
length('abc') → always 3  Math.random() → 0.91
length('abc') → always 3  Math.random() → 0.07
```

## Why this matters

Determinism affects how we work with functions:

- deterministic functions are easy to test and predict;
- they are easier to optimize and reuse;
- non-deterministic functions are harder to verify because the result changes.

That is why, where possible, it is better to strive to make a function deterministic.
