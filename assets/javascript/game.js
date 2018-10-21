
// Set of Gloabl Variables.----------

var letterSet = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 0;
var loss = 0;
var guessLeft = 10;
var usedGues = [];
var letterToGuess;


//set variable to select random letter from global variable
var randomLetter = letterSet[Math.floor(Math.random() * letterSet.length)];
//test
console.log(randomLetter);



if(guessLeft === 0){
    resetGame();

}; 


//--------functions-----------------
function printResult(){

    document.getElementById('wins').innerHTML = win;
    document.getElementById('losses').innerHTML = loss;
    document.getElementById('guessLeft').innerHTML = guessLeft
};



function resetGame(){
    var letterSet = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
    var win = 0;
    var loss = 0;
    var guessLeft = 9;
    var usedGues = [];
    var letterToGuess;
    var randomLetter = letterSet[Math.floor(Math.random() * letterSet.length)];
}


document.onkeyup = function(event){

    var userguess = event.key;

    if ( userguess === randomLetter){
        win++;
        alert('you won')
    }else{
        guessLeft--;
    };


    if(guessLeft === 0){
        loss++;
        alert('you lost');
        

    }

    printResult();
    

};



//---calls-------------------------
// printResult();



















    

   