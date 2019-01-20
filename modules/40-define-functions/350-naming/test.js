const { test, expect } = require('tests');

test((f) => {
  const expected1 = '01-01-2001';
  const actual1 = f(1, 1, 2001);
  expect(actual1).toEqual(expected1);
});
