
Functions in JavaScript become really useful when they start to return data rather than print it. It allows them to be used for further computations. Check out this example:

```javascript
const message = greetHexlet();
console.log(message);
```
We assign a function output to the variable `message`. In order to make this code work, the function must use the `return` instruction inside itself:

```javascript
const greetHexlet = () => {
  const message = 'Hello, Hexlet!';
  return message;
};
```

`return` is a special statement that takes an expression written after it and sends it back to the code where the function was called. The function won't be executed beyond there, any code after `return` won't be carried out:

```javascript
const greetHexlet = () => {
  const message = 'Hello, Hexlet!';
  return message;
  console.log('I will never execute');
};
```

You don't necessarily need to use a variable to return. Since `return` works with expressions, almost anything can follow it. Here we should keep to the principles of code readability:

```javascript
const greetHexlet = () => {
  return 'Hello, Hexlet!';
};
```

An example of a computation:

```javascript
const doubleFive = () => {
  return 5 + 5;
};
```

But even if there is no `return` statement inside the function, it will still return something. By default, any function will return `undefined`. For example, the `console.log()` function prints text, but returns nothing. In this case, it returns `undefined`.

```javascript
const result = console.log('You can put any text here');
console.log(result); // => undefined

// Or even easier, without creating an intermediate variable
console.log(console.log('Wow')); // => undefined
```

Why is this behavior needed? A function call is an expression, and an expression should always return a result, otherwise, there would constantly be errors in the code in places where there is no data to return.

Self-check. What will this code print?

```javascript
// Definition
const run = () => {
  return 5;
  return 10;
}

// Usage
run(); // => ?
```
