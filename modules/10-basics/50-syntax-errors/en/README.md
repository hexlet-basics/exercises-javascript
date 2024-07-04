If a JavaScript program is syntactically incorrect, the interpreter will show a relevant message and a message showing the file and line where the error might have occurred. **Syntax errors** occur when the code has grammatical mistakes. Grammar is essential to human language, but a text with grammar mistakes can still be read and understood. However, when it comes to programming, things are much stricter. Even a tiny mistake can mean your program won't run. Maybe you've mixed up your brackets, or there's a `;` that you forgot to add — these are just some examples of such mistakes.

Here is an example of some code with a syntax error:

```javascript
console.log('Hodor'
```

If we run this code we will see the following message: `SyntaxError: missing ) after the argument list`. In JavaScript, these errors are labelled as "SyntaxError". For technical reasons, this code running on [code-basics] (https://code-basics.com) won't show a message with a line and file. You can check this output on [repl.it] (https://repl.it).

On the one hand, syntax errors are the most obvious because they deal with code grammar rules and have nothing to do with its logic. You can easily fix it once you find it.

On the other hand, an interpreter will not always tell you the correct position of an error. Sometimes you need to add a forgotten bracket to different place than what the error message says.
