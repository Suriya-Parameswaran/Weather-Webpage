const cardContainer = document.querySelector('.card-container');
const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');

/**
 *
 */
function hideLeftButton () {
  leftButton.style.visibility = 'hidden';
}
/**
 *
 */
function hideRightButton () {
  rightButton.style.visibility = 'hidden';
}
/**
 *
 */
function displayLeftButton () {
  leftButton.style.visibility = 'visible';
}
/**
 *
 */
function displayRightButton () {
  rightButton.style.visibility = 'visible';
}

/**
 *
 * @param {object} cardContainer - Contains all the elements of the cards in the container
 */
export function displayScrollIcon (cardContainer) {
  if (cardContainer.scrollWidth > cardContainer.clientWidth) {
    if (cardContainer.scrollLeft === 0) {
      hideLeftButton();
      displayRightButton();
    } else {
      displayLeftButton();
    }

    if (
      cardContainer.scrollLeft + cardContainer.clientWidth >=
      cardContainer.scrollWidth
    ) {
      hideRightButton();
    } else {
      displayRightButton();
    }
  } else {
    hideRightButton();
    hideLeftButton();
  }
}

rightButton.addEventListener('click', function () {
  cardContainer.scrollLeft += 265;
  displayScrollIcon(cardContainer);
});

leftButton.addEventListener('click', function () {
  cardContainer.scrollLeft -= 265;
  displayScrollIcon(cardContainer);
});
