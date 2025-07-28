Una de las principales formas de gestionar tareas asíncronas son las cadenas .then(). Permiten procesar el resultado de una tarea y pasarlo a la siguiente.

```js
Los siguientes métodos se utilizan para trabajar con promesas:

- .then() - se llama cuando la promesa se ejecuta correctamente.
- .catch() - se llama cuando se produce un error.

Cada `.then()` y `catch` devuelven una nueva Promesa, lo que permite construir una cadena:

Existe una cadena de `.then()` y `.catch()`.

Ejemplo de cadena:

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
  // Generar un error. Normalmente, se genera un error en el proceso para su posterior procesamiento.
  throw new Error('Error on the second step');
})
.then((data) => {
  // No se ejecutará debido a un error en la anterior; el código pasará a la siguiente. catch
  console.log('3. third then:', data);
  return 'Success on the 4th step';
})
.catch((__error) => { // __error o e se suele pasar a catch
  // Se detectó un error de uno de los "then" anteriores; de lo contrario, catch no se habría ejecutado.
  console.log('Catch caught error:', __error.message);
  return 'Error processing completed';
})
.then((data) => {
  // Continúa después del código catch subsiguiente.
  console.log('4. last then:', data);
});

La consola mostrará:

beginning of promise
1. first then: Success on the first step
2. second then: Success on the second step
Catch caught error: Error on the second step
4. last then: Error processing completed

- .then() y .catch() devuelven una nueva promesa para que puedas construir cadenas. - Los errores dentro de .then() se pasan automáticamente al .catch() más cercano.
- Después de .catch(), la ejecución continúa en el siguiente .then() (si lo hay).
```