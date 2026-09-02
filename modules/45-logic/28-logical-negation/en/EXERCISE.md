Write two functions:

1. `isPalindrome(str)` — returns `true` if the string is a palindrome (reads the same in both directions).
2. `isNotPalindrome(str)` — returns `true` if the string is **not** a palindrome.

```javascript
isPalindrome("level"); // => true
isPalindrome("hello"); // => false
isNotPalindrome("level"); // => false
isNotPalindrome("hello"); // => true

// Strings can be passed to the functions in any case
// So first convert the string to lowercase with the .toLowerCase() method
isPalindrome("Wow"); // => true
isNotPalindrome("Wow"); // => false
```

Use the `.split('')`, `.reverse()`, `.join('')` methods to reverse the string.
