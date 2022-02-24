// @ts-check

import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('текст', 3)).toBe('тек...');
  expect(f('и пошла вода', 5)).toBe('и пош...');
});
