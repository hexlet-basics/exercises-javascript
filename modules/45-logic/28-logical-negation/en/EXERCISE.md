
1. Write a function, `isPalindrome()`, to check if a word is a palindrome. A palindrome is a word that reads the same backwards as it does forward.

    ```javascript
    isPalindrome('refer'); // true
    isPalindrome('level'); // true
    isPalindrome('hexlet'); // false

    // You can pass words to the function in any case
    // So first you have to make the word lower case: word.toLowerCase()
    isPalindrome('Madam'); // true
    ```

    To find a palindrome, you need to reverse the string and compare it to the initial one. To do this, use the `reverse()` function.

    ```javascript
    reverse('hexlet'); // 'telhex'
    ```

2. Write a function, `isNotPalindrome()`, to check if a word is NOT a palindrome:

    ```javascript
    isNotPalindrome('level'); // false
    isNotPalindrome('wow'); // false
    isNotPalindrome('hexlet'); // true
    ```

    All you need is to negate the `isPalindrome()` function call within the `isNotPalindrome()` function's body.
