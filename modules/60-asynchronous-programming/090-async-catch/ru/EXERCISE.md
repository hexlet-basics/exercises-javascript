Реализуйте функцию postHotCitiesReport, которая:

1. Получает массив городов с температурой с помощью fetchCityWeatherList()
2. Оставляет только те, где температура больше 25°C
3. Формирует текст "Hot cities today:" с перечислением таких городов, либо строку "No hot cities today.", если таких нет
4. Публикует текст через postToSocial()
5. Если возникает ошибка на любом шаге — возвращает err.message

Используйте async/await и конструкцию try/catch.

Пример:

```js
// При успешном получении и публикации:
postHotCitiesReport()
  .then(console.log); //Возможный вывод: "Successfully posted. Hot cities today: Madrid, Cairo, Bangkok"

// Если нет городов с температурой выше 25:
postHotCitiesReport()
  .then(console.log); // "Successfully posted. No hot cities today."

// При ошибке загрузки данных:
postHotCitiesReport()
  .then(console.log); // "Failed to load city weather list"

// При ошибке публикации:
postHotCitiesReport()
  .then(console.log); // "Failed to post to social network"
```