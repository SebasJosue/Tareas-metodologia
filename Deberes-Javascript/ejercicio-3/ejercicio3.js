//Desarrolla un programa que pida al usuario ingresar un número y determine si es par o impar. Imprime el resultado correspondiente.

'use strict';

let number = parseInt(prompt("Ingrese un numero"));

if  (!isNaN(number)) {

    if (number % 2 === 0) {
         alert(`${number} es un numero par`);
    } else {
         alert(`${number} es un numero impar`);
    }
} else {

    alert ('Por favor ingrese un numero valido');
}