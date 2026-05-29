import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('HELLO')).toBe('hello');
  expect(f('hello')).toBe('HELLO');
  expect(f('Hello')).toBe('HELLO');
});
