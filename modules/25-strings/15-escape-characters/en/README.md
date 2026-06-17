Suppose we want to print the text below across two lines.

```text
- Are you hungry?
- Aaaarrrgh!
```

If we simply pass this text to `console.log()`, JavaScript will print everything on a single line. Technically, we could write two consecutive `console.log()` calls, but let's imagine we want to do it with a single one.

```javascript
console.log('- Are you hungry?- Aaaarrrgh!');
// => - Are you hungry?- Aaaarrrgh!
```

For each of them to start on a new line, we need to add a line break, that is, to "press Enter". In programming, this is done by adding special characters, in this case `\n`. Yes, this is not a typo. Even though we see two characters here, from JavaScript's point of view this is a single character.

```javascript
console.log('- Are you hungry?\n- Aaaarrrgh!');
```

The result will be as follows.

```text
- Are you hungry?
- Aaaarrrgh!
```

## What is `\n`?

`\n` is an escape sequence (sometimes also called an "escaped sequence"). It denotes a line break but is not displayed directly. You won't see `\n` in the program's output, as it only affects the placement of the text.

In text editors, pressing Enter adds an invisible LF (Line Feed) character. That is exactly what `\n` stands for. Sometimes such characters can be seen if you enable the display of special characters.

```text
- Hello!¶
- Oh, hi!¶
- How are you?
```

Printers, editors, and JavaScript interpreters understand `\n` as a command to start the text on a new line.

## Examples of using `\n`

Here is how JavaScript handles the escape sequence `\n`.

```text
In code      'Hello\nWorld'
                   ↓
On screen    Hello
             World
```

The position of `\n` changes the resulting output.

```javascript
console.log('Hello\nWorld');
// Hello
// World

console.log('Hello \nWorld');
// Hello 
// World  (there is a space at the end of the first line)

console.log('Hello\n World');
// Hello
//  World  (there is a space at the beginning of the second line)

console.log('Hello\n\nWorld');
// Hello
//
// World  (an empty line between them)
```

Spaces before or after `\n` are also taken into account. JavaScript treats them as ordinary characters and displays them in the output.

You can also insert `\n` into any part of the string, before, after, or even use it on its own.

```javascript
console.log('First line');
console.log('\n');          // just an empty line
console.log('Second line');
```

The result will be as follows.

```text
First line

Second line
```

## How to print the `\n` character itself

`\n` in JavaScript is an escape sequence. It controls the placement of the text and is not displayed on screen like ordinary characters. If you need to print exactly the characters `\` and `n`, rather than a line break, you need to escape them. To do this, you add another slash before the backslash.

```javascript
console.log('Hello\\nWorld');
// Hello\nWorld

// If you forget to add the second slash
console.log('Hello\nWorld');
// Hello
// World
```

In this case, JavaScript understands `\\` as an ordinary backslash and shows the string without a line break.

## Other escape sequences

In addition to `\n`, JavaScript has other escape sequences as well.

- `\t` denotes a tab (the equivalent of the Tab key).
- `\r` denotes a carriage return (used on Windows, but rarely applied in modern code).
- In programming, `\n` is used most often; it is enough for the majority of tasks.

## Important details

- `\n` is a single character, even though in the code it is written as two (`\` and `n`).
- On Windows, the combination `\r\n` is used by default, but in JavaScript (and in cross-platform development in general) it is customary to use only `\n` to avoid problems when moving code between systems.
