
Look at the code below and try to guess what it will print.

```javascript
console.log(0 || 1);
```

Correct answer::

```text
  1
```

The **OR** operator works in such a way that its execution (left to right) interrupts the first argument and returns the result, converting it into a value of `true`.

Example:

```javascript
console.log(0 && 1);
```

```text
  0
```

The **AND** operator works in such a way that its execution (left to right) interrupts the first argument and returns the result, converting it into a value of `false`.

There are two basic rules in JavaScript by which conversions take place:

* `0`, `''`, `undefined`, `NaN`, and `null` are converted into `false`. Those values are considered [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
* Everything else is converted into `true`

Developers use this extensively, for example, to define a default value:

```javascript
const value = name || '';
// Examples
234 || ''; // 234
'hexlet' || ''; // 'hexlet'
undefined || ''; // ''
```

If `name` is given one of the falsy values, an empty string will be assigned to the `value` constant. In that case, in subsequent code, we will be able to treat `value` as a string.

But there is a potential bug. If `name` contains a falsy value, and it's okay to assign values like `0`, `undefined`, `NaN` or `null` to the `value` constant, then the code above will get it wrong:

```javascript
// Oops
false || ''; // ''
0 || ''; // ''
undefined || ''; // ''
```

We covered the comparison operators `===` and `!==` in one of our lessons, and we mentioned that JavaScript also has the operators `==` and `!=`, though you shouldn't use them. The very difference lies in the type conversion:

```javascript
console.log('' === false); // => false
console.log('' == false);  // => true
```

An empty string and `false` are different values, so the `===` operator says "False! They are not equal!".

But the `==` operator converts types, making an empty string and `false` equivalent from its point of view.

This conversion is implicit, so avoid the `==` and `!=` operators whenever possible.

---

Remember the negation operator:

```javascript
const answer = true;
console.log(!answer); // => false
```

When you use double negation `!!` the result value is equal to the initial value:

```javascript
const answer = true;
console.log(!!answer); // => true
```

However, this is where type conversions also take place. So the result of the double negation will always be a _boolean_ value. This trick sometimes helps change the data type.

## Selection error

Imagine a task to check if a value is equal to either one thing or another. For instance, the variable `value` must contain one of two values: `first` or `second`. Novice developers sometimes write this expression this way:

```javascript
value === ('first' || 'second')
```

That's how we picture it in our minds, yet languages work differently, so this kind of code will lead to the wrong result. How do you read it correctly? We have to remember operator priority. The first thing to evaluate is wrapped in parentheses, i.e. `'first' || 'second'`. If we execute this code, the output will be:

```bash
node
'Welcome to Node.js v17.4.0.
> 'first' || 'second'
'first'
>
```

Now we can substitute the original expression with the partly evaluated one:

```javascript
value === 'first'
```

Not what we expected at all. Now, back to the start. Let's write the test correctly:

```javascript
// Parentheses are not necessary,
// because === precedence is higher than that of ||
value === 'first' || value === 'second'
```
