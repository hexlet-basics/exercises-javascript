import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('blue', null)).toBe(false);
  expect(f('red', 'man')).toBe(false);
  expect(f('red', 'lion')).toBe(true);
  expect(f('blue', 'lion')).toBe(true);
  expect(f('red', null)).toBe(true);
});
