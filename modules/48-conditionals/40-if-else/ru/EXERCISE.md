Напишите функцию `normalizeUrl(url)`, которая принимает строку с адресом сайта и возвращает URL с протоколом `https://`.

Если строка уже начинается с `https://` — вернуть как есть. Если не начинается — добавить `https://` в начало.

```javascript
normalizeUrl('https://hexlet.io'); // => 'https://hexlet.io'
normalizeUrl('hexlet.io');         // => 'https://hexlet.io'
```
