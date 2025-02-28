// @ts-check

import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f('1234123412341234')).toEqual('****1234');
  expect(f('1234123412344321')).toEqual('****4321');
  expect(f('1234123412344321', 2)).toEqual('**4321');
  expect(f('1234123412341234', 12)).toEqual('************1234');
});
