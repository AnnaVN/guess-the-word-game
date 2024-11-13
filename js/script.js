const guessedLettersList = document.querySelector("guessed-letters");
const guessButton = document.querySelector(".guess");
const inputValue = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesNumber = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholders = function (word){
    const arrLetters = [];
    for (const letter of word){
        console.log(letter);
        arrLetters.push("●");
    }
    wordInProgress.innerText = arrLetters.join("");
};

placeholders (word);

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    message.innerText = "";
    const guess = inputValue.value;
    // console.log(guess);
    
    
    const goodGuess = validateInput (guess);
   
    if (goodGuess){
        makeGuess(guess);
    }
    inputValue.value = "";
});

const validateInput = function (input){
    const acceptedLetter = /[a - zA - z]/;
    if (input.length === 0){
        message.innerText = "Try to enter a letter.";
    } else if (input.length > 1){
        message.innerText = "Just 1 letter";
    } else if (!input.match(acceptedLetter)){
        message.innerText = "Enter a letter";
    } else {
        return input;
    }
};

const makeGuess = function (guess){
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)){
        message.innerText = "You already tried this letter.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};