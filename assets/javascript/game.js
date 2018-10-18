
// Set of Gloabl Variables.

var letterSet = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 0;
var loss = 0;
var guess = 9;
var usedGues = [];
// Code to select random letter. 
    var randomLetter = letterSet[Math.floor(Math.random() * letterSet.length)];
    console.log(randomLetter);


// New letter after win or loss
    function newLetter(){
        randomLetter = letterSet[Math.floor(Math() * letterSet.length)]
    };



    document.onkeyup = function(event){
        var guess = event.key;

        if(guess === randomLetter){
            win++;
        }else{
            guess - 1;
        };
        if(guess === 0){
            loss++;
        };
    

    document.getElementById("wins").innerHTML = win;
    document.getElementById("losses").innerHTML = loss;
    document.getElementById("guessLeft").innerHTML = guess;
    // document.getElementById("currentGuess").innerHTML = usedGuess;
    };