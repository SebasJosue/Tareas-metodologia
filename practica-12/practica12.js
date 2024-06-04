'use strict';

/*
Escribir una funcion que escriba como argumento la 
edad de una persona y devuelva tru si es mayor a 18
y false si es menor

*/


function calcularEdad (edad) {

    /*if (edad <= 19) {

    return true;
    } else {
    return false;
    } */
    
    return ( edad >= 19);
}

let ingreseEdad = Number(prompt("Ingrese su edad"));

let esMayor = calcularEdad(ingreseEdad);

alert("¿Es mayor de edad ?" + esMayor);
