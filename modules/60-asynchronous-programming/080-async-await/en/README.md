async and await are a modern way to work with asynchronous code in JavaScript, which makes it look like synchronous code and is much easier to read and maintain.

- The async keyword is placed before the function declaration. This turns the function into an asynchronous one - it always returns a promise.
- Inside an async function, you can use the await operator - it pauses reading and execution of new instructions until the promise is fulfilled at the place where the result is expected, if reading has already reached the point of using the result of the promise.
- Thanks to await, you can write asynchronous code that looks like regular sequential code, without nested callbacks and .then() chains.

```js
Previously, asynchronous code often looked like this:
loadConfig()
  .then(config => {
    return connectToDB(config)
      .then(db => {
        return runQuery(db);
      });
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error('Error:', err);
  });
If there are many such operations, the code becomes nested and hard to read - this is called the stairs of hell

The same with async/await looks simpler:
async function runApp() {
  try {
    const config = await loadConfig();
    const db = await connectToDB(config);
    const result = await runQuery(db);
    console.log(result);
  } catch (err) {
    console.error('Error:', err);
  }
}

This code is easier to read because it looks like regular synchronous code.
Error handling is also easier - a regular try/catch is enough.
```