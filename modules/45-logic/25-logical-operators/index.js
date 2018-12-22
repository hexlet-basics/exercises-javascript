// BEGIN
const isLannisterSoldier = (color, shield) => {
  return (color === 'red' && shield === null) || (shield === 'lion');
}
// END

module.exports = isLannisterSoldier;
