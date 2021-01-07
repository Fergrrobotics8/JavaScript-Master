'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

console.log(cine[1][2]);

//para añadir un elemento extra a la array

console.log(peliculas);
peliculas.push("Batman");
console.log(peliculas);

//eliminar el ultimo elemento de un aray

peliculas.pop();
console.log(peliculas);

//eliminar un elemento en concreto de un array

var indice = peliculas.indexOf('Gran torino');

if(indice > -1){
	peliculas.splice(indice, 1);
	//peliculas.splice(numero a partir del cual eliminar, numero de elementos a borrar a partir del elegido)
}

//convertir un array a texto separado por comas

var peliculas_string = peliculas.join();
console.log(peliculas_string);

//convertir texto a un array (ya visto btw)

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

//para ordenar un array alfabeticamente
var peliculas1 = peliculas.sort();
console.log(peliculas1);

//para darle la vuelta o invertir el array
var peliculas2 = peliculas.reverse();
console.log(peliculas2);

