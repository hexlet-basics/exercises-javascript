
Además del código, los archivos de código fuente pueden contener comentarios. Estos son textos que no forman parte del programa y son útiles para los programadores como notas. Con ellos se pueden agregar explicaciones sobre cómo funciona el código, qué errores hay que corregir aquí o recordatorios de agregar algo más adelante.

```javascript
// Eliminar la línea de abajo después de implementar la tarea de registro
console.log(10);
```

Los comentarios en JavaScript pueden ser de dos tipos:

## Comentarios de una línea

Los *comentarios de una línea* comienzan con `//`. Después de estos dos caracteres puede seguir cualquier texto, y toda la línea no será analizada ni ejecutada.

Un comentario puede ocupar toda una línea. Si una línea no es suficiente, se pueden crear varios comentarios:

```javascript
// For Winterfell!
// For Lanisters!
```

Un comentario puede estar en una línea después de algún código:

```javascript
console.log('I am the King'); // For Lannisters!
```

## Comentarios de varias líneas

Los *comentarios de varias líneas* comienzan con `/*` y terminan con `*/`.

```javascript
/*
  The night is dark and
  full of terrors.
*/
console.log('I am the King');
```

Estos comentarios generalmente se utilizan para la documentación del código, por ejemplo, en el caso de las funciones.

## Comentarios de servicio

Durante el trabajo, te encontrarás con un código así en nuestro editor:

```javascript
// BEGIN

// END
```

*BEGIN* y *END* aquí son comentarios comunes que no afectan en absoluto el funcionamiento del programa. Indican dónde escribir el código de la tarea.

```javascript
// BEGIN
<aquí tu solución>
// END
```

Cuando veas *BEGIN* y *END*, escribe tu código entre ellos y deja el resto sin cambios.
