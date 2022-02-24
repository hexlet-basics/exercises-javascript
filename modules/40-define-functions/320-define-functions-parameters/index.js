// BEGIN
const truncate = (text, length) => {
  const result = `${text.slice(0, length)}...`;
  return result;
};
// END

export default truncate;
