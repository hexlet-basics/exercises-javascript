En matemáticas existen distintos tipos de números. Por ejemplo:

- Naturales: números enteros positivos: 1, 2, 3, etc.
- Racionales: números fraccionarios que se pueden representar como una división, por ejemplo: 0.5, 1.75, 3.14.

Desde el punto de vista de las matemáticas todo es sencillo. Pero desde el punto de vista de la computadora, entre estos tipos de números hay un verdadero abismo. Intenta resolver mentalmente: ¿cuánto es `0.2` + `0.1`? Obviamente, `0.3`. Pero esto es lo que dirá JavaScript:

```javascript
console.log(0.2 + 0.1); // => 0.30000000000000004
```

En lugar del habitual 0.3 obtenemos 0.30000000000000004.

```text
Expectativa: 0.1 + 0.2  →  0.3
Realidad:    0.1 + 0.2  →  0.30000000000000004
                             └── error de almacenamiento
```

## ¿Por qué ocurre esto?

Este comportamiento es propio de JavaScript, Python, C++ y la mayoría de los demás lenguajes de programación.

La razón está en cómo está construida la computadora. La computadora trabaja con una memoria limitada, mientras que los números racionales son infinitamente precisos. Entre 0.1 y 0.2 se pueden colocar infinitos números más. Pero la computadora no puede almacenar el infinito. Aproxima el número, intentando ajustarlo a la cantidad de bits disponibles.

Estos valores aproximados se llaman números de punto flotante (floating point numbers). Su almacenamiento y los cálculos con ellos siguen reglas estrictas descritas en un estándar especial, IEEE 754, en el que se basan la mayoría de los lenguajes de programación.

## Cuándo aparecen estos números

Los números de punto flotante aparecen en los programas con más frecuencia de lo que podría parecer. Estos son los casos principales:

- Cuando escribes explícitamente un número fraccionario, por ejemplo 0.1, 2.5, 3.14.
- Cuando realizas una división, incluso si divides dos números enteros:

```javascript
console.log(1 / 2); // => 0.5
console.log(2 / 3); // => 0.6666666666666666
```

Aunque el resultado parezca «bonito», internamente sigue estando representado como un valor aproximado. Algunas fracciones, como 1 / 3, no se pueden representar de forma exacta en el sistema binario, por lo que su precisión siempre es limitada.

## Dónde esto es crítico y cómo se trabaja con ello

Por lo general, un pequeño error no molesta. Pero en los cálculos financieros, en las tareas científicas y de ingeniería, así como al comparar resultados con precisión, puede convertirse en un problema. Por ejemplo, un error de una fracción de centavo puede dar una suma final incorrecta, y una larga cadena de cálculos puede acumular inexactitud poco a poco.

En los programas reales esto se trata de distintas maneras. El dinero suele almacenarse en las unidades mínimas, por ejemplo en centavos, es decir, se usan números enteros en lugar de fraccionarios. En otros casos el resultado se redondea a la cantidad de dígitos necesaria, se comparan los números con un error admisible o se utilizan bibliotecas especiales para cálculos precisos.

## Qué hay que recordar

Las operaciones con números de punto flotante no siempre son precisas, y esto es normal. Este comportamiento es propio de la mayoría de los lenguajes de programación y se explica por cómo está construida la memoria de la computadora. La precisión se puede controlar, por ejemplo mediante el redondeo o comparando los números con un error dado. Y al trabajar con dinero, mediciones precisas o cálculos científicos, es mejor usar tipos de datos especiales que aseguren el control sobre la precisión.
