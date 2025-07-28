The Promise.all method allows you to run multiple asynchronous operations in parallel and get the results as soon as all tasks complete.

It takes an array of promises and returns a new promise that:

- Resolves to an array of results, in the same order in which the promises were passed;
- Rejects if at least one of the promises returns an error.

Example:

```js
const tasks = [fetch(url1), fetch(url2)];
Promise.all(tasks).then((responses) => {
  console.log(responses); // both results in the order they were called
});
```