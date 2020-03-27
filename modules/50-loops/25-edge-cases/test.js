import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  const name = 'Sansa Stark';
  expect(f(name, -1, 100)).toBe(false);
  expect(f(name, 10, 10)).toBe(false);
  expect(f(name, 11, 1)).toBe(false);
  expect(f(name, 3, 3)).toBe(true);
});
