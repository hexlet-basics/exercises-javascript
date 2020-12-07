import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  const name = 'Hexlet';
  expect(f(name, 0)).toBe('');
  expect(f(name, 1)).toBe('H');
  expect(f(name, 6)).toBe('t');
  expect(f(name, 7)).toBe('');
  expect(f(name, 11)).toBe('');
});
