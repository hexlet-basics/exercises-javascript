import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('Bran')).toEqual('rn');
  expect(f('')).toEqual('');
  expect(f('Hexlet')).toEqual('elt');
});
