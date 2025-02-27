import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('Tally')).toBe('friend');
  expect(f('Karstark')).toBe('friend');
  expect(f('Lannister')).toBe('enemy');
  expect(f('Martell')).toBe('neutral');
  expect(f('undefined')).toBe('neutral');
});
