const { test, expect } = require('tests');

test((f) => {
  expect(f('hey')).toBe('yeh');
  expect(f('Hey')).toBe('Hey');
});
