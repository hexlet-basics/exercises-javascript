// BEGIN
const shouter = (str) => {
  let result = '';
  let counter;
  let counterLimit;

  if (str.length >= 0 && str.length < 5) {
    return str;
  }
  if (str.length === 5) {
    counter = 0;
    counterLimit = 10;

    while (counter !== counterLimit) {
      result = `${result}${str}`;
      counter += 1;
    }
  } else {
    counter = 0;
    counterLimit = 100;

    while (counter !== counterLimit) {
      result = `${result}${str}`;
      counter += 1;
    }
  }

  return result;
};
// END

export default shouter;
