
Throughout the module, our sample code has mostly used variables as names (aliases) for particular values, rather than as variables that change their value over time.

```javascript
let dollarsInEuro = 1.25;
let rublesInDollar = 60;

let dollarsCount = 50 * dollarsInEuro; // 62.5
let rublesCount = dollarsCount * rublesInDollar; // 3750

console.log(rublesCount);
```

Such names are often called constants in programming, and many languages support constants as a construct. JavaScript is one of those languages, and its coding standards [say explicitly](https://eslint.org/docs/rules/prefer-const) that if the value doesn't change, then we are dealing with a constant. Rewrite the example above to make use of constants:

```javascript
const dollarsInEuro = 1.25;
const rublesInDollar = 60;

const euros = 1000;
const dollars = euros * dollarsInEuro;    // 1250
const rubles = dollars * rublesInDollar; // 75000

console.log(rubles);
```

https://replit.com/@hexlet/js-basics-variables

The only change here is syntactical: the keyword `let` has been replaced by `const`. Now if we try to change any constant, we get an error message. Otherwise, it behaves the same way as a variable.

```javascript
const pi = 3.14;
pi = 5; // TypeError: Assignment to constant variable.
```

You may be wondering why we need it. Can't we just use variables? Even if we limit ourselves to variables, it won't change the fact that they will often play the role of constants. Moreover, it is possible to write JavaScript code idiomatically without using variables at all. Take a look at the example from [the actual Hexlet code](https://github.com/Hexlet/hexlet-exercise-kit/blob/main/import-documentation/index.js). You're unlikely to understand it at this stage, but try counting the number of constants and variables there are, you'll see that there's exactly one variable and a whole bunch of constants.

Constants make it a lot easier to analyze; when we encounter a constant, it's obvious right away that its value always stays the same. With constants, we don't need to worry about when they were written. With variables, however, we can't be certain of their value and have to analyze all the code to figure out how they may have changed.

Variables are essential only in one case (in all others, we can do without them for sure) and that's when we're dealing with loops. We'll get to that point later.

From now on, we will stick to constants and use variables only when it's inevitable.
