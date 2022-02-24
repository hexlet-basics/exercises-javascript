import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f('Renly', 'R')).toBe(true);
  expect(f('Renly', 'r')).toBe(false);
  expect(f('Tommy', 'm')).toBe(true);
  expect(f('Tommy', 'd')).toBe(false);
  expect(f('Tommy', 'y')).toBe(true);
});
