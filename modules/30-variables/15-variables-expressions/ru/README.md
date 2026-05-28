Переменные делают код понятнее: промежуточные результаты получают имена.

Сравните два варианта одного вычисления.

```javascript
console.log(50 * 1.25 * 6.91);
```

vs

```javascript
const eurosCount = 50;
const dollarsPerEuro = 1.25;
const yuansPerDollar = 6.91;

const dollarsCount = eurosCount * dollarsPerEuro;
const yuansCount = dollarsCount * yuansPerDollar;
console.log(yuansCount);
```

Во втором варианте понятно, что происходит: конвертация евро в доллары, потом в юани.

## Выражения

Любое вычислимое значение — это выражение. Переменной можно присвоить выражение.

```javascript
const sum = 3 + 4;         // => 7
const text = 'Hello' + '!'; // => 'Hello!'
const doubled = sum * 2;   // => 14
```

JavaScript вычисляет выражение справа, а результат сохраняет в переменную слева.

## Порядок определений

Переменную нужно определить **до** её использования.

```javascript
const fullPrice = price * 2; // ReferenceError: price is not defined
const price = 100;
```

Правильный порядок:

```javascript
const price = 100;
const fullPrice = price * 2;
```
