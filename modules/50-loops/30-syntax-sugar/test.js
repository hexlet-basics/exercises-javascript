import { test, expect } from '@jest/globals';
import f from './index.js';

test('test', () => {
  const text = 'If I look back I am lost';
  expect(f(text, 'I')).toEqual('f  look back  am lost');
  expect(f('zz zorro', 'z')).toEqual(' orro');
});
