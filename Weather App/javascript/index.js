import { topContainer } from "../javascript/topContainer/topContainer.js";
import { middleContainer } from "./middleContainer/middleContainer.js";
import { bottomContainer } from "./bottomContainer/bottomContainer.js";
export let citiesWeatherJson;
const loadCitiesWeatherForecast = async () => {
  citiesWeatherJson = await (await fetch("../javascript/data.json")).json();
  const citiesName = Object.keys(citiesWeatherJson);
  topContainer(citiesName);
  middleContainer(citiesName);
  bottomContainer(citiesWeatherJson);
};

loadCitiesWeatherForecast();
