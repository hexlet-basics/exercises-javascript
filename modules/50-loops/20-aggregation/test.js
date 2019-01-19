const assert = require('assert');
const f = require('.');

assert.equal(f('got', 3), 'got');
assert.equal(f('got', 2), 'go');
assert.equal(f('got', 1), 'g');
