//Words//

let wordsArray = ["monica", "chandler", "joey", "phoebe", "rachel", "ross" ];
let currentWord = wordsArray[Math.floor(Math.random() * (wordsArray.length))];



// Game Variables//


let alreadyGuessed =[];
let alreadyGuessedDisplay = document.getElementById("alreadyGuessed"); 
let wins = document.getElementById("wins").innerHTML = 0;
let losses = document.getElementById("losses").innerHTML = 0;
let maxGuesses = document.getElementById("guessesRemaining").innerHTML = 10;
let guessesRemaining 
let currentWordIndex;
let answerArray = [];




let start = function (){
    
    
    currentWordIndex = Math.floor(Math.random() * (wordsArray.length));
    maxGuesses = 10;
    alreadyGuessed = [];

    
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = " _ ";}
    
        document.getElementById("currWord").innerHTML= answerArray.join("");
        console.log(currentWord);
}

start();

let guesses = function (letter) {

    

    if(currentWord.indexOf(letter)=== -1) {

        alreadyGuessed.push(letter);
        alreadyGuessedDisplay.innerHTML = alreadyGuessed.join(",");
    
        document.getElementById("guessesRemaining").innerHTML -- ;}



    else
        for (var j = 0; j < currentWord.length; j++) {

            if(currentWord[j] === letter) {
                answerArray[j] = letter;
                document.getElementById("currWord").innerHTML = answerArray.join("");
                document.getElementById("guessesRemaining").innerHTML -- ;} }

                
        
            
            }
        
    




document.onkeyup = function (event) {
    
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    guesses(letterGuessed);

   
    
  };

 //let checkWin = function () {

 // if (answerArray.indexOf('_') === -1) {
   //     document.getElementById("wins").innerHTML ++;
        start();
   // } else if (maxGuesses === 0) {
   //  document.getElementById("losses").innerHTML ++;
  //   start();
   //  }

     
 // }
 
//checkWin();
//Get word//



//Guesses//










//Key Functions//











//Counter//


