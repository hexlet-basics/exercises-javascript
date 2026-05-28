Переменные можно использовать в конкатенации так же, как и обычные строки.

```javascript
const firstName = 'Kings';
const lastName = 'road';
console.log(firstName + lastName); // => Kingsroad
```

## Пример с формированием текста

Переменные особенно полезны, когда из нескольких частей нужно собрать готовый текст.

```javascript
const greeting = 'Здравствуйте';
const firstName = 'Анна';

console.log(greeting + ', ' + firstName + '!');
// => Здравствуйте, Анна!
```

Такой подход позволяет легко менять имя или форму обращения, не трогая остальной код.
