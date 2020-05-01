// BEGIN
const getSentenceTone = (sentence) => {
  if (sentence.toUpperCase() === sentence) {
    return 'scream';
  }
  return 'general';
};
// END

export default getSentenceTone;
