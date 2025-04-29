A nivel básico, las computadoras operan solamente con números. Incluso en aplicaciones de alto nivel, hay muchos números y operaciones dentro de ellas. Afortunadamente, para comenzar, es suficiente conocer la aritmética básica, así que empecemos por ahí.

En matemáticas, para sumar dos números, escribimos, por ejemplo, `3 + 4`. En programación, es lo mismo. Aquí hay un programa que suma dos números:

```javascript
// No olvides el punto y coma al final,
// ya que cada línea de código es una instrucción
3 + 4;
```

La instrucción `3 + 4;` hará que la computadora sume los números y obtenga el resultado. Si ejecutas este programa, no sucederá nada. O más precisamente, la computadora calculará la suma, pero eso es todo. El resultado de la suma no se utiliza de ninguna manera, por lo que este programa no es interesante. Necesitamos pedirle a la computadora que sume `3 + 4` **y** que haga algo con el resultado. Por ejemplo, mostrarlo en la pantalla:

```javascript
// Primero se calcula la suma,
// luego se pasa a la función de impresión
console.log(3 + 4);
```

Después de ejecutarlo, aparecerá el resultado en la pantalla:

<pre class='hexlet-basics-output'>
7
</pre>

Además de la suma, están disponibles las siguientes operaciones:

* `*` — multiplicación
* `/` — división
* `-` — resta
* `%` — [resto de la división](https://es.wikipedia.org/wiki/División_euclídea)
* `**` — potenciación

Ahora, vamos a mostrar en la pantalla el resultado de la división y luego el resultado de la potenciación:

```javascript
console.log(8 / 2);  // => 4
console.log(3 ** 2); // => 9
```

A veces, para mayor comodidad, mostraremos el resultado de la ejecución de las líneas de código en los comentarios, de esta manera: `=> RESULTADO`. Por ejemplo, `// => 4`.

La primera instrucción mostrará `4` en la pantalla (porque 8 / 2 es igual a 4), y la segunda instrucción mostrará 9 en la pantalla (porque 3<sup>2</sup> es igual a 9).
