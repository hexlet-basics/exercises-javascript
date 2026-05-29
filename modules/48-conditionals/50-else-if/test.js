import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('green')).toBe('go');
  expect(f('yellow')).toBe('slow down');
  expect(f('red')).toBe('stop');
  expect(f('blue')).toBe('unknown');
  expect(f('purple')).toBe('unknown');
});
