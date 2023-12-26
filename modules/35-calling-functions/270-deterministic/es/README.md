
Independientemente del lenguaje de programación utilizado, las funciones dentro de él tienen algunas propiedades fundamentales. Conocer estas propiedades facilita predecir el comportamiento de las funciones, las formas de probarlas y el lugar donde se utilizan. Una de estas propiedades es el determinismo. Una función se considera determinista cuando devuelve el mismo resultado para los mismos parámetros de entrada. Por ejemplo, la función que cuenta la cantidad de caracteres es determinista:

```javascript
import { length } from 'hexlet-basics/string';

length('hexlet'); // 6
length('hexlet'); // 6

length('wow'); // 3
length('wow'); // 3
```

No importa cuántas veces llamemos a esta función pasando el valor `'hexlet'`, siempre devolverá `6`. Por otro lado, una función que devuelve un número aleatorio no es determinista, ya que para una misma entrada (incluso si está vacía, es decir, no se aceptan parámetros) siempre obtendremos un resultado diferente. No importa cuán diferente sea, incluso si una de cada millón de llamadas devuelve algo diferente, esta función se considera automáticamente no determinista.

```javascript
// Función que devuelve un número aleatorio
Math.random(); // 0.09856613113197676
Math.random(); // 0.8839904367241888
```

¿Por qué es importante saber esto? El determinismo afecta seriamente muchos aspectos. Las funciones deterministas son convenientes para trabajar, son fáciles de optimizar y de probar. Si es posible hacer que una función sea determinista, es mejor hacerlo así.
