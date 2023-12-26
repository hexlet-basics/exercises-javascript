
En esta lección, deberás implementar dos funciones: `isPalindrome()` e `isNotPalindrome()`

1. La función `isPalindrome()` determina si una palabra es un palíndromo o no. Un palíndromo es una palabra que se lee igual en ambos sentidos.

    ```javascript
    isPalindrome('ala'); // true
    isPalindrome('radar'); // true
    isPalindrome('hexlet'); // false

    // Las palabras pueden ser pasadas a la función en cualquier caso
    // Por lo tanto, primero debes convertir la palabra a minúsculas word.toLowerCase()
    isPalindrome('ala'); // true
    ```

    Para determinar si una palabra es un palíndromo, debes invertir la cadena y compararla con la original. Para ello, utiliza la función `reverse()`

    ```javascript
    reverse('mama'); // mama
    ```

2. La función `isNotPalindrome()` verifica que una palabra NO sea un palíndromo:

    ```javascript
    isNotPalindrome('radar'); // false
    isNotPalindrome('ala'); // false
    isNotPalindrome('hexlet'); // true
    ```

    Para ello, llama a la función `isPalindrome()` dentro de `isNotPalindrome()` y aplica la negación.
