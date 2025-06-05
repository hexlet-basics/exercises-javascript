Реализуйте функцию processOrder(order), которая принимает объект с параметрами заказа и возвращает Promise.

Обработка заказа должна проходить с такими проверками:

1. Если заказ не оплачен, возвращать отклонённый Promise с ошибкой "Order is not paid".
2. Количество товара должно быть числом от 1 до 100 включительно.
   Если это не так, отклонять Promise с ошибкой "Quantity must be between 1 and 100".
3. Если проверки прошли успешно, Promise должен выполниться с переданным объектом заказа.

Пример:

```js
processOrder({ item: 'banana', quantity: 10, paid: true })
  .then((order) => console.log('Order processed:', order))
  .catch((err) => console.error('Error:', err.message));
```