'use strict';

//Foma comun
function sum (a,b) {

    return a + b;
}

//Forma "Expresion function"
let sum = function (a,b) {

    return a + b;
}

//Flecha
let sumFlecha = (a,b) => a + b;

let result = sum (2,3);

alert (result);