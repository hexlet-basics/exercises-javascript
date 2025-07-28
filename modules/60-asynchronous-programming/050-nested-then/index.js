import { fetchUser, fetchOrders, checkAccess } from './api.js'

// BEGIN
export const getUserOrders = (id) => {
  return fetchUser(id)
    .then((user) => {
      if (!user) {
        throw new Error('User not found');
      }

      return checkAccess(user).then((access) => {
        if (!access) {
          throw new Error('Access denied');
        }

        return fetchOrders(user);
      });
    });
};
// END

export default getUserOrders;
