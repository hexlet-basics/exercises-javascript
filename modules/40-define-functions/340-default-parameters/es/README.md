Las funciones pueden recibir parámetros. A veces resulta cómodo fijar un valor ya en la definición de la función, para no indicarlo en cada llamada. Ese valor se llama **valor por defecto**.

Si el argumento no se pasa, se usa ese valor. Si el argumento se indica, reemplaza al valor por defecto.

```javascript
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}

greet('Alice'); // => Hello, Alice!
greet();        // => Hello, World!  (se usó el valor por defecto)
```

## Ejemplo: repetir un texto

Hagamos una función que repita una cadena varias veces. Que por defecto sea una vez, pero que se pueda indicar otra cantidad si se quiere. Para repetir una cadena, JavaScript tiene el método `repeat()`:

```javascript
function repeat(text, times = 1) {
  return text.repeat(times);
}

console.log(repeat('Hi'));    // => Hi
console.log(repeat('Hi', 3)); // => HiHiHi
```

```text
function repeat(text, times = 1)   ← times tiene un valor por defecto

repeat('go')      →  times = 1  (por defecto)
repeat('go', 5)   →  times = 5  (indicado de forma explícita)
```

Los parámetros opcionales se indican siempre **al final** de la lista. Por eso primero va el parámetro obligatorio `text`, y solo después `times` con su valor por defecto.

## Ejemplo: unir palabras con un separador

Por defecto las palabras se unen con un espacio, pero se puede indicar otro carácter:

```javascript
function joinWords(word1, word2, separator = ' ') {
  return word1 + separator + word2;
}

console.log(joinWords('King', 'Road'));         // => King Road
console.log(joinWords('Dragon', 'stone', '-')); // => Dragon-stone
```

## Ejemplo: varios parámetros por defecto

Una función puede tener más de un parámetro con valor por defecto. Hagamos una función que construya una línea separadora. Por defecto el carácter es el guion y la longitud es 10:

```javascript
function makeLine(symbol = '-', length = 10) {
  return symbol.repeat(length);
}

console.log(makeLine());        // => ----------
console.log(makeLine('*'));     // => **********
console.log(makeLine('*', 5));  // => *****
console.log(makeLine('#', 3));  // => ###
```

## Ejemplo: ocultar el número de una tarjeta

```javascript
function getHiddenCard(cardNumber, starsCount = 4) {
  return '*'.repeat(starsCount) + cardNumber.slice(-4);
}

console.log(getHiddenCard('1234567890123456'));    // => ****3456
console.log(getHiddenCard('1234567890123456', 2)); // => **3456
```

El parámetro `starsCount` es igual a `4` por defecto, pero se puede pasar otro valor.
