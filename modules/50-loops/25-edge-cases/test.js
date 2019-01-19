const assert = require('assert');
const f = require('.');
const str = 'Sansa Stark';

assert(!f(str, -1, 100));
assert(!f(str, 10, 10));
assert(!f(str, 11, 1));
assert(f(str, 3, 3));
