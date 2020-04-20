// BEGIN
const isLannisterSoldier = (color, shield) => {
  const result = (color === 'red' && shield === null) || shield === 'lion';
  return result;
};
// END

export default isLannisterSoldier;
