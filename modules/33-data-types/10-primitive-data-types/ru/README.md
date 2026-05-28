Все значения в программировании имеют **тип**. Тип определяет, какие операции можно выполнять с данными.

## Примитивные типы в JavaScript

JavaScript имеет следующие примитивные типы:

| Тип | Примеры | Назначение |
|-----|---------|------------|
| `number` | `42`, `3.14`, `-7` | Числа (целые и дробные) |
| `string` | `'hello'`, `"world"` | Текст |
| `boolean` | `true`, `false` | Логические значения |
| `null` | `null` | Намеренное отсутствие значения |
| `undefined` | `undefined` | Неинициализированная переменная |

```javascript
const age = 25;            // number
const name = 'Alice';      // string
const isActive = true;     // boolean
const nothing = null;      // null
let unset;                 // undefined
```

## Зачем нужны типы?

Тип влияет на поведение операций. Например, `+` для чисел — это сложение, а для строк — конкатенация:

```javascript
console.log(1 + 2);       // => 3
console.log('1' + '2');   // => '12'
```

## Как узнать тип значения

Оператор `typeof` возвращает тип в виде строки:

```javascript
console.log(typeof 42);        // => 'number'
console.log(typeof 'hello');   // => 'string'
console.log(typeof true);      // => 'boolean'
console.log(typeof undefined); // => 'undefined'
console.log(typeof null);      // => 'object'  (историческая ошибка JS)
```
