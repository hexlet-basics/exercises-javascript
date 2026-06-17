FizzBuzz es una de las tareas de entrevista más conocidas para programadores principiantes. Se plantea para comprobar la capacidad de trabajar con bucles y condiciones. Implementa una función `fizzBuzz(n)` que devuelve una cadena con los números del 1 al `n`.

En este caso:

- si un número es divisible por 3, en su lugar se sustituye la palabra `"Fizz"`;
- si es divisible por 5, la palabra `"Buzz"`;
- si es divisible tanto por 3 como por 5, la palabra `"FizzBuzz"`.

Todos los elementos se unen con un espacio.

Ejemplo de llamada a la función:

```javascript
fizzBuzz(15);
// => '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz'
```

### Algoritmo

1. Declarar el elemento neutro de agregación (una cadena vacía).
2. Recorrer con un bucle `for` los números del 1 al `n`.
3. Comprobar el número según las condiciones de divisibilidad.
4. Añadir el resultado de cada iteración a la cadena final, separado por un espacio.
