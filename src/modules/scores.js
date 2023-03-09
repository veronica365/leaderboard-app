import API_URL from './config.js';

class Scores {
  static scores = [];

  static name = '0huaPcYLjFNcsg2gZkL3';

  static requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  static AddNewScore = async (score) => {
    this.requestOptions.body = JSON.stringify(score);
    await fetch(`${API_URL}games/${this.name}/scores`, this.requestOptions);
    this.scores.push(score);
  };

  static createGameName = async (title = 'veronica365-1') => {
    if (this.name) return this.name;
    this.requestOptions.body = JSON.stringify({ name: title });
    const response = await fetch(`${API_URL}games/`, this.requestOptions);
    const { result } = await response.json();
    const name = String(result).split(' ')[3];
    this.name = name;
    return name;
  };

  static getAllScores = async () => {
    const response = await fetch(`${API_URL}games/${this.name}/scores`);
    this.scores = (await response.json()).result;
  };
}
export default Scores;
