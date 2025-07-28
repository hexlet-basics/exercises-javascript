When an error occurs in an async function, it causes the promise to be rejected. To catch such errors, try/catch is used.

```js
async function fetchData() {
  try {
    const result = await fetchSomeData();
    return result;
  } catch (error) {
    return error.message;
  }
}
```