// BEGIN
const getEvenNumbersUpTo = (num) => {
  let counter = 1;
  let result = '';

  while (counter <= num) {
    if (counter % 2 === 0) {
      result = `${result}${counter},`;
    }

    counter += 1;
  }

  return result;
};
// END

export default getEvenNumbersUpTo;
