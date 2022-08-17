import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f('Bran')).toEqual('narB');
  expect(f('')).toEqual('');
  expect(f('Hexlet')).toEqual('telxeH');
});
