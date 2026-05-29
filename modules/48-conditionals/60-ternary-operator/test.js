import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('flip')).toBe('flop');
  expect(f('flop')).toBe('flip');
  expect(f('hello')).toBe('flip');
});
