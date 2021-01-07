'use strict'

//ALERTA

alert("Mi panita");

//CONFIRMACIÓN (aceptar o rechazar)

var mi_resultado = confirm("¿Estás seguro de querer continuar?");
console.log(mi_resultado); //esto simplemente nos muestra el valor q devuelve el confirm.

//VENTANA DE INGRESO DE DATOS
//propot(pregunta, valor por defecto)
var mi_edad = prompt("¿Qué edad tienes", 18);
console.log(mi_edad); //devuelve un string
console.log(typeof mi_edad);

