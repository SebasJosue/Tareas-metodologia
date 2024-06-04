'use strict';

function verificarClave(claveIngresada) {
    const claveCorrecta = 'secreto123'; 

    if (claveIngresada === claveCorrecta) {
        alert('¡Clave correcta! Acceso permitido.');
        return true;
    } else {
        alert('Clave incorrecta. Acceso denegado.');
        return false;
    }
}

let claveUsuario = prompt('Ingrese su clave:');
let accesoPermitido = verificarClave(claveUsuario);

console.log('¿Acceso permitido?', accesoPermitido);