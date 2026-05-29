import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  expect(f(0)).toBe(0);
  expect(f(80)).toBe(400);
  expect(f(100)).toBe(500);
  expect(f(150)).toBe(850);
  expect(f(250)).toBe(1700);
});
