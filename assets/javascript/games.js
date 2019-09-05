//Words//

let wordsArray = ["monica", "chandler", "joey", "phoebe", "rachel", "ross" ];
let currentWord = wordsArray[Math.floor(Math.random() * (wordsArray.length ))];



// Game Variables//


let alreadyGuessed = [];
let alreadyGuessedDisplay = document.getElementById("alreadyGuessed"); 
let wins = document.getElementById("wins").innerHTML = 0;
let losses = document.getElementById("losses").innerHTML = 0;
let maxGuesses = document.getElementById("guessesRemaining").innerHTML ;
let guessesRemaining ;
let currentWordIndex 
let answerArray = [];



   


let start = function (){
    alreadyGuessedDisplay.innerHTML = ( " " )
    alreadyGuessed = [ ];
    answerArray = [ ];
    document.getElementById("guessesRemaining").innerHTML = 10;
    


    for (var i = 0; i < currentWord.length; i++) {
        answerArray.push( "_" ); }
    
    
        document.getElementById("currWord").innerHTML = answerArray.join( " " );
    
    
        
        
    
    
    }




let guesses = function (letter) {

    
 if(currentWord.indexOf(letter) === -1) {

        alreadyGuessed.push(letter);
        alreadyGuessedDisplay.innerHTML = alreadyGuessed.join( "," );
    
        document.getElementById("guessesRemaining").innerHTML -- ;
    
        
    }



    else
        for (var j = 0; j < currentWord.length; j++) {

            if(currentWord[j] === letter) {
                answerArray[j] = letter;
                document.getElementById("currWord").innerHTML = answerArray.join( " " );
                document.getElementById("guessesRemaining").innerHTML -- ;}
                
            
            }

                
        
            
            }
        
    
            



document.onkeyup = function (event) {

    
    
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    guesses(letterGuessed);

    checkWin();
    
  };

 let checkWin = function () {

if ( answerArray.indexOf( "_" ) === -1) {
      document.getElementById("wins").innerHTML ++;
        alert("Great Job!");
        start();
        
  } 
  
  else if (document.getElementById("guessesRemaining").innerHTML === "0") {
     document.getElementById("losses").innerHTML ++;
   start();
   
  } }

  start();
    
  
  
  
 

//Get word//



//Guesses//










//Key Functions//











//Counter//


