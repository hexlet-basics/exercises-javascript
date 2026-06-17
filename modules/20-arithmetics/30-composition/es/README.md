En JavaScript, al igual que en las matemáticas, puedes combinar varias operaciones en una sola línea. El intérprete procesa estas expresiones paso a paso según ciertas reglas.

Veamos un ejemplo:

```javascript
console.log(2 * 4 * 5 * 10);
```

Este código consta de varias operaciones de multiplicación combinadas en una sola expresión. Para entender cómo el intérprete evalúa la expresión, analicémosla paso a paso:

- Primero se calcula `2 * 4`: `8 * 5 * 10`
- Luego `8 * 5`: `40 * 10`
- Y finalmente `40 * 10`: `400`

El resultado final es `400`.

## ¿Y si las operaciones son diferentes?

Todo es sencillo mientras se utilicen los mismos operadores. Pero ¿qué sucede si combinamos, por ejemplo, la multiplicación y la suma?

```javascript
console.log(2 + 3 * 4);
```

```text
2 + 3 * 4
    └─┬─┘
2 +  12
└──┬───┘
   14
```

¿El resultado será `20` o `14`? La respuesta es `14`.

Esto se debe a que en JavaScript, al igual que en las matemáticas, las operaciones tienen prioridad. La multiplicación se realiza antes que la suma, a menos que se utilicen paréntesis. Lo veremos con más detalle en la lección sobre las prioridades.

## Ejemplos con resta y números negativos

La misma regla funciona para la resta:

```javascript
console.log(10 - 2 * 3); // => 4
```

Primero se realiza la multiplicación: `10 - 6 = 4`.

Si la expresión contiene números negativos, el menos unario se aplica después de la potenciación:

```javascript
console.log(-2 ** 2); // => -4, dos elevado a la potencia de dos, luego se aplica el menos
console.log(-2 * 5);  // => -10, menos dos multiplicado por cinco
console.log(4 + -2);  // => 2
console.log(6 - -2);  // => 8
```

En todos los ejemplos, excepto el primero, primero se calcula el menos unario (`-2`) y luego se realizan las operaciones restantes.

Veamos con más detalle el último ejemplo:

```javascript
console.log(6 - -2); // => 8
```

Primero se calcula el menos unario (`-2`), y luego la operación se convierte en `6 - (-2)`, lo que da `8`. Esto es lo mismo que:

```javascript
console.log(6 + 2); // => 8
```

## Qué hay que recordar

- Las expresiones pueden constar de varias operaciones.
- JavaScript las evalúa paso a paso: de izquierda a derecha, respetando la prioridad de las operaciones.
- Los paréntesis se pueden utilizar para indicar explícitamente el orden de evaluación.
