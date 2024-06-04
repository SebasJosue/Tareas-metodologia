'use strict';

function esPar(num) {
    return num % 2 === 0;
}

function numeroPar() {
    alert(esPar(2));

}


let sonNumerosPares = numeroPar;

console.log(sonNumerosPares(2)); 
console.log(sonNumerosPares(5)); 