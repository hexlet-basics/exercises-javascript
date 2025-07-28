// BEGIN
const processOrder = (order) => {
  return new Promise((resolve, reject) => {
    if (!order.paid) {
      reject(new Error('Order is not paid'));
      return;
    }

    if (order.quantity < 1 || order.quantity > 100) {
      reject(new Error('Quantity must be between 1 and 100'));
      return;
    }

    resolve(order);
  });
};
// END

export default processOrder;
