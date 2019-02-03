const { test, expect } = require('tests');

test((f) => {
  expect(f('8234782')).toBe(false);
  expect(f('Joker')).toBe(false);
  expect(f('Mister')).toBe(true);
});
