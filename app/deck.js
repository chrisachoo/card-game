const _ = require('lodash');

function generateDeck() {
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['diamonds', 'hearts', 'spades', 'clubs'];
  return _.flatMap(suits, suit => ranks.map(rank => ({ rank, suit })));
}

module.exports = { generateDeck };