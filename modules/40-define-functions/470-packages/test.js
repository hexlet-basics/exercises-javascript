// @ts-check

import { expect, test } from 'vitest';
import formatPrice from './index.js';

test('packages', () => {
  expect(formatPrice(12.3456)).toBe('12.35');
  expect(formatPrice(2.5)).toBe('2.50');
  expect(formatPrice(10)).toBe('10.00');
});
