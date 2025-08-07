
As well as arithmetic operators, we also know comparison operators from school. For example, `5 > 4`. It sounds like a question, "Is 5 greater than 4?" The answer is "yes". In other cases, the answer may be "no", say, for `3 < 1`.

Comparison operators aren't restricted to numbers. You can put them in almost anything, e.g., strings. Every time we visit a website, it compares the username and password we've entered with those in the database. If they exist, we are let in (authorized).

Programming languages have borrowed all the comparison operators from math virtually unchanged. The only major change concerns the equality and inequality operators. In math, the usual equal sign is `=`, which is rare in programming. In many languages, the symbol `=` is used to assign values to variables, so you need to use `==` or `===` for comparison.

List of comparison operators in JavaScript:

* `<` less than
* `<=` less than or equal to
* `>` greater than
* `>=` greater than or equal to
* `===` equal to
* `!==` not equal to

_A tiny note: for equality and inequality, there are also `==` and `!=`, neither of which we'll use because of the possible risks. We'll discuss it later._

A logical operation like `5 > 4` or `password === text` is an expression resulting in a special value, `true` or `false`. This is a new data type for us, which is called boolean. It has only these two values.

```javascript
const result = 5 > 4;
console.log(result); // => true
console.log('one' !== 'one'); // => false
```

Along with strings and integers with rationals (which are numbers), the logical type (boolean) is one of JavaScript's primitive data types.

---

Try to write a primitive function that takes a child's age as an input and decides whether they are an infant or not. Infants are defined as children under a year old:

```javascript
const isInfant = (age) => age < 1;
```

We can take advantage of the fact that any operation is an expression, so the only line we need to write here is "return the value that results from `age < 1`".

Depending on the input, the comparison will either be true or false, and `return` will return that result.

```javascript
const isInfant = (age) => age < 1;

console.log(isInfant(3));
```

```textfalse```

Now, perform the check on a child who is six months old:

```javascript
console.log(isInfant(0.5));
```

```texttrue```
