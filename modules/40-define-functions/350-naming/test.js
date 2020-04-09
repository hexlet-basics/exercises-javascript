import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  const card1 = '1234567812345678';
  const actual1 = f(card1);
  expect(actual1).toEqual('****5678');
  const actual2 = f(card1, 2);
  expect(actual2).toEqual('**5678');
  
  const card2 = 1234567812345678;
  const actual3 = f(card2);
  expect(actual3).toEqual('****5678');
});
