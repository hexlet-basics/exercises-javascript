import { reverse } from 'hexlet-basics/string';

// BEGIN
const isPalindrome = (word) => {
  const lowerWord = word.toLowerCase();
  return lowerWord === reverse(lowerWord);
};

const isNotPalindrome = (word) => !isPalindrome(word);
// END

export default isNotPalindrome;
