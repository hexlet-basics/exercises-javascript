
Las funciones que definimos en las lecciones anteriores terminaban su ejecución imprimiendo datos en la pantalla:

```javascript
const greeting = () => {
  console.log('Hello, Hexlet!');
};
```

Sin embargo, este tipo de funciones tienen un uso limitado, ya que no se puede utilizar el resultado de su ejecución en el programa. Vamos a ver esto en un ejemplo.

Tomemos la tarea de procesar direcciones de correo electrónico. Cuando un usuario se registra en un sitio web, puede ingresar su correo electrónico de diferentes maneras:

* Añadiendo espacios en blanco al principio o al final `_support@hexlet.io__`
* Usando letras en diferentes mayúsculas y minúsculas `SUPPORT@hexlet.io`

Si guardamos la dirección de correo electrónico en esta forma en la base de datos, es probable que el usuario no pueda iniciar sesión en el sitio web, ya que ingresará la dirección sin espacios y con letras en mayúsculas diferentes. Para evitar esto, es necesario preparar la dirección de correo electrónico antes de guardarla en la base de datos. Se debe convertir a minúsculas y eliminar espacios en blanco al principio y al final de la cadena. Esta tarea se puede resolver en un par de líneas de código:

```javascript
const saveEmail = () => {
  // En realidad, el correo electrónico proviene de un formulario
  const email = '  SuppORT@hexlet.IO';
  // Eliminamos espacios en blanco al principio y al final
  const trimmedEmail = email.trim();
  const preparedEmail = trimmedEmail.toLowerCase();
  console.log(preparedEmail);
  // Aquí iría la escritura en la base de datos
};
```

Este código es posible gracias al retorno de valores. Los métodos `trim()` y `toLowerCase()` no imprimen nada en la pantalla (en la consola), sino que **devuelven** el resultado de su ejecución. Por lo tanto, podemos almacenar el resultado en constantes. Si en lugar de esto imprimieran en la pantalla, no podríamos asignar el resultado de su ejecución a una constante, lo cual es lo que ocurre con la función `greeting()` que se mostró anteriormente:

```javascript
const message = greeting();
console.log(message); // => undefined
```

Cambiaremos la función `greeting()` para que en lugar de imprimir el mensaje, retorne el mensaje. Para lograrlo, debemos usar la palabra clave `return` en lugar de imprimir en la pantalla:

```javascript
const greeting = () => {
  return 'Hello, Hexlet!';
};
```

`return` es una instrucción especial que toma la expresión que se encuentra a la derecha y la devuelve al código que llamó a la función. Tan pronto como JavaScript encuentra la instrucción `return`, la ejecución de la función se detiene.

```javascript
// Ahora podemos usar el resultado de la función
const message = greeting();
console.log(message); // => Hello, Hexlet!
// Incluso podemos realizar acciones en el resultado
console.log(message.toUpperCase()); // => HELLO, HEXLET!
```

Cualquier código después de la instrucción `return` no se ejecuta:

```javascript
const greetingWithCodeAfterReturn = () => {
  return 'Hello, Hexlet!';
  console.log('Nunca me ejecutaré');
};
```

Incluso si una función devuelve un valor, eso no limita la posibilidad de imprimir en la pantalla. Además de retornar valores, también podemos imprimir:

```javascript
const greetingWithReturnAndPrinting = () => {
  console.log('Apareceré en la consola');
  return 'Hello, Hexlet!';
};

// Esto imprimirá el texto en la pantalla y también devolverá el valor
const message = greetingWithReturnAndPrinting ();
```

No solo se pueden retornar valores concretos. Dado que `return` funciona con expresiones, casi cualquier cosa puede estar a la derecha de él. Sin embargo, siempre es importante mantener el código legible:

```javascript
const greeting = () => {
  const message = 'Hello, Hexlet!';
  return message;
};
```

En este ejemplo, no estamos retornando la variable en sí, sino el valor que contiene. A continuación, un ejemplo con cálculos:

```javascript
const doubleFive = () => {
  // o return 5 + 5
  const result = 5 + 5;
  return result;
};
```

Pregunta de autocomprobación. ¿Qué devolverá la función `run()`, definida abajo, cuando se le llame?

```javascript
// Definición
const run = () => {
  return 5;
  return 10;
};

// ¿Qué se imprimirá en la pantalla?
console.log(run());
```

<details>
<summary>Respuesta</summary>

En la pantalla se imprimirá `5`.

</details>

https://replit.com/@hexlet/js-basics-functions-return
