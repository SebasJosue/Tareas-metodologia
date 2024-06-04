'use strict'

let constoporKilometro = 0.29;

let costoarranque = 0.55;

let tarifaDia = 1.50;

let tarifaNoche = 1.75;

 


const distancia = (prompt('Ingrese la distancia del viaje en kilómetros:'));

if (distancia > 0) {
    
    let costoTotal = costoarranque + (distancia * constoporKilometro);

    
    if (costoTotal < tarifaDia) {
        costoTotal = tarifaDia;
    }

    alert(`El costo total del viaje es: $${costoTotal.toFixed(2)}`);
} else {
    alert('La distancia debe ser mayor que cero.');
}