//Words//

let wordsArray = ["Monica", "Chandler", "Joey", "Phoebe", "Rachel", "Ross" ];
let currentWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

// Game Variables//

let guessesRemaining =  document.getElementById("guessesRemaining");
let alreadyGuessed = document.getElementById("alreadyGuessed");
let wins = document.getElementById("wins");
let losses = document.getElementById("losses");
let letters ="abcdefghijklmnopqrstuvwxyz";
let maxGuesses = 10;

let currentGuess =[]
let gameStarted = false;




//Key Functions//

let guesses = function (){
    answerArray = [];
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = " _ ";}
    
        document.getElementById("currWord").innerHTML= answerArray.join("");
    }
    
    guesses();
    console.log(currentWord);

document.onkeyup = function(event) {

    let userGuess = event.key;

    for (var j = 0; j < currentWord.length; j ++) {

        if (currentWord[j] === userGuess){
            answerArray[j] = userGuess;
        }
    }


}
  
let restart = function (){

    guessesRemaining = maxGuesses;
    gameStarted = false;
}


    

//Get word//



//Guesses//

let guess 








//Key Functions//











//Counter//


