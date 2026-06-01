import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('aaabcccc')).toBe('a3bc4');
  expect(f('abcd')).toBe('abcd');
  expect(f('aabbaa')).toBe('a2b2a2');
  expect(f('a')).toBe('a');
  expect(f('')).toBe('');
  expect(f('zzz')).toBe('z3');
});
