El cuerpo de un bucle, igual que el cuerpo de una función, es el lugar donde se ejecutan las instrucciones. Eso significa que dentro se puede usar todo lo estudiado antes, por ejemplo las construcciones condicionales. Así el programa repite una misma acción varias veces, pero en cada repetición toma una decisión.

Supongamos que hay que recorrer los números del `1` al `10` e imprimir solo los pares. El bucle recorre todos los números seguidos, y la condición de dentro decide cuáles llegan a la pantalla:

```javascript
let number = 1;
while (number <= 10) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number = number + 1;
}

// => 2
// => 4
// => 6
// => 8
// => 10
```

El contador se incrementa después de la comprobación **en cualquier caso**. Eso es importante: si se incrementara `number` solo dentro del `if`, el bucle se detendría en el primer número impar y funcionaría infinitamente.

## Cómo funciona paso a paso

Antes de la primera repetición `number` es igual a `1`.

**Paso 1.** La condición del bucle `number <= 10` es verdadera, el programa entra en el cuerpo. El número `1` es impar, el bloque `if` no se ejecuta. Después `number` se incrementa hasta `2`.

**Paso 2.** La condición vuelve a ser verdadera. El número `2` es par, así que se imprime `2`. Después `number` se incrementa hasta `3`.

Más adelante el bucle comprueba cada número: los impares los omite, los pares los muestra. Cuando `number` llegue a ser igual a `11`, la condición `number <= 10` será falsa y el bucle terminará.

## La condición cambia la acción, no el avance

En esos bucles resulta cómodo separar dos partes: el contador lleva el programa al valor siguiente, y el `if` decide qué hacer con el valor actual.

Veamos una función que cuenta cuántas veces aparece una letra en una oración:

```javascript
countChars('Fear cuts deeper than swords.', 'e'); // 4
// Si no se encontró nada, el resultado es 0 coincidencias
countChars('Sansa', 'y'); // 0
```

La implementación:

```javascript
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i] === char) {
      // Solamente contamos los caracteres que coinciden
      count = count + 1;
    }
    // El contador se incrementa en cualquier caso
    i = i + 1;
  }

  return count;
};
```

Esta tarea es de agregación. A pesar de que no cuenta todos los caracteres, para calcular la suma hay que analizar igualmente cada carácter. La diferencia clave con la agregación habitual es la presencia de una condición dentro del cuerpo: la variable `count` se incrementa solo cuando el carácter actual coincide con el esperado. La condición dentro del bucle puede comprobar cualquier cosa: la paridad de un número, la coincidencia de un carácter, la longitud de una cadena. Lo principal es que el contador siga cambiando y que el bucle pueda terminar.
