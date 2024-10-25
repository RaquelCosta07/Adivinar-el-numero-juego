"use strict";

/* O que fazer

1--> Cada vez que a pagina carregar, gere um numero aleatorio!
 -gerar um numero aleatorio entre 1 e 100!
2-->    Elementos a usar na primeira parte:
    input, botao de "prueba"    
quando a usuaria introduza o numero no input e clickar no botao:
   
    - recolher essa informação
        - se o campo estiver vazio


*/


function getRandomNumber() {
    const max = 100
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber();
console.log(randomNumber);

const numberInput = document.querySelector(".js-number");
const tryButton = document.querySelector(".js-button");

const userNumber = () => {
    //recolher o numero que a usuaria coloca no numberInput
    const getNumber = numberInput.value; 
}


const handleUpdate = (ev) => {
    ev.preventDefault();
}



tryButton.addEventListener("click", handleUpdate);