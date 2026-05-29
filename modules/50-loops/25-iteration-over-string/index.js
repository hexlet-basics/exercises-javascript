// BEGIN
const maskCardNumber = (cardNumber) => {
  let result = '';
  let i = 0;
  const visiblePartStart = cardNumber.length - 4;
  while (i < cardNumber.length) {
    if (i < visiblePartStart) {
      result += '*';
    } else {
      result += cardNumber[i];
    }
    i += 1;
  }

  return result;
};
// END

export default maskCardNumber;
