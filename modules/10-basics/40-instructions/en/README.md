A statement is a command given to a computer to do something. The JavaScript code is a set of statements which are usually separated by a `;` symbol.

Here is an example of some code with two statements.

```javascript
console.log('Mother of Dragons.');
console.log('Dracarys!');
```

When you run this code you will see two sentences on the screen, one after the other.

```text
Mother of Dragons.
Dracarys!
```

Theoretically, it's possible to put multiple statements on the same string:

```javascript
console.log('Mother of Dragons.'); console.log('Drakarys!');
```

but it's considered bad practice as it's difficult to read.

Why is it important to know? A statement is a unit of execution. An interpreter, which is the program which executes code in JavaScript, needs statements to be split in this way. This interpreter in JavaScript world is any browser (as it's able to JavaScript code) or Node.js (for the same reason). An interpreter's principle of operation is (approximately) as follows. It reads the file with the code, splits the code into statements, and then executes them.
