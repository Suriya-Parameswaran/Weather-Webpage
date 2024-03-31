import { CityCl } from "../classCity.js";
/**
 *
 * @param {object} citiesName - Weather details of all cities from json
 * @returns {Array} - Array of sunny cities
 */
export function sunnyCities(citiesName) {
  const cityCount = document.querySelector(".city-count");
  const sortSunnyCities = citiesName
    .filter(
      (city) =>
        parseInt(new CityCl(city).temperature) > 29 &&
        parseInt(new CityCl(city).humidity) < 50 &&
        parseInt(new CityCl(city).precipitation) >= 50
    )
    .sort(
      (a, b) =>
        parseInt(new CityCl(b).temperature) -
        parseInt(new CityCl(a).temperature)
    );
  if (sortSunnyCities.length <= 3) {
    cityCount.value = sortSunnyCities.length;
    cityCount.disabled = true;
  } else {
    cityCount.disabled = false;
  }
  sortSunnyCities.splice(cityCount.value);
  return sortSunnyCities;
}
