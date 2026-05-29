Вызов функции — это **выражение**. Это значит, что результат вызова функции можно сразу использовать в другом выражении.

```javascript
// Результат Math.abs() сразу используется в сложении
console.log(Math.abs(-5) + Math.abs(-3)); // => 8
```

## Вложенные вызовы

Функцию можно передавать как аргумент другой функции:

```javascript
// Math.round(Math.random() * 10) — случайное число от 0 до 10
console.log(Math.round(Math.random() * 10));
```

Порядок вычислений: сначала вычисляется самое внутреннее выражение, затем — внешние.

## Практический пример

Получить первый и последний символ строки:

```javascript
const text = 'Hexlet';

const first = text[0];
const last = text[text.length - 1];
console.log(`First: ${first}`); // => First: H
console.log(`Last: ${last}`);   // => Last: t
```
