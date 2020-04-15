import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('/', 'hexlet.io')).toBe('https://hexlet.io/');
  expect(f('', 'hexlet.io')).toBe('https://hexlet.io/');
  expect(f('/pages/about', 'hexlet.io')).toBe('https://hexlet.io/pages/about');
  expect(f('pages/about', 'hexlet.io')).toBe('https://hexlet.io/pages/about');
});
