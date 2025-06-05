import { fetchCityWeatherList, postToSocial} from './api.js';

// BEGIN
async function postHotCitiesReport() {
  try {
    const cities = await fetchCityWeatherList();
    const hotCities = cities.filter(({ temp }) => temp > 25).map(({ city }) => city);

    const text = hotCities.length
      ? `Hot cities today: ${hotCities.join(', ')}`
      : 'No hot cities today.';

    const result = await postToSocial(text);
    return result;
  } catch (err) {
    return err.message;
  }
}
// END

export default postHotCitiesReport;