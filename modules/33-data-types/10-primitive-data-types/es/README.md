Los programas trabajan con información diversa: texto, números, fechas, valores lógicos. Cada valor en un programa tiene un tipo.

Por ejemplo:

- `'Hello, World!'` es una cadena de texto (`string`);
- `7`, `-198`, `0`, `3.14` son números (`number`);
- `true` y `false` son valores lógicos (`boolean`).

## ¿Qué es un tipo de datos?

Un tipo de datos define:

- qué valores le pertenecen;
- qué operaciones se pueden realizar con él.

Por ejemplo, los números se pueden sumar, dividir y multiplicar. Las cadenas de texto se combinan de otra manera — mediante la concatenación. Multiplicar una cadena de texto por otra cadena de texto no tiene sentido:

```javascript
// Sin sentido: 'mamá' * 'cuaderno'
```

## Los números y las cadenas de texto pertenecen a tipos distintos

Un ejemplo de cómo mostrar un número:

```javascript
console.log(5);  // => 5
console.log(-5); // => -5
```

Un ejemplo de cómo mostrar una cadena de texto:

```javascript
console.log('5');  // => 5
console.log('-5'); // => -5
```

En la pantalla el resultado se ve igual, pero dentro del programa son cosas completamente diferentes:

| Valor    | Tipo de datos               |
|----------|-----------------------------|
| `5`      | `number` (número)           |
| `'5'`    | `string` (cadena de texto)  |

## Los números en JavaScript

En muchos lenguajes, los números enteros y los fraccionarios son tipos distintos (por ejemplo, en Python son `int` y `float`). En JavaScript no existe tal división: tanto los números enteros como los fraccionarios pertenecen a un solo tipo — `number`.

```javascript
console.log(10.234);     // => 10.234
console.log(-0.4);       // => -0.4

console.log(3.5 + 1.2);  // => 4.7
console.log(5 / 2);      // => 2.5
console.log(2.75 - 0.5); // => 2.25
```

## Tipos primitivos

Los tipos como `string`, `number`, `boolean` se llaman primitivos — están integrados directamente en el lenguaje.

```text
Tipos primitivos de JavaScript
├── number    : números (enteros y fraccionarios) (7, -3, 3.14)
├── string    : cadenas de texto                  ('hello')
├── boolean   : tipo lógico                         (true, false)
├── null       : ausencia intencional de un valor
└── undefined : el valor no está definido
```

Además de las cadenas de texto y los números, JavaScript tiene el tipo lógico `boolean` con los valores `true` y `false`, así como los valores especiales `null` y `undefined`. Los veremos con más detalle en el futuro.

## Cómo averiguar el tipo de un valor

El operador `typeof` devuelve el tipo en forma de cadena de texto:

```javascript
console.log(typeof 42);        // => 'number'
console.log(typeof 'hello');   // => 'string'
console.log(typeof true);      // => 'boolean'
console.log(typeof undefined); // => 'undefined'
console.log(typeof null);      // => 'object'  (un error histórico de JS)
```

También existen tipos compuestos — arrays, objetos y otros. Nos familiarizaremos con ellos más adelante. Es más, en JavaScript se pueden crear tus propios tipos (por ejemplo, clases), pero para empezar es importante comprender bien los primitivos.
