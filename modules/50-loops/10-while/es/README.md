
Los programas que escribimos se vuelven cada vez más complejos y extensos. Aunque todavía están muy lejos de ser programas reales, que pueden tener decenas, cientos e incluso millones de líneas de código, la complejidad actual puede ser desafiante para aquellos sin experiencia. A partir de esta lección, entraremos en uno de los temas básicos más desafiantes de la programación: los bucles.

Todas las aplicaciones de software cumplen propósitos muy prácticos. Ayudan a gestionar a los empleados, las finanzas y, en última instancia, entretienen al público. A pesar de las diferencias, todos estos programas ejecutan algoritmos incorporados en ellos, y estos algoritmos tienden a ser muy similares entre sí. ¿Qué es un algoritmo? Un algoritmo es una secuencia de pasos (instrucciones) que nos lleva a un resultado esperado. En teoría, esta descripción podría aplicarse a cualquier programa, pero generalmente se refiere a algo más específico.

Imagina que tienes un libro y quieres encontrar una frase específica dentro de él. Conoces la frase, pero no sabes en qué página está. ¿Cómo encontrarías la página correcta? El enfoque más simple (aunque lento) sería revisar cada página secuencialmente hasta encontrarla. En el peor de los casos, tendrías que revisar todas las páginas, pero de todos modos obtendrías el resultado deseado. Esto es lo que se llama un algoritmo. Involucra verificaciones lógicas (¿encontraste la frase?) y la iteración a través de las páginas. Aunque el número de páginas que tendrías que revisar no se conoce de antemano, el proceso de revisión se realiza de la misma manera en cada iteración. Aquí es donde los bucles entran en juego. Cada repetición se llama una iteración.

Supongamos que queremos escribir una función que muestre en pantalla todos los números del 1 al número especificado (usando un argumento):

```javascript
printNumbers(3);
// => 1
// => 2
// => 3
```

Esta función no puede implementarse utilizando los conceptos que hemos aprendido hasta ahora, ya que el número de impresiones no es conocido de antemano. Sin embargo, con los bucles esto no es un problema:

```javascript
const printNumbers = (lastNumber) => {
  // i abreviatura de índice (número de serie)
  // se usa por convención común en muchos idiomas
  // como contador de bucle

  while (i <= lastNumber) {
    console.log(i);
    i = i + 1;
  }
  console.log('finished!');
};

printNumbers(3);
```

<pre class='hexlet-basics-output'>
1
2
3
finished!
</pre>

En el código de la función, se utiliza un bucle `while`. Este bucle consta de tres elementos:

* La palabra clave `while`. Aunque se parece a una llamada de función, no es lo mismo.
* El predicado. La condición especificada entre paréntesis después de `while`. Esta condición se evalúa y se verifica antes de ejecutar el cuerpo del bucle en cada iteración.
* El cuerpo del bucle. El bloque de código dentro de las llaves. Este bloque es similar a los bloques en las funciones. Cualquier constante o variable definida dentro de este bloque sólo es visible dentro de este bloque.

La estructura se lee así: "mientras la condición (predicado) `i <= lastNumber` sea verdadera, ejecutar lo que está en el cuerpo del bucle". Analicemos cómo funciona este código para la llamada `printNumbers(3)`:

```javascript
// Se inicializa i
let i = 1;

// El predicado es verdadero, por lo que se ejecuta el cuerpo del bucle
while (1 <= 3)
// console.log(1);
// i = 1 + 1;

// Se ha completado el cuerpo del bucle, por lo que se regresa al inicio
while (2 <= 3)
// console.log(2);
// i = 2 + 1;

// Se ha completado el cuerpo del bucle, por lo que se regresa al inicio
while (3 <= 3)
// console.log(3);
// i = 3 + 1;

// El predicado es falso, por lo que se sale del bucle
while (4 <= 3)

// console.log('finished!');
// En este punto, i es igual a 4, pero ya no lo necesitamos
// la función termina
```

Lo más importante en un bucle es asegurarse de que termine (es decir, salir del bucle). El proceso que impulsa el bucle debe detenerse eventualmente. La responsabilidad de detener el bucle recae completamente en el programador. Por lo general, esto se logra mediante la introducción de una variable llamada "contador de bucle". Inicialmente, el contador se establece en su valor inicial. Luego, en el predicado del bucle, se verifica si el contador ha alcanzado su valor máximo. Finalmente, el contador se actualiza en el cuerpo del bucle (por ejemplo, `i = i + 1`).

Aquí es donde los novatos suelen cometer errores. Por ejemplo, olvidar actualizar el contador o verificar incorrectamente el predicado puede provocar un bucle infinito. Esto significa que el bucle seguirá ejecutándose indefinidamente y el programa nunca se detendrá. En este caso, a menudo es necesario detener el programa manualmente (quien sabe, tal vez cuando las aplicaciones reales se bloquean, están atrapadas en un bucle infinito).

```javascript
const printNumbers = (lastNumber) => {
  let i = 1;

  // Este bucle nunca se detendrá
  // y siempre imprimirá el mismo valor
  while (i <= lastNumber) {
    console.log(i);
  }
  console.log('finished!');
};
```

En algunos casos, los bucles infinitos pueden ser útiles. No discutiremos esos casos aquí, pero es bueno saber cómo se ve el código:

```javascript
while (true) {
  // Hacer algo
}
```

En resumen, ¿cuándo se necesitan bucles y cuándo se pueden evitar? No se puede evitar usar bucles cuando el algoritmo para resolver un problema requiere repetir ciertas acciones, como en el ejemplo del libro, y no se conoce de antemano cuántas operaciones se requerirán.
