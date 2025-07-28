Implementar la función formatUserInfo usando async/await.

La función debe:

1. Obtener el usuario por ID usando fetchUser(id).

2. Si no se encuentra el usuario, generar un error con el mensaje "User not found".

3. Obtener los pedidos del usuario usando fetchOrders(user).

4. Devolver una cadena con el formato: "User: <name>, Orders: <number of orders>".

Ejemplo:
```js
await formatUserInfo(1); // 'Usuario: Jon, Pedidos: 2'
await formatUserInfo(42); // genera el error 'Usuario no encontrado'
```