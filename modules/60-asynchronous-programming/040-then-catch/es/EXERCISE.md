Implementa una función chainProcess que toma un número inicial y devuelve una Promesa.

Debe realizar los siguientes pasos:

1. Incrementar el valor en 2 y pasarlo.
2. Multiplicar el resultado por 3 y pasarlo.
3. Si el resultado es mayor que 50, generar un error con el texto 'Too big!'.
4. De lo contrario, devolver el valor como correcto.

```js
chainProcess(5).then(console.log); // 21
chainProcess(20).catch(console.log); // Too big!
```