// @ts-check

import { expectOutput, expect } from 'hexlet-basics/tests';

expectOutput((content) => {
  const value = Number(content);
  expect(value).toBeGreaterThanOrEqual(0);
  expect(value).toBeLessThanOrEqual(10);
});
