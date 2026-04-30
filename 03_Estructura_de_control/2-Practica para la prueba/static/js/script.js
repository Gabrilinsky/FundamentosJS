console.log("Conexión exitosa js...")

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1(){
let nombre = "Gabriel" ;
alert(`Bienvenido ${nombre}`);
}




// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
let suma= 10 + 5; //15
alert(`La suma es: ${suma}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
let resta= 14 - 2; //12
alert(`La resta es: ${resta}`);
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4(){
let multiplicación= 6 * 4 //24
alert(`La multiplicación es: ${multiplicación}`);
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
let nota1= 6.0;
let nota2 = 5.7;
let nota3 = 5.5;
let promedio = Math.round((nota1 + nota2 + nota3) / 3);
alert(`El promedio es: ${promedio}`);
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
let edad= 17;
if (edad < 18){
    alert(`Es menor de edad`);
}else{
    alert(`Es mayor de edad`);
}
}



// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
let numero = 4
if (numero % 2 === 0){
alert(`El numero ${numero} es par`);
}else{
    alert(`El numero ${numero} es impar`);
}
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
let nota = 4.5;
if (nota >= 4.0){
    alert (`Estudiante aprobado`)
}else{
    alert(`Estudiante reporbado`)
}
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
let precio =18000;
alert(` El precio es de: ${precio}
    el descuento del 10% es: $${precio * 0.1} 
    pero con el descuento es de: ${precio - (precio * 0.10)}`);

}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
let num1= 10;
let num2= 5;
if(num1 > num2){
    alert (`El numero mayor es ${num1}`)
}else{
alert(`El numero mayor es: ${num2}`)
}
}


