// BEGIN
const getHiddenCard = (cardNumber, starsCount = 4) => {
  const visibleDigitsLine = cardNumber.substring(12);
  return '*'.repeat(starsCount) + visibleDigitsLine;
};
// END

export default getHiddenCard;
