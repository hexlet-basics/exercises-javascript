
La suma, la concatenación, el cálculo del resto de la división y otras operaciones que hemos visto son capacidades bastante básicas de los lenguajes de programación. Las matemáticas no se limitan a la aritmética; también hay muchos otros campos con sus propias operaciones, como la geometría. Lo mismo ocurre con las cadenas de texto: se pueden invertir, cambiar el caso de las letras, eliminar caracteres innecesarios, y eso es solamente lo más básico. Y, finalmente, a un nivel más alto, existe la lógica aplicada a una aplicación específica. Los programas retiran dinero, calculan impuestos, generan informes. La cantidad de operaciones similares es infinita y es única para cada programa. Y todas ellas deben ser expresadas de alguna manera en el código.

Para expresar cualquier operación arbitraria en programación, existe el concepto de *función*. Las funciones pueden ser tanto incorporadas como añadidas por el programador. Ya estamos familiarizados con una función incorporada, que es `console.log()`.

Las funciones son una de las construcciones clave en la programación, sin ellas no se puede hacer prácticamente nada. Comenzamos a familiarizarnos con ellas lo antes posible, ya que el resto del material se basa en las funciones al máximo. Primero aprenderemos a utilizar las funciones ya creadas y luego aprenderemos a crear nuestras propias funciones.

Comenzaremos con funciones sencillas para trabajar con cadenas de texto. A continuación se muestra un ejemplo de llamada a la función `length()`, que cuenta la cantidad de caracteres en una cadena:

```javascript
// length es una función
import { length } from 'hexlet-basics/string';

// Llamada a la función length con el parámetro 'Hello!'
const result = length('Hello!');
console.log(result); // => 6
```

Un paréntesis. La primera línea de este código es la importación de una función desde otro módulo. Las importaciones y los módulos se estudian en Hexlet, aquí estarán presentes en la tarea "tal cual", ya que no se pueden utilizar las funciones definidas en otros archivos sin ellos. No te preocupes si no entiendes el significado de esta acción, puedes obtener más información al respecto en el curso [Introducción a la programación](https://codica.la/courses/introduction-to-programming).

Los parámetros (o argumentos) son la información que una función recibe al ser llamada. Es con base en esta información que la función, por lo general, realiza algún cálculo y devuelve un resultado.

Hemos creado la constante `result` y le hemos indicado al intérprete que guarde en ella el resultado **devuelto** por la función `length()` al ser llamada. En este sentido, las funciones son similares a las operaciones, siempre devuelven un resultado de su trabajo.

```javascript
// La llamada a length devuelve el resultado (la longitud de la cadena)
// que se guarda en la constante llamada resultado
const result = length('Hello!');
```

La expresión `length('Hello!')` significa que se está llamando a la función llamada *length*, a la cual se le ha pasado el parámetro `'Hello!'`. La función `length()` cuenta la longitud exacta de la cadena que se le ha pasado.

La llamada a una función siempre se indica con paréntesis `()`, que van justo después del nombre de la función. Entre los paréntesis puede haber cualquier cantidad de parámetros, o incluso ninguno. La cantidad depende de la función utilizada. Tomemos como ejemplo la función `pow()`, que eleva un número especificado a una potencia determinada. Esta función recibe dos parámetros y eleva el número pasado como primer parámetro a la potencia pasada como segundo parámetro.

```javascript
import { pow } from 'hexlet-basics/math';

// La llamada a pow(2, 3) devuelve el valor de 2 elevado a la 3ª potencia
const result = pow(2, 3); // 2 * 2 * 2
console.log(result); // => 8
```

En resumen, los operadores y las funciones son lo mismo. La diferencia clave radica en cómo se escriben. Si imaginamos (hipotéticamente) la suma como una función, se vería así:

```javascript
// Suma normal
3 + 5; // 8
// Suma representada como función
// Parece extraño, pero transmite el significado de las funciones
+(3, 5);
```

## Resumen

Las funciones se llaman y devuelven un resultado, que luego se puede utilizar en cálculos posteriores o, por ejemplo, mostrar en pantalla.

Pregunta de autoevaluación. ¿Cómo se puede saber qué devuelve la llamada a la función `console.log()`? Compruébalo.

<details>
<summary>Respuesta</summary>

La llamada a la función `console.log()` devuelve `undefined`.

</details>
