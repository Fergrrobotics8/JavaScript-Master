'use strict'; //Lo primero es recomendable usarlo siempre. 'use strict2 para usar el modo estricto, para ser más restrictivo y correcto. Además permite nuevas funcionalidades de java. Por ejemplo, escribir variables sin declarar var previamente, se puede hacer sin modo estricto pero si no pones var delante en modo strict al declarar una nueva variable te dara error.


//VARIABLES - ahora se pueden declarar variables con var o con let -> ver 03
//Una variable es un contenedor de información

var pais = "España";
var continente = "Europa";
var antiguedad = 2020;
var pais_y_continente = pais+' y '+continente; //+' '+ se usa para poner un espacio y poder escribir dos palabras o variables juntas, es decir concatenar dos palabras y mostrarlas separadas por un ' ' espacio. Igual que se pone un espacio se podría poner 'y' o cualquier conjunción, cosa o lo que nos de la gana.

pais = "México";
continente = "Latinoamérica";

console.log(pais, continente, antiguedad);
alert(pais_y_continente);