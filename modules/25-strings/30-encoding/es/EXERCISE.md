
En JavaScript, puedes "solicitar" y mostrar en pantalla cualquier carácter de la codificación ASCII. Por ejemplo:

```javascript
console.log(String.fromCharCode(63));
```

Esto mostrará en pantalla el carácter con el número 63, que es el signo de interrogación `?`. De esta manera, puedes mostrar cualquier carácter.

https://replit.com/@hexlet/js-basics-strings-encoding

Encuentra una tabla de códigos ASCII en Internet. Puedes usar búsquedas como "tabla de códigos ASCII" o "ascii codes table". Por lo general, en estas tablas los códigos se muestran en varios sistemas de numeración: decimal, binario, octal y hexadecimal. Nos interesa el código decimal (*dec* o *decimal*).

Utilizando el ejemplo anterior y la tabla que encontraste, muestra en pantalla los caracteres `~`, `^` y `%` (cada uno en su propia línea).

(Por supuesto, puedes "engañar" las pruebas y simplemente hacer algo como `console.log('~')`, pero eso no sería interesante :)
