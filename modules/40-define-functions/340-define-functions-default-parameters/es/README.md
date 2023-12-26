
En programación, muchas funciones y métodos tienen parámetros que rara vez cambian. En estos casos, se les asignan valores predeterminados que se pueden cambiar según sea necesario. Esto reduce un poco la cantidad de código repetitivo. Por ejemplo:

```javascript
// Función de potencia
// El segundo parámetro tiene un valor predeterminado de 2
const pow = (x, base = 2) => {
  return x ** base;
};
// 3 elevado a la segunda potencia (el 2 es el valor predeterminado)
pow(3); // 9
// tres elevado a la tercera potencia
pow(3, 3); // 27
```

https://replit.com/@hexlet/js-basics-define-functions-default-parameters

El valor predeterminado se ve como una asignación normal en la definición. Solamente se activa si el argumento no se pasa. Hay que acostumbrarse a esto. El valor predeterminado incluso puede estar presente cuando solo hay un parámetro:

```javascript
const print = (text = 'nada') => console.log(text);

print(); // "Nada"
print("Hexlet"); // Hexlet
```

Puede haber cualquier cantidad de parámetros con valores predeterminados:

```javascript
const f = (a = 5, b = 10, c = 100) => { ... }
```

Los valores predeterminados tienen una peculiaridad: deben ir al final de la lista de parámetros. Los valores pasados a la función siempre se asignan a los parámetros de izquierda a derecha, en el orden en que se pasan. Esto significa que si los valores predeterminados están a la izquierda en la lista de parámetros, antes de los parámetros normales, cuando se llama a la función con argumentos, los valores de los argumentos se colocarán en lugar de los valores predeterminados. Por ejemplo:

```javascript
// Llamamos a esta función con los siguientes argumentos: f(1, 2, 3)
const f = (a = 5, b = 10, c = 100, x) => { ... }
// los parámetros tendrán los siguientes valores: a = 1, b = 2, c = 3, x = undefined
// no pasamos nada a x, por lo que JS le asigna el valor undefined

// Por eso los parámetros con valores predeterminados deben ir a la derecha de los normales,
// de lo contrario, se sobrescribirán o un parámetro normal puede quedar sin valor

// Llamamos a la función, f(1, 2)
const f = (a = 5, x, b = 10, c = 100) => { ... }

// a = 1, x = 2, los demás parámetros obtienen los valores predeterminados

// Aquí todo está bien, no hay sorpresas
const f = (x, a = 5, b = 10, c = 100) => { ... }

// Y aquí también
const f = (x, y, a = 5, b = 10, c = 100) => { ... }
```
