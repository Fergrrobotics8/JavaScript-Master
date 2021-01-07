'use strict'

//Funciones anonimas (CALLBACK)
//Es una funcion que no tiene nombre

var pelicula = function(nombre){
	return "La película es: "+nombre;
}

function sumame(a, b, sumaYmuestra, sumaPorDos){
	var sumar = a + b;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}

//funciones de callback, son las que no tienen nombre, ya que se pasan como dato, para ser utilizadas en otra funcion
//aqui son function(dato), que previamente reciben el nombre de sumaYmuestra y sumaPorDos, pero da igual porque se usan despues de su definición, por eso son anonimas.
//se utilizan sobretodo en jquery

sumame(5, 7, function(dato){
	console.log("La suma es: ", dato);
}, 
function(dato){
	console.log("La suma por dos es: ", (dato*2));
});

/////////////////////////////////////////////////////////////

//se pueden simplificar estas funciones de callback, con funciones de flecha
//Tmb se pueden poner paréntesis (dato)
sumame(5, 7, dato => {
	console.log("La suma es: ", dato);
}, 
dato => {
	console.log("La suma por dos es: ", (dato*2));
});