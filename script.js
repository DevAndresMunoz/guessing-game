let secretNumber = Math.floor(Math.random() * 51);

let attempsRemaining = 3;   

let userName = prompt("Welcome! What is your name?");

let guess = prompt(`Welcome ${userName}! Please guess a number from 1 to 50. You have ${attempsRemaining} guesses remaining.`);

if (isNaN(guess)) {
    guess = prompt(`Uh oh, that's not a number! Please try again. You have ${attempsRemaining} guesses remaining.`);
    if (guess == secretNumber) {
        alert(`You guessed correctly! The secret number is ${secretNumber}! Please refresh this page to play again.`);
        } else if (guess > secretNumber) {
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too high! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        } else {
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too low! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        } 
} else {
    if (guess == secretNumber) {
        alert(`You guessed correctly! The secret number is ${secretNumber}! Please refresh this page to play again.`);
        } else if (guess > secretNumber) {
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too high! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        } else {
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too low! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        } 
}

if (isNaN(guess)) {
    guess = prompt(`Uh oh, that's not a number! Please try again. You have ${attempsRemaining} guesses remaining.`);
    if (guess == secretNumber) {
        alert(`You guessed correctly! The secret number is ${secretNumber}! Please refresh this page to play again.`);
        } else if (guess > secretNumber) {
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too high! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        } else {
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too low! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        } 
} else {
    if (guess == secretNumber) {
        alert(`You guessed correctly! The secret number is ${secretNumber}! Please refresh this page to play again.`);
        } else if (guess > secretNumber) {
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too high! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        } else {
        --attempsRemaining;
        guess = prompt(`Sorry ${userName}, that number is too low! Please guess again. You have ${attempsRemaining} guesses remaining.`);
        } 
}

if (isNaN(guess)) {
    guess = prompt(`Uh oh, that's not a number! Please try again. You have ${attempsRemaining} guesses remaining.`);
    if (guess == secretNumber) {
        alert(`You guessed correctly! The secret number is ${secretNumber}! Please refresh this page to play again.`);
        } else if (guess > secretNumber) {
        --attempsRemaining;
        alert(`Sorry ${userName}, that number is too high! The secret number was ${secretNumber}. You have ${attempsRemaining} guesses remaining. Please refresh this page to play again.`);
        } else {
        --attempsRemaining;
        alert(`Sorry ${userName}, that number is too low! The secret number was ${secretNumber}. You have ${attempsRemaining} guesses remaining. Please refresh this page to play again.`);
        }
} else {
    if (guess == secretNumber) {
        alert(`You guessed correctly! The secret number is ${secretNumber}! Please refresh this page to play again.`);
        } else if (guess > secretNumber) {
        --attempsRemaining;
        alert(`Sorry ${userName}, that number is too high! The secret number was ${secretNumber}. You have ${attempsRemaining} guesses remaining. Please refresh this page to play again.`);
        } else {
        --attempsRemaining;
        alert(`Sorry ${userName}, that number is too low! The secret number was ${secretNumber}. You have ${attempsRemaining} guesses remaining. Please refresh this page to play again.`);
        }
}

