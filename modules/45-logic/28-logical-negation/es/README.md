
Junto con la conjunción (Y) y la disyunción (O), a menudo se utiliza la operación de "negación". La negación cambia el valor lógico al opuesto. En programación, se corresponde con el operador unario `!`.

Si hay una función que verifica si un número es par, se puede realizar una verificación de si es impar utilizando la negación:

```javascript
const isEven = (number) => number % 2 === 0;

isEven(10);  // true
!isEven(10); // false
```

https://replit.com/@hexlet/js-basics-logical-negation

Es decir, simplemente agregamos `!` antes de llamar a la función y obtenemos la acción opuesta.

La negación es una herramienta poderosa que permite expresar reglas previstas de manera concisa en el código sin necesidad de escribir nuevas funciones.

¿Y qué pasa si escribimos `!!isEven(10)`? Sorprendentemente, el código funcionará. En lógica, la doble negación es similar a la ausencia de negación en absoluto.

```javascript
isEven(10);   // true
!isEven(10);  // false
!!isEven(10); // true
```
