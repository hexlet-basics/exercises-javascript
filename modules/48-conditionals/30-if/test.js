import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f(100500)).toBe('Try again!');
  expect(f(42)).toBe('You win!');
});
