
Implementa la función `getHiddenCard()`, que recibe como entrada el número de una tarjeta de crédito (compuesto por 16 dígitos) como una cadena y devuelve su versión oculta, que se puede utilizar en el sitio web para mostrarla. Si la tarjeta original tenía el número *2034399002125581*, entonces la versión oculta se verá así *\*\*\*\*5581*. En otras palabras, la función reemplaza los primeros 12 caracteres por asteriscos. El número de asteriscos se controla mediante el segundo parámetro opcional. El valor predeterminado es 4.

```javascript
// La tarjeta de crédito se pasa como una cadena
getHiddenCard('1234567812345678', 2); // **5678
getHiddenCard('1234567812345678', 3); // ***5678
getHiddenCard('1234567812345678');    // ****5678
getHiddenCard('2034399002121100', 1); // *1100
```

Para completar la tarea, necesitarás el método `repeat()` de la cadena, que repite la cadena un número determinado de veces.

```javascript
'+'.repeat(5); // +++++
'o'.repeat(3); // ooo
```
