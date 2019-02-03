// BEGIN
const getSentenceTone = (sentence) => {
  if (sentence.toUpperCase() === sentence) {
    return 'scream';
  }
  return 'normal';
}
// END

module.exports = getSentenceTone;
