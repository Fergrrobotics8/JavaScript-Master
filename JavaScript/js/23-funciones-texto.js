'use strict'

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de js,";
var texto2 = "es muy buen curso";

var dato = numero.toString(); //con .toString convertimos la variable en string
	dato = texto1.toUpperCase(); //para convertirlo todo en mayúsculas
	dato = texto1.toLowerCase(); //para convertirlo todo en minúsculas


console.log(typeof dato, dato);


//Calcular longitud
var nombre = "aaa";

console.log(nombre.length); //.length para definir longitud

//Concatenar/unir textos (además de el +)
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);


//Busqueda de palabras
var busqueda = textoTotal.indexOf("curso"); //si falla la busqueda o no va, devuelve un -1
var busqueda = textoTotal.lastIndexOf("curso"); //se puede añadir lastIndexOf, para que saque la última palabra
var busqueda = textoTotal.search("curso"); //search es similar a indexof
var busqueda = textoTotal.match("curso"); //devuelve un array con la palabra que ha encontrado y en donde lo ha encontrado
var busqueda = textoTotal.match(/curso/gi); //si hay mas de una palabra y queremos que nos devuelva todas en un array se pone así, gi es global, y entre barras es una expresión regular

console.log(busqueda);

//trozo de un texto
//.substr(caracter del array, numero de letras del array que sacará);
var dato = textoTotal.substr(14, 5);
console.log(dato);

//caracter en una posición
var dato1 = textoTotal.charAt(32);
console.log(dato1);

//te dice si el string empieza o acaba, por eso o no (true or false)
var dato1 = textoTotal.startsWith("buen"); //empieza
var dato2 = textoTotal.endsWith("curso");

console.log("dato1 -> "+dato1);
console.log("dato2 -> "+dato2);

//busca si hay una palabra en un array
var dato3 = textoTotal.includes("muy");
console.log(dato3);

//reemplazar un texto por otro
//.includes("texto a sustituir", "texto sustituto");
var dato4 = textoTotal.replace("buen", "mal Kappa");
console.log(dato4);

//separar un string a partir de un caracter y tmb se puede hacer hasta x caracter
var dato5 = textoTotal.slice(4);
var dato6 = textoTotal.slice(4, 23);
console.log(dato5);
console.log(dato6);

//separa en un array de arrays por cada palabra separada por lo que le indiques
var dato7 = textoTotal.split(" "); //en este caso todo lo que este separado por un espacio lo pone en una fila del array
console.log(dato7); //si no le pones nada dentro de las comillas lo mete todo en una fila, es decir mete todo el texto dentro de un array

//recorta los espacios sobrantes por delante y por detrás
var tumae = "    Hola k ase      "
var dato8 = tumae.trim();
console.log(dato8);