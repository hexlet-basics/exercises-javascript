// BEGIN
const doesContain = (str, char) => {
  let index = 0;
  while (index < str.length) {
    if (str[index] === char) {
      return true;
    }

    index += 1;
  }

  return false;
};
// END

export default doesContain;
