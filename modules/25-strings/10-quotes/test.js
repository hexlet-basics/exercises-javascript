// @ts-check

import { expect, test, vi } from 'vitest';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe('The file "user\'s_config.json" was not found.');
});
