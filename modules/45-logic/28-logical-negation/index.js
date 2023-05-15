// We wrote the reverse() function solely for our exercises
// It uses some techniques that we haven't covered in our lessons yet
const reverse = (s) => s.split('').reverse().join('');

// BEGIN
const isPalindrome = (word) => {
  const lowerWord = word.toLowerCase();
  return lowerWord === reverse(lowerWord);
};

const isNotPalindrome = (word) => !isPalindrome(word);
// END

export default isNotPalindrome;
