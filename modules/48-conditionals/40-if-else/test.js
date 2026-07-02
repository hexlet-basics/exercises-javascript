import { expect, test } from 'vitest';
import f from './index.js';

test('if else', () => {
  expect(f('yandex.ru')).toBe('https://yandex.ru');
  expect(f('https://yandex.ru')).toBe('https://yandex.ru');
});
