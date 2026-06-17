FizzBuzz is one of the most famous interview tasks for beginner programmers. It's given to test the ability to work with loops and conditions. Implement a function `fizzBuzz(n)` that returns a string with the numbers from 1 to `n`.

In this case:

- if a number is divisible by 3, the word `"Fizz"` is substituted instead;
- if it's divisible by 5 — the word `"Buzz"`;
- if it's divisible by both 3 and 5 — the word `"FizzBuzz"`.

All elements are joined with a space.

Example of calling the function:

```javascript
fizzBuzz(15);
// => '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz'
```

### Algorithm

1. Declare the neutral element of aggregation (an empty string).
2. Iterate through the numbers from 1 to `n` with a `for` loop.
3. Check the number against the divisibility conditions.
4. Add the result of each iteration to the resulting string, separated by a space.
