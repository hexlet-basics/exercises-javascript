
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

Se puede leer de la siguiente manera: *el bucle con el índice `i` se repite mientras `i < str.length` e incrementa `i` en 1 después de cada paso*.

Analicemos cómo funciona el bucle paso a paso para la llamada `reverseString('go!')`:

```text
antes del bucle: result = ''

i=0: result = `${str[0]}${result}` = 'g' + ''   = 'g'
i=1: result = `${str[1]}${result}` = 'o' + 'g'  = 'og'
i=2: result = `${str[2]}${result}` = '!' + 'og' = '!og'
```

Cada nuevo carácter se antepone a la izquierda del resultado acumulado, por lo que la cadena se construye en orden inverso.

En la definición del bucle `for`, entre paréntesis, hay tres expresiones separadas por punto y coma:

1. Valor inicial del contador. Este código se ejecuta exactamente una vez antes de la primera iteración.
2. Predicado: la condición de repetición del bucle. Se ejecuta en cada iteración, al igual que en `while`.
3. Descripción del cambio del contador. Este código se ejecuta al final de cada iteración.

En lo demás, el funcionamiento es exactamente igual al del bucle `while`.

## Otro ejemplo: contar caracteres

Contemos cuántas veces aparece un carácter en una cadena, sin distinguir entre mayúsculas y minúsculas:

```javascript
const charsCount = (text, char) => {
  let result = 0;
  for (let i = 0; i < text.length; i += 1) {
    // convertimos a minúsculas para no depender de mayúsculas y minúsculas
    if (text[i].toLowerCase() === char.toLowerCase()) {
      result += 1;
    }
  }
  return result;
};

charsCount('hexlet!', 'e'); // 2
charsCount('hExlet!', 'E'); // 2
charsCount('hexlet!', 'a'); // 0
```

Aquí `for` controla el recorrido de los caracteres, mientras que la condición interna decide si incrementar el contador.

En la definición de `for`, no es necesario especificar las tres expresiones. Si no se especifica la condición de repetición del bucle, el bucle se ejecutará infinitamente:

```javascript
let i = 1;
// Incluso se pueden omitir las tres expresiones
for (;;) {
  console.log(i);
  i += 1;
}
```
