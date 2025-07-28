El método Promise.all permite ejecutar múltiples operaciones asíncronas en paralelo y obtener los resultados en cuanto se completen todas las tareas.

Toma un array de promesas y devuelve una nueva promesa que:

- Se resuelve en un array de resultados, en el mismo orden en que se pasaron las promesas;
- Se rechaza si al menos una de las promesas devuelve un error.

Ejemplo:

```js
const task = [fetch(url1), fetch(url2)];
Promise.all(tasks).then((responses) => {
  console.log(responses); // ambos resultados en el orden en que fueron llamados
});
```