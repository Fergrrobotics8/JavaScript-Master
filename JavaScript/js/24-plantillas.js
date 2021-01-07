'use strict'

//Plantillas de texto

var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus apellidos");

var texto = "Mi nombre es: "+nombre+"."+"</br>Mis apellidos son: "+apellidos+".";
document.write(texto);

//lo mismo pero versión plantilla con el uso de `` (tecla a la derecha de la P)

var texto = `
	<h1>Hola que tal</h1>
	<p>Mi nombre es: ${nombre}.</p>
	<p>Mis apellidos son: ${apellidos}.</p>

`;
document.write(texto);