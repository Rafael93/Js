'use strict'


var numero = 7;

console.log(numero + " is a " + typeof(numero) + " variable");

var cadena = "'Hi I'm Rafael'";

console.log(cadena + " is a " + typeof(cadena) + " variable");

var boolean = true;

console.log(boolean + " is a " + typeof(boolean) + " variable");

//variable not defined
var persona;

console.log(persona + " is a " + typeof(persona) + " variable");

var array = ["An array"];

console.log(array + " is a " + typeof(array) + " variable");

// NaN variable
var notANumb = numero / cadena;

console.log(notANumb + " is a " + typeof(notANumb) + " variable");

//convert a string variable to a number variable
var stringToNumber = "33";
console.log(Number(stringToNumber) + numero);

console.log(parseInt(stringToNumber) + numero);

//convert a number to a string

console.log(String(numero) + numero);