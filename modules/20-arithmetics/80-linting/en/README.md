Since we've learned to write simple programs, let's talk about the very process of writing.

The program code should be organized in a certain way so that it is sufficiently clear and easy to maintain. Special sets of rules - standards - describe different aspects of code writing. The most common standard in JavaScript is [Airbnb](https://github.com/airbnb/javascript).

In any programming language, there are utilities known as **linters**. They ensure the code meets the standards. For example, [ESLint](https://eslint.org/) analyzes JavaScript code.

Take a look at the example from the previous lesson:

```javascript
console.log(8/2+5 - -3 / 2); // => 10.5
```

Linter won't be happy about it, because several rules have been violated:

  * [space-infix-ops](https://eslint.org/docs/rules/space-infix-ops) – No space between operator and operands
  * [no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators) – You can't write code that contains multiple operations in a single expression with no explicit parentheses separation

In the last lesson we recognized that such an abundance of numbers and symbols may be confusing, and we decided to add parentheses purely for the sake of readability:

```javascript
console.log(((8 / 2) + 5) - (-3 / 2)); // => 10.5
```

This code does not violate the rules, and the linter will "say nothing" as it were.

In previous exercise you probably did this:

```javascript
console.log(70 * (3 + 4) / (8 + 2));
```

Is there any violation of the standard here?

Unfortunately, yes. This time, the `*` and `/` are in the same expression and there are no parentheses. You can solve this problem by adding additional parentheses. But at some point, too many parentheses can make the code incomprehensible again. At this point, you can divide the expression into separate parts. We will learn how to do this in the following lessons.

[no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators) is just one of many rules. Other ones describe indentations, entity names, parentheses, mathematical operations, line length, and many other aspects. Each rule may seem small and insignificant, but together they form the basis of good code.

Code-Basics won't test your code with a linter now, but in your future Hexlet practice segments and in actual development, the linter will work and flag the bugs.
