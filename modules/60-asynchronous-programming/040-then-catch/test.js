import { describe, it, expect } from 'vitest';
import f from './index.js';

describe('chainProcess', () => {
  it('should return the correct result given a valid input value', () => {
    return f(5).then((result) => {
      expect(result).toBe(21); // (5 + 2) * 3
    });
  });

  it('should throw an error if the result is too big', () => {
    expect.assertions(1);
    return f(20).catch((e) => {
      expect(e.message).toBe('Too big!');
    });
  });
});