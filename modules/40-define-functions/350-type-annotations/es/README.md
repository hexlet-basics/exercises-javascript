
En JavaScript se puede pasar cualquier valor a una función. A veces esto complica la comprensión del código: no siempre queda claro qué espera exactamente la función y qué devuelve. Para que el código sea más claro, los tipos se describen de forma explícita. La sintaxis de JavaScript no tiene anotaciones de tipos, pero existe un estándar de facto: **JSDoc**, comentarios especiales antes de la función que entienden los editores y las herramientas de verificación. Así resolvemos varias cosas a la vez:

- Mejoramos el trabajo del editor de código: obtenemos sugerencias, mejor autocompletado y cosas así.
- Ayudamos a los agentes de IA a ver más rápido la estructura y tomar decisiones más correctas, minimizando errores accidentales.
- Aparece la posibilidad de comprobar la corrección del programa sin ejecutarlo, mediante la verificación estática. Esa verificación no garantiza que la lógica del programa esté escrita correctamente, pero al menos no habrá errores de tipos.

## Cómo indicar los tipos de los parámetros

Un comentario JSDoc empieza con `/**` y se coloca justo antes de la definición de la función. El tipo de cada parámetro se indica con la etiqueta `@param`, y el tipo del valor devuelto con la etiqueta `@returns`. El tipo en sí se escribe entre llaves.

Veámoslo con el ejemplo de una función que calcula la suma de dos valores recibidos:

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // => 5
```

```text
/**
 * @param {number} a      ← tipo del parámetro a
 * @param {number} b      ← tipo del parámetro b
 * @returns {number}      ← tipo del valor devuelto
 */
```

Ahora el editor de código sugerirá que la función `add()` recibe dos números y devuelve un número. Si se intenta pasar una cadena, el editor lo marcará como un problema y avisará:

```javascript
add("2", 3); // Argument of type 'string' is not assignable to parameter of type 'number'
```

## Qué tipos se usan en las anotaciones

En esta etapa basta con conocer las anotaciones de los tipos de datos simples, los primitivos:

- `number` para los números: en JavaScript hay un solo tipo numérico, tanto para enteros como para decimales
- `string` para las cadenas
- `boolean` para los valores lógicos (`true` o `false`)

```javascript
/**
 * @param {string} name
 * @param {number} age
 * @param {number} height
 * @returns {string}
 */
function describe(name, age, height) {
  return `${name}, ${age} años, altura ${height}`;
}

console.log(describe("Anna", 25, 1.7));
// => Anna, 25 años, altura 1.7
```

Si la función no devuelve nada, como tipo devuelto se indica `void`. Por ejemplo, una función puede solo imprimir texto en pantalla:

```javascript
/**
 * @param {string} name
 * @returns {void}
 */
function printGreeting(name) {
  console.log(`Hello, ${name}!`);
}

printGreeting("Anna");
// => Hello, Anna!
```

## Ejemplo con parámetros por defecto

Las anotaciones funcionan igual tanto para los parámetros obligatorios como para los que tienen un valor por defecto. El nombre del parámetro opcional se encierra entre corchetes, y después del signo `=` se indica el valor estándar:

```javascript
/**
 * @param {string} name
 * @param {string} [greeting='Hello']
 * @returns {string}
 */
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}`;
}

console.log(greet("Anna")); // => Hello, Anna
console.log(greet("Kirill", "Hi")); // => Hi, Kirill
```

En este ejemplo `name` es un parámetro obligatorio, y `greeting` tiene un valor por defecto. Las anotaciones muestran los tipos de ambos parámetros y del resultado devuelto.

## Las anotaciones y la verificación del código

JavaScript en sí no comprueba las anotaciones JSDoc durante la ejecución del programa, pero existen herramientas que saben hacerlo sin ejecutar el código. Ese enfoque se llama **verificación estática del código**.

«Estática» significa que la verificación ocurre antes de ejecutar el programa. La herramienta lee el código fuente y comprueba si los valores pasados corresponden a los tipos indicados. Por ejemplo, si la función recibe una cadena y tú pasas un número, la verificación estática lo mostrará como un error. En el mundo de JavaScript esa verificación la hace el compilador de TypeScript: en un modo especial lee archivos JS normales y entiende los tipos de los comentarios JSDoc.

Resulta especialmente cómodo cuando el editor resalta esos errores justo mientras se escribe el código. Eso permite ver el problema de inmediato y corregirlo sin esperar a ejecutar el programa. Gracias a ello, muchos errores inesperados se detectan de antemano y en el código en funcionamiento quedan menos.

Las anotaciones no son obligatorias. Las funciones se pueden escribir sin ellas y JavaScript funcionará igual. Pero cuando las anotaciones están, el código se vuelve más claro para las personas y más cómodo para los editores. Anotar las funciones en tu propio código se considera una buena práctica. Y cuando los tipos se vuelven muchos, los desarrolladores a menudo pasan a **TypeScript**, un lenguaje superconjunto de JavaScript donde las anotaciones están integradas directamente en la sintaxis.
