import { displayCityDetails } from "./displayContinentCities.js";
import { clickContinentIcon, clickTemperatureIcon } from "./sortButtonClick.js";

const isTemperatureAscending = true;
let continents;

/**
 *
 * @param {object} citiesWeather - Weather details of all cities from json
 */
export function bottomContainer(citiesWeather) {
  continents = [
    ...new Set(
      Object.values(citiesWeather)
        .map((city) => city.timeZone.split("/")[0])
        .sort()
    ),
  ];
  clickContinentIcon(continents, citiesWeather);
  clickTemperatureIcon(continents, citiesWeather);
  displayCityDetails(continents, citiesWeather, isTemperatureAscending);
}
