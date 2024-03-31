import { displayCityDetails } from './displayContinentCities.js';

const sortContinentIcon = document.querySelector('.sort-continent');
const sortTemperatureIcon = document.querySelector('.sort-temperature');

let isTemperatureAscending = true;
let turnContinent = 0;
let turnTemp = 0;

/**
 *
 * @param {Array} continents - This array has all the continent names
 * @param {object} citiesWeather - Weather details of all cities from json
 */
export function clickContinentIcon (continents, citiesWeather) {
  sortContinentIcon.addEventListener('click', function () {
    continents.reverse();
    turnContinent += 180;
    sortContinentIcon.style.transform =
      'rotate(' + (turnContinent % 360) + 'deg)';
    displayCityDetails(continents, citiesWeather, isTemperatureAscending);
  });
}

/**
 *
 * @param {Array} continents - This array has all the continent names
 * @param {object} citiesWeather - Weather details of all cities from json
 */
export function clickTemperatureIcon (continents, citiesWeather) {
  sortTemperatureIcon.addEventListener('click', function () {
    isTemperatureAscending = !isTemperatureAscending;
    turnTemp += 180;
    sortTemperatureIcon.style.transform = 'rotate(' + (turnTemp % 360) + 'deg)';
    displayCityDetails(continents, citiesWeather, isTemperatureAscending);
  });
}
