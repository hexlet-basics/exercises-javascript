
En JavaScript se puede pasar cualquier valor a una función. A veces esto complica la comprensión del código: no siempre queda claro qué espera la función y qué devuelve. La sintaxis de JavaScript no tiene anotaciones de tipos, pero existe un estándar de facto — **JSDoc**: comentarios especiales antes de la función que entienden los editores y las herramientas de verificación.

## Cómo anotar los tipos de los parámetros

Un comentario JSDoc comienza con `/**` y se coloca justo antes de la definición de la función. El tipo de cada parámetro se declara con la etiqueta `@param`, y el tipo del valor de retorno con `@returns`. El tipo se escribe entre llaves:

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

Ahora el editor sabe que `add()` recibe dos números y devuelve un número. Si intentas pasar una cadena, el editor lo marcará como un problema.

## Qué tipos se usan

En esta etapa basta con conocer las anotaciones de los tipos primitivos:

- `number` para números — JavaScript tiene un único tipo numérico para enteros y decimales
- `string` para cadenas
- `boolean` para valores lógicos (`true` o `false`)

Si una función no devuelve nada, se usa `void` como tipo de retorno. Para parámetros opcionales con valores por defecto, el nombre del parámetro se encierra entre corchetes: `@param {string} [greeting='Hello']`.

## Anotaciones y verificación estática

JavaScript no verifica las anotaciones JSDoc durante la ejecución, pero hay herramientas que pueden hacerlo sin ejecutar el código — esto se llama **verificación estática**. En el mundo de JavaScript, el compilador de TypeScript puede leer archivos JS y entender los tipos de los comentarios JSDoc. Las anotaciones son opcionales, pero usarlas se considera una buena práctica. Cuando los tipos se vuelven numerosos, los desarrolladores suelen pasar a **TypeScript** — un superconjunto de JavaScript con anotaciones integradas en la sintaxis.
