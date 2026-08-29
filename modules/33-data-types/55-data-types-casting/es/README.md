En los programas reales surge a menudo la situación de que hay que convertir datos de un tipo en otro. Esto es especialmente relevante al procesar la entrada del usuario o los datos de los formularios web: allí todo llega en forma de cadenas, aunque hayas introducido un número.

JavaScript sabe convertir tipos automáticamente (conversión implícita), pero confiar en eso es peligroso. Por eso, cuando sabes exactamente qué tipo quieres obtener, es mejor convertir el valor de forma **explícita**: para ello existen funciones especiales.

## Convertir una cadena en número

Imaginemos que recibimos de un formulario la cadena `'345'` y necesitamos sumar ese número con otro:

```javascript
const number = Number("345");
console.log(number + 5); // => 350
```

La función `Number()` recibe una cadena y la convierte en número. Esas funciones se llaman funciones de conversión de tipo (casting functions).

```javascript
console.log(Number("0")); // => 0
console.log(Number("10")); // => 10
console.log(Number("3.14")); // => 3.14
console.log(Number("hello")); // => NaN  (no se pudo convertir)
```

Además de `Number()`, existen las funciones `parseInt()` y `parseFloat()`: «extraen» de la cadena un número entero o decimal y saben ignorar los caracteres de sobra al final:

```javascript
console.log(parseInt("10px")); // => 10
console.log(parseFloat("3.5kg")); // => 3.5
```

## Convertir en cadena con String()

Si hace falta convertir un número o un valor lógico en cadena, usa la función `String()`:

```javascript
console.log(String(10)); // => '10'
console.log(String(true)); // => 'true'
console.log(String(3.5)); // => '3.5'
```

Esto es útil al construir textos y mensajes:

```javascript
const age = 42;
console.log("Age: " + String(age)); // => Age: 42
// Aunque aquí resulta más cómoda la interpolación: `Age: ${age}`
```

Las conversiones se pueden hacer una tras otra: el valor recorre una cadena de transformaciones:

```text
'123'  ──Number()──→  123  ──String()──→  '123'
```

## Convertir en valor lógico con Boolean()

```javascript
console.log(Boolean(0)); // => false
console.log(Boolean("")); // => false
console.log(Boolean("hello")); // => true
console.log(Boolean(1)); // => true
```

## Descartar la parte decimal con Math.trunc()

`Math.trunc()` es una función incorporada; las llamadas a funciones se analizan en detalle en el módulo siguiente, por ahora basta con usarla siguiendo el ejemplo.

A veces hay que obtener un entero a partir de un número decimal, descartando la parte decimal. Para eso se usa `Math.trunc()`:

```javascript
console.log(Math.trunc(36.6)); // => 36
console.log(Math.trunc(-36.6)); // => -36
```

A diferencia de `Math.floor()`, `Math.trunc()` simplemente descarta la parte decimal independientemente del signo.
