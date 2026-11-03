Hasta este momento solo usábamos funciones ya hechas: `console.log()`, `Math.pow()` y otras. Pero en JavaScript se pueden crear funciones propias, y ha llegado el momento de aprender a hacerlo.

## Para qué definir funciones

Supongamos que tenemos varios fragmentos de código parecidos:

```javascript
console.log("Hello, Hexlet!");
console.log("Hello, world!");
console.log("Hello, JavaScript!");
```

Para no repetir la misma plantilla, se la puede envolver en una función propia que reciba un parámetro e imprima la cadena necesaria:

```javascript
const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};
```

Ahora se la puede llamar con distintos argumentos:

```javascript
sayHello("Hexlet"); // => Hello, Hexlet!
sayHello("world"); // => Hello, world!
sayHello("JavaScript"); // => Hello, JavaScript!
```

Parece que el código no se ha reducido, pero apareció otra ventaja: si la función se usa en distintos lugares, para cambiar el texto basta con corregir solo su definición. Cuanto más compleja es la tarea y más a menudo aparece, más importante es separar la lógica en funciones aparte.

## La sintaxis de la definición

```javascript
const nombreDeLaFuncion = (parámetros) => {
  cuerpo;
};
```

```text
const greet = (name) => {         ← nombre, parámetro y flecha
  return 'Hello, ' + name;        ← cuerpo de la función
};
```

La definición tiene dos partes. A la derecha del signo `=` está la propia función. Entre paréntesis va la lista de parámetros separados por comas, después la flecha `=>`, y el cuerpo de la función se encierra entre llaves `{}`. A la izquierda está el nombre, y la función se guarda en una constante con las mismas reglas que cualquier otro valor. Por eso al final de la definición va un punto y coma, igual que después de una asignación normal.

## Definir una función no significa llamarla

Definir una función no ejecuta su código. El cuerpo se ejecutará solo al llamarla. Mira el ejemplo:

```javascript
const sayHi = () => {
  console.log("Hi!");
};

console.log("El programa continúa…");
```

Aquí la función `sayHi()` está definida, pero su cuerpo no se ejecuta: en la pantalla aparecerá solo `El programa continúa…`. Para que `sayHi()` funcione, hay que llamarla de forma explícita:

```javascript
const sayHi = () => {
  console.log("Hi!");
};

sayHi(); // => Hi!
console.log("El programa continúa…");
```

## Ejemplo: una función para imprimir la media aritmética

Implementemos una función que **calcula e imprime la media aritmética** de dos números. La media aritmética es la suma de los números dividida por su cantidad. Por ejemplo, la media de 6 y 4: `(6 + 4) / 2 = 5`.

```javascript
const printAverage = (a, b) => {
  const total = a + b;
  const average = total / 2;
  console.log(average);
};

printAverage(6, 4); // => 5
```

Aquí `a` y `b` son los parámetros de entrada, `total` contiene su suma, `average` se obtiene dividiendo la suma por 2, y `console.log()` muestra el resultado.

## Nombres y orden de los parámetros

El nombre de un parámetro puede ser cualquiera; lo importante es que refleje el sentido del valor que llegará dentro. Con el código de fuera no está relacionado de ninguna manera:

```javascript
const getLastChar = (str) => {
  return str[str.length - 1];
};

// Dentro de la función str será igual a 'Winter is coming'.
// El nombre de la variable de fuera no está ligado al nombre del parámetro
const text = "Winter is coming";
console.log(getLastChar(text)); // => g
```

Cuando hay dos parámetros o más, para la mayoría de las funciones pasa a importar el orden en que se pasan. Si se cambia, la función funcionará de otra manera:

```javascript
// El primer parámetro es qué buscamos, el segundo por qué lo cambiamos
console.log("google".replace("go", "mo")); // => moogle

// No se reemplazó nada: dentro de 'google' no hay 'mo'
console.log("google".replace("mo", "go")); // => google
```

## Otras formas de escribir funciones

En la documentación y en el código de otras personas la función se define a menudo con la palabra clave `function`:

<!-- lint-code-blocks: skip — объявление function показано как другая форма записи, правило js-function-declaration переписало бы его в стрелочную -->

```text
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

sayHello("Hexlet"); // => Hello, Hexlet!
```

Esa forma se llama declaración de función. También aparece la expresión de función `const sayHello = function (name) { … };`, que está construida como la función de flecha, solo que en lugar de la flecha lleva la palabra `function`.

Para nuestras tareas las tres formas son equivalentes, porque la función se define y luego se llama por su nombre. La forma de flecha es la que más aparece en JavaScript, por eso en el curso los ejemplos están escritos así. Una lección aparte de este módulo mostrará cómo acortarla todavía más.

## Reutilización y legibilidad

Las funciones ayudan a evitar la duplicación y hacen los programas más claros. El propio nombre de la función dice qué hace. Esto es especialmente importante en proyectos grandes, donde el código lo leen otros programadores (o tú mismo un mes después).
