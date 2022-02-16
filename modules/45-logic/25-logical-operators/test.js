import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f(2016)).toBe(true);
  expect(f(2000)).toBe(true);
  expect(f(2017)).toBe(false);
  expect(f(2018)).toBe(false);
  expect(f(1900)).toBe(false);
});
