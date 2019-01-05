const assert = require('assert');
const isLannisterSoldier = require(__dirname);

assert(isLannisterSoldier('blue', null) === false);
assert(isLannisterSoldier('red', 'man') === false);
assert(isLannisterSoldier('red', 'lion') === true);
assert(isLannisterSoldier('blue', 'lion') === true);
assert(isLannisterSoldier('red', null) === true);
