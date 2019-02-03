const { test, expect } = require('tests');

test((f) => {
  const text = 'If I look back I am lost';
  expect(f(text, 'I')).toEqual('f  look back  am lost');
  expect(f(text, 'o')).toEqual('If I lk back I am lst');
});
