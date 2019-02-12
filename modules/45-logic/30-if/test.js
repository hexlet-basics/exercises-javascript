const { test, expect } = require('tests');

test((f) => {
  expect(f('normal')).toBe('normal');
  expect(f('normal?')).toBe('normal');
  expect(f('NoRmal?')).toBe('normal');
  expect(f('SCREAM')).toBe('scream');
  expect(f('SCREAM!')).toBe('scream');
});
