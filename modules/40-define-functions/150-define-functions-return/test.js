// @ts-check

import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f()).toBe('hurray! hurray! hurray!');
});
