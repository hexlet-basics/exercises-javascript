const { test, expect } = require('tests');

test((f) => {
  const expected1 = 'Tywin Lannister';
  expect(f('Cersei Lannister')).toEqual(expected1);
});
