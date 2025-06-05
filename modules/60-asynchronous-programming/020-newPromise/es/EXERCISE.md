Implementar una función waitPromise(ms, reject) que devuelva una promesa.

La promesa debe:

- resolverse con la cadena "¡Listo!" después de ms milisegundos si no se pasa la instrucción reject o esta es falsa.

- rechazar con el error "¡Error!" después de ms milisegundos si la instrucción reject es verdadera.

Usar setTimeout para retrasar la ejecución.

Ejemplo:

```js
waitPromise(1000).then(console.log); // después de 1 segundo, imprime "Done!"

waitPromise(1000, true).catch(console.log); // después de 1 segundo, imprime "Failed!"
```