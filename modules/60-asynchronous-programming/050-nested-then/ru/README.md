Вложенные .then() - когда внутри коллбэка одного .then() вызывается другой .then(). Пример:

```js
doFirst()
.then(result1 => {
  return doSecond(result1)
  .then(result2 => {
    return doThird(result2);
  });
});
```