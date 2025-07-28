Implement a chainProcess function that takes an initial number and returns a Promise.

It should perform the following steps:

1. Increment the value by 2 and pass it on.
2. Multiply the result by 3 and pass it on.
3. If the result is greater than 50, throw an error with the text 'Too big!'.
4. Otherwise, return the value as a success.

```js
chainProcess(5).then(console.log); // 21
chainProcess(20).catch(console.log); // Too big!
```