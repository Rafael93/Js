'use strict'

//Conditional if

//if A es equal to B them do something

var edad_1 = 13;
var edad_2 = 12;

if (edad_1 > edad_2) {
    console.log("Edad 1 es mayor que edad 2");

} else {
    console.log("La edad 2 es mayor");
}

//Operadores <,>,>=,==,!=

var edad = 18;
var nombre = "Rafael Gamarra";
if (edad >= 18) {
    console.log(nombre + " es mayor de edad");
    let edad = 33;
    if (edad == 33) {
        console.log("Tienes " + edad + " años. Eres millenial");
    }
} else {
    console.log(nombre + " es menor de edad");
}

//Operadores logicos &&, !, ||

//and
var year = 2022;
if (year >= 2000 && year <= 2022 && year != 2022) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}
//or
year = 2032;
if (year == 2012 || (year >= 2022 && year == 2032)) {
    console.log("El año acabe en 2");
} else {
    console.log("año no registrado");
}