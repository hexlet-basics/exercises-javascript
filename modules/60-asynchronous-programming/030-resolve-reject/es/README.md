Comprensión de la resolución y el rechazo

```js
Resolve y reject son funciones que gestionan el resultado de una promesa.
Dentro de new Promise((resolve, reject) => { ... }), se llama a una de ellas para completar la operación asíncrona.

resolve(value) indica éxito:

new Promise((resolve) => {
  resolve('Done');
}).then(console.log); // 'Done'

reject(error) señala un error:

new Promise((_, reject) => {
  reject(new Error('Error'));
}).catch(err => console.log(err.message)); // 'Error'
'
```
Una promesa solo se puede resolver una vez, ya sea mediante la resolución o el rechazo.