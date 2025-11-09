//variable i used for the game 
let targetNumber;
let attemptsLeft;
let gameActive;



//Elements from the DOM
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
    attemptsLeft = 5;//5 attempts 
    gameActive = true;//setting state to active

    //Here i reset UI elements to initial state
    guessInput.value = ''; // Clear the input field
    guessInput.disabled = false; // Enable the input field
    submitBtn.disabled = false; // Enable the submit button
    attemptsDisplay.textContent = `You have ${attemptsLeft} attempts left`; // Update attempts display
    messageArea.className = 'message-area'; // Reset message area class
    messageArea.textContent = ''; // Clear any previous message
    gameOverDiv.classList.remove('show'); // Hide game over div
    gameWonDiv.classList.remove('show'); // Hide game won div

}



//handling the guess number submission form
function submitGuess(){
    // If the game is not active (already won or lost), exit the function
    if (!gameActive) return;

    // Get the user's guess from the input field
    const guess = parseInt(guessInput.value);

    // Check if the input is not a number (NaN) or outside the valid range (0-10) and handling error
    if (isNaN(guess) || guess < 0 || guess > 10){
        showMessage('Please enter a valid number between 0 and 10', 'error');
        return;
    }
    // Decreasing the number of attempts
    attemptsLeft--;
    attemptsDisplay.textContent = `You have ${attemptsLeft} attempts left`;

    // Check if the guess is correct
    if (guess === targetNumber){
        // If correct
        gameActive = false; // Set game to inactive
        showMessage('Congratulations, You guessed correctly', 'success');
        gameWonMessage.textContent = `You guessed the number ${targetNumber} correctly!`; 
        gameWonDiv.classList.add('show'); // Show the game won div
        guessInput.disabled = true; // Disable the input field
        submitBtn.disabled = true; // Disable the submit button
    } 
    // Check if the player has run out of attempts
    else if (attemptsLeft === 0){
        // If out of attempts:
        gameActive = false; // Set game to inactive
        showMessage(`You lost, The number was ${targetNumber}`, 'error');
        gameOverMessage.textContent = `The number was ${targetNumber}, Better luck next time`; 
        gameOverDiv.classList.add('show'); // Show the game over div
        guessInput.disabled = true; // Disable the input field
        submitBtn.disabled = true; // Disable the submit button
    } 
    // Check if the guess is too low
    else if (guess < targetNumber){
        showMessage('Your guess is too low, try a higher number', 'warning');
    }else{
        showMessage('Your guess is too high, try a lower number', 'warning');
    }
    // Clear the input field for the next guess
    guessInput.value = '';
    guessInput.focus();
}



//Displaying message function
function showMessage(message, type) {
    messageArea.textContent = message;
    
    messageArea.className = 'message-area ' + type;

    messageArea.classList.remove('show');

    void messageArea.offsetWidth;
    
    messageArea.classList.add('show');
}
// Event listeners
submitBtn.addEventListener('click', submitGuess);

// When the reset/play again button is clicked, we call the initGame function
resetBtn.addEventListener('click', initGame);

// When a key is pressed while the input field has focus
guessInput.addEventListener('keypress', function(e) {
    // Check if the key pressed was the Enter key
    if (e.key === 'Enter') {
        submitGuess();
    }
});
// Initialize the game when the page loads
initGame();