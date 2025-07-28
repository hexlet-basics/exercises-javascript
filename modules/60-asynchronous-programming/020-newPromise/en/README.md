JavaScript is single-threaded. To avoid freezing program execution while waiting (for example, for a response from a server or a timer), asynchronous execution is used. One way is to use promises.

A promise is an object representing the result of an asynchronous operation that can be received now, later, or never. A promise has 3 states:

- pending - waiting;
- fulfilled - successfully completed;
- rejected - an error occurred.

The state is controlled by:
- resolve is executed upon successful completion
- reject is executed upon failure

```js
const promise = new Promise((resolve, reject) => {
  if (success) { // conditionally everything was completed successfully
    resolve('Result of the entire execution');
  } else {
    reject(new Error('Error during execution'));
  }
});
```