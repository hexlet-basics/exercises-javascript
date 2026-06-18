If a JavaScript program is written in violation of the rules, the interpreter will stop execution and print an error message. This message indicates:

- the type of error,
- the line where it occurred,
- and (often) the point where the interpreter "stumbled."

## What is a syntax error?

A syntax error (SyntaxError) is a violation of the rules for writing code (grammar rules) in a particular programming language. Such errors occur when code is written with a deviation from the expected format: an unclosed string, a missing bracket, a wrong order of symbols, and so on.

Unlike natural languages, where text with mistakes can be understood from context, in programming even the slightest deviation makes the code unusable.

```text
Code with an error       Interpreter            Result
┌────────────────────┐   ┌───────────┐   ┌──────────────────────┐
│ console.log('Hi'   │──→│JavaScript │──→│ SyntaxError:         │
└────────────────────┘   └───────────┘   │ missing ) after args │
                                         └──────────────────────┘
```

Let's look at a simple example with a syntax error:

```javascript
// The correct version is: console.log('Hodor')
console.log('Hodor'
```

In this code the bracket is not closed, which makes the program incorrect from the syntax point of view. Let's try to run the program, and the interpreter will produce an error:

```bash
node index.js
index.js:2
console.log('Hodor'
           ^

SyntaxError: missing ) after argument list
```

The text may be unclear at first, but that's normal — the more often you encounter such errors, the faster you'll learn to understand what happened.

## Why are such errors considered simple?

Syntax errors:

- are easy to notice: the code is often highlighted in the editor;
- are easy to fix: it's enough to restore the missing symbol or correct the structure.

But there's a fly in the ointment. The interpreter doesn't always point exactly to the place where the error was made. Sometimes the problem is several lines above. For example, an opened but unclosed bracket on one line can "break" all the following code.

## What to do with a syntax error?

- Read the error message. It almost always contains useful information.
- Check the line indicated in the message, and the line before it: sometimes the error is "hidden" a bit earlier.
- Use an [editor with syntax highlighting](https://code.visualstudio.com/): it will help you notice problems right away (for example, unclosed quotes or brackets).
