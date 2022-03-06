const easy = document.querySelector('.easy');
const hard = document.querySelector('.hard');
const gameInfo = document.querySelector(".gameInfo");
   const newGame = document.querySelector(".newGame");

let prevGuess =  [];


const inputText = document.getElementById("inputText");


let  computerGuess = Math.floor(Math.random() * 100);
// console.log(computerGuess);

const init = ()=>{
  let computerGuess = Math.floor(Math.random() * 100);
}

function showGame(){
   const gameArea = document.getElementById("gameArea");
   const startingSreen = document.getElementById("startingSreen");
   const newGame = document.querySelector(".newGame");
   gameArea.style.display = 'block';
   startingSreen.style.display = 'none';
   newGame.style.display = 'none';
}

 newGame.addEventListener("click", function () {
   window.location.reload();
 });

const startNewGame = ()=>{
      
    const newGame = document.querySelector(".newGame");
    newGame.style.display = "block";
    inputText.setAttribute("disabled", true);

}



function compareGuess(){
    let userGuess = Number(inputText.value);
    prevGuess = [ ...prevGuess , userGuess];
    document.getElementById('prev').textContent = prevGuess;
    console.log(userGuess);

    if(prevGuess.length < maxGuess){
      if(userGuess > computerGuess){
         gameInfo.textContent = 'Your Guess is High 😲'
         inputText.value = "";
     }else if(userGuess < computerGuess){
        gameInfo.textContent = 'Your Guess is Low 😶'
       inputText.value = "";

     }else{
        gameInfo.textContent = "Boom...! It's Correct";
        
        startNewGame();
     }
}   else{
          if (userGuess > computerGuess) {
            gameInfo.textContent = `Your Loose ..! Correct Number was ${computerGuess}`;
            inputText.value = "";
            startNewGame();
          } else if (userGuess < computerGuess) {
            gameInfo.textContent = `Your Loose ..! Correct Number was ${computerGuess}`;
            inputText.value = "";
            startNewGame();
          } else {
            gameInfo.textContent = "Boom...! It's Correct";
            startNewGame();
        }
        
}
     
    document.getElementById('attemp').textContent = prevGuess.length;

}

inputText.addEventListener('change' , compareGuess)

easy.addEventListener("click", function(){ 
     maxGuess = 10;
    showGame();
}
);
hard.addEventListener("click", function(){ 
     maxGuess = 5;
    showGame();
}
);