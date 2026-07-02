// @ts-nocheck -- tsconfig has no Node.js types (types: []), and the test reads the source via node:fs

import { readFileSync } from 'node:fs';
import { expect, test } from 'vitest';
import f from './index.js';

test('type annotations', () => {
  const source = readFileSync(new URL('./index.js', import.meta.url), 'utf8');
  const paramAnnotations = source.match(/@param\s*\{/g) ?? [];
  expect(
    paramAnnotations.length,
    'Add JSDoc @param annotations for both parameters',
  ).toBeGreaterThanOrEqual(2);
  expect(
    source,
    'Add a JSDoc @returns annotation for the return value',
  ).toMatch(/@returns\s*\{/);

  expect(f('javascript', 1)).toBe('javascript');
  expect(f('javascript', 3)).toBe('javascriptjavascriptjavascript');
  expect(f('java', 0)).toBe('');
});
