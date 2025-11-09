//variable i used for the game 
let targetNumber;
let attemptsLeft;
let gameActive;

//Element from the DOM
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const messageArea = document.getElementById('messageArea');
const attemptsDisplay = document.getElementById('attempts');
const gameOverDiv = document.getElementById('gameOver');
const gameWonDiv = document.getElementById('gameWon');
const gameOverMessage = document.getElementById('gameOverMessage');
const gameWonMessage = document.getElementById('gameWonMessage');


//Initialize game
function initGame() {
    //choosing a random number between 0 and 10 
    targetNumber = Math.floor(Math.random() * 11);
    attemptsLeft = 5;

}
