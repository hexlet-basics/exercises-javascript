
El trabajo con bucles normalmente se reduce a dos escenarios:

1. Agregación. Acumular un resultado durante las iteraciones y trabajar con él después del bucle. Invertir una cadena es precisamente este tipo de caso.
2. Ejecutar el bucle hasta alcanzar el resultado necesario y salir. Por ejemplo, la tarea de buscar números primos. Recordemos que un número primo es un número que se divide sin resto solo por sí mismo y por uno.

Veamos un algoritmo sencillo para comprobar si un número es primo. Dividiremos el número buscado `x` por todos los números del rango de dos a `x - 1` y observaremos el resto de la división. Si en este rango no se encuentra ningún divisor que divida `x` sin resto, entonces tenemos un número primo.

## Comprobar si 5 es primo: un análisis paso a paso

1. Tomamos el número `x = 5`. Buscamos los posibles divisores en el rango de 2 a `x - 1`, es decir, de 2 a 4.
2. Dividimos 5 entre 2. El resto es 1 — no se encontró divisor, continuamos.
3. Dividimos 5 entre 3. El resto es 2 — no se encontró divisor, continuamos.
4. Dividimos 5 entre 4. El resto es 1 — no se encontró divisor, terminamos la búsqueda.

Resultado: en el rango 2…4 no se encontró ningún número por el que 5 se divida sin resto. Por lo tanto, 5 es un número primo.

Si lo piensas, puedes notar que basta con comprobar los números no hasta `x - 1`, sino hasta la mitad del número. Por ejemplo, 11 no se divide entre 2, 3, 4, 5. Y más allá tampoco se dividirá, con seguridad, entre números mayores que su mitad. Así que podemos hacer una pequeña optimización y comprobar la división solo hasta `x / 2`.

```javascript
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
}

isPrime(1); // false
isPrime(2); // true
isPrime(3); // true
isPrime(4); // false
```

```text
while (...) {
  if (condición) {
    return valor;  ← salida de la función (y del bucle)
  }
  ...
}
─────────────────────────
Sin return el bucle continúa hasta el final
```

El algoritmo está construido así: si durante la división secuencial por los números hasta `x / 2` se encuentra al menos uno que divide sin resto, entonces el argumento pasado no es un número primo, y los cálculos posteriores no tienen sentido. En este punto se coloca el retorno `false`.

Y solo si el bucle se ha ejecutado por completo y no se encontró ningún número que divida sin resto, podemos concluir que el número es primo.

*Para ser totalmente honestos, para resolver la tarea basta con comprobar los números hasta la raíz cuadrada de `number`. Pero aquí lo importante para nosotros es centrarnos en entender cómo trabajar con condiciones y el retorno dentro de un bucle.*
