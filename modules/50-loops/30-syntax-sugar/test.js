import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  const text = 'If I look back I am lost';
  expect(f(text, 'I')).toEqual('f  look back  am lost');
  expect(f('zz zorro', 'z')).toEqual(' orro');
});
