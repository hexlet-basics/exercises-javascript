
В этом уроке вам нужно будет реализовать две функции `isPalindrome()` и `isNotPalindrome()`

1. Функция `isPalindrome()` определяет, является ли слово палиндромом или нет. Палиндром это слово, которое читается одинаково в обоих направлениях.

    ```javascript
    isPalindrome('шалаш'); // true
    isPalindrome('ага'); // true
    isPalindrome('хекслет'); // false

    // Слова в функцию могут быть переданы в любом регистре
    // Поэтому сначала нужно привести слово в нижний регистр word.toLowerCase()
    isPalindrome('Ага'); // true
    ```

    Для определения палиндрома необходимо перевернуть строку и сравнить ее с исходной. Для этого воспользуйтесь функцией `reverse()`

    ```javascript
    reverse('мама'); // амам
    ```

2. Функция `isNotPalindrome()` проверяет что слово НЕ является палиндромом:

    ```javascript
    isNotPalindrome('шалаш'); // false
    isNotPalindrome('ага'); // false
    isNotPalindrome('хекслет'); // true
    ```

    Для этого, вызовите функцию `isPalindrome()` внутри `isNotPalindrome()` и примените отрицание.
