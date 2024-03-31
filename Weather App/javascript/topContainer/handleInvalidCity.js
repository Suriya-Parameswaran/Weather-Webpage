const selectCity = document.querySelector('.select-city');
const tempc = document.getElementById('tempc');
const tempf = document.getElementById('tempf');
const humidity = document.getElementById('humidity');
const precipitation = document.getElementById('precipitation');
const date = document.querySelector('.date');
const tempChange = document.querySelectorAll('.temp-change');
const hourChange = document.querySelectorAll('.hour-change');
const selectedCityImg = document.getElementById('selected-city-image');
/**
 *
 */
export function handleInvalidCity () {
  alert('Kindly enter a valid city!');
  selectCity.value = '';
  tempc.textContent = '-';
  tempf.textContent = '-';
  humidity.textContent = '-';
  precipitation.textContent = '-';
  date.textContent = '-';
  tempChange.forEach(function (temp) {
    temp.textContent = '-';
  });
  hourChange.forEach(function (hour) {
    hour.textContent = '-';
  });
  document.getElementsByName('citylist')[0].placeholder = 'Select City';
  selectedCityImg.src = '../assets/general/cityImage.svg';
}
