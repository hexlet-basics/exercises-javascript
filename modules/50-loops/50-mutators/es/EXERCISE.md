
Escriba una función `makeItFunny()` que reciba una cadena de texto y devuelva una copia de la cadena en la que cada elemento n-ésimo esté en mayúsculas. El valor de n se pasa como argumento a la función.

Para determinar cada elemento n-ésimo, se utilizará el operador de resto `%`. Piense en cómo se puede utilizar.

```javascript
const text = 'I never look back';
// Cada tercer elemento
makeItFunny(text, 3); // 'I NevEr LooK bAck'
```
