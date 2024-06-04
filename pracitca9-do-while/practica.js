'use strict';

let premios = 7;
let num;


let cont = 0;

 
do {

    if (cont >=3) {

        alert("Perdiste. Agotaste tus intentos");

        break;
    }

    cont ++;
    num = Number(prompt("Ingrese el numero"));
} while (num!== premios);

if(num === premios) {

    alert("ganaste");

}else {

    alert("Suerte para la proxima")
}

