import { sunnyCities } from "./sunnyCities.js";
import { snowyCities } from "./snowyCities.js";
import { rainyCities } from "./rainyCities.js";
import { displayCardCities } from "./displayCityCards.js";

const selector = document.querySelector(".selector");
const cityCount = document.querySelector(".city-count");
const sunnyIcon = document.getElementById("sunny-icon");
const iconType = document.querySelectorAll(".type-icon");

let cardCities;
let lableCityType;
let selectedValue;
let iconImage;

/**
 *
 * @param {object} citiesName - Weather details of all cities from json
 */
export function middleContainer(citiesName) {
  defaultSortType(citiesName);

  selector.addEventListener("click", function (event) {
    selectedValue = event.target;

    if (selectedValue.getAttribute("class") === "type-icon") {
      iconType.forEach(function (icon) {
        icon.style.borderBottom = "none";
        cityCount.value = 3;
      });
      selectedValue.style.borderBottom = "3px solid var(--ternary-text-color)";
      lableCityType = selectedValue.getAttribute("id");
    }

    sortedCities(citiesName, lableCityType);
  });

  cityCount.addEventListener("change", function (e) {
    cityCount.value = e.target.value;
    sortedCities(citiesName, lableCityType);
  });
}

/**
 *
 * @param {object} citiesName - Weather details of all cities from json
 */
function defaultSortType(citiesName) {
  lableCityType = "sunny-icon";
  sunnyIcon.style.borderBottom = "3px solid var(--ternary-text-color)";
  sortedCities(citiesName, lableCityType);
}

/**
 *
 * @param {object} citiesName - Weather details of all cities from json
 * @param {string} lableCityType - Contains the sorting type (sunny / snowy / rainy) of cities
 */
function sortedCities(citiesName, lableCityType) {
  if (lableCityType === "sunny-icon") {
    iconImage = "sunnyIcon";
    cardCities = sunnyCities(citiesName);
  } else if (lableCityType === "snowy-icon") {
    iconImage = "snowflakeIcon";
    cardCities = snowyCities(citiesName);
  } else if (lableCityType === "rainy-icon") {
    iconImage = "rainyIcon";
    cardCities = rainyCities(citiesName);
  }
  displayCardCities(cardCities, iconImage);
}
