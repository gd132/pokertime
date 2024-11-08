function getRandomCard() {
  const suits = ['♠️', '♦️', '♣️', '♥️'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  return value + suit;
}

function updateHand() {
  const hand = [getRandomCard(), getRandomCard()];
  document.getElementById('player-hand').innerHTML = `
    <div class="card">${hand[0]}</div>
    <div class="card">${hand[1]}</div>
  `;
}

function evaluateAction(action) {
  const correctAction = "Ставка"; 

  if (action === correctAction) {
    document.getElementById('feedback').textContent = "Правильный выбор!";
  } else {
    document.getElementById('feedback').textContent = "Попробуйте снова!";
  }

  updateHand();
}

document.getElementById('check-btn').addEventListener('click', function() {
  evaluateAction('Чек');
});

document.getElementById('bet-btn').addEventListener('click', function() {
  evaluateAction('Ставка');
});

document.getElementById('fold-btn').addEventListener('click', function() {
  evaluateAction('Фолд');
});

updateHand();
