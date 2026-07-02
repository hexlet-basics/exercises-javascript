import { expect, test } from 'vitest';
import f from './index.js';

test('return from loops', () => {
  expect(f('support@example.com')).toBe(true);
  expect(f('wrong-email')).toBe(false);
  expect(f('@admin')).toBe(true);
  expect(f('a@b')).toBe(true);
});
