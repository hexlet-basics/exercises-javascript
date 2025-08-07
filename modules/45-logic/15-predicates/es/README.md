
Recordemos la función `isInfant()` del tema anterior:

```javascript
const isInfant = (age) => age < 1;
console.log(isInfant(3));
```
```textfalse```

Estas funciones se llaman funciones booleanas. Los boolenos (o funciones de pregunta) responden a una pregunta y siempre (¡sin excepciones!) devuelven `true` o `false`.

En todos los lenguajes, los predicados se nombran de manera especial para facilitar el análisis. En JavaScript, los predicados generalmente comienzan con los prefijos `is`, `has` o `can`, pero no se limitan a estas palabras. Ejemplos:

  * `isInfant()` - "¿es un bebé?"
  * `hasChildren()` - "¿tiene hijos?"
  * `isEmpty()` - "¿está vacío?"
  * `hasErrors()` - "¿tiene errores?"

Una función solamente puede considerarse booleana **siempre y cuando** devuelva un valor booleano.

---

Ahora escribamos otra función booleana. Toma una cadena y verifica si es la palabra `'Castle'`:

```javascript
const isCastle = (type) => type === 'Castle';

console.log(isCastle('Sea'));
```

```textfalse```
