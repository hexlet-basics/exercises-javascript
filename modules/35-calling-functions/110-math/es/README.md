
La explicación de las funciones en JavaScript se complica un poco debido a la estructura del lenguaje. Inicialmente, JavaScript surgió en los navegadores y tenía capacidades muy limitadas en comparación con los lenguajes de propósito general. Con el tiempo, todo cambió: JavaScript se convirtió en un lenguaje poderoso que dominó el desarrollo del lado del cliente y se utiliza activamente en el servidor. Sin embargo, el legado aún persiste, ya que es necesario mantener la compatibilidad hacia atrás. Por lo tanto, hay algunas inconsistencias en algunos lugares que no se pueden explicar por el sistema: solamente se pueden ignorar y decir "así es como se desarrolló históricamente".

Estos "lugares" incluyen las funciones matemáticas. En la tarea anterior, utilizamos una función personalizada `pow()` (la agregamos a la práctica como creadores del curso), y ahora vamos a ver su versión incorporada en el propio lenguaje.

```javascript
Math.pow(2, 3); // 8
```

¿Qué es `Math`? Técnicamente, es un objeto accesible desde cualquier parte del programa, pero antes de hablar sobre objetos, hay que recorrer un largo camino. Por ahora, es suficiente recordar que las funciones para operaciones matemáticas se llaman a través de `Math.`. El hecho de tener este prefijo no afecta en absoluto el concepto de función que hemos visto anteriormente y que veremos más adelante.

La lista completa de funciones de Math está disponible en la [documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math). Hablaremos más adelante sobre cómo leerla correctamente.
