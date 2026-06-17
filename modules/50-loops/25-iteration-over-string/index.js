/* eslint operator-assignment: 0 */
// BEGIN
const maskCardNumber = (cardNumber) => {
  let result = '';
  let i = 0;
  const visiblePartStart = cardNumber.length - 4;
  while (i < cardNumber.length) {
    if (i < visiblePartStart) {
      // biome-ignore lint/style/useTemplate: teaching example before the 30-syntax-sugar lesson
      result = result + '*';
    } else {
      result = result + cardNumber[i];
    }
    i = i + 1;
  }

  return result;
};
// END

export default maskCardNumber;
