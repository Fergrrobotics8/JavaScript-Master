'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir
*/

var numero1 = parseInt(prompt("Introduzca el primer número", 0));
var numero2 = parseInt(prompt("Introduzca el segundo número", 0));

console.log("El número 1 es el "+numero1+" y el número 2 es el "+numero2);

while(numero1<=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2) ){ 

	//isNaN es una función que devuelve true si el parametro es NotaNumber, no es un numero.

	numero1 = parseInt(prompt("Introduzca de nuevo el primer número", 0));
	numero2 = parseInt(prompt("Introduzca de nuevo el segundo número", 0));
}

if (numero1>numero2) {
	alert("El número 1 es mayor que el número 2");
} else if(numero1 == numero2) {
	alert("Los número son iguales");
} else if (numero1<numero2) { 
	alert("El número 2 es mayor que el número 1");
} else{ //el else final no lleva condicion
	alert("Introduzca los números correctamente");
}