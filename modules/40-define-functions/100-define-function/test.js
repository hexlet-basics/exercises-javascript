// @ts-check

import { expect, test, vi } from 'vitest';
import f from './index.js';

test('define function', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  f();

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe('Hello, World!');
});
