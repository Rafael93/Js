'use strict'

//Prueba con var
var numero = 40;
console.log(numero); // sale 40

if (true) {
    var numero = 50;
    console.log(numero); // sale 50
}

console.log(numero); // sale 50

//Prueba con Let

var texto = "esta cadena fue declarada con var";
console.log(texto);

if (true) {
    let texto = "esta cadena fue declarada con let";
    console.log(texto);
}

console.log(texto);

//Resultado: var actua a nivel global y let queda a nivel de bloque de codigo como en nuestro if