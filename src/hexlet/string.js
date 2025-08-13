/**
 * @param {string} s
 */
function toUpperCase(s) {
  return s.toUpperCase();
}
/**
 * @param {string} s
 */
function toLowerCase(s) {
  return s.toLowerCase();
}
/**
 * @param {string} s
 */
function reverse(s) {
  return s.split('').reverse().join('');
}
/**
 * @param {string | any[]} s
 */
function length(s) {
  return s.length;
}

export { toUpperCase, toLowerCase, reverse, length };
