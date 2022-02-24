import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f('general')).toBe('general');
  expect(f('general?')).toBe('general');
  expect(f('GeNeral?')).toBe('general');
  expect(f('SCREAM')).toBe('scream');
  expect(f('SCREAM!')).toBe('scream');
});
