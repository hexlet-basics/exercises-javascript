// @ts-check

import { expectOutput, expect } from 'hexlet-basics/tests';

expectOutput((content) => {
  const value = Number(content);
  expect(value).toBeGreaterThanOrEqual(1);
  expect(value).toBeLessThanOrEqual(10);
});
