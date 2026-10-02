Реализуйте функцию `mirror()`. Она принимает строку, переворачивает её и переводит в верхний регистр, после чего возвращает результат.

Используйте функции `reverse()` и `toUpperCase()` из модуля `hexlet-basics/string`. Импорт нужно написать самостоятельно.

```javascript
mirror("hello"); // => 'OLLEH'
mirror("Hexlet"); // => 'TELXEH'
```

## Подсказка

- В начале файла импортируйте нужные функции: `import { reverse, toUpperCase } from 'hexlet-basics/string';`
- `reverse()` и `toUpperCase()` из модуля это функции, строка передаётся им аргументом, например `reverse('hexlet')`. Метода `reverse()` у строки нет, и вызов `text.reverse()` падает с ошибкой `text.reverse is not a function`
- Сначала переверните строку, затем переведите результат в верхний регистр
