const assert = require('assert');
const t = require('.');

const logs = [];
const oldLog = console.log;
console.log = (...args) => {
  oldLog(...args);
  logs.push(args);
};
t('hi');
const expected = 'JAIME: hi';
assert.strictEqual(logs.join('').trim(), expected);
