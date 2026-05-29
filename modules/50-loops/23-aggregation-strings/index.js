// BEGIN
const sanitizePhoneNumber = (phone) => {
  let result = '';
  let i = 0;
  while (i < phone.length) {
    const char = phone[i];
    if (!' ()-'.includes(char)) {
      result += char;
    }
    i += 1;
  }

  return result;
};
// END

export default sanitizePhoneNumber;
