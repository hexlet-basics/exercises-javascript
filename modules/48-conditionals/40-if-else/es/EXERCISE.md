
Implementa la función `normalizeUrl()`, que realiza lo que se conoce como normalización de datos. Recibe una dirección de un sitio web y devuelve la misma con *https://* al principio.

La función acepta direcciones en forma de *DIRECCIÓN* o *https://DIRECCIÓN*, pero siempre devuelve la dirección en forma de *https://DIRECCIÓN*.

Puedes usar el método [startsWith()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/startsWith) para verificar si una cadena comienza con el prefijo *https://*. Luego, en base a eso, agregar o no agregar *https://*.

Ejemplos de llamadas:

```javascript
normalizeUrl("google.com"); // "https://google.com"
normalizeUrl("https://ai.fi"); // "https://ai.fi"
```
