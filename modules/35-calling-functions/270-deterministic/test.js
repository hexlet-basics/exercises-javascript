// @ts-check

import { expectOutput, expect } from 'hexlet-basics/tests';

expectOutput((content) => {
  expect(content).not.toEqual('');
  const value = Number(content);
  expect(Number.isInteger(value)).toEqual(true);
  expect(value).toBeGreaterThanOrEqual(0);
  expect(value).toBeLessThanOrEqual(10);
});
