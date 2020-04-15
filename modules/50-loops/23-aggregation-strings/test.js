import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f(2, 2)).toEqual('2');
  expect(f(1, 5)).toEqual('12345');
  expect(f(10, 12)).toEqual('101112');
});
