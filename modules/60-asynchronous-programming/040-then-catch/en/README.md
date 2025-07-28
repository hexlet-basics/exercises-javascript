One of the main ways to manage asynchronous tasks is .then() chains. They allow you to process the result of one task and pass it to the next.

```js
The following methods are used to work with promises:

- .then() - called when the promise is successfully executed.
- .catch() - called when an error occurs.

Each .then() and catch returns a new Promise, which makes it possible to build a chain:

There is a chain of .then() and .catch()

Example of a chain:

new Promise((resolve, reject) => {
  console.log('beginning of promise');
  resolve('Success on the first step');
})
.then((data) => {
  console.log('1. first then:', data);
  return 'Success on the second step';
})
.then((data) => {
  console.log('2. second then:', data);
  // Generate an error. Usually, an error is generated in the process for further processing
  throw new Error('Error on the second step');
})
.then((data) => {
  // will not be executed due to an error in the previous one, the code will go to the next catch
  console.log('3. third then:', data);
  return 'Success on the 4th step';
})
.catch((__error) => { // __error or e is usually passed to catch
  // caught an error from one of the previous thens, otherwise catch would not have been executed
  console.log('Catch caught error:', __error.message);
  return 'Error processing completed';
})
.then((data) => {
  // continue after the subsequent catch code
  console.log('4. last then:', data);
});

The console will output:

beginning of promise
1. first then: Success on the first step
2. second then: Success on the second step
Catch caught error: Error on the second step
4. last then: Error processing completed

- .then() and .catch() return a new promise, so you can build chains.
- Errors within .then() are automatically passed to the nearest .catch().
- After .catch(), execution continues in the next .then() (if any).
```