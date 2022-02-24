// @ts-check

import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f('1234123412341234')).toEqual('****1234');
  expect(f('1234123412344321')).toEqual('****4321');
});
