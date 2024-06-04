'use strict';

function Sumar (a , b) {

   return a+b 
} function resta (a , b) {

    return a-b
}

let numero1 = parseFloat(prompt("Ingrese la primera cantidad"));

let numero2 = parseFloat(prompt("Ingrese la segunda cantidad"));



let primerResultado = Sumar (numero1 , numero2);

let segundoResulatado = resta(numero1 , numero2)

alert(`El resultado de la Suma es: ${primerResultado}`);

alert(`El resultado de la resta es: ${segundoResulatado}`);