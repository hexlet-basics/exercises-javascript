// @ts-check

import { expect, test, vi } from 'vitest';
import f from './index.js';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  f(6);

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe('6\n5\n4\n3\n2\n1\nfinished!');
});
