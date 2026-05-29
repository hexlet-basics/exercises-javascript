import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('1234567812345678')).toBe('************5678');
  expect(f('12345678')).toBe('****5678');
});
