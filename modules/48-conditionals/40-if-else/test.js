import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  expect(f('yandex.ru')).toBe('https://yandex.ru');
  expect(f('https://yandex.ru')).toBe('https://yandex.ru');
});
