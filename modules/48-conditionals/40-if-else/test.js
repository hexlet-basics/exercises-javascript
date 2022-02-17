import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('yandex.ru')).toBe('https://yandex.ru');
  expect(f('https://yandex.ru')).toBe('https://yandex.ru');
});
