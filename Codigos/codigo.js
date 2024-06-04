'use strict';

let conutrys = {

    Country: 'Ecuador' ,

    Population: '17.510.643 ',

    Flag: 'Yellow, blue, red' ,

    Foundation: 'May 24, 1822' ,
};

for (let key in conutrys) {
    alert(`Propiedad: ${key}, Valor: ${conutrys[key]}`);
}