import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  const expected1 = 'Tywin Lannister';
  expect(f('Cersei Lannister')).toEqual(expected1);
});
