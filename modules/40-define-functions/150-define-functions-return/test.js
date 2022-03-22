// @ts-check

import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(Number.isInteger(f())).toEqual(true);
  expect(f()).toBeGreaterThanOrEqual(0);
  expect(f()).toBeLessThanOrEqual(10);
});
