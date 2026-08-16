When different developers write code in different styles, the code becomes hard to read: an extra space here, different indentation there. To avoid such disagreements, programmers agreed to follow a single coding style. This set of rules describes how code should look: spacing, how functions are formatted, and variable naming.

A single style means code that is equally clear to all team members, regardless of who wrote it. This saves time, reduces the number of errors, and makes collaboration easier.

## Coding standards

The JavaScript ecosystem has no single official standard, but there are widely adopted guides, for example the one from [AirBnb](https://github.com/airbnb/javascript). They describe in detail how to format code: which indentation to use, how to place spaces, how long lines should be, how to name variables, and much more.

These rules are known and used by JavaScript developers. It is useful for beginners to look into them from time to time and develop good habits from the very start. However, there is no need to memorize everything at once.

## Linters: automatic code checking

There is no need to memorize all the rules by hand. There are special programs that do this for you. They are called linters.

A linter is a tool that analyzes your code and reports violations of standards. It helps you:

- Find suspicious places, for example a variable you declared and forgot to use
- Follow the rules agreed on by the team
- Write readable and clean expressions

## A modern linter: oxlint

Today, one of the fastest linters for JavaScript is [oxlint](https://oxc.rs/docs/guide/usage/linter.html). It is written in Rust, so it checks even large projects in a fraction of a second.

Let's look at an example:

```javascript
const result = 1 + 3;
```

The value was computed and stored in a variable, but then never used anywhere. The program works, but a line like this almost always means an error or unfinished code. The linter will report it:

```text
Code                    Linter          Result
┌───────────────────┐   ┌────────┐   ┌──────────────────────────┐
│ const result      │ → │ oxlint │ → │ eslint(no-unused-vars):  │
│   = 1 + 3;        │   │        │   │ 'result' is never used   │
└───────────────────┘   └────────┘   └──────────────────────────┘
```

## Formatting is checked by the formatter

Placing spaces and indentation is a separate task, and the linter does not solve it. That is what a formatter is for, and in oxc it is [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html). This code:

```javascript
const result = 1+ 3;
```

The formatter turns into this one:

```javascript
const result = 1 + 3;
```

That is the difference between the two tools. The formatter fixes formatting silently and automatically, while the linter reports problems that you will have to work through yourself.

You will almost never have to place spaces by hand. But it is worth learning to notice them: that way you will remember faster what tidy code looks like, and start writing it that way from the beginning.

## Rules and their meaning

Each linter message is tied to a specific rule. Some rules forbid unused variables, others require comparing values with `===`, and still others limit the length of a function. When you are just starting out, such small things may seem unimportant. But over time it becomes clear that they are exactly what forms a single readable style.

You can find the full list of oxlint rules in the [official documentation](https://oxc.rs/docs/guide/usage/linter/rules.html).

## Using a linter in your own projects

Once you start writing your own projects beyond the learning platform, a linter will be an indispensable helper. It can be set up in any code editor, run in the terminal, or integrated into the project build. The linter shows errors and can fix them automatically.
