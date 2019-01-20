const { test, expect } = require('tests');

test((f) => {
  expect(f('')).toBe(true);
  expect(f('  ')).toBe(true);
  expect(f(null)).toBe(false);
  expect(f(undefined)).toBe(false);
  expect(f(false)).toBe(true);
  expect(f(true)).toBe(false);
  expect(f(3)).toBe(false);
});
