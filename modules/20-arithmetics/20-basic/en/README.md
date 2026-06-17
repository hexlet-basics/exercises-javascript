At a basic level, computers only work with numbers. Even if you write a complex application in a modern programming language, numerous calculations are always happening inside it: addition, subtraction, division, and so on.

Fortunately, to start programming, it is enough to know ordinary school arithmetic. That is where we will begin.

## Addition in JavaScript

In math, we write 3 + 4 to add. In JavaScript, it is exactly the same:

```javascript
3 + 4;
```

This code can actually be run: the interpreter will perform the calculation. But... it will do nothing with the result. That is, 7 will be produced, but you will not see it.

## To see the result, you need to print it

In a real program, simply computing a value is not enough. You need to do something with the result, for example, show it to the user.

To do this, we use the now familiar `console.log()` command:

```javascript
// First the sum is computed,
// then it is passed to the print function
console.log(3 + 4);
```

```text
console.log(3 + 4)
            └─┬─┘
              7

console.log(7)  →  7
```

Execution result:

```text
7
```

If we write the same expression as a string, we get a completely different result — the string will be printed "as is":

```javascript
console.log('3 + 4'); // prints: 3 + 4
console.log(3 + 4);   // prints: 7
```

## Other arithmetic operations

JavaScript supports all the usual operations plus a few specific ones related to how numbers are stored and processed on a computer:

| Operation        | Symbol | Example   | Result |
|------------------|--------|-----------|--------|
| Addition         | `+`    | `2 + 3`   | `5`    |
| Subtraction      | `-`    | `7 - 2`   | `5`    |
| Multiplication   | `*`    | `4 * 3`   | `12`   |
| Division         | `/`    | `8 / 2`   | `4`    |
| Exponentiation   | `**`   | `3 ** 2`  | `9`    |
| Remainder        | `%`    | `7 % 3`   | `1`    |

Here is how you can print the result of division and exponentiation:

```javascript
console.log(8 / 2);  // => 4
console.log(3 ** 2); // => 9
```

## What is the remainder of a division (`%`)

This operation is called **taking the remainder of a division**. It shows **what is "left over"** when one number is divided by another *not evenly*. Example:

```javascript
console.log(7 % 3); // => 1
```

Why is the result equal to 1?

- 7 is divided by 3 twice: 3 * 2 = 6
- Up to 7 there is 1 left, and that is the remainder.

Other examples:

```javascript
console.log(10 % 4); // => 2 (10 is divided by 4 twice: 4 * 2 = 8, remainder 2)
console.log(15 % 5); // => 0 (divides evenly)
```

The `%` operation is often used in programming, for example, to check whether a number divides evenly (if the remainder is 0).

## Formatting arithmetic expressions

From JavaScript's point of view, there is no difference between `3+4` and `3 + 4`. The interpreter will understand both options the same way. The only difference is in code formatting. In programming, it is conventional to put spaces around arithmetic operators, because that makes expressions easier to read:

```javascript
console.log(3 + 4);
console.log(8 / 2);
console.log(7 % 3);
```
