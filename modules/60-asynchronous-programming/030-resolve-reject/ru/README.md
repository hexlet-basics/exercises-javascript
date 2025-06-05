Понимание resolve и reject

```js
resolve и reject - это функции, с помощью которых происходит управление результатом промиса.
Внутри new Promise((resolve, reject) => { ... }) вызывается одна из них, чтобы завершить асинхронную операцию.

resolve(value) означает успешное выполнение:

new Promise((resolve) => {
  resolve('Done');
}).then(console.log); // 'Done'


reject(error) сигнализирует об ошибке:

new Promise((_, reject) => {
  reject(new Error('Error'));
}).catch(err => console.log(err.message)); // 'Error'
'
```
Промис можно завершить только один раз - либо через resolve, либо через reject.
