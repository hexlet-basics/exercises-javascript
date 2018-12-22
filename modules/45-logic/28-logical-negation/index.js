const isLannisterSoldier = require('./isLannisterSoldier');

// BEGIN
const isNotLannisterSoldier = (color, shield) => {
  return !isLannisterSoldier(color, shield);
}
// END

module.exports = isNotLannisterSoldier;
