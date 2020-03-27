import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('hey')).toBe('yeh');
  expect(f('Hey')).toBe('Hey');
});
