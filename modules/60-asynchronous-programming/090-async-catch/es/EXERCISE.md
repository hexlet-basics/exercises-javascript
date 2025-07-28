Implementa una función postHotCitiesReport que:

1. Obtiene un array de ciudades con temperaturas usando fetchCityWeatherList()
2. Conserva solo aquellas con temperaturas superiores a 25 °C
3. Genera el texto "Hot cities today:" with a list of such cities, or the string "No hot cities today." si no hay ninguna
4. Publica el texto usando postToSocial()
5. Si se produce un error en cualquier paso, devuelve err.message

Usa async/await y una construcción try/catch.

Ejemplo:

```js
// Si se recibió y publicó correctamente:
postHotCitiesReport()
  .then(console.log); //Posible resultado: "Successfully posted. Hot cities today: Madrid, Cairo, Bangkok"

// Si no hay ciudades con temperaturas superiores a 25:
postHotCitiesReport()
  .then(console.log); // "Successfully posted. No hot cities today."

// Error al cargar datos:
postHotCitiesReport()
  .then(console.log); // "Failed to load city weather list"

// Error al publicar:
postHotCitiesReport()
  .then(console.log); // "Failed to post to social network"
```