// BEGIN
const compress = (str) => {
  if (str === '') {
    return '';
  }

  let result = '';
  let count = 1;

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      count += 1;
    } else {
      result += str[i - 1];
      if (count > 1) {
        result += count;
      }
      count = 1;
    }
  }

  result += str[str.length - 1];
  if (count > 1) {
    result += count;
  }

  return result;
};
// END

export default compress;
