// @ts-check

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { expect, test } from 'vitest';

test('comments', () => {
  const code = readFileSync(fileURLToPath(new URL('./index.js', import.meta.url)), 'utf-8');

  // В коде должен быть хотя бы один строчный TODO-комментарий
  expect(code).toMatch(/\/\/\s*TODO/i);
});
