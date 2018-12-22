const assert = require('power-assert');
const hasTargaryenReference = require(__dirname);

assert(hasTargaryenReference('') === false);
assert(hasTargaryenReference('Targari') === false);
assert(hasTargaryenReference('targaryen') === false);
assert(hasTargaryenReference('Targaryen') === true);
