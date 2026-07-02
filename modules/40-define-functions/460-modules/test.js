// @ts-check

import { expect, test } from 'vitest';
import mirror from './index.js';

test('modules', () => {
  expect(mirror('hello')).toBe('OLLEH');
  expect(mirror('Hexlet')).toBe('TELXEH');
});
