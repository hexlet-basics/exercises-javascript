// @ts-nocheck — в tsconfig нет типов Node.js (types: []), а тест читает исходник через node:fs

import { readFileSync } from 'node:fs';
import { expect, test } from 'vitest';
import f from './index.js';

test('test', () => {
  const source = readFileSync(new URL('./index.js', import.meta.url), 'utf8');
  const paramAnnotations = source.match(/@param\s*\{/g) ?? [];
  expect(
    paramAnnotations.length,
    'Укажите JSDoc-аннотации @param для обоих параметров',
  ).toBeGreaterThanOrEqual(2);
  expect(
    source,
    'Укажите JSDoc-аннотацию @returns для возвращаемого значения',
  ).toMatch(/@returns\s*\{/);

  expect(f('javascript', 1)).toBe('javascript');
  expect(f('javascript', 3)).toBe('javascriptjavascriptjavascript');
  expect(f('java', 0)).toBe('');
});
