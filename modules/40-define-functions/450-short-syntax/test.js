const assert = require('assert');
const f = require('.');

const expected = 'Daenerys';
const actual = f('daenerys');
console.log(actual);
assert.equal(actual, expected);
