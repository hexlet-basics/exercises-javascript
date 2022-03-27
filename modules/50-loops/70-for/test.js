import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f('attack')).toEqual('taatkc');
  expect(f('go!')).toEqual('og!');
  expect(f('back!')).toEqual('abkc!');
});
