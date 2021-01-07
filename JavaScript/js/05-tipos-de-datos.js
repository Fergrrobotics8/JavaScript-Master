'use strict'

//Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1+numero2; //el % devuelve el resto de la division
console.log("operación = "+operacion);

alert("El resultado de la operación es: "+operacion)

//Tipos de datos
//int (entero), string (caracteres), float (decimal), boolean (true o false)
var numero_entero = 44;
var cadena_texto = 'Hola "mi" nabo'; //se pueden usar comillas simples o dobles, pero no dos veces ya que saca a partir de la segunda lo que venga. Se pueden usar como en el ejemplo para poder sacar por pantalla las comillas dobles, poniendo simples a ambos lados en vez de dobles a ambos lados, ya que lo sacaría de la cadena de caracteres. Pero es recomendable usar siempre solo dobles si son dos unicamente para hacer cadena de caracteres.
var booleano = true;
var numero_falso = "33.7"; //esto es un texto, no un numero

console.log(cadena_texto);
console.log(booleano);
console.log(numero_falso); //lo saca como texto
console.log(Number(numero_falso)+1); //con Number() lo saca como un numero cualquiera.
console.log(parseInt(numero_falso)+1) //con parseInt lo convierte a entero 
// y con parseFLoat lo convierte en decimal y con String lo pasa a caracter

//typeof sirve para sacar el tipo de dato que és
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof booleano);
console.log(typeof numero_falso);



