Напишите функцию `isLeapYear(year)`, которая возвращает `true`, если год високосный.

Год является високосным, если:
- он делится на 4, **но не** на 100, **или**
- он делится на 400.

```javascript
isLeapYear(2000); // => true
isLeapYear(1900); // => false
isLeapYear(2024); // => true
isLeapYear(2023); // => false
```
