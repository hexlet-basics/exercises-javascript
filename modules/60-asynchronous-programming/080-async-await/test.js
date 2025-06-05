import { describe, it, expect } from 'vitest';
import f from './index.js';

describe('formatUserInfo', () => {
  it('returns formatted string for existing user', async () => {
    const result = await f(1);
    expect(result).toBe('Name: Bran, Score: 120');
  });

  it('returns formatted string for another user', async () => {
    const result = await f(2);
    expect(result).toBe('Name: Sansa, Score: 95');
  });

  it('throws error if user not found', async () => {
    await expect(f(3)).rejects.toThrow('User not found');
  });
});