Строка в JavaScript — это последовательность символов. К каждому символу можно обратиться по его **индексу** — порядковому номеру, начиная с нуля.

```javascript
const language = 'JavaScript';

console.log(language[0]); // => J
console.log(language[4]); // => S
console.log(language[9]); // => t
```

Первый символ имеет индекс `0`, второй — `1`, и так далее.

## Отрицательные индексы

В JavaScript нет отрицательных индексов (в отличие от Python). Чтобы получить последний символ, нужно вычислить индекс явно:

```javascript
const word = 'hello';
console.log(word[word.length - 1]); // => o
```

## Что происходит при выходе за границы

Если индекс больше или равен длине строки, вернётся `undefined`:

```javascript
console.log('hi'[10]); // => undefined
```

## Управляющие символы тоже считаются

Символ `\n` (перевод строки) — это один символ, даже если в коде он выглядит как два.

```javascript
const text = 'Na\nharis';
// N=0, a=1, \n=2, h=3, a=4, r=5, i=6, s=7
console.log(text[7]); // => s
```
