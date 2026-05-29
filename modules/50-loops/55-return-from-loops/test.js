import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('support@example.com')).toBe(true);
  expect(f('wrong-email')).toBe(false);
  expect(f('@admin')).toBe(true);
  expect(f('a@b')).toBe(true);
});
