// @ts-check

import { expect, test, vi } from 'vitest';

test('primitive data types', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe('Name: Anna\nBirth year: 1994\nAge: 32\nRating: 4.7');
});
