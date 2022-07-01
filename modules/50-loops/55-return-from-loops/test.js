import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f('Hexlet', 'H')).toBe(true);
  expect(f('Hexlet', 'h')).toBe(false);
  expect(f('Awesomeness', 'm')).toBe(true);
  expect(f('Awesomeness', 'd')).toBe(false);
  expect(f('Awesomeness', 'o')).toBe(true);
  expect(f('Apple', 'e')).toBe(true);
});
