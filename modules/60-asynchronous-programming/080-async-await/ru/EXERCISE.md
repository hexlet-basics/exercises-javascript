Реализуйте функцию formatUserInfo, используя async/await.

Функция должна:

1. Получать пользователя по идентификатору с помощью fetchUser(id).
2. Если пользователь не найден — выбрасывать ошибку с сообщением "User not found".
3. Получать заказы пользователя через fetchOrders(user).
4. Возвращать строку в формате: "User: <имя>, Orders: <кол-во заказов>".

Пример:
```js
await formatUserInfo(1); // 'User: Jon, Orders: 2'
await formatUserInfo(42); // выбрасывает ошибку 'User not found'
```