const { test, expect } = require('tests');

test((f) => {
  expect(f('yandex.ru')).toBe('https://yandex.ru');
  expect(f('http://yandex.ru')).toBe('https://yandex.ru');
});
