Implement a postHotCitiesReport function that:

1. Gets an array of cities with temperatures using fetchCityWeatherList()
2. Keeps only those with temperatures above 25°C
3. Generates the text "Hot cities today:" with a list of such cities, or the string "No hot cities today." if there are none
4. Publishes the text using postToSocial()
5. If an error occurs at any step, returns err.message

Use async/await and a try/catch construct.

Example:

```js
// If successfully received and published:
postHotCitiesReport()
  .then(console.log); //Possible output: "Successfully posted. Hot cities today: Madrid, Cairo, Bangkok"

// If there are no cities with temperatures above 25:
postHotCitiesReport()
  .then(console.log); // "Successfully posted. No hot cities today."

// On data loading error:
postHotCitiesReport()
  .then(console.log); // "Failed to load city weather list"

// On publishing error:
postHotCitiesReport()
  .then(console.log); // "Failed to post to social network"
```