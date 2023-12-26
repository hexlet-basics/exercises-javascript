
Antes de continuar, vamos a repasar la terminología básica. Un símbolo de operación, como `+`, se llama **operador**. Los operadores realizan operaciones en valores específicos, que se llaman **operandos**. Los operadores en sí suelen estar representados por uno o varios caracteres, aunque a veces también pueden ser palabras. La gran mayoría de los operadores corresponden a operaciones matemáticas.

```javascript
console.log(8 + 2);
```

En este ejemplo, `+` es el **operador**, y los números `8` y `2` son los **operandos**.

En el caso de la suma, tenemos dos operandos: uno a la izquierda y otro a la derecha del símbolo `+`. Las operaciones que requieren dos operandos se llaman **binarias**. Si falta al menos uno de los operandos, por ejemplo, `3 + ;`, el programa mostrará un error de sintaxis.

Las operaciones (no los operadores) pueden ser no sólo binarias, sino también unarias (con un solo operando) e incluso ternarias (con tres operandos). Además, los operadores pueden tener la misma apariencia pero representar operaciones diferentes.

  ```javascript
  console.log(-3); // => -3
  ```

En el ejemplo anterior, se aplica una operación unaria al número `3`. El operador de menos antes del tres le indica al intérprete que tome el número `3` y encuentre su opuesto, es decir, `-3`.

Esto puede ser un poco confuso, ya que `-3` es tanto un número en sí mismo como un operador con un operando, pero es una estructura común en los lenguajes de programación.
