In mathematics and programming, we often use operation signs such as `+`, `-`, `*`, and others. In programming, such signs are called operators.

- An operator is a symbol or word that denotes an action.
- Operands are the values to which the operator is applied.

Example:

```javascript
console.log(8 + 2);
```

Here:

- `+` is an operator
- `8` and `2` are operands
- the result will be `10`

```text
operand   operator   operand       result
    8         +          2       →      10
    5         -          3       →      2
    4         *          3       →      12
```

## Unary operators

There are also unary operations that work with a single operand. Example:

```javascript
console.log(-3); // => -3
```

In this case, `-` is a unary operator, and `3` is the operand. The interpreter receives the command: "take the number 3 and change its sign".

The `-` operator can be used in different ways. When it stands **between two numbers**, it is a subtraction operation:

```javascript
console.log(5 - 2);   // => 3
console.log(10 - 7);  // => 3
```

This difference is especially noticeable when working with negative numbers:

```javascript
// minus times minus gives plus
console.log(5 - -2); // => 7
```

First we see the subtraction operation: `5 - (...)`. But on the right there is a unary minus `-2`, which turns `2` into a negative number. As a result, we get: `5 - (-2) = 7`.

Thus, the meaning of `-` depends on the context: if there is another number next to it, it is subtraction; otherwise, it is a change of the number's sign.

## Errors in calculations

If you treat `-3` as a single number, you might not notice that `-` is a separate operator with its own priority. For example:

```javascript
console.log(-3 ** 2); // => -9, not 9!
```

At first glance, it might seem that `-3` is being squared, and the result should be `9`. But the result will be `-9`.

The reason lies in the order of calculations: first the exponentiation (`**`) is performed, and only then the unary minus is applied. That is: `-(3 ** 2) = -9`. We will talk about operator priority in more detail in the following lessons.
