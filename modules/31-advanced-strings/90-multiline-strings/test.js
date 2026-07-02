// @ts-check

import { expect, test, vi } from 'vitest';

test('multiline strings', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe(
    'Dear customer!\n\nYour order has been accepted.\nExpected delivery: 3 business days.',
  );
});
