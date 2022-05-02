'use strict'

/*Ask to numbers to compare if they are equal, which one is 
bigger and which is smaller.*/
/*
var number1 = Number(prompt("Enter de firts number", 1));
var number2 = Number(prompt("Enter de second number", 2));

while (number1 <= 0 || number2 <= 0 || isNaN(number1) == true || isNaN(number2) == true) {
    number1 = Number(prompt("Enter de firts number", 1));
    number2 = Number(prompt("Enter de second number", 2));
}
if (number1 > number2) {
    alert("Number one: " + number1 + " is bigger than Number two: " + number2);
} else if (number2 > number1) {
    alert("Number two: " + number2 + " is bigger than Number one: " + number1);
} else if (number1 == number2) {
    alert("Number one: " + number1 + " is equal to number two: " + number2);
}*/

//Exercise 2
/*
var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Insert numbers until you insert a negative one", 0));

    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma += numero;
        contador++;
    }
    console.log("The Sum is: " + suma);
    console.log("The counter is " + contador);
} while (numero >= 0)

alert("The Sum is: " + suma);
alert("The average is " + (suma / contador));
*/

//Exercise 3
/*
var number1 = parseInt(prompt("Insert the firts number: ", 0));
var number2 = parseInt(prompt("Insert the second number: ", 0));

//show the numbers between the two numbers given by the user

for (var i = number1; i <= number2; i++) {
    console.log(i)
}
*/

//Excercise 4
/*
var number1 = parseInt(prompt("Insert the firts number: ", 0));
var number2 = parseInt(prompt("Insert the second number: ", 0));

//Show the odd numbers between the insert numbers

while (number1 < number2) {
    number1++;
    if (number1 % 2 != 0) {
        console.log(number1 + " is odd");
    }
}
*/
/*
//Exercise 5

//Show all the numbers divisibles between 1 to the insterted number

var number1 = parseInt(prompt("Insert the number: ", 1));

for (var i = 1; i <= number1; i++) {
    if (number1 % i == 0) {
        console.log("Divisor: " + i);
    }
}
*/

//Exercise 6

/*Tell if a number is even or odd. rejet invalid inserts*/
/*
var number = parseInt(prompt("Insert the number: ", 1));

while (isNaN(number)) {
    alert("You not insert a number")
    number = parseInt(prompt("Insert the number: ", 1))
}
if (number % 2 != 0) {
    console.log(number + " is odd");
} else {
    console.log(number + " is even");
}
*/

//Exercise 7

//Multiplication table from the number inserted
/*
var number = parseInt(prompt("Insert the number", 10));

for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}
*/

//Multiplication tables from 1 to 110
/*
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (j * i));
    }
}
*/