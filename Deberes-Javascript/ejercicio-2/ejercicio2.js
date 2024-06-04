//Crea un programa que pida al usuario ingresar dos números y luego determine e imprima cuál de los dos números es mayor.

'use strict';

let number1 = parseFloat(prompt("Ingrese el primer valor"));

let number2 = parseFloat(prompt("Ingrese el segundo valor"));

if (!isNaN(number1) && !isNaN(number2)){

    if(number1 > number2){

        alert("El primer numero es mayor que el segundo");

    } else if (number1 < number2){

        alert("El segundo numero es mayor que el primero");

    } else {
       
        alert("ambos numeros son iguales");

    }
    
} else {

    alert("Por favor ingrese dos valores numericos validos");
}