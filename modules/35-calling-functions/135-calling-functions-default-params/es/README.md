Algunas funciones tienen **parámetros opcionales**. Eso significa que para ellos se ha fijado de antemano un valor por defecto, y al llamar a la función ese parámetro se puede omitir.

Veamos el método `toFixed()`, que redondea un número a una cantidad dada de decimales. `toFixed()` es un método, es decir, una función adjunta a un valor y llamada mediante el punto; los métodos los veremos en detalle en la lección sobre objetos.

```javascript
const result = (10.25).toFixed(1); // => '10.3'
```

Fíjate en las comillas del resultado: `toFixed()` devuelve una **cadena**, no un número, por eso no se puede usar directamente en cálculos posteriores.

Le pasamos un valor: la precisión del redondeo (1 decimal). Pero ese parámetro es opcional. Si no se indica, se usa el valor por defecto `0`, es decir, el redondeo a entero:

```javascript
console.log((10.25).toFixed()); // => '10'
```

Si hace falta otra precisión, se indica de forma explícita:

```javascript
console.log((3.14159).toFixed(2)); // => '3.14'
console.log((3.14159).toFixed(4)); // => '3.1416'
```

```text
(10.25).toFixed(1)  →  argumento: 1    →  '10.3'
(10.25).toFixed()   →  argumento: (0)  →  '10'
                                └── valor por defecto
```

La cantidad de parámetros opcionales depende de cada función, pero los obligatorios van siempre antes de los opcionales.

## La firma de una función

Cada función tiene una **firma**: la descripción de su nombre, sus parámetros y el orden en que se usan. La firma ayuda a entender qué datos espera la función y qué ocurrirá si los parámetros no se indican.

En la documentación, los parámetros opcionales se muestran a menudo entre corchetes. Por ejemplo, la firma de `toFixed`:

```text
toFixed([digits])
```

Aquí `digits` es la cantidad de decimales. Los corchetes significan que el parámetro es opcional; si no se indica, por defecto será `0`.

## Cómo trabajar con funciones nuevas

Cuando te encuentras con una función nueva, resulta cómodo seguir un patrón simple:

1. Abrir la documentación (por ejemplo, MDN) y buscar la firma de la función.
2. Mirar los ejemplos de uso.
3. Abrir la consola del navegador o de Node.js y probar a llamar a la función con distintos argumentos.

Este enfoque ayuda a entender rápidamente qué parámetros de la función son obligatorios y cuáles opcionales, y qué resultados devuelve.
