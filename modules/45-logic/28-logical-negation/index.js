const isLannisterSoldier = require('./isLannisterSoldier');

// BEGIN
const isNotLannisterSoldier = (color, shield) => !isLannisterSoldier(color, shield);
// END

module.exports = isNotLannisterSoldier;
