Implementa la función `hasAtSymbol()`, que comprueba si un email contiene el símbolo `@`.

La función debe devolver `true` en cuanto encuentre `@`. Si el bucle llega al final de la cadena y el símbolo no se encuentra, devuelve `false`.

```javascript
hasAtSymbol('support@example.com'); // => true
hasAtSymbol('wrong-email');         // => false
hasAtSymbol('@admin');              // => true
```

Usa un bucle con un `return` temprano.
