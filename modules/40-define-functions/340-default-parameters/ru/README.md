Функции могут принимать параметры. Иногда удобно задать значение сразу в определении функции, чтобы не указывать его при каждом вызове. Такое значение называется **значением по умолчанию**.

Если аргумент не передан, используется это значение. Если аргумент указан, он заменяет умолчание.

```javascript
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}

greet('Alice'); // => Hello, Alice!
greet();        // => Hello, World!  (использовано значение по умолчанию)
```

## Пример: повторение текста

Сделаем функцию, которая повторяет строку несколько раз. По умолчанию пусть будет один раз, но при желании можно указать другое количество. Для повторения строки в JavaScript есть метод `repeat()`:

```javascript
function repeat(text, times = 1) {
  return text.repeat(times);
}

console.log(repeat('Hi'));    // => Hi
console.log(repeat('Hi', 3)); // => HiHiHi
```

```text
function repeat(text, times = 1)   ← times имеет значение по умолчанию

repeat('go')      →  times = 1  (по умолчанию)
repeat('go', 5)   →  times = 5  (явно указано)
```

Необязательные параметры всегда указываются **в конце** списка. Поэтому сначала идёт обязательный параметр `text`, а уже после него — `times` со значением по умолчанию.

## Пример: склейка слов с разделителем

По умолчанию слова соединяются пробелом, но можно указать другой символ:

```javascript
function joinWords(word1, word2, separator = ' ') {
  return word1 + separator + word2;
}

console.log(joinWords('King', 'Road'));         // => King Road
console.log(joinWords('Dragon', 'stone', '-')); // => Dragon-stone
```

## Пример: несколько параметров по умолчанию

Функция может содержать более одного параметра со значением по умолчанию. Сделаем функцию, которая строит строку-разделитель. По умолчанию символ — дефис, а длина равна 10:

```javascript
function makeLine(symbol = '-', length = 10) {
  return symbol.repeat(length);
}

console.log(makeLine());        // => ----------
console.log(makeLine('*'));     // => **********
console.log(makeLine('*', 5));  // => *****
console.log(makeLine('#', 3));  // => ###
```

## Пример: скрытие номера карты

```javascript
function getHiddenCard(cardNumber, starsCount = 4) {
  return '*'.repeat(starsCount) + cardNumber.slice(-4);
}

console.log(getHiddenCard('1234567890123456'));    // => ****3456
console.log(getHiddenCard('1234567890123456', 2)); // => **3456
```

Параметр `starsCount` по умолчанию равен `4`, но можно передать другое значение.
