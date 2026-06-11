// @ts-check

import { expect, test, vi } from 'vitest';

test('undefined', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  await import('./index.js');

  // console.log должен быть вызван, и ему должен быть передан аргумент undefined
  expect(consoleLogSpy).toHaveBeenCalled();
  const [firstCall] = consoleLogSpy.mock.calls;
  expect(firstCall.length).toBeGreaterThan(0);
  expect(firstCall[0]).toBe(undefined);
});
