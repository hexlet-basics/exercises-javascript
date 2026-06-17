Implementa la función `getTrafficLightAction(color)`, que recibe un color de semáforo y devuelve lo que debe hacer el conductor:

- `'green'` → `'go'`
- `'yellow'` → `'slow down'`
- `'red'` → `'stop'`
- cualquier otro color → `'unknown'`

```javascript
getTrafficLightAction('green');  // => 'go'
getTrafficLightAction('red');    // => 'stop'
getTrafficLightAction('purple'); // => 'unknown'
```
