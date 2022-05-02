'use strict'

var edad = 75;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir mayoria de edad";
        break;
    case 25:
        imprime = "Ya eres adulto"
        break;
    case 40:
        imprime = "Crisis de los cuarenta"
        break;
    case 75:
        imprime = "Ya eres anciano"
        break;
    default:
        imprime = "Edad no registrada"
}
console.log(imprime);