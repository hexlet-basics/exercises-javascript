Параметры функции могут иметь **значения по умолчанию**. Если аргумент не передан — используется значение по умолчанию.

```javascript
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}

greet('Alice'); // => Hello, Alice!
greet();        // => Hello, World!  (использован default)
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

## Несколько параметров по умолчанию

Параметры с defaults должны идти **после** обязательных параметров.

```javascript
function repeat(str, times = 2, separator = ' ') {
  return Array(times).fill(str).join(separator);
}

console.log(repeat('ha'));        // => ha ha
console.log(repeat('ha', 3));     // => ha ha ha
console.log(repeat('ha', 3, '-')); // => ha-ha-ha
```
