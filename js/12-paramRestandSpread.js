"use strict"

//Parametros Rest y Spread

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log("Resto de Frutas: ", ...restoDeFrutas);
}

listadoFrutas("manzana","naranja", "Sandia", "Pera", "Melon");

var frutas = ["Naranja","Manzana"]

listadoFrutas(...frutas, "sandia" , "Pera", "melon")