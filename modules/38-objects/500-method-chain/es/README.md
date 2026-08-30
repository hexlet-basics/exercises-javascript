
Los números tienen un método que los convierte en una cadena:

```javascript
const peopleCount = 5;
peopleCount.toString(); // 5
```

Intenta responder la siguiente pregunta, ¿funcionará el siguiente código y, de ser así, qué imprimirá en la pantalla?

```javascript
const name = "Tirion";
console.log(name.length.toString());
```

La sintaxis de varios puntos seguidos la vemos por primera vez, pero todas las operaciones que aparecen aquí nos son familiares. Todo lo que sucede en este código es la combinación de capacidades ya conocidas del lenguaje. Esto ocurre bastante a menudo en la programación. Incluso sin conocer la sintaxis, se pueden probar diferentes enfoques y hay una buena probabilidad de que funcionen.

La forma más sencilla de entender cómo funciona este código es dividir la cadena de llamadas en operaciones individuales:

```javascript
const name = "Tirion";
const len = name.length;
console.log(len.toString());
```

Estos ejemplos son completamente equivalentes. Podemos realizar operaciones secuencialmente con la creación intermedia de constantes, o podemos construir una cadena continua de propiedades y métodos. En las cadenas de llamadas, los cálculos siempre se realizan de izquierda a derecha. Cada método devuelve un valor nuevo, y el método siguiente se aplica ya a ese valor:

```text
' Hello, World! '.trim().toLowerCase().replace('world', 'js')
                  │       │             │
                  ↓       ↓             ↓
          'Hello, World!' │             │
                  'hello, world!'       │
                            'hello, js!'
```

Otro ejemplo para reforzar los conocimientos:

```javascript
const name = "Tirion";
console.log(name.toUpperCase().toLowerCase());
```

Este tipo de código requiere un poco de esfuerzo mental. Es importante entender que `.toLowerCase()` se aplica al resultado de llamar al método que está a la izquierda. Y el método `toUpperCase()` devuelve una cadena. Los principiantes a menudo cometen errores en las cadenas de llamadas, olvidando poner la llamada:

```javascript
const name = "Tirion";
// ¡Este código no funcionará correctamente!
console.log(name.toUpperCase.toLowerCase());
```

Siguiendo esta idea, es posible construir cadenas infinitamente largas (aunque en este caso, inútiles):

```javascript
// ¿Cuál es el resultado de esta llamada?
console.log(name.toUpperCase().toLowerCase().length.toString().length);
```

## La cadena después de un corte

Los métodos se pueden llamar también después de otras operaciones, por ejemplo después de un corte de la cadena:

```javascript
const text = "  Hello, Hexlet!  ";
// Quitamos los espacios, tomamos una subcadena y pasamos a minúsculas
console.log(text.trim().slice(7).toLowerCase()); // => hexlet!
```

Aquí primero se llama a `trim()`, que elimina los espacios. Después se toma el corte `slice(7)`, empezando por el octavo carácter. Y solo después de eso se llama a `toLowerCase()`. Esa forma de escribir se lee de izquierda a derecha y muestra todo el recorrido de transformación de los datos en una sola línea.

## Dónde termina la cadena

La cadena se puede continuar mientras el resultado siga siendo un valor que tenga los métodos necesarios. En cuanto un método o una propiedad devuelve un valor de otro tipo, el conjunto de métodos disponibles cambia:

```javascript
const text = "hexlet";
// .length devuelve un número — ya no tiene métodos de cadena
console.log(text.length.toUpperCase()); // TypeError: ... is not a function
```

El número `6`, que devolvió la propiedad `.length`, no sabe hacer `.toUpperCase()`: ese es un método de cadena. En cambio, el número tiene sus propios métodos, por ejemplo `.toString()`, y por eso `text.length.toString()` funciona. Es importante fijarse en qué tipo devuelve cada eslabón de la cadena.

*Con las funciones, este truco no funcionará, ya que en su uso normal se anidan unas dentro de otras f(f(f())), lo que dificulta mucho el análisis. Pero esto no significa que no se pueda hacer de manera elegante, y de hecho, se puede y se debe hacer. En otros lenguajes, esto se logra a través de la composición de funciones o el operador de canalización, que, por cierto, se está comenzando a usar gradualmente en el mismo JavaScript: <https://github.com/tc39/proposal-pipeline-operator.*>
