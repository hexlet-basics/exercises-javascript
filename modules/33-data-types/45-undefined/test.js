// @ts-check

import { expect, test, vi } from 'vitest';

test('undefined', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  await import('./index.js');

  // console.log must be called and must be passed an undefined argument
  expect(consoleLogSpy).toHaveBeenCalled();
  const [firstCall] = consoleLogSpy.mock.calls;
  expect(firstCall?.length).toBeGreaterThan(0);
  expect(firstCall?.[0]).toBe(undefined);
});
