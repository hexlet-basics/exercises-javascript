Напишите две функции:

1. `isPalindrome(str)` — возвращает `true`, если строка является палиндромом (читается одинаково в обоих направлениях).
2. `isNotPalindrome(str)` — возвращает `true`, если строка **не** является палиндромом.

```javascript
isPalindrome("level"); // => true
isPalindrome("hello"); // => false
isNotPalindrome("level"); // => false
isNotPalindrome("hello"); // => true

// Строки в функции могут быть переданы в любом регистре
// Поэтому сначала приведите строку к нижнему регистру методом .toLowerCase()
isPalindrome("Wow"); // => true
isNotPalindrome("Wow"); // => false
```

Используйте метод `.split('')`, `.reverse()`, `.join('')` для разворота строки.
