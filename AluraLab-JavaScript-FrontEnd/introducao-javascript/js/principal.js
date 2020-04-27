var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
console.log(imc);


var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc

console.log(paciente); // tr
console.log(tdPeso); //peso
console.log(peso); //Obter 100

console.log(tdAltura); //Altura
console.log(altura); // Obter 2.00