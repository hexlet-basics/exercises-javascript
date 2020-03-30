import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('Bran')).toEqual('narB');
  expect(f('')).toEqual('');
  expect(f('Hexlet')).toEqual('telxeH');
});
