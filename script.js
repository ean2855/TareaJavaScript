console.log("----- VARIABLES -----");

let nombre = "Emanuel";
let edad = 30;
let estudiante = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", estudiante);

console.log("----- TIPOS DE DATOS -----");

let ciudad = "Bayamon";
let temperatura = 85;
let activo = true;
let datoVacio = null;

console.log(ciudad);
console.log(temperatura);
console.log(activo);
console.log(datoVacio);

console.log("----- ARREGLOS -----");

let motocicletas = ["Kawasaki", "Yamaha", "Honda"];

console.log(motocicletas);

console.log("Primera motocicleta:", motocicletas[0]);
console.log("Segunda motocicleta:", motocicletas[1]);
console.log("Tercera motocicleta:", motocicletas[2]);
motocicletas.push("Suzuki");

console.log("Arreglo actualizado:");
console.log(motocicletas);

console.log("----- OBJETOS -----");

let estudianteInfo = {
    nombre: "Emanuel",
    programa: "Tecnologia de Informacion",
    universidad: "Northbridge University",
    activo: true
};

console.log(estudianteInfo);

console.log("Nombre:", estudianteInfo.nombre);
console.log("Programa:", estudianteInfo.programa);
console.log("Universidad:", estudianteInfo.universidad);

console.log("----- IF, ELSE IF Y ELSE -----");

let nota = 85;

if (nota >= 90) {
    console.log("Calificacion: A");
}
else if (nota >= 80) {
    console.log("Calificacion: B");
}
else if (nota >= 70) {
    console.log("Calificacion: C");
}
else {
    console.log("Debe mejorar la calificacion.");
}

console.log("----- CICLO FOR -----");

for (let i = 1; i <= 5; i++) {
    console.log("Numero:", i);
}

console.log("----- RECORRER ARREGLO -----");

for (let i = 0; i < motocicletas.length; i++) {
    console.log(motocicletas[i]);
}

console.log("----- CICLO WHILE -----");

let contador = 1;

while (contador <= 3) {
    console.log("Contador:", contador);
    contador++;
}

console.log("----- CICLO DO WHILE -----");

let numero = 1;

do {
    console.log("Numero:", numero);
    numero++;
}
while (numero <= 3);

console.log("----- FUNCIONES -----");

function saludar() {
    console.log("Hola, bienvenido a mi practica de JavaScript.");
}

saludar();

function mostrarNombre(nombre) {
    console.log("Hola, mi nombre es " + nombre);
}

mostrarNombre("Emanuel");

function sumar(numero1, numero2) {

    let resultado = numero1 + numero2;

    console.log("El resultado es:", resultado);
}

sumar(15, 10);

console.log("----- ALCANCE DE VARIABLES -----");

let variableGlobal = "Soy una variable global";

function ejemploAlcance() {

    let variableLocal = "Soy una variable local";

    console.log(variableGlobal);
    console.log(variableLocal);
}

ejemploAlcance();

console.log("----- CLAUSURA -----");

function crearContador() {

    let contador = 0;

    function aumentar() {

        contador++;

        console.log("Contador:", contador);
    }

    return aumentar;
}

let miContador = crearContador();

miContador();
miContador();
miContador();

