Learning a new programming language traditionally begins with a 'Hello, World!' program. This is a simple program that prints a greeting to the screen and introduces the syntax and structure of the new language.

```text
Hello, World!
```

This tradition is already more than forty years old, and we will start with it too. In the first lesson, we will write a `Hello, World!` program. In JavaScript, this program looks like this:

```javascript
console.log("Hello, World!");
```

The `console.log()` command prints to the screen the text specified in parentheses. Instead of the example, you can write any other text.

```javascript
console.log("Hexlet - programming school");
```

The command stays the same, only the contents of the parentheses change. So that the program understands that this is exactly text, it is enclosed in quotes. You can use single `'...'` or double `"..."` quotes, but the opening and closing quotes must match.

<!-- lint-code-blocks: skip — две формы записи кавычек это предмет урока, форматтер свёл бы их к одной -->

```text
console.log('Hexlet - programming school');
```

In this course we use double quotes: that is the style of the formatter that checks the code in the exercises. Single quotes are used when the string contains double quotes: a quote that matches the outer one ends the string too early.

```javascript
console.log("it's JavaScript"); // an apostrophe inside double quotes is an ordinary character
console.log('He said "No"'); // double quotes inside, so single quotes outside
```

## The meaning of symbols

Code consists of commands, and each of them must be written in a specific form. Besides letters, quotes `'` and `"`, parentheses `()`, and punctuation marks are important in code. A missing or mixed-up sign will cause the program not to run. Try to determine what error was made in each of the lines?

```javascript
console.log("it's JavaScript"
console.log(it's JavaScript");
consol.log("it's JavaScript");
console.log('it's JavaScript");
consolelog("it's JavaScript");
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
