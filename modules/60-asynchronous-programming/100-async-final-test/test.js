import { describe, it, expect, vi, afterEach } from 'vitest';
import * as api from './api.js';
import notifyAboutInactive from './index.js';

describe('notifyAboutInactive', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('successfully sends notification', async () => {
    vi.spyOn(api, 'getUser').mockResolvedValue({ id: 1, name: 'TestUser' });
    vi.spyOn(api, 'getEmail').mockResolvedValue('testuser@example.com');
    vi.spyOn(api, 'prepareMessage').mockResolvedValue('Hello, testuser@example.com');
    vi.spyOn(api, 'sendNotification').mockResolvedValue(true);

    const result = await notifyAboutInactive(1);
    expect(result).toBe('OK');
  });

  it('returns FAIL on error in getUser', async () => {
    vi.spyOn(api, 'getUser').mockRejectedValue(new Error('fail'));

    const result = await notifyAboutInactive(1);
    expect(result).toBe('FAIL');
  });

  it('returns FAIL on error in sendNotification', async () => {
    vi.spyOn(api, 'getUser').mockResolvedValue({ id: 1, name: 'TestUser' });
    vi.spyOn(api, 'getEmail').mockResolvedValue('testuser@example.com');
    vi.spyOn(api, 'prepareMessage').mockResolvedValue('Hello, testuser@example.com');
    vi.spyOn(api, 'sendNotification').mockRejectedValue(new Error('fail'));

    const result = await notifyAboutInactive(1);
    expect(result).toBe('FAIL');
  });
});