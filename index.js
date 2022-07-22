//changed the var to const because the variable is not going to change.
const square = document.querySelectorAll('.square');
const playerX = 'x'
const playerO = 'o'
const currentPlayer = playerX

const gameState = Array(square.length)
gameState.fill(null)