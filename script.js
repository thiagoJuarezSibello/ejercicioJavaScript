var nombre = prompt("Bienvenido! Ingrese su nombre:");
var fechaNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):");

var fechaNacimientoObj = new Date(fechaNacimiento);

var hoy = new Date();
var diasVividos = Math.floor((hoy - fechaNacimientoObj) / (1000 * 60 * 60 * 24));

alert("¡Hola " + nombre + "! Has vivido aproximadamente " + diasVividos + " días.");