import { CityCl } from "../classCity.js";
import { updateTimeDate } from "./timeDate.js";
import { weatherElement } from "./weatherElement.js";
import { handleInvalidCity } from "./handleInvalidCity.js";
import { populateCitiesDropdown } from "./populateCitiesDropdown.js";
import { weatherForecast } from "./weatherForecast.js";
const selectCity = document.querySelector(".select-city");
let intervalTime;
/**
 *
 * @param {object} citiesName - Details of every cities that can be selected from dropdown
 */

export function topContainer(citiesName) {
  defaultCityWeather();
  populateCitiesDropdown(citiesName);

  selectCity.addEventListener("change", (event) => {
    let city = event.target.value;
    city = city.charAt(0).toLowerCase() + city.slice(1);
    selectCity.blur();
    if (citiesName.includes(city)) {
      updateCityWeather(city);
    } else {
      handleInvalidCity();
    }
  });
}
/**
 *
 * @param {object} currentCityName - Details of selected city's weather information
 */
export function updateCityWeather(currentCityName) {
  const cityClass = new CityCl(currentCityName);
  const [currentCityHours, currentCityMeridian] = updateTimeDate(
    cityClass.cityName,
    cityClass.timeZone
  );

  weatherElement(
    cityClass.temperature,
    cityClass.humidity,
    cityClass.precipitation
  );

  weatherForecast(
    currentCityHours,
    currentCityMeridian,
    cityClass.temperature,
    cityClass.nextFiveHrs
  );

  clearInterval(intervalTime);
  intervalTime = setInterval(function () {
    updateTimeDate(cityClass.cityName, cityClass.timeZone);
  }, 1000);
}

/**
 *
 * @param {object} citiesName - Details of every cities that can be selected from dropdown
 */
function defaultCityWeather() {
  const defaultCity = "anadyr";
  document.getElementsByName("citylist")[0].placeholder = `${defaultCity}`;
  updateCityWeather(defaultCity);
}
