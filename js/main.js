"use strict";

/* O que fazer

1--> Cada vez que a pagina carregar, gere um numero aleatorio!
 -gerar um numero aleatorio entre 1 e 100!
2-->    Elementos a usar na primeira parte:
    input, botao de "prueba"    
quando a usuaria introduza o numero no input e clickar no botao:
   
    - recolher essa informação
3-->
    Elementos: Input da usuaria, campo da pista
        - se, o numero da usuaria for menor que 1 ou maior que 100: mostrar a mensagem "El número debe de estar entre 1 y 100", no campo Pista;
        - se, o numero da usuaria (numberInput) for > que o numero aleatorio: mostrar mensagem "Demasiado alto"
        - se, o numero da usuaria (numberInput) for < que o numero aleatorio: mostrar mensagem "Demasiado bajo"
        - se, o numero da usuaria (numberInput) for = ao numero aleatorio: mostrar mensagem "Has ganado campeona"
        

4-->
    Elementos: input, numero de intentos field

*/


function getRandomNumber() {
    const max = 100
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber();
console.log(randomNumber);

const numberInput = document.querySelector(".js-number");
const tryButton = document.querySelector(".js-button");
const result = document.querySelector(".js-tips");

function checkNumber () {
    //recolher o numero que a usuaria coloca no numberInput
    const userNumber = numberInput.value; 
    const counterElement = document.querySelector("js-counter");

    //si es numero < 1 o > 100

    if (userNumber < 1 || userNumber > 100) {
        result.textContent = "El número debe de estar entre 1 y 100";
    }
    else if (userNumber > randomNumber){
        result.textContent = "Demasiado alto";
    }
    else if (userNumber < randomNumber) {
        result.textContent = "Demasiado bajo";
    }
    else {
        result.textContent = "Has ganado, campeona!"
    }

    attemptCount++;
    counterElement.textContent = `Número de intentos: ${attemptCount}`;
}



const handleUpdate = (ev) => {
    ev.preventDefault();
    checkNumber();
    attemptCount();
}

tryButton.addEventListener("click", handleUpdate);