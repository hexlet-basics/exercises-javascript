const isLannisterSoldier = (color, shield) => (
  (color === 'red' && shield === null) || (shield === 'lion')
);

export default isLannisterSoldier;
