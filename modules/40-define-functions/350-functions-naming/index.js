// BEGIN
const getHiddenCard = (cardNumber, starsCount = 4) => {
  const visibleDigits = cardNumber.slice(-4);
  return visibleDigits.padStart(starsCount + 4, '*');
};
// END

export default getHiddenCard;
