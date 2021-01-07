'use strict'

//Pruebas con let y var. Diferencia: let es a nivel local solo (bloque), y var es a nivel global.



//Prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true) {
	var numero = 50;
	console.log(numero); //valor 50
}
console.log(numero); //valor 50


//Prueba con let
var texto = "Curso JS Fernando";
console.log(texto); //valor Fernando

if(true){
	let texto = "Curso tu tia";
	console.log(texto); //valor tia
	let tumae = 5;
	console.log(tumae);

}
console.log(texto); //valor Fernando, este devuelve el texto inicial porque la forma de declarar variables, let, se hace de forma que sea local es decir que solo se aplica dentro del if, en este caso, es decir, dentro de bloques.
console.log(tumae); //esto devuelve error porque fuera del if, la variable tumae no existe
