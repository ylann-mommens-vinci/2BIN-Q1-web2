let counter = 0;

let message = document.querySelector('.message');
let counterText = document.querySelector('.counter');
window.addEventListener('click', () => {
    counter++;
    counterText.textContent = `I have been clicked ! ${counter} time`;
    
    if(counter == 5)
        message.textContent = "Bravo, bel échauffement !"
    if(counter == 10) 
        message.textContent = "Vous êtes passé maître en l'art du clic !";

    console.log(counterText.textContent);
});

/*
let btnReset = document.querySelector('#resetBtn')
btnReset.addEventListener('click',(e) =>{
    e.stopPropagation();

    counter = 0;
    counterText.textContent = `I have been clicked ! ${counter} time`;
    console.log("On Reset le compteur")
});
*/