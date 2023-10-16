let clickCounter = 0;
let winCounter = 10;

const delayMax = 5;
let startTime;

const btn1 = document.querySelector("#myBtn1");

btn1.addEventListener("click", clicker);       //quand on clique sur le bouton
btn1.addEventListener('mouseenter', game);  //quand on passe sur le bouton


//On commence le jeu
function game(){
    startTime = new Date();
    temp = setTimeout(loseMessage, delayMax *1000);
}

function clicker(){
    ++clickCounter;
    if(clickCounter === winCounter){
        clearTimeout();
        winMessage();
    }
}

function winMessage (){
    const duration = new Date().getTime() - startTime.getTime(); 
    alert(`You win ! You clicked ${clickCounter} times within ${duration/1000}s`);
}

function loseMessage(){
    alert(`Game over, you did not click  ${winCounter} times within ${delayMax}s`);
}


