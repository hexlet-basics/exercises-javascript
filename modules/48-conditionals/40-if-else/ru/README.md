
Напишем функцию `getTypeOfSentence()`, которая анализирует текст и возвращает описание его тона: для обычных предложений – *General sentence*, для вопросительных – *Question sentence*.

```javascript
  getTypeOfSentence('Hodor');  // General sentence
  getTypeOfSentence('Hodor?'); // Question sentence
```

Реализация функции:

```javascript
const getTypeOfSentence = (sentence) => {
  // Объявляем переменную, в которую запишем тип предложения
  let sentenceType;
  // Предикат, проверяющий окончание текста
  // Если он оканчивается на символ '?', то вернётся true,
  // иначе false
  if (sentence.endsWith('?')) {
    // Если условие выше сработало,
    // то это вопросительное предложение.
    // Присваиваем sentenceType соответствующее значение.
    sentenceType = 'Question';
  } else {
    // Во всех остальных случаях предложение — обычное
    sentenceType = 'General';
  }

  // С помощью интерполяции формируем строку
  return `${sentenceType} sentence`;
};
```

Мы добавили ключевое слово `else` и новый блок с фигурными скобками. Этот блок выполнится, только если условие в `if` — ложь.

```text
      ┌───────────┐
      │ условие?  │
      └─────┬─────┘
  true │         │ false
      ↓         ↓
┌──────────┐ ┌──────────┐
│ тело if  │ │ тело else│
└──────────┘ └──────────┘
```

## Вложенные условия

В блок `else` (как и в блок `if`) можно вкладывать другие условия. Благодаря фигурным скобкам вложенность всегда видна явно:

```javascript
const number = 10;

if (number > 10) {
  console.log('Number is greater than 10');
} else {
  if (number === 10) {
    console.log('Number is exactly 10');
  } else {
    console.log('Number is less than 10');
  }
}
// => Number is exactly 10
```

Здесь сначала проверяется `number > 10`. Условие ложно, поэтому управление переходит в `else`, где проверяется вложенное условие `number === 10`. Оно истинно — печатается `Number is exactly 10`.

Существует два способа оформления конструкции *if-else*. С помощью отрицания можно изменить порядок блоков:

```javascript
const getTypeOfSentence = (sentence) => {
  let sentenceType;
  // Добавилось отрицание
  // Содержимое else переехало в if и наоборот
  if (!sentence.endsWith('?')) {
    sentenceType = 'General';
  } else {
    sentenceType = 'Question';
  }

  return `${sentenceType} sentence`;
};
```

Какой способ предпочтительнее? Человеческому мозгу проще мыслить прямолинейно, а не через отрицание. Старайтесь выбирать проверку, которая не содержит отрицаний, и подстраивайте содержимое блоков под неё.
