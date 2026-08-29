Escribe la función `getHiddenCard(cardNumber, starsCount = 4)`, que recibe el número de una tarjeta (una cadena) y devuelve el número oculto: los asteriscos más los últimos 4 dígitos.

```javascript
getHiddenCard("1234567890123456"); // => '****3456'
getHiddenCard("1234567890123456", 2); // => '**3456'
```

Usa `'*'.repeat(starsCount)` y `.slice(-4)`.
