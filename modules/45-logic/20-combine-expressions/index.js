// BEGIN
const hasTargaryenReference = (string) => {
  const prefix = string.substr(0, 9);
  return prefix === 'Targaryen';
}
// END

module.exports = hasTargaryenReference;
