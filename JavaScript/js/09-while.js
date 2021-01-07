'use strict'

//Bucle WHILE

var year = 2018;

while(year<=2020){
	console.log(year);

	year++;
}

while(year!=2000){
	console.log(year);

	if(year == 2005){
		break;		//Break sirve para salir de la estructura de control cuando lo necesitemos.
	}

	year--;
}


//Bucle do while

var years = 21;

do{
	alert("Solo cuando sea diferente a 20")
	years = 20;
}while(years != 20);