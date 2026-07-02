import { expect, test } from 'vitest';
import f from './index.js';

test('for', () => {
  expect(f(3)).toEqual('1 2 Fizz');
  expect(f(5)).toEqual('1 2 Fizz 4 Buzz');
  expect(f(15)).toEqual(
    '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz',
  );
});
