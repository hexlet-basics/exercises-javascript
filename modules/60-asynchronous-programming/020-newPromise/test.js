import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest';
import f from './index.js';

describe('waitPromise', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('resolves with correct value after delay', async () => {
    const promise = f(500);
    vi.advanceTimersByTime(500);

    await expect(promise).resolves.toBe('Done!');
  });

  it('rejects with correct error after delay', async () => {
    const promise = f(500, true);
    vi.advanceTimersByTime(500);

    await expect(promise).rejects.toBe('Failed!');
  });
});