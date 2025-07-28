import { describe, it, expect } from 'vitest';
import f from './index.js';

describe('getUserOrders', () => {
  it('should return a list of orders if the user is found and has access', () => {
    return f(1).then((orders) => {
      expect(orders).toEqual(['sword', 'cloak']);
    });
  });

  it('should throw error if the user is not found', () => {
    return f(999).catch((error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('User not found');
    });
  });

  it('should throw error if access is not available', () => {
    return f(2).catch((error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Access denied');
    });
  });
});