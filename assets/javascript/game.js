
// Set of Gloabl Variables.----------

var letterSet = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 0;
var loss = 0;
var guessLeft = 10;
var usedGuess = [];


//set variable to select random letter from global variable
var randomLetter = letterSet[Math.floor(Math.random() * letterSet.length)];
//test
console.log(randomLetter);


//-----functions--------


//function to pick new letter after win or loss

function newLetter(){
    randomLetter = letterSet[Math.floor(Math.random()*letterSet.length)];
}


function printResult(){

    document.getElementById('wins').innerHTML = win;
    document.getElementById('losses').innerHTML = loss;
    document.getElementById('guessLeft').innerHTML = guessLeft
};


function resetGame(){
    guessLeft = 9;
    usedGuess.length = 0;
    newLetter();
    console.log(randomLetter);
}


//-----main------


document.onkeyup = function(event){

    var userGuess = event.key;

    if ( userGuess === randomLetter){
        win++;
        alert('you won')
        resetGame();
    };
    
    if (userGuess !== randomLetter){

        usedGuess.push(userGuess);

        guessLeft--;

        document.getElementById('currentGuess').innerHTML = usedGuess;
    };


    if(guessLeft === 0){
        loss++;
        alert('you lost');
        resetGame();

        
     }

    printResult();
    

};



//---calls-------------------------
// printResult();



















    

   