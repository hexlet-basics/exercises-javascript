// @ts-check

import { expect, test } from 'vitest';
import f from './index.js';

test('logical negation', () => {
  expect(f('wow')).toBe(false);
  expect(f('hexlet')).toBe(true);
  expect(f('asdffdsa')).toBe(false);
  expect(f('Wow')).toBe(false);
});
