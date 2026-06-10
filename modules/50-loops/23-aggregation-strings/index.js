/* eslint operator-assignment: 0 */
// BEGIN
const sanitizePhoneNumber = (phone) => {
  let result = '';
  let i = 0;
  while (i < phone.length) {
    const char = phone[i];
    if (!' ()-'.includes(char)) {
      result = result + char;
    }
    i = i + 1;
  }

  return result;
};
// END

export default sanitizePhoneNumber;
