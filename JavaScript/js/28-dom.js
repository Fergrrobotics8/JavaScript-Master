'use strict'

//DOM - Document Object Mode

//funcion para cambiar la pagina desde la consola
function cambiaColor(color){
	caja.style.background = color;
}


//CONSEGUIR ELEMENTOS CON UN ID CONCRETO

//hi

var caja = document.querySelector("#micaja");
//# para seleccionar el Id, sin nada para el nombre de la etiqueta y un . para seleccionar una clase
//var caja = document.getElementById("micaja");

//innerHTML se pone para capturar el codigo html o pasarlo por consola

caja.innerHTML = "!Texto en la caja desde JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola pa ti mi cola"; 


//CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todosLosDivs = document.getElementsByTagName("div");

//.textContent para sacar el contenido que tiene el div

var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");


var valor;

for(valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == "string"){
		var parrafo = document.createElement("p"); //crea etiquetas, con el p (parrafos)
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}
}
 seccion.append(hr);


//console.log(contenidoEnTexto);


//CONSEGUIR ELEMENTOS POR SU CLASE CSS

