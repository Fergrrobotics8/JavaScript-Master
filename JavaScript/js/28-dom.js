'use strict'

//DOM - Document Object Mode

//funcion para cambiar la pagina desde la consola
function cambiaColor(color){
	caja.style.background = color;
}


//CONSEGUIR ELEMENTOS CON UN ID CONCRETO


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


var contenidoEnTexto = todosLosDivs[2]
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
//esto sustituye el contenido del div [2] que esta en el array todosLosDivs

contenidoEnTexto.style.background = "red";

var valor;
//todosLosDivs.forEach((valor,indice)=>{
for(valor in todosLosDivs){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosLosDivs[valor].textContent);
	parrafo.appendChild(texto);
	document.querySelector("#miSeccion").appendChild(parrafo);
}
//});


var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");



var valor;

for(valor in todosLosDivs){
	console.log(valor);
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

