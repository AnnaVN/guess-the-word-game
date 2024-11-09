const guessedLettersUl = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const ButtonPlayAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

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
    message.innerText = "";
    const inputValue = inputLetter.value;
    inputValue.value = "";
    const res = validateInput(inputValue);
   
    if (res){
        makeGuess(inputValue);
    }
    inputLetter.value = "";
});

const validateInput = function (input){
    const acceptedLetter = /[a-zA-Z]/;    
    if (input.length === 0){
        message.innerText = "Enter a letter";
    } else if (input.length > 1){
        message.innerText = "Enter a single letter";
    } else if (!input.match(acceptedLetter)){
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    } 
};

const makeGuess = function (inputValue){
    inputValue = inputValue.toUpperCase();
  
        if ( guessedLetters.includes (inputValue)){
            message.innerText = "You forgot that you've already guessed this leter.";
        } else {
            guessedLetters.push(inputValue);
            console.log(guessedLetters);
        }
    };
