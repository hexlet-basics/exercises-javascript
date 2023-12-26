Before we move on, let's take a look at the basic terminology. Operation signs such as `+` are called **operators**. They perform operations on certain values (**operands**). Operators are usually represented by one or more symbols, but occasionally, they can be represented by a word. Most of the operators are identical to those you'll have seen in math class.

```javascript
console.log(8 + 2);
```
Here the `+` is an addition **operator**, `8` and `2` are **operands**.

The addition operation has two operands, positioned to the left and right of the operator `+`. Operations with two operands are called **binary** operations. If at least one operand is missing, for example, `3 + ;` then the program will throw out a syntax error.

Besides binary operations (not operators) there are unary operations (with one operand) and even ternary (with three operands)! Moreover, operators may look the same but denote different operations.

 ```javascript
  console.log(-3); // => -3
  ```
In the example above, the unary operation applies to `3`. An interpreter will read it as follows: the minus operator tells it to take the number `3` and find the opposite, which is `-3`.

You might be a bit confused since `-3` is both a number and an operator with an operand, but that's simply how programming languages work.
