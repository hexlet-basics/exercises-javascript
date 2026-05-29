Реализуйте функцию `hasAtSymbol()`, которая проверяет, есть ли в email символ `@`.

Функция должна вернуть `true`, как только найдёт `@`. Если цикл дошёл до конца строки и символ не найден — вернуть `false`.

```javascript
hasAtSymbol('support@example.com'); // => true
hasAtSymbol('wrong-email');         // => false
hasAtSymbol('@admin');              // => true
```

Используйте цикл с ранним `return`.
