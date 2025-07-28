import {describe, it, expect} from 'vitest';
import f from './index.js';

describe('proccessOrder', () => {
  it('resolves for valid order', () => {
    const order = { item: 'apple', quantity: 10, paid: true };
    return f(order).then((result) => {
      expect(result).to.deep.equal(order);
    });
  });

  it('rejects if order is not paid', () => {
    const order = { item: 'banana', quantity: 5, paid: false };
    return f(order)
      .then(() => Promise.reject(new Error('Expected method to reject.')))
      .catch((err) => {
        expect(err.message).to.equal('Order is not paid');
      });
  });

  it('rejects if quantity is less than 1', () => {
    const order = { item: 'banana', quantity: 0, paid: true };
    return f(order)
      .then(() => Promise.reject(new Error('Expected method to reject.')))
      .catch((err) => {
        expect(err.message).to.equal('Quantity must be between 1 and 100');
      });
  });

  it('rejects if quantity is greater than 100', () => {
    const order = { item: 'banana', quantity: 101, paid: true };
    return f(order)
      .then(() => Promise.reject(new Error('Expected method to reject.')))
      .catch((err) => {
        expect(err.message).to.equal('Quantity must be between 1 and 100');
      });
  });
});