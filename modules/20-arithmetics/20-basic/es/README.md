A nivel básico, las computadoras solo trabajan con números. Incluso si escribes una aplicación compleja en un lenguaje de programación moderno, dentro de ella siempre ocurren numerosos cálculos: suma, resta, división, etc.

Afortunadamente, para empezar a programar, basta con conocer la aritmética escolar habitual. Por ahí empezaremos.

## La suma en JavaScript

En matemáticas, para sumar escribimos 3 + 4. En JavaScript es exactamente igual:

```javascript
3 + 4;
```

Este código realmente se puede ejecutar: el intérprete realizará el cálculo. Pero... no hará nada con el resultado. Es decir, se obtendrá 7, pero no lo verás.

## Para ver el resultado, hay que imprimirlo

En un programa real, simplemente calcular un valor no es suficiente. Hay que hacer algo con el resultado, por ejemplo, mostrarlo al usuario.

Para ello usamos el ya familiar comando `console.log()`:

```javascript
// Primero se calcula la suma,
// luego se pasa a la función de impresión
console.log(3 + 4);
```

```text
console.log(3 + 4)
            └─┬─┘
              7

console.log(7)  →  7
```

Resultado de la ejecución:

```text
7
```

Si escribimos la misma expresión como una cadena, obtenemos un resultado completamente diferente: se imprimirá la cadena "tal cual":

```javascript
console.log('3 + 4'); // imprime: 3 + 4
console.log(3 + 4);   // imprime: 7
```

## Otras operaciones aritméticas

JavaScript admite todas las operaciones habituales más algunas específicas relacionadas con la forma en que se almacenan y procesan los números en una computadora:

| Operación        | Símbolo | Ejemplo   | Resultado |
|------------------|---------|-----------|-----------|
| Suma             | `+`     | `2 + 3`   | `5`       |
| Resta            | `-`     | `7 - 2`   | `5`       |
| Multiplicación   | `*`     | `4 * 3`   | `12`      |
| División         | `/`     | `8 / 2`   | `4`       |
| Potenciación     | `**`    | `3 ** 2`  | `9`       |
| Resto            | `%`     | `7 % 3`   | `1`       |

Así es como puedes imprimir el resultado de la división y de la potenciación:

```javascript
console.log(8 / 2);  // => 4
console.log(3 ** 2); // => 9
```

## Qué es el resto de la división (`%`)

Esta operación se llama **obtención del resto de la división**. Muestra **lo que "queda"** cuando un número se divide por otro *de forma no exacta*. Ejemplo:

```javascript
console.log(7 % 3); // => 1
```

¿Por qué el resultado es igual a 1?

- 7 se divide entre 3 dos veces: 3 * 2 = 6
- Hasta 7 queda 1, y ese es el resto.

Otros ejemplos:

```javascript
console.log(10 % 4); // => 2 (10 se divide entre 4 dos veces: 4 * 2 = 8, resto 2)
console.log(15 % 5); // => 0 (se divide sin resto)
```

La operación `%` se usa con frecuencia en programación, por ejemplo, para comprobar si un número se divide de forma exacta (si el resto es 0).

## Formato de las expresiones aritméticas

Desde el punto de vista de JavaScript, no hay diferencia entre `3+4` y `3 + 4`. El intérprete entenderá ambas opciones de la misma manera. La única diferencia está en el formato del código. En programación es costumbre poner espacios alrededor de los operadores aritméticos, porque así las expresiones son más fáciles de leer:

```javascript
console.log(3 + 4);
console.log(8 / 2);
console.log(7 % 3);
```
