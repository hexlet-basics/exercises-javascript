```js
// When you need to execute several asynchronous steps in order,
// it is convenient to use the await keyword inside an async function.

async function doSteps() {
  try {
    const result1 = await firstStep();
    const result2 = await secondStep(result1);
    const result3 = await thirdStep(result2);
    return result3;
  } catch (__error) {
  // If any of the operations throws an error, then the catch block will be called.
    return `An error happened: ${__error}`;
  }
}
```