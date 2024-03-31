const cityList = document.getElementById("city-option");
/**
 *
 * @param {object} citiesName - Details of every cities that can be selected from dropdown
 */
export function populateCitiesDropdown(citiesName) {
  const cityName = [];
  for (const city of citiesName) {
    cityName.push(city);
  }
  cityName.sort();
  cityName.forEach(function (city) {
    const option = document.createElement("option");
    option.value = city.charAt(0).toUpperCase() + city.slice(1);
    cityList.appendChild(option);
  });
}
