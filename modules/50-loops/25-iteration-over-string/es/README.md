
Los bucles no sólo son útiles para trabajar con números, sino también para trabajar con cadenas de texto. Esto se debe principalmente a la capacidad de acceder a un carácter específico mediante su índice. A continuación, se muestra un ejemplo de código que imprime cada letra de una palabra en una línea separada:

```javascript
const printNameBySymbol = (name) => {
  let i = 0;
  // Esta condición se evaluará hasta el final de la cadena,
  // incluyendo el último carácter. Su índice es `length - 1`.
  while (i < name.length) {
    // Accedemos al carácter mediante su índice
    console.log(name[i]);
    i = i + 1;
  }
};

const name = 'Arya';
printNameBySymbol(name);
// => A
// => r
// => y
// => a
```

Lo más importante en este código es establecer la condición correcta en el `while`. Esto se puede hacer de dos formas: `i < name.length` o `i <= name.length - 1`. Ambas formas conducen al mismo resultado.
