const tempc = document.getElementById("tempc");
const precipitation = document.getElementById("precipitation");
const humidity = document.getElementById("humidity");
const tempf = document.getElementById("tempf");
const freezingPointOfWater = 32;
const celsiusToFahrenheitConstant = 1.8;
/**
 *
 * @param {string} currentCityTemperature - Temperature of selected city from dropdown
 * @param {string} currentCityHumidity - Humidity of selected city from dropdown
 * @param {string} currentCityPrecipitation - Precipitation of selected city from dropdown
 */
export function weatherElement(
  currentCityTemperature,
  currentCityHumidity,
  currentCityPrecipitation
) {
  const [tempInCel] = currentCityTemperature.split("\u00B0");
  tempc.innerText = `${currentCityTemperature}`;
  tempf.innerText =
    (
      Number(tempInCel) * celsiusToFahrenheitConstant +
      freezingPointOfWater
    ).toFixed(0) +
    "\u00B0" +
    "F";
  precipitation.innerText = `${currentCityPrecipitation}`;
  humidity.innerText = `${currentCityHumidity}`;
}
