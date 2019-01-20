const { test, expect } = require('tests');

test((f) => {
  expect(f('Daenerys Targaryen')).toBe(38);
});
