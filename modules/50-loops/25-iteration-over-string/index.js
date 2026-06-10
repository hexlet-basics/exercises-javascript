/* eslint operator-assignment: 0 */
// BEGIN
const maskCardNumber = (cardNumber) => {
  let result = '';
  let i = 0;
  const visiblePartStart = cardNumber.length - 4;
  while (i < cardNumber.length) {
    if (i < visiblePartStart) {
      // biome-ignore lint/style/useTemplate: учебный пример до урока 30-syntax-sugar
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
