// @ts-check

import { expect, test, vi } from 'vitest'
import f from './index.js';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
  f('Hexlet')

  const firstArg = consoleLogSpy.mock.calls[0]?.[0];

  expect(firstArg).toBe('t\ne\nl\nx\ne\nH')
})
