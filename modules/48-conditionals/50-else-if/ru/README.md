
Функция `getTypeOfSentence()` из предыдущего урока различает только вопросительные и обычные предложения. Давайте попробуем добавить поддержку восклицательных предложений:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  let sentenceType;

  if (lastChar === '!') {
    sentenceType = 'exclamation';
  } else {
    sentenceType = 'normal';
  }

  if (lastChar === '?') {
    sentenceType = 'question';
  }

  return `Sentence is ${sentenceType}`;
};

getTypeOfSentence('Who?'); // Sentence is question
getTypeOfSentence('No');   // Sentence is normal
getTypeOfSentence('No!');  // Sentence is exclamation
```

https://replit.com/@hexlet/js-basics-conditionals

Мы добавили ещё одну проверку ("exclamation" переводится «восклицание»). Технически функция работает, но с точки зрения семантики есть проблемы.

- Проверка на наличие вопросительного знака происходит в любом случае, даже если уже был обнаружен восклицательный знак.
- Ветка `else` описана именно для первого условия, но не для второго.

Правильнее будет воспользоваться ещё одной возможностью условной конструкции:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  let sentenceType;

  if (lastChar === '?') {
    sentenceType = 'question';
  } else if (lastChar === '!') {
    sentenceType = 'exclamation';
  } else {
    sentenceType = 'normal';
  }

  return `Sentence is ${sentenceType}`;
};

getTypeOfSentence('Who?'); // Sentence is question
getTypeOfSentence('No');   // Sentence is normal
getTypeOfSentence('No!');  // Sentence is exclamation
```

Теперь все условия выстроены в единую конструкцию. `else if` — это «если не выполнено предыдущее условие, но выполнено текущее». Получается такая схема:

- если последний символ это `?`, то `'question'`
- иначе, если последний символ это `!`, то `'exclamation'`
- иначе `'normal'`

Выполнится только один из блоков кода, относящихся ко всей конструкции `if`.
