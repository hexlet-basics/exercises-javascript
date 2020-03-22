const { test, expect } = require('tests');

test((f) => {
  expect(f('Renly', 'R')).toBe(true);
  expect(f('Renly', 'r')).toBe(false);
  expect(f('Tommy', 'm')).toBe(true);
  expect(f('Tommy', 'd')).toBe(false);
  expect(f('Tommy', 'y')).toBe(true);
});
