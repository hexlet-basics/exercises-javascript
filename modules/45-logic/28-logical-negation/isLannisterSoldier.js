const isLannisterSoldier = (color, shield) => {
  return (color === 'red' && shield === null) || (shield === 'lion');
}

module.exports = isLannisterSoldier;
