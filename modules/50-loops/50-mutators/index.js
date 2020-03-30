// BEGIN
const makeItFunny = (str, n = 1) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const current = str[i];
    if ((i + 1) % n === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
      result = `${result}${current}`;
    }
    i += 1;
  }

  return result;
};
// END

export default makeItFunny;
