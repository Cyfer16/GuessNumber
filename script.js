let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;
    let message = '';

    if (attempts > 1) {
        if (userGuess < randomNumber) {
            message = 'Too low! Try again.';
        } else if (userGuess > randomNumber) {
            message = 'Too high! Try again.';
        } else {
            message = 'Congratulations! You guessed the correct number!';
            document.getElementById('attemptsLeft').innerText = '0';
            disableInput();
            return;
        }
        attempts--;
        document.getElementById('attemptsLeft').innerText = attempts;
    } else {
        message = 'Game over! The correct number was ' + randomNumber;
        document.getElementById('attemptsLeft').innerText = '0';
        disableInput();
    }

    document.getElementById('resultMessage').innerText = message;
}

function disableInput() {
    document.getElementById('userGuess').disabled = true;
    document.querySelector('button').disabled = true;
}
