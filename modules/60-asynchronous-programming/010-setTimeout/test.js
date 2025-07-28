import { expect, test, vi} from 'vitest';
import f from './index.js';

test('delay occurred', () => {
  vi.useFakeTimers();

  const callback = vi.fn();

  f(100, callback);

  expect(callback).not.toHaveBeenCalled();

  vi.advanceTimersByTime(99);
  expect(callback).not.toHaveBeenCalled();

  vi.advanceTimersByTime(1);
  expect(callback).toHaveBeenCalledTimes(1);

  vi.useRealTimers();
});