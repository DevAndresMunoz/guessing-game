let secretNumber = 2;

let attempsRemaining = 3;   

let userName = prompt("Welcome! What is your name?");

let guess = prompt(`Welcome ${userName}! Please guess a number from 1 to 50. You have ${attempsRemaining} guesses remaining:`);

switch (true) {
    case (guess == secretNumber):
        alert(`You guessed correctly! The secret number is ${secretNumber}!`);
        break;
    case (guess > secretNumber):
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too high! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        break;
    case (guess < secretNumber):
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too low! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        break;
}

switch (true) {
    case (guess == secretNumber):
        alert(`You guessed correctly! The secret number is ${secretNumber}!`);
        break;
    case (guess > secretNumber):
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too high! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        break;
    case (guess < secretNumber):
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too low! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        break;
}

switch (true) {
    case (guess == secretNumber):
        alert(`You guessed correctly! The secret number is ${secretNumber}!`);
        break;
    case (guess > secretNumber):
        --attempsRemaining;
        alert(`Sorry ${userName}, that number is too high! You are out of guesses. Please refresh this page to play again.`);
        break;
    case (guess < secretNumber):
        --attempsRemaining;
        alert(`Sorry ${userName}, that number is too low! You are out of guesses. Please refresh this page to play again.`);
        break;
}
