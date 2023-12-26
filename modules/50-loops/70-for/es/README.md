
El bucle `while` es ideal para situaciones en las que no se conoce de antemano la cantidad de iteraciones, por ejemplo, al buscar un número primo. Cuando se conoce la cantidad de iteraciones, es preferible utilizar el bucle `for`.

Veamos la implementación de invertir una cadena utilizando el bucle `for`:

```javascript
const reverseString = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result = `${str[i]}${result}`;
  }

  return result;
};
```

https://replit.com/@hexlet/js-basics-for

Se puede leer de la siguiente manera: *el bucle con el índice `i` se repite mientras `i < str.length`. Después de cada paso incrementa `i` en 1*.

En la definición del bucle `for`, entre paréntesis, hay tres expresiones separadas por punto y coma:

1. Valor inicial del contador. Este código se ejecuta exactamente una vez antes de la primera iteración.
2. Predicado: la condición de repetición del bucle. Se ejecuta en cada iteración, al igual que en `while`.
3. Descripción del cambio del contador. Este código se ejecuta al final de cada iteración.

En lo demás, el funcionamiento es exactamente igual al del bucle `while`.

En la definición de `for`, no es necesario especificar las tres expresiones. Si no se especifica la condición de repetición del bucle, el bucle se ejecutará infinitamente:

```javascript
let i = 1;
// Incluso se pueden omitir las tres expresiones
for (;;) {
  console.log(i);
  i += 1;
}
```
