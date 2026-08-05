En esta lección aprenderemos a escribir funciones que **devuelven valores**. Esas funciones entregan el resultado de su trabajo, como si dijeran: «Toma, ya lo calculé».

Por ejemplo, una función puede devolver una cadena con texto procesado o un número calculado con una fórmula. El valor devuelto se puede usar después: guardarlo en una variable, pasarlo a otra función o mostrarlo en pantalla.

Para que una función entregue un resultado se usa la palabra clave especial `return`. Termina la ejecución de la función e indica qué es exactamente lo que hay que devolver.

Aquí tienes una función que pone el texto en mayúsculas:

```javascript
function shout(name) {
  return name.toUpperCase();
}

const result = shout('hexlet');
console.log(result); // => HEXLET

const result2 = shout('code-basics');
console.log(result2); // => CODE-BASICS
```

Al llamar `shout('hexlet')` primero se evalúa la expresión `name.toUpperCase()`, que devuelve la cadena `'HEXLET'`. Después `return` entrega ese valor hacia fuera, al lugar desde donde se llamó a la función. En nuestro caso se guarda en la variable `result` y luego se muestra en pantalla.

## La diferencia entre return y console.log

A diferencia de `console.log()`, `return` no imprime nada. Simplemente devuelve un valor, y la decisión de qué hacer con él la toma el código que llama.

```javascript
// Esta función imprime, pero no devuelve nada
function printSum(a, b) {
  console.log(a + b);
}

// Esta función devuelve el resultado
function getSum(a, b) {
  return a + b;
}

// El resultado devuelto se puede usar después
const sum = getSum(3, 4);
console.log(sum * 2); // => 14
```

## Devolver una expresión evaluada

En `return` normalmente se indica una **expresión**, que primero se evalúa y después se pasa el resultado hacia fuera:

```javascript
function fullName(first, last) {
  return `${first} ${last}`;
}

const name = fullName('Aria', 'Stark');
console.log(name); // => Aria Stark
```

Primero se evalúa la plantilla de cadena, y ya el valor listo se devuelve hacia fuera.

## Funciones de varias líneas

A veces en el cuerpo de la función hay que dar varios pasos antes de obtener el resultado. Entonces se escriben varias líneas, y al final se usa `return`. Por ejemplo, una función que formatea un nombre: quita los espacios de los extremos y pasa las letras a mayúsculas.

```javascript
function formatName(name) {
  const clean = name.trim();
  const uppercased = clean.toUpperCase();
  return uppercased;
}

console.log(formatName('  hexlet  ')); // => HEXLET
```

## El código después de return

Cuando la ejecución llega a `return`, la función termina de inmediato. Todo lo que esté escrito después, dentro de la función, **no se ejecutará**:

```javascript
function example() {
  return 'listo';
  console.log('este código nunca se ejecutará');
}

console.log(example()); // => listo
```

Por eso `return` se escribe normalmente al final de la lógica. Más adelante, cuando lleguemos a las construcciones condicionales, verás que esos «finales» dentro de una misma función pueden ser varios.
