JavaScript es de un solo subproceso. Para evitar que la ejecución del programa se congele mientras se espera (por ejemplo, una respuesta de un servidor o un temporizador), se utiliza la ejecución asíncrona. Una forma de hacerlo es mediante promesas.

Una promesa es un objeto que representa el resultado de una operación asíncrona y que puede recibirse ahora, más tarde o nunca. Una promesa tiene tres estados:

- pendiente: en espera;
- cumplido: completado correctamente;
- rechazado: se produjo un error.

El estado se controla mediante:
- resolver: se ejecuta al completarse correctamente;
- rechazar: se ejecuta al fallar.

```js
const promise = new Promise((resolve, reject) => {
  if (success) { // condicionalmente, todo se completó correctamente
    resolve('Result of the entire execution');
  } else {
    reject(new Error('Error during execution'));
  }
});
```