When we write programs, we need to connect actions to each other. Adding numbers, joining strings, and working with variables are examples of how simple steps combine into more complex behavior.

```javascript
const rate = 10;
const hours = 5;
const salary = rate * hours + 100;
console.log(salary); // => 150
```

In programming, the concept of an **expression** is used for this — a construct that is evaluated and produces a result. In the example above, `rate * hours + 100` is an expression composed of variables, a numeric literal, and arithmetic operations. The result can be saved in a variable or used further.

Expressions can be combined endlessly, gradually making the logic more complex. Each new expression becomes part of a bigger one:

```javascript
const bonus = 50;
const salary = (rate * hours + bonus) * 12 - 500;
console.log(salary);
```

This is exactly how programs are built: small steps add up into large constructs. That is why it is impossible to memorize all the combinations in advance — it is far more important to understand how expressions connect to each other.

## Expressions as function arguments

A function argument is always some value. But a value can not only be written directly, it can also be calculated. This means any expressions can be substituted into function arguments:

```javascript
// Here the argument is the number 150
console.log(150);

// And here the argument is an expression that is evaluated first
console.log(10 * 15); // => 150

// You can combine in more complex ways
const rate = 10;
const hours = 15;
const bonus = 50;
console.log(rate * hours + bonus); // => 200
```

The `console.log()` function simply receives a ready value and prints it. The way this value is obtained is irrelevant to the function — that is why function calls combine perfectly with any expressions.

## Calling a function inside a function

Since a function call is itself an expression, its result can be passed directly to another function:

```javascript
// Math.abs(-5) returns 5
// This result is immediately used as the argument of console.log()
console.log(Math.abs(-5)); // => 5
```

Here `Math.abs(-5)` is evaluated first and returns `5`. Then this value is substituted into the `console.log()` call. Such a combination can be as deep as you like:

```text
console.log(Math.abs(-5))

Step 1:  Math.abs(-5)  →  5
Step 2:  console.log(5) →  prints 5
```

First the nested calls are evaluated, then the outer one. For example, in `Math.round(Math.random() * 10)`, `Math.random()` runs first, then the multiplication, and only then `Math.round()`.

## Using functions as part of expressions

Functions return values, which means their calls can be used as part of any other expressions. To get the length of a string, we will use the `length()` function:

```javascript
import { length } from 'hexlet-basics/string';

const name = 'python';

// The length of the string minus 1 — the index of the last character
const lastIndex = length(name) - 1;
console.log(lastIndex); // => 5

// The result can be used in arithmetic
const text = 'hexlet';
const double = length(text) * 2;
console.log(double); // => 12
```

Here `length(name)` and `length(text)` are full-fledged expressions: they return values that can be combined with numbers, variables, and other operations.
