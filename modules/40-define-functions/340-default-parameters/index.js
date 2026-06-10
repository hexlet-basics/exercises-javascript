// BEGIN
function getHiddenCard(cardNumber, starsCount = 4) {
  return '*'.repeat(starsCount) + cardNumber.slice(-4);
}
// END

export default getHiddenCard;
