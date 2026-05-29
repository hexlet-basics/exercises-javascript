// @ts-check

import { expect, test, vi } from 'vitest';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  await import('./index.js');

  const firstArg = consoleLogSpy.mock.calls.join('\n');

  expect(firstArg).toBe(
    'Уважаемый клиент!\n\nВаш заказ принят в обработку.\nОжидаемая дата доставки — 3 рабочих дня.',
  );
});
