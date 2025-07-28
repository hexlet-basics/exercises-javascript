Implement a function getValidatedOrder(id) that:

1. Loads an order by id using fetchOrder.
2. Validates the order using validateOrder:
  - If the order is not paid, the error "Order is not paid" should be thrown.
  - If the quantity is not in the range 1–100 - the error "Quantity must be between 1 and 100".
3. Saves the order using saveOrder.
4. Returns the result of saving.
5. If the order is not found - throws the error "Order not found".

Use a chain of .then(), throw, .catch()