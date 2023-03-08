import scores from './scores.js';
import {
  addHeader, addMainSection, addForm, addScore,
} from './components.js';
/**
 * Create and insert default scores and an add score form
 * @returns document Element
 */
const createScoresList = () => {
  let innerHTML = '';
  scores.forEach((score) => {
    innerHTML += addScore(score);
  });
  return innerHTML;
};

/**
 * Create and insert default scores and an add score form
 * @returns document Element
 */
const appendHTML = () => `<div class="wrapper">${addHeader()}${addMainSection()}${addForm()}</div>`;
/**
 * Display initial scores list and add form event listeners
 */
const initialize = () => {
  document.body.innerHTML = appendHTML();
  document.querySelector('.scores-wrapper').innerHTML = createScoresList();
};
export default initialize;
