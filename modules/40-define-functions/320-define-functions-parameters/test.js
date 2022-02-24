// @ts-check

import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f('текст', 3)).toBe('тек...');
  expect(f('и пошла вода', 5)).toBe('и пош...');
});
