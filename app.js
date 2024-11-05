let player1 = prompt('Player1 enter your name: ')
let player2 = prompt('Player2 enter your name: ')

document.querySelector('#player1').innerHTML = player1
document.querySelector('#player2').innerHTML = player2

let player1Elements = document.querySelector('.player1')
let player2Elements = document.querySelector('.player2')

let currentScore1 = 0;
let currentScore2 = 0;

let currentPlayer = true;

function switchPlayer(){
    currentPlayer = !currentPlayer;
    player1Elements.classList.toggle('activePlayer')
    player2Elements.classList.toggle('activePlayer')
}
function newGame(){
    let player1 = prompt('Player1 enter your name: ')
    let player2 = prompt('Player2 enter your name: ')

    document.querySelector('#player1').innerHTML = player1
    document.querySelector('#player2').innerHTML = player2

    currentScore1 = 0;
    currentScore2 = 0;
    document.querySelector('#currentScore1').innerHTML = currentScore1;
    document.querySelector('#currentScore2').innerHTML = currentScore2;
    totalScore1.innerHTML = 0;
    totalScore2.innerHTML = 0;
    if(currentPlayer){
        currentPlayer = true;
    }
    else{
        switchPlayer();
    }

}
function rollDice(){
    let diceNumber = Math.ceil(Math.random() * 6)
    document.querySelector('#dice').src = `./assets/${diceNumber}.png`
    if(diceNumber !== 1)
    {
        if(currentPlayer){ 
         currentScore1 += diceNumber;
         document.querySelector('#currentScore1').innerHTML = currentScore1;
        }
        else{
        currentScore2 += diceNumber;
        document.querySelector('#currentScore2').innerHTML = currentScore2;
        }
    }
    else{
        if(currentPlayer){
            currentScore1 = 0;
            document.querySelector('#currentScore1').innerHTML = currentScore1;
            switchPlayer();
        }
        else{
            currentScore2 = 0;
            document.querySelector('#currentScore2').innerHTML = currentScore2;
            switchPlayer();
        }
    }
   
}
function hold(){
    if(currentPlayer){
        let totalScore1 = document.querySelector('#totalScore1');
        totalScore1.innerHTML = +totalScore1.innerHTML + currentScore1;
        switchPlayer();
        currentScore1 = 0;
        document.querySelector('#currentScore1').innerHTML = currentScore1;
        if(totalScore1.innerHTML >= 100){
            totalScore1.innerHTML = '<h1>You Won</h1>';
        }

    }
    else{
        let totalScore2 = document.querySelector('#totalScore2');
        totalScore2.innerHTML = +totalScore2.innerHTML + currentScore2;
        switchPlayer();
        currentScore2 = 0;
        document.querySelector('#currentScore2').innerHTML = currentScore2;
        if(totalScore2.innerHTML >= 100){
            totalScore2.innerHTML = '<h1>You Won</h1>';
        }

    }
}