'use strict'

/* Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahí mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{

	var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo para realizar los cálculos finales :D", 0));
	if(isNaN(numero)){
		numero = 0;
	}else if(numero>=0){
		suma = suma + numero;
		//suma+= numero;

		contador++;
	}
	console.log("Suma = "+suma);
	console.log("Contador = "+contador);

}while(numero>=0);

alert("Suma final ="+suma);
alert("La media es ="+(suma/contador));