Реализуйте функцию waitPromise(ms, reject), которая возвращает промис.

Промис должен:

- разрешиться со строкой "Done!" через ms миллисекунд, если reject не передан или равен false.

- отклониться с ошибкой "Failed!" через ms миллисекунд, если reject равен true.

Для задержки используйте setTimeout.

Пример:

```js
waitPromise(1000).then(console.log); // через 1 секунду выведет "Done!"

waitPromise(1000, true).catch(console.log); // через 1 секунду выведет "Failed!"
```