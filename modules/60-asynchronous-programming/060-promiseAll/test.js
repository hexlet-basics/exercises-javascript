import { describe, it, expect } from 'vitest';
import f from './index.js';

describe('downloadAll', () => {
  it('downloads all files in correct order', () => {
    const files = ['file1.txt', 'file2.txt', 'file3.txt'];

    return f(files).then((result) => {
      expect(result).toEqual([
        'file1.txt loaded',
        'file2.txt loaded',
        'file3.txt loaded',
      ]);
    });
  });

  it('works with empty array', () => {
    return f([]).then((result) => {
      expect(result).toEqual([]);
    });
  });
});
