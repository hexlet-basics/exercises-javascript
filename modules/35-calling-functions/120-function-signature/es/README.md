
La función `Math.pow()`, que eleva un número a una potencia determinada, acepta dos parámetros: **el número a elevar** y **la potencia a la que se debe elevar**. Si se llama a `pow()` sin parámetros, se devuelve `NaN`. La función intenta realizar la operación de potenciación de manera correcta, pero si no se proporciona un valor, el intérprete automáticamente le pasa `undefined`. JavaScript obliga a los programadores a ser más cuidadosos que en otros lenguajes. En la mayoría de los lenguajes, si se pasan menos parámetros de los que espera una función, se produce un error, pero no en JavaScript. `NaN` también se devuelve al pasar cualquier valor no numérico:

```javascript
const result = Math.pow(2, 'boom');
console.log(result); // => NaN
```

Otra función puede tener un número diferente de parámetros y diferentes tipos de parámetros. Por ejemplo, puede existir una función que acepte tres parámetros: un número, una cadena y otro número.

¿De dónde sabemos cuántos y qué tipo de parámetros necesita la función `Math.pow()` y qué tipo de valor devuelve? Miramos la **firma** de esta función. La firma define los parámetros de entrada y sus tipos, así como el parámetro de salida y su tipo. Puedes leer sobre la función `Math.pow()` en la [documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/pow). En la sección "Sintaxis" se encuentra el siguiente texto:

```
Math.pow(base, exponent)

Parámetros
  base
    La base de la potencia.
  exponent
    El exponente al que elevar la base.
```

Esta es la firma de la función y una breve explicación en español. La documentación nos permite entender cuántos argumentos tiene la función, qué tipo son y si la función devuelve algo, qué tipo de valor devuelve.
