Imagine you need to print the phrase `Father!` twice:

```javascript
console.log('Father!');
console.log('Father!');
```

This approach works fine if the phrase appears just a couple of times. But what if it is used often, in different parts of the program? Then you would have to copy the same expression over and over.

And what happens if the phrase needs to change, for example replacing _Father!_ with _Mother!_? You would have to find and fix every occurrence by hand. This is inconvenient and leads to errors.

## Variables

To avoid duplicating the same string, you can store it in a variable and print its contents:

```javascript
const greeting = 'Father!';

console.log(greeting);
console.log(greeting);
```

Result:

```text
Father!
Father!
```

A **variable** is a name behind which a value is stored. In our example we created a variable named `greeting` and wrote the string `'Father!'` into it.

```text
const greeting = 'Father!';

Variable         Value
┌──────────┐     ┌──────────┐
│ greeting │ ──→ │ 'Father!'│
└──────────┘     └──────────┘
```

The line `const greeting = 'Father!'` reads as follows: "take the value `'Father!'` and assign it to the variable named `greeting`". The `=` sign here is the assignment operator, not a notation for equality as in mathematics. It puts the value into the variable.

When we write `console.log(greeting)`, the engine substitutes the name `greeting` with the value stored in it. As a result, the string `'Father!'` is printed to the screen.

```text
console.log(greeting)
            |
            v
console.log('Father!')
```

## let and const

In JavaScript, a variable must be declared before use with one of the keywords — `const` or `let`:

- `const` — for values that will not change;
- `let` — for values that may change during the program's execution.

```javascript
const greeting = 'Father!'; // will not change
let score = 0;              // will change as the program runs
```

If you do not know whether the value will change, use `const`. This is good practice: the code is easier to read and harder to accidentally corrupt. We will return to `let` and constants in separate lessons.

## Variable names

The programmer comes up with the variable names. In JavaScript you can use:

- Latin letters (a-z, A-Z),
- digits (but not at the beginning),
- the `_` and `$` symbols.

Examples of valid names: `greeting`, `name1`, `helloWorld`. JavaScript distinguishes between lowercase and uppercase letters. The variables `greeting`, `Greeting`, and `GREETING` are three different variables.

## Variables and literals

In code it is important to distinguish where we use a variable and where we write a value directly. This is especially noticeable in the example with `console.log()`:

```javascript
const greeting = 'Mother!';
console.log(greeting);   // => Mother!
console.log('greeting'); // => greeting
```

In the first case the **variable** `greeting` is used, and the program substitutes its value. In the second case `'greeting'` is enclosed in quotes, so it is a **string literal**, that is, a ready-made value written directly in the code. Even though we see the word `greeting` in both cases, from the engine's point of view these are completely different things.

Literals are data written explicitly (for example, `'Hello'`, `42`, `3.14`). Identifiers are the names of variables and functions (for example, `greeting`, `console`) that point to already existing values or commands.

## Order of use

A variable must first be created (declared and assigned a value), and only then used. If you try to access a variable before it is created, the program will throw an error:

```javascript
console.log(name); // Error: the variable is not yet defined
// ReferenceError: Cannot access 'name' before initialization
const name = 'Alice';
```

But in the correct order everything works:

```javascript
const name = 'Alice';
console.log(name); // => Alice
```

## Multiple variables in a program

In a single program you can create as many variables as you like. Each one stores its own data and does not interfere with the others:

```javascript
const greeting1 = 'Father!';
console.log(greeting1);
console.log(greeting1);

const greeting2 = 'Mother!';
console.log(greeting2);
console.log(greeting2);
```

How do you know when you need several variables? The number of variables depends on the program's logic. This topic is covered in detail later, when we encounter functions and conditional constructs.

## Where to create variables

Programmers try to create variables close to where they are used. This makes the code more readable. This is especially important in large programs, where there can be tens and hundreds of thousands of variables.

## Errors when working with variables

The order of statements in code with variables is hugely important. A variable must be defined before it is used. Below is an example of an error that beginners very often make:

```javascript
// Uncaught ReferenceError: greeting is not defined
console.log(greeting);
let greeting = 'Father!';
```

Running a program with the code from the example above ends with the error `ReferenceError: greeting is not defined`. `ReferenceError` is a reference error. It means that the code uses a name (identifier) that is not defined. The message says so directly: `greeting is not defined`.

In addition to the wrong order of definition, JavaScript also has plain typos — both when using a variable and when declaring it. The number of such errors is reduced by a properly configured editor: it highlights names that are used without declaration and warns about possible problems.

Another common error is trying to declare an already declared variable with `let`:

```javascript
let greeting = 'Father!';
let greeting = 'Father!'; // SyntaxError: Identifier 'greeting' has already been declared
```

You cannot declare a variable twice. If you need a different value — create a new variable with a different name, or simply reassign the value of an existing `let` variable without the keyword.
