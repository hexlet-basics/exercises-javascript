const { test, expect } = require('tests');

test((f) => {
  expect(f('')).toBe(false);
  expect(f('Targari')).toBe(false);
  expect(f('targaryen')).toBe(false);
  expect(f('Targaryen')).toBe(false);
});
