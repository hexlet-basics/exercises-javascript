Escribe una función `normalizeUrl(url)` que recibe una cadena con la dirección de un sitio web y devuelve una URL con el protocolo `https://`.

Si la cadena ya comienza con `https://` — devuélvela tal cual. Si no comienza con él — agrega `https://` al principio.

```javascript
normalizeUrl('https://hexlet.io'); // => 'https://hexlet.io'
normalizeUrl('hexlet.io');         // => 'https://hexlet.io'
```
