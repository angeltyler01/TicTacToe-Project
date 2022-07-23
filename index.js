//changed currentPlayer to let instead of const because the variable does change.
let squares = document.querySelectorAll('.square');
const playerX = 'x'
const playerO = 'o'
let currentPlayer = playerX
let gameOver= false

//Make an empty array for the squares inside the board. I used an array instead of the dataset attriute because my console kept sending errors.
let gameState = ['null','null','null','null','null','null','null','null','null']


//click sound
const click = new Audio('/assets/click.mp3');

//
squares.forEach((square) => square.addEventListener('click', clickSquare))

//which box was clicked
function clickSquare(event) {
    if (gameOver){
    return;
    }

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
    checkWinner()
    }
}
//set comboos equal to values to tell the game when to stop if all squares are filled with same value
function checkWinner(){
    for(const winningCombination of winnerCombos){
        const combo = winningCombination.combo
        console.log(winningCombination)
        let squareValue1 = gameState[combo[0]]
        let squareValue2 = gameState[combo[1]]
        let squareValue3 = gameState[combo[2]]
        if(squareValue1 != null && squareValue1 === squareValue2 && squareValue1 === squareValue3 ){
            
            return;
        }
    }
    
}


let winnerCombos = [
    {combo: [0,1,2]},
    {combo: [3,4,5]},
    {combo: [6,7,8]},
    {combo: [0,3,6]},
    {combo: [1,4,7]},
    {combo: [2,5,8]},
    {combo: [0,4,8]},
    {combo: [2,4,6]}
]