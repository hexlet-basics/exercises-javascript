// Функция reverse() написана нами специально для наших упражнений
// Принцип ее работы можно изучить на hexlet.io
const reverse = (s) => s.split('').reverse().join('');

// BEGIN
const isPalindrome = (word) => {
  const lowerWord = word.toLowerCase();
  return lowerWord === reverse(lowerWord);
};

const isNotPalindrome = (word) => !isPalindrome(word);
// END

export default isNotPalindrome;
