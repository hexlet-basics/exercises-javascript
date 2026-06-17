Ya sabemos que las expresiones pueden estar compuestas por varias operaciones. Pero si escribimos todo el cálculo en una sola línea larga, el código rápidamente se vuelve difícil de leer.

Por ejemplo, esta forma funciona:

```javascript
const yuansCount = 50 * 1.25 * 6.91;
console.log(yuansCount); // => 431.875
```

JavaScript evaluará fácilmente esta expresión. Pero para una persona ya no resulta tan cómodo leer este código. Surgen preguntas de inmediato:

- ¿Qué significa `1.25`?
- ¿Qué significa `6.91`?
- ¿Dónde termina un paso del cálculo y empieza el siguiente?

Para que estos cálculos sean más claros, las variables pueden usarse dentro de otras expresiones. Primero el programa guarda un resultado intermedio en una variable, y luego sustituye el valor de esa variable en el siguiente cálculo.

## Expresiones

Cualquier valor que se pueda calcular es una expresión. A una variable se le puede asignar una expresión, no solo un valor ya preparado.

```javascript
const sum = 3 + 4;          // => 7
const text = 'Hello' + '!'; // => 'Hello!'
const doubled = sum * 2;    // => 14
```

JavaScript primero evalúa la expresión a la derecha de `=`, y luego guarda el resultado en la variable a la izquierda.

## Conversión de moneda a través de una moneda intermedia

Imaginemos que necesitamos convertir euros a yuanes, pero el tipo de cambio directo no está disponible para nosotros. Entonces lo haremos en dos pasos: **euros → dólares → yuanes**. Así suelen funcionar los bancos al pagar compras en el extranjero.

### Paso 1. Euros → Dólares

Supongamos que el tipo de cambio es: 1 euro = 1.25 dólares. Queremos convertir 50 euros:

```javascript
const dollarsPerEuro = 1.25;
const dollarsCount = 50 * dollarsPerEuro;
console.log(dollarsCount); // => 62.5
```

En esta línea, `50 * dollarsPerEuro` es una expresión, y `dollarsCount` es la variable en la que se escribe el resultado. JavaScript primero evalúa la expresión, y solo después guarda el resultado en la variable.

Al motor le da igual cómo esté escrita la expresión:

```javascript
const dollarsCount = 62.5;
```

o

```javascript
const dollarsCount = 50 * dollarsPerEuro;
```

El resultado será el mismo. Pero para una persona la segunda opción es más útil: por el nombre `dollarsCount` se ve de inmediato que en este paso obtuvimos la cantidad en dólares.

### Paso 2. Dólares → Yuanes

Ahora convirtamos 50 euros a yuanes, usando el dólar como moneda intermedia. Supongamos que los tipos de cambio son: 1 dólar = 6.91 yuanes, 1 euro = 1.25 dólares.

```javascript
const dollarsPerEuro = 1.25;
const yuansPerDollar = 6.91;

const dollarsCount = 50 * dollarsPerEuro;
const yuansCount = dollarsCount * yuansPerDollar;

console.log(yuansCount);
```

Este código es más largo que la única línea `50 * 1.25 * 6.91`, pero es más fácil de leer:

- se ve que `1.25` es el tipo de cambio del euro al dólar;
- se ve que `6.91` es el tipo de cambio del dólar al yuan;
- se ve que `dollarsCount` es un resultado intermedio.

Esto se nota especialmente si no vuelves al código durante al menos una semana. Y ahora imagina que un proyecto tiene cientos de miles de líneas de código. Si en tales proyectos no hubiera variables y cálculos intermedios, sería imposible entenderlos.

## Qué hay que recordar

- Si una expresión resulta demasiado larga, es mejor dividirla en varios pasos.
- Las variables ayudan a guardar resultados intermedios y hacen los cálculos más claros.
- Cuando una variable se usa en una expresión, JavaScript sustituye su valor y continúa el cálculo.
