import scores from './scores.js';
import { addMainSection, addForm, addScore } from './components.js';
/**
 * Create and insert default scores and an add score form
 * @returns document Element
 */
const createScoresList = () => {
  let innerHTML = '';
  scores.scores.forEach((score) => {
    innerHTML += addScore(score);
  });
  return innerHTML;
};

/**
 * Get all scores for a game created by you from the API
 */
const onRefresh = async () => {
  await scores.getAllScores();
  const currentScores = document.querySelector('.scores-wrapper');
  currentScores.innerHTML = createScoresList();
};

/**
 * Handle form submittion to add anew score
 */
const onSubmit = async (event) => {
  event.preventDefault();
  const form = document.querySelector('aside form');
  const user = form.elements.name.value;
  const score = parseInt(form.elements.score.value, 10);
  await scores.AddNewScore({ user, score });
  const currentScores = document.querySelector('.scores-wrapper');
  currentScores.innerHTML = createScoresList();
  form.elements.name.value = '';
  form.elements.score.value = '';
};

/**
 * Create and insert default scores and an add score form
 * @returns document Element
 */
const appendHTML = () => `${addMainSection()}${addForm()}`;
/**
 * Display initial scores list and add form event listeners
 */
const initialize = async () => {
  const HTML = document.querySelector('.wrapper').innerHTML;
  document.querySelector('.wrapper').innerHTML = `${HTML}${appendHTML()}`;
  await scores.createGameName();
  await scores.getAllScores();
  document.querySelector('.scores-wrapper').innerHTML = createScoresList();
  document.querySelector('aside form').addEventListener('submit', onSubmit);
  document.querySelector('.score-toolbar button').addEventListener('click', onRefresh);
};
export default initialize;
