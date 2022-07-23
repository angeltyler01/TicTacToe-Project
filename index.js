//changed currentPlayer to let instead of const because the variable does change.
let squares = document.querySelectorAll('.square');
const playerX = 'x'
const playerO = 'o'
let currentPlayer = playerX
let gameOver= false

//Make an empty array for the squares inside the board. I used an array instead of the dataset attriute because my console kept sending errors.
const gameState = ['null','null','null','null','null','null','null','null','null']


//click sound
const click = new Audio('/assets/click.mp3');

//
squares.forEach((square) => square.addEventListener('click', clickSquare))

//which box was clicked


function clickSquare(event) {
    const square = event.target
    
    if(square.innerText !=''){
        return;
    }
    if(currentPlayer === playerX){
        square.innerText = playerX
        gameState[gameState-1] = playerX
        currentPlayer= playerO
    }
    else{
        square.innerText = playerO
        gameState[gameState-1] = playerO
        currentPlayer = playerX
    }{
    click.play()
    }
}

function checkWinner() {
    //Check for a winner
    for (const winningCombination of playerWins) {
      //Object Destructuring
      const { combo, strikeClass } = winningCombination;
      const squareValue1 = gameState[combo[0] - 1];
      const squareValue2 = gameState[combo[1] - 1];
      const squareValue3 = gameState[combo[2] - 1];
  
      if ( tileValue1 != 'null' && tileValue1 === tileValue2 && tileValue1 === tileValue3
      ){
          gameOver=true
          return
      }
    }
}

const playerWins = [
    { combo: [1, 2, 3],},
    { combo: [4, 5, 6],},
    { combo: [7, 8, 9],},
    { combo: [1, 4, 7],},
    { combo: [2, 5, 8],},
    { combo: [3, 6, 9],},
    { combo: [1, 5, 9],},
    { combo: [3, 5, 7],},
  ]