Nested .then() - when inside the callback of one .then() another .then() is called. Example:

```js
doFirst()
.then(result1 => {
  return doSecond(result1)
  .then(result2 => {
    return doThird(result2);
  });
});
```