'use strict'

//Parametros REST y  SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta1: ", fruta1);
	console.log("Fruta2: ", fruta2);
	console.log(resto_de_frutas);
}

//REST pasa los parametros sobrantes a un array
listadoFrutas("Naranja","Manzana","Coco", "Platano", "Pera");

var frutas = ["Naranja","Manzana"]
//así pasa "frutas" como parametro "fruta1" entero, para separarlo se ponen ... delante
listadoFrutas(frutas,"Coco", "Platano", "Pera"); 

//SPREAD
listadoFrutas(...frutas,"Coco", "Platano", "Pera"); 

