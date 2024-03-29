Ahora que ya hemos aprendido a escribir programas simples, podemos hablar un poco sobre cómo hacer esta tarea.

El código del programa debe ser formateado de una manera específica para que sea lo suficientemente comprensible y fácil de mantener. Los conjuntos de reglas especiales, llamados estándares, describen varios aspectos de la escritura de código. En JavaScript, el estándar más común es el estándar de [AirBnb](https://github.com/airbnb/javascript).

En cualquier lenguaje de programación, existen utilidades llamadas **linters**. Estas verifican el código para asegurarse de que cumpla con los estándares. En JavaScript, esto se hace con [eslint](https://eslint.org/).

Echa un vistazo al ejemplo del tema anterior:

```javascript
console.log(8/2+5 - -3 / 2); // => 10.5
```

El linter mostrará errores relacionados con la violación de varias reglas:

  * [space-infix-ops](https://eslint.org/docs/rules/space-infix-ops) – Falta de espacios entre el operador y los operandos.
  * [no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators) – Según el estándar, no se puede escribir código en el que diferentes operaciones se utilicen en una misma expresión sin separación explícita mediante paréntesis.

En la lección anterior, reconocimos que esta abundancia de números y símbolos puede ser confusa, por lo que decidimos agregar paréntesis solamente para facilitar la lectura:

```javascript
console.log(((8 / 2) + 5) - (-3 / 2)); // => 10.5
```

Esta versión no viola las reglas y el linter no mostrará errores.

En el ejercicio de la lección anterior, probablemente obtuviste algo como esto:

```javascript
console.log(70 * (3 + 4) / (8 + 2));
```

¿Hay alguna violación del estándar aquí?

Desafortunadamente, sí. En este caso, las operaciones `*` y `/` están en la misma expresión sin separación mediante paréntesis. Puedes resolver este problema agregando paréntesis adicionales. Sin embargo, en algún momento, la cantidad de paréntesis puede ser tan grande que el código se vuelva incómodo e incomprensible nuevamente. En ese momento, será más razonable dividir la expresión en partes separadas. Aprenderemos a hacer esto en las próximas lecciones.

[no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators) es solamente una de muchas reglas. Otras reglas describen la indentación, los nombres de las entidades creadas, los paréntesis, las operaciones matemáticas, la longitud de las cadenas y muchos otros aspectos. Cada regla individual puede parecer pequeña e insignificante, pero juntas forman la base de un buen código.

Actualmente, el sitio no verificará tu código con el linter, pero en tus futuras prácticas en [Hexlet](https://ru.hexlet.io) y en el desarrollo real, el linter funcionará y te informará sobre las violaciones.
