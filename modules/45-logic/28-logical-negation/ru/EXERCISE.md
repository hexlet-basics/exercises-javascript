Напишите две функции:

1. `isPalindrome(str)` — возвращает `true`, если строка является палиндромом (читается одинаково в обоих направлениях).
2. `isNotPalindrome(str)` — возвращает `true`, если строка **не** является палиндромом.

Регистр букв не учитывается, поэтому строка `"Wow"` тоже палиндром.

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

Строку разворачивает функция `reverse()`, которая уже есть в файле. Например, `reverse("hello")` возвращает `"olleh"`.
