// @ts-check

import { expect, test, vi } from 'vitest'
import f from './index.js';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
  f()

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe('Winter is coming')
})
