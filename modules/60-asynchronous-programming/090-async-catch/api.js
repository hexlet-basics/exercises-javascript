async function fetchCityWeatherList() {
  return [
    { city: 'Madrid', temp: 30 },
    { city: 'Oslo', temp: 12 },
    { city: 'Cairo', temp: 36 },
    { city: 'London', temp: 20 },
    { city: 'Bangkok', temp: 34 },
  ];
}

async function postToSocial(text) {
  return `Successfully posted. ${text}`;
}

export {
  fetchCityWeatherList,
  postToSocial,
}