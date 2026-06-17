Programming exists to perform all kinds of operations. Sometimes these are simple actions, like adding numbers or joining strings. But more often they are complex processes such as transferring money between accounts, placing an order in an online store, calculating taxes, or preparing a report.

Such operations can't be expressed with a single command. An action like "transfer money" may hide dozens, hundreds, or even thousands of lines of code: checking the balance, deducting the amount, accounting for the fee, updating the database, sending a notification.

To manage this code and not get lost in the details, we use functions. A function combines a block of code into a single whole, hides the implementation, and lets us focus on the meaning. The programmer only needs to call the function and trust it to do all the internal work.

Imagine a function that transfers money from one account to another. It may contain hundreds of lines of code inside, but we don't see them. From the outside, everything looks like one simple command:

```javascript
transferMoney('Alice', 'Bob', 100);
```

This line calls the `transferMoney()` function. It is passed the sender `Alice`, the recipient `Bob`, and the amount `100`.

Here are a few more examples of function calls. Each one has its own name and its own set of data to work with:

```javascript
// Yes, console.log is a function too
console.log('Hexlet!');

// Sending an email to a user
sendEmail('bob@example.com', 'Welcome!');

// Calculating tax on the given amount
calculateTax(5000, 'Florida');

// Checking whether a user is in the system
isRegistered('Alice');

// Getting a random number from 1 to 10
randomNumber(1, 10);

// Creating a database backup
backupDatabase();
```

In a function call, you first write its **name**, then the **parentheses**. The parentheses show that this is exactly a call - that's how we know we're dealing with a function and not a variable.

Inside the parentheses you specify **arguments**, that is, the data the function receives to work with. There can be several of them, just one, or none at all.

## Where do functions come from?

Some functions are built into the language (built-in), others are created by programmers themselves.

**Built-in functions** come together with JavaScript and can be used right away. An example is `console.log()`. As they say, it is available globally.

**Functions defined by programmers** are created when you need to wrap your own logic into a separate block. Such a function can be given any name and used like a built-in one. We'll learn how to do this later.

In addition, there are functions from separate libraries. To use them, you connect them with the import mechanism. We won't go into import in detail yet - it's enough to know that it lets you connect an external set of functions.

## A function with one parameter

Let's take the `length()` function, which returns the number of characters in a string. It is connected from the course's standard set of functions using import:

```javascript
import { length } from 'hexlet-basics/string';

const message = 'Hello!';
const count = length(message);
console.log(count); // => 6
```

The string `'Hello!'` has six characters, so the call `length(message)` will return the number `6`.

```text
Argument           Function        Result
┌──────────┐     ┌──────────┐     ┌──────────┐
│ 'Hello!' │ ──→ │ length() │ ──→ │    6     │
└──────────┘     └──────────┘     └──────────┘
```

## Returning a value

Returning a value is one of the key principles of how functions work. If a function returns a value, it can be stored in a variable, passed to another function, or used in calculations:

```javascript
import { length } from 'hexlet-basics/string';

const length1 = length('Hello!'); // store the result
const length2 = length('World!');

const combinedLength = length1 + length2; // use the result in an expression
console.log(combinedLength); // => 12
```

If the function immediately printed the result to the screen (like `console.log()`), we would see the number but wouldn't be able to use it further - to add, store, or compare it. That's exactly why returning a value is so important: it lets you connect functions to each other. This is how big programs are built from small steps.

## A function with several parameters

Some functions take several values at once. For example, `Math.pow()` raises a number to a power: the first argument is the base, the second is the exponent.

```javascript
// 2 to the 3rd power: 2 * 2 * 2
console.log(Math.pow(2, 3)); // => 8

// 5 to the 2nd power: 5 * 5
console.log(Math.pow(5, 2)); // => 25
```

In terms of structure, a call with several arguments is no different from a call with one: the same function name, parentheses, and arguments separated by commas.

`Math` is a set of functions built into JavaScript for working with numbers. It is available from any place in the program. For now, you can read `Math.pow(...)` as a "long function name": the `Math.` prefix says that the function belongs to this set. What the dot actually means we'll cover in the lessons about objects. It doesn't affect the function's behavior in any way.

A full list of math functions is available in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

## Parameters and arguments

In conversations about functions you'll come across the words **parameters** and **arguments**. They are related, but they are not the same thing.

We talk about **parameters** when creating a function - these are variables inside the function into which the passed values go. We talk about **arguments** when calling - these are what we pass into the function. An argument can be a number, a variable, or any expression:

```javascript
console.log(Math.pow(2, 3)); // => 8, the arguments are numbers

const x = 2;
// an argument can be an expression, it is evaluated before being passed
console.log(Math.pow(x + 1, 3)); // => 27
```

You don't have to memorize this, but it will come in handy when reading English-language literature.

## How to learn about new functions

Every function has a **signature** - its "description": the name, the list of parameters, and the type of the returned value. It is the signature that lets you understand how to use a function without reading its code. For example, the MDN documentation describes `Math.pow()` like this:

```
Math.pow(base, exponent)

Parameters
  base      — the base of the power
  exponent  — the exponent of the power
```

From the signature it's immediately clear: the function takes two arguments and returns a number. Once you've learned to read signatures, you can work with any unfamiliar function.

It's impossible to learn everything - and there's no need to. What matters is knowing where to look. For JavaScript there are two main sources:

- **MDN** ([developer.mozilla.org](https://developer.mozilla.org/en-US/)) - documentation on the built-in features of the language and browser APIs.
- **Node.js documentation** ([nodejs.org/api](https://nodejs.org/api/)) - the server side, functions for working with the file system, the network, and so on.

Another way is to read other people's code: any package on npm is open, and in it you can often find techniques that aren't written about in textbooks.
