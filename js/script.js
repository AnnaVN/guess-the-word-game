const guessedLettersList = document.querySelector("guessed-letters");
const guessButton = document.querySelector(".guess");
let inputValue = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesNumber = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const placeholders = function (wordInProgress){
    const arrLetters = [];
    for (const letter of wordInProgress){
        console.log(letter);
        arrLetters.push("●");
    }
    wordInProgress.innerText = arrLetters.join("");
};

placeholders (word);

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    const guess = inputValue.value;
    console.log(guess);
    inputValue.value = "";
});