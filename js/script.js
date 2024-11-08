const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const ButtonPlayAgain = document.querySelector(".play-again");

const word = "magnolia";

const updateInner = function(word){
    let futureWord = [];
    for (const letter of word){
        console.log(letter);
        futureWord.push("●");
    }
        wordInProgress.innerText = futureWord.join("");
    };
    

updateInner(word);

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    const inputValue = inputLetter.value;
    inputValue.value = "";
});