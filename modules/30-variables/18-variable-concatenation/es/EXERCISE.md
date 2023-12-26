
Los sitios web envían constantemente correos electrónicos a sus usuarios. Una tarea típica es enviar automáticamente un correo electrónico personalizado, donde el título contendrá el nombre del usuario. Si en algún lugar de la base de datos del sitio se almacena el nombre de la persona como una cadena, la tarea de generar el título se reduce a la concatenación: por ejemplo, es necesario unir la cadena `Hola` con la cadena que contiene el nombre.

Escribe un programa que genere el título y el cuerpo del correo electrónico utilizando variables ya definidas, y muestra las cadenas resultantes en la pantalla.

Para el título, utiliza las variables `firstname` y `greeting`, seguidas de una coma y un signo de exclamación. Muestra esto en la pantalla en el orden correcto.

Para el cuerpo del correo, utiliza las variables `info` e `intro`, asegurándote de que la segunda oración esté en una nueva línea.

El resultado en la pantalla se verá así:

<pre class='hexlet-basics-output'>
Hello, Joffrey!
Here is important information about your account security.
We couldn't verify your mother's maiden name.
</pre>

Realiza la tarea usando solamente dos `console.log()`.
