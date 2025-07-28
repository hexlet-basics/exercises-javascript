In this exercise, you need to implement a function getUserOrders(id) that:

- Asynchronously gets the user by id using fetchUser(id)
- Checks if the user exists, otherwise throws the error "User not found"
- Asynchronously checks the user's access using checkAccess(user)
- If there is no access, throws the error "Access denied"
- If there is access, asynchronously gets the list of user's orders using fetchOrders(user)
- Returns a promise with an array of orders

Use nested .then()

Example:

```js
getUserOrders(1).then((orders) => {
  console.log(orders); // ['sword', 'cloak']
}).catch(console.error);
```