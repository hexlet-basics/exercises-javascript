Один из основных способов управления асинхронными задачами - цепочки .then(). Они позволяют обрабатывать результат одной задачи и передавать его в следующую.

```js
Для работы с промисами используются методы:

- .then() - вызывается при успешном выполнении промиса.
- .catch() - вызывается при ошибке.

Каждый .then() и catch возвращает новый Promise, что даёт возможность выстраивать цепочку:

Существует цепочка из .then() и .catch()

Пример цепочки:

new Promise((resolve, reject) => {
  console.log('beginning of promise');
  resolve('Success on the first step');
})
.then((data) => {
  console.log('1. first then:', data);
  return 'Success on the second step';
})
.then((data) => {
  console.log('2. second then:', data);
  // Генерируем ошибку. Обычно в процессе генерируется ошибка для дальнейшей обработки
  throw new Error('Error on the second step');
})
.then((data) => {
  // не выполнится из-за ошибки в предыдущем,код перейдёт в ближайший дальше catch
  console.log('3. third then:', data);
  return 'Success on the 4th step';
})
.catch((__error) => { // __error или e обычно передаётся в catch
  // словил ошибку из одного из прошлых then, иначе бы catch не выполнился
  console.log('Catch catched error:', __error.message); 
  return 'Error processing completed';
})
.then((data) => {
  // продолжение дальше после уже catch последующего кода
  console.log('4. last then:', data);
});
  
Консоль выведет:

beginning of promise 
1. first then: Success on the first step 
2. second then: Success on the second step 
Catch catched error: Error on the second step
4. last then: Error processing completed  

- .then() и .catch() возвращают новый промис, поэтому можно строить цепочки.
- Ошибки внутри .then() автоматически передаются в ближайший .catch().
- После .catch() выполнение продолжается в следующем .then() (если существует).
```