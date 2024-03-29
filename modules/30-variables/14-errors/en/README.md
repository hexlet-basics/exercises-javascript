
The order of statements in code with variables is tremendously important. You must declare a variable before using it. Below is an example of a common beginner's mistake:

```javascript
// Uncaught ReferenceError: greeting is not defined
console.log(greeting);
let greeting = 'Father!';
```

Running the above program terminates with the error _ReferenceError: greeting is not defined_. _ReferenceError_ means that the code uses a name (called an identifier) that is not defined. And the error itself explicitly tells you what it is: _greeting is not defined_. Besides incorrect definition order, there are more common typos in JavaScript, both when using a variable and when declaring it.

Using a properly configured editor can reduce the number of such errors. These kinds of editor highlight names used without being declared and warns about possible problems.

Another common mistake is trying to declare a variable that is already declared.

```javascript
let greeting = 'Father!';
let greeting = 'Father!';
```

You can't do that. You have to create a new variable.
