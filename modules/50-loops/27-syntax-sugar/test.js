const { test, expect } = require('tests');

test((f) => {
  const text = 'If I look back I am lost';
  expect(f(text, 'I')).toEqual(3);
  expect(f(text, 'z')).toEqual(0);
  expect(f(text, 'o')).toEqual(3);
});
