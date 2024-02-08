function calculateCardValue(card) {
  const faceValues = { 'J': 11, 'Q': 12, 'K': 13, 'A': 11 };
  return faceValues[card.rank] || parseInt(card.rank, 10);
}

function calculatePlayerScore(hand) {
  return hand.reduce((score, card) => score + calculateCardValue(card), 0);
}

function calculateSuitScore(hand) {
  const suitValues = { 'diamonds': 1, 'hearts': 2, 'spades': 3, 'clubs': 4 };
  return hand.reduce((score, card) => score * suitValues[card.suit], 1);
}

module.exports = { calculateCardValue, calculatePlayerScore, calculateSuitScore };