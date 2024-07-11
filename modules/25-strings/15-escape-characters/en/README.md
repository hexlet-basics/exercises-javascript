
Imagine you want to print a dialogue between the Mother of Dragons and her child:

```
- Are you hungry?
- Aaaarrrgh!
```

If you print a string with this text:

```javascript
console.log('- Are you hungry?- Aaaarrrgh!');
```

then you'll see:

```
- Are you hungry?- Aaaarrrgh!
```

Not quite what we were looking for. The strings are written one after the other, it doesn't start a new line. We need to tell the interpreter to "press enter" as it were. In other words, it needs to put a line break after the question mark. You can do this with the new line symbol '\n'.

```javascript
console.log('- Are you hungry?\n- Aaaarrrgh!');
```

The result:

```
- Are you hungry?
- Aaaarrrgh!
```

`\n` is a special symbol. It's often referred to as *LF* (Line Feed, sometimes as line break or newline) in documentation. You may have initially thought it was a misprint, since there are two symbols - `\` and `n`, but this isn't the case. To the computer, this is no more than an invisible symbol to tell it to go to the next line. Proof:

```javascript
// We haven't studied it yet, but you should know the truth
// Below is code that returns the length of a string

'a'.length;    // 1
'\n'.length;   // 1 !!!
'\n\n'.length; // 2 !!!
```

Why is it done in this way? `\n` is just a way to write a line break symbol. That's why line feed is just one character, just invisible. And it's also why this problem has arisen. There had to be a way of representing it using a keyboard. And since the number of keyboard characters is limited, and they're all dedicated to very important things, special characters are entered using these escape sequences.

The Line Feed symbol is not something specific to programming. Anyone who has ever typed on a computer has used the line feed by clicking Enter. Many editors can display these invisible characters, you can use this feature to see where they are (though it's only for display, these characters are invisible, they have no graphical representation):

<pre class='hexlet-basics-output'>
- Hi!¶
- Oh, hey!¶
- What's up?
</pre>

The device that outputs the corresponding text takes this character into account. For example, when the printer reaches the line feed, it pulls the paper up one line, and the text editor brings all subsequent text down one line as well.

`\n` is an example of an ** escape sequence**.  Although there are dozens of these characters, only a few of them are common in programming. Besides line feed, there is also indents (which you get from pressing Tab) and carriage return (Windows only). Programmers often need to use `\n` line break to format text properly.

```javascript
console.log('Gregor Clegane\nDunsen\nPolliver\nChiswyck');
```

The result:

```
Gregor Clegane
Dunsen
Polliver
Chiswyck
```

Note:

1. It does not matter what comes before or after `\n`, whether it's a character or an empty string. The line feed will be detected and executed either way

2. Remember that a string can contain a single character or none at all. Additionally, a string can only contain `\n`. Analyze the following example:

    ```javascript
    console.log('\n');
    console.log('Dunsen');
    ```

    First the interpreter outputs the string "line feed", and then the normal string. The program will print it like this:

    <pre class='hexlet-basics-output'>
    <br>
    Dunsen
    </pre>

    Why are there two empty lines before the *Dunsen* line instead of one? The point is that `console.log()` automatically adds a line feed to the end when it outputs a value. So, we explicitly typed one line feed, passing this escape character as an argument in the function, and the second line feed is added automatically by the function itself.

    One more example:

    ```javascript
    console.log('Polliver');
    console.log('Gregor Clegane');
    console.log();
    console.log('Chiswyck');
    console.log('\n');
    console.log('Dunsen');
    ```

    The result:

    <pre class='hexlet-basics-output'>
    Polliver
    Gregor Clegane<br>
    Chiswyck<br>

    Dunsen
    </pre>

    Now you understand enough to figure out why the result was formed in this way.

3. If we need to print `\n` as a text (two separate characters), we can use the escape character, adding another `\` at the beginning. I.e., the sequence of `\n` will be printed as characters `\` and `n` following each other

```javascript
console.log('Joffrey loves using \\n');
```

The result:

<pre class='hexlet-basics-output'>
Joffrey loves using \n
</pre>

A small but important note about Windows. Windows uses `\r\n` by default to enter a line break. This combination works well on Windows but creates problems when copied to other systems (for example, when the development team includes both Windows and Linux users). The point is that the sequence `\r\n` has a different interpretation depending on the encoding chosen (we discuss it later). For this reason, it's common among developers to always use `\n` without `\r`, since it means that LF is always interpreted the same way and works fine on any system. Remember to configure your editor to use `\n`.
