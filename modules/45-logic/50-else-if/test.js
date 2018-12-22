const assert = require('power-assert');
const whoIsThisHouseToStarks = require(__dirname);

assert(whoIsThisHouseToStarks('Tally') === 'friend');
assert(whoIsThisHouseToStarks('Karstark') === 'friend');
assert(whoIsThisHouseToStarks('Lannister') === 'enemy');
assert(whoIsThisHouseToStarks('Martell') === 'neutral');
assert(whoIsThisHouseToStarks('undefined') === 'neutral');
