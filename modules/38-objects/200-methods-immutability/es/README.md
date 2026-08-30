¿Qué se imprimirá en la pantalla en la última llamada?

```javascript
const name = "Tirion";
console.log(name.toUpperCase()); // => TIRION
console.log(name); // => ?
```

La respuesta a esta pregunta depende de cómo hayas entendido la lección sobre la inmutabilidad de los tipos de datos primitivos. La llamada al método `.toUpperCase()` devuelve un nuevo valor en el que todas las letras están convertidas a mayúsculas, pero no cambia (y no puede hacerlo) la cadena original. Por lo tanto, dentro de la constante (o variable, no importa) se mantendrá el valor antiguo: `'Tirion'`. Esta lógica es válida para los métodos de todos los tipos primitivos.

## Los métodos no cambian el original

Cuando llamamos a un método de una cadena, parece que la estamos cambiando. En realidad el método **devuelve una cadena nueva**, y el original queda igual:

```javascript
const text = "hexlet";
text.toUpperCase();
console.log(text); // => hexlet
```

Para no perder el resultado, hay que guardarlo en una variable:

```javascript
const text = "hexlet";
const upperText = text.toUpperCase();
console.log(upperText); // => HEXLET
```

Si no se guarda el resultado del método, simplemente se pierde. Los demás métodos funcionan igual. Por ejemplo, `trim()` devuelve una cadena nueva sin espacios en los extremos, y la original queda igual:

```javascript
const text = "   hi   ";
const cleaned = text.trim();
console.log(cleaned); // => 'hi', sin espacios
console.log(text); // => '   hi   ', la cadena no cambió
```

Más aún, intentar cambiar el valor de una propiedad tampoco lleva a nada:

```javascript
const name = "Tirion";
console.log(name.length); // => 6
name.length = 100;
console.log(name.length); // => 6
```

Está hecho a propósito: los valores primitivos no se pueden modificar después de crearlos. Estropear una cadena por accidente es imposible, y el motor puede reutilizar en memoria las cadenas iguales, ahorrando recursos.

## Reasignar la variable

En lugar de cambiar el valor, se lo puede _reemplazar_. Para eso hace falta una variable (`let`):

```javascript
let name = "Tirion";
name = name.toUpperCase();
console.log(name); // => TIRION
```

Escribir el resultado de vuelta en la misma variable es apropiado cuando la esencia de los datos no cambia. Después de `trim()` sigue siendo el mismo texto, solo más limpio. Pero si el resultado del método representa otra entidad, es mejor darle un nombre aparte:

```javascript
const fullName = "John Doe";
const headerName = fullName.toUpperCase();
```

`fullName` es el nombre de una persona, `headerName` es su variante para un encabezado. Son cosas distintas, y guardarlas en una sola variable sería confuso. El nombre de la variable debe reflejar el sentido de los datos que contiene.
