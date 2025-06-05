Implement the processOrder(order) function that takes an object with order parameters and returns a Promise.

The order processing should be done with the following checks:

1. If the order is not paid, return a rejected Promise with the error "Order is not paid".

2. The quantity of the product must be a number from 1 to 100 inclusive.
If this is not the case, reject the Promise with the error "Quantity must be between 1 and 100".

3. If the checks are successful, the Promise should be executed with the passed order object.

Example:

```js
processOrder({ item: 'banana', quantity: 10, paid: true })
.then((order) => console.log('Order processed:', order))
.catch((err) => console.error('Error:', err.message));
```