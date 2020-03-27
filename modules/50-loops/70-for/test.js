import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f(1, 1)).toEqual(1);
  expect(f(1, 2)).toEqual(3);
  expect(f(7, 9)).toEqual(24);
});
