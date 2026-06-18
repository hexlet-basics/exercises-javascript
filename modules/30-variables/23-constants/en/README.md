Sometimes a program contains values that should never change. For example:

- the mathematical constant π (pi);
- the dollar exchange rate on a specific date;
- a fixed service fee.

Such values are called constants, and it is customary to distinguish them from regular variables so that there is no temptation to change them.

## Example: the number π

```javascript
const PI = 3.14;
console.log(PI); // => 3.14
```

Here `PI` is a constant that stores the value of the number π. The point of a constant is that its value should not change during the program's execution.

## const in JavaScript

In many languages, a constant is a separate language entity whose value cannot be changed. In JavaScript, the keyword `const` is used for this. Unlike a regular variable, a constant declared with `const` cannot be reassigned:

```javascript
const maxLoginAttempts = 3;
maxLoginAttempts = 5; // TypeError: Assignment to constant variable.
```

## const vs let

```javascript
let score = 0;   // will change
const lives = 3; // does not change
```

Use `const` by default. Switch to `let` only when you know for certain that the value will be reassigned. Constants are easier to reason about: when you see `const`, the reader immediately knows that the value will not change anywhere in the code. With `let`, there is no such certainty, and you have to track all the places where the variable could have been modified.

## Naming convention

Technically, any variable declared with `const` is already a constant. But for global constants — those that define the fundamental parameters of the entire program — it is additionally customary to use the `UPPER_SNAKE_CASE` style (also called SCREAMING_SNAKE_CASE):

- all letters are uppercase;
- words are separated by the underscore character `_`.

```javascript
const MAX_USERS = 100;
const DEFAULT_TIMEOUT = 30;
const DEFAULT_LANGUAGE = 'ru';
```

This is not a language requirement but a signal to the reader: such a value should not change under any circumstances.

## Why do we need constants?

Constants make code clearer and safer. They help you see right away which values in the program are considered fixed. This is especially important when working with data such as mathematical and physical constants, default settings, or fixed limits. Using constants reduces the risk of errors: from the `const` declaration, it is immediately clear that we are dealing with a value that should not be changed. In addition, if the value does need to be changed (for example, in settings), it is enough to change it in one place, and the change is automatically picked up throughout the entire program.
