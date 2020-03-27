// BEGIN
const isArgumentsForSubstrCorrect = (str, index, length) => {
  if (index < 0) {
    return false;
  }
  if (length < 0) {
    return false;
  }
  if (index > str.length - 1) {
    return false;
  }
  if (index + length > str.length) {
    return false;
  }

  return true;
};
// END

export default isArgumentsForSubstrCorrect;
