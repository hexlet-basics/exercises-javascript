import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f(2, 2)).toEqual(2);
  expect(f(1, 3)).toEqual(6);
  expect(f(1, 5)).toEqual(120);
  expect(f(2, 5)).toEqual(120);
  expect(f(0, 5)).toEqual(0);
  expect(f(-4, -2)).toEqual(-24);
  expect(f(-4, -3)).toEqual(12);
});
