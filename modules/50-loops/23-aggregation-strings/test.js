import { expect, test } from 'vitest';
import f from './index.js';

test('aggregation strings', () => {
  expect(f('+7 (999) 123-45-67')).toBe('+79991234567');
  expect(f('8 800 555 35 35')).toBe('88005553535');
  expect(f('(123) 456-7890')).toBe('1234567890');
});
