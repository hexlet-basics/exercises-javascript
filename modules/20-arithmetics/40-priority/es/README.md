Consideremos una expresión sencilla:

```javascript
console.log(2 + 2 * 2); // => 6
```

El resultado es 6, no 8. Esto se explica por el concepto de prioridad de las operaciones en matemáticas y programación. Determina el orden en que se ejecutan las operaciones:

- La multiplicación y la división se ejecutan antes que la suma y la resta.
- La potenciación (`**`) tiene una prioridad aún más alta.

```text
Prioridad de las operaciones (de mayor a menor):

  **        potenciación
   ↓
  * / %     multiplicación, división, resto
   ↓
  + -       suma, resta
```

Por ejemplo:

```javascript
console.log(2 * 2 ** 3); // => 16, porque primero 2 ** 3 = 8, luego 8 * 2 = 16
```

Si hay operaciones con la misma prioridad una al lado de la otra, se ejecutan de izquierda a derecha:

```javascript
console.log(8 / 2 * 3); // => 12, porque primero 8 / 2 = 4, luego 4 * 3 = 12
```

## Controlar el orden de las operaciones

A veces es necesario cambiar el orden de los cálculos. Para ello se utilizan los paréntesis. Permiten indicar qué operaciones deben ejecutarse primero:

```javascript
console.log((2 + 2) * 2); // => 8
```

Los paréntesis se pueden colocar alrededor de cualquier parte de una expresión y anidarse unos dentro de otros:

```javascript
console.log(3 ** (4 - 2));                       // => 9
console.log(7 * 3 + (4 / 2) - (8 + (2 - 1)));   // => 14
```

La regla principal: cierra siempre los paréntesis. Los paréntesis sin pareja provocan errores: tanto los principiantes como los programadores experimentados a veces olvidan el paréntesis de cierre.

> Escribe los paréntesis en pareja de inmediato. Por ejemplo, escribe `()` y luego rellena la parte interna. La mayoría de los editores de código (incluido el nuestro) añaden automáticamente el paréntesis de cierre en cuanto escribes el de apertura.

## Mejorar la legibilidad

A veces una expresión funciona correctamente, pero se ve confusa. En esos casos, se pueden añadir paréntesis solo por claridad: no cambian el resultado, pero mejoran la legibilidad.

```javascript
// Antes
console.log(8 / 2 + 5 - -3 / 2);         // => 10.5

// Después
console.log(((8 / 2) + 5) - (-3 / 2));   // => 10.5
```

Los programas los escriben personas, y también los leen personas. A la computadora no le importa lo comprensible que sea el código: solo necesita que sea sintácticamente correcto. Para una persona, un código claro y ordenado es la clave de la comodidad, especialmente cuando se trabaja en equipo o se depuran errores.
