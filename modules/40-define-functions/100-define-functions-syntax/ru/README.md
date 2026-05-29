Функции позволяют избежать повторения кода. Если одни и те же действия нужны в разных местах программы, их выносят в функцию.

## Объявление функции

```javascript
function sayHello() {
  console.log('Hello!');
}

// Вызов функции
sayHello(); // => Hello!
sayHello(); // => Hello! (можно вызвать сколько угодно раз)
```

Ключевое слово `function`, затем имя функции, скобки и тело в фигурных скобках.

## Функции с параметрами

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Alice'); // => Hello, Alice!
greet('Bob');   // => Hello, Bob!
```

Параметр `name` — это переменная, доступная внутри функции. При каждом вызове в неё подставляется переданный аргумент.

## Несколько параметров

```javascript
function add(a, b) {
  console.log(a + b);
}

add(3, 4); // => 7
```

## Стрелочные функции

В JavaScript есть сокращённая запись через стрелку `=>`:

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet('Alice'); // => Hello, Alice!
```

Обе формы равнозначны, но стрелочная функция записывается в переменную.
