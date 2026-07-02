// @ts-check

import { expect, test, vi } from 'vitest';

test('float', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe('0.30000000000000004');
});
