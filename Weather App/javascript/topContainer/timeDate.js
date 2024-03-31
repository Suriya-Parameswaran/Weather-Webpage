const dateRef = document.getElementById('date');
const hoursRef = document.getElementById('hours');
const minutesRef = document.getElementById('minutes');
const secondsRef = document.getElementById('seconds');
const amOrPmImg = document.getElementById('am-pm-img');
const selectedCityImg = document.getElementById('selected-city-image');
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Aug',
  'Oct',
  'Nov',
  'Dec'
];
let currentHour, meridian;
/**
 *
 * @param {string} currentCityName - Name of the selected city
 * @param {object} currentCitytimeZone - Details of selected city timezone
 * @returns {Array} - An array that contains selected city current hour and meridian(AM/PM)
 */
export function updateTimeDate (currentCityName, currentCitytimeZone) {
  const currentTime = new Date().toLocaleString('en-US', {
    timeZone: currentCitytimeZone
  });
  const [day, timeWithMeridian] = currentTime.split(', ');

  updateCityImage(currentCityName);

  updateDate(day);

  [currentHour, meridian] = updateTime(timeWithMeridian);

  updateTimeMeridian(meridian);

  /**
   *
   * @param {string} currentCityName - Name of the selected city
   */
  function updateCityImage (currentCityName) {
    selectedCityImg.src = '../assets/cities/' + currentCityName + '.svg';
    document.getElementsByName(
      'citylist'
    )[0].placeholder = `${currentCityName}`;
  }

  /**
   *
   * @param {string} day - Day of the selected city
   */
  function updateDate (day) {
    const [month, date, year] = day.split('/');
    dateRef.innerText =
      date.padStart(2, '0') + ' - ' + months[month - 1] + ' - ' + year;
  }

  /**
   *
   * @param {string} timeWithMeridian - Time along with meridian of the selected city
   * @returns {Array} - An array that contains selected city current hour and meridian(AM/PM)
   */
  function updateTime (timeWithMeridian) {
    const [time, meridianAmOrPm] = timeWithMeridian.split(' ');
    const [hours, minute, seconds] = time.split(':');
    hoursRef.innerText = hours.padStart(2, '0') + ':';
    minutesRef.innerText = minute + ':';
    secondsRef.innerText = seconds;
    return [hours, meridianAmOrPm];
  }

  /**
   *
   * @param {string} meridian - Meridian of the selected city
   */
  function updateTimeMeridian (meridian) {
    if (meridian === 'PM') {
      amOrPmImg.src = '../assets/general/pmState.svg';
    } else {
      amOrPmImg.src = '../assets/general/amState.svg';
    }
  }

  return [currentHour, meridian];
}
