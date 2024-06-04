'use strict';

let cedula = prompt("¿Cuál es tu número de cédula?");

let Bienvenido = (cedula < 107950925) ?
  () => alert("Cédula correcta") :
  () => alert("Bienvenido");

Bienvenido();
