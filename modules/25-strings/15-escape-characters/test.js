// @ts-check

import { expect, test, vi } from 'vitest';

test('escape characters', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe(
    'Use "\\n" to separate lines\nExample: console.log("line1\\nline2")',
  );
});
