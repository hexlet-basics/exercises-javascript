import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f(9)).toEqual('2,4,6,8,');
  expect(f(15)).toEqual('2,4,6,8,10,12,14,');
  expect(f(2)).toEqual('2,');
});
