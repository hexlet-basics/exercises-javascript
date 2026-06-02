// @ts-check

import { expect, test } from 'vitest';
import mirror from './index.js';

test('mirror', () => {
  expect(mirror('hello')).toBe('OLLEH');
  expect(mirror('Hexlet')).toBe('TELXEH');
});
