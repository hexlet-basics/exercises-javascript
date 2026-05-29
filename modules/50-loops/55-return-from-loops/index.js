// BEGIN
const hasAtSymbol = (email) => {
  let i = 0;
  while (i < email.length) {
    if (email[i] === '@') {
      return true;
    }

    i += 1;
  }

  return false;
};
// END

export default hasAtSymbol;
