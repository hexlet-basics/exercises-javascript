// Функция reverse() написана нами специально для наших упражнений
import { reverse } from '../../../src/hexlet/string.js';

// BEGIN
const isPalindrome = (word) => {
  const lowerWord = word.toLowerCase();
  return lowerWord === reverse(lowerWord);
};

const isNotPalindrome = (word) => !isPalindrome(word);
// END

export default isNotPalindrome;
