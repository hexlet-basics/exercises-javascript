const assert = require('assert');
const isNeutralSoldier = require(__dirname);

assert(isNeutralSoldier('yellow', 'black') === true);
assert(isNeutralSoldier('red', 'yellow') === false);
assert(isNeutralSoldier('red', 'red') === false);
assert(isNeutralSoldier('black', 'black') === true);
