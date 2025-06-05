```js
// Cuando se necesitan ejecutar varios pasos asincrónicos en orden,
// es conveniente usar la palabra clave await dentro de una función asíncrona.

async function doSteps() {
  try {
    const result1 = await firstStep();
    const result2 = await secondStep(result1);
    const result3 = await thirdStep(result2);
    return result3;
  } catch (__error) {
  // Si alguna de las operaciones genera un error, se llamará al bloque catch.
    return `An error happened: ${__error}`;
  }
}
```