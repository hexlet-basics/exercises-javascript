// BEGIN
const encrypt = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || '';
    result = `${result}${nextSymbol}${str[i]}`;
  }

  return result;
};
// END

export default encrypt;
