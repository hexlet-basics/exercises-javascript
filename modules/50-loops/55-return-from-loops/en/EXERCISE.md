Implement the function `hasAtSymbol()`, which checks whether an email contains the `@` symbol.

The function should return `true` as soon as it finds `@`. If the loop reaches the end of the string and the symbol is not found, return `false`.

```javascript
hasAtSymbol('support@example.com'); // => true
hasAtSymbol('wrong-email');         // => false
hasAtSymbol('@admin');              // => true
```

Use a loop with an early `return`.
