Algunas operaciones con infinitos conducen a un resultado extraño, por ejemplo, dividir infinito entre infinito. En matemáticas, esta operación no tiene ningún equivalente numérico. En JavaScript, se devuelve `NaN`.

```javascript
Infinity / Infinity; // NaN
```

`NaN` es un valor especial que significa "no es un número" y generalmente indica que se ha realizado una operación sin sentido. El resultado de casi cualquier operación en la que participe `NaN` será `NaN`.

```javascript
NaN + 1; // NaN
```

`NaN` es un valor interesante, aunque representa "no es un número", desde el punto de vista de los tipos, es considerado un número. Un paradoja. `NaN` nunca es un valor deseado y solamente aparece como resultado de errores. Si te encuentras con él, debes rastrear el momento en el que se realizó una operación no válida para los números y corregir ese espacio.
