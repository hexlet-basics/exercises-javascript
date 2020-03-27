import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('Tally')).toBe('friend');
  expect(f('Karstark')).toBe('friend');
  expect(f('Lannister')).toBe('enemy');
  expect(f('Martell')).toBe('neutral');
  expect(f('undefined')).toBe('neutral');
});
