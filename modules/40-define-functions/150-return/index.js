const truncate = (text, length) => {
  // BEGIN
  const result = `${text.slice(0, length)}...`;
  return result;
  // END
};

export default truncate;
