import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f(0)).toBeNull();
  expect(f(666)).toBe('devil number');
  expect(f(42)).toBe('answer for everything');
  expect(f(7)).toBe('prime number');
});
