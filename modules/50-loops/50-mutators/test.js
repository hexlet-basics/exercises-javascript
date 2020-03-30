import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  const text = 'I never look back';
  expect(f(text, 3)).toEqual('I NevEr LooK bAck');
  expect(f('hello', 2)).toEqual('hElLo');
});
