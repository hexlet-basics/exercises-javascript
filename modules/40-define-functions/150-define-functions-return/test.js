// @ts-check

import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f()).toBeGreaterThan(0);
  expect(f()).toBeLessThan(10);
});
