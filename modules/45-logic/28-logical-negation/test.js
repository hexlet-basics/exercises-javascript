// @ts-check

import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f('wow')).toBe(false);
  expect(f('hexlet')).toBe(true);
  expect(f('asdffdsa')).toBe(false);
  expect(f('Wow')).toBe(false);
});
