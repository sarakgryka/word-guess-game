//Words//

let wordsArray = ["Monica", "Chandler", "Joey", "Phoebe", "Rachel", "Ross" ];
let currentWord = document.getElementById("currWord").innerHTML = wordsArray[Math.floor(Math.random() * wordsArray.length)];

// Game Variables//

let guessesRemaining =  document.getElementById("guessesRemaining");
let alreadyGuessed = document.getElementById("alreadyGuessed");
let wins = document.getElementById("wins");
let losses = document.getElementById("losses");
let letters ="abcdefghijklmnopqrstuvwxyz";
let maxGuesses =[];

let currentGuess
let gameStarted = false;




let answerArray =[];
for(var i = 0; i < currentWord.length; i++) {

    answerArray[i]= "_"; }
let remainingLetters = currentWord.length; 


//Key Functions//
document.onkeyup = function(event) {

    let userGuess = event.key;}
  
let restart = function (){

    guessesRemaining = maxGuesses;
    gameStarted = false;
}


    

//Get word//



//Guesses//

let guess 








//Key Functions//











//Counter//


