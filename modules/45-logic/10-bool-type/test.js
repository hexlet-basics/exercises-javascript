const { test, expect } = require('tests');

test((f) => {
  expect(f(23)).toBe(false);
  expect(f(70)).toBe(true);
  expect(f(60)).toBe(true);
  expect(f(59)).toBe(false);
});
