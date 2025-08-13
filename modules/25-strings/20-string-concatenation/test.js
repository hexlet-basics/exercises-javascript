// @ts-check

import { expect, test, vi } from 'vitest';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe('Winter came for the House of Frey.');
});
