Una función de flecha en su forma completa se ve así:

```javascript
const square = (x) => {
  return x ** 2;
};
```

Aquí el cuerpo consiste en una sola instrucción `return`, y para ella hay que escribir las llaves y la propia palabra `return`. Para ese caso las funciones de flecha tienen una forma simplificada, que hace el código bastante más legible:

```javascript
// Puede llevar tiempo acostumbrarse a esta forma,
// pero luego no podrás vivir sin ella
const square = (x) => x ** 2;
```

Las diferencias con la versión completa son dos: desaparecieron las llaves y la instrucción `return`. La forma simplificada de una función realiza el retorno automáticamente. Se asume que dentro de dicha función solo hay una expresión que se evalúa y su resultado se devuelve directamente.

Es importante resaltar que las diferencias son únicamente de sintaxis; desde el punto de vista de su uso no hay diferencias. Un ejemplo con dos argumentos:

Versión completa

```javascript
const sum = (a, b) => {
  return a + b;
};
```

Versión simplificada

```javascript
const sum = (a, b) => a + b;
```

Ten en cuenta la ausencia de las llaves. Los desarrolladores que no están acostumbrados a este tipo de sintaxis a veces escriben código como `const sum = (a, b) => { a + b };` y luego se preguntan por qué no funciona. La respuesta es simple: si hay llaves, entonces no se está usando la forma simplificada y tendrás que agregar la palabra `return` para que la función devuelva un valor.
