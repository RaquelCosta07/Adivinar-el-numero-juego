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
    criar un contador que valha 0
    Cuando a usuaria faz click en Prueba sumar 1 ao contador
*/


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


const randomNumber = getRandomNumber(100);
console.log(randomNumber);



const numberInput = document.querySelector(".js-number");
const tryButton = document.querySelector(".js-button");
const result = document.querySelector(".js-tips");
const counterElement = document.querySelector("js-counter");
//variable global para o contador:
let attempts = 0;


//En la funcion manejadora voy a ecribir todas las instrucciones que se ejecutan a raiz del evento (click):

function checkNumber () {
    //recolher o numero que a usuaria coloca no numberInput
    const userNumber = parseInt (numberInput.value); 
    //el parseInt para que transforme o input de string a numero
    

    if (userNumber < 1 || userNumber > 100) {
        result.textContent = "El número debe de estar entre 1 y 100";
    }
    else if (userNumber > randomNumber){
        result.textContent = "Pista: Demasiado alto";
    }
    else if (userNumber < randomNumber) {
        result.textContent = "Pista: Demasiado bajo";
    }
    else {
        result.textContent = "Has ganado, campeona!"
    }

   
    function setCounter() {
        // attempts = attempts + 1;
        // attempts += 1; 
        attempts ++;
        counterElement.innerHTML = "Número de intentos: " + attempts; 
    
        //counterElement.textContent = `Número de intentos: ${attempts++}`;
    }
}


const handleClickButton = (ev) => {
    ev.preventDefault();
    checkNumber();
    setCounter();
   
}

tryButton.addEventListener("click", handleClickButton);