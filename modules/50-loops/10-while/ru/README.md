Циклы позволяют выполнять одно и то же действие многократно.

## while

Цикл `while` выполняет тело, пока условие истинно.

```javascript
let i = 0;
while (i < 3) {
  console.log(i);
  i += 1;
}
// 0
// 1
// 2
```

## Счётчик и обратный отсчёт

```javascript
function printCountdown(seconds) {
  while (seconds > 0) {
    console.log(seconds);
    seconds -= 1;
  }
  console.log('Go!');
}

printCountdown(3);
// 3
// 2
// 1
// Go!
```

## Бесконечный цикл

Если условие никогда не станет `false`, цикл будет работать вечно. Всегда убедитесь, что переменная изменяется внутри тела цикла.

```javascript
// Бесконечный цикл — никогда не останавливается!
// let i = 0;
// while (i < 3) {
//   console.log(i);  // i не изменяется
// }
```
