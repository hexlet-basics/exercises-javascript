import { expect, test } from 'vitest';
import f from './index.js';

test('if', () => {
  expect(f(100500)).toBe('Try again!');
  expect(f(42)).toBe('You win!');
});
