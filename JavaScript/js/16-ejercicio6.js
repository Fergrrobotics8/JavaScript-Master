'use strict'

//Hacer un programa que nos diga si el numero es par o impar
/*
1. Ventana prompt
2. si no es válido que nos pida de nuevo el numero
*/

var numero = parseInt(prompt("Introduce un numero", 0));

while(isNaN(numero)){
	numero = parseInt(prompt("Introduce un numero", 0));
}

if(numero%2 == 0){
	alert("Es un numero par");

}else{
	alert("Es un numero impar");
}