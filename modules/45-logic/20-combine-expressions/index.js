// BEGIN
const hasTargaryenReference = (string) => {
  const prefix = string.substring(0, 9);
  return prefix === 'Targaryen';
};
// END

export default hasTargaryenReference;
