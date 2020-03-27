// BEGIN
const getSentenceTone = (sentence) => {
  if (sentence.toUpperCase() === sentence) {
    return 'scream';
  }
  return 'normal';
};
// END

export default getSentenceTone;
