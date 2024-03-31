/**
 *
 * @param {object} cityDetails - Details of every cities that can be selected from dropdown
 */
export function cityOptions(cityDetails) {
  const cityList = document.getElementById("city-option");
  const cityName = [];
  for (const city in cityDetails) {
    cityName.push(city);
  }
  cityName.sort();
  cityName.forEach(function (cityName) {
    const option = document.createElement("option");
    option.value = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    cityList.appendChild(option);
  });
}
