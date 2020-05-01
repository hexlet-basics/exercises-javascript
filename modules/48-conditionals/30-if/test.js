import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('general')).toBe('general');
  expect(f('general?')).toBe('general');
  expect(f('GeNeral?')).toBe('general');
  expect(f('SCREAM')).toBe('scream');
  expect(f('SCREAM!')).toBe('scream');
});
