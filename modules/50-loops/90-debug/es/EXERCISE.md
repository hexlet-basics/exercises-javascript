Implementa la función `compress(str)` que comprime una cadena usando RLE (Run-Length Encoding).

Algoritmo: si un carácter se repite consecutivamente, se reemplaza por el carácter y la cantidad. Los caracteres individuales se escriben sin número.

```javascript
compress('aaabcccc'); // => 'a3bc4'
compress('abcd');      // => 'abcd'
compress('aabbaa');    // => 'a2b2a2'
compress('');          // => ''
```

Este algoritmo se utiliza en formatos reales de compresión de datos, por ejemplo, en antiguos protocolos de fax y archivos BMP.

### Algoritmo

1. Recorrer la cadena contando la cantidad de caracteres idénticos consecutivos.
2. Cuando el carácter cambie, escribir el carácter anterior y el contador (si es mayor que 1).
3. No olvidar procesar el último grupo después de que termine el bucle.
