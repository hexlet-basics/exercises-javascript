
Working with loops usually comes down to two scenarios:

1. Aggregation. Accumulating a result during iterations and working with it after the loop. Reversing a string is exactly this kind of case.
2. Running the loop until the required result is reached and then exiting. For example, the task of finding prime numbers. Recall that a prime number is a number that is divisible without a remainder only by itself and by one.

Let's look at a simple algorithm for checking whether a number is prime. We'll divide the target number `x` by all numbers in the range from two to `x - 1` and look at the remainder of the division. If no divisor that divides `x` without a remainder is found in this range, then we have a prime number.

## Checking whether 5 is prime: a step-by-step walkthrough

1. Take the number `x = 5`. We look for possible divisors in the range from 2 to `x - 1`, that is, from 2 to 4.
2. Divide 5 by 2. The remainder is 1 — no divisor found, continue.
3. Divide 5 by 3. The remainder is 2 — no divisor found, continue.
4. Divide 5 by 4. The remainder is 1 — no divisor found, finish the search.

Result: in the range 2…4 there was no number by which 5 is divisible without a remainder. Therefore, 5 is a prime number.

If you think about it, you can notice that it's enough to check numbers not up to `x - 1`, but up to half of the number. For example, 11 is not divisible by 2, 3, 4, 5. And beyond that it is guaranteed not to be divisible by numbers larger than its half. So we can make a small optimization and check division only up to `x / 2`.

```javascript
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
}

isPrime(1); // false
isPrime(2); // true
isPrime(3); // true
isPrime(4); // false
```

```text
while (...) {
  if (condition) {
    return value;  ← exit from the function (and from the loop)
  }
  ...
}
─────────────────────────
Without return the loop continues to the end
```

The algorithm is built like this: if during the sequential division by numbers up to `x / 2` at least one is found that divides without a remainder, then the passed argument is not a prime number, and further calculations make no sense. At this point there is a `false` return.

And only if the loop has run completely and no number that divides without a remainder was found, can we conclude that the number is prime.

*To be completely honest, checking numbers up to the square root of `number` is enough to solve the task. But here it's important for us to focus on understanding how to work with conditions and returning inside a loop.*
