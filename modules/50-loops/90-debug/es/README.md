Incluso a los desarrolladores más experimentados rara vez les funciona el código a la perfección al primer intento. Cuanto más experimentado es el desarrollador, con más confianza lo **depura**, es decir, analiza los errores y los corrige.

La habilidad de depuración no aparece por sí sola. Hay que desarrollarla, y cuanto antes mejor. A lo largo del aprendizaje realizarás tareas y practicarás, y con el tiempo el análisis de errores se convertirá en un hábito.

## Cómo encontrar un error en el código

Depurar a base de prueba y error lleva mucho tiempo. Es mucho más productivo entender primero qué salió mal y luego corregir la causa. Todo trabajo con errores comienza con la comprensión.

Lo primero es estudiar la **pila de llamadas** (stack trace). Contiene una lista de todas las llamadas a funciones desde el punto del error hasta el inicio del programa. Muestra qué funciones se ejecutaron y dónde surgió el problema. Cada entrada indica un archivo, una línea y la función que se estaba ejecutando.

Imagina que escribiste código en un archivo `users.js` y llamaste a la función `main()`, que internamente llama a una `create()` inexistente:

```javascript
const main = () => {
  create();
};

main();
```

Al ejecutarlo verás una salida así:

```bash
ReferenceError: create is not defined
    at main (users.js:2:3)
    at users.js:5:1
```

La primera línea es el **mensaje de error**. Aquí `ReferenceError: create is not defined` dice que el nombre `create` no está definido. Este error suele significar un error tipográfico en el nombre.

Debajo está la propia pila de llamadas. Se ve que el programa llegó a `main()` (línea 5), dentro de ella llamó a `create()` (línea 2) y aquí se topó con el error. Cada entrada `at ...` indica un archivo y una línea.

## Tipos de errores

Los errores más comprensibles son los **errores de sintaxis**. Surgen cuando el código está mal formateado, por ejemplo, por un paréntesis sin cerrar o comillas que no coinciden. La salida siempre contiene `SyntaxError`:

```bash
console.log("Hello" + 'world);
                      ^^^^^^^^
SyntaxError: Invalid or unexpected token
```

Los más difíciles de corregir son los **errores de programación**. Entre ellos están llamar a una función inexistente, usar una variable no declarada o pasar argumentos de tipo incorrecto. Suelen aparecer en un lugar distinto al de la causa real, lo que dificulta el diagnóstico.

Los más difíciles de combatir son los **errores lógicos**. El programa funciona sin excepciones, pero produce un resultado incorrecto con ciertos datos de entrada. No hay ningún mensaje de error, solo una salida inesperada. Por ejemplo, una función que debería calcular la suma pero calcula la diferencia:

```javascript
// La función debería calcular la suma de los números, pero calcula la diferencia:
const sum = (a, b) => a - b;

// Con esta llamada el error no es evidente, porque
// tanto la suma como la resta dan el mismo resultado
sum(4, 0); // 4
```

## Métodos de depuración

En la base de cualquier método de depuración está la observación de las variables durante la ejecución. Veamos una función concreta.

A continuación, una función que calcula la suma de los números desde `start` hasta `finish`. Con `start=3` y `finish=5` debería calcular `3 + 4 + 5`.

```javascript
const sumOfSeries = (start, finish) => {
  let result = 0;
  let n = start;
  while (n < finish) {
    result = result + n;
    n = n + 1;
  }

  return result;
};
```

Las variables clave de esta función son `n` y `result`. Para encontrar el error, hay que ver qué valores toman en cada iteración.

Para ello existen los **depuradores visuales**. Se integran en los editores de código populares y permiten ejecutar el programa paso a paso, observando las variables en tiempo real. Puedes encontrar uno buscando «JavaScript debuggers» en Google.

En el entorno de Hexlet, en lugar de un depurador se usa la **impresión de depuración**. El principio es el mismo, solo que los valores de las variables se imprimen con el habitual `console.log`. Lo que se imprime aparece en la pestaña `OUTPUT`.

```javascript
const sumOfSeries = (start, finish) => {
  let result = 0;
  let n = start;
  while (n < finish) {
    console.log('new iteration !!!!');
    console.log(n);
    result = result + n;
    n = n + 1;
    console.log(result);
  }

  return result;
};

sumOfSeries(3, 5);

// new iteration !!!!
// 3
// 3
// new iteration !!!!
// 4
// 7
```

La salida muestra que hay una iteración menos de las necesarias. El cinco (`finish`) no entró en la suma. La condición usa `n < finish` en lugar de `n <= finish`. Hay que reemplazar el signo `<` por `<=`.

Los principiantes a menudo se molestan por los errores y se consideran descuidados. Todos cometen errores, tanto los junior como los senior. La diferencia está en con cuánta seguridad los encuentras.

Los principiantes piensan que un buen desarrollador mira el código y entiende de inmediato qué está mal. Esto rara vez funciona en la práctica. Un fragmento de código sin contexto dice muy poco. **Si quieres pedir consejo a un desarrollador experimentado, lo primero es mostrarle el mensaje de error.**
