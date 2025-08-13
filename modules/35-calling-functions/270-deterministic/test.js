// @ts-check

import { expect, test, vi } from 'vitest';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).not.toEqual('');
  const value = Number(firstArg);
  expect(Number.isInteger(value)).toEqual(true);
  expect(value).toBeGreaterThanOrEqual(0);
  expect(value).toBeLessThanOrEqual(10);
});
