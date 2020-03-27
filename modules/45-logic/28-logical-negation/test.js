import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('blue', null)).toBe(true);
  expect(f('red', null)).toBe(false);
  expect(f('red', 'man')).toBe(true);
  expect(f('red', 'lion')).toBe(false);
  expect(f('blue', 'lion')).toBe(false);
});
