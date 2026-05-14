console.log("Conexión exitosa js...")







// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
let nota = 6.5;
if (nota >= 6.0) {
    alert(` El estudiante Juan tiene nota ${nota} y su resultado es: 
    Excelente rendimiento`);
} else if (nota >= 4.0) {
alert(` El estudiante Juan tiene nota ${nota} y su resultado es: 
aprobado`);
} else if (nota >= 2.0) {
alert (` El estudiante Juan tiene nota ${nota} y su resultado es: 
desaprobado`);
}
}






// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
let nombre = "Daniel";
let apellido = "Pérez"
let nombrecom = nombre + " " + apellido;
alert(`El nombre convertido es: ${nombre.toLocaleUpperCase()} ${apellido.toLocaleUpperCase()} y tiene ${nombrecom.length}
caracteres`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
let correo = "ejemplo@gmail.com";
if (correo.includes("@") && correo.includes(".")) {
alert(`El correo ${correo} es valido.`);
}else{
    alert("El correo no es válido; le falta el @ o el punto.");
    }
}
// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase= "Estoy aprendiendo JavaScript";
if(frase.length >= 20) {
alert(`La frase dice: ${frase} tiene ${frase.length} caracteres y corresponde a una frase larga`);
}else if (frase.length >= 11) {
(`La frase dice: ${frase} tiene ${frase.length} caracteres y corresponde a una frase mediana`);
}else if(frase.length >= 5) {
(`La frase dice: ${frase} tiene ${frase.length} caracteres y corresponde a una frase pequeña`);
}

}




// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
let precio= 45000;
let producto= "teclado";
alert(` El producto: ${producto.toUpperCase()} su precio final es: ${precio}
    el descuento del 20% es: $${precio * 0.2}
    pero con el descuento es de: ${precio - (precio * 0.20)}`);
}

//Ejercicio 16: Boleta de compra con clasificación de cliente
//Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
//Convertir el nombre del cliente a mayúsculas
//Determinar el tipo de cliente según el precio:
//Mayor o igual a 100.000 → Cliente Premium (20% descuento)
//Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
//Menor a 50.000 → Cliente Normal (sin descuento)
let precio = "100000";
let nombre = "Jake";
let precio2 = "50000";
let nombre2= "Mike";
let precio3 = "50000";
let nombre3 = "Ramiro"
function ejercicio16() {
alert(`El precio del cliente premium de ${nombre.toUpperCase()} y su precio es: 
${precio} el descuento del 20% es: $${precio * 0.2}
pero con el descuento es de: ${precio - (precio * 0.20)}`);
alert(`El precio del cliente frecuente de ${nombre2.toUpperCase()} y su precio es:
${precio2} el descuento del 10% es: $${precio2 * 0.1} 
pero con el descuento es de: ${precio - (precio * 0.10)}`);
alert(`El precio del cliente normal de ${nombre3.toUpperCase()} y su precio es:
${precio3} sin el descuento seria el mismo precio del cliente normal y es
$${precio3}.`)
}
//Ejercicio 17: Análisis de frase con puntuación
//Crear una función que almacene una frase y un puntaje numérico. Luego:
//Convertir la frase a minúsculas
//Contar la cantidad de caracteres
//Clasificar el puntaje:
//90 o más → Excelente
//70 o más → Bueno
//Menor a 70 → Insuficiente
let frase = "" 


//Ejercicio 18: Evaluación de tres notas con estado final
//Crear una función que almacene el nombre de un estudiante y tres notas. Luego:
//Calcular el promedio
//Convertir el nombre a mayúsculas
//Determinar el estado:
//Promedio ≥ 6.0 → Destacado
//Promedio ≥ 4.0 → Aprobado
//Promedio < 4.0 → Reprobado
function ejercicio18(){
let name = "Rafael" 
let n1 = "6.0"
let n2 = "4.0"
let n3 = "3.0"
let promedio = (n1 + n2 + n3) /3
if (nota >= 6.0) {
alert (`El estudiante ${name.toUpperCase()} esta Destacado.
\nPromedio: ${n1}
\nLargo nombre: tiene ${name.length} caracteres`);
}else if (nota >= 4.0) {
alert(`El estudiante ${name.toUpperCase()}  esta Aprobado.
\nPromedio: ${n2}
\nLargo nombre: tiene ${name.length} caracteres.`);
}else if (nota>= 3.0) {
alert(`El estudiante ${name.toUpperCase()} esta Reprobado.
\nPromedio: ${n3}
\nLargo nombre: tiene ${name.length} caracteres. `);
}
}


//Ejercicio 19: Clasificación de desempeño con más niveles
//Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

//Convertir el nombre a mayúsculas
//Clasificar el rendimiento según:
//≥ 6.5 → Sobresaliente
//≥ 6.0 → Muy buen rendimiento
//≥ 5.0 → Buen rendimiento
//≥ 4.0 → Suficiente
//< 4.0 → Insuficiente
function ejercicios19(){
let name = "Jake"
let n1 = "6.5"
let n2 = "6.0"
let n3 = "5.0"
let n4 = "4.0"
let n5 = "4.0"
let promedio = (n1 + n2 + n3 + n4 + n5) /5
if (nota >= 6.5) {
alert(`El estudiante ${name.toUpperCase()} tiene Sobresaliente
\nPromedio: ${n1}
\nLargo nombre: tiene ${name.length} caracteres.`)
}else if (nota >= 6.0) {
alert(`El estudiante ${name.toUpperCase()} tiene muy buen rendimiento
\nPromedio: ${n2}
\nLargo nombre: tiene ${name.length} caracteres.`)
}else if (nota >= 5.0){
alert(`El estudiante ${name.toUpperCase()} tiene buen rendimiento
\nPromedio: ${n3}
\nLargo nombre: tiene ${name.length} caracteres.`)
}else if (nota >= 4.0){
alert(`El estudiante ${name.toUpperCase()} tiene suficiente
\nPromedio: ${n4}
\nLargo nombre: tiene ${name.length} caracteres.`)
}else if (nota <= 4.0){
alert(`El estudiante ${name.toUpperCase()} tiene Insuficiente
\nPromedio: ${n5}
\nLargo nombre: tiene ${name.length} caracteres.`)
}
}
//Ejercicio 20: Clasificación de producto con múltiples rangos de precio
//Crear una función que almacene el nombre de un producto y su precio. Luego:

//Convertir el producto a minúsculas
//Clasificar el precio:
//≥ 200.000 → Producto de lujo
//≥ 100.000 → Producto premium
//≥ 50.000 → Producto estándar
//≥ 20.000 → Producto económico
//< 20.000 → Producto básico

let precio  = "200000"
let precio1 = "100000"
let precio2 = "50000"
let precio3 = "20000"
let precio4 = "20000"
alert(`El producto de lujo es de: $${precio} `)