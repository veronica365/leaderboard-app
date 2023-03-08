import scores from './scores.js';
import { addMainSection, addForm, addScore } from './components.js';
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
const appendHTML = () => `${addMainSection()}${addForm()}`;
/**
 * Display initial scores list and add form event listeners
 */
const initialize = () => {
  const currentHTML = document.querySelector('.wrapper').innerHTML;
  document.querySelector('.wrapper').innerHTML = `${currentHTML}${appendHTML()}`;
  document.querySelector('.scores-wrapper').innerHTML = createScoresList();
};
export default initialize;
