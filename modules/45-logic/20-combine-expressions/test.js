import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('')).toBe(false);
  expect(f('Targari')).toBe(false);
  expect(f('targaryen')).toBe(false);
  expect(f('Targaryen')).toBe(true);
  expect(f('Targaryen Daenerys')).toBe(true);
});
