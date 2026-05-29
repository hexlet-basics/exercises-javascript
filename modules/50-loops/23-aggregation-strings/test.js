import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f(2, 2)).toEqual('2');
  expect(f(1, 3)).toEqual('1, 2, 3');
  expect(f(5, 7)).toEqual('5, 6, 7');
});
