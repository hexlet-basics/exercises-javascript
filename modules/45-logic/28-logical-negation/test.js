import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('wow')).toBe(false);
  expect(f('hexlet')).toBe(true);
  expect(f('asdffdsa')).toBe(false);
  expect(f('Wow')).toBe(false);
});
