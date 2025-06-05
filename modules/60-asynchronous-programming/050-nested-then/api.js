const usersDB = {
  1: { id: 1, name: 'Jon', hasAccess: true },
  2: { id: 2, name: 'Arya', hasAccess: false },
};

const ordersDB = {
  1: ['sword', 'cloak'],
  2: ['dagger'],
};

const fetchUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(usersDB[id] || null);
    }, 100);
  });
};

const fetchOrders = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ordersDB[user.id] || []);
    }, 100);
  });
};

const checkAccess = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user.hasAccess);
    }, 100);
  });
};

export {
  fetchUser,
  fetchOrders,
  checkAccess,
}
