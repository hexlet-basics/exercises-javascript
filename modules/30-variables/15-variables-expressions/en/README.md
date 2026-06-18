We already know that expressions can be made up of several operations. But if you write an entire calculation in one long line, the code quickly becomes hard to read.

For example, this works:

```javascript
const yuansCount = 50 * 1.25 * 6.91;
console.log(yuansCount); // => 431.875
```

JavaScript will easily evaluate this expression. But it is no longer convenient for a human to read such code. Questions immediately arise:

- What does `1.25` mean?
- What does `6.91` mean?
- Where does one calculation step end and the next begin?

To make such calculations clearer, variables can be used inside other expressions. First the program saves an intermediate result in a variable, and then it substitutes the value of that variable into the next calculation.

## Expressions

Any computable value is an expression. You can assign an expression to a variable, not just a ready-made value.

```javascript
const sum = 3 + 4;          // => 7
const text = 'Hello' + '!'; // => 'Hello!'
const doubled = sum * 2;    // => 14
```

JavaScript first evaluates the expression to the right of `=`, and then saves the result in the variable on the left.

## Currency conversion through an intermediate currency

Imagine we need to convert euros to yuan, but the direct rate is not available to us. Then we will do it in two steps: **euros → dollars → yuan**. This is often how banks work when paying for purchases abroad.

### Step 1. Euros → Dollars

Suppose the rate is: 1 euro = 1.25 dollars. We want to convert 50 euros:

```javascript
const dollarsPerEuro = 1.25;
const dollarsCount = 50 * dollarsPerEuro;
console.log(dollarsCount); // => 62.5
```

In this line, `50 * dollarsPerEuro` is an expression, and `dollarsCount` is the variable into which the result is written. JavaScript first evaluates the expression, and only then saves the result in the variable.

The engine does not care how the expression is written:

```javascript
const dollarsCount = 62.5;
```

or

```javascript
const dollarsCount = 50 * dollarsPerEuro;
```

The result will be the same. But for a human the second option is more useful: from the name `dollarsCount` it is immediately clear that at this step we got the amount in dollars.

### Step 2. Dollars → Yuan

Now let's convert 50 euros to yuan, using the dollar as an intermediate currency. Suppose the exchange rates are: 1 dollar = 6.91 yuan, 1 euro = 1.25 dollars.

```javascript
const dollarsPerEuro = 1.25;
const yuansPerDollar = 6.91;

const dollarsCount = 50 * dollarsPerEuro;
const yuansCount = dollarsCount * yuansPerDollar;

console.log(yuansCount);
```

This code is longer than the single line `50 * 1.25 * 6.91`, but it is easier to read:

- you can see that `1.25` is the euro-to-dollar rate;
- you can see that `6.91` is the dollar-to-yuan rate;
- you can see that `dollarsCount` is an intermediate result.

This becomes especially noticeable if you don't come back to the code for at least a week. And now imagine that a project has hundreds of thousands of lines of code. If such projects had no intermediate variables and calculations, it would be impossible to make sense of them.

## What to remember

- If an expression turns out to be too long, it is better to break it into several steps.
- Variables help save intermediate results and make calculations clearer.
- When a variable is used in an expression, JavaScript substitutes its value and continues the calculation.
