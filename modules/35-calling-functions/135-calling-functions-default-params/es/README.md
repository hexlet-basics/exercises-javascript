
Veamos la función `round()`, que redondea un número entero:

```javascript
const result = round(10.25, 0); // 10
```

Le pasamos dos parámetros: el número que queremos redondear y la precisión de redondeo. Un valor de `0` significa que se redondeará al número entero más cercano, es decir, se descarta la parte decimal.

En la mayoría de los casos, queremos redondear al número entero (no a los décimos, por ejemplo), por lo que los creadores de la función `round()` hicieron el segundo parámetro **opcional** y le dieron un valor por defecto de `0`. Esto significa que no es necesario especificar el segundo parámetro y el resultado será el mismo:

```javascript
const result = round(10.25); // 10
```

Si necesitamos una precisión distinta, podemos pasar un parámetro:

```javascript
// redondeo a un decimal
const result = round(10.25, 1); // 10.3
```

Si una función en JavaScript tiene parámetros opcionales, siempre se colocan después de los parámetros obligatorios. Pueden ser cualquier cantidad (dependiendo de la función en sí), pero siempre van juntos y al final de la lista de argumentos.
