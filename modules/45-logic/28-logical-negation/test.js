const assert = require('assert');
const isNotLannisterSoldier = require(__dirname);

assert(isNotLannisterSoldier('blue', null) === true);
assert(isNotLannisterSoldier('red', 'man') === true);
assert(isNotLannisterSoldier('red', 'lion') === false);
assert(isNotLannisterSoldier('blue', 'lion') === false);
assert(isNotLannisterSoldier('red', null) === false);
