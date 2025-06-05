Когда в async функции происходит ошибка, она вызывает отклонение промиса (reject). Чтобы перехватывать такие ошибки, используется try/catch.

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