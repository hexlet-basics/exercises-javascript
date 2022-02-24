// @ts-check

import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f()).toBeGreaterThan(0);
  expect(f()).toBeLessThan(10);
});
