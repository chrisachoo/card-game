const { playCardGame } = require('./app/game');

try {
  playCardGame();
} catch (error) {
  console.error('An error occurred:', error.message);
}