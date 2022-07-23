//changed currentPlayer to let instead of const because the variable does change.
const squares = document.querySelectorAll('.square');
const playerX = 'x'
const playerO = 'o'
let currentPlayer = playerX

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
    }
    click.play()
    winner()
}
const playerWins= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function winner(){
    for( const playerWin of playerWins){}
}

  