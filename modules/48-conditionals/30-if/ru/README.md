Иногда нужно выполнить код только при определённом условии. Для этого используется оператор `if`.

```javascript
function checkAge(age) {
  if (age >= 18) {
    console.log('Вход разрешён');
  }
}

checkAge(20); // => Вход разрешён
checkAge(15); // (ничего не выводит)
```

## Синтаксис

```javascript
if (условие) {
  // блок выполняется, если условие true
}
```

Условие — это любое выражение, которое приводится к `true` или `false`.

## Если условие ложно

Если условие `false`, блок `if` пропускается. Код после блока выполняется всегда.

```javascript
function guessNumber(guess) {
  if (guess === 42) {
    return 'You win!';
  }
  return 'Try again!';
}

console.log(guessNumber(42)); // => You win!
console.log(guessNumber(7));  // => Try again!
```
