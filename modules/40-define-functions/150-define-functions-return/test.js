import { test } from 'hexlet-basics/tests';

test((f) => {
  expect(f()).toBeGreaterThan(0);
  expect(f()).toBeLesserThan(10);
});
