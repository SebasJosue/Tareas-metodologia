'use strict';

//Declaracion de funcion

function validateField (isVisble , show , hide) {

    if (isVisble){
       show();

    }else{
       hide();

    }

}

// expresion de funcion

let showField = function(){

    alert ("Campo visible");
}

//funcion flecha

let hideField = () => alert("Campo oculto")

validateField(true, showField , hideField)