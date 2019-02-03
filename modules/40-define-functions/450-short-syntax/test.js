const { test, expect } = require('tests');

test((f) => {
  const expected1 = 'Daenerys';
  const actual1 = f('daenerys');
  expect(f(actual1)).toEqual(expected1);
});
