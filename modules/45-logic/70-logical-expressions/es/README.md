
Mira el código a continuación e intenta adivinar qué se imprimirá en la pantalla:

```javascript
console.log(0 || 1);
```

Respuesta correcta:

<pre class='hexlet-basics-output'>
  1
</pre>

El operador **OR** funciona de tal manera que su ejecución (de izquierda a derecha) se detiene y devuelve el resultado del primer argumento que se pueda convertir en `true`.

A continuación, un ejemplo con el operador **AND**:

```javascript
console.log(0 && 1);
```

<pre class='hexlet-basics-output'>
  0
</pre>

El operador **AND** funciona de tal manera que su ejecución (de izquierda a derecha) se detiene y devuelve el resultado del primer argumento que se pueda convertir en `false`.

En JavaScript hay dos reglas simples para las conversiones:

* `0`, `''`, `undefined`, `NaN`, `null` se convierten en `false`. Estos valores se llaman [falsy](https://developer.mozilla.org/es/docs/Glossary/Falsy).
* Todo lo demás se convierte en `true`.

Esto se utiliza activamente en el desarrollo, por ejemplo, para definir un valor predeterminado:

```javascript
const value = name || '';
// Ejemplos
234 || ''; // 234
'hexlet' || ''; // 'hexlet'
undefined || ''; // ''
```

Si `name` toma uno de los valores falsy, la constante `value` se le asignará una cadena vacía. En este caso, en el código posterior, podemos trabajar con `value` como si fuera una cadena.

Pero aquí hay un posible error. Si `name` contiene un valor falsy y la asignación de valores a la constante `value` como `0`, `undefined`, `NaN` o `null` es aceptable, entonces el código anterior dejará de funcionar correctamente:

```javascript
// Oops
false || ''; // ''
0 || ''; // ''
undefined || ''; // ''
```

En una de las lecciones, vimos los operadores de comparación `===` y `!==` y mencionamos que en JavaScript también hay operadores `==` y `!=`, pero no se recomienda usarlos. Las diferencias radican precisamente en la conversión de tipos:

```javascript
console.log('' === false); // => false
console.log('' == false);  // => true
```

La cadena vacía y `false` son valores diferentes, por lo que el operador `===` dice "¡falso! ¡no son iguales!".

Pero el operador `==` convierte los tipos, y desde su punto de vista, la cadena vacía y `false` son iguales.

Esta conversión es implícita, por lo que, si es posible, evita los operadores `==` y `!=`.

---

Recuerda la operación de negación:

```javascript
const answer = true;
console.log(!answer); // => false
```

La negación funciona dentro de las expresiones:

```javascript
!false || ''; // true
```

Si envuelves la expresión entre paréntesis y colocas `!` delante de ellos, se negará toda la expresión:

```javascript
// La expresión está entre paréntesis
console.log(!('' === false)); // => true
console.log(!('' == false));  // => false
```

Con una doble negación `!!`, el valor final es igual al valor inicial:

```javascript
const answer = true;
console.log(!!answer); // => true
```

Pero aquí puede haber una conversión de tipo adicional. Por lo tanto, el resultado de una doble negación siempre será un valor de tipo *booleano*. A veces se utiliza este truco para cambiar el tipo de datos.

## Error de selección

Imagina una tarea en la que necesitamos verificar si el valor es igual a uno u otro. Por ejemplo, la variable `value` debe contener uno de los dos valores: `first` o `second`. Los desarrolladores novatos a veces escriben esta expresión de la siguiente manera:

```javascript
value === ('first' || 'second')
```

En nuestra mente, más o menos nos lo imaginamos así, pero los lenguajes funcionan de manera diferente, por lo que este código dará un resultado incorrecto. ¿Cómo se debe leer correctamente? Debemos recordar la prioridad de las operaciones. Primero se evalúa todo lo que está entre paréntesis, es decir, `'first' || 'second'`. Si ejecutas este código en el repl, la salida será así:

```bash
node
'Welcome to Node.js v17.4.0.
> 'first' || 'second'
'first'
>
```

Ahora podemos reemplazar la expresión original por la parcialmente evaluada:

```javascript
value === 'first'
```

No es exactamente lo que esperábamos. Y ahora volvamos al principio y escribamos la verificación correctamente:

```javascript
// Los paréntesis no son necesarios,
// porque la prioridad de === es mayor que la de ||
value === 'first' || value === 'second'
```
