Реализуйте функцию waitFor(ms, callback), которая вызывает переданный cb через ms миллисекунд, используя setTimeout.

```js
waitFor(1000, () => {
  console.log('1 second has passed');
});
```