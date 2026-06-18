In JavaScript, just like in mathematics, you can combine several operations into a single line. The interpreter processes such expressions step by step according to certain rules.

Let's look at an example:

```javascript
console.log(2 * 4 * 5 * 10);
```

This code consists of several multiplication operations combined into one expression. To understand how the interpreter evaluates the expression, let's break it down step by step:

- First, `2 * 4` is computed: `8 * 5 * 10`
- Then `8 * 5`: `40 * 10`
- And finally `40 * 10`: `400`

The final result is `400`.

## What about different operations?

Everything is simple as long as the same operators are used. But what happens if you combine, for example, multiplication and addition?

```javascript
console.log(2 + 3 * 4);
```

```text
2 + 3 * 4
    └─┬─┘
2 +  12
└──┬───┘
   14
```

Will the result be `20` or `14`? The answer is `14`.

This is because in JavaScript, just like in mathematics, operations have precedence. Multiplication is performed before addition unless parentheses are used. We will look at this in more detail in the lesson on precedence.

## Examples with subtraction and negative numbers

The same rule works for subtraction:

```javascript
console.log(10 - 2 * 3); // => 4
```

First, multiplication is performed: `10 - 6 = 4`.

If the expression contains negative numbers, the unary minus is applied after exponentiation:

```javascript
console.log(-2 ** 2); // => -4, two to the power of two, then the minus is applied
console.log(-2 * 5);  // => -10, minus two multiplied by five
console.log(4 + -2);  // => 2
console.log(6 - -2);  // => 8
```

In all examples except the first one, the unary minus (`-2`) is computed first, and then the remaining operations are performed.

Let's take a closer look at the last example:

```javascript
console.log(6 - -2); // => 8
```

First, the unary minus (`-2`) is computed, and then the operation becomes `6 - (-2)`, which gives `8`. This is the same as:

```javascript
console.log(6 + 2); // => 8
```

## What to remember

- Expressions can consist of several operations.
- JavaScript evaluates them step by step: from left to right, respecting operation precedence.
- Parentheses can be used to explicitly indicate the order of evaluation.
