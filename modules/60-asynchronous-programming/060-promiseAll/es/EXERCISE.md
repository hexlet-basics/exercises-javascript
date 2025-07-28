Implementa la función `downloadAll(files)` que toma un array de nombres de archivo y devuelve una promesa que se resuelve después de que se hayan descargado todos los archivos.

Para descargar un solo archivo, usa la función `downloadFile(fileName)`, que devuelve una promesa.

La función `downloadAll` debe usar `Promise.all` para descargar todos los archivos en paralelo.

Ejemplo:

```js
downloadAll(['1.txt', '2.txt']).then((result) => {
  console.log(result); // ['1.txt loaded', '2.txt loaded']
});
```