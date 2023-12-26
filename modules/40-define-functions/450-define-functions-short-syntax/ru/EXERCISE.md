
Реализуйте функцию `capitalize()`, которая принимает непустую строку и приводит первую букву первого слова к верхнему регистру:

```javascript
const name = 'arya';
console.log(capitalize(name)); // => Arya
```

Чтобы получить подстроку (или символ) из строки, используйте метод [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice):

```javascript
'welcome'.slice(2, 5); // lco
```

Для приведения строки к верхнему регистру используйте метод [toUpperCase()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

```javascript
'welcome'.toUpperCase(); // WELCOME
```
