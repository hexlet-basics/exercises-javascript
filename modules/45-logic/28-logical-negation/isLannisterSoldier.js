const isLannisterSoldier = (color, shield) => (
  (color === 'red' && shield === null) || (shield === 'lion')
);

module.exports = isLannisterSoldier;
