Logical expressions let you check various conditions, but on their own they only return `true` or `false`. To make a program perform different actions depending on the result, JavaScript has a special construct called `if`.

```javascript
if (5 > 3) {
  console.log('Yes, it is true');
}
```

Here the string `'Yes, it is true'` will be printed because the condition `5 > 3` is true.

```text
┌────────────┐
│ condition? │
└─────┬──────┘
  true │
      ↓
┌────────────┐
│ if body    │
└────────────┘
```

## Syntax

After `if`, the condition is written in parentheses, and the body goes in curly braces:

```javascript
if (condition) {
  // the block runs if the condition is true
}
```

A condition is any expression that is coerced to `true` or `false`.

## Code blocks

Everything inside the curly braces `{}` belongs to the body of the `if`. The code after the block runs in any case:

```javascript
if (10 === 10) {
  console.log('First');
  console.log('Second');
}

console.log('Goodbye!');
```

Here `First` and `Second` will be printed because the condition was met. And `Goodbye!` is always printed since this line is already outside the block. The principle is the same as in function definitions.

## Using if inside a function

Consider a function that determines the type of a given sentence. If it ends with a question mark, the function returns `'question'`, otherwise — `'normal'`:

```javascript
const getTypeOfSentence = (sentence) => {
  if (sentence.endsWith('?')) {
    return 'question';
  }
  return 'normal';
};

console.log(getTypeOfSentence('Hodor'));  // => normal
console.log(getTypeOfSentence('Hodor?')); // => question
```

Two `return` statements are used here. If the condition inside `if` is met, `return 'question'` fires and the function ends. If the condition is not met, control passes to the next line with `return 'normal'`.

This way, the function has several possible exit points. This is a common practice: depending on the conditions, a function may end in different ways.

Even though the `getTypeOfSentence` function uses `if`, it returns strings, which means it is not a predicate. As a predicate, let's consider a function that checks whether there is enough money for a purchase:

```javascript
const hasEnoughMoney = (balance, price) => {
  if (balance >= price) {
    return true;
  }
  return false;
};

console.log(hasEnoughMoney(100, 50)); // => true
console.log(hasEnoughMoney(30, 50));  // => false
```

## if and logical expressions

We wrote the `hasEnoughMoney` function using `if`. But in this form it could do without it, because the result of the comparison is itself a logical expression:

```javascript
const hasEnoughMoney = (balance, price) => balance >= price;
```

In simple cases, it is better to return such an expression right away. `if` is needed where additional actions are performed inside the block besides returning the result. The more complex the programs, the more often such situations will arise.
