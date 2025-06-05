import { fetchOrder, validateOrder, saveOrder } from "./api";

// BEGIN
export const getValidatedOrder = (id) => {
  return fetchOrder(id)
    .then((order) => {
      if (!order) {
        throw new Error('Order not found');
      }
      return validateOrder(order);
    })
    .then((validatedOrder) => {
      return saveOrder(validatedOrder);
    });
};
// END

export default getValidatedOrder;
