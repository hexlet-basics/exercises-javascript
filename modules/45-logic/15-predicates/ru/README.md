
Вспомним функцию `isInfant()` из прошлого урока:

```javascript
const isInfant = (age) => age < 1;
console.log(isInfant(3));
```
<pre class='hexlet-basics-output'>false</pre>

https://replit.com/@hexlet/js-basics-logic-bool-type

Подобные функции называют предикатами. Функции-предикаты (или функции-вопросы) отвечают на какой-то вопрос и всегда (без исключений!) возвращают либо `true`, либо `false`.

Предикаты во всех языках принято именовать особым образом для простоты анализа. В JavaScript предикаты, как правило, начинаются с префикса `is`, `has` или `can`, но не ограничены этими словами. Примеры:

  * `isInfant()` — «младенец ли?»
  * `hasChildren()` — «есть ли дети?»
  * `isEmpty()` — «пустой ли?»
  * `hasErrors()` — «есть ли ошибки?»

Функция может считаться предикатом **только** если она возвращает boolean.

---

Давайте напишем ещё одну функцию-предикат. Она принимает строку и проверяет, является ли она словом `'Castle'`:

```javascript
const isCastle = (type) => type === 'Castle';

console.log(isCastle('Sea'));
```

<pre class='hexlet-basics-output'>false</pre>
