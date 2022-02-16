import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('89602223423')).toBe(false);
  expect(f('+79602223423')).toBe(true);
});
