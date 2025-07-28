Implement a waitPromise(ms, reject) function that returns a promise.

The promise should:

- resolve with the string "Done!" after ms milliseconds if reject is not passed or is false.

- reject with the error "Failed!" after ms milliseconds if reject is true.

Use setTimeout to delay.

Example:

```js
waitPromise(1000).then(console.log); // after 1 second prints "Done!"

waitPromise(1000, true).catch(console.log); // after 1 second prints "Failed!"
```