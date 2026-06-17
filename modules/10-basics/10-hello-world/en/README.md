Learning a new programming language traditionally begins with a 'Hello, World!' program. This is a simple program that prints a greeting to the screen and introduces the syntax and structure of the new language.

```text
Hello, World!
```

This tradition is already more than forty years old, and we will start with it too. In the first lesson, we will write a `Hello, World!` program. In JavaScript, this program looks like this:

```javascript
console.log('Hello, World!');
```

The `console.log()` command prints to the screen the text specified in parentheses. Instead of the example, you can write any other text.

```javascript
console.log('Hexlet - programming school');
```

The command stays the same, only the contents of the parentheses change. So that the program understands that this is exactly text, it is enclosed in quotes. You can use single `'...'` or double `"..."` quotes, but the opening and closing quotes must match.

```javascript
console.log("Hexlet - programming school");
```

According to the style accepted in the JavaScript community, single quotes are recommended for strings. If there is an apostrophe inside the string, single quotes will break the syntax, so in such cases double quotes are used.

```javascript
console.log("it's JavaScript"); // apostrophe inside, so double quotes
```

## The meaning of symbols

Code consists of commands, and each of them must be written in a specific form. Besides letters, quotes `'` and `"`, parentheses `()`, and punctuation marks are important in code. A missing or mixed-up sign will cause the program not to run. Try to determine what error was made in each of the lines?

```javascript
console.log("it's JavaScript"
console.log(it's JavaScript")
consol.log("it's JavaScript")
console.log('it's JavaScript")
consolelog("it's JavaScript")
```

Even a small difference, for example one extra letter or a different sign, can cause the program not to work. This also applies to case, that is, to the difference between uppercase and lowercase letters. While in ordinary text `Hello` and `hello` look the same, for JavaScript these are different words. JavaScript considers `console.log`, `Console.Log`, and `CONSOLE.LOG` to be different commands, and only the first variant will work.

## Where to practice

Theory is absorbed better when you run code in parallel and see the result. The browser console (DevTools) is suitable for this, where commands are executed line by line. Everything that appears in the lesson is worth trying [in the browser console](https://developer.chrome.com/docs/devtools/console/).

How does this work technically? Any code that is written is passed to the JavaScript engine, which executes this code and prints the result of its work to the screen.

```text
Code                   JS Engine             Screen
┌──────────────────┐   ┌───────────┐   ┌──────────────┐
│ console.log(…)   │──→│JavaScript │──→│ Hello, World!│
└──────────────────┘   └───────────┘   └──────────────┘
```
