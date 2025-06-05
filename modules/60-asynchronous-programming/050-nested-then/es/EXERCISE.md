En este ejercicio, necesitas implementar la función getUserOrders(id) que:

- Obtiene el usuario asincrónicamente por su ID usando fetchUser(id)
- Comprueba si el usuario existe; de ​​lo contrario, genera el error "User not found"
- Comprueba el acceso del usuario asincrónicamente usando checkAccess(user)
- Si no hay acceso, genera el error "Access denied"
- Si hay acceso, obtiene asincrónicamente la lista de pedidos del usuario usando fetchOrders(user)
- Devuelve una promesa con un array de pedidos

Usa .then() anidado

Ejemplo:

```js
getUserOrders(1).then((orders) => {
  console.log(orders); // ['sword', 'cloak']
}).catch(console.error);
```