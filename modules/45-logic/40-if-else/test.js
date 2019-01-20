const { test, expect } = require('tests');

test((f) => {
  expect(f('yandex.ru')).toBe('https://yandex.ru');
  expect(f('https://yandex.ru')).toBe('https://yandex.ru');
});
