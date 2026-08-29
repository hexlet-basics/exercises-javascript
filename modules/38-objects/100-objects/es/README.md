JavaScript admite la programación orientada a objetos (POO): de forma muy simplificada, es un enfoque en el que operamos no con datos y funciones, sino con objetos y métodos. No pensamos detenernos en detalle en este tema en este curso, porque es amplio y su comprensión requiere cierto nivel de preparación. Ignorarlo por completo es imposible, porque los objetos aparecen literalmente de inmediato, en cuanto empezamos a escribir código en JavaScript. Por eso lo abordaremos, pero solo en la medida necesaria para las tareas actuales.

Hasta este momento trabajábamos con datos y les aplicábamos funciones. En la POO, en lugar de datos tenemos objetos sobre los que se llaman métodos. Por ejemplo, las cadenas en JavaScript son objetos y tienen un método `toUpperCase()`, que convierte todas las letras a mayúsculas.

```javascript
const name = "Robb";
console.log(name.toUpperCase()); // => ROBB
```

A diferencia de las funciones, los métodos se llaman *sobre un objeto*. Primero se escribe el objeto (un valor, una variable o una constante), y luego, después de un punto, la llamada al método. Aunque el método `toUpperCase()` no recibe argumentos, por dentro sabe sobre qué objeto se lo llama y tiene acceso al objeto mismo.

## Propiedades

Además de los métodos, los datos tienen propiedades. Una propiedad es un valor asociado a los datos, al que se accede con un punto justo después de la variable o la constante. Por ejemplo, las cadenas tienen una longitud: la propiedad `length`:

```javascript
const name = "Robb";
const len = name.length;
console.log(len); // => 4
```

En los módulos anteriores, para obtener la longitud de una cadena usábamos la función didáctica `length()` de la biblioteca `hexlet-basics/string`:

```javascript
import { length } from "hexlet-basics/string";

const name = "Robb";
console.log(length(name)); // => 4
```

Era un reemplazo temporal: en muchos lenguajes la longitud de una cadena se calcula realmente mediante una función especial. En JavaScript, en cambio, la longitud está incorporada directamente en el lenguaje como la propiedad `.length`. A partir de esta lección la función didáctica ya no hará falta: en todas partes usamos `.length`.

Las propiedades están asociadas a los datos de los que se obtienen. Para los tipos primitivos, todas las propiedades están descritas en la documentación, como por ejemplo en las [cadenas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String). Los números, en cambio, no tienen propiedades.

JavaScript permite acceder a propiedades que no existen (por ejemplo, por errores de escritura). En ese caso su valor es `undefined`:

```javascript
const name = "Robb";
console.log(name.whatIsThat); // => undefined
```

*Pregunta de autoevaluación. ¿Qué imprimirá el código `console.log(name[name.length])` para el `name` definido más arriba? ¿Por qué es esa la respuesta?*

<details>
<summary>Respuesta</summary>

El código imprimirá `undefined`, porque se está accediendo a un índice que queda fuera del límite de la cadena. En este caso `name.length` es 4, y el índice del último carácter de la cadena es 3.

</details>

## Métodos de las cadenas

Los datos suelen tener bastantes más métodos que propiedades. Las cadenas tienen varias docenas; estos son algunos de ellos.

```javascript
// Convertir todas las letras a mayúsculas
console.log("hexlet".toUpperCase()); // => HEXLET

// Convertir todas las letras a minúsculas
console.log("HeXleT".toLowerCase()); // => hexlet

// Eliminar los espacios al principio y al final de la cadena
console.log("   hi   ".trim()); // => hi
```

Algunos métodos reciben parámetros. Por ejemplo, en el método `replace()` el primer parámetro contiene la subcadena que hay que reemplazar, y el segundo la cadena de reemplazo.

```javascript
const text = "abracadabra";

// Se reemplaza solo la primera aparición
console.log(text.replace("a", "o")); // => obracadabra
console.log(text.replace("abra", "!")); // => !cadabra
```

En JavaScript hay realmente muchos métodos, y no se aprenden de memoria. Normalmente los programadores, en el transcurso del trabajo, recuerdan qué operaciones necesitan y cómo se llaman aproximadamente esos métodos. Cuando surge una tarea, o recuerdan el método adecuado, o lo encuentran rápido en la documentación.

## Los números también tienen métodos

```javascript
const temperature = 22.93;
// Redondeo a un decimal
const roundedTemperature = temperature.toFixed(1);
// El método devuelve una cadena que contiene el número convertido
console.log(roundedTemperature); // => 22.9

// Directamente se puede llamar así
// Los paréntesis son obligatorios, de lo contrario no funcionará
(22.93).toFixed(1); // 22.9
```

Puede parecer que el método `toFixed()` pertenece al número mismo. En realidad, durante la llamada JavaScript envuelve el número en un objeto `Number`, que sí tiene ese método. Gracias a esa envoltura los métodos se llaman directamente sobre los números. Con las cadenas ocurre lo mismo, solo que el objeto se llama `String`.

## Método y función: comparación

Desde el punto de vista del código, los métodos y las funciones se comportan de forma parecida. Reciben valores y devuelven un resultado. Se diferencian solo en la **sintaxis** de la llamada.

```javascript
// Llamada a una función: nombre y argumentos entre paréntesis
Number("42");

// Llamada a un método: primero el valor, luego el punto
"hexlet".toUpperCase();
```

La función se llama por su nombre y existe por sí misma. El método es una operación incorporada en el valor mismo. Por debajo el valor se pasa hacia dentro, pero eso queda oculto para nosotros.

Ahora también se puede explicar el punto en la escritura `Math.pow(2, 3)`. `Math` es un objeto, un conjunto de operaciones matemáticas, y `pow` es su método. En una conversación esas operaciones suelen llamarse funciones, porque no están ligadas a ningún valor concreto, pero por la sintaxis de la llamada son métodos.

Surge una pregunta lógica: ¿para qué hacen falta los métodos, por qué no simplemente funciones? La cuestión es que no toda operación tiene relación con un valor concreto. Tomemos como ejemplo `Math.min()`, que encuentra el mínimo entre los números que se le pasan. Incorporarla a un número concreto, por ejemplo `(1).min(5)`, no es lógico: no pertenece a ninguno de ellos.

En cambio, `toUpperCase()` trabaja justamente con la cadena sobre la que se lo llama, y por eso es lógico que viva dentro de ella. En JavaScript han arraigado los dos enfoques, y en el código se usan activamente tanto las funciones normales como los métodos. Los pros y los contras de estos enfoques se explican en los cursos [dedicados a la POO](https://ru.hexlet.io/programs/js-oop).

## Los métodos devuelven valores

Igual que las funciones, los métodos **devuelven un resultado**. Se pueden usar dentro de expresiones.

```javascript
const name = "hexlet";
console.log(name.toUpperCase() + "!"); // => HEXLET!
```

Los métodos de las cadenas siempre devuelven una cadena nueva y dejan la original sin cambios. Ese comportamiento se llama inmutabilidad. Hablaremos de ello en la lección siguiente, pero por ahora es importante entender que la cadena queda igual y que el resultado del método es un valor nuevo.

```javascript
const name = "hexlet";
console.log(name.toUpperCase()); // => HEXLET
console.log(name); // => hexlet
```

## Propiedades y métodos en las expresiones

Las propiedades y los métodos son expresiones igual que las variables, las constantes o las llamadas a funciones. Se pueden usar en operaciones aritméticas y pasar como argumentos a otras funciones.

Uso en operaciones:

```javascript
const name = "Shaya";
console.log(name.length + 5); // => 10
console.log(`hi, ${name.toUpperCase()}!`); // => hi, SHAYA!
```

Uso como argumentos de funciones:

```javascript
const firstName = "Robb";
const lastName = "Shaya";
// Pasamos las propiedades directamente en la llamada a la función
console.log(Math.min(firstName.length, lastName.length)); // => 4
```

Esto permite escribir código compacto y expresivo, sin guardar los resultados intermedios en variables aparte.
