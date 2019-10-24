// BEGIN
const getHiddenCard = (cardNumber, starsCount = 4) => {
  const last4Digits = cardNumber.toString().slice(-4);
  return last4Digits.padStart(starsCount + last4Digits.length, '*');
};
// END

module.exports = getHiddenCard;
