// @ts-check

import { expect, test, vi } from 'vitest';

test('symbols', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe('grip');
});
