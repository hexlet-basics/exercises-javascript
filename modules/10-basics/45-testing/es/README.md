
El sitio web verifica automáticamente tus soluciones. ¿Cómo funciona?

En el caso más simple, el sistema simplemente ejecuta tu código y verifica lo que se muestra en la pantalla. Luego lo compara con lo que "esperábamos" según la tarea.

En lecciones más avanzadas, escribirás funciones, que son pequeños programas que toman información del mundo exterior y realizan operaciones. La verificación de tus soluciones en estos casos es un poco más complicada: el sistema ejecuta tu solución y le pasa cierta información. El sistema también sabe qué respuesta debería dar la función correcta con esos datos de entrada.

Por ejemplo, si tu tarea es escribir una función que sume dos números, el sistema de verificación le pasará diferentes combinaciones de números y comparará la respuesta de tu función con las sumas reales. Si las respuestas coinciden en todos los casos, se considera que la solución es correcta.

Este enfoque se llama pruebas y se utiliza en el desarrollo diario real. Por lo general, el programador primero escribe una prueba, que es un programa de verificación, y luego escribe el programa que quería escribir. Durante el proceso, ejecuta las pruebas constantemente y verifica si se acerca a la solución.

Es por eso que nuestro sitio dice "Pruebas aprobadas" cuando resuelves correctamente un problema.

Aquí tienes un ejemplo sencillo: en una de las futuras lecciones, tendrás que escribir una función que realice cálculos y devuelva una respuesta. Supongamos que cometiste un pequeño error y la función devuelve un número incorrecto. El sistema responderá algo como esto:

<pre class='hexlet-basics-output'>
  ● test

  expect(received).toBe(expected) // Object.is equality

  Expected value to be:
    "Hello, World!"
  Received:
    "ello, World!"
</pre>

Expected es el valor esperado y Received es el valor que devolvió tu código.

Además de nuestras pruebas, es muy útil experimentar con el código en la consola del [navegador](https://developer.mozilla.org/es/docs/Tools/Consola_de_navegador). En cualquier situación en la que no entiendas algo o quieras probar diferentes formas de uso, no dudes en abrir la consola e ingresar el código allí. Sería ideal si ejecutas todo el código presente en las lecciones por tu cuenta. Además de la consola, es útil usar el servicio [repl.it](https://repl.it/languages/javascript).

---

A veces, durante la resolución de un problema, puede parecer que has hecho todo correctamente, pero el sistema "se pone caprichoso" y no acepta la solución. Este comportamiento es prácticamente inexistente. Las pruebas que no funcionan simplemente no pueden llegar al sitio, se ejecutan automáticamente después de cada cambio. En la gran mayoría de estos casos (y todos nuestros proyectos en conjunto han realizado millones de verificaciones durante muchos años), el error se encuentra en el código de la solución. Puede ser muy sutil, como haber ingresado accidentalmente una letra rusa en lugar de una letra en inglés, haber utilizado minúsculas en lugar de mayúsculas o haber olvidado poner una coma. Otros casos son más complicados. Es posible que tu solución funcione para un conjunto de datos de entrada, pero no funcione para otro. Por lo tanto, siempre lee atentamente la descripción del problema y los resultados de las pruebas. Casi seguro que habrá alguna indicación sobre el error.

Sin embargo, si estás seguro de que hay un error o has encontrado alguna imprecisión, siempre puedes señalarlo. Al final de cada teoría hay un enlace al contenido de la lección en GitHub (¡este proyecto está completamente  abierto!). Al ir allí, puedes escribir un issue, ver el contenido de las pruebas (donde se muestra cómo se llama tu código) e incluso enviar un pull request. Si esto aún te resulta confuso, únete a nuestra comunidad en [Telegram](https://t.me/hexletcommunity), allí en el canal *Feedback* siempre estaremos dispuestos a ayudarte.
