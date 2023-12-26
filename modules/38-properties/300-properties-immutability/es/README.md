
¿Qué se imprimirá en la pantalla en la última llamada?

```javascript
const name = 'Tirion';
console.log(name.toUpperCase()); // => TIRION
console.log(name); // => ?
```

La respuesta a esta pregunta depende de cómo hayas entendido la lección sobre la inmutabilidad de los tipos de datos primitivos. La llamada al método `.toUpperCase()` devuelve un nuevo valor en el que todas las letras están convertidas a mayúsculas, pero no cambia (y no puede hacerlo) la cadena original. Por lo tanto, dentro de la constante (o variable, no importa) se mantendrá el valor antiguo: `'Tirion'`. Esta lógica es válida para los métodos de todos los tipos de datos primitivos. Además, intentar cambiar el valor de una propiedad de estos datos no llevará a nada:

```javascript
const name = 'Tirion';
console.log(name.length); // => 6
name.length = 100;
console.log(name.length); // => 6
```

https://replit.com/@hexlet/js-properties-immutability

En lugar de cambiar el valor, se puede *reemplazar* el valor. Para ello, se necesitarán variables:

```javascript
let name = 'Tirion';
name = name.toUpperCase();
console.log(name); // => TIRION
```
