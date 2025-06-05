```js
// Когда нужно выполнить несколько асинхронных шагов по порядку,
// удобно использовать ключевое слово await внутри async-функции.

async function doSteps() {
  try {
    const result1 = await firstStep();
    const result2 = await secondStep(result1);
    const result3 = await thirdStep(result2);
    return result3;
  } catch (__error) {
    // Если любая из операций выбросит ошибку, тогда вызовется блок catch
    return `An error happened: ${__error}`;
  }
}
```