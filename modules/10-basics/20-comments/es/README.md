
Además del código en sí, los archivos de código fuente pueden contener comentarios. Estos son textos que no forman parte del programa y son útiles para los programadores como notas. Con ellos se pueden agregar explicaciones sobre cómo funciona el código, qué errores corregir o qué agregar más adelante.

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
console.log('Soy el Rey'); // For Lannisters!
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
