import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('wow')).toBe(true);
  expect(f('hexlet')).toBe(false);
  expect(f('asdffdsa')).toBe(true);
  expect(f('Wow')).toBe(false);
});
