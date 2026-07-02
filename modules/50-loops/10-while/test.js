// @ts-check

import { expect, test, vi } from 'vitest';
import f from './index.js';

test('printNumbers', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  f(6);

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe('6\n5\n4\n3\n2\n1');
});
