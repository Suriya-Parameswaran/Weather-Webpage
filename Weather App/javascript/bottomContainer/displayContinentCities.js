const bottomCardsContainer = document.querySelector('.bottom-cards-container');

let time, citiesToDisplay;

/**
 *
 * @param {Array} continents - This array has all the continent names
 * @param {object} citiesWeather - Weather details of all cities from json
 * @param {boolean} isTemperatureAscending - Check wheather temperature must display in ascending or not
 */
export function displayCityDetails (
  continents,
  citiesWeather,
  isTemperatureAscending
) {
  citiesToDisplay = [];
  const temperatureSortBasedOn = (a, b) =>
    isTemperatureAscending
      ? parseInt(citiesWeather[a].temperature) -
        parseInt(citiesWeather[b].temperature)
      : parseInt(citiesWeather[b].temperature) -
        parseInt(citiesWeather[a].temperature);

  continents.forEach(function (continent) {
    const continentCities = Object.keys(citiesWeather)
      .filter((city) =>
        citiesWeather[city].timeZone.split('/')[0].startsWith(continent)
      )
      .sort(temperatureSortBasedOn);
    citiesToDisplay.push(continentCities);
  });
  citiesToDisplay = citiesToDisplay.flat();

  displayContinentCities(citiesWeather, citiesToDisplay);
}

/**
 *
 * @param {object} citiesWeather - Weather details of all cities from json
 * @param {Array} citiesToDisplay - Array of all the cities in the world to be displayed
 */
function displayContinentCities (citiesWeather, citiesToDisplay) {
  bottomCardsContainer.innerHTML = '';
  citiesToDisplay.slice(0, 12).forEach(function (city) {
    const htmlCity = `
          <div class="bottom-cards">
            <div class="continent-name">${
  citiesWeather[city].timeZone.split('/')[0]
}</div>
            <div class="city-temperature">${
  citiesWeather[city].temperature
}</div>
            <div class="city-name-time">${
  citiesWeather[city].cityName
}, <span class = "city-time"></span></div>
            <div class="city-humidity">
              <img
                class="humidity-icon"
                src="../assets/weather/humidityIcon.svg"
                alt="humidity"
              />
              ${citiesWeather[city].humidity}
            </div>
          </div>
          `;
    bottomCardsContainer.insertAdjacentHTML('beforeend', htmlCity);
  });
  updateContinentTime(citiesWeather, citiesToDisplay);
  clearInterval(time);
  time = setInterval(() => {
    updateContinentTime(citiesWeather, citiesToDisplay);
  }, 1000);
}

/**
 *
 * @param {object} citiesWeather - Weather details of all cities from json
 * @param {Array} citiesToDisplay - Array of all the cities in the world to be displayed
 */
function updateContinentTime (citiesWeather, citiesToDisplay) {
  const bottomCards = document.querySelectorAll('.bottom-cards');
  bottomCards.forEach(function (cityCard, index) {
    const currentTime = new Date().toLocaleString('en-US', {
      timeZone: citiesWeather[citiesToDisplay[index]].timeZone
    });
    const [, time] = currentTime.split(', ');
    const [timeValue, session] = time.split(' ');
    const [hours, minute] = timeValue.split(':');
    const lableHourMinutes = hours + ':' + minute + ' ' + session;
    const continentTime = cityCard.querySelector('.city-time');
    continentTime.textContent = lableHourMinutes;
  });
}
