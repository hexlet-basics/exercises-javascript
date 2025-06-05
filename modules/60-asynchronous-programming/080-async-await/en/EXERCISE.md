Implement the formatUserInfo function using async/await.

The function should:

1. Get the user by ID using fetchUser(id).
2. If the user is not found, throw an error with the message "User not found".
3. Get the user's orders using fetchOrders(user).
4. Return a string in the format: "User: <name>, Orders: <number of orders>".

Example:
```js
await formatUserInfo(1); // 'User: Jon, Orders: 2'
await formatUserInfo(42); // throws an error 'User not found'
```