In addition to arithmetic operations, mathematics has comparison operations, for example `5 > 4` or `3 < 1`. They exist in programming too. Comparisons are often used in real-world tasks. For example, when we place an order in an online store, the system checks whether the user has enough money in their account: if the amount in the account is greater than or equal to the price of the item, the order is confirmed, otherwise a message about insufficient funds appears.

## Comparison in programming

Let's start with an example that compares two numbers:

```javascript
console.log(5 > 4); // => true
console.log(4 > 4); // => false
```

The result of a comparison is a value of the **boolean** type. It has only two possible values: `true` and `false`. These are special language values, and they can be used directly:

```javascript
console.log(true);
console.log(false);
```

In practice, they are rarely used this way, but the entire logic of a program's behavior is built on them. We encounter this every day: we enter PIN codes and passwords, perform actions whose results may differ. The program reasons roughly like this: *if this — do one thing, if otherwise — do another*.

JavaScript provides the following comparison operations:

| Operator | Meaning |
|----------|---------|
| `<` | less than |
| `<=` | less than or equal to |
| `>` | greater than |
| `>=` | greater than or equal to |
| `===` | strictly equal |
| `!==` | strictly not equal |

Programming languages adopted mathematical comparison operations almost without changes, except for equality and inequality. In mathematics, the ordinary `=` is used, but in programming the `=` symbol is already taken — it assigns values to variables. That is why JavaScript uses `===` for equality comparison and `!==` for inequality (the triple one and the one with the exclamation mark are "strict" comparison, which we will come back to).

```javascript
console.log(5 >= 3);  // => true
console.log(7 < 0);   // => false
console.log(5 > 5);   // => false
console.log(5 >= 5);  // => true
console.log(2 === 5); // => false
console.log(2 !== 5); // => true
```

When specific values are used in a comparison, the operation seems pointless: the result is already known and is always the same. But everything changes when the values can be different. Let's write a simple function that takes a child's age and determines whether they are an infant. Children under two years old are considered infants (two is not included):

```javascript
const isInfant = (age) => age < 2;

console.log(isInfant(3)); // => false
console.log(isInfant(2)); // => false
console.log(isInfant(1)); // => true
console.log(isInfant(0)); // => true
```

## Predicates

When functions return the result of a comparison, they usually answer the question "yes" or "no". Such functions are called **predicates**. They are easy to recognize: they return a logical value `true` or `false`, and their name often contains the statement being checked (`is`, `has`, `can`). Here is a function that checks whether a number is negative:

```javascript
const isNegative = (number) => number < 0;

console.log(isNegative(-5)); // => true
console.log(isNegative(7));  // => false
```

Predicate names are built so that the question can be read directly from the name: `hasChildren()` — "are there any children?", `isEmpty()` — "is the string empty?", `hasErrors()` — "are there any errors?". At the same time, only a function that returns exactly a logical value is considered a predicate — without exceptions.
