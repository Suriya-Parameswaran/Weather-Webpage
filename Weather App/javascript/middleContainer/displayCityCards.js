import { CityCl } from "../classCity.js";
import { displayScrollIcon } from "./scrollIconFunction.js";
const cardContainer = document.querySelector(".card-container");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Aug",
  "Oct",
  "Nov",
  "Dec",
];
let time;

/**
 *
 * @param {object} citiesWeather - Weather details of all cities from json
 * @param {Array} cardCities - Array of cities based on selected icon
 * @param {string} iconImage - Id of selected icon
 */
export function displayCardCities(cardCities, iconImage) {
  cardContainer.innerHTML = "";
  cardCities.forEach(function (city) {
    const cityName = city.replace(city[0], city[0].toUpperCase());
    const html = `
        <div class="city-card" style = "background-image: url(../assets/cities/${city}.svg)">
          <p class="item1">${cityName}</p>
          <p class="item2">
            <img
              src="../assets/weather/${iconImage}.svg"
              class="card-container-img weather-icon"
              id="img-type"
            />
            <span class="icon-sort">${new CityCl(city).temperature}</span>
          </p>
          <p class="item3 hour-minutes"></p>
          <p class="item4 city-date"></p>
          <p class="item5">
            <img
              src="../assets/weather/humidityIcon.svg"
              alt="humidity"
              class="card-container-img"
            />
            <span id="hum-icon"> ${new CityCl(city).humidity} </span>
          </p>
          <p class="item6">
            <img
              src="../assets/weather/precipitationIcon.svg"
              alt="precipitation"
              class="card-container-img"
            />
            <span id="precep-icon"> ${new CityCl(city).precipitation}</span>
          </p>
        </div>
        `;
    cardContainer.insertAdjacentHTML("beforeend", html);
  });

  updateCardTime(cardCities);
  clearInterval(time);
  time = setInterval(() => updateCardTime(cardCities), 1000);

  displayScrollIcon(cardContainer);
}

/**
 *
 * @param {object} citiesWeather - Weather details of all cities from json
 * @param {Array} cardCities - Array of city cards name that is selected in mid conatiner
 */
function updateCardTime(cardCities) {
  const cityCards = document.querySelectorAll(".city-card");
  cityCards.forEach(function (city, index) {
    const currentTime = new Date().toLocaleString("en-US", {
      timeZone: new CityCl(cardCities[index]).timeZone,
    });
    const [day, time] = currentTime.split(", ");
    const [timeValue, session] = time.split(" ");
    const [hours, minute] = timeValue.split(":");
    const [month, date, year] = day.split("/");
    const lableHourMinutes = hours + ":" + minute + " " + session;
    const lableDate = date + " - " + months[month - 1] + " - " + year;
    const hourMinutes = city.querySelector(".hour-minutes");
    const cityDate = city.querySelector(".city-date");
    hourMinutes.textContent = lableHourMinutes;
    cityDate.textContent = lableDate;
  });
}
