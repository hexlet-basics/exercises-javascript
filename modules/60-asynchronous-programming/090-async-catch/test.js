import { describe, it, expect, vi } from 'vitest';
import * as api from './api.js'
import f from './index.js';

describe('postHotCitiesReport', () => {
  it('posts list of hot cities', async () => {
    const result = await f();
    expect(result).toMatch(/Successfully posted. Hot cities today:/);
    expect(result).toContain('Madrid');
    expect(result).toContain('Cairo');
    expect(result).toContain('Bangkok');
  });

  it('handles no hot cities', async () => {
    vi.spyOn(api, 'fetchCityWeatherList').mockResolvedValue([
      { city: 'Reykjavik', temp: 5 },
      { city: 'Oslo', temp: 10 },
    ]);

    const result = await f();
    expect(result).toContain('No hot cities');

    vi.restoreAllMocks();
  });

  it('handles fetch failure', async () => {
    vi.spyOn(api, 'fetchCityWeatherList').mockRejectedValue(new Error('Failed to load city weather list'));

    const result = await f();
    expect(result).toBe('Failed to load city weather list');

    vi.restoreAllMocks();
  });

  it('handles post failure', async () => {
    vi.spyOn(api, 'postToSocial').mockRejectedValue(new Error('Failed to post to social network'));

    const result = await f();
    expect(result).toBe('Failed to post to social network');

    vi.restoreAllMocks();
  });
});