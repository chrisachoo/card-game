const _ = require('lodash');
const { generateDeck } = require('./deck');
const { calculatePlayerScore, calculateSuitScore } = require('./scoring');

function determineWinner(players) {
  const scores = players.map(player => ({
    player,
    score: calculatePlayerScore(player.hand),
    suitScore: calculateSuitScore(player.hand),
  }));

  console.log('Scores:', scores);

  const maxScore = _.maxBy(scores, 'score').score;

  const winners = scores.filter(player => player.score === maxScore);

  console.log('Winners:', winners);

  if (winners.length === 1) {
    return [winners[0].player];
  } else {
    const maxSuitScore = _.maxBy(winners, 'suitScore').suitScore;
    const suitWinners = winners.filter(player => player.suitScore === maxSuitScore);
    
    console.log('Suit Winners:', suitWinners);
    
    return suitWinners.map(winner => winner.player);
  }
}

function playCardGame() {
  const deck = _.shuffle(generateDeck());
  const players = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    hand: deck.slice(index * 5, (index + 1) * 5),
  }));

  console.log('Cards Dealt:');
  players.forEach(player => console.log(`Player ${player.id}: ${JSON.stringify(player.hand)}`));

  const winner = determineWinner(players);

  console.log('\nWinner(s):');
  winner.forEach(player => console.log(`Player ${player.id}`));

  console.log('\nScores:');
  players.forEach(player => console.log(`Player ${player.id}: ${calculatePlayerScore(player.hand)}`));
}

module.exports = { playCardGame };