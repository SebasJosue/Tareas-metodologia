//Crea un programa que pida al usuario ingresar un número y determine si es divisible por 5. 
//Imprime "Es divisible por 5" o "No es divisible por 5" según corresponda.

'use strict';


let number = parseInt(prompt("Ingrese un número"));

if (!isNaN(number)) {

    if (number % 5 === 0) {
        alert(`${number} es divisible por 5`);
    } else {
        alert(`${number} no es divisible por 5`);
    }
} else {
    alert('Por favor, ingrese un número válido.');
}
