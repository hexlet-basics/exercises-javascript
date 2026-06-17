// @ts-check

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { expect, test } from 'vitest';

test('comments', () => {
  const code = readFileSync(fileURLToPath(new URL('./index.js', import.meta.url)), 'utf-8');

  // The code must contain at least one single-line TODO comment
  expect(code).toMatch(/\/\/\s*TODO/i);
});
