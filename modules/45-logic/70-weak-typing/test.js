const { test, expect } = require('tests');

test((f) => {
  expect(f('')).toBe(false);
  expect(f('  ')).toBe(false);
  expect(f(null)).toBe(false);
  expect(f(undefined)).toBe(false);
  expect(f(false)).toBe(false);
  expect(f(true)).toBe(false);
  expect(f(3)).toBe(false);
});
