

let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let computerGuess = document.getElementById("guess");
let winsTracker = document.getElementById("wins");
let lossesTracker = document.getElementById("losses");
let guessLeft = document.getElementById("Guesses-left")
let guessSoFar = document.getElementById("User-guesses");
let wins = 0;
let losses = 0;
let guesses = 15;
let guessChoices = [];

document.onkeyup = function(event) {
    let userGuess = event.key;
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    
    if (computerChoices.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins++;
            guesses = 15;
            guessChoices = [];
        } 
        if (userGuess !== computerGuess) {
            guesses--;
            guessChoices.push(userGuess);
        }
        if (guesses === 0) {
            guesses = 15;
            losses++;
            guessChoices = [];
        }
        console.log(userGuess);
    }
    winsTracker.textContent = wins;
    lossesTracker.textContent = losses;
    guessLeft.textContent = guesses;
    guessSoFar.textContent = guessChoices;


};



