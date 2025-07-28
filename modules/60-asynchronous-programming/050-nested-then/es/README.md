.then() anidado: cuando dentro de la función de retorno de un .then() se llama a otro .then(), se invoca otro .then(). Ejemplo:

```js
doFirst()
.then(result1 => {
  return doSecond(result1)
  .then(result2 => {
    return doThird(result2);
  });
});
```