Когда нужно извлечь часть строки, используют метод `slice()`.

```javascript
const text = 'Hello, World!';

console.log(text.slice(7));     // => World!  (с индекса 7 до конца)
console.log(text.slice(7, 12)); // => World   (с 7 по 12, не включая 12)
console.log(text.slice(0, 5));  // => Hello
```

## Синтаксис

```text
str.slice(start)         — от start до конца
str.slice(start, end)    — от start до end (end не включается)
```

Индексация начинается с нуля — как при обращении к символам.

## Отрицательные индексы

`slice()` поддерживает отрицательные индексы: `-1` — последний символ, `-2` — предпоследний и так далее.

```javascript
const word = 'JavaScript';

console.log(word.slice(-6));    // => Script
console.log(word.slice(-6, -3)); // => Scr
```

## Практический пример

Убрать протокол из URL:

```javascript
const url = 'https://hexlet.io';
console.log(url.slice(8)); // => hexlet.io
```

`'https://'` занимает 8 символов, поэтому `slice(8)` возвращает всё, начиная с 9-го символа.
