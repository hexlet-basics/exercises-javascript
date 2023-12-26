
La función `Math.random()` devuelve un número aleatorio entre 0 y 1 con varios dígitos decimales. Pero para atender problemas reales, a veces necesitamos obtener números enteros aleatorios, por ejemplo, en el rango de 0 a 10. Implementa el código que imprime precisamente esos números en la pantalla. Para este problema, necesitarás las funciones [Math.random()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random) y [Math.round()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round).

Intenta resolver este ejercicio en una sola línea.

## Algoritmo

Dado que `Math.random()` devuelve números en el rango de 0 a 1, para obtener números en el rango de 0 a 10, debemos multiplicar por 10. Luego, el número resultante se redondea y así obtenemos lo que necesitamos.
