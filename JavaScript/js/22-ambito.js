'use strict'

function holaMundo(texto){
	var hola_mundo = "Recagaste wey";

	console.log(texto);
	console.log(numero);
	console.log(hola_mundo);
}

var numero = 12; //aunque esta variable no se pasa a la funcion, la propia función puede llamarla desde fuera hacia dentro, es decir que si esta fuera la puede ver.

var texto = "Hola mundo soy una variable global";
holaMundo(texto);

//Sin embargo al contrario, hola_mundo, solo es accesible dentro de la función y no existe fuera
