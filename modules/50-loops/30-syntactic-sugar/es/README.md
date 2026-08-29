En programación aparecen a menudo construcciones repetitivas. En JavaScript, igual que en muchos otros lenguajes, existe la posibilidad de abreviar su escritura. Esas simplificaciones se llaman **azúcar sintáctico**: hacen el código más corto y más cómodo, conservando el mismo resultado.

## Formas abreviadas de asignación

A menudo hace falta cambiar el valor de una variable: sumarle algo, restarle, multiplicarlo o dividirlo. La variante básica se ve así:

```javascript
index = index + 1;
count = count * 2;
total = total - 5;
price = price / 3;
```

JavaScript permite escribirlo más corto, con operadores combinados:

```javascript
index += 1; // lo mismo que index = index + 1
count *= 2; // lo mismo que count = count * 2
total -= 5; // lo mismo que total = total - 5
price /= 3; // lo mismo que price = price / 3
```

## Azúcar en los bucles

En los bucles esas abreviaturas aparecen con especial frecuencia: normalmente cambiamos el contador y acumulamos el resultado.

```javascript
let sum = 0;
let index = 1;

while (index <= 5) {
  sum += index; // lo mismo que sum = sum + index
  index += 1; // lo mismo que index = index + 1
}

console.log(sum); // => 15
```

Sin las abreviaturas el cuerpo del bucle sería más largo:

```javascript
while (index <= 5) {
  sum = sum + index;
  index = index + 1;
}
```

## Otras operaciones

Esa forma de escribir funciona no solo con números. Para las cadenas se usa el operador de concatenación:

```javascript
let text = "Hello";
text += " World"; // lo mismo que text = text + ' World'
```

## Abreviaturas admitidas

La forma abreviada existe para casi todos los operadores: `+=`, `-=`, `*=`, `/=`, `%=`, `**=`. Todos funcionan con el mismo principio: toman el valor actual de la variable, aplican la operación y guardan el resultado en la misma variable.
