// @ts-check

import { expect, test } from 'vitest';
import f from './index.js';

test('bool strings', () => {
  expect(f('apple')).toBe(false);
  expect(f('banana')).toBe(true);
  expect(f('pineapple')).toBe(true);
});
