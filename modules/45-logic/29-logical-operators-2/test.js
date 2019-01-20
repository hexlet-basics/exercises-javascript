const { test, expect } = require('tests');

test((f) => {
  expect(f('yellow', 'black')).toBe(true);
  expect(f('red', 'yellow')).toBe(false);
  expect(f('red', 'red')).toBe(false);
  expect(f('black', 'black')).toBe(true);
});
