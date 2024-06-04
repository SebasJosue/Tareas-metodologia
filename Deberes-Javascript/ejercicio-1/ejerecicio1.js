//Escribe un programa que solicite al usuario ingresar su edad y luego imprima 
//"Eres mayor de edad" si la edad ingresada es igual o mayor a 18, de lo contrario imprime "Eres menor de edad".

'use strict';

let age = parseInt(prompt('Ingrese su edad:'));

if (!isNaN(age)) {
    if (age >= 18) {
        alert('Eres mayor de edad.');
    } else {
        alert('Eres menor de edad.');
    }
} else {
    alert('Ingrese una edad adecuada.');
}

