const { test, expect } = require('tests');

test((f) => {
  const card1 = '1234567812345678';
  const actual1 = f(card1);
  expect(actual1).toEqual('****5678');
  const actual2 = f(card1, 2);
  expect(actual2).toEqual('**5678');
});
