'use strict';
function mostrarMensaje(){
      alert("Hola");
}

function mostrarMensajeConNombre(nombre){

    alert("Hola"+ nombre);
}

mostrarMensajeConNombre("Erick");


function generarFrase(){

  return 'hola mundo';
}

let result;

result = generarFrase();
//alert ("El valor de retorno de la funcion es :");

function sum(primerValor , segundoValor){

    let result = primerValor+segundoValor;

    return result
}

let resultado = sum(3,6);
