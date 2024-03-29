
Una característica interesante de algunas funciones es que pueden aceptar un número variable de parámetros. No estamos hablando de valores predeterminados. Mira este ejemplo:

```javascript
Math.max(1, 10, 3); // 10
```

La función `Math.max()` encuentra el valor máximo entre los parámetros proporcionados. ¿Cuántos parámetros crees que espera esta función? Si abrimos la documentación de esta función, veremos una construcción extraña:

  ```
  Math.max([value1[, value2[, ...]]])
  ```

  Esta notación indica que esta función acepta cualquier número de parámetros (e incluso puede ser llamada sin ellos). La opcionalidad de los parámetros se describe con corchetes *[ ]*, de la misma manera que se describen los parámetros opcionales que tienen valores predeterminados. La posibilidad de pasar cualquier número de parámetros está representada por esta parte *[, ...]*.

  ```javascript
  Math.max(1, -3, 2, 3, 2); // 3
  ```

  Todo lo que se indica entre corchetes no es obligatorio. En esta notación `Math.max([value1[, value2[, ...]]])`, hay varios corchetes y están anidados entre sí. Analicemos cada uno de ellos:

  * Los primeros corchetes contienen `[value1[, value2[, ...]]]`, lo que significa que se puede llamar a la función sin parámetros, ya que estos corchetes contienen todo lo que se pasa a la función. Si eliminamos todo el contenido de estos corchetes y los corchetes mismos, nos quedará `Math.max()` — una llamada sin parámetros.
  * Los segundos corchetes están anidados dentro de los primeros y contienen `[, value2[, ...]]`. Indican que si hemos especificado el primer parámetro, opcionalmente podemos especificar el segundo parámetro. Sin estos corchetes y su contenido, la notación sería `Math.max([value1])`.
  * Los terceros corchetes están anidados dentro de los segundos y contienen `[, ...]`. Los puntos suspensivos indican que puede haber cualquier número de parámetros. Si eliminamos estos corchetes y su contenido, obtendremos una notación como `Math.max([value1[, value2]])`.

  La coma está dentro de los corchetes, ya que si no especificamos un parámetro, la coma no es necesaria. De lo contrario, una llamada con un solo parámetro se vería así `Math.max(value1,)`.
