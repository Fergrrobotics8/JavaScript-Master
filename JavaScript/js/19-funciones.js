'use strict'

//Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones

function porConsola(a,b){

}

function porConsola(a,b){
	
}

//Defino la funcion
function calculadora(a,b, mostrar = false){
	//Conjunto de instrucciones a ejecutar

	if(mostrar == false){
		console.log("Suma: "+(a+b));
		console.log("Resta: "+(a-b));
		console.log("Multiplicación: "+(a*b));
		console.log("División: "+(a/b));
		}else{
		document.write("Suma: "+(a+b)+"</br>");
		document.write("Resta: "+(a-b)+"</br>");
		document.write("Multiplicación: "+(a*b)+"</br>");
		document.write("División: "+(a/b)+"</br></br>");
		}

	return 0;
}

//Invocar a la función
calculadora(10,15, true);