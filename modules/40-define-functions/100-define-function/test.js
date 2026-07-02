// @ts-check

import { expect, test, vi } from 'vitest';
import f from './index.js';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  f();

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe('Hello, World!');
});
