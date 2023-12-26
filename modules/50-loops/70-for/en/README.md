
A `while` loop works perfectly for situations where the number of iterations isn't known in advance, e.g., finding a prime number. When we know the number of iterations, it's better to use a `for` loop.

Let's have a look at a function that reverses strings using a `for` loop:

```javascript
const reverseString = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result = `${str[i]}${result}`;
  }

  return result;
};
```

We could read it as follows: *a loop with index `i` repeats until `i < str.length` and after each step increases `i` by 1*.

When defining the `for` loop, we have three expressions in parentheses, separated by semicolons:

1. The initial counter value. This code runs exactly once before the first iteration.
2. A predicate - the condition for the loop to iterate. It's executed on each iteration. Exactly like what we have with `while`.
3. Description of the counter change. This code is executed at the end of each iteration.

Other than that, it works exactly the same as the `while` loop.
