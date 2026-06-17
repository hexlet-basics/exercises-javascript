Veamos un ejemplo de un programa que realiza la conversión de divisas:

```javascript
const eurosCount = 1000;
const dollarsCount = eurosCount * 1.25; // => 1250
const rublesCount = dollarsCount * 60;  // => 75000

console.log(rublesCount);
```

Técnicamente, el código funciona. Pero desde el punto de vista del desarrollo profesional, este tipo de código se considera una mala práctica.

## ¿Cuál es el problema?

En las expresiones se usan números poco claros: `1.25` y `60`. ¿Qué son estos valores? ¿Un tipo de cambio? ¿De dónde salieron? Dentro de un mes o un año, lo más probable es que no recuerdes qué significan estos números. Y si otro desarrollador abre el código, simplemente no entenderá de dónde sale todo. Estos números se llaman mágicos.

Los números mágicos son valores numéricos cuyo significado no queda claro a partir del código. Por lo general, se usan directamente en expresiones matemáticas, sin variables con nombres comprensibles. Para entender su propósito, hay que profundizar en el contexto o leer documentación adicional. Los números mágicos dificultan la lectura, la comprensión y el mantenimiento del código.

## Cómo evitar la magia

La forma más sencilla consiste en extraer dichos valores a variables con nombres comprensibles. Entonces el significado se vuelve evidente:

```javascript
const dollarsPerEuro = 1.25;
const rublesPerDollar = 60;

const eurosCount = 1000;
const dollarsCount = eurosCount * dollarsPerEuro;   // => 1250
const rublesCount = dollarsCount * rublesPerDollar; // => 75000

console.log(rublesCount);
```

Los números en sí no han desaparecido, pero ahora están almacenados en variables cuyos nombres indican sin ambigüedad qué son.

## Conclusión

Los números mágicos hacen que el código sea poco claro y difícil de mantener. Para evitar este problema, hay que reemplazar dichos números por variables con nombres significativos. Esto hace que el código sea más legible, especialmente a largo plazo. El código claro siempre es más importante que la compacidad, incluso si el programa se vuelve un poco más largo.
