import { CityCl } from "../classCity.js";
/**
 *
 * @param {object} citiesName - Weather details of all cities from json
 * @returns {Array} - Array of rainy cities
 */
export function rainyCities(citiesName) {
  const cityCount = document.querySelector(".city-count");
  const sortRainyCities = citiesName
    .filter(
      (city) =>
        parseInt(new CityCl(city).temperature) < 20 &&
        parseInt(new CityCl(city).humidity) >= 50
    )
    .sort(
      (a, b) =>
        parseInt(new CityCl(b).humidity) - parseInt(new CityCl(a).humidity)
    );

  if (sortRainyCities.length <= 3) {
    cityCount.value = sortRainyCities.length;
    cityCount.disabled = true;
  } else {
    cityCount.disabled = false;
  }
  sortRainyCities.splice(cityCount.value);
  return sortRainyCities;
}
