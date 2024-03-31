import { citiesWeatherJson } from "./index.js";
export class CityCl {
  constructor(city) {
    this.cityName = citiesWeatherJson[city].cityName;
    this.dateAndTime = citiesWeatherJson[city].dateAndTime;
    this.timeZone = citiesWeatherJson[city].timeZone;
    this.temperature = citiesWeatherJson[city].temperature;
    this.humidity = citiesWeatherJson[city].humidity;
    this.precipitation = citiesWeatherJson[city].precipitation;
    this.nextFiveHrs = citiesWeatherJson[city].nextFiveHrs;
  }
}
