import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  const name = 'Hexlet';
  expect(f(name, 0)).toBe('');
  expect(f(name, 1)).toBe('H');
  expect(f(name, 6)).toBe('t');
  expect(f(name, 7)).toBe('');
  expect(f(name, 11)).toBe('');
});
