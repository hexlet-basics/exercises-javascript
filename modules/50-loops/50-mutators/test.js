import { expect, test } from 'vitest';
import f from './index.js';

test('mutators', () => {
  const text = 'I never look back';
  expect(f(text, 3)).toEqual('I NevEr LooK bAck');
  expect(f('hello', 2)).toEqual('hElLo');
});
