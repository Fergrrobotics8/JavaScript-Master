'use strict'

//Condicional IF

/*
//Operadores relacionales
	Mayor: >
	Menor: <
	Mayor o igual: >=
	Menor o igual: <=
	Igual: ==
	Distinto de: !=

*/

var edad= 30;
var nombre = "Ramón";

if (edad>18) {
	//Es mayor de edad
	console.log(nombre+" tiene "+edad+" años, es mayor de edad.")
}
else{
	console.log("La edad 2 es mayor que la edad 1")
}

/*
//Operadores lógicos
	AND(Y): &&
	OR(O): ||
	Negación: !
*/

//Switch
switch(edad) {
	case 18:
		console.log("Tienes "+edad+" años.");
	break;
	case 30:
		console.log("Tienes más de 18 años");
	break;
	default:
		console.log("Si no tienes 18 años o 30, has introducido mal la edad vuelve a intentarlo más tarde");
	break;
}
