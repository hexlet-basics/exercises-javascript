Напишите функцию `convertText(str)`, которая:

- возвращает строку в нижнем регистре, если `str` — это полностью заглавные буквы
- иначе возвращает строку в верхнем регистре

Используйте тернарный оператор.

```javascript
convertText('HELLO'); // => 'hello'
convertText('hello'); // => 'HELLO'
convertText('Hello'); // => 'HELLO'
```

Подсказка: `str.toUpperCase() === str` проверяет, все ли буквы заглавные.
