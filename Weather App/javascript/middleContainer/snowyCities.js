import { CityCl } from "../classCity.js";

/**
 *
 * @param {object} citiesName - Weather details of all cities from json
 * @returns {Array} - Array of snowy cities
 */
export function snowyCities(citiesName) {
  const cityCount = document.querySelector(".city-count");
  const sortSnowyCities = citiesName
    .filter(
      (city) =>
        parseInt(new CityCl(city).temperature) > 20 &&
        parseInt(new CityCl(city).temperature) < 28 &&
        parseInt(new CityCl(city).humidity) > 50 &&
        parseInt(new CityCl(city).precipitation) < 50
    )
    .sort(
      (a, b) =>
        parseInt(new CityCl(b).precipitation) -
        parseInt(new CityCl(a).precipitation)
    );
  if (sortSnowyCities.length <= 3) {
    cityCount.value = sortSnowyCities.length;
    cityCount.disabled = true;
  } else {
    cityCount.disabled = false;
  }
  sortSnowyCities.splice(cityCount.value);
  return sortSnowyCities;
}
