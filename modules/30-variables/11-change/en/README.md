The very word "variable" suggests that its value can change. This is one of the main reasons variables exist at all.

Here is a simple example:

```javascript
// greeting means a salutation
let greeting = 'Father!';
console.log(greeting); // => Father!

greeting = 'Mother!';
console.log(greeting); // => Mother!
```

Here we first stored one string (_Father!_) in the variable, then another (_Mother!_). The variable name did not change, but the value inside became different.

```text
Before: greeting ──→ 'Father!'
                      ╳
After:  greeting ──→ 'Mother!'
```

Note: the keyword `let` is written only at the **first** declaration of a variable. On reassignment, `let` is no longer needed — the variable already exists, and we are only changing its value.

## Why change a value at all?

In real programs, variables change all the time. Here are a few reasons:

- The program reacts to user actions. For example, while you are entering data into a form on a website, the variables that hold this data are being updated constantly at that moment.
- Intermediate results. Often data passes through a series of transformations, and at each stage a variable is updated with a new value. There is even a similar mechanism in calculators, when intermediate values are saved using the `m+` or `m-` keys.
- Storing state. If you are writing a game, then the character's position, health, score, and current level are variables that change constantly.

## const does not change

Not every variable can be reassigned. If a variable is declared with `const`, its value cannot be changed:

```javascript
const greeting = 'Father!';
greeting = 'Mother!'; // TypeError: Assignment to constant variable.
```

That is why `let` is used for values that will change, and `const` for constant ones. This is how most modern programming languages work: a value that should not change is marked separately.

## Why this matters

Variables are a flexible way to store data that can change during program execution. Thanks to this, you can write programs that behave differently depending on conditions, user actions, or the results of computations.

But flexibility has a downside. Sometimes it is hard to immediately tell what exactly is stored in a variable at one moment or another. The developer has to track where and how it changed, especially if the code is long.

This is exactly what is done during debugging: trying to figure out why the program works differently than intended. They check the values of variables, trace the order of code execution, and look for where something went wrong.
