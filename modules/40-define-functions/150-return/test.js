// @ts-check

import { expect, test } from 'vitest';
import f from './index.js';

test('return', () => {
  expect(f('text', 3)).toBe('tex...');
  expect(f('hexlet learning', 6)).toBe('hexlet...');
});
