import { CityCl } from "../classCity.js";
const hourChange = document.querySelectorAll(".hour-change");
const nextFourHours = Array.from(hourChange).map(
  (element) => element.textContent
);
const tempChange = document.querySelectorAll(".temp-change");
const nextFiveTemp = Array.from(tempChange).map(
  (element) => element.textContent
);
const weatherImg = document.querySelectorAll(".weather-icon");

/**
 *
 * @param {object} currentCityName - Details of selected city's weather information
 * @param {string} hours - Time in hours of selected city
 * @param {string} meridian - Specifies AM or PM
 */
export function weatherForecast(
  hours,
  meridian,
  cityTemperature,
  cityNextFiveHrs
) {
  let tempIcon;
  nextFiveTemp.forEach(function (tempValue, tempIndex) {
    if (tempIndex === 0) {
      tempValue = cityTemperature;
    } else {
      tempValue = cityNextFiveHrs[tempIndex - 1];
    }
    tempChange[tempIndex].innerText = tempValue;
    tempValue = parseInt(tempValue);
    tempIcon = tempImage(tempValue);
    weatherImg[tempIndex].src = "../assets/weather/" + tempIcon + ".svg";
  });

  nextFourHourWeather(hourChange, nextFourHours, hours, meridian);
}

/**
 *
 * @param {object} hourChange - Details of the hours to be changed
 * @param {object} nextFourHours - Details of the hours in next 4 hours
 * @param {string} hours - Time in hours of selected city
 * @param {string} meridian - Specifies AM or PM
 */
function nextFourHourWeather(hourChange, nextFourHours, hours, meridian) {
  let presentTime = Number(hours);
  nextFourHours.forEach(function (hourValue, hourIndex) {
    if (presentTime <= 11) {
      if (presentTime === 11) {
        meridian = meridian === "AM" ? "PM" : "AM";
      }
      presentTime++;
    } else if (presentTime === 12) {
      presentTime = 1;
    }
    hourValue = `${presentTime} ${meridian}`;
    hourChange[hourIndex].textContent = hourValue;
  });
}

/**
 *
 * @param {number} temp - Temperature value of the city for specific hour
 * @returns {string} - Returns the type of temperature icon to be displayes for particular temperature range
 */
function tempImage(temp) {
  let icon;
  if (temp < 18) {
    icon = "rainyIcon";
  } else if (temp >= 18 && temp <= 22) {
    icon = "windyIcon";
  } else if (temp >= 23 && temp <= 29) {
    icon = "cloudyIcon";
  } else {
    icon = "sunnyIcon";
  }
  return icon;
}
