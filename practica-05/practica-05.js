'use strict'

let kilometrosTotales = prompt("Ingrese los kilometros recorridos");

let arranque = 0.50;

let kilometrosRecorridos = 0.25;

let valor = (kilometrosRecorridos * kilometrosTotales) + arranque;

if (valor <1,5){
    
    valor = 1.5;

}

alert(valor);