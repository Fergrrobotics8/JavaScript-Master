'use script'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenar el array y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, y que nos diga si esta en el array y su posición 
*/

// = "" es para dejar eso por default, en este caso no saldría nada.
function mostrarArray(elementos, textoCustom = ""){
	document.write("<h1>Contenido del array"+textoCustom+"</h1>");
	document.write("<ul>");
	elementos.forEach((elemento, index) => {
	document.write("<li>"+elemento+"</li>");
	});
	document.write("</ul>");
}

//1. Pide y crea array

//var numeros = new Array(6);
var numeros = [];

for(var i = 0; i <= 5; i++){
	//numeros[i] = parseInt(prompt("Introduce un numero", 0));
	numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

//2. Muestra array
mostrarArray(numeros);

console.log(numeros);



//3. Ordenar y mostrar
//sort ordena alfabéticamente, pero si queremos que lo ordene numéicamente, se le pone eso de function, fin.
//a-b lo ordena de menor a mayor. Si lo quieres de mayor a menor es b-a.
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, " ordenado");

//4. Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, " invertido");

//5. Contar indices

document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>");

//6. Busqueda
var busqueda = parseInt(prompt("Introduce el numero que quieres buscar", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion != -1){
	document.write("<hr/><h1>ENCONTRADO</h1>");
	document.write("<h1>Posición de la busqueda: "+posicion+"</h1><hr/>");	
}else{
	document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>")
}
