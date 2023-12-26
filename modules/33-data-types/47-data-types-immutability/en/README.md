
What happens if you change a character in a string?

```javascript
let firstName = 'Alexander';
// the code will run correctly
firstName[0] = 'B';
console.log(firstName); // => 'Alexander'
```

 Oddly, the value of the `firstName` variable remains the same, and the code is executed without errors. This is possible due to the immutability of primitive types in JavaScript. There are no ways to change a string itself. The immutability of primitives is important for many reasons, and performance is a key one. But how do we edit a string? We have variables for this purpose:

```javascript
let firstName = 'Alexander';
// the code will run correctly
firstName = 'Blexander'
console.log(firstName); // => 'Blexander'
```

There is a big difference between changing the value of a variable and the value itself. You can't change primitive types in JavaScript (but you can change composite types, learn more about this on Hexlet), but changing the value of a variable is not a problem.
