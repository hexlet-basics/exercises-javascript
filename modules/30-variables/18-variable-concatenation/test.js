// @ts-check

import { expect, test, vi } from 'vitest';

test('variable concatenation', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe(
    'Hello, Anna!\nThank you for your order.\nExpected delivery date — 3 business days.',
  );
});
