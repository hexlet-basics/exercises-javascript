import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f('axe', 'a')).toEqual(1);
  expect(f('', 'a')).toEqual(0);
  expect(f('OpPa', 'p')).toEqual(2);
  expect(f('OpPa', 'P')).toEqual(2);
});
