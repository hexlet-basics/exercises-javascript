La frase "el resultado no cambia al modificar el orden de los sumandos" es familiar para todos desde la escuela. Este principio se llama ley conmutativa y es una de las leyes fundamentales de la aritmética.

## Qué es la conmutatividad

Una operación se llama conmutativa si el orden de los operandos no afecta el resultado: si intercambias los valores, obtienes la misma respuesta. Un ejemplo de operación conmutativa es la suma.

```javascript
console.log(3 + 2); // => 5
console.log(2 + 3); // => 5
```

El resultado idéntico confirma que la operación es conmutativa.

```text
2 + 3 = 5     3 + 2 = 5
└──────────┬─────────┘
   mismo resultado

2 - 3 = -1    3 - 2 = 1
└──────────┬─────────┘
 resultado diferente
```

## Operaciones no conmutativas

Pero no todas las operaciones tienen esta propiedad. Por ejemplo, la resta es una operación no conmutativa:

```javascript
console.log(2 - 3); // => -1
console.log(3 - 2); // => 1
```

Intercambiar los operandos da un resultado diferente.

## En programación es exactamente igual

La conmutatividad en programación funciona exactamente igual que en aritmética. JavaScript sigue estrictamente las reglas matemáticas.

Otras operaciones no conmutativas:

- División: _8 / 2 ≠ 2 / 8_
- Exponenciación: _2 \*\*3 ≠ 3\*\* 2_

Ejemplos en código:

```javascript
// División
console.log(8 / 2);  // 8 dividido por 2 = 4

// Exponenciación
console.log(3 ** 2); // 3 al cuadrado = 9
```

Por lo tanto:

- Verifica siempre con cuidado el orden de los operandos, especialmente al trabajar con operaciones desconocidas;
- comprueba la conmutatividad de forma experimental en lugar de suponerla de antemano.
