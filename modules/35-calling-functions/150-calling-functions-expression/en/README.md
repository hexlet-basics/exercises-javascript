
In programming, an expression is something that returns a usable output value. We already know a lot about expressions and their principles of composition. Math operations (addition, subtraction, etc.) and string operations (concatenation) are all expressions:

```javascript
1 + 5 * 3;
'Hex' + 'Let';
// Variables can be a part of an expression
rate * 5;
```

One feature of expressions is that they return a result that can be assigned to a variable or printed. For instance:

```javascript
// Here the expression is 1 + 5
const sum = 1 + 5;
console.log(1 + 5);
```

But not any code can be an expression. The definition of a variable is a statement, it can't be part of an expression and it will lead to an error:

```javascript
// Pointless code that won't work
10 + const sum = 1 + 5;
```

Why is this important to know? You can combine expressions to get more and more complex behavior in the most unexpected places and the most surprising ways, as you will see. You will get a better understanding of how you can combine pieces of code to get the desired results.

Let's talk about functions. Is a function call an expression or not? We know that functions return results, which means that, yes, they are expressions. It leads to a lot of interesting possibilities. For example, we can call functions directly in math operations. This is how we can get the last character index in a word:

```javascript
import { length } from 'hexlet-basics/string';

const name = 'JavaScript';
// Indexes count from zero
// Function call and subtraction combined!
const lastIndex = length(name) - 1;
console.log(lastIndex); // 9
```

This code has no new syntax. We've just combined what we already know. We could go even further:

```javascript
console.log(length(name) - 1); // 9
```

All of this holds for any function, e.g. string functions:

```javascript
import { length } from 'hexlet-basics/string';

const name = 'JavaScript';
// Interpolation
console.log(`Last char: ${name[length(name) - 1]}`);
// 'Last char: t'
```
