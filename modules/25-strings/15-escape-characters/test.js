// @ts-check

import { expect, test, vi } from 'vitest';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe(
    'Для разделения строк используйте "\\n"\nПример: console.log("строка1\\nстрока2")',
  );
});
