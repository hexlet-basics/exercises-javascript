
Посмотрите на определение функции, которая возвращает модуль переданного числа:

```javascript
const abs = (number) => {
  if (number >= 0) {
    return number;
  }

  return -number;
};

abs(10); // 10
abs(-10); // 10
```

Можно ли записать её лаконичнее? Что-то вроде `return <ответ в зависимости от условия>`? Для этого справа от return должно быть выражение, но `if` — это инструкция, а не выражение.

В JavaScript существует конструкция, которая по своему действию аналогична конструкции *if-else*, но при этом является выражением. Она называется **тернарный оператор**.

Тернарный оператор — единственный в своем роде оператор, требующий три операнда:

```javascript
const abs = (number) => {
  return number >= 0 ? number : -number;
};
```

Общий паттерн выглядит так: `<predicate> ? <expression on true> : <expression on false>`.

Сокращенный вариант функции `abs()`, выглядит так:

```javascript
const abs = (number) => (number >= 0 ? number : -number);
```

Обратите внимание на скобки вокруг тернарника. Они не обязательны, но линтер [настоятельно рекомендует](https://eslint.org/docs/rules/no-confusing-arrow) их ставить, во избежание неоднозначностей.

Давайте перепишем начальный вариант `getTypeOfSentence()` аналогично:

Было:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence.slice(-1);

  if (lastChar === '?') {
      return 'question';
  }

  return 'normal';
};
```

Стало:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence.slice(-1);

  return (lastChar === '?') ? 'question' : 'normal';
};

getTypeOfSentence('Hodor');  // normal
getTypeOfSentence('Hodor?'); // question
```

---

Если вы помните, в чём сила выражений, то вероятно уже догадались, что тернарный оператор можно вкладывать в тернарный оператор. **Не делайте этого :)** Такой код тяжело и читать, и отлаживать, это очень плохая практика.
