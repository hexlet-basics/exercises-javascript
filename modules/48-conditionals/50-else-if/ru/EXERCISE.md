Реализуйте функцию `getTrafficLightAction(color)`, которая принимает цвет светофора и возвращает, что нужно делать водителю:

- `'green'` → `'go'`
- `'yellow'` → `'slow down'`
- `'red'` → `'stop'`
- любой другой цвет → `'unknown'`

```javascript
getTrafficLightAction('green');  // => 'go'
getTrafficLightAction('red');    // => 'stop'
getTrafficLightAction('purple'); // => 'unknown'
```
