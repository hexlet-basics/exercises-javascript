import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  const expected1 = 'Tywin Lannister';
  const expected2 = 'Rhaella Targaryen';
  expect(f('Cersei Lannister')).toEqual(expected1);
  expect(f('Daenerys Targaryen', 'mother')).toEqual(expected2);
});
