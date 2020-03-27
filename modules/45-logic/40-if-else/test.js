import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('yandex.ru')).toBe('https://yandex.ru');
  expect(f('http://yandex.ru')).toBe('https://yandex.ru');
});
