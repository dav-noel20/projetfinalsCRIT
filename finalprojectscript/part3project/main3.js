document.addEventListener('DOMContentLoaded', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

    const guessInput = document.getElementById('guessInput');
    const checkButton = document.getElementById('checkButton');
    const message = document.getElementById('message');

    checkButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Please enter a valid number between 1 and 100.';
        } else if (userGuess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the correct number!';
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
        } else {
            message.textContent = 'Too high! Try again.';
        }
        guessInput.value = ''; 
    });
});
