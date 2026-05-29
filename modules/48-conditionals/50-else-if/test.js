import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('red')).toBe('Stop');
  expect(f('yellow')).toBe('Prepare');
  expect(f('green')).toBe('Go');
});
