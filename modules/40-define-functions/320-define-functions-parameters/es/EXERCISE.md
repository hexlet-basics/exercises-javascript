
Completa la función `truncate()`, que recorta una cadena pasada como parámetro hasta un número específico de caracteres, agrega puntos suspensivos al final y devuelve la cadena resultante. Esta lógica se utiliza a menudo en sitios web para mostrar texto largo de forma abreviada.

La función recibe dos parámetros:

1. La cadena que se debe recortar
2. El número de caracteres que se deben conservar

Aquí tienes un ejemplo de cómo debería funcionar la función que escribas:

```javascript
// Pasando el texto directamente
// Recortando el texto, dejando 2 caracteres
truncate('hexlet', 2); // he...

// A través de una variable
const text = 'it works!';
// Recortando el texto, dejando 4 caracteres
truncate(text, 4); // it w...
```
Debes implementar la función `truncate()` por tu cuenta, en JavaScript no existe una función así. Puedes implementar esta función de diferentes maneras, sólo te daremos una pista. Para resolverlo de esta manera, necesitarás extraer una subcadena de la cadena pasada como primer parámetro de la función. Utiliza el método [slice()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/slice) para hacerlo. Piensa, según la tarea, desde qué índice y hasta qué índice debes extraer la subcadena.

  ```javascript
  const word = 'welcome';
  // Puedes pasar los parámetros al método a través de variables
  const index = 3;
  palabra.slice(0, indice); // wel
  ```

Desde el punto de vista del sistema de evaluación, no importa qué método utilices para implementar la función `truncate()` internamente, lo importante es que cumpla con la tarea planteada.
