
JavaScript has adopted two operators from the C language: **increment** `++` and **decrement** `--`, which are commonly used with loops. These unary operators add or subtract a one from a number in a variable:

```javascript
let i = 0;
i++; // 0
i++; // 1

i--; // 2
i--; // 1
```

They can be used as a prefix and postfix:

```javascript
let i = 0;
++i; // 1
++i; // 2

--i; // 1
--i; // 0
```

It seems to be no difference between the postfix and prefix usages. And that's where it gets complicated.

Unlike other operators, which have no side-effects and simply return a new value, increment and decrement not only return a value but also **change** it.

If you use a prefix, the variable is changed first, and then it's returned.

If you use a postfix, it's the opposite: the variable is returned first, and then its value is changed

The rule works exactly the same for both incrementing and decrementing. For simplicity's sake, we'll only look at increments for now:

```javascript
let x = 5;

console.log(++x); // => 6
console.log(x);   // => 6

console.log(x++); // => 6
console.log(x);   // => 7
```

What's going on?

1. `++x` has been printed. It's a prefix increment, so initially, the value increased by 1, and then the result was returned and printed
2. Since the value changed, `console.log(x)` printed 6
3. Now print `x++`. It's a postfix increment, so it returns the value before it increments by 1
4. Since the value changed, `console.log(x)` printed 7

---

It gets worse when increments are put into other operations: `x = i++ - 7 + --h`. It's almost impossible to understand such code and writing it should be considered a serious crime.

For example, the linter (the program that checks the code) in JavaScript immediately starts to complain when it sees an increment or decrement.

Usage guidelines:

* Never mix operations/functions without side effects with operations/functions with side effects within a single expression
* Use increment and decrement only if there is no difference between the prefix and postfix version. It should be separate from other expressions and on a separate line of code
