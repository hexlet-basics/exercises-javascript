const ordersDB = {
  1: { id: 1, paid: true, quantity: 2 },
  2: { id: 2, paid: false, quantity: 5 },
  3: { id: 3, paid: true, quantity: 150 },
};

const fetchOrder = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ordersDB[id] || null);
    }, 50);
  });
};

const validateOrder = (order) => {
  return new Promise((resolve, reject) => {
    if (!order.paid) {
      reject(new Error('Order is not paid'));
    } else if (order.quantity < 1 || order.quantity > 100) {
      reject(new Error('Quantity must be between 1 and 100'));
    } else {
      resolve(order);
    }
  });
};

const saveOrder = (order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...order, saved: true });
    }, 50);
  });
};

export {
  fetchOrder,
  validateOrder,
  saveOrder,
}