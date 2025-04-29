
La agregación se aplica no sólo a números, sino también a cadenas de texto. Estos son problemas en los que la cadena se genera dinámicamente, es decir, no se sabe de antemano su tamaño ni su contenido.

Imagina una función que puede "multiplicar" una cadena, es decir, repetirla un número determinado de veces:

```javascript
repeat('hexlet', 3); // hexlethexlethexlet
```

El principio de funcionamiento de esta función es bastante simple: se realiza una concatenación de la cadena un número determinado de veces en un bucle:

```javascript
const repeat = (text, times) => {
  // El elemento neutro para las cadenas es una cadena vacía
  let result = '';
  let i = 1;

  while (i <= times) {
    // Agregamos la cadena al resultado en cada iteración
    result = `${result}${text}`;
    i = i + 1;
  }

  return result;
};
```

Veamos cómo se ejecuta este código paso a paso:

```javascript
// Para llamar a repeat('hexlet', 3);
let result = '';
result = `${result}hexlet`; // hexlet
result = `${result}hexlet`; // hexlethexlet
result = `${result}hexlet`; // hexlethexlethexlet
```
