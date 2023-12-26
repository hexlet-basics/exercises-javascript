
Implementa la función `getLetter()`, que extrae el carácter especificado (por su número de orden, no por su índice) de la cadena dada y lo devuelve. Si no existe dicho carácter, la función devuelve una cadena vacía.

Ejemplos de uso:

```javascript
const name = 'Hexlet';

// El acceso normal devuelve undefined
name[10]; // undefined

// El carácter 11 corresponde al índice 10
getLetter(name, 11); // ''

getLetter(name, 1); // 'H'
getLetter(name, 0); // ''
getLetter(name, 6); // 't'
```
