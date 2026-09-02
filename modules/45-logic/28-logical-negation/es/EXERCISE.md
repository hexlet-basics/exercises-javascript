Escribe dos funciones:

1. `isPalindrome(str)` — devuelve `true` si la cadena es un palíndromo (se lee igual en ambas direcciones).
2. `isNotPalindrome(str)` — devuelve `true` si la cadena **no** es un palíndromo.

```javascript
isPalindrome("level"); // => true
isPalindrome("hello"); // => false
isNotPalindrome("level"); // => false
isNotPalindrome("hello"); // => true

// Las cadenas pueden pasarse a las funciones en cualquier caso
// Por lo tanto, primero convierte la cadena a minúsculas con el método .toLowerCase()
isPalindrome("Wow"); // => true
isNotPalindrome("Wow"); // => false
```

Usa los métodos `.split('')`, `.reverse()`, `.join('')` para invertir la cadena.
