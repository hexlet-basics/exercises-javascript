import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('8234782')).toBe(false);
  expect(f('Joker')).toBe(false);
  expect(f('Mister')).toBe(true);
});
