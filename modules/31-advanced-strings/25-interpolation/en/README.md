Concatenation works, but template literals are cleaner.

```javascript
const greeting = 'Hello';
const firstName = 'Anna';

console.log(`${greeting}, ${firstName}!`);
// => Hello, Anna!
```

Anything inside `${}` is evaluated as a JavaScript expression.
