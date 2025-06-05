
import { describe, it, expect } from 'vitest';
import f from './index.js';

describe('getValidatedOrder', () => {
  it('returns saved order with correct data', () => {
    return f(1).then((result) => {
      expect(result).toEqual({ id: 1, paid: true, quantity: 2, saved: true });
    });
  });

  it('throws error if there is no order', () => {
    return f(99).catch((error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Order not found');
    });
  });

  it('throws error when order is unpaid', () => {
    return f(2).catch((error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Order is not paid');
    });
  });

  it('throws error if the quantity is invalid', () => {
    return f(3).catch((error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Quantity must be between 1 and 100');
    });
  });
});