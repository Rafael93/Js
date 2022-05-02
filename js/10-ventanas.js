'use strict'

//Alert

alert("This is an alert");

//Confirm

var result = confirm("Are you sure you want to leave this page?");
console.log(result);

//Promt

//Pront return a String but with this line I can change it to a number variable
var edad = Number(prompt("¿How old are you?", 18));
console.log(edad);
console.log(typeof(edad));