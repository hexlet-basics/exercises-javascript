Функция может не только выполнять действия, но и **возвращать результат** с помощью оператора `return`.

```javascript
function add(a, b) {
  return a + b;
}

const result = add(3, 4);
console.log(result); // => 7
```

## Разница между return и console.log

```javascript
// Эта функция выводит, но ничего не возвращает
function printSum(a, b) {
  console.log(a + b);
}

// Эта функция возвращает результат
function getSum(a, b) {
  return a + b;
}

// Вернувший результат можно использовать дальше
const sum = getSum(3, 4);
console.log(sum * 2); // => 14
```

## return завершает функцию

После `return` функция немедленно завершается. Код после `return` не выполняется.

```javascript
function getSign(n) {
  if (n > 0) return 'positive';
  if (n < 0) return 'negative';
  return 'zero';
}

console.log(getSign(5));  // => positive
console.log(getSign(-3)); // => negative
console.log(getSign(0));  // => zero
```
