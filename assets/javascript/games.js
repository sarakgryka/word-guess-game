//Words//

let wordsArray = ["Monica", "Chandler", "Joey", "Phoebe", "Rachel", "Ross" ];
let currentWord = wordsArray[Math.floor(Math.random() * (wordsArray.length))];



// Game Variables//

let guessesRemaining = 0;
let alreadyGuessed =[];
let alreadyGuessedDisplay = document.getElementById("alreadyGuessed");
let wins = 0;
let losses = 0;
let maxGuesses = 10;
let currentWordIndex;
let answerArray = [];



let start = function (){

    guessesRemaining = maxGuesses;
    currentWordIndex = Math.floor(Math.random() * (wordsArray.length));
    

    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = " _ ";}
    
        document.getElementById("currWord").innerHTML= answerArray.join("");
        console.log(currentWord);
}

start();

let guesses = function (letter) {

    maxGuesses --;

    if(currentWord.indexOf(letter)=== -1) {

        alreadyGuessed.push(letter);
        alreadyGuessedDisplay.innerHTML = alreadyGuessed.join(",")

    }

    else {
        for (var j = 0; j < currentWord.length; j++) {

            if(currentWord[j] === letter) {
                answerArray[j] = letter;
            }
        }
    }
}

document.getElementById("currWord").innerHTML= answerArray.join("");

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    guesses(letterGuessed);
    
  };

//Get word//



//Guesses//










//Key Functions//











//Counter//


