'use strict'

//Arrays, Arreglos, Matrices

var nombre = "Fernando García";
var nombres = ["Fernando García", "Juanito", "Juano"];

var lenguajes = new Array("PHP", "JS", "Go", "Java");

console.log(nombres[2]);
console.log(lenguajes);

var posición = parseInt(prompt("Que posición del array quieres?", 0));
alert(nombres[posición]);


document.write("<ul>");

lenguajes.forEach((elemento, index, data) => {

	//elemento es el array, index, la posición en cada momento, y data el array original

	document.write("<li>"+index+" - "+elemento+"</li>");
});

document.write("</ul>");



//recorrer un array

document.write("<ul>");

for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");


//Buscar en un array, un elemento y su posicion
/* Esto es lo mismo que lo siguiente, con una funcion de flecha
var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP";
});
*/
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

console.log(busqueda); //si falla la busqueda devuelve undefined

	//posicion en el array o index
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

console.log(busqueda);


//buscar si existe la condición que se pide, dentro del array (true or false)

var precios = [10, 20, 50, 80, 12];
var busqueda = precios.some(precio => precio >=20);

console.log(busqueda);
