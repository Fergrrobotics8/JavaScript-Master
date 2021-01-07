'use strict'

//Tabla de multiplicar de un número

var numero = parseInt(prompt("Introduce un número",1));

document.write("<h2>La tabla del "+numero+"</h2>");
for(var i = 0; i<=10; i++) {
	document.write(i+" x "+numero+" = "+(i*numero)+"</br>");
}