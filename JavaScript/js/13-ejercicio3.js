'use strict'

//Hacer un programa que muestre todos los numeros enteros entre dos numeros solicitados por el usuario

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero (tiene que ser mayor que el primero)", 0));

document.write("<h1>Del "+numero1+" a "+numero2+" están estos numeros: </h1>")
for(var i = numero1; i<=numero2; i++) {
	document.write(i+"</br>");
}