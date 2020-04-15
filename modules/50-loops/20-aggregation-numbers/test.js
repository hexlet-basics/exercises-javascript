import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f(2, 2)).toEqual(2);
  expect(f(1, 3)).toEqual(6);
  expect(f(1, 5)).toEqual(120);
});
